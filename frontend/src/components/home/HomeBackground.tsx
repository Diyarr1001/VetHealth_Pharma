"use client";

import { motion } from "framer-motion";

export function HomeBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full bg-[#fafafa] overflow-hidden">
      
      {/* Innovative Light Theme Background: Animated Concentric Pulse Rings - Top Right */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`tr-${i}`}
            className="absolute inset-0 rounded-full border border-slate-200"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ 
              scale: [0.2, 1.5], 
              opacity: [0.8, 0] 
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Innovative Light Theme Background: Animated Concentric Pulse Rings - Bottom Left */}
      <div className="absolute bottom-1/4 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] pointer-events-none z-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`bl-${i}`}
            className="absolute inset-0 rounded-full border border-slate-200/60"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ 
              scale: [0.2, 1.5], 
              opacity: [0.6, 0] 
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 3.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
