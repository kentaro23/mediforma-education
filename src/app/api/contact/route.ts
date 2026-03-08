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

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  if (!data.name || !data.furigana || !data.email || !data.agreed) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    const forwardResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!forwardResponse.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
