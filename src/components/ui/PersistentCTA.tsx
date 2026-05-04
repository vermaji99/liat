"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function PersistentCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first section (Hero)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-10 right-10 z-[100] hidden md:block"
        >
          <Magnetic strength={0.1}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center space-x-4 bg-white p-2 pr-8 rounded-full shadow-2xl overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                <MessageSquare size={20} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold leading-none mb-1">Commercial</span>
                <span className="text-xs text-black font-bold whitespace-nowrap">Secure Mandate</span>
              </div>
              <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                <ArrowRight size={14} className="text-gold-500" />
              </div>
              
              {/* Subtle animated border */}
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 rounded-full transition-colors duration-500" />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
