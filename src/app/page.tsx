import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/navigation/header";
import HeroSection from "@/components/sections/hero-section";
import HomeFaq from "@/components/sections/home-faq";
import MetricsSection from "@/components/sections/metrics-section";
import HomeStory from "@/components/sections/home-story";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "AI Operations for Financial Teams",
  description:
    "Streamline financial operations with AI-powered automation, compliance review, and multi-channel workflows. Built for teams that need standards.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "Financial operations software with AI, compliance-first workflows, and audit-ready controls for serious teams.",
    url: "/",
  },
  twitter: {
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "Financial operations software with AI, compliance-first workflows, and audit-ready controls for serious teams.",
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Drift AI",
      url: "https://driftsaas.online",
      logo: "https://driftsaas.online/logo.png",
      description: "AI operations platform for financial teams",
      contactPoint: {
        "@type": "ContactPoint",
        url: "https://driftsaas.online/contact",
        contactType: "Sales",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Drift AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Drift AI helps financial teams handle prep, review, and follow-through in one controlled workflow.",
      featureList:
        "AI automation, compliance review, multi-channel workflows, audit trails, approvals, integrations",
      brand: {
        "@type": "Brand",
        name: "Drift AI",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "Contact for pricing",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Drift AI for financial operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drift AI is financial operations software that brings intake, drafting, approval, and compliance review into one workflow for advisory and finance teams.",
          },
        },
        {
          "@type": "Question",
          name: "Is Drift AI built for compliance-first workflows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Drift includes review states, approval checkpoints, audit trails, and visible workflow history so firms can automate without losing control.",
          },
        },
        {
          "@type": "Question",
          name: "Which financial systems does Drift integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drift supports CRM, custody, portfolio, document, and operations systems including Salesforce, Wealthbox, Schwab, Fidelity, Orion, Addepar, Microsoft 365, and Slack.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Drift designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drift is designed for financial advisors, RIAs, wealth management firms, operations leaders, and compliance teams that need faster execution with visible review.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-[#0a0a0a]">
        <HeroSection />
        <MetricsSection />
        <HomeStory />
        <HomeFaq />
        <div id="resources">
          <Footer />
        </div>
      </main>
    </>
  );
}
