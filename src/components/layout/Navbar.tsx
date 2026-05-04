"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LeasingModule from "@/components/sections/LeasingModule";

const navLinks = [
  { name: "Why This Property", href: "#stats" },
  { name: "Magnitude", href: "#scale" },
  { name: "Retail", href: "#retail" },
  { name: "Luxury", href: "#luxury" },
  { name: "Dining", href: "#lifestyle" },
  { name: "Attractions", href: "#events" },
  { name: "Events", href: "#events" },
  { name: "Partnership", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-1000 px-6 md:px-12",
          isScrolled ? "py-4" : "py-10"
        )}
      >
        <div className={cn(
          "max-w-screen-2xl mx-auto flex items-center justify-between transition-all duration-1000 rounded-full",
          isScrolled ? "bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-3" : "bg-transparent py-0"
        )}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-serif text-3xl tracking-tighter cursor-pointer group flex items-center"
          >
            GE<span className="text-gold-500 group-hover:ml-2 transition-all duration-500">.</span>
          </motion.div>

          {/* Desktop Nav: Digideck Inspired */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors py-2"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              onClick={() => setIsLeasingOpen(true)}
              className="flex items-center space-x-3 bg-white px-8 py-3 rounded-full group hover:bg-gold-500 transition-all duration-500"
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-black font-bold group-hover:text-white transition-colors">Leasing</span>
              <ArrowUpRight className="w-3 h-3 text-black group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <LeasingModule isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />

      {/* Mobile Menu Overlay: Immersive */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[110] bg-black/90 flex flex-col items-center justify-center md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-white p-4 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center space-y-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-serif text-white/50 hover:text-white transition-all duration-500 hover:scale-110"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
