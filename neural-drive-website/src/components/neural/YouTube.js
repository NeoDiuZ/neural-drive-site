"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function YouTube() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const youtubeId = "CLR19Y1oNJ4";
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#00B4DB]/20 via-[#667EEA]/20 to-[#00F5A0]/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#00F5A0] text-sm font-light tracking-[0.3em] uppercase mb-12 md:mb-16 text-center"
        >
          Watch
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-center mb-8"
        >
          See it in action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[#8BA3C7] font-light leading-relaxed max-w-2xl mx-auto text-center mb-16"
        >
          Experience the power of silent communication through our demonstration.
        </motion.p>

        {/* YouTube Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Video Container */}
          <div className="relative w-full h-full bg-[#0C1022] group">
            <iframe
              src={embedUrl}
              title="Neural Drive Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Optional Link Overlay for mobile */}
          <motion.a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 md:hidden bg-[#0C1022]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <span className="text-white font-light">Tap to watch on YouTube</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#8BA3C7] hover:text-[#00B4DB] transition-colors group"
          >
            <span className="font-light">Watch on YouTube</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


