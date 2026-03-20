"use client";

import { motion, Variants } from "framer-motion";
import { Globe2, Beaker, Users, ShieldCheck, Microscope, Network, PackageCheck, Target } from "lucide-react";

const STATS = [
  { label: "Products", value: "500+", icon: Beaker },
  { label: "Clients", value: "1000+", icon: Users },
  { label: "Global Reach", value: "Pan-India+", icon: Globe2 },
];

const REASONS = [
  { title: "Wide Portfolio", desc: "Comprehensive range of veterinary solutions for all species.", icon: PackageCheck, color: "text-blue-600", bg: "bg-blue-50", delay: 0 },
  { title: "Certified Quality", desc: "Strict adherence to global GMP and WHO manufacturing standards.", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50", delay: 0.1 },
  { title: "Expertise Driven", desc: "Formulations backed by top veterinary specialists and researchers.", icon: Microscope, color: "text-violet-600", bg: "bg-violet-50", delay: 0.2 },
  { title: "Reliable Network", desc: "Efficient tracking and global logistics ensuring on-time delivery.", icon: Network, color: "text-amber-600", bg: "bg-amber-50", delay: 0.3 },
];

const INDUSTRIES = [
  "Dairy Farms",
  "Poultry Farms",
  "Sheep & Goat Farms",
  "Veterinary Clinics",
  "Pet Owners"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

export function Stats() {
  return (
    <section className="py-24 sm:py-32 bg-[#fafafa] relative overflow-hidden flex items-center justify-center">
      
      {/* Innovative Light Theme Background: Animated Concentric Pulse Rings */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Why Choose Us (Innovative Staggered Cards) */}
          <div className="order-2 lg:order-1 relative">
            
            {/* Soft backdrop glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/50 blur-[80px] rounded-full -z-10" />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10"
            >
              {REASONS.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start group ${index % 2 !== 0 ? 'sm:mt-12' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${reason.bg} ${reason.color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <reason.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-3 font-heading tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Headings & Floating Stats */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">The VetHealth Advantage</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading mb-6 leading-[1.1] tracking-tight">
                Innovative Care <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-premium">For Every Species.</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Join thousands of farms and clinics worldwide that trust our certified manufacturing standards and unparalleled veterinary expertise.
              </p>
            </motion.div>

            {/* Premium Stat Blocks */}
            <div className="space-y-4 mb-12">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                  className="bg-white/80 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center gap-6 max-w-md hover:border-primary/20 hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300">
                    <stat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Target Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8 border-t border-slate-200/60"
            >
              <div className="flex items-center gap-2 mb-5 text-slate-400">
                <Target size={18} />
                <h3 className="text-sm font-bold tracking-widest uppercase">Industries We Serve</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {INDUSTRIES.map((industry, index) => (
                  <span key={index} className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:border-primary hover:text-primary transition-colors shadow-sm cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
