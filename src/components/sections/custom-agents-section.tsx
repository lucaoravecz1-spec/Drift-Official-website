"use client";

import { useState } from "react";
import { Briefcase, PenLine, Sparkles, Grid, Globe, BarChart3, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      y: -10, 
      backgroundColor: "rgba(255,255,255,0.08)",
      scale: 1.02,
      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
    }}
    whileTap={{ scale: 0.98 }}
    className="flex-1 rounded-3xl bg-[rgba(255,255,255,0.05)] p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer group border border-white/5"
  >
    <div className="w-6 h-6 text-accent group-hover:scale-110 transition-transform">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-lg text-primary group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-text-secondary group-hover:text-white/80 transition-colors leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const timelineItems = [
  {
    title: "Connect your custodian and CRM",
    description: "Drift integrates with Schwab, Fidelity, Orion, Addepar, Salesforce, and Redtail — pulling live portfolio and client data into every answer."
  },
  {
    title: "Upload client documents to the Vault",
    description: "Drop in IPS agreements, trust instruments, 1099s, and statements. Drift reads them the way a senior associate would, flagging language that doesn't meet the firm's template or the client's state rules."
  },
  {
    title: "Load your firm's playbooks",
    description: "Upload internal memos, model portfolios, and compliance policies. Every answer Drift gives is grounded in your firm's own standards."
  },
  {
    title: "Run meeting prep in seconds",
    description: "Ask Drift to prepare a household brief before any client call. It pulls portfolio drift, open items, recent regulatory changes, and a suggested agenda — all cited."
  },
  {
    title: "CCO reviews in the Ledger",
    description: "Every AI response is written to the append-only Drift Ledger before the advisor sees it. If the ledger is down, the pipeline halts — Drift fails closed, never serves an unlogged answer."
  },
  {
    title: "Export a FINRA-ready audit bundle",
    description: "One click packages your full interaction history, citations, and metadata into a structured bundle ready for an SEC or FINRA examination."
  },
  {
    title: "Build firm-specific skills in Studio",
    description: "Power users can compose custom workflows — tax-loss harvesting sweeps, onboarding packets, annual reviews — gated by CCO approval before they go live."
  }
];

type TimelineItemProps = {
  title: string;
  description: string;
  isActive: boolean;
  isLast: boolean;
  index: number;
  onClick: () => void;
};

