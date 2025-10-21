
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Brain, Zap, Smartphone } from "lucide-react";

export default function Science() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Changed amount from 0.3 to 0.2
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#667EEA] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Chapter Three
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-center mb-24 md:mb-32"
        >
          The science is simple.
          <br />
          <span className="text-white/40">The impact is profound.</span>
        </motion.h2>

        {/* Process Flow with Parallax */}
        <div className="space-y-32 md:space-y-48">
          {/* Step 1 */}
          <motion.div 
            style={{ y: y1 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00B4DB]/20 to-transparent border border-[#00B4DB]/40 flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-12 h-12 md:w-16 md:h-16 text-[#00B4DB]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1"
            >
              <div className="text-sm text-[#00B4DB] tracking-widest uppercase mb-4">
                Step One
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                You think about speaking
              </h3>
              <p className="text-lg md:text-xl text-[#8BA3C7] font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                Your brain sends signals to your vocal apparatus. 
                Even when you don't vocalize, these signals create microscopic movements.
              </p>
            </motion.div>
          </motion.div>

          {/* Connection Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-px h-24 md:h-32 bg-gradient-to-b from-[#00B4DB] via-[#667EEA] to-[#00F5A0] mx-auto origin-top"
          />

          {/* Step 2 */}
          <motion.div 
            style={{ y: y2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 text-center md:text-right"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#667EEA]/20 to-transparent border border-[#667EEA]/40 flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#667EEA]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex-1"
            >
              <div className="text-sm text-[#667EEA] tracking-widest uppercase mb-4">
                Step Two
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Neural Drive captures the signal
              </h3>
              <p className="text-lg md:text-xl text-[#8BA3C7] font-light leading-relaxed max-w-xl md:ml-auto mx-auto md:mx-0">
                Our sensors detect these micro-vibrations with 92% accuracy. 
                Advanced AI decodes your intended words in real-time.
              </p>
            </motion.div>
          </motion.div>

          {/* Connection Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-px h-24 md:h-32 bg-gradient-to-b from-[#667EEA] via-[#00F5A0] to-[#00B4DB] mx-auto origin-top"
          />

          {/* Step 3 */}
          <motion.div 
            style={{ y: y3 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00F5A0]/20 to-transparent border border-[#00F5A0]/40 flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-[#00F5A0]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex-1"
            >
              <div className="text-sm text-[#00F5A0] tracking-widest uppercase mb-4">
                Step Three
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Your devices respond instantly
              </h3>
              <p className="text-lg md:text-xl text-[#8BA3C7] font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                Commands execute in under 10 milliseconds. 
                Control your phone, computer, or smart home — all with silent speech.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
