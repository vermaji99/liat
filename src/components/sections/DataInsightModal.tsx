"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Users, MapPin, Sparkles, Brain, ArrowRight } from "lucide-react";

interface DataInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  stat: {
    label: string;
    value: number;
    suffix: string;
    description: string;
    details?: {
      title: string;
      metrics: { label: string; value: string }[];
      summary: string;
    };
  } | null;
}

export default function DataInsightModal({ isOpen, onClose, stat }: DataInsightModalProps) {
  if (!stat) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-onyx z-[210] overflow-hidden rounded-sm border border-white/10"
          >
            <div className="relative p-8 md:p-16">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-4 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                  <div>
                    <span className="text-gold-500 text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                      Intelligence Deep-Dive
                    </span>
                    <h2 className="text-5xl font-serif text-white mb-6">
                      {stat.label}
                    </h2>
                    <div className="text-6xl font-serif text-gold-500 mb-8">
                      {stat.value}{stat.suffix}
                    </div>
                    <p className="text-platinum/40 text-lg font-light leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="text-gold-500 w-4 h-4" />
                      <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">AI-Generated Forecast</h4>
                    </div>
                    
                    <div className="bg-gold-500/5 border border-gold-500/10 p-6 space-y-4">
                      <p className="text-platinum/60 text-sm italic font-light leading-relaxed">
                        &quot;Based on current velocity, our neural models predict a 12.4% increase in conversion for premium boutiques within the next 18 months.&quot;
                      </p>
                      <div className="flex items-center space-x-2 text-[8px] uppercase tracking-[0.2em] text-gold-400 font-bold">
                        <Brain size={12} />
                        <span>Predictive Intelligence Active</span>
                      </div>
                    </div>

                    <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mt-8">Strategic Impact</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500">
                          <Users size={18} />
                        </div>
                        <span className="text-white/70 text-sm">Direct access to ultra-high-net-worth individuals.</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500">
                          <MapPin size={18} />
                        </div>
                        <span className="text-white/70 text-sm">Prime placement within global transit hubs.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 p-10 space-y-12 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-serif text-2xl mb-8">Demographic Breakdown</h4>
                    <div className="space-y-8">
                      {[
                        { label: "Regional Reach", value: "Global", progress: 95 },
                        { label: "Target Age", value: "25 - 55", progress: 85 },
                        { label: "Disposable Income", value: "Elite", progress: 98 },
                      ].map((item) => (
                        <div key={item.label} className="space-y-3">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
                            <span className="text-gold-500 font-serif text-sm">{item.value}</span>
                          </div>
                          <div className="h-[2px] w-full bg-white/5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ delay: 0.5, duration: 1.5 }}
                              className="h-full bg-gold-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-white py-5 group flex items-center justify-center space-x-4 hover:bg-gold-500 transition-colors duration-500">
                    <span className="text-black group-hover:text-white text-[10px] uppercase tracking-[0.4em] font-bold">Request Full Data Set</span>
                    <ArrowRight size={14} className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
