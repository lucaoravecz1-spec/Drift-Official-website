import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Operations Solutions",
  description:
    "Explore Drift AI solutions for wealth advisors, financial services firms, operations teams, and compliance leaders.",
  alternates: {
    canonical: "/solutions",
  },
};

const pages = [
  {
    title: "For Wealth Advisors",
    href: "/solutions/wealth-advisors",
    description: "AI operations for advisors who need faster prep, better follow-through, and visible review.",
  },
  {
    title: "For Financial Services Firms",
    href: "/solutions/financial-services",
    description: "Compliance-first workflow automation for firms managing multiple teams and systems.",
  },
  {
    title: "For Operations Teams",
    href: "/solutions/operations",
    description: "Reduce manual work, route exceptions clearly, and improve workflow visibility.",
  },
  {
    title: "For Compliance Leaders",
    href: "/solutions/compliance",
    description: "Automated compliance review with audit trails, approvals, and accountable workflows.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Solutions</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.05em] md:text-[72px]">
            Financial operations software aligned to the team doing the work
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
            Browse solution pages for advisory teams, financial services firms, operations leaders, and compliance officers evaluating AI workflow automation.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 transition-transform duration-200 hover:-translate-y-1">
                <h2 className="text-[2rem] leading-tight text-white">{page.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
