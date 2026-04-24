import type { Metadata } from "next";
import Script from "next/script";
import BlogIndexClient from "@/components/pages/blog-index-client";

export const metadata: Metadata = {
  title: "Financial Advisor AI Blog | Drift AI Journal",
  description:
    "Guides for financial advisor AI, RIA workflow automation, AI meeting notes for advisors, client email drafting, and compliance workflow automation.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Financial Advisor AI Blog | Drift AI Journal",
    description:
      "Read practical guides on financial advisor AI, RIA workflow automation, compliance-ready workflows, and advisor productivity.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Drift AI Journal",
    description: "Financial advisor AI, RIA workflow automation, and compliance workflow insights from Drift AI.",
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
