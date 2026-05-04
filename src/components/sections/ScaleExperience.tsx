"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Maximize2, MapPin, Info, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

const zones = [
  {
    id: "retail",
    name: "Commercial Heart",
    top: "55%",
    left: "15%",
    description: "3M+ sq ft of global flagships.",
    details: "The world's most concentrated collection of luxury and mainstream retail brands."
  },
  {
    id: "entertainment",
    name: "Wonder Zone",
    top: "30%",
    left: "45%",
    description: "World's largest indoor theme parks.",
    details: "Home to record-breaking coasters and year-round tropical environments."
  },
  {
    id: "dining",
    name: "Epicurean Row",
    top: "70%",
    left: "55%",
    description: "150+ culinary concepts.",
    details: "A global gastronomy destination serving 85M+ annual visitors."
  },
  {
    id: "events",
    name: "The Global Stage",
    top: "20%",
    left: "35%",
    description: "Versatile arenas and terraces.",
    details: "Broadcast-ready venues capable of hosting 15,000+ guests."
  },
  {
    id: "hospitality",
    name: "Elite Residency",
    top: "40%",
    left: "75%",
    description: "Ultra-luxury hotel & suites.",
    details: "5-star hospitality integrated directly into the property ecosystem."
  },
  {
    id: "office",
    name: "Innovation Hub",
    top: "65%",
    left: "85%",
    description: "Grade-A corporate spaces.",
    details: "The preferred headquarters for global tech and fashion leaders."
  }
];

export default function ScaleExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeZone, setActiveZone] = useState<typeof zones[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Zoom-out effect: starts zoomed in (2) and scales down to (1)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <section 
      id="scale" 
      ref={containerRef}
      className="relative h-[250vh] md:h-[200vh] bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-32 md:pt-24">
        {/* Mobile-only Header */}
        <div className="md:hidden w-full px-6 mb-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Maximize2 className="text-gold-500 w-4 h-4" />
            <span className="text-gold-500 text-[8px] uppercase tracking-[0.5em] font-bold">Absolute Scale</span>
          </div>
          <h3 className="text-3xl font-serif text-white mb-4 leading-tight">
            A World Within <br />
            <span className="italic text-gold-500">A Destination.</span>
          </h3>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* The "Scale" Visualizer */}
        <motion.div 
          style={{ scale, opacity, y: yTranslate }}
          className="relative w-full max-w-[1400px] aspect-[4/5] md:aspect-video mx-auto px-4 md:px-12"
        >
          {/* Base Layer */}
          <div className="relative w-full h-full bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden shadow-[0_0_100px_rgba(184,145,94,0.05)]">
            {/* Comparison UI */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end space-y-3 md:space-y-4 z-20">
              <div className="flex items-center space-x-2 md:space-x-3 bg-black/80 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 border border-white/10 rounded-full">
                <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-gold-500/20 border border-gold-500 rounded-sm" />
                <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/60 font-bold">Standard City Block</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-black/80 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 border border-white/10 rounded-full">
                <div className="w-8 h-4 md:w-12 md:h-6 bg-gold-500/40 border border-gold-500 rounded-sm" />
                <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/60 font-bold">The Grand Estate Footprint</span>
              </div>
            </div>

            {/* Internal Layout */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[85%] h-[85%] border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent rounded-sm">
                {/* Hotspots */}
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    className="absolute z-30"
                    style={{ top: zone.top, left: zone.left }}
                  >
                    <button
                      onMouseEnter={() => setActiveZone(zone)}
                      onMouseLeave={() => setActiveZone(null)}
                      onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
                      className="group relative flex items-center justify-center p-4 -m-4"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2.5 h-2.5 md:w-4 md:h-4 bg-gold-500 rounded-full shadow-[0_0_20px_rgba(184,145,94,0.4)]"
                      />
                      <div className="absolute w-6 h-6 md:w-10 md:h-10 border border-gold-500/30 rounded-full animate-ping opacity-10" />
                      
                      {/* Refined Hover Label */}
                      <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 md:group-hover:opacity-100 translate-y-2 md:group-hover:translate-y-0 transition-all duration-500 pointer-events-none hidden md:block">
                        <div className="bg-black/90 backdrop-blur-2xl border border-gold-500/20 p-5 rounded-sm shadow-2xl">
                          <h4 className="text-gold-400 font-serif text-lg mb-1.5 tracking-tight">{zone.name}</h4>
                          <p className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">{zone.description}</p>
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gold-500/20" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Narrative Overlay - REFINED POSITIONING AND CLEARANCE */}
            <div className="absolute top-10 left-10 md:top-16 md:left-16 max-w-[280px] md:max-w-xs z-20 hidden md:block pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Maximize2 className="text-gold-500 w-4 h-4" />
                  <span className="text-gold-500 text-[9px] uppercase tracking-[0.4em] font-bold">Absolute Scale</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-serif text-white mb-8 leading-[1]">
                  A World Within <br />
                  <span className="italic text-gold-500">A Destination.</span>
                </h3>
                <p className="text-platinum/30 text-xs lg:text-sm font-light leading-relaxed tracking-wide">
                  Spanning 5.9M+ sq ft, the property reimagines urban density, 
                  offering a scale equivalent to 14 city blocks 
                  curated for the global elite.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Active Zone Detail Overlay (Non-linear exploration) */}
        <AnimatePresence>
          {activeZone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-10 md:bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 md:px-6 z-40"
            >
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 rounded-sm">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                  <Info size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="space-y-3 md:space-y-4 text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-serif text-white">{activeZone.name}</h4>
                  <p className="text-platinum/50 text-xs md:text-base font-light leading-relaxed">{activeZone.details}</p>
                  <Magnetic strength={0.2}>
                    <button className="flex items-center justify-center md:justify-start space-x-3 text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold group mx-auto md:mx-0">
                      <span>Explore Zone</span>
                      <ArrowRight size={12} className="md:w-3.5 md:h-3.5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Narrative Labeling for the Scale */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">Scroll to perceive the magnitude</span>
        </motion.div>
      </div>
    </section>
  );
}
