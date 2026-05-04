"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { safePlay, safePause, handleMediaError } from "@/lib/utils";

const experiences = [
  {
    title: "Signature Dining",
    tag: "Michelin Star",
    description: "Michelin-starred concepts from world-renowned chefs.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-luxury-interior-of-a-modern-restaurant-41481-large.mp4"
  },
  {
    title: "Artisan Cafes",
    tag: "Boutique",
    description: "Specialty roasters and boutique patisseries.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-into-a-cup-in-a-cafe-41483-large.mp4"
  },
  {
    title: "Social Lounges",
    tag: "Exclusive",
    description: "Sophisticated spaces for connection and cocktails.",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-friends-toasting-with-cocktails-at-a-bar-41486-large.mp4"
  },
];

export default function Dining() {
  return (
    <section id="lifestyle" className="section-padding bg-background relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 block font-bold">
                The Gastronomy Collection
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 md:mb-8 leading-tight">
                A Feast for the <br />
                <span className="italic">Discerning Palette</span>
              </h2>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-platinum/40 text-base md:text-lg font-light leading-relaxed max-w-sm text-left md:text-right"
          >
            Beyond shopping, we offer a world of culinary artistry and social 
            vibrancy. From sunrise espresso to late-night fine dining.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 md:mb-10 rounded-sm">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 group-hover:opacity-0"
                />
                
                <video
                  muted
                  loop
                  playsInline
                  crossOrigin="anonymous"
                  onError={handleMediaError}
                  onMouseEnter={(e) => safePlay(e.target as HTMLVideoElement)}
                  onMouseLeave={(e) => safePause(e.target as HTMLVideoElement)}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  poster={exp.image}
                >
                  <source src={exp.video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
                
                {/* Float Tag */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 overflow-hidden pointer-events-none">
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 px-3 md:px-4 py-1 md:py-1.5"
                  >
                    <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-white font-bold">{exp.tag}</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold-400 transition-colors duration-500">{exp.title}</h3>
                <div className="w-8 h-px bg-gold-500/30 group-hover:w-full transition-all duration-700" />
                <p className="text-platinum/30 text-xs md:text-sm font-light leading-relaxed group-hover:text-platinum/50 transition-colors">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
