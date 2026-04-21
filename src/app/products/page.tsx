"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const personas = [
  { role: "Financial Advisors", desc: "Meeting prep, rebalance memos, IPS reviews — Drift handles the 22 hours a week that keep advisors from advising.", accent: "from-accent/20 to-transparent" },
  { role: "Wealth Managers", desc: "Household-scoped answers across multi-account, multi-custodian portfolios. Every claim cited, every action logged.", accent: "from-blue-500/15 to-transparent" },
  { role: "Accountants & CPAs", desc: "Cross-reference 1099s, K-1s, and IRS code instantly. Draft client memos with citations before the next engagement.", accent: "from-purple-500/15 to-transparent" },
];

const modules = [
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-end mb-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">{mod.tag}</p>
          <h2 className="font-display text-3xl md:text-[48px] font-normal text-white leading-[1.08] tracking-tight">{mod.headline}</h2>
        </div>
        <p className="text-base text-white/50 leading-relaxed max-w-lg">{mod.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 border-t border-white/5 pt-10 mb-10">
        {mod.features.map((f, fi) => (
          <motion.div key={fi} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + fi * 0.1 }} className="flex flex-col gap-2">
            <span className="text-xl text-white/40">{f.icon}</span>
            <h4 className="text-sm font-semibold text-white">{f.title}</h4>
            <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated mock UI card */}
      <motion.div
        className="relative rounded-3xl border border-white/8 overflow-hidden"
        style={{ background: `radial-gradient(ellipse at ${i % 2 === 0 ? "top left" : "top right"}, ${mod.glow}, transparent 60%), #0f0f0f` }}
        whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/5">
          {["bg-white/10", "bg-white/10", "bg-white/10"].map((c, j) => <div key={j} className={`w-2.5 h-2.5 rounded-full ${c}`} />)}
          <span className="ml-3 text-[10px] font-mono text-white/25">{mod.tag.toLowerCase().replace(" ", "-")} · live</span>
        </div>
        <div className="divide-y divide-white/5">
          {mod.mock.map((line, li) => (
            <motion.div key={li} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + li * 0.1 }}
              className="px-6 py-4 flex flex-col gap-1">
              <span className="text-sm text-white/50">{line.q}</span>
              <span className={`text-sm ${line.ok ? "text-accent/80" : "text-orange-400/80"}`}>{line.a}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const { ref: heroRef, inView: heroIn } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: pricingRef, inView: pricingIn } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/4 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl relative z-10">

          {/* Hero */}
          <motion.div ref={heroRef} className="mb-24 max-w-3xl" initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">PRODUCTS</p>
            <h1 className="font-display text-5xl md:text-[72px] font-normal text-white leading-[1.04] tracking-tight mb-6">
              The full Drift suite
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Five modules. One data layer. Every AI action logged. Built for financial advisors, wealth managers, and accountants.
            </p>
          </motion.div>

          {/* Persona cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-28">
            {personas.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`rounded-3xl bg-gradient-to-br ${p.accent} border border-white/8 p-8 flex flex-col gap-3`}>
                <h3 className="text-base font-semibold text-white">{p.role}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Module sections */}
          {modules.map((mod, i) => <ModuleSection key={i} mod={mod} i={i} />)}

          {/* Pricing */}
          <motion.div ref={pricingRef} initial={{ opacity: 0, y: 32 }} animate={pricingIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">PRICING</p>
            <h2 className="font-display text-4xl md:text-[56px] font-normal text-white leading-[1.08] tracking-tight mb-16 max-w-xl">
              Simple pricing that pays for itself
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={pricingIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: p.featured ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)" }}
                  className={`rounded-3xl border p-10 flex flex-col gap-6 transition-colors ${p.featured ? "bg-white/[0.06] border-white/20" : "bg-[#111] border-white/8"}`}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">{p.tier}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-light text-white">{p.price}</span>
                      <span className="text-sm text-white/40">{p.per}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">{p.desc}</p>
                  <Link href="/contact"
                    className={`rounded-full px-6 py-3 text-sm font-medium text-center transition-all duration-300 ${p.featured ? "bg-white text-black hover:bg-white/90" : "border border-white/20 text-white hover:bg-white/5"}`}>
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
