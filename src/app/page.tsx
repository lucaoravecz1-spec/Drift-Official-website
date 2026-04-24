import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/navigation/header";
import CustomAgentsSection from "@/components/sections/custom-agents-section";
import HeroSection from "@/components/sections/hero-section";
import HomeFaq from "@/components/sections/home-faq";
import HomePricingSignal from "@/components/sections/home-pricing-signal";
import MetricsSection from "@/components/sections/metrics-section";
import ProductDemoSection from "@/components/sections/product-demo-section";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Drift AI — AI Agent for Financial Advisors & RIAs | Automate Meetings, Emails & Workflows",
  description:
    "Drift AI automates meeting notes, client emails, document summaries, and compliance workflows for independent financial advisors and RIAs. SOC 2 certified. Start your free trial.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drift AI — AI Agent for Financial Advisors & RIAs | Automate Meetings, Emails & Workflows",
    description:
      "Drift AI automates meeting notes, client emails, document summaries, and compliance workflows for independent financial advisors and RIAs. SOC 2 certified. Start your free trial.",
    url: "/",
  },
  twitter: {
    title: "Drift AI — AI Agent for Financial Advisors & RIAs | Automate Meetings, Emails & Workflows",
    description:
      "Drift AI automates meeting notes, client emails, document summaries, and compliance workflows for independent financial advisors and RIAs. SOC 2 certified. Start your free trial.",
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
      description: "AI agent for financial advisors and RIAs",
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
        "Drift AI automates meeting notes, client emails, document summaries, and compliance workflows for independent financial advisors and RIAs.",
      featureList:
        "financial advisor AI, RIA workflow automation, AI meeting notes for advisors, client email drafting, compliance workflow automation",
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
        <ProductDemoSection />
        <CustomAgentsSection />
        <HomePricingSignal />
        <HomeFaq />
        <div id="resources">
          <Footer />
        </div>
      </main>
    </>
  );
}
