
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, FileBadge, Award, CheckCircle } from "lucide-react";

const partners = ["A*STAR", "NUS", "SINGHEALTH", "TECH.SG", "SGNOVATE", "ENTERPRISE SG"];
const certificates = [
  { name: "FDA Cleared", icon: ShieldCheck },
  { name: "ISO 13485", icon: FileBadge },
  { name: "CE Marked", icon: Award },
  { name: "HSA Approved", icon: CheckCircle },
];

const Marquee = ({ items, direction = "left", speed = 25 }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  // Duplicate items for a seamless loop
  const extendedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-6 md:mx-10">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};


export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const partnerItems = partners.map(name => (
    <span key={name} className="text-md sm:text-lg md:text-xl font-extralight tracking-widest text-white/30">{name}</span>
  ));

  const certificateItems = certificates.map(cert => (
    <div key={cert.name} className="flex items-center gap-2">
      <cert.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00F5A0]/40" />
      <span className="text-sm sm:text-md md:text-lg font-light text-white/40">{cert.name}</span>
    </div>
  ));

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
      {/* Top Marquee: Partners */}
      <motion.div 
        className="absolute top-0 left-0 w-full py-4 md:py-6 bg-[#0C1022]/60 backdrop-blur-sm z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <Marquee items={partnerItems} speed={40} />
      </motion.div>

      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="neuralGlow">
              <stop offset="0%" stopColor="#00B4DB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F5A0" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {Array.from({ length: 100 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 3;
            
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r="1"
                fill="url(#neuralGlow)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="inline-block mb-12 md:mb-16"
        >
          <div className="text-[#00B4DB] text-sm font-light tracking-[0.3em] uppercase">
            Singapore · 2024
          </div>
        </motion.div>

        {/* Hero Statement */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] mb-8 md:mb-12"
        >
          <span className="block mb-2 sm:mb-4">Silent</span>
          <span className="block bg-gradient-to-r from-white via-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent font-normal">
            communication.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3C7] font-light leading-relaxed">
            What if you could speak without saying a word?
          </p>
        </motion.div>

      </motion.div>
      
      {/* Bottom Marquee: Certificates */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full py-4 md:py-6 bg-[#0C1022]/60 backdrop-blur-sm z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <Marquee items={certificateItems} direction="right" speed={35} />
      </motion.div>
    </section>
  );
}
