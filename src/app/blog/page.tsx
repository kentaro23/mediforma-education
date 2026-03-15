import type { Metadata } from "next";
import Link from "next/link";
import { blogPageContent, blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "ブログ | Mediforma Education",
  description:
    "北里大学医学部 指定校推薦対策を中心に、面接・小論文・医療時事の実践ノウハウを発信するMediforma Education公式ブログ。"
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(value)
  );
}

export default function BlogPage() {
  const listItems = [
    {
      slug: "kitasato-shiteiko-mensetsu-shiryo",
      title: "【無料配布中】北里大学医学部 指定校推薦 面接対策資料の中身を一部公開！",
      description:
        "入室作法から医療倫理の回答戦略まで。現役北里医学部生作成の実践ガイドを一部公開。無料相談で全文配布中。",
      updatedAt: "2026-03-14",
      publishedAt: "2026-03-14"
    },
    ...blogPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      updatedAt: post.updatedAt,
      publishedAt: post.publishedAt
    }))
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="bg-neutralGray-50 pb-20 pt-32">
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h1 className="font-heading text-3xl font-bold text-navy-900 md:text-4xl">{blogPageContent.title}</h1>
        <p className="mt-3 max-w-3xl text-neutralGray-600">{blogPageContent.subtitle}</p>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-5 px-4 md:px-6">
        {listItems.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-neutralGray-100 bg-white p-6 shadow-soft">
            <p className="text-sm text-neutralGray-400">公開日: {formatDate(post.publishedAt)}</p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900">{post.title}</h2>
            <p className="mt-3 text-neutralGray-600">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              記事を読む
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
