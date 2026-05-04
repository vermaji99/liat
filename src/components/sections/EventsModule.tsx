"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Play, MapPin, Calendar, Users, ArrowRight, Star } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { handleMediaError } from "@/lib/utils";
import Image from "next/image";

const venues = [
  {
    id: "atrium",
    name: "The Grand Atrium",
    capacity: "5,000+",
    specs: "360° Digital Integration",
    video: "https://assets.mixkit.co/videos/preview/mixkit-luxury-interior-of-a-modern-restaurant-41481-large.mp4",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    tags: ["Product Launches", "Fashion Shows", "Gala Dinners"]
  },
  {
    id: "arena",
    name: "The North Arena",
    capacity: "15,000+",
    specs: "Broadcast Ready",
    video: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-shopping-mall-with-glass-roof-41484-large.mp4",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
    tags: ["Concerts", "Esports", "Exhibitions"]
  },
  {
    id: "sky-deck",
    name: "Sky Deck Terrace",
    capacity: "800",
    specs: "Panoramic City Views",
    video: "https://assets.mixkit.co/videos/preview/mixkit-friends-toasting-with-cocktails-at-a-bar-41486-large.mp4",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200",
    tags: ["Corporate Mixers", "Private Soirees", "VIP Afterparties"]
  }
];

export default function EventsModule() {
  const [activeVenue, setActiveVenue] = useState(venues[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="events" className="py-32 bg-onyx relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block"
            >
              The Global Stage
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif text-white mb-8"
            >
              Beyond <span className="italic text-gold-500">Events</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-platinum/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              From high-capacity arenas to intimate panoramic terraces, our property provides the infrastructure for moments that define global culture.
            </motion.p>
          </div>

          <div className="flex space-x-4">
            {venues.map((venue) => (
              <button
                key={venue.id}
                onClick={() => {
                  setActiveVenue(venue);
                  setIsVideoPlaying(false);
                }}
                className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all duration-500 rounded-full border ${
                  activeVenue.id === venue.id 
                    ? "bg-gold-500 border-gold-500 text-black" 
                    : "bg-transparent border-white/10 text-white/40 hover:border-white/30"
                }`}
              >
                {venue.name.split(' ').pop()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Main Visual Component */}
          <div className="lg:col-span-8 relative group rounded-sm overflow-hidden aspect-[4/5] sm:aspect-video lg:aspect-auto min-h-[400px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVenue.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {!isVideoPlaying ? (
                  <>
                    <Image 
                      src={activeVenue.image} 
                      alt={activeVenue.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      onError={handleMediaError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group/btn hover:bg-gold-500 transition-all duration-500"
                    >
                      <Play className="text-white group-hover/btn:text-black fill-current ml-1 w-6 h-6 md:w-8 md:h-8" />
                    </button>
                  </>
                ) : (
                  <video
                    autoPlay
                    loop
                    playsInline
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                    onDoubleClick={() => setIsVideoPlaying(false)}
                    onError={handleMediaError}
                    poster={activeVenue.image}
                  >
                    <source src={activeVenue.video} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 pr-6">
              <motion.h3 
                key={activeVenue.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl sm:text-4xl md:text-6xl font-serif text-white mb-3 md:mb-4"
              >
                {activeVenue.name}
              </motion.h3>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {activeVenue.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-[7px] md:text-[9px] uppercase tracking-widest text-white font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 md:space-y-12">
            <div className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-2 md:space-x-3 text-gold-500">
                    <Users size={14} className="md:w-[18px] md:h-[18px]" />
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Capacity</span>
                  </div>
                  <div className="text-xl md:text-3xl font-serif text-white">{activeVenue.capacity}</div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-2 md:space-x-3 text-gold-500">
                    <Zap size={14} className="md:w-[18px] md:h-[18px]" />
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Capability</span>
                  </div>
                  <div className="text-xl md:text-3xl font-serif text-white">4K / Live</div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-sm">
                <h4 className="text-white text-[9px] md:text-[11px] uppercase tracking-widest font-bold border-b border-white/5 pb-3 md:pb-4 mb-4 md:mb-6">Technical Specifications</h4>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-white/30">Infrastructure</span>
                    <span className="text-white font-light text-right ml-4">{activeVenue.specs}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-white/30">Connectivity</span>
                    <span className="text-white font-light">10Gbps Fiber</span>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-white/30">Access</span>
                    <span className="text-white font-light">24/7 VIP Entry</span>
                  </div>
                </div>
              </div>
            </div>

            <Magnetic strength={0.1}>
              <button className="w-full bg-white py-6 group flex items-center justify-center space-x-4 hover:bg-gold-500 transition-colors duration-500">
                <span className="text-black group-hover:text-white text-[10px] uppercase tracking-[0.4em] font-bold">Book This Venue</span>
                <ArrowRight size={16} className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

function Zap({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
