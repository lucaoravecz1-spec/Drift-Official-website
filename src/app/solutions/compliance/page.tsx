import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import SolutionPageShell from "@/components/sections/solution-page-shell";

export const metadata: Metadata = {
  title: "Automated Compliance Review Without Manual Overhead",
  description:
    "Automated compliance review for financial teams with workflow approvals, audit trails, and visible governance built into the process.",
  alternates: {
    canonical: "/solutions/compliance",
  },
};

export default function CompliancePage() {
  return (
    <>
      <Header />
      <SolutionPageShell
        eyebrow="Solutions for compliance teams"
        title="Automated compliance review without manual overhead"
        description="Drift gives compliance leaders a clearer way to review financial workflows with visible approvals, workflow history, and governance built into the process."
        keyword="compliance automation"
        benefits={["Approval checkpoints", "Audit-ready workflow history", "Governance without bottlenecks"]}
        sections={[
          {
            title: "Review the workflow, not just the final output",
            body: "Drift keeps drafting, edits, approvals, and handoffs connected so compliance teams can see how work happened instead of judging only the final artifact.",
          },
          {
            title: "Add governance without freezing execution",
            body: "Teams can introduce approval checkpoints for sensitive work while allowing simpler workflows to move faster through lighter review paths.",
          },
          {
            title: "Maintain a defensible audit trail",
            body: "Visible workflow history and operator actions help compliance leaders keep the system accountable as automation expands across the business.",
          },
        ]}
        ctaLabel="See compliance in action"
      />
      <Footer />
    </>
  );
}
