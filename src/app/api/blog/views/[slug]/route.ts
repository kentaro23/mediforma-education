import { NextRequest, NextResponse } from "next/server";

const SLUG_PATTERN = /^[a-z0-9-]{1,120}$/;
const VIEW_COOKIE_TTL_SECONDS = 60 * 60 * 24;

function getKvConfig() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  return { url, token, enabled: Boolean(url && token) };
}

function getViewKey(slug: string) {
  return `blog:views:${slug}`;
}

function getViewCookieName(slug: string) {
  return `blog-viewed-${slug}`;
}

async function kvGet(key: string) {
  const { url, token, enabled } = getKvConfig();
  if (!enabled || !url || !token) return null;

  const response = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });

  if (!response.ok) return null;
  const data = (await response.json()) as { result?: string | number | null };
  const parsed = Number(data.result ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

async function kvIncr(key: string) {
  const { url, token, enabled } = getKvConfig();
  if (!enabled || !url || !token) return null;

  const response = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });

  if (!response.ok) return null;
  const data = (await response.json()) as { result?: string | number | null };
  const parsed = Number(data.result ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function GET(_: NextRequest, context: { params: { slug: string } }) {
  const slug = context.params.slug;
  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ error: "invalid_slug" }, { status: 400 });
  }

  const count = await kvGet(getViewKey(slug));
  const enabled = getKvConfig().enabled;
  return NextResponse.json({ enabled, count: count ?? 0 });
}

export async function POST(request: NextRequest, context: { params: { slug: string } }) {
  const slug = context.params.slug;
  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ error: "invalid_slug" }, { status: 400 });
  }

  const enabled = getKvConfig().enabled;
  if (!enabled) {
    return NextResponse.json({ enabled: false, count: 0 });
  }

  const key = getViewKey(slug);
  const cookieName = getViewCookieName(slug);
  const alreadyViewed = request.cookies.get(cookieName)?.value === "1";

  const count = alreadyViewed ? await kvGet(key) : await kvIncr(key);
  const response = NextResponse.json({ enabled: true, count: count ?? 0 });

  if (!alreadyViewed) {
    response.cookies.set({
      name: cookieName,
      value: "1",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: VIEW_COOKIE_TTL_SECONDS,
      path: "/"
    });
  }

  return response;
}
