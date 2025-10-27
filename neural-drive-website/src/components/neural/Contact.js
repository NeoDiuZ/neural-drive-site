
"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, message });
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[#00B4DB]/20 to-[#00F5A0]/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Final Chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#00F5A0] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Join Us
        </motion.div>

        {/* Hero Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            We're giving voice back
            <br />
            <span className="bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent">
              to the voiceless.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#8BA3C7] font-light leading-relaxed max-w-2xl mx-auto">
            Be part of the journey. Early access, partnerships, or just curious — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Minimal Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div>
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 border-b border-white/20 rounded-none text-xl sm:text-2xl py-6 px-0 placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-[#00B4DB] transition-colors"
              required
            />
          </div>

          <div>
            <Textarea
              placeholder="Tell us your story..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border-0 border-b border-white/20 rounded-none text-lg sm:text-xl py-6 px-0 placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-[#00B4DB] transition-colors min-h-[120px] resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-lg sm:text-xl text-white hover:text-[#00B4DB] transition-colors"
          >
            <span className="font-light">Send message</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.form>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 md:mt-32 text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-[#8BA3C7]">
            <a href="mailto:hello@neuraldrive.sg" className="hover:text-[#00B4DB] transition-colors">
              mo@neuraldrive.sg
            </a>
            <span className="hidden sm:block">·</span>
            <span>Singapore</span>
            <span className="hidden sm:block">·</span>
            <span>2024</span>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-white/40">
              Accessible Neurotech for Humanity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
