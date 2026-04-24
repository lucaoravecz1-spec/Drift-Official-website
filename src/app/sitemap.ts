import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.BETTER_AUTH_URL ||
  "https://driftsaas.online";

const routes = [
  "",
  "/products",
  "/solutions",
  "/solutions/wealth-advisors",
  "/solutions/financial-services",
  "/solutions/operations",
  "/solutions/compliance",
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
  "/ai-meeting-notes-financial-advisors",
  "/email-automation-ria",
  "/ai-document-summary",
  "/wealthbox-ai-integration",
  "/ai-compliance-workflows",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const allRoutes = [...routes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route.startsWith("/blog/") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.8 : 0.7,
  }));
}
