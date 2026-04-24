import Link from "next/link";

const faqs = [
  {
    question: "What is financial operations automation?",
    answer:
      "Financial operations automation uses software to reduce manual work across intake, drafting, approvals, compliance review, and follow-through. Drift applies that model to regulated finance teams that need both speed and control.",
  },
  {
    question: "How does Drift help with compliance reviews?",
    answer:
      "Drift keeps review states, approvals, and audit history inside the workflow so teams can automate work without creating a black box for operators or compliance leaders. That makes it a practical system for compliance workflow automation in advisory firms.",
  },
  {
    question: "Is Drift built for advisory firms and RIAs?",
    answer:
      "Yes. Drift is designed for advisory firms, RIAs, and other financial teams that need household context, approval visibility, and workflow consistency across multiple systems. It is financial advisor AI built for real operating work, not generic chat.",
  },
  {
    question: "Can Drift integrate with our current financial systems?",
    answer:
      "Drift is built to sit across CRM, custody, document, and operations tools so teams can automate financial workflows without replacing the systems already in use.",
  },
  {
    question: "What makes Drift different from generic automation tools?",
    answer:
      "Generic tools focus on task chaining. Drift is built for financial operations, with governance, review visibility, audit-safe handoffs, and compliance-first workflows as part of the core product.",
  },
  {
    question: "How do teams get started with Drift?",
    answer:
      "Most teams start by mapping one high-friction workflow, connecting the necessary systems, and introducing review checkpoints before expanding to additional processes.",
  },
];

export default function HomeFaq() {
  return (
    <section className="container mx-auto max-w-screen-xl px-6 py-20 lg:px-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">FAQ</p>
          <h2 className="mt-6 max-w-[12ch] font-display text-4xl leading-[1.04] tracking-tight text-white md:text-[56px]">
            Answers for teams evaluating AI for financial operations
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/52">
            Explore the <Link href="/products" className="text-white underline decoration-white/30 underline-offset-4">platform</Link>, compare our{" "}
            <Link href="/solutions/compliance" className="text-white underline decoration-white/30 underline-offset-4">compliance workflows</Link>, or read the{" "}
            <Link href="/blog" className="text-white underline decoration-white/30 underline-offset-4">journal</Link> for deeper guidance.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/56">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
