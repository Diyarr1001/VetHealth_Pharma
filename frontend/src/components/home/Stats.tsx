"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Globe2, Beaker, Users, ShieldCheck, Microscope, Network, PackageCheck, Target } from "lucide-react";

const STATS = [
  { label: "Products", value: "500+", icon: Beaker },
  { label: "Clients", value: "1000+", icon: Users },
  { label: "Global Reach", value: "Pan-India+", icon: Globe2 },
];

const REASONS = [
  { title: "Wide Portfolio", desc: "Comprehensive range of veterinary solutions for all species.", icon: PackageCheck, color: "from-blue-500 to-cyan-400" },
  { title: "Certified Quality", desc: "Strict adherence to global GMP and WHO manufacturing standards.", icon: ShieldCheck, color: "from-emerald-500 to-teal-400" },
  { title: "Expertise Driven", desc: "Formulations backed by top veterinary specialists and researchers.", icon: Microscope, color: "from-violet-500 to-purple-400" },
  { title: "Reliable Network", desc: "Efficient tracking and global logistics ensuring on-time delivery.", icon: Network, color: "from-orange-500 to-amber-400" },
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
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-primary">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
          <polygon points="100,0 20,0 100,100" />
        </svg>
      </div>

      {/* Decorative Blooming Blobs */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-premium/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Why Choose Us */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block px-4 py-1.5 bg-primary/10 w-fit rounded-full border border-primary/20">
                The VetHealth Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 font-heading mb-8">
                Why Partner With Us?
              </h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {REASONS.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${reason.color} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${reason.color} text-white shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <reason.icon size={24} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <Target size={18} />
                <h3 className="text-sm font-bold tracking-widest uppercase">Industries Served</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry, index) => (
                  <span key={index} className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: -10 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5, type: "spring" }}
                  className={`bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 shadow-sm hover:shadow-lg transition-all flex items-center gap-6 ${index === 0 ? "ml-0 lg:-ml-12" : index === 1 ? "ml-0" : "ml-0 lg:ml-12 bg-gradient-to-r from-white to-primary/5"
                    }`}
                >
                  {/* Decorative Icon Background */}
                  <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-primary/5 transition-colors duration-500 transform group-hover:scale-150">
                    <stat.icon size={120} />
                  </div>

                  <div className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-primary/10 to-premium/10 text-primary shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon size={40} />
                  </div>
                  
                  <div className="relative z-10 w-full">
                    <motion.div
                      className="text-4xl md:text-5xl font-extrabold text-slate-800 font-heading mb-1 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 group-hover:from-primary group-hover:to-premium transition-all duration-500"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Background connecting line (Desktop only) */}
            <div className="hidden lg:block absolute top-10 bottom-10 left-10 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
