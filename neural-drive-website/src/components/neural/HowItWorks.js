import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Brain, Radio, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Your Brain Whispers",
    description: "Subvocal micro-movements create unique neural patterns"
  },
  {
    icon: Radio,
    title: "We Listen",
    description: "Advanced sensors capture and decode the silent signals"
  },
  {
    icon: Smartphone,
    title: "Devices Respond",
    description: "Commands execute instantly on your connected devices"
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#00B4DB]/10 to-[#00F5A0]/10 blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-[#667EEA]/10 to-[#00B4DB]/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00B4DB] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-2xl text-[#8BA3C7] max-w-3xl mx-auto leading-relaxed">
            We read the whispers of your mind — safely, silently.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative mb-24 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00B4DB] to-[#00F5A0] p-1"
                  >
                    <div className="w-full h-full rounded-full bg-[#0C1022] flex items-center justify-center">
                      <step.icon className="w-14 h-14 text-[#00B4DB]" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#00B4DB]/10 border border-[#00B4DB]/30 mb-4">
                    <span className="text-[#00B4DB] font-semibold">Step {index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
                  <p className="text-xl text-[#8BA3C7] leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-[#00B4DB] to-[#00F5A0] mt-8 hidden md:block"
                  style={{ top: '100%' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}