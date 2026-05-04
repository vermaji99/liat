"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { handleMediaError } from "@/lib/utils";
import LeasingModule from "./LeasingModule";
import Magnetic from "@/components/ui/Magnetic";

export default function Attractions() {
  const hasMounted = useHasMounted();
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1YTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const img2YTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const img1Y = useTransform(img1YTransform, (v) => hasMounted ? v : 0);
  const img2Y = useTransform(img2YTransform, (v) => hasMounted ? v : 0);

  return (
    <section ref={containerRef} className="section-padding bg-onyx relative overflow-hidden">
      <LeasingModule isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Content Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 block font-bold">
                Infinite Wonders
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-6 md:mb-10 leading-[1.1]">
                Beyond the <br /> 
                <span className="italic">Imagination</span>
              </h2>
              <p className="text-platinum/40 text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-16 tracking-wide">
                Home to the world&apos;s most ambitious indoor experiences. 
                We don&apos;t just host visitors; we create memories that transcend 
                the ordinary.
              </p>

              <Magnetic strength={0.2}>
                <button 
                  onClick={() => setIsLeasingOpen(true)}
                  className="group flex items-center space-x-6 bg-white/5 border border-white/10 px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white transition-all duration-500 mb-12 md:mb-16"
                >
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white group-hover:text-black font-bold">Partner with Us</span>
                  <Plus className="w-3 h-3 md:w-4 md:h-4 text-gold-500 group-hover:text-black transition-colors" />
                </button>
              </Magnetic>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { title: "Global Entertainment Hub", desc: "State-of-the-art cinematic and VR experiences." },
                  { title: "Family-Centric Wonders", desc: "The world's largest indoor thematic park." },
                  { title: "Olympic Heritage", desc: "Full-scale skating rinks and sporting arenas." }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 md:space-x-6 mb-2 md:mb-3">
                      <div className="w-8 md:w-12 h-px bg-gold-500/50 group-hover:w-20 transition-all duration-700" />
                      <h4 className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-platinum/30 text-xs md:text-sm font-light ml-12 md:ml-[4.5rem] group-hover:text-platinum/50 transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Side - Interactive Collage */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative grid grid-cols-2 gap-4 md:gap-8 items-start">
              <motion.div
                style={{ y: hasMounted && typeof window !== 'undefined' && window.innerWidth > 1024 ? img1Y : 0 }}
                className="aspect-[3/4] relative rounded-sm overflow-hidden mt-10 md:mt-20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800"
                    alt="Attraction 1"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    onError={handleMediaError}
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transition-transform"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ y: hasMounted && typeof window !== 'undefined' && window.innerWidth > 1024 ? img2Y : 0 }}
                className="aspect-[3/4] relative rounded-sm overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                    alt="Attraction 2"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    onError={handleMediaError}
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transition-transform"
                  />
                </div>
              </motion.div>
              
              {/* Floating Counter Card */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                style={{ scale: hasMounted ? 1 : 0.8, opacity: hasMounted ? 1 : 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-10 shadow-2xl z-20 hidden sm:block"
              >
                <span className="text-4xl md:text-6xl font-serif text-black block mb-2 tracking-tighter">04</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-black/40 font-bold">Primary Zones</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -left-20 bottom-0 text-[25vw] font-serif text-white/[0.01] pointer-events-none select-none">
        WONDER
      </div>
    </section>
  );
}
