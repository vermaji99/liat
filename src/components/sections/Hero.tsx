"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";
import { cn, handleMediaError } from "@/lib/utils";

const targetPersonas = [
  { id: "retailer", label: "Retail Brands", message: "A world-class destination for your global flagship." },
  { id: "sponsor", label: "Sponsors", message: "Access 85M+ annual visitors through digital dominance." },
  { id: "organizer", label: "Event Organizers", message: "Scale your activation across high-capacity venues." }
];

export default function Hero() {
  const [persona, setPersona] = useState(targetPersonas[0]);
  const [isAILoading, setIsAILoading] = useState(false);
  const containerRef = useRef(null);

  const switchPersona = (p: typeof targetPersonas[0]) => {
    setIsAILoading(true);
    setTimeout(() => {
      setPersona(p);
      setIsAILoading(false);
    }, 800);
  };
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  const titleWords = "The Global Stage".split(" ");

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black px-4"
    >
      {/* Background Video with Cinematic Motion */}
      <motion.div 
        style={{ y, scale, filter: blur }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          onError={handleMediaError}
          className="h-full w-full object-cover scale-110"
          poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-interior-of-a-modern-restaurant-41481-large.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          style={{ opacity }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-4 mb-6 md:mb-12 bg-white/5 backdrop-blur-md border border-white/10 px-4 md:px-6 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 tracking-[0.4em] uppercase text-[8px] md:text-xs font-bold">
              Executive Investment Presentation
            </span>
          </motion.div>
          
          <h1 className="flex flex-wrap justify-center gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-2 mb-6 md:mb-16 perspective-1000">
            {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%", rotateX: 45 },
                    visible: { y: 0, rotateX: 0 }
                  }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className={i === 1 ? "italic font-serif text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white inline-block" : "font-serif text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white inline-block"}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.p 
            key={persona.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isAILoading ? 0 : 1, y: isAILoading ? 10 : 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-platinum/50 text-xs sm:text-base md:text-xl font-light leading-relaxed mb-8 md:mb-16 text-balance tracking-wide px-4 min-h-[4rem]"
          >
            {persona.message}
          </motion.p>

          {/* AI Persona Switcher */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4">
            {targetPersonas.map((p) => (
              <button
                key={p.id}
                onClick={() => switchPersona(p)}
                className={cn(
                  "px-3 md:px-4 py-1.5 rounded-full text-[7px] md:text-[8px] uppercase tracking-widest font-bold transition-all duration-500 flex items-center space-x-2",
                  persona.id === p.id 
                    ? "bg-gold-500 text-black shadow-[0_0_20px_rgba(184,145,94,0.3)]" 
                    : "bg-white/5 text-white/40 hover:bg-white/10"
                )}
              >
                {persona.id === p.id && <Sparkles size={8} className="animate-pulse" />}
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Hero Metrics - Scale Communication */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 1.2 } }
            }}
            className="grid grid-cols-3 gap-4 md:gap-12 max-w-4xl mx-auto mb-16 px-4"
          >
            {[
              { label: "Annual Visitors", value: "85M+" },
              { label: "Retail Space", value: "5.9M sq ft" },
              { label: "Global Ranking", value: "#1" }
            ].map((metric) => (
              <motion.div
                key={metric.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-xl md:text-4xl font-serif text-gold-500 mb-2">{metric.value}</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 1.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          >
            <Magnetic strength={0.2}>
              <button 
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 md:px-14 py-5 md:py-6 overflow-hidden bg-white transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 text-black group-hover:text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-500">
                  Explore Opportunity
                </span>
                <div className="absolute inset-0 bg-gold-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]" />
              </button>
            </Magnetic>
            
            <Magnetic strength={0.3}>
              <button className="group flex items-center space-x-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all py-4 px-8 border border-white/5 hover:border-gold-500/30">
                <Play className="w-3 h-3 fill-current" />
                <span>Investment Film</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] text-white/30 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 w-full bg-white h-1/2 blur-[2px]"
          />
        </div>
      </motion.div>

      {/* Subtle Side Navigation Hint */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col space-y-8 z-30">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
        ))}
      </div>
    </section>
  );
}
