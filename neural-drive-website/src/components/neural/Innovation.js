
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Innovation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Changed amount from 0.4 to 0.2
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00B4DB]/20 to-[#00F5A0]/20 blur-[120px]"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#667EEA]/20 to-[#00B4DB]/20 blur-[120px]"
      />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 max-w-6xl relative z-10"
      >
        {/* Chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#00F5A0] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Chapter Two
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: Device Visualization */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, rotateY: -30 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square"
            >
              {/* Glowing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-64 h-64 rounded-full bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] blur-[60px]"
                />
              </div>

              {/* Device Representation */}
              <div className="relative flex items-center justify-center h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border-2 border-[#00B4DB]/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 rounded-full border border-[#00F5A0]/20"
                />
                <div className="absolute text-8xl">🧠</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              <span className="block mb-3">Neural Drive</span>
              <span className="block text-[#00B4DB]">reads the whispers</span>
              <span className="block text-white/60">of your mind.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-[#8BA3C7] font-light leading-relaxed">
              <p>
                We've created a non-invasive brain-computer interface that detects 
                subvocal micro-vibrations — the tiny movements your throat makes 
                when you think about speaking.
              </p>
              <p>
                No surgery. No implants. Just silent, natural communication 
                that feels like thinking out loud.
              </p>
            </div>

            {/* Key Specs - Minimalist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { value: "92%", label: "Accuracy" },
                { value: "<10ms", label: "Latency" },
                { value: "Non-invasive", label: "Method" },
                { value: "$500", label: "Target Price" }
              ].map((spec, i) => (
                <div key={i}>
                  <div className="text-3xl font-light text-[#00B4DB] mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm text-[#8BA3C7] tracking-wider uppercase">
                    {spec.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
