"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ transform: `translate3d(0, ${offsetY * 0.25}px, 0)` }}
        >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d-giga-ai/assets/images/x1ioW6hoCO0EWJfApnLyqDWxrs-1.png"
          alt="Drift AI Hero"
          fill
          className="object-cover object-center opacity-60 scale-[1.03]"
          quality={100}
          priority
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-8%] bg-[radial-gradient(circle_at_18%_28%,rgba(240,178,171,0.16),transparent_20%),radial-gradient(circle_at_78%_24%,rgba(244,215,171,0.12),transparent_18%),radial-gradient(circle_at_50%_82%,rgba(149,187,255,0.14),transparent_22%)] mix-blend-screen"
          animate={
            shouldReduceMotion
              ? { opacity: 0.55 }
              : {
                  opacity: [0.45, 0.72, 0.5],
                  scale: [1, 1.03, 1],
                  x: [0, 18, -10, 0],
                  y: [0, -14, 8, 0],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-[8%] left-[-14%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0))] blur-3xl"
          animate={
            shouldReduceMotion
              ? { opacity: 0.24 }
              : {
                  x: ["0%", "18%", "4%", "0%"],
                  y: ["0%", "-5%", "7%", "0%"],
                  rotate: [0, 4, -3, 0],
                  opacity: [0.18, 0.3, 0.2, 0.18],
                }
          }
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[18%] right-[-10%] h-[24rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(255,230,200,0.22),rgba(255,230,200,0))] blur-[90px]"
          animate={
            shouldReduceMotion
              ? { opacity: 0.18 }
              : {
                  x: [0, -40, 16, 0],
                  y: [0, 16, -10, 0],
                  scale: [1, 1.08, 0.98, 1],
                  opacity: [0.14, 0.24, 0.16, 0.14],
                }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:160px_160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.52),rgba(10,10,10,0.16)_34%,rgba(10,10,10,0.28)_70%,rgba(10,10,10,0.62))]" />
        {!shouldReduceMotion && (
          <>
            <motion.div
              aria-hidden="true"
              className="absolute left-[-18%] top-[30%] h-px w-[55%] bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[1px]"
              animate={{ x: ["0%", "54%"], opacity: [0, 0.35, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.8 }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute right-[-16%] top-[46%] h-px w-[46%] bg-gradient-to-r from-transparent via-[#ffd2b7]/40 to-transparent blur-[1px]"
              animate={{ x: ["0%", "-58%"], opacity: [0, 0.28, 0] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.4, delay: 1.2 }}
            />
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-screen-xl min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-24">
        <div className="max-w-4xl w-full flex flex-col items-center">
          {/* Label */}
          <motion.div
            className="mb-8 flex items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#17ff6d]" />
            </span>
            <span className="font-accent text-[0.84rem] font-normal uppercase tracking-[0.22em] text-white/62">
              Built for RIAs and independent advisors
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-8 font-display text-5xl leading-[1.02] tracking-[-0.02em] text-white md:text-7xl lg:text-[88px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            The AI Agent Built<br />for Financial<br />Advisors
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mb-10 max-w-xl text-lg md:text-xl text-white/55 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Drift is a financial advisor AI platform built for RIA workflow automation, AI meeting notes for advisors, client email drafting, document summaries, and compliance workflow automation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300"
              >
                Book a 15-Minute Demo
              </motion.div>
            </Link>
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/20 bg-white/[0.04] text-white px-7 py-3.5 text-sm font-medium flex items-center gap-2 backdrop-blur-xl transition-all duration-300"
              >
                See the Platform <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="rounded-full border border-white/10 bg-black/22 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/52 backdrop-blur-xl">
              meeting capture
            </div>
            <div className="rounded-full border border-white/10 bg-black/22 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/52 backdrop-blur-xl">
              automated follow-through
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/22 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/52 backdrop-blur-xl">
              <ShieldCheck className="h-3.5 w-3.5 text-[#f1b3ac]" />
              compliance workflows
            </div>
          </motion.div>
        </div>

        {/* Custodian logos row */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pt-8 border-t border-white/10 w-full max-w-screen-xl px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30">Integrates with</span>
          {["Schwab", "Fidelity", "Orion", "Addepar", "Salesforce"].map((name) => (
            <span key={name} className="text-sm font-medium text-white/40 transition-colors hover:text-white/70">{name}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
