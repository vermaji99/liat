"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, ArrowRight } from "lucide-react";

const paths = [
  {
    id: "retail",
    title: "Retail Brands",
    description: "Secure a global flagship position in the world's most high-traffic retail environment.",
    icon: <ShoppingBag className="w-6 h-6" />,
    href: "#retail",
    color: "from-gold-500/20 to-transparent"
  },
  {
    id: "events",
    title: "Event Organizers",
    description: "Scale your activation across high-capacity venues designed for global impact.",
    icon: <Star className="w-6 h-6" />,
    href: "#contact",
    color: "from-blue-500/20 to-transparent"
  },
  {
    id: "sponsors",
    title: "Sponsors",
    description: "Access 85M+ annual visitors through integrated digital and physical brand ecosystems.",
    icon: <Zap className="w-6 h-6" />,
    href: "#contact",
    color: "from-purple-500/20 to-transparent"
  }
];

export default function SegmentedNav() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-4"
          >
            Choose Your Mandate
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white text-center"
          >
            Tailored for <span className="italic text-gold-500">Your Vision</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, i) => (
            <motion.a
              key={path.id}
              href={path.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative block p-8 rounded-sm bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-gold-500/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-black transition-all duration-500">
                  {path.icon}
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {path.title}
                </h3>
                
                <p className="text-platinum/40 text-sm font-light leading-relaxed mb-8">
                  {path.description}
                </p>
                
                <div className="flex items-center space-x-3 text-gold-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Initialize Path</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
