"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn, safePlay, safePause, handleMediaError } from "@/lib/utils";
import { useHasMounted } from "@/hooks/use-has-mounted";

import Magnetic from "@/components/ui/Magnetic";

export default function Luxury() {
  const hasMounted = useHasMounted();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textYTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const overlayYTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Safety values to prevent hydration mismatch
  const y = useTransform(yTransform, (v) => hasMounted ? v : 0);
  const scale = useTransform(scaleTransform, (v) => hasMounted ? v : 1);
  const textY = useTransform(textYTransform, (v) => hasMounted ? v : 0);
  const overlayY = useTransform(overlayYTransform, (v) => hasMounted ? v : 0);

  return (
    <section 
      id="luxury" 
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center overflow-hidden section-padding"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
          {/* Narrative Side */}
          <div className="order-2 lg:order-1">
            <motion.div style={{ y: hasMounted && typeof window !== 'undefined' && window.innerWidth > 1024 ? textY : 0 }}>
              <div className="flex items-center space-x-6 mb-8 md:mb-12">
                <span className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold">
                  The Platinum Collection
                </span>
                <div className="flex-grow h-[1px] bg-white/10" />
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 md:mb-14 leading-[1] tracking-tighter">
                Absolute <br /> 
                <span className="italic text-gold-500">Prestige</span>
              </h2>
              
              <div className="space-y-8 md:space-y-12 max-w-xl">
                <p className="text-platinum/50 text-xl md:text-2xl font-light leading-relaxed tracking-wide">
                  A sanctuary for the world's most storied luxury houses. From 
                  rare timepieces to haute couture, we provide an environment 
                  defined by discretion and absolute excellence.
                </p>
                
                <div className="grid grid-cols-2 gap-8 md:gap-16 pt-8 md:pt-12 border-t border-white/5">
                  <div className="space-y-1 md:space-y-2">
                    <span className="block text-3xl md:text-5xl font-serif text-gold-400">150+</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Luxury Maisons</span>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <span className="block text-3xl md:text-5xl font-serif text-gold-400">24/7</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Elite Concierge</span>
                  </div>
                </div>
                
                <Magnetic strength={0.2}>
                  <button 
                    className="flex items-center space-x-6 text-white group pt-6 md:pt-8"
                  >
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold">Request Private Tour</span>
                    <div className="w-12 md:w-16 h-[1px] bg-gold-500 group-hover:w-32 transition-all duration-700" />
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          {/* Visual Side: Cinematic Framing */}
          <div className="relative order-1 lg:order-2">
            <div 
              onMouseEnter={() => {
                setIsHovered(true);
                safePlay(videoRef.current);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                safePause(videoRef.current);
              }}
              className="relative aspect-[4/5] w-full max-w-2xl mx-auto overflow-hidden rounded-sm border border-white/5 shadow-2xl group cursor-pointer"
            >
              <motion.div 
                style={{ 
                  y: hasMounted && typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0, 
                  scale: scale
                }}
                className="relative w-full h-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200"
                    alt="Luxury Fashion Heritage"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className={cn(
                      "object-cover brightness-75 transition-opacity duration-1000",
                      isHovered ? "opacity-0" : "opacity-100"
                    )}
                    onError={handleMediaError}
                  />
                </div>
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  crossOrigin="anonymous"
                  onError={handleMediaError}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                  poster="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-fashion-store-interior-41485-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-full">
                  <Play className="text-white w-6 h-6 md:w-8 md:h-8 fill-current" />
                </div>
              </div>

              {/* Layered Image Overlays for Visual Drama */}
              <motion.div 
                style={{ y: hasMounted && typeof window !== 'undefined' && window.innerWidth > 1024 ? overlayY : 0 }}
                className="absolute -bottom-12 -left-12 w-1/2 aspect-square hidden xl:block z-20 border border-white/10 shadow-2xl overflow-hidden rounded-sm"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
                    alt="Detail Overlay"
                    fill
                    sizes="300px"
                    className="object-cover brightness-50"
                    onError={handleMediaError}
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Floating Decorative Typography */}
            <motion.div
              initial={{ opacity: 0, rotate: -90, x: 50 }}
              whileInView={{ opacity: 1, rotate: -90, x: 0 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-24 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
            >
              <div className="text-[12rem] font-serif text-white/[0.02] leading-none select-none tracking-widest">
                HERITAGE
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
