"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [duration, end]);

  return (
    <span className="text-white font-light text-[3.5rem] md:text-[4.5rem] leading-none tracking-[-0.05em]">
      {count}
      {suffix}
    </span>
  );
}

const proofPoints = [
  {
    label: "Time back",
    title: "22 hours saved each week",
    body: "Less admin drag. More room for client work.",
  },
  {
    label: "Systems fit",
    title: "Fits the tools teams already use",
    body: "CRM, docs, calendars, and internal knowledge stay connected.",
  },
  {
    label: "Trust",
    title: "Built for reviewed work",
    body: "Approvals, audit history, and controls stay in view.",
  },
];

export default function MetricsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl py-24 sm:py-32">
        <motion.div
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-x-8 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-[#efb2ab]">Why it feels more believable</p>
            <p className="mt-6 text-[28px] md:text-[34px] leading-[1.28] font-normal text-white/84 max-w-[640px]">
              Drift is built to remove manual work without hiding how the work gets done.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/56">
              <span className="h-2 w-2 rounded-full bg-[#f1b3ac]" />
              Early pilot teams report up to 22 hours back per week
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-20%", "120%"], opacity: [0, 0.18, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 h-full w-20 -rotate-12 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.2),transparent)] blur-xl"
                />
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/32">Time saved</p>
                <div className="mt-5 flex items-end gap-2">
                  {inView ? <AnimatedCounter end={22} /> : <span className="text-white font-light text-[3.5rem] md:text-[4.5rem] leading-none">0</span>}
                  <span className="pb-2 text-sm uppercase tracking-[0.16em] text-white/42">hours / week</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/54">Reported by early pilot teams using Drift for prep, follow-through, and review.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-20%", "120%"], opacity: [0, 0.16, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-0 h-full w-20 -rotate-12 bg-[linear-gradient(180deg,transparent,rgba(241,179,172,0.22),transparent)] blur-xl"
                />
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/32">Money impact</p>
                <div className="mt-5 flex items-end gap-2">
                  {inView ? <AnimatedCounter end={13} suffix="x" /> : <span className="text-white font-light text-[3.5rem] md:text-[4.5rem] leading-none">0x</span>}
                  <span className="pb-2 text-sm uppercase tracking-[0.16em] text-white/42">firm ROI</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/54">Use this as directional proof until a named customer case study is live.</p>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {proofPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.18 + index * 0.08 }}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-white/30 uppercase text-[10px] font-semibold tracking-[0.12em]">{item.label}</p>
                <h3 className="mt-5 text-[1.35rem] leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
