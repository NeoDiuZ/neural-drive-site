
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const team = [
    {
      name: "Dr. Wei Lin",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
    },
    {
      name: "Sarah Tan",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
    },
    {
      name: "James Kumar",
      role: "Design",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop"
    },
    {
      name: "Maya Wong",
      role: "Medical",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#667EEA]/10 to-[#00B4DB]/10 blur-[100px]"
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
          className="text-[#667EEA] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Chapter Five
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 md:mb-12">
            Built in Singapore.
            <br />
            <span className="text-white/40">For the world.</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3C7] font-light leading-relaxed max-w-3xl mx-auto">
            By engineers, dreamers, and caregivers who believe that 
            communication is a fundamental human right.
          </p>
        </motion.div>

        {/* Team - Minimal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-32">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1022] via-transparent to-transparent opacity-60" />
              </div>
              <div className="text-center">
                <div className="text-lg font-light mb-1">{member.name}</div>
                <div className="text-sm text-[#8BA3C7] tracking-wider uppercase">{member.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="py-12 md:py-16 px-4 sm:px-8 border-t border-b border-[#00B4DB]/20">
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
              <span className="text-white/60">Our vision is simple:</span>
              <br />
              <span className="text-white">Make neurotech as accessible as a smartphone.</span>
              <br />
              <span className="bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent">
                Give voice back to the voiceless.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
