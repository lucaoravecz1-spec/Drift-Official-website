"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: "⬡",
    title: "Client-specific alerts",
    description: "Drift monitors every household for regulatory changes, position drift, and concentration risk — only surfaces alerts that affect your clients."
  },
  {
    icon: "↗",
    title: "Improve any KPI",
    description: "Set goals around meeting prep time, compliance turnaround, or rebalance velocity and watch Drift surface the actions that move the needle."
  },
  {
    icon: "⊕",
    title: "Actionable every morning",
    description: "Implement recommended workflows directly from the Intel briefing — one click to draft the memo, send the alert, or open the rebalance."
  }
];

export default function InsightsDemo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="w-full">
      {/* Top row: label + big headline left, description text right */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-end mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-accent text-base">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Drift Intel</p>
          </div>
          <h2 className="font-display text-4xl md:text-[56px] font-normal text-white leading-[1.08] tracking-tight">
            The more you use it,<br />the sharper it gets
          </h2>
        </div>
        <div className="flex flex-col gap-6 lg:pb-2">
          <p className="text-lg text-white/50 leading-relaxed max-w-md">
            Drift watches the finance corpus — SEC EDGAR, IRS code, FINRA rules, 50-state RIA manuals — overnight and cross-references it against every client household. When something changes that affects one of your clients, you know before they call.
          </p>
          <motion.a
            href="/products"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
            whileTap={{ scale: 0.97 }}
            className="self-start rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all duration-300"
          >
            Explore Drift Intel
          </motion.a>
        </div>
      </motion.div>

      {/* Feature 3-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 border-t border-white/8 pt-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="flex flex-col gap-3"
          >
            <span className="text-xl text-white/50">{f.icon}</span>
            <h4 className="text-base font-semibold text-white">{f.title}</h4>
            <p className="text-sm text-white/45 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative intel card */}
      <motion.div
        className="mt-16 rounded-3xl border border-white/8 bg-[#0f0f0f] p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="md:col-span-1 flex flex-col justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/25 mb-2">Morning Intel · Today</p>
            <h4 className="text-lg font-semibold text-white leading-snug mb-2">3 households flagged overnight</h4>
            <p className="text-sm text-white/40 leading-relaxed">SEC Rule 206(4)-1 updated guidance affects 2 client marketing materials in your vault.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-accent font-medium">Drift Intel · Live</span>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Regulatory alerts", value: "3", change: "2 new since yesterday", color: "text-orange-400" },
            { label: "Portfolio drift detected", value: "7", change: "households out of band", color: "text-accent" },
            { label: "Tax alpha opportunity", value: "$48K", change: "estimated across 4 clients", color: "text-blue-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] rounded-2xl border border-white/5 p-5 flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-widest text-white/25">{stat.label}</p>
              <p className={`text-3xl font-light ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-white/35 leading-snug">{stat.change}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
