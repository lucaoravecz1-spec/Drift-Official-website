"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const modules = [
  {
    tag: "DRIFT VAULT",
    title: "Document intelligence",
    description: "Upload an IPS and Drift reads it the way a senior associate would — flagging language that doesn't meet your firm's template or the client's state rules. Redline review in seconds, not hours.",
    gradient: "from-[#1a1a2e] to-[#0d0d0d]",
    glow: "rgba(80,80,200,0.08)",
    mockLines: [
      { text: "IPS §6.1 — equity allocation cap", status: "⚠ Flagged: exceeds 60% limit for conservative profile", color: "text-orange-400" },
      { text: "Trust instrument — beneficiary clause", status: "✓ Matches state template (CA)", color: "text-accent" },
      { text: "1099-DIV — dividend income", status: "✓ Ingested · Cross-referenced with IRS §1.1(h)", color: "text-accent" },
    ]
  },
  {
    tag: "DRIFT WORKFLOWS",
    title: "Automate the top advisor jobs",
    description: "Meeting prep, annual reviews, tax-loss harvesting, onboarding packets — Drift runs each end-to-end so advisors can focus on the conversations that matter.",
    gradient: "from-[#1a1410] to-[#0d0d0d]",
    glow: "rgba(120,80,20,0.10)",
    mockLines: [
      { text: "Meeting prep · Chen household", status: "✓ Brief ready · 4 action items", color: "text-accent" },
      { text: "Tax-loss harvest · Park portfolio", status: "↻ Running · Est. $12,400 alpha", color: "text-blue-400" },
      { text: "Annual review · Johnson family", status: "↻ Drafting · 80% complete", color: "text-white/40" },
    ]
  }
];

export default function VoiceExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 sm:py-32 w-full">
      <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35 mb-5">GET A NEW ADVISOR UP AND RUNNING IN NO TIME</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 items-end">
            <h2 className="font-display text-4xl md:text-6xl font-normal text-white leading-[1.08] tracking-tight">
              Every module<br />works together
            </h2>
            <p className="text-lg text-white/45 leading-relaxed max-w-lg lg:pb-1">
              The Vault, Workflows, Drift Intel, and the Ledger share the same data layer — so nothing falls through the cracks and everything is auditable.
            </p>
          </div>
        </motion.div>

        {/* Two-up module cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.15 }}
              className={`rounded-3xl bg-gradient-to-br ${mod.gradient} border border-white/8 p-10 flex flex-col gap-8 min-h-[420px] relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at ${i === 0 ? "top right" : "bottom left"}, ${mod.glow}, transparent 65%)` }}
              />
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-4">{mod.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-4 leading-tight">{mod.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-sm">{mod.description}</p>
              </div>
              {/* Mock lines */}
              <div className="relative z-10 mt-auto bg-black/40 backdrop-blur-md border border-white/8 rounded-2xl divide-y divide-white/5">
                {mod.mockLines.map((line, j) => (
                  <div key={j} className="flex flex-col gap-0.5 px-5 py-3.5">
                    <span className="text-[11px] text-white/55 font-medium">{line.text}</span>
                    <span className={`text-[11px] ${line.color}`}>{line.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3-col strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mt-16 pt-12 border-t border-white/5">
          {[
            { title: "Drift Studio", desc: "Build custom skills trained on your firm's playbook, gated by CCO approval before they go live." },
            { title: "Drift Intel", desc: "Morning briefing. Client-specific alerts when a regulatory change, position move, or drift affects your households." },
            { title: "Drift Ledger", desc: "Append-only, cryptographically signed log. If the ledger is down, the pipeline halts — fail closed, never unlogged." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
