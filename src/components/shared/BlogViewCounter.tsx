"use client";

import { useEffect, useState } from "react";

type BlogViewCounterProps = {
  slug: string;
  className?: string;
};

type ViewApiResponse = {
  enabled: boolean;
  count: number;
};

export function BlogViewCounter({ slug, className = "" }: BlogViewCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function trackView() {
      try {
        const response = await fetch(`/api/blog/views/${slug}`, {
          method: "POST",
          cache: "no-store"
        });
        if (!response.ok) return;
        const data = (await response.json()) as ViewApiResponse;
        if (!mounted) return;
        setEnabled(data.enabled);
        setCount(data.count);
      } catch {
        // no-op
      }
    }

    trackView();
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!enabled || count === null) return null;

  return (
    <p className={`text-sm text-white/75 ${className}`.trim()}>
      閲覧数: {count.toLocaleString("ja-JP")}回
    </p>
  );
}
