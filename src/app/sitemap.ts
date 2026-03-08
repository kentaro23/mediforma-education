import type { MetadataRoute } from "next";

const base = "https://mediforma-education.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/shiteiko",
    "/kobetsu",
    "/about",
    "/contact",
    "/privacy"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
