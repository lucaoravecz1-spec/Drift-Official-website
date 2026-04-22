import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.BETTER_AUTH_URL ||
  "https://driftsaas.online";

const routes = [
  "",
  "/products",
  "/about",
  "/contact",
  "/careers",
  "/blog",
  "/privacy",
  "/terms",
  "/voice-options",
  "/integrations",
  "/affiliate",
  "/drift-studio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
