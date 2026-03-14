import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";

type Props = {
  params: { slug: string };
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(value)
  );
}

function GiftBanner() {
  return (
    <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-100/50 to-blueAccent-100/40 p-5">
      <p className="text-sm font-semibold text-teal-500">🎁 無料相談特典</p>
      <h3 className="mt-1 text-xl font-bold text-navy-900">無料相談で「面接対策資料」をプレゼント！</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutralGray-600">
        この記事で紹介している面接対策資料（全編）を、無料相談にお越しいただいた方全員に無料でお渡ししています。
      </p>
      <div className="mt-4">
        <Button href="/contact">▶ 無料相談はこちら</Button>
      </div>
      <p className="mt-3 text-sm text-neutralGray-600">mediformaedu.com/contact</p>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt
    }
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 pb-14 pt-36 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="inline-flex rounded-full border border-teal-400/50 bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-100">
            面接対策
          </span>
          <h1 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-4xl text-white/85 md:text-lg">{post.lead}</p>
          <p className="mt-4 text-sm text-white/75">
            更新日: {formatDate(post.updatedAt)} | 執筆: {post.author}
          </p>
        </div>
      </section>

      <section className="bg-neutralGray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <GiftBanner />
        </div>
      </section>

      <article className="bg-white pb-20 pt-10">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <div className="space-y-6 text-[17px] leading-8 text-neutralGray-600">
          {post.blocks.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={`${block.type}-${idx}`}
                  className="border-b-2 border-teal-500 pb-2 pt-2 text-2xl font-bold leading-tight text-navy-900"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return <p key={`${block.type}-${idx}`}>{block.text}</p>;
            }

            if (block.type === "quote") {
              return (
                <blockquote key={`${block.type}-${idx}`} className="rounded-xl bg-blueAccent-100 p-5 text-navy-800">
                  {block.text}
                </blockquote>
              );
            }

            if (block.type === "note") {
              return (
                <p key={`${block.type}-${idx}`} className="whitespace-pre-line rounded-xl bg-amber-100 p-5 text-navy-800">
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={`${block.type}-${idx}`} className="list-disc space-y-1 pl-6 marker:text-teal-500">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <div key={`${block.type}-${idx}`} className="overflow-x-auto rounded-xl border border-neutralGray-100">
                <table className="min-w-full border-collapse text-left text-sm md:text-base">
                  <thead className="bg-teal-100">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="whitespace-nowrap border-b border-neutralGray-100 px-4 py-3 font-semibold text-navy-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${row.join("-")}-${rowIndex}`} className="align-top">
                        {row.map((cell, cellIndex) => (
                          <td key={`${cell}-${cellIndex}`} className="border-b border-neutralGray-100 px-4 py-3 text-neutralGray-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}

          {slug === "kitasato-shiteiko-mensetsu-taisaku" ? (
            <section className="rounded-2xl border border-neutralGray-100 bg-neutralGray-50 p-5">
              <p className="text-sm font-semibold text-navy-900">
                ▶ 関連記事: 面接対策資料の中身を一部公開しています
              </p>
              <Link
                href="/blog/kitasato-shiteiko-mensetsu-shiryo"
                className="mt-2 inline-flex text-sm font-semibold text-teal-500 hover:text-teal-400"
              >
                → /blog/kitasato-shiteiko-mensetsu-shiryo
              </Link>
            </section>
          ) : null}

          <section>
            <GiftBanner />
          </section>
        </div>
        </div>
      </article>
    </>
  );
}
