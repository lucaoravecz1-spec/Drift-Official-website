"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DemoCtaSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section ref={ref} className="bg-[#f9f9f9] py-24 lg:py-32 w-full min-h-[438px]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div 
            className="flex flex-col gap-6 lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                START YOUR PILOT
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-black md:text-[3.5rem] md:leading-[1.2]">
              Ready to give your advisors 22 hours back?
            </h2>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8 lg:col-span-5 lg:pt-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-zinc-700">
              The average 10-advisor firm saves $1.5M in recovered advisor time and delivers $2.1M in additional tax alpha in year one. The pilot pays for itself before the annual contract is signed.
            </p>
            <div className="mt-2">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block rounded-full bg-black px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 ease-in-out text-center"
                >
                  Request a Pilot
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoCtaSection;
