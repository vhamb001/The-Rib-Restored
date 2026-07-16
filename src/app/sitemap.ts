import type { MetadataRoute } from "next";
import { getSortedWritingsData } from "@/lib/writings";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theribrestored.com";

  // Base/Static pages
  const staticRoutes = [
    "",
    "/about",
    "/books",
    "/contact",
    "/projects",
    "/writings",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic writings (posts)
  const writings = getSortedWritingsData();
  const dynamicPages = writings.map((writing) => ({
    url: `${baseUrl}/writings/${writing.slug}`,
    // Set lastModified if the writing has a date, otherwise default to current date
    lastModified: writing.date ? new Date(writing.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}
