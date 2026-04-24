import type { Metadata } from "next";
import SeoLandingPageView from "@/components/pages/seo-landing-page";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("ai-compliance-workflows");

if (!page) {
  throw new Error("SEO landing page config missing: ai-compliance-workflows");
}

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: `/${page.slug}`,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `/${page.slug}`,
  },
  twitter: {
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function AiComplianceWorkflowsPage() {
  return <SeoLandingPageView page={page} />;
}
