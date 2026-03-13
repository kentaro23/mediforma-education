import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  furigana: string;
  relation: string;
  email: string;
  phone?: string;
  school?: string;
  grade: string;
  interests: string[];
  message?: string;
  agreed: boolean;
};

type DeliveryResult = {
  ok: boolean;
  channel: "smtp" | "webhook" | "resend" | "formsubmit";
  detail?: string;
};

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ??
  process.env.CONTACT_TO_MAIL ??
  "education@mediforma.jp";

function toPlainText(data: ContactPayload) {
  return [
    "Mediforma Education お問い合わせ",
    "",
    `お名前: ${data.name}`,
    `フリガナ: ${data.furigana}`,
    `生徒との関係: ${data.relation}`,
    `メールアドレス: ${data.email}`,
    `電話番号: ${data.phone || "未入力"}`,
    `在籍高校名: ${data.school || "未入力"}`,
    `学年: ${data.grade}`,
    `興味のある講座: ${data.interests.length > 0 ? data.interests.join(" / ") : "未選択"}`,
    "",
    "ご質問・ご相談内容:",
    data.message?.trim() || "未入力"
  ].join("\n");
}

async function sendToWebhook(endpoint: string, data: ContactPayload): Promise<DeliveryResult> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return { ok: response.ok, channel: "webhook", detail: `status:${response.status}` };
}

async function sendToSmtp(data: ContactPayload): Promise<DeliveryResult> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return { ok: false, channel: "smtp", detail: "missing-smtp-env" };
  }

  const normalizedPass = pass.replace(/\s+/g, "");
  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: normalizedPass }
  });

  const from = process.env.CONTACT_FROM_EMAIL ?? user;
  const subject = `【Mediforma Education】お問い合わせ: ${data.name}`;
  const text = toPlainText(data);

  try {
    await transport.verify();
    await transport.sendMail({
      from,
      to: CONTACT_TO,
      replyTo: data.email,
      subject,
      text
    });
    return { ok: true, channel: "smtp", detail: "sent" };
  } catch (error) {
    const detail =
      error instanceof Error ? `send-failed:${error.message}` : "send-failed:unknown";
    return { ok: false, channel: "smtp", detail };
  }
}

async function sendToResend(apiKey: string, data: ContactPayload): Promise<DeliveryResult> {
  const from = process.env.CONTACT_FROM_EMAIL ?? "Mediforma Education <onboarding@resend.dev>";
  const subject = `【Mediforma Education】お問い合わせ: ${data.name}`;
  const text = toPlainText(data);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject,
      text
    })
  });

  return { ok: response.ok, channel: "resend", detail: `status:${response.status}` };
}

async function sendToFormSubmit(data: ContactPayload): Promise<DeliveryResult> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: toPlainText(data),
      _subject: `【Mediforma Education】お問い合わせ: ${data.name}`,
      _captcha: "false",
      _template: "table"
    })
  });

  return { ok: response.ok, channel: "formsubmit", detail: `status:${response.status}` };
}

export async function POST(request: Request) {
  const raw = (await request.json()) as Partial<ContactPayload>;
  const data: ContactPayload = {
    name: String(raw.name ?? ""),
    furigana: String(raw.furigana ?? ""),
    relation: String(raw.relation ?? ""),
    email: String(raw.email ?? ""),
    phone: raw.phone ? String(raw.phone) : "",
    school: raw.school ? String(raw.school) : "",
    grade: String(raw.grade ?? ""),
    interests: Array.isArray(raw.interests) ? raw.interests.map((item) => String(item)) : [],
    message: raw.message ? String(raw.message) : "",
    agreed: Boolean(raw.agreed)
  };

  if (!data.name || !data.furigana || !data.email || !data.agreed) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  const resendKey = process.env.RESEND_API_KEY;
  const attempts: DeliveryResult[] = [];

  try {
    const smtpResult = await sendToSmtp(data);
    attempts.push(smtpResult);
    if (smtpResult.ok) {
      return NextResponse.json({ ok: true, channel: smtpResult.channel });
    }

    if (endpoint) {
      const webhookResult = await sendToWebhook(endpoint, data);
      attempts.push(webhookResult);
      if (webhookResult.ok) {
        return NextResponse.json({ ok: true, channel: webhookResult.channel });
      }
    }

    if (resendKey) {
      const resendResult = await sendToResend(resendKey, data);
      attempts.push(resendResult);
      if (resendResult.ok) {
        return NextResponse.json({ ok: true, channel: resendResult.channel });
      }
    }

    const formsubmitResult = await sendToFormSubmit(data);
    attempts.push(formsubmitResult);
    if (formsubmitResult.ok) {
      return NextResponse.json({ ok: true, channel: formsubmitResult.channel });
    }

    return NextResponse.json({ ok: false, attempts }, { status: 502 });
  } catch {
    return NextResponse.json({ ok: false, attempts }, { status: 502 });
  }
}
