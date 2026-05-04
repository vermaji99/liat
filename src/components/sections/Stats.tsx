"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, Maximize, ShoppingBag, Plus } from "lucide-react";
import DataInsightModal from "./DataInsightModal";

const stats = [
  { 
    label: "Annual High-Value Visitors", 
    value: 85, 
    suffix: "M+", 
    icon: <Users className="w-5 h-5" />,
    description: "A pre-qualified global audience with the world's highest disposable income density." 
  },
  { 
    label: "Flagship Success Rate", 
    value: 98, 
    suffix: "%", 
    icon: <ShoppingBag className="w-5 h-5" />,
    description: "Tenants consistently outperforming their global averages within 12 months of launch." 
  },
  { 
    label: "Premium Retail GLA", 
    value: 5.9, 
    suffix: "M", 
    icon: <Maximize className="w-5 h-5" />,
    description: "Square feet of meticulously curated retail, designed for maximum brand visibility." 
  },
  { 
    label: "Digital Engagement", 
    value: 3.2, 
    suffix: "B", 
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Annual social impressions generated through our integrated digital ecosystem." 
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 3000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-serif text-white block mb-4 tracking-tighter">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      <span className="text-gold-500 ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const [selectedStat, setSelectedStat] = useState<typeof stats[0] | null>(null);

  return (
    <section id="stats" className="section-padding bg-background relative overflow-hidden">
      <DataInsightModal 
        isOpen={!!selectedStat} 
        onClose={() => setSelectedStat(null)} 
        stat={selectedStat} 
      />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-gold-500/[0.03] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Side: Market Intelligence */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-gold-500" />
                <span className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold">
                  Executive Intelligence
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 md:mb-10 leading-[1.1]">
                The Authority <br /> 
                <span className="italic text-gold-500">of Data</span>
              </h2>
              
              <p className="text-platinum/40 text-base md:text-lg font-light leading-relaxed max-w-sm mb-10 md:mb-12">
                We don't just provide space; we provide an audience. Our ecosystem 
                is built for global brands who demand measurable performance 
                and absolute visibility.
              </p>

              <div className="flex flex-col space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm group hover:border-gold-500/30 transition-all duration-700">
                  <p className="text-white/80 text-base md:text-lg italic mb-4 font-serif">
                    "The property represents the single most significant 
                    opportunity for brand dominance in the next decade."
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gold-400 font-bold">
                      — Strategic Commerce Report 2026
                    </span>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                      <TrendingUp className="w-2 h-2 md:w-3 md:h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Data Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-16 md:gap-y-24 mt-12 lg:mt-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedStat(stat)}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-6 text-gold-500/50 group-hover:text-gold-500 transition-colors duration-500">
                  {stat.icon}
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-gold-500/30 transition-all duration-700" />
                  <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                </div>
                
                <Counter value={stat.value} suffix={stat.suffix} />
                
                <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/70 mb-4 md:mb-6 font-bold group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-[11px] md:text-xs text-platinum/30 font-light leading-relaxed group-hover:text-platinum/50 transition-colors duration-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
