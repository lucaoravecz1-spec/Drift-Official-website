import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import SolutionPageShell from "@/components/sections/solution-page-shell";

export const metadata: Metadata = {
  title: "Compliance-First Operations for Financial Services",
  description:
    "Compliance-first operations software for financial services firms managing workflows across teams, systems, and approval layers.",
  alternates: {
    canonical: "/solutions/financial-services",
  },
};

export default function FinancialServicesPage() {
  return (
    <>
      <Header />
      <SolutionPageShell
        eyebrow="Solutions for financial services firms"
        title="Compliance-first operations for financial services"
        description="Drift gives financial services firms one operating layer for workflow automation, review visibility, and multi-team coordination."
        keyword="financial services automation"
        benefits={["Multi-team workflow control", "Compliance-first operations", "Better cross-system visibility"]}
        sections={[
          {
            title: "Coordinate work across multiple teams",
            body: "Drift helps firms align advisors, operators, reviewers, and leadership around one workflow instead of scattering critical context across separate systems.",
          },
          {
            title: "Build governance into the operating model",
            body: "Review states, approvals, and audit-safe handoffs are part of the workflow itself, which makes the system easier to trust at scale.",
          },
          {
            title: "Connect the systems that already matter",
            body: "CRM, custody, documents, and operations tools can remain part of the environment while Drift becomes the layer that keeps work coordinated.",
          },
        ]}
        ctaLabel="Schedule a compliance consultation"
      />
      <Footer />
    </>
  );
}
