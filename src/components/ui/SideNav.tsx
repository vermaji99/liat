"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "stats", label: "Intelligence" },
  { id: "scale", label: "Magnitude" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "events", label: "Platform" },
  { id: "contact", label: "Leasing" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden xl:flex flex-col space-y-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
          className="group flex items-center justify-end space-x-4"
        >
          <span className={cn(
            "text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-500 opacity-0 group-hover:opacity-100",
            activeSection === section.id ? "text-gold-500 opacity-100" : "text-white/40"
          )}>
            {section.label}
          </span>
          <div className="relative flex items-center justify-center">
            <div className={cn(
              "w-1 h-1 rounded-full transition-all duration-500",
              activeSection === section.id ? "bg-gold-500 scale-[2]" : "bg-white/20 group-hover:bg-white/50"
            )} />
            {activeSection === section.id && (
              <motion.div
                layoutId="sideNavActive"
                className="absolute w-4 h-4 border border-gold-500/50 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
