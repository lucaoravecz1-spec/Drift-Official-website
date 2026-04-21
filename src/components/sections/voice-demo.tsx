"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Timer, MicVocal, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VoiceExperienceIcon = () =>
<svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">

      <path
      d="M21.5 15.625C22.6875 15.625 24.125 15.125 24.5 14C24.875 12.875 23.9375 11.8125 23.375 11.375C22.25 10.5 20.5625 11.375 19.25 11.9375C17.9375 12.5 16.625 13.5625 15.4375 13.5625C14.25 13.5625 12.8125 13.0625 12.5 12C12.125 10.875 13.0625 9.8125 13.625 9.375C14.75 8.5 16.4375 9.375 17.75 9.9375M10.25 18.0625C9.0625 18.0625 7.625 17.5625 7.25 16.4375C6.875 15.3125 7.8125 14.25 8.375 13.8125C9.5 12.9375 11.1875 13.8125 12.5 14.375"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />

      <rect
      x="1.5"
      y="1.5"
      width="25"
      height="25"
      rx="7"
      stroke="url(#paint0_linear_voice_icon)"
      strokeWidth="2" />

      <defs>
        <linearGradient
        id="paint0_linear_voice_icon"
        x1="28"
        y1="0"
        x2="0"
        y2="28"
        gradientUnits="userSpaceOnUse">

          <stop stopColor="#FF4D00" />
          <stop offset="1" stopColor="#FF7A00" />
        </linearGradient>
      </defs>
    </svg>;


const features = [
{
  icon: MicVocal,
  title: "Personalized voices",
  description: "Tailor your agent's voice to match your brand"
},
{
  icon: ArrowRightLeft,
  title: "Dynamic interrupts",
  description: "Designed to adapt to a global audience"
},
{
  icon: Timer,
  title: "Ultra-low latency",
  description: "Industry-leading voice response time"
}];


export default function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };


  return (
    <section ref={ref} className="container pb-16 sm:pb-24 !w-[1280px] !h-[809px] !max-w-screen-xl">
      <div className="flex flex-col items-center gap-4 text-center mx-auto max-w-2xl">
        <motion.div 
          className="flex items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 animate-pulse"></div>
          <span className="text-label text-text-tertiary">NATURAL VOICE</span>
        </motion.div>
        <motion.h2 
          className="font-display text-4xl leading-tight md:text-5xl md:leading-tight font-medium text-text-primary tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Engage with empathy
        </motion.h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 max-w-5xl mx-auto">
        {features.map((feature, index) =>
        <motion.div 
            key={index} 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
          >
            <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 text-base font-medium text-white">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-text-secondary max-w-[250px]">
              {feature.description}
            </p>
          </motion.div>
        )}
      </div>

      <div className="mt-16 lg:mt-24">
          <motion.div 
            className="bg-surface-elevated border border-border-subtle rounded-[2rem] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center shadow-[0_0_50px_-12px_rgba(255,122,0,0.1)] overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="lg:w-2/5 lg:py-6 z-10">
              <div className="flex items-center gap-3">
                <VoiceExperienceIcon />
                <h3 className="font-display text-3xl font-medium text-white">
                  Voice Experience
                </h3>
              </div>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                Emotionally-aware agents that understand tone, intent, and
                context. Fluidly handle accents, interruptions, and rapid turns of
                conversation to ensure every conversation feels natural.
              </p>
              <motion.a
                href="/voice-options"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-10 text-base font-medium text-white border border-white/20 rounded-full px-8 py-4 hover:border-accent/50 transition-all duration-300">
                <span>Explore Voice Experience</span>
                <Play className="w-3 h-3 fill-white" />
              </motion.a>
            </div>

            <div className="flex-1 w-full self-stretch z-10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black aspect-video lg:aspect-auto group border border-white/10 shadow-2xl">
              <video
                ref={videoRef}
                src="https://framerusercontent.com/assets/lt3r9RT6cCKh8i9Cy7jtB8i2HI.mp4"
                controls
                playsInline
                onEnded={handleVideoEnd}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-100 z-10" : "opacity-0"}`
                } />


                {!isPlaying &&
                <>
                    <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d-giga-ai/assets/images/CMSehIg25fZdZaxossQ9pXfXTI-5.jpg"
                    alt="Voice Experience demo background"
                    fill
                    className="object-cover !w-full !h-full !max-w-full transition-transform duration-1000 group-hover:scale-110 opacity-60"
                    sizes="(max-width: 1024px) 100vw, 60vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                    <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute w-2 h-2 bg-accent rounded-full animate-ping"></span>
                            <span className="relative w-2 h-2 bg-accent rounded-full"></span>
                        </div>
                        <span className="text-xs font-medium tracking-wide">READY TO PLAY</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Duration</span>
                            <span className="text-sm font-mono text-white">0:42</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Quality</span>
                            <span className="text-sm font-mono text-accent">HD 4K</span>
                        </div>
                    </div>

                    <motion.button
                      onClick={handlePlay}
                      aria-label="Play video"
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-accent/20 backdrop-blur-md text-white hover:bg-accent/40 transition-all duration-300 z-30 group/btn"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(255,122,0,0.5)] group-hover/btn:shadow-[0_0_50px_rgba(255,122,0,0.8)] transition-all">
                        <Play className="h-6 w-6 text-white ml-1 fill-white" />
                      </div>
                    </motion.button>
                  </>
                }
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}