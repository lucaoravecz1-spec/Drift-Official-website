"use client";

import Link from "next/link";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { Play, Layers, Sparkles, Wand2, MessageSquare, Settings, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Visual Agent Builder",
    description: "Drag-and-drop interface to design conversation flows. No coding required—just connect nodes and define responses."
  },
  {
    icon: MessageSquare,
    title: "Conversation Designer",
    description: "Craft natural dialogue paths with branching logic. Preview conversations in real-time as you build."
  },
  {
    icon: Layers,
    title: "Template Library",
    description: "Start with pre-built templates for common use cases: appointment booking, FAQ handling, lead qualification, and more."
  },
  {
    icon: Settings,
    title: "Advanced Customization",
    description: "Fine-tune voice parameters, response timing, and personality traits to match your brand perfectly."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations for improving conversation flows based on real caller interactions."
  },
  {
    icon: Play,
    title: "Live Testing",
    description: "Test your agent instantly with our built-in simulator. Make calls to your agent before going live."
  }
];

export default function DriftStudioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">DRIFT STUDIO</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Build Your AI Agent<br />Without Code
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Drift Studio is our powerful visual builder that lets you create, customize, and deploy voice AI agents in minutes. Design complex conversation flows with an intuitive drag-and-drop interface.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Request Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mb-20">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-accent" />
                </div>
                <p className="text-white/60">Interactive Demo Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-label text-accent mb-4">FEATURES</p>
              <h2 className="text-3xl md:text-4xl font-display mb-4">Everything You Need to Build</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-display mb-4">Ready to Start Building?</h2>
              <p className="text-white/60 mb-6">
                Schedule a demo with our team and see Drift Studio in action.
              </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
