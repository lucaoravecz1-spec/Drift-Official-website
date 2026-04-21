"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { Volume2, Globe, Sliders, Users, Mic2, ArrowRight } from "lucide-react";

const voiceFeatures = [
{
  icon: Volume2,
  title: "Natural Voice Synthesis",
  description: "Our proprietary voice technology creates speech indistinguishable from human conversation. Every inflection, pause, and tone feels authentic."
},
{
  icon: Globe,
  title: "30+ Languages",
  description: "Support customers globally with native-sounding voices in over 30 languages, including regional accents and dialects."
},
{
  icon: Sliders,
  title: "Voice Customization",
  description: "Adjust pitch, speed, warmth, and energy levels. Create the perfect voice personality for your brand."
},
{
  icon: Users,
  title: "Multiple Voice Personas",
  description: "Use different voices for different purposes—a professional tone for support, friendly for sales, calm for healthcare."
},
{
  icon: Mic2,
  title: "Custom Voice Cloning",
  description: "Enterprise customers can create custom voices that match their brand identity or existing voice talent."
}];


const voiceStyles = [
{ name: "Professional", description: "Clear, confident, and business-appropriate" },
{ name: "Friendly", description: "Warm, approachable, and conversational" },
{ name: "Calm", description: "Soothing, patient, and reassuring" },
{ name: "Energetic", description: "Upbeat, enthusiastic, and engaging" }];


export default function VoiceOptionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">VOICE OPTIONS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Voices That Sound<br />Human
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Choose from dozens of natural-sounding voices or create your own. Our advanced voice synthesis technology delivers conversations that feel genuinely human.
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-label text-accent mb-4">CAPABILITIES</p>
              <h2 className="text-3xl md:text-4xl font-display mb-4">Voice Technology Features</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voiceFeatures.map((feature) =>
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors">

                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-label text-accent mb-4">VOICE STYLES</p>
              <h2 className="text-3xl md:text-4xl font-display mb-4">Find Your Perfect Voice</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {voiceStyles.map((style) =>
              <div
                key={style.name}
                className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 text-center">

                  <h3 className="text-xl font-medium text-white mb-2">{style.name}</h3>
                  <p className="text-white/60 text-sm">{style.description}</p>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-display mb-4">Hear the Difference</h2>
              <p className="text-white/60 mb-6">
                Schedule a demo to experience our voice technology firsthand.
              </p>
              <a
                href="https://calendly.com/lucaoravecz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors">

                Request Demo <ArrowRight className="!w-5 !h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>);

}