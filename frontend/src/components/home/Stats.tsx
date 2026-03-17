"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Beaker, Users } from "lucide-react";

const STATS = [
  { label: "Products", value: "500+", icon: Beaker },
  { label: "Clients", value: "1000+", icon: Users },
  { label: "Global Reach", value: "Pan-India+", icon: Globe2 },
];

const REASONS = [
  "Wide product portfolio",
  "Quality assured products",
  "Veterinary expertise",
  "Reliable distribution network",
];

const INDUSTRIES = [
  "Dairy Farms",
  "Poultry Farms",
  "Sheep & Goat Farms",
  "Veterinary Clinics",
  "Pet Owners"
];

  export function Stats() {
    return (
      <section className="py-24 bg-gradient-to-br from-secondary/50 via-white to-primary/5 relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-primary">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
            <polygon points="100,0 20,0 100,100" />
          </svg>
        </div>
        
        {/* Decorative Blooming Blobs */}
        <div className="absolute -left-20 top-20 w-72 h-72 bg-premium/10 rounded-full blur-[80px]" />
  
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Why Choose Us */}
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block px-4 py-1.5 bg-primary/10 w-fit rounded-full">
                The VetHealth Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-8">
                Why Partner <br/>With Us?
              </h2>
              
              <div className="space-y-4 mb-8">
                {REASONS.map((reason, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-primary/10"
                  >
                    <div className="flex-shrink-0 mt-0.5 bg-gradient-to-br from-primary to-violet-500 text-white rounded-full p-1 shadow-md" >
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-base text-muted-foreground font-semibold pt-0.5">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground font-heading mb-4 mt-8">Industries Served:</h3>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry, index) => (
                  <span key={index} className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 shadow-sm hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Right Column: Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className={`bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all ${
                    index === 2 ? "sm:col-span-2 bg-gradient-to-tr from-white to-violet-50/50" : ""
                  }`}
                >
                  {/* Decorative Icon Background */}
                  <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-primary/5 transition-colors duration-500">
                    <stat.icon size={120} />
                  </div>
                  
                  <div className="relative z-10 text-center sm:text-left">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl bg-gradient-to-br from-primary/10 to-premium/10 text-primary shadow-inner`}>
                      <stat.icon size={32} />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-slate-600 group-hover:from-primary group-hover:to-premium transition-all duration-500"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-muted-foreground font-bold tracking-widest uppercase text-sm">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    );
  }
