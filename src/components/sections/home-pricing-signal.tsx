import Link from "next/link";

const plans = [
  {
    name: "Solo advisor",
    price: "Starting at $495/mo",
    body: "For independent advisors who want meeting follow-up, document review, and workflow execution in one system.",
  },
  {
    name: "Growing firm",
    price: "Starting at $795/advisor/mo",
    body: "For RIAs that need approvals, audit visibility, and firm-wide workflow control.",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    body: "For larger firms that need deeper integrations, security review, and rollout support.",
  },
];

export default function HomePricingSignal() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f1b3ac]">Pricing</p>
            <h2 className="mt-5 max-w-[12ch] font-display text-4xl leading-[1.04] tracking-tight text-white md:text-[56px]">
              Clear pricing for advisors and firms
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/56">
              You should know whether Drift fits your business before you book a call.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Book a 15-Minute Demo
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/32">{plan.name}</p>
                <p className="mt-4 text-[1.35rem] font-semibold text-white">{plan.price}</p>
                <p className="mt-3 text-sm leading-7 text-white/52">{plan.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
