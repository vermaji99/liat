"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Send, Award, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const paths = [
  { id: "retail", title: "Retail Leasing", description: "Flagship and boutique opportunities" },
  { id: "sponsorship", title: "Sponsorship", description: "Brand activation and digital media" },
  { id: "events", title: "Event Booking", description: "Global stage for your next launch" },
];

const tiers = [
  { 
    name: "Platinum", 
    icon: <Award className="w-5 h-5" />, 
    price: "Custom", 
    features: ["Category Exclusivity", "Atrium Dominance", "Digital Media Takeover", "VIP Event Access"] 
  },
  { 
    name: "Gold", 
    icon: <Zap className="w-5 h-5" />, 
    price: "Custom", 
    features: ["Prime Kiosk Placement", "Social Media Integration", "Live Activation Rights"] 
  },
  { 
    name: "Global", 
    icon: <Globe className="w-5 h-5" />, 
    price: "Custom", 
    features: ["Digital Screen Network", "Wayfinding Sponsorship", "Newsletter Inclusion"] 
  },
];

export default function BookingModule() {
  const [selectedPath, setSelectedPath] = useState("retail");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold">
                Commercial Activation
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                Secure Your <span className="italic text-gold-500">Global Mandate</span>
              </h2>
              <p className="text-platinum/40 text-lg font-light max-w-2xl mx-auto">
                We don't just lease space; we curate ecosystems. Tell us about your vision, and our executive team will design a strategic placement for your brand.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Path Selection & Tiers */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                {paths.map((path) => (
                  <button
                    key={path.id}
                    onClick={() => setSelectedPath(path.id)}
                    className={cn(
                      "group w-full text-left p-8 border transition-all duration-500",
                      selectedPath === path.id 
                        ? "bg-white/5 border-gold-500/50" 
                        : "bg-transparent border-white/5 hover:border-white/10"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h3 className={cn(
                          "text-lg font-serif transition-colors",
                          selectedPath === path.id ? "text-gold-400" : "text-white/40 group-hover:text-white/70"
                        )}>
                          {path.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                          {path.description}
                        </p>
                      </div>
                      <ArrowRight className={cn(
                        "w-5 h-5 transition-all",
                        selectedPath === path.id ? "text-gold-500 translate-x-0" : "text-white/10 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Sub-Module: Sponsorship Tiers (Phase 2 Requirement) */}
              <AnimatePresence mode="wait">
                {selectedPath === "sponsorship" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 gap-4"
                  >
                    <h4 className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-2">Partnership Tiers</h4>
                    {tiers.map((tier) => (
                      <div key={tier.name} className="bg-onyx border border-white/5 p-6 group hover:border-gold-500/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-gold-500">{tier.icon}</div>
                            <span className="text-white font-serif text-lg">{tier.name}</span>
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-gold-400/50 font-bold">{tier.price}</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-y-2">
                          {tier.features.map(f => (
                            <li key={f} className="text-[9px] uppercase tracking-widest text-white/30 flex items-center">
                              <div className="w-1 h-1 bg-gold-500/40 rounded-full mr-2" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-onyx border border-white/5 p-16 text-center space-y-8 h-full flex flex-col justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto">
                      <Check className="text-gold-500 w-10 h-10" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif text-white">Inquiry Received</h3>
                      <p className="text-platinum/40 text-sm font-light leading-relaxed">
                        Your vision for <span className="text-white font-medium">{selectedPath}</span> has been shared 
                        with our executive commercial team. We will respond within 24 hours.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-white transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-onyx border border-white/5 p-12 md:p-16"
                  >
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Principal Contact</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-gold-500 transition-colors font-serif italic"
                            placeholder="Alexander Sterling"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Brand / Organization</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-gold-500 transition-colors font-serif italic"
                            placeholder="Global Retail Group"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Mandate Type</label>
                        <div className="text-white font-serif text-xl italic py-2 border-b border-white/5">
                          {paths.find(p => p.id === selectedPath)?.title}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Strategic Vision & Requirements</label>
                        <textarea 
                          rows={4}
                          className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-gold-500 transition-colors resize-none font-serif italic"
                          placeholder="Tell us how your brand will elevate our ecosystem..."
                        />
                      </div>

                      <button 
                        type="submit"
                        className="group w-full flex items-center justify-center space-x-6 bg-white text-black py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold-500 hover:text-white transition-all duration-700"
                      >
                        <span>Initiate Partnership</span>
                        <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
