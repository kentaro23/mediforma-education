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

function toCustomerReplyText(data: ContactPayload) {
  return [
    `${data.name} 様`,
    "",
    "このたびはMediforma Educationへお問い合わせいただき、ありがとうございます。",
    "以下の内容で受け付けました。担当より2営業日以内にご連絡いたします。",
    "",
    "----- お問い合わせ内容（控え） -----",
    toPlainText(data),
    "------------------------------------",
    "",
    "Mediforma Education",
    "https://www.mediformaedu.com",
    `電話: 080-9322-6024`,
    `メール: ${CONTACT_TO}`
  ].join("\n");
}

async function sendToSmtp(data: ContactPayload): Promise<DeliveryResult> {
  const host = (process.env.SMTP_HOST ?? "").trim();
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = (process.env.SMTP_USER ?? "").trim();
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return { ok: false, channel: "smtp", detail: "missing-smtp-env" };
  }

  const normalizedPass = pass.replace(/\s+/g, "");
  const nodemailer = await import("nodemailer");

  const from = process.env.CONTACT_FROM_EMAIL ?? user;
  const adminSubject = `【Mediforma Education】お問い合わせ: ${data.name}`;
  const adminText = toPlainText(data);
  const customerSubject = "【Mediforma Education】お問い合わせありがとうございます";
  const customerText = toCustomerReplyText(data);

  try {
    const gmailTransport = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass: normalizedPass }
    });
    await gmailTransport.sendMail({
      from,
      to: CONTACT_TO,
      replyTo: data.email,
      subject: adminSubject,
      text: adminText
    });
    await gmailTransport.sendMail({
      from,
      to: data.email,
      replyTo: CONTACT_TO,
      subject: customerSubject,
      text: customerText
    });
    return { ok: true, channel: "smtp", detail: "sent:gmail-service+receipt" };
  } catch (error) {
    if (!host) {
      const detail = error instanceof Error ? `send-failed:${error.message}` : "send-failed:unknown";
      return { ok: false, channel: "smtp", detail };
    }

    try {
      const fallbackTransport = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        requireTLS: port !== 465,
        auth: { user, pass: normalizedPass }
      });
      await fallbackTransport.sendMail({
        from,
        to: CONTACT_TO,
        replyTo: data.email,
        subject: adminSubject,
        text: adminText
      });
      await fallbackTransport.sendMail({
        from,
        to: data.email,
        replyTo: CONTACT_TO,
        subject: customerSubject,
        text: customerText
      });
      return { ok: true, channel: "smtp", detail: "sent:custom-host+receipt" };
    } catch (fallbackError) {
      const detail =
        fallbackError instanceof Error
          ? `send-failed:${fallbackError.message}`
          : error instanceof Error
            ? `send-failed:${error.message}`
            : "send-failed:unknown";
      return { ok: false, channel: "smtp", detail };
    }
  }
}

async function sendToResend(apiKey: string, data: ContactPayload): Promise<DeliveryResult> {
  const from = process.env.CONTACT_FROM_EMAIL ?? "Mediforma Education <onboarding@resend.dev>";
  const adminResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject: `【Mediforma Education】お問い合わせ: ${data.name}`,
      text: toPlainText(data)
    })
  });

  if (!adminResponse.ok) {
    return { ok: false, channel: "resend", detail: `status:${adminResponse.status}` };
  }

  const customerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      from,
      to: [data.email],
      reply_to: CONTACT_TO,
      subject: "【Mediforma Education】お問い合わせありがとうございます",
      text: toCustomerReplyText(data)
    })
  });

  return {
    ok: customerResponse.ok,
    channel: "resend",
    detail: customerResponse.ok ? "sent:resend+receipt" : `status:${customerResponse.status}`
  };
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

  const resendKey = process.env.RESEND_API_KEY;
  const attempts: DeliveryResult[] = [];

  try {
    const smtpResult = await sendToSmtp(data);
    attempts.push(smtpResult);
    if (smtpResult.ok) {
      return NextResponse.json({ ok: true, channel: smtpResult.channel });
    }

    if (resendKey) {
      const resendResult = await sendToResend(resendKey, data);
      attempts.push(resendResult);
      if (resendResult.ok) {
        return NextResponse.json({ ok: true, channel: resendResult.channel });
      }
    }

    return NextResponse.json({ ok: false, attempts }, { status: 502 });
  } catch {
    return NextResponse.json({ ok: false, attempts }, { status: 502 });
  }
}
