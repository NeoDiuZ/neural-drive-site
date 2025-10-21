
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Humanity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Changed from 0.4 to 0.2
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const testimonials = [
    {
      quote: "For the first time in three years, I told my daughter I loved her. Not through a screen. Through my own thoughts.",
      author: "Sarah Chen",
      condition: "ALS patient"
    },
    {
      quote: "The silence after my stroke was deafening. Neural Drive gave me back my inner voice.",
      author: "Marcus Rodriguez", 
      condition: "Stroke survivor"
    },
    {
      quote: "I don't need to speak to be heard anymore. This technology sees me.",
      author: "Priya Sharma",
      condition: "Cerebral palsy"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1022] via-[#1a1640] to-[#0C1022]" />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 max-w-5xl relative z-10"
      >
        {/* Chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#00F5A0] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Chapter Four
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-center mb-24 md:mb-32"
        >
          This isn't about technology.
          <br />
          <span className="bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent">
            It's about humanity.
          </span>
        </motion.h2>

        {/* Testimonials - Cinematic Layout */}
        <div className="space-y-24 md:space-y-32">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 + index * 0.3 }}
              className="relative"
            >
              {/* Quote Mark */}
              <div className="absolute -top-8 -left-4 text-6xl md:text-8xl text-[#00B4DB]/10 font-serif">"</div>
              
              <blockquote className="relative pl-4 sm:pl-8 border-l border-[#00B4DB]/30">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90 mb-8 italic">
                  {testimonial.quote}
                </p>
                
                <footer className="flex items-center gap-4 sm:gap-6">
                  <div className="w-px h-12 bg-gradient-to-b from-[#00B4DB] to-transparent" />
                  <div>
                    <div className="text-md sm:text-lg font-light text-white mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-xs sm:text-sm text-[#8BA3C7] tracking-wider uppercase">
                      {testimonial.condition}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-[#8BA3C7] font-light leading-relaxed max-w-3xl mx-auto">
            We're not building a product.
            <br />
            We're restoring human connection.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
