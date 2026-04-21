"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tabs = [
  { id: "assistant", label: "Drift Assistant" },
  { id: "vault", label: "Drift Vault" },
  { id: "ledger", label: "Drift Ledger" },
  { id: "intel", label: "Drift Intel" },
];

const demos: Record<string, { headline: string; sub: string; ui: React.ReactNode }> = {
  assistant: {
    headline: "Ask anything about any client household",
    sub: "Grounded answers with streaming citations. Works for RIAs, wealth managers, and accountants.",
    ui: <AssistantDemo />,
  },
  vault: {
    headline: "Document review in seconds, not hours",
    sub: "Upload IPS agreements, trust instruments, and 1099s. Drift flags every issue before it becomes a problem.",
    ui: <VaultDemo />,
  },
  ledger: {
    headline: "Every AI action, permanently logged",
    sub: "Append-only, cryptographically signed. FINRA-ready audit export in one click.",
    ui: <LedgerDemo />,
  },
  intel: {
    headline: "Know before your clients call you",
    sub: "Morning briefing with client-specific regulatory alerts and tax alpha opportunities.",
    ui: <IntelDemo />,
  },
};

function AssistantDemo() {
  const [step, setStep] = useState(0);
  const messages = [
    { from: "user", text: "Are we in band on international equity for the Johnson household?" },
    { from: "drift", text: "Current intl. equity: 18.4% vs IPS target 15–20% [IPS §4.2 · Johnson_IPS_2024.pdf]. In band — no rebalance required." },
    { from: "user", text: "Draft a rebalance memo and follow-up email in their voice." },
    { from: "drift", text: "Generating rebalance memo… ✓ Done. Drafting follow-up email in client voice… ✓ Done. Both logged to Drift Ledger." },
  ];
  const visible = messages.slice(0, step + 1);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/8">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Drift Assistant · Johnson Household</span>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-auto">
        <AnimatePresence>
          {visible.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-2xl px-4 py-3 text-sm max-w-[85%] leading-relaxed ${
                m.from === "user" ? "bg-white/10 text-white/80" : "bg-accent/10 border border-accent/20 text-white/80"}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="px-5 py-4 border-t border-white/8 flex gap-2">
        <input readOnly value={step < messages.length - 1 ? messages[step + 1]?.from === "user" ? messages[step + 1]?.text : "" : ""}
          placeholder="Ask about any client…"
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white/60 placeholder:text-white/25 focus:outline-none" />
        <button onClick={() => setStep(s => Math.min(s + 1, messages.length - 1))}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent/80 transition-colors">
          {step < messages.length - 1 ? "Send →" : "Reset"}
        </button>
      </div>
    </div>
  );
}

function VaultDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const docs = [
    { name: "Johnson_IPS_2024.pdf", status: "2 flags", color: "text-orange-400", issues: ["§6.1 equity cap exceeds conservative limit", "Beneficiary designation missing state notarization"] },
    { name: "Chen_Trust_Instrument.pdf", status: "✓ Clean", color: "text-accent", issues: [] },
    { name: "Park_1099-DIV_2024.pdf", status: "✓ Ingested", color: "text-accent", issues: [] },
    { name: "Williams_IPS_2023.pdf", status: "1 flag", color: "text-orange-400", issues: ["IPS not updated since 2023 — state rule change in Jan 2024 may apply"] },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Drift Vault · Document Review</span>
      </div>
      <div className="flex-1 divide-y divide-white/5 overflow-auto">
        {docs.map((d, i) => (
          <div key={i}>
            <button onClick={() => setSelected(selected === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/3 transition-colors text-left">
              <span className="text-sm text-white/70">{d.name}</span>
              <span className={`text-xs font-medium ${d.color}`}>{d.status}</span>
            </button>
            <AnimatePresence>
              {selected === i && d.issues.length > 0 && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-orange-500/5 border-t border-orange-500/10">
                  {d.issues.map((issue, j) => (
                    <p key={j} className="px-5 py-2.5 text-xs text-orange-300/80 leading-relaxed">⚠ {issue}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 border-t border-white/8">
        <div className="rounded-xl border border-white/10 border-dashed py-4 flex items-center justify-center gap-2 text-sm text-white/30 hover:text-white/50 hover:border-white/20 transition-colors cursor-pointer">
          <span>+ Drop documents to review</span>
        </div>
      </div>
    </div>
  );
}

function LedgerDemo() {
  const entries = [
    { action: "Meeting prep · Johnson household", advisor: "S. Park", time: "9:14am", hash: "a3f9…b2e1", status: "Verified" },
    { action: "Vault review · Chen IPS §6.1", advisor: "M. Chen", time: "9:02am", hash: "c7d2…99fa", status: "Verified" },
    { action: "Rebalance memo · Park portfolio", advisor: "S. Park", time: "8:47am", hash: "f1b3…44dc", status: "Verified" },
    { action: "Tax-loss harvest · Williams acct", advisor: "J. Lee", time: "8:31am", hash: "88e5…c310", status: "Verified" },
    { action: "IPS flag · Williams 2023 IPS", advisor: "J. Lee", time: "8:30am", hash: "2ab7…f091", status: "Verified" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Drift Ledger · Today</span>
        <span className="text-xs text-accent font-medium">● All entries verified</span>
      </div>
      <div className="flex-1 divide-y divide-white/5 overflow-auto">
        {entries.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="px-5 py-3.5 flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <span className="text-sm text-white/70 truncate">{e.action}</span>
              <span className="text-xs text-white/30">{e.advisor} · {e.time}</span>
            </div>
            <div className="flex flex-col items-end gap-0.5 shrink-0">
              <span className="text-[10px] font-mono text-white/25">{e.hash}</span>
              <span className="text-[10px] text-accent">{e.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-4 border-t border-white/8">
        <button className="w-full rounded-full border border-white/15 py-2.5 text-sm text-white/50 hover:text-white hover:border-white/30 transition-colors">
          Export FINRA audit bundle →
        </button>
      </div>
    </div>
  );
}

function IntelDemo() {
  const alerts = [
    { severity: "high", title: "SEC Rule 206(4)-1 guidance updated", households: "2 households affected", action: "Review marketing materials in Vault" },
    { severity: "medium", title: "Portfolio drift detected · Johnson", households: "Intl. equity at 21.2% — above 20% IPS cap", action: "Review rebalance options" },
    { severity: "low", title: "Tax-loss harvest opportunity", households: "Williams, Park, Chen · Est. $48K alpha", action: "Run harvest workflow" },
  ];
  const colors: Record<string, string> = { high: "text-red-400 border-red-500/20 bg-red-500/5", medium: "text-orange-400 border-orange-500/20 bg-orange-500/5", low: "text-accent border-accent/20 bg-accent/5" };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Drift Intel · Morning Briefing</span>
        <span className="text-xs text-white/30">Today · 3 alerts</span>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-auto">
        {alerts.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`rounded-2xl border p-4 ${colors[a.severity]}`}>
            <div className="flex items-start justify-between gap-3 mb-1">
              <span className="text-sm font-medium text-white/80 leading-snug">{a.title}</span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors[a.severity]} shrink-0`}>{a.severity}</span>
            </div>
            <p className="text-xs text-white/40 mb-2 leading-relaxed">{a.households}</p>
            <p className="text-xs font-medium text-white/60">→ {a.action}</p>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-4 border-t border-white/8 grid grid-cols-3 gap-3">
        {[{ v: "3", l: "Alerts" }, { v: "7", l: "Households" }, { v: "$48K", l: "Tax alpha" }].map((s, i) => (
          <div key={i} className="flex flex-col items-center bg-white/3 rounded-xl py-2.5">
            <span className="text-lg font-light text-white">{s.v}</span>
            <span className="text-[10px] text-white/30 uppercase tracking-wider">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductDemoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("assistant");
  const demo = demos[activeTab];

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl relative z-10">
        {/* Header */}
        <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">INTERACTIVE DEMO</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 items-end">
            <h2 className="font-display text-4xl md:text-[56px] font-normal text-white leading-[1.06] tracking-tight">
              See Drift in action
            </h2>
            <p className="text-base text-white/45 leading-relaxed max-w-md lg:pb-1">
              Click through each module to explore how Drift works for financial advisors, wealth managers, and accounting teams.
            </p>
          </div>
        </motion.div>

        {/* Tab bar */}
        <motion.div className="flex flex-wrap gap-2 mb-8" initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id ? "bg-white text-black" : "border border-white/15 text-white/50 hover:text-white hover:border-white/30"}`}>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Demo panel */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>

          {/* Left: description */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h3 className="font-display text-2xl md:text-3xl font-normal text-white leading-tight mb-4">{demo.headline}</h3>
                <p className="text-white/45 text-base leading-relaxed mb-8">{demo.sub}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-col gap-4">
              {["Financial Advisors", "Wealth Managers", "Accountants & CPAs"].map((role, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-white/50">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: interactive UI */}
          <div className="relative rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden shadow-[0_0_80px_-20px_rgba(41,149,120,0.15)]" style={{ minHeight: 480 }}>
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              {["bg-red-500/40", "bg-yellow-500/40", "bg-green-500/40"].map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="h-full" style={{ minHeight: 440 }}>
                {demo.ui}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
