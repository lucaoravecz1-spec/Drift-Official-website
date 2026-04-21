"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Rocket, DollarSign, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: DollarSign,
    title: "High Commissions",
    description: "Earn up to 30% recurring commission on every customer you refer for their first year."
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Get paid monthly via Stripe with a low $50 minimum threshold."
  },
  {
    icon: Rocket,
    title: "Marketing Kits",
    description: "Access high-converting banners, email templates, and social media assets."
  }
];

export default function AffiliatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Partnership Program
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-normal text-white mb-8 tracking-tight">
                Grow with <span className="text-accent italic">Drift AI</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                Join our affiliate program and earn industry-leading commissions by introducing businesses to the future of AI voice communication.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register?role=affiliate"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 transition-colors shadow-xl shadow-white/5 flex items-center gap-2 group"
                >
                  Become an Affiliate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Partnerships
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">{benefit.title}</h3>
                <p className="text-white/50 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* How it Works */}
          <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-accent/20 to-transparent border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-white mb-6">Simple 3-step process</h2>
                <div className="space-y-6">
                  {[
                    "Sign up for a partner account",
                    "Share your unique referral link",
                    "Earn recurring commissions"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="text-lg text-white/80">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Total Earnings</p>
                        <p className="text-3xl font-display text-accent">$12,450.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Conversion Rate</p>
                        <p className="text-xl text-white">4.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
