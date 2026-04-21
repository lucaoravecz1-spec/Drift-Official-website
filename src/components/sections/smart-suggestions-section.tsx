"use client";

import React from 'react';
import { Lightbulb, TrendingUp, Sparkles, BarChartBig } from 'lucide-react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
    index
  }: {icon: React.ElementType;title: string;description: string;index: number;}) =>
  <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        backgroundColor: "rgba(255,255,255,0.08)",
        scale: 1.02,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      className="flex items-start gap-6 rounded-[20px] border border-white/10 p-8 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/[.05] group-hover:bg-accent/10 transition-colors">
        <Icon className="h-6 w-6 text-white group-hover:text-accent transition-colors" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{title}</h3>
        <p className="mt-1 text-base text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
      </div>
    </motion.div>;


const SmartSuggestionsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const words = ["Stay", "ahead", "of", "every", "change"];

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8 lg:gap-12">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative flex h-2.5 w-2.5">
                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></div>
                <div className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></div>
              </div>
              <p className="font-semibold uppercase tracking-[0.1em] text-white/50 text-sm">
                DRIFT INTEL
              </p>
            </motion.div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-md">
              {words.map((word, i) => (
                <motion.h2 
                  key={i}
                  className="font-display text-[56px] font-normal leading-[1.1] -tracking-[0.01em] text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  {word}
                </motion.h2>
              ))}
            </div>
            
            <div className="flex w-full flex-col gap-4 self-stretch">

              <FeatureCard
                icon={TrendingUp}
                title="Client-specific alerts"
                description="Drift monitors every household for regulatory changes, position drift, and concentration risk — surfacing only the alerts that affect your clients."
                index={0}
              />

              <FeatureCard
                icon={Sparkles}
                title="Morning briefing"
                description="Every advisor starts the day with a curated intel digest: what changed overnight, which clients need attention, and what the SEC published."
                index={1}
              />

              <FeatureCard
                icon={BarChartBig}
                title="Compliance-ready citations"
                description="Every Drift Intel alert links back to the source — EDGAR filing, IRS code section, FINRA rule, or custodian feed — so nothing is taken on faith."
                index={2}
              />

            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative h-full w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="sticky top-32 flex flex-col gap-6 rounded-[20px] border border-white/10 bg-white/[.05] p-12"
            >
              <div className="flex items-center gap-4">
                <Lightbulb className="h-7 w-7 flex-shrink-0 text-white" />
                <h3 className="font-display text-3xl font-normal text-white">Drift Intel</h3>
              </div>
              <p className="text-lg leading-relaxed text-white/70">
                Drift watches the finance corpus — SEC EDGAR, IRS code, FINRA rules, 50-state RIA manuals — and cross-references it against every client household overnight. When something changes that affects one of your clients, you know before they call you.
              </p>
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 inline-block self-start rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-white/10">

                  Explore Drift Intel
                </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

};

export default SmartSuggestionsSection;