"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import Hero from "@neural/Hero";
import Problem from "@neural/Problem";
import Innovation from "@neural/Innovation";
import Science from "@neural/Science";
import Humanity from "@neural/Humanity";
import Vision from "@neural/Vision";
import Contact from "@neural/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="bg-[#0C1022] text-white overflow-x-hidden">
      {/* Minimal Progress Line */}
      <motion.div
        className="fixed top-0 left-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#00B4DB] via-[#667EEA] to-[#00F5A0] origin-top z-50 opacity-30"
        style={{ scaleY: scrollYProgress }}
      />

      <Hero />
      <Problem />
      <Innovation />
      <Science />
      <Humanity />
      <Vision />
      <Contact />
    </div>
  );
}
