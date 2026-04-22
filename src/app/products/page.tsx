import type { Metadata } from "next";
import Script from "next/script";
import ProductsPageClient from "@/components/pages/products-page-client";

export const metadata: Metadata = {
  title: "Financial Operations Platform",
  description:
    "Connect your financial systems and run compliance-first workflows. Automate with confidence, review with clarity.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Financial Operations Platform | Drift AI",
    description:
      "Unified platform for financial operations: automation, compliance review, multi-channel workflows, and governance.",
    url: "/products",
  },
};

export default function ProductsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Drift AI",
      description: "AI operations platform for financial teams with compliance-first workflow automation.",
      brand: {
        "@type": "Brand",
        name: "Drift AI",
      },
      offers: {
        "@type": "Offer",
        url: "https://driftsaas.online/contact",
        priceCurrency: "USD",
        price: "Contact for pricing",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://driftsaas.online",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://driftsaas.online/products",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageClient />
    </>
  );
}
