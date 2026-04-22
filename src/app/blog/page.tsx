import type { Metadata } from "next";
import Script from "next/script";
import BlogIndexClient from "@/components/pages/blog-index-client";

export const metadata: Metadata = {
  title: "Financial Operations Automation Blog",
  description:
    "Guides, frameworks, and best practices for financial operations automation, compliance workflows, and AI in finance teams.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Financial Operations Automation Blog | Drift AI",
    description:
      "Read practical guides on financial workflow automation, compliance review design, and operations strategy.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Drift AI Journal",
    description: "Financial operations, compliance, and workflow automation insights from Drift AI.",
    url: "https://driftsaas.online/blog",
  };

  return (
    <>
      <Script
        id="blog-index-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIndexClient />
    </>
  );
}
