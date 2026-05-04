"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-serif text-6xl md:text-8xl tracking-tighter"
            >
              GE<span className="text-gold-500">.</span>
            </motion.div>
          </div>

          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gold-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">Initializing Experience</span>
            <span className="text-gold-500 font-mono text-xs">{progress}%</span>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-12 left-12 flex flex-col space-y-4 opacity-20">
            <div className="w-12 h-[1px] bg-white" />
            <div className="w-8 h-[1px] bg-white" />
          </div>
          <div className="absolute bottom-12 right-12 text-right opacity-20">
            <span className="text-[8px] uppercase tracking-[0.4em] text-white font-bold">Global Estate / Commercial</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