const TimelineItem = ({ title, description, isActive, isLast, index, onClick }: TimelineItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="relative pl-6 cursor-pointer group"
    onClick={onClick}
  >
    <div
      className={cn(
        "absolute left-0 top-1.5 w-2 h-2 rounded-full transition-all duration-300 z-10",
        isActive ? "bg-accent scale-125 shadow-[0_0_15px_#299578]" : "bg-muted-foreground group-hover:bg-white/40"
      )}
    />
    {!isLast && (
      <div className="absolute left-[3.5px] top-4 bottom-0 w-px bg-white/5 group-hover:bg-white/10 transition-colors" />
    )}
    <div className={cn("flex flex-col gap-1.5", !isLast && "pb-6")}>
      <p className={cn("text-sm font-medium transition-colors duration-300", isActive ? "text-primary" : "text-text-tertiary group-hover:text-white/60")}>
        {title}
      </p>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.p 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[13px] text-text-secondary overflow-hidden leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

export default function CustomAgentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="bg-[#0a0a0a] w-full overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 py-24 sm:py-32 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-x-20 gap-y-16 items-start">
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="font-semibold text-accent uppercase tracking-[0.08em] text-[11px]">
                THE RIA WORKSPACE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {"Every advisor job, handled end-to-end".split(" ").map((word, i) => (
                <motion.h2 
                  key={i}
                  className="font-display text-5xl font-medium leading-[1.1] text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  {word}
                </motion.h2>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Briefcase className="w-5 h-5" />}
              title="Advisor-Loved"
              description="Advisors feel the 22 hours back inside the first week — no workflow change required."
              index={0}
            />
            <FeatureCard
              icon={<PenLine className="w-5 h-5" />}
              title="CCO-Approved"
              description="Every response logged before delivery. Fail-closed architecture — no unlogged answers, ever."
              index={1}
            />
            <FeatureCard
              icon={<Sparkles className="w-5 h-5" />}
              title="Always Cited"
              description="Every claim links to a source chunk in the Vault, custodian feed, or the finance corpus."
              index={2}
            />
          </div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-[1px] bg-gradient-to-br from-accent/50 to-transparent"
            >
              <div className="bg-[#050505] rounded-[23px] p-8 h-full flex flex-col gap-6 border border-white/5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Grid className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-base text-primary">
                      Drift Studio
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Build custom skills on top of the platform, trained on your firm's own playbook and gated by CCO approval before they go live to any advisor.
                  </p>
                </div>
                <motion.a
                  href="/drift-studio"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="self-start rounded-full border border-white/10 px-6 py-2 text-sm font-medium text-primary transition-all duration-300"
                >
                  Open Studio
                </motion.a>
              </div>
            </motion.div>
            
            <div className="flex flex-col">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  isActive={index === activeIndex}
                  isLast={index === timelineItems.length - 1}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] flex items-center justify-center border border-white/10 overflow-hidden bg-[#020202] shadow-[0_0_100px_-20px_rgba(41,149,120,0.15)] group"
          >
             {/* Visual Canvas Mockup - High Fidelity */}
             <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
             
             {/* Dynamic Light Effects */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/5 via-transparent to-transparent pointer-events-none" />
             
             <div className="relative w-full h-full p-12 overflow-hidden">
               {/* Decorative connections */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <motion.path
                   d="M 100 100 Q 300 150 500 100"
                   stroke="rgba(41,149,120,0.1)"
                   strokeWidth="1"
                   fill="none"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 5, repeat: Infinity }}
                 />
                 <motion.path
                   d="M 100 500 Q 300 450 500 500"
                   stroke="rgba(41,149,120,0.1)"
                   strokeWidth="1"
                   fill="none"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 5, delay: 2, repeat: Infinity }}
                 />
               </svg>

               {/* Center Hub */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 <motion.div
                   animate={{ 
                     scale: [1, 1.05, 1],
                     boxShadow: ["0 0 20px rgba(41,149,120,0.1)", "0 0 40px rgba(41,149,120,0.3)", "0 0 20px rgba(41,149,120,0.1)"]
                   }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-2xl relative"
                 >
                   <Sparkles className="w-10 h-10 text-accent" />
                   {/* Orbiting particles */}
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0"
                   >
                     <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-accent blur-[1px]" />
                   </motion.div>
                 </motion.div>
               </div>

               {/* Nodes - Top Left */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="absolute top-12 left-12 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-52 shadow-2xl z-10"
               >
                 <div className="flex items-center gap-2 mb-3">
                   <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                     <Database className="w-3.5 h-3.5 text-blue-400" />
                   </div>
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Data Input</span>
                 </div>
                 <div className="text-sm font-medium text-white mb-1">Client_Vault_Docs</div>
                 <div className="text-[10px] text-white/40">IPS · Statements · Trust Instruments</div>
               </motion.div>

               {/* Nodes - Bottom Right */}
               <motion.div
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="absolute bottom-12 right-12 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-52 shadow-2xl z-10"
               >
                 <div className="flex items-center gap-2 mb-3">
                   <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                     <BarChart3 className="w-3.5 h-3.5 text-green-400" />
                   </div>
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Insights</span>
                 </div>
                 <div className="text-sm font-medium text-white mb-1">Drift Ledger</div>
                 <div className="flex items-center gap-1">
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       animate={{ width: ["10%", "90%", "60%", "95%"] }}
                       transition={{ duration: 10, repeat: Infinity }}
                       className="h-full bg-green-400" 
                     />
                   </div>
                 </div>
               </motion.div>

               {/* Nodes - Middle Right */}
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="absolute top-1/2 right-8 -translate-y-1/2 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl w-44 shadow-2xl z-10"
               >
                 <div className="flex items-center gap-2 mb-2">
                   <Globe className="w-3 h-3 text-accent" />
                   <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Custodians</span>
                 </div>
                 <div className="flex gap-1">
                   {['SCHW', 'FIDE', 'ORIN', 'ADEP'].map(lang => (
                     <div key={lang} className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[8px] text-white/60 font-bold">{lang}</div>
                   ))}
                 </div>
               </motion.div>
             </div>

             <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-30">
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Drift Assistant · Live</span>
             </div>
             
             {/* Bottom Badge */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full backdrop-blur-md z-30">
               <span className="text-[9px] font-bold text-accent uppercase tracking-[0.2em]">Grounded · Cited · Logged</span>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
