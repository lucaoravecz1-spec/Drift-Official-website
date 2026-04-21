"use client";

import { useState } from "react";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactMethods = [
  { title: "Email us", desc: "Get a response within 24 hours", value: "sales@driftsaas.online", href: "mailto:sales@driftsaas.online" },
  { title: "Schedule a call", desc: "Book a 30-minute pilot walkthrough", value: "Book on Calendly →", href: "https://calendly.com/lucaoravecz/30min" },
  { title: "Talk to sales", desc: "For firm and enterprise inquiries", value: "sales@driftsaas.online", href: "mailto:sales@driftsaas.online" },
];

const personas = [
  { icon: "↗", role: "Financial Advisors", desc: "Most advisors are live within a week and feel the difference in the first session." },
  { icon: "⬡", role: "Wealth Managers", desc: "Multi-household, multi-custodian. Drift handles the complexity your clients expect." },
  { icon: "⊕", role: "Accountants & CPAs", desc: "From 1099 review to client memos — cited and audit-ready before the next deadline." },
];

const inputClass = "px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-accent/40 transition-colors";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", firm: "", aum: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ref: heroRef, inView: heroIn } = useInView({ triggerOnce: true });
  const { ref: personasRef, inView: personasIn } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contentRef, inView: contentIn } = useInView({ triggerOnce: true, threshold: 0.06 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`Pilot request from ${formData.name} — ${formData.firm}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nFirm: ${formData.firm}\nAUM: ${formData.aum || "N/A"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales@driftsaas.online?subject=${subject}&body=${body}`;
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        {/* Ambient bg */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-accent/6 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[350px] bg-orange-500/5 rounded-full blur-[110px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-screen-xl relative z-10">

          {/* Hero */}
          <motion.div ref={heroRef} className="mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">CONTACT</p>
            <h1 className="font-display text-5xl md:text-[72px] font-normal text-white leading-[1.04] tracking-tight mb-6">
              Request a pilot
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Most firms are live within a week. Advisors feel the difference in the first session. Your CCO gets the audit trail they've always needed.
            </p>
          </motion.div>

          {/* Persona strip */}
          <div ref={personasRef} className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 border-t border-white/5 pt-10 mb-24">
            {personas.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={personasIn ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2">
                <span className="text-xl text-white/40">{p.icon}</span>
                <h4 className="text-sm font-semibold text-white">{p.role}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Main content: contact methods + form */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact methods */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={contentIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-8">GET IN TOUCH</p>
              <div className="flex flex-col gap-8 border-t border-white/5 pt-8 mb-12">
                {contactMethods.map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={contentIn ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + i * 0.12 }}
                    className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-white">{m.title}</h3>
                    <p className="text-sm text-white/35">{m.desc}</p>
                    <motion.a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      whileHover={{ x: 3 }} className="text-sm text-accent hover:text-accent/80 transition-colors mt-0.5 inline-flex items-center gap-1">
                      {m.value}
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              {/* Social proof card */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={contentIn ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                className="rounded-3xl bg-gradient-to-br from-accent/10 via-[#111] to-[#111] border border-white/8 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/8 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">WHY DRIFT</p>
                  <div className="flex flex-col gap-5">
                    {[
                      { v: "22 hrs", l: "saved per advisor weekly" },
                      { v: "13×", l: "average firm ROI" },
                      { v: "< 1 week", l: "typical onboarding" },
                    ].map((s, i) => (
                      <div key={i} className="flex items-baseline gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <span className="text-2xl font-light text-white">{s.v}</span>
                        <span className="text-xs uppercase tracking-widest text-white/30">{s.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={contentIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
              <motion.div className="rounded-3xl bg-[#111] border border-white/8 p-8 md:p-10"
                whileHover={{ borderColor: "rgba(255,255,255,0.12)" }} transition={{ duration: 0.3 }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-start gap-4 py-8">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-display text-white">Thanks — we'll be in touch.</h2>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Expect a response within one business day. If you'd like to move faster, book directly on Calendly.
                    </p>
                    <motion.a href="https://calendly.com/lucaoravecz/30min" target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white/60 text-sm font-medium px-5 py-2.5 hover:text-white hover:border-white/35 transition-colors">
                      Book a call <ArrowRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-6">PILOT REQUEST</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-white/40">Your name</label>
                          <input type="text" required value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jane Smith" className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-white/40">Work email</label>
                          <input type="email" required value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@firm.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-white/40">Firm name</label>
                          <input type="text" required value={formData.firm}
                            onChange={e => setFormData({ ...formData, firm: e.target.value })}
                            placeholder="Acme Wealth" className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-white/40">AUM (approx.)</label>
                          <input type="text" value={formData.aum}
                            onChange={e => setFormData({ ...formData, aum: e.target.value })}
                            placeholder="e.g. $800M" className={inputClass} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40">What's your biggest pain point right now?</label>
                        <textarea required value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          rows={4} placeholder="Meeting prep, compliance reviews, document review…"
                          className={`${inputClass} resize-none`} />
                      </div>
                      <motion.button type="submit" disabled={loading}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full rounded-full bg-white text-black py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                        {loading ? "Sending…" : <><Send className="w-4 h-4" /> Request a Pilot</>}
                      </motion.button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
