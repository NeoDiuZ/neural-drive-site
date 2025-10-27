import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Kaushik Thirumaran Manian",
    role: "Co-Founder & CTO",
    bio: "Neuroscientist with 15 years in BCI research",
    image: "/photos/Kaushik.png"
  },
  {
    name: "Sarah Tan",
    role: "Co-Founder & CTO",
    bio: "AI Engineer, ex-Google Brain",
    image: "/photos/Raymond.png"
  },
  {
    name: "James Kumar",
    role: "Head of Design",
    bio: "Product designer focused on accessibility",
    image: "/photos/Mo.png"
  },
  {
    name: "Maya Wong",
    role: "Chief Medical Officer",
    bio: "Neurologist specialized in assistive tech",
    image: "/photos/Nyan.png"
  }
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00B4DB] to-[#667EEA] bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-[#8BA3C7] max-w-2xl mx-auto">
            Built in Singapore by engineers, dreamers, and caregivers
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="bg-[#1a1f3a]/50 border-[#00B4DB]/20 overflow-hidden hover:border-[#00B4DB]/50 transition-all duration-300 hover:transform hover:scale-105 group">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#00B4DB] text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-[#8BA3C7] text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <button className="w-8 h-8 rounded-full bg-[#00B4DB]/10 hover:bg-[#00B4DB]/20 flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4 text-[#00B4DB]" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#00B4DB]/10 hover:bg-[#00B4DB]/20 flex items-center justify-center transition-colors">
                      <Twitter className="w-4 h-4 text-[#00B4DB]" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <Card className="bg-gradient-to-br from-[#00B4DB]/10 to-[#00F5A0]/10 border-[#00B4DB]/30 p-12">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-[#8BA3C7] leading-relaxed">
              We believe that communication is a fundamental human right. 
              Our mission is to make neurotech accessible, affordable, and empowering 
              for everyone who needs it.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}