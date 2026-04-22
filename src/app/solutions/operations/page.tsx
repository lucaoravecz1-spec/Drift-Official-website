import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import SolutionPageShell from "@/components/sections/solution-page-shell";

export const metadata: Metadata = {
  title: "AI-Powered Operations Management for Finance",
  description:
    "AI-powered operations management for finance teams looking to reduce manual work, route exceptions clearly, and improve workflow speed.",
  alternates: {
    canonical: "/solutions/operations",
  },
};

export default function OperationsPage() {
  return (
    <>
      <Header />
      <SolutionPageShell
        eyebrow="Solutions for operations teams"
        title="AI-powered operations management for finance"
        description="Drift helps operations teams automate financial workflows, reduce manual review cycles, and keep execution visible from intake to approval."
        keyword="financial operations management"
        benefits={["Process visibility", "Less manual rework", "Clear exception routing"]}
        sections={[
          {
            title: "Reduce repeat manual work",
            body: "Operations teams can remove routine coordination, drafting, and follow-up steps that usually slow work down and increase the chance of missed context.",
          },
          {
            title: "Route bottlenecks with more clarity",
            body: "Drift helps teams identify where work stalls, who owns the next step, and which workflows need human review before they move forward.",
          },
          {
            title: "Improve operating metrics over time",
            body: "Because workflow history remains visible, teams can improve cycle time, exception handling, and quality without guessing where the friction lives.",
          },
        ]}
        ctaLabel="Calculate your savings"
      />
      <Footer />
    </>
  );
}
