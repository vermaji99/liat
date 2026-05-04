"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Users, Target } from "lucide-react";

interface LeasingModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeasingModule({ isOpen, onClose }: LeasingModuleProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-onyx z-[210] overflow-y-auto"
          >
            <div className="p-12 md:p-20 relative">
              <button 
                onClick={onClose}
                className="absolute top-10 right-10 p-4 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="space-y-16">
                <div>
                  <span className="text-gold-500 text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold">
                    Strategic Leasing
                  </span>
                  <h2 className="text-5xl font-serif text-white mb-8">
                    Elevate Your <br />
                    <span className="italic text-gold-500">Global Presence</span>
                  </h2>
                  <p className="text-platinum/40 text-lg font-light leading-relaxed">
                    Join an elite collection of the world&apos;s most successful brands. Our leasing strategy is built on long-term partnership and data-driven placement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gold-500">
                      <Users size={20} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Target Audience</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      HNWIs, global travelers, and trendsetters seeking exclusive experiences.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gold-500">
                      <TrendingUp size={20} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Footfall Data</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Average dwell time of 4.5 hours with a 65% cross-category conversion rate.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gold-500">
                      <Target size={20} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Why Brands Succeed</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Integrated digital marketing, premium concierge services, and elite event integration.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 space-y-8">
                  <h4 className="text-white font-serif text-2xl">Available Opportunities</h4>
                  <div className="space-y-4">
                    {[
                      { type: "Luxury Flagship", area: "10,000 - 25,000 sq ft", zone: "The Atrium" },
                      { type: "Premium Retail", area: "2,000 - 5,000 sq ft", zone: "Fashion District" },
                      { type: "Innovation Pop-up", area: "500 - 1,500 sq ft", zone: "Tech Hub" },
                    ].map((opt) => (
                      <div key={opt.type} className="flex items-center justify-between py-4 border-b border-white/5">
                        <div>
                          <p className="text-white text-sm font-medium">{opt.type}</p>
                          <p className="text-[10px] uppercase tracking-widest text-white/30">{opt.zone}</p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-gold-500">{opt.area}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-white py-6 group flex items-center justify-center space-x-4 hover:bg-gold-500 transition-colors duration-500">
                  <span className="text-black group-hover:text-white text-[10px] uppercase tracking-[0.4em] font-bold">Request Prospectus</span>
                  <ArrowRight size={16} className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
