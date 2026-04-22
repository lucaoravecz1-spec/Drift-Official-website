"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const personas = [
  { role: "Financial Advisors", desc: "22 hours back for the work that actually moves relationships forward.", accent: "from-accent/20 to-transparent" },
  { role: "Wealth Managers", desc: "Household-scoped answers with citations, controls, and cleaner follow-through.", accent: "from-blue-500/15 to-transparent" },
  { role: "Accountants & CPAs", desc: "Draft faster, review faster, and keep every answer grounded in source material.", accent: "from-purple-500/15 to-transparent" },
];

const modules = [
  {
    tag: "DANTE BY DRIFT",
    color: "accent",
    glow: "rgba(41,149,120,0.14)",
    headline: "A high-trust workspace for finance research, writing, and analysis",
    description: "DANTE gives teams one surface for complex drafting, document review, and sourced financial work. Built for serious workflows, not generic chat.",
    features: [
      { icon: "↗", title: "Research with context", desc: "Pulls firm documents, records, and policy context into the same workspace." },
      { icon: "⬛", title: "Draft with control", desc: "Structured writing flows for memos, reviews, and client-ready outputs." },
      { icon: "↟", title: "Review before release", desc: "Operators and reviewers stay in the loop before anything moves downstream." },
    ],
    mock: [
      { q: "Client strategy memo · draft requested", a: "↳ Built from source docs, prior notes, and review policy", ok: true },
      { q: "Quarterly review packet · open issues", a: "↳ 3 sections flagged for human approval before export", ok: true },
    ]
  },
  {
    tag: "DRIFT ASSISTANT",
    color: "accent",
    glow: "rgba(41,149,120,0.12)",
    headline: "Solve your biggest client questions without breaking a sweat",
    description: "Ask anything about a household — portfolio drift, tax posture, IPS compliance — and Drift returns a streaming answer with every sentence linked to a source chunk. Works for financial advisors, wealth managers, and accounting teams.",
    features: [
      { icon: "↗", title: "Built for complexity", desc: "Handles multi-account households, trust structures, and cross-custodian positions." },
      { icon: "⬛", title: "Built for speed", desc: "Streaming responses with citations arrive in seconds, not minutes." },
      { icon: "↟", title: "Built for every firm", desc: "Works across RIAs, wealth management firms, and CPA practices of any size." },
    ],
    mock: [
      { q: "Are we in band on international equity for the Johnsons?", a: "↳ 18.4% vs IPS target 15–20% [IPS §4.2] — In band. No rebalance required.", ok: true },
      { q: "What changed in the Chen tax posture after Q1 1099s?", a: "↳ Dividend income up 34% YoY [1099-DIV]. Projected liability +$8,200 [IRS §1.1(h)].", ok: true },
    ]
  },
  {
    tag: "DRIFT VAULT",
    color: "blue-400",
    glow: "rgba(59,130,246,0.10)",
    headline: "Document intelligence that reads like a senior associate",
    description: "Upload an IPS, trust instrument, K-1, or 1099 and Drift reads it the way your best analyst would — flagging language gaps, cross-referencing state rules, and grounding every future answer in your documents.",
    features: [
      { icon: "⬡", title: "Redline review", desc: "Flags IPS language that conflicts with firm templates or state-specific rules." },
      { icon: "↗", title: "Document grounding", desc: "Every Vault document becomes a citable source for every future assistant response." },
      { icon: "⊕", title: "Instant ingestion", desc: "Drop in PDFs — Drift chunks, embeds, and indexes them automatically." },
    ],
    mock: [
      { q: "Johnson_IPS_2024.pdf — §6.1 equity allocation cap", a: "⚠ Flagged: exceeds 60% limit for conservative profile", ok: false },
      { q: "Chen_Trust_Instrument.pdf — beneficiary clause", a: "✓ Matches state template (CA)", ok: true },
    ]
  },
  {
    tag: "DRIFT LEDGER",
    color: "purple-400",
    glow: "rgba(168,85,247,0.10)",
    headline: "A defensible audit trail that satisfies any examiner",
    description: "Every AI action is written to an append-only, cryptographically signed ledger before it reaches the advisor or accountant. If the ledger is down, the pipeline halts. Drift fails closed — no answer ever goes unlogged.",
    features: [
      { icon: "⬛", title: "Append-only by design", desc: "SHA-256 signed entries cannot be edited or deleted after the fact." },
      { icon: "↗", title: "FINRA-ready export", desc: "One click packages your full interaction history into a structured audit bundle." },
      { icon: "↟", title: "CCO dashboard", desc: "Compliance officers see every response in real time, with full source attribution." },
    ],
    mock: [
      { q: "Meeting prep · Johnson household · 9:14am", a: "✓ Logged · SHA-256 · Verified", ok: true },
      { q: "Vault review · Chen IPS · 9:02am", a: "✓ Logged · SHA-256 · Verified", ok: true },
    ]
  },
  {
    tag: "DRIFT INTEL",
    color: "orange-400",
    glow: "rgba(251,146,60,0.10)",
    headline: "Know before your clients call you",
    description: "Drift watches SEC EDGAR, IRS code, FINRA rules, and 50-state RIA manuals overnight and cross-references every update against your client households and engagements. The morning briefing every advisor and accountant should have.",
    features: [
      { icon: "⬡", title: "Client-specific alerts", desc: "Surfaces only changes that actually affect your households or engagements." },
      { icon: "↗", title: "Morning briefing", desc: "Curated digest every morning: regulatory changes, portfolio drift, tax alpha." },
      { icon: "⊕", title: "Fully cited", desc: "Every alert links to the source — EDGAR filing, IRS section, FINRA rule." },
    ],
    mock: [
      { q: "SEC Rule 206(4)-1 — updated guidance", a: "⚠ Affects 2 client marketing materials in your vault", ok: false },
      { q: "Tax alpha opportunity · $48K est.", a: "↻ 4 clients eligible for tax-loss harvesting", ok: true },
    ]
  },
  {
    tag: "DRIFT STUDIO",
    color: "accent",
    glow: "rgba(41,149,120,0.10)",
    headline: "Build your firm's own skills on top of the platform",
    description: "Studio lets power users compose custom workflows — tax-loss harvesting sweeps, onboarding packets, annual review automations — trained on your firm's own playbook and gated by CCO approval before they go live.",
    features: [
      { icon: "⬛", title: "Firm-trained skills", desc: "Upload your playbooks and model portfolios. Studio trains on your standards." },
      { icon: "↗", title: "CCO-gated deployment", desc: "Every new skill requires explicit sign-off before it reaches your advisors." },
      { icon: "↟", title: "End-to-end workflows", desc: "Meeting prep, annual reviews, tax-loss harvesting, onboarding packets." },
    ],
    mock: [
      { q: "Tax-loss harvest sweep · Park portfolio", a: "↻ Running · Est. $12,400 alpha · CCO approved", ok: true },
      { q: "Annual review · Johnson family", a: "↻ Drafting · 80% complete · Pending advisor review", ok: true },
    ]
  },
];

