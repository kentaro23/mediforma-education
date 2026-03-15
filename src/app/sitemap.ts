import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const baseUrl = "https://www.mediformaedu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/shiteiko`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/kobetsu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact/thanks`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    }
  ];

  const explicitBlogSlugs = new Set([
    "kitasato-shiteiko-gakka-taisaku",
    "kitasato-shiteiko-shoronbun-taisaku",
    "kitasato-shiteiko-iryou-rinri",
    "kitasato-shiteiko-shutsugan-junbi",
    "kitasato-shiteiko-shibou-riyuu",
    "kitasato-shiteiko-schedule",
    "kitasato-shiteiko-goukaku-taikenki"
  ]);

  // Blog URLs are generated dynamically for future post additions.
  const blogEntries: MetadataRoute.Sitemap = blogPosts
    .filter((post) => !explicitBlogSlugs.has(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified:
        post.slug === "kitasato-shiteiko-mensetsu-taisaku"
          ? new Date("2026-03-14")
          : new Date(post.updatedAt),
      changeFrequency: "monthly",
      priority: 0.8
    }));

  const extraBlogEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-mensetsu-shiryo`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-gakka-taisaku`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-shoronbun-taisaku`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-iryou-rinri`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-shutsugan-junbi`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-shibou-riyuu`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-schedule`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/kitasato-shiteiko-goukaku-taikenki`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  return [...staticEntries, ...blogEntries, ...extraBlogEntries];
}
