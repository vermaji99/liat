"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-20 md:pt-32 pb-12 md:pb-20 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Emotional Final Section */}
      <div className="container mx-auto px-6 mb-20 md:mb-32">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-9xl font-serif text-white mb-8 md:mb-12 leading-tight"
          >
            A Legacy <br />
            <span className="italic text-gold-500">Redefined.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-platinum/40 text-lg md:text-2xl font-light leading-relaxed mb-10 md:mb-16 max-w-2xl"
          >
            Be part of the world&apos;s most significant commercial destination. Your global presence begins here.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-gold-500 text-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-white transition-all duration-500"
            >
              Start Leasing Inquiry
            </button>
            <button 
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-white/5 border border-white/10 text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore Sponsorship
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pt-12 md:pt-20 border-t border-white/5">
          <div className="text-white font-serif text-2xl md:text-3xl tracking-tighter">
            GE<span className="text-gold-500">.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Instagram", "LinkedIn", "Vogue Business", "Architectural Digest"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 hover:text-gold-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/20 text-center md:text-left">
            © 2026 THE GRAND ESTATE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
