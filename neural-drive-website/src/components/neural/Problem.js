
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Changed amount from 0.5 to 0.2
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative">
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-6 max-w-5xl"
      >
        {/* Chapter Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#00B4DB] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Chapter One
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
            <span className="block mb-2 sm:mb-4 text-white/40">Millions of people</span>
            <span className="block mb-2 sm:mb-4 text-white/60">lose their voice</span>
            <span className="block text-white">every year.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#8BA3C7] font-light leading-relaxed max-w-3xl"
          >
            From neurological conditions to traumatic injuries — 
            the ability to communicate shouldn't depend on your vocal cords.
          </motion.p>
        </motion.div>

        {/* Parallax Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
        >
          {[
            { number: "5M", label: "People with speech disorders" },
            { number: "18M", label: "Live with paralysis" },
            { number: "$0", label: "Can afford existing BCIs" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#8BA3C7] tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
