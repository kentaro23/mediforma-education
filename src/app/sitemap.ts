import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const base = "https://mediforma-education.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/blog",
    "/shiteiko",
    "/kobetsu",
    "/about",
    "/contact",
    "/privacy"
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticEntries, ...blogEntries];
}
