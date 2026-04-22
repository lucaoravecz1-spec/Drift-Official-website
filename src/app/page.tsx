import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/navigation/header";
import HeroSection from "@/components/sections/hero-section";
import MetricsSection from "@/components/sections/metrics-section";
import HomeStory from "@/components/sections/home-story";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "AI Operations for Financial Teams",
  description:
    "Drift AI helps financial teams move faster with simpler workflows, cleaner reviews, and stronger controls.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "Simpler AI workflows for financial teams, with faster prep, clearer reviews, and stronger controls.",
    url: "/",
  },
  twitter: {
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "Simpler AI workflows for financial teams, with faster prep, clearer reviews, and stronger controls.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Drift AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Drift AI helps financial teams handle prep, review, and follow-through in one controlled workflow.",
    brand: {
      "@type": "Brand",
      name: "Drift AI",
    },
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        <HeroSection />
        <MetricsSection />
        <HomeStory />
        <div id="resources">
          <Footer />
        </div>
      </main>
    </>
  );
}
