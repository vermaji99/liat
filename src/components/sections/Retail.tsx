"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Tag, Globe, Sparkles } from "lucide-react";
import { safePlay, safePause, handleMediaError } from "@/lib/utils";
import LeasingModule from "./LeasingModule";
import Magnetic from "@/components/ui/Magnetic";

const districts = [
  { 
    name: "The Fashion Atrium", 
    category: "High-Street & Flagships", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    video: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-shopping-mall-with-glass-roof-41484-large.mp4",
    description: "A cathedral of style hosting the world's primary luxury labels in a three-story architectural masterpiece."
  },
  { 
    name: "Tech Innovation Hub", 
    category: "Next-Gen Electronics", 
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800",
    description: "The global benchmark for consumer technology launches and interactive flagship experiences."
  },
  { 
    name: "The Beauty Atelier", 
    category: "Cosmetics & Wellness", 
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    description: "Meticulously curated wellness concepts and high-conversion beauty flagships."
  },
  { 
    name: "Urban Lifestyle", 
    category: "Contemporary Brands", 
    image: "https://images.unsplash.com/photo-1481437156560-3201fb1ffc3e?auto=format&fit=crop&q=80&w=800",
    description: "Where modern culture meets commerce. A high-energy district for digital-native global brands."
  },
];

export default function Retail() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="retail" ref={targetRef} className="relative h-[300vh] bg-onyx">
      <LeasingModule isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
      
      <div className="sticky top-0 h-screen flex flex-col items-start overflow-hidden">
        {/* Header: Fixed during scroll */}
        <div className="container mx-auto px-6 pt-32 pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold">
                Commercial Districts
              </span>
            </div>
            
            <h2 className="text-4xl md:text-8xl font-serif text-white mb-6 leading-[1.05]">
              A Stage for <br />
              <span className="italic text-gold-500">Market Leaders</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex-grow flex items-center">
          <motion.div style={{ x }} className="flex gap-12 px-6 md:px-24">
            {districts.map((district, i) => (
              <motion.div
                key={district.name}
                className="relative group flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
              >
                {/* Media Container */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 45vw"
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  />
                  
                  {district.video && (
                    <video
                      muted
                      loop
                      playsInline
                      crossOrigin="anonymous"
                      onError={handleMediaError}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                      onMouseEnter={(e) => safePlay(e.target as HTMLVideoElement)}
                      onMouseLeave={(e) => safePause(e.target as HTMLVideoElement)}
                      poster={district.image}
                    >
                      <source src={district.video} type="video/mp4" />
                    </video>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                  <div className="space-y-6 max-w-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-[10px] uppercase tracking-[0.5em] text-gold-500 font-bold">
                        {district.category}
                      </span>
                      <div className="w-12 h-px bg-white/20" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-serif text-white group-hover:italic transition-all duration-500">
                      {district.name}
                    </h3>

                    <p className="text-platinum/40 text-sm md:text-base font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      {district.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 pt-4">
                      <Magnetic strength={0.2}>
                        <button className="flex items-center space-x-4 text-white group/btn">
                          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explore District</span>
                          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500">
                            <ArrowUpRight size={14} />
                          </div>
                        </button>
                      </Magnetic>
                    </div>
                  </div>
                </div>

                {/* Number Decoration */}
                <div className="absolute top-10 right-10 text-[8rem] font-serif text-white/[0.03] leading-none select-none pointer-events-none">
                  0{i + 1}
                </div>
              </motion.div>
            ))}

            {/* Final Conversion Slide in the Horizontal Scroll */}
            <div className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[4/3] flex flex-col items-center justify-center text-center space-y-12 bg-white/5 border border-white/10 px-12">
              <div className="space-y-4">
                <span className="text-gold-500 text-[10px] uppercase tracking-[0.6em] font-bold">Strategic Mandate</span>
                <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Your Presence, <br />
                  <span className="italic text-gold-500">Defined.</span>
                </h3>
              </div>
              <Magnetic strength={0.1}>
                <button 
                  onClick={() => setIsLeasingOpen(true)}
                  className="px-14 py-6 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold-500 hover:text-white transition-all duration-700"
                >
                  Download Commercial Deck
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Progress Bar: Bottom Fixed */}
        <div className="w-full h-px bg-white/10 absolute bottom-0 left-0 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full bg-gold-500 w-full"
          />
        </div>
      </div>
    </section>
  );
}
