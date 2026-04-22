"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Workflow, Zap } from "lucide-react";

const cards = [
  {
    icon: Workflow,
    title: "Connect your workflow",
    body: "Keep CRM, documents, and review steps in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Keep control visible",
    body: "Approvals, audit trails, and handoffs stay clear.",
  },
  {
    icon: Zap,
    title: "Move faster",
    body: "Cut prep and follow-through without adding chaos.",
  },
];

export default function HomeSummary() {
  return (
    <section id="product-story" className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1380px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f0b1ac]">
            Why teams choose Drift
          </p>
          <h2 className="mt-5 max-w-lg text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.03] tracking-[-0.045em] text-white">
            Less busywork. More control.
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/58">
            Drift gives financial teams one calmer system for prep, review, and follow-through.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            See the product
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <card.icon className="h-5 w-5 text-[#f1b3ac]" />
              <h3 className="mt-5 text-[1.35rem] leading-tight text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/56">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
