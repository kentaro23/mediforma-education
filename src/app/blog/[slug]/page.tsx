import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";

type Props = {
  params: { slug: string };
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(value)
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
    <article className="bg-white pb-20 pt-32">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
        <p className="text-sm text-neutralGray-400">更新日: {formatDate(post.updatedAt)}</p>
        <h1 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-tight tracking-tight text-teal-500 md:text-[38px]">
          {post.title}
        </h1>
        <p className="mt-4 text-neutralGray-600">{post.lead}</p>
        <p className="mt-2 text-sm text-neutralGray-400">執筆: {post.author}</p>

        <div className="mt-10 space-y-6 text-[17px] leading-8 text-neutralGray-600">
          {post.blocks.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2 key={`${block.type}-${idx}`} className="pt-2 text-2xl font-bold leading-tight text-navy-900">
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
                  <thead className="bg-neutralGray-50">
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
        </div>
      </div>
    </article>
  );
}
