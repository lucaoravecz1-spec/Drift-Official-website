"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const positions = [
  { title: "Senior AI/ML Engineer", dept: "Engineering", type: "Full-time · Remote", desc: "Build and optimize our retrieval pipeline and inference layer. Experience with RAG, embedding models, and hybrid search required." },
  { title: "Full Stack Engineer", dept: "Engineering", type: "Full-time · Remote", desc: "Own the advisor-facing product surface: streaming UI, Vault upload flows, and the Ledger dashboard. Next.js + TypeScript." },
  { title: "Compliance Engineer", dept: "Engineering", type: "Full-time · Remote", desc: "Build the audit infrastructure that makes Drift defensible under SEC and FINRA examination." },
  { title: "Product Designer", dept: "Design", type: "Full-time · Remote", desc: "Design the advisor workspace and CCO dashboard. You'll own the experience from first question to FINRA export." },
  { title: "RIA Customer Success", dept: "Customer Success", type: "Full-time · Remote", desc: "Own onboarding and expansion for RIA firm pilots. Background in financial services preferred." },
  { title: "Sales — Finance Market", dept: "Sales", type: "Full-time · Remote", desc: "Run pilot-to-contract cycles with advisory, wealth management, and accounting firms." },
];

const perks = [
  { icon: "↗", title: "Remote-first", desc: "Work from anywhere. We care about output, not office hours." },
  { icon: "⬡", title: "Meaningful equity", desc: "Early-stage equity that reflects the value you're helping build." },
  { icon: "⊕", title: "$2K learning budget", desc: "Annual budget for courses, conferences, and anything that makes you sharper." },
  { icon: "↟", title: "No bureaucracy", desc: "Small team. High autonomy. Your decisions ship to production." },
];

export default function CareersPage() {
  const { ref: heroRef, inView: heroIn } = useInView({ triggerOnce: true });
  const { ref: perksRef, inView: perksIn } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: jobsRef, inView: jobsIn } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[300px] bg-accent/4 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl relative z-10">

          <motion.div ref={heroRef} className="mb-24 max-w-3xl" initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">CAREERS</p>
            <h1 className="font-display text-5xl md:text-[72px] font-normal text-white leading-[1.04] tracking-tight mb-6">
              Build the AI for finance
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              We're a small team building the infrastructure that sits at the intersection of AI and financial regulation. If that sounds like an interesting problem, keep reading.
            </p>
          </motion.div>

          {/* Perks */}
          <div ref={perksRef} className="mb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-10">WHY DRIFT</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 border-t border-white/5 pt-10">
              {perks.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={perksIn ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="flex flex-col gap-2">
                  <span className="text-xl text-white/40">{p.icon}</span>
                  <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <div ref={jobsRef} className="mb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">OPEN POSITIONS</p>
            <h2 className="font-display text-3xl md:text-[48px] font-normal text-white leading-[1.08] tracking-tight mb-12">Current openings</h2>
            <div className="divide-y divide-white/5 border-t border-white/5">
              {positions.map((pos, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={jobsIn ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.07 }}
                  className="py-8 flex flex-col md:flex-row md:items-start gap-6 group">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">{pos.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/8">{pos.dept}</span>
                    </div>
                    <p className="text-sm text-white/30 mb-2">{pos.type}</p>
                    <p className="text-sm text-white/50 leading-relaxed max-w-xl">{pos.desc}</p>
                  </div>
                  <motion.a href="mailto:sales@driftsaas.online" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="shrink-0 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-white/35 transition-colors">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-accent/10 via-[#111] to-[#111] border border-white/8 p-10 md:p-16 max-w-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-accent/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">DON'T SEE YOUR ROLE?</p>
              <h2 className="font-display text-3xl font-normal text-white leading-tight mb-3">We're always looking for exceptional people</h2>
              <p className="text-white/45 text-base mb-8 leading-relaxed">Send us a note. Tell us the problem at Drift you'd most want to own.</p>
              <motion.a href="mailto:sales@driftsaas.online" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                Get in touch <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
