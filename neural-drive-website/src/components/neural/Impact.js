import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "For the first time, I spoke without sound. Neural Drive gave me my voice back.",
    author: "Sarah Chen",
    role: "Early Adopter"
  },
  {
    quote: "The technology feels like science fiction, but it's incredibly intuitive and natural.",
    author: "Marcus Rodriguez",
    role: "Accessibility Advocate"
  },
  {
    quote: "Silent communication has opened up possibilities I never thought were possible.",
    author: "Priya Sharma",
    role: "Beta Tester"
  }
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667EEA]/10 via-[#0C1022] to-[#00F5A0]/10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#667EEA] to-[#00F5A0] bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-[#8BA3C7] max-w-2xl mx-auto">
            Transforming lives through accessible neurotech
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f3a] to-[#0C1022] border-[#667EEA]/30 p-8 hover:border-[#667EEA]/60 transition-all duration-300 hover:transform hover:scale-105 h-full relative overflow-hidden group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#667EEA]/0 to-[#00F5A0]/0 group-hover:from-[#667EEA]/5 group-hover:to-[#00F5A0]/5 transition-all duration-300" />
                
                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-[#667EEA] mb-6 opacity-50" />
                  <p className="text-lg text-white/90 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-[#8BA3C7] mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
        >
          {[
            { number: "10K+", label: "Lives Impacted" },
            { number: "45", label: "Countries Reached" },
            { number: "98%", label: "User Satisfaction" }
          ].map((stat, index) => (
            <div key={index}>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] bg-clip-text text-transparent mb-3"
              >
                {stat.number}
              </motion.div>
              <p className="text-[#8BA3C7] text-lg">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}