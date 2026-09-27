import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://saqib-portfolio-87708.web.app",
      lastModified: new Date("2026-09-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