const pricing = [
  { tier: "Solo", price: "$495", per: "/mo", desc: "Independent RIAs and solo practitioners. Full Assistant, Vault, Ledger, and Intel.", cta: "Start free trial", featured: false },
  { tier: "Firm", price: "$795", per: "/advisor/mo", desc: "5–50 advisor firms. Adds Studio, CCO dashboard, and FINRA audit bundle export.", cta: "Request a pilot", featured: true },
  { tier: "Enterprise", price: "Custom", per: "", desc: "Large RIAs, custodian platforms, and enterprise accounting firms. Custom SLA.", cta: "Talk to us", featured: false },
];

function ModuleSection({ mod, i }: { mod: typeof modules[0]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} className="mb-32" initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
      <div className="mb-12 grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/30">{mod.tag}</p>
          <h2 className="font-display text-3xl font-normal leading-[1.08] tracking-tight text-white md:text-[48px]">{mod.headline}</h2>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-white/50">{mod.description}</p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-white/5 pt-10 md:grid-cols-3">
        {mod.features.map((f, fi) => (
          <motion.div key={fi} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + fi * 0.1 }} className="flex flex-col gap-2">
            <span className="text-xl text-white/40">{f.icon}</span>
            <h4 className="text-sm font-semibold text-white">{f.title}</h4>
            <p className="text-sm leading-relaxed text-white/40">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/8"
        style={{ background: `radial-gradient(ellipse at ${i % 2 === 0 ? "top left" : "top right"}, ${mod.glow}, transparent 60%), #0f0f0f` }}
        whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-1.5 border-b border-white/5 px-5 py-3">
          {["bg-white/10", "bg-white/10", "bg-white/10"].map((c, j) => <div key={j} className={`h-2.5 w-2.5 rounded-full ${c}`} />)}
          <span className="ml-3 text-[10px] font-mono text-white/25">{mod.tag.toLowerCase().replace(" ", "-")} · live</span>
        </div>
        <div className="divide-y divide-white/5">
          {mod.mock.map((line, li) => (
            <motion.div key={li} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + li * 0.1 }}
              className="flex flex-col gap-1 px-6 py-4">
              <span className="text-sm text-white/50">{line.q}</span>
              <span className={`text-sm ${line.ok ? "text-accent/80" : "text-orange-400/80"}`}>{line.a}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPageClient() {
  const { ref: heroRef, inView: heroIn } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: pricingRef, inView: pricingIn } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Header />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#0a0a0a] pb-20 pt-32">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/4 blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-16">
          <motion.div ref={heroRef} className="mb-24 max-w-3xl" initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">PRODUCTS</p>
            <h1 className="mb-6 font-display text-5xl font-normal leading-[1.04] tracking-tight text-white md:text-[72px]">
              Products built for real financial work
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/50">
              A tighter suite, one data layer, and reviewed workflows from research to audit trail.
            </p>
          </motion.div>

          <div className="mb-28 grid grid-cols-1 gap-5 md:grid-cols-3">
            {personas.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`flex flex-col gap-3 rounded-3xl border border-white/8 bg-gradient-to-br ${p.accent} p-8`}>
                <h3 className="text-base font-semibold text-white">{p.role}</h3>
                <p className="text-sm leading-relaxed text-white/45">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {modules.map((mod, i) => <ModuleSection key={i} mod={mod} i={i} />)}

          <motion.div ref={pricingRef} initial={{ opacity: 0, y: 32 }} animate={pricingIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/30">PRICING</p>
            <h2 className="mb-16 max-w-xl font-display text-4xl font-normal leading-[1.08] tracking-tight text-white md:text-[56px]">
              Simple pricing that pays for itself
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {pricing.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={pricingIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: p.featured ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)" }}
                  className={`flex flex-col gap-6 rounded-3xl border p-10 transition-colors ${p.featured ? "border-white/20 bg-white/[0.06]" : "border-white/8 bg-[#111]"}`}>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">{p.tier}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-light text-white">{p.price}</span>
                      <span className="text-sm text-white/40">{p.per}</span>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/50">{p.desc}</p>
                  <Link href="/contact"
                    className={`rounded-full px-6 py-3 text-center text-sm font-medium transition-all duration-300 ${p.featured ? "bg-white text-black hover:bg-white/90" : "border border-white/20 text-white hover:bg-white/5"}`}>
                    {p.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
