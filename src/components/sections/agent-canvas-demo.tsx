"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    day: "Step 1",
    title: "Connect & Configure",
    description: "Link your custodians (Schwab, Fidelity, Orion, Addepar) and CRM. Drift ingests your client data and drafts a household baseline. You review key households and edge cases."
  },
  {
    day: "Step 2",
    title: "Upload & Ground",
    description: "Drop IPS agreements, trust instruments, 1099s, and firm playbooks into the Vault. Drift reads them like a senior associate — flagging language gaps and grounding every future answer in your documents."
  },
  {
    day: "Step 3",
    title: "Run & Review",
    description: "Advisors start asking questions in plain language. Every response streams with citations. The Drift Ledger logs each answer before delivery. CCO reviews in real time."
  }
];

const features = [
  {
    icon: "↗",
    title: "Grounded answers",
    description: "Every claim cites a source chunk — Vault doc, custodian feed, or finance corpus. Nothing made up."
  },
  {
    icon: "⬛",
    title: "Built for complexity",
    description: "Household-scoped context means Drift knows each client's IPS, tax posture, and allocation — not just a generic answer."
  },
  {
    icon: "↟",
    title: "Built for scale",
    description: "Works across 5-to-50-advisor firms managing $500M–$5B. Isolated namespaces per firm. Client data never used for training."
  }
];

export default function AgentCanvasDemo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section ref={ref} className="bg-[#0a0a0a] w-full py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl">

        {/* Label + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">► HOW IT WORKS</p>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-white leading-[1.08] tracking-tight max-w-2xl">
            Up and running in a single week
          </h2>
        </motion.div>

        {/* Progress bar */}
        <div className="relative h-px bg-white/10 mb-16 overflow-visible">
          <motion.div
            className="h-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300"
              style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
            >
              <span className={`block w-full h-full rounded-full transition-colors duration-300 ${activeStep === i ? "bg-white" : "bg-white/20 hover:bg-white/50"}`} />
            </button>
          ))}
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setActiveStep(i)}
            >
              <p className={`text-sm font-semibold mb-3 transition-colors ${activeStep === i ? "text-orange-400" : "text-white/30 group-hover:text-white/60"}`}>
                {step.day}
              </p>
              <h3 className={`text-lg font-medium mb-2 transition-colors ${activeStep === i ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors ${activeStep === i ? "text-white/60" : "text-white/30 group-hover:text-white/50"}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-24" />

        {/* Feature cards - two-up layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {/* Card 1 - Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/8 p-10 flex flex-col gap-6 min-h-[380px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(41,149,120,0.08),transparent_60%)]" />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">DRIFT ASSISTANT</p>
              <h3 className="font-display text-3xl font-medium text-white mb-4 leading-tight">Effortless meeting prep</h3>
              <p className="text-white/50 text-base leading-relaxed max-w-sm">
                Ask anything about a household before a call. Drift returns a streaming brief — portfolio drift, open items, recent regulatory changes — all cited, in seconds.
              </p>
            </div>
            {/* Mock UI */}
            <div className="relative z-10 mt-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] font-medium text-white/40 uppercase tracking-widest">Drift Assistant · Johnson Household</span>
              </div>
              <p className="text-[13px] text-white/70 leading-relaxed mb-3">
                "Are we in band on international equity for the Johnsons?"
              </p>
              <div className="border-t border-white/5 pt-3 space-y-1.5">
                <p className="text-[11px] text-white/50 leading-relaxed">
                  ↳ Current intl. equity: <span className="text-accent">18.4%</span> vs IPS target 15–20% <span className="text-white/30">[IPS §4.2]</span>
                </p>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  ↳ In band. No rebalance required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="rounded-3xl bg-gradient-to-br from-[#1a1510] to-[#0d0d0d] border border-white/8 p-10 flex flex-col gap-6 min-h-[380px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,80,20,0.12),transparent_60%)]" />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">DRIFT LEDGER</p>
              <h3 className="font-display text-3xl font-medium text-white mb-4 leading-tight">Easy CCO review</h3>
              <p className="text-white/50 text-base leading-relaxed max-w-sm">
                Every AI action is logged before the advisor sees it. Export a FINRA-ready audit bundle in one click — the CCO always knows exactly what was said and why.
              </p>
            </div>
            {/* Mock Ledger UI */}
            <div className="relative z-10 mt-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">Drift Ledger</span>
                <span className="text-[10px] text-accent font-semibold">● Verified</span>
              </div>
              <div className="space-y-2">
                {["Meeting prep · Johnson · 9:14am", "Vault review · Chen IPS · 9:02am", "Rebalance memo · Park · 8:47am"].map((entry, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-[11px] text-white/50">{entry}</span>
                    <span className="text-[9px] text-white/25 font-mono">SHA-256</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-col feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <span className="text-2xl text-white/60">{f.icon}</span>
              <h4 className="text-base font-semibold text-white">{f.title}</h4>
              <p className="text-sm text-white/45 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
