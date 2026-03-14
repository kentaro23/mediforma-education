import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const base = "https://www.mediformaedu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${base}/shiteiko`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${base}/kobetsu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${base}/contact/thanks`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Blog URLs are generated dynamically for future post additions.
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified:
      post.slug === "kitasato-shiteiko-mensetsu-taisaku"
        ? new Date("2026-03-14")
        : new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...staticEntries, ...blogEntries];
}
