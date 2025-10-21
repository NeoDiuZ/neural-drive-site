import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Send, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#00B4DB]/20 to-[#00F5A0]/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-[#1a1f3a]/80 to-[#0C1022]/80 border-[#00B4DB]/30 backdrop-blur-xl overflow-hidden">
            <div className="p-12 md:p-16 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1, rotate: [0, 10, -10, 0] } : {}}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.2 },
                  rotate: { duration: 0.6, delay: 0.7 }
                }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0C1022] flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-[#00B4DB]" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                We're giving voice back to the voiceless
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-[#8BA3C7] mb-12 leading-relaxed max-w-2xl mx-auto"
              >
                Join us on our journey to make neurotech accessible to everyone. 
                Whether you're interested in early access, partnerships, or just want to learn more.
              </motion.p>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-xl mx-auto space-y-6 mb-8"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0C1022]/50 border-[#00B4DB]/30 text-white placeholder:text-[#8BA3C7] h-14 text-lg focus:border-[#00B4DB]"
                  required
                />
                <Textarea
                  placeholder="Tell us about your interest..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#0C1022]/50 border-[#00B4DB]/30 text-white placeholder:text-[#8BA3C7] min-h-[120px] text-lg focus:border-[#00B4DB] resize-none"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00B4DB] to-[#00F5A0] hover:shadow-[0_0_40px_rgba(0,180,219,0.5)] transition-all duration-300 text-lg h-14 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Join Our Journey
                </Button>
              </motion.form>

              {/* Alternative CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="text-[#00B4DB] hover:text-[#00F5A0] transition-colors flex items-center gap-2 group">
                  <Mail className="w-5 h-5" />
                  <span>hello@neuraldrive.sg</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Bottom gradient bar */}
            <div className="h-2 bg-gradient-to-r from-[#00B4DB] via-[#667EEA] to-[#00F5A0]" />
          </Card>
        </motion.div>

        {/* Final tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12 text-[#8BA3C7] text-lg"
        >
          Accessible Neurotech for Humanity
        </motion.p>
      </div>
    </section>
  );
}