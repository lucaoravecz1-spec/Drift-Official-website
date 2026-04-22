import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import SolutionPageShell from "@/components/sections/solution-page-shell";

export const metadata: Metadata = {
  title: "AI Operations for Wealth Advisors",
  description:
    "AI operations for wealth advisors and RIAs who need faster prep, cleaner reviews, and stronger compliance visibility.",
  alternates: {
    canonical: "/solutions/wealth-advisors",
  },
};

export default function WealthAdvisorsPage() {
  return (
    <>
      <Header />
      <SolutionPageShell
        eyebrow="Solutions for wealth advisors"
        title="AI operations for wealth advisors"
        description="Drift helps wealth advisors reduce manual work across prep, follow-through, and household review while keeping compliance and operator visibility intact."
        keyword="wealth advisor operations"
        benefits={["RIA operations automation", "Household context", "Compliance-ready review"]}
        sections={[
          {
            title: "Scale without adding admin drag",
            body: "Advisory teams can automate prep, summaries, and operational follow-through without forcing advisors back into fragmented tools and manual status chasing.",
          },
          {
            title: "Keep household context intact",
            body: "Drift helps teams work across client records, documents, and review states in one place so the same picture does not need to be rebuilt at every handoff.",
          },
          {
            title: "Stay defensible under review",
            body: "Approvals, audit trails, and visible workflow history help firms move faster while keeping a clear operating record for compliance and leadership.",
          },
        ]}
        ctaLabel="See how wealth teams use Drift"
      />
      <Footer />
    </>
  );
}
