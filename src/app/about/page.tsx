"use client";

import { useState } from "react";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "$500M–$5B", label: "AUM range we're built for" },
  { value: "22 hrs", label: "Saved per advisor per week" },
  { value: "13×", label: "Average firm ROI" },
  { value: "SOC 2", label: "Type II (Phase 2 target)" },
];

const personas = [
  { role: "Financial Advisors", icon: "↗", desc: "22 hours a week back. Meeting prep, rebalance memos, IPS reviews — Drift handles it all in the household workspace advisors already use." },
  { role: "Wealth Managers", icon: "⬡", desc: "Multi-account, multi-custodian household answers with full citation. Cross-reference every portfolio position against the client's IPS and the finance corpus." },
  { role: "Accountants & CPAs", icon: "⊕", desc: "Cross-reference 1099s, K-1s, and IRS code in seconds. Draft client memos with source citations before the end of the engagement." },
  { role: "Chief Compliance Officers", icon: "↟", desc: "Every AI action logged before delivery. Fail-closed architecture. FINRA-ready audit bundle in one click. Finally, a CCO drawer." },
];

const principles = [
  { icon: "⬛", title: "Fail closed, not open", desc: "If the Drift Ledger is down, the pipeline halts. We never serve an unlogged answer." },
  { icon: "↗", title: "Citations, not confidence", desc: "Every sentence links to a source chunk. Anything uncited is re-retrieved or dropped." },
  { icon: "↟", title: "Advisor-loved, CCO-approved", desc: "We design for both simultaneously — not one at the expense of the other." },
  { icon: "⊕", title: "Vertical by design", desc: "Architected against the RIA regulatory environment from day one." },
];

const stack = [
  { item: "Next.js", role: "Frontend" },
  { item: "Claude", role: "Inference" },
  { item: "Turbopuffer + OpenSearch", role: "Retrieval" },
  { item: "Postgres + RLS", role: "Data" },
  { item: "Temporal", role: "Workflows" },
  { item: "S3 Object Lock", role: "Ledger" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref: heroRef, inView: heroIn } = useInView({ triggerOnce: true });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSubscribed(true);
    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        {/* Ambient bg */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl relative z-10">

          {/* Hero */}
          <motion.div ref={heroRef} className="mb-24 max-w-4xl" initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">ABOUT DRIFT</p>
            <h1 className="font-display text-5xl md:text-[72px] font-normal text-white leading-[1.04] tracking-tight mb-6">
              The AI for finance
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Drift is the grounded AI workspace for financial professionals — advisors, wealth managers, and accountants. The assistant, document system, and audit trail all in one surface, built around the regulatory environment you work in.
            </p>
          </motion.div>

          {/* Stats */}
          <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-12 mb-24">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }} className="flex flex-col gap-1">
                <p className="text-3xl md:text-4xl font-light text-white">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/30">{s.label}</p>
              </motion.div>
            ))}
          </FadeIn>

          {/* Who we're for */}
          <FadeIn className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-end mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">WHO WE'RE FOR</p>
                <h2 className="font-display text-3xl md:text-[48px] font-normal text-white leading-[1.08] tracking-tight">Built for every financial professional</h2>
              </div>
              <p className="text-base text-white/50 leading-relaxed max-w-lg">One platform for the entire firm — from the advisor desk to the CCO drawer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {personas.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)" }}
                  className="rounded-3xl bg-[#111] border border-white/8 p-7 flex flex-col gap-3 transition-colors">
                  <span className="text-xl text-white/40">{p.icon}</span>
                  <h4 className="text-sm font-semibold text-white">{p.role}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Principles */}
          <FadeIn className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-end mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">HOW WE BUILD</p>
                <h2 className="font-display text-3xl md:text-[48px] font-normal text-white leading-[1.08] tracking-tight">Principles baked into the architecture</h2>
              </div>
              <p className="text-base text-white/50 leading-relaxed max-w-lg">Every product decision is made against the financial regulatory environment first. These aren't values on a wall.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-white/5 pt-10">
              {principles.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-2">
                  <span className="text-xl text-white/40">{p.icon}</span>
                  <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Tech stack */}
          <FadeIn className="mb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-8">UNDER THE HOOD</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stack.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  whileHover={{ borderColor: "rgba(255,255,255,0.2)", y: -2 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/8 p-5 flex flex-col gap-1 transition-all">
                  <p className="text-sm font-medium text-white">{s.item}</p>
                  <p className="text-xs text-white/30">{s.role}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Newsletter */}
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-accent/10 via-[#111] to-[#111] border border-white/8 p-10 md:p-16 max-w-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">STAY IN THE LOOP</p>
                <h2 className="font-display text-3xl md:text-4xl font-normal text-white leading-tight mb-3">Get updates from Drift</h2>
                <p className="text-white/45 text-base mb-8 leading-relaxed">Regulatory watch, product releases, and finance AI insights. No noise.</p>
                {subscribed ? (
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <p className="text-white/70 text-sm">You're on the list.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@firm.com" required
                      className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm" />
                    <button type="submit" disabled={loading}
                      className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 whitespace-nowrap">
                      {loading ? "Subscribing…" : "Subscribe"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>

        </div>
      </main>
      <Footer />
    </>
  );
}
