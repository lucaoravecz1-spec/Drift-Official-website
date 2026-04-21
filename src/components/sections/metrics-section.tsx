"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const proofPoints = [
  {
    label: "Product posture",
    title: "Grounded in real workflows",
    body: "Built around meeting prep, follow-up, and review instead of abstract AI promises.",
  },
  {
    label: "Systems fit",
    title: "Connects to the stack already in the room",
    body: "CRM, calendar, notes, and internal knowledge can stay part of the operating surface.",
  },
  {
    label: "Trust model",
    title: "Designed for reviewed work",
    body: "Approvals, audit history, and access controls stay visible throughout the workflow.",
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
              Better trust does not come from louder numbers. It comes from showing where the product fits, what kind of work it supports, and how serious teams stay in control.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/56">
              <span className="h-2 w-2 rounded-full bg-[#f1b3ac]" />
              proof over posturing
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
