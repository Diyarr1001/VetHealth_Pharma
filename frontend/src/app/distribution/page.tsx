"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Globe, Building2, Package, Tent } from "lucide-react";
import Image from "next/image";

const CLIENTS = [
  { icon: Tent, title: "Livestock Farms", desc: "Dairy, Poultry, and Aquaculture farms." },
  { icon: Building2, title: "Veterinary Clinics", desc: "Private practitioners and pet hospitals." },
  { icon: Package, title: "Regional Distributors", desc: "Wholesale tier-1 partners globally." },
  { icon: Globe, title: "Government Agencies", desc: "State-level disease control bodies." },
];

export default function Distribution() {
  return (
    <div className="bg-background pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 mb-24 text-center max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Uninterrupted Supply Chain
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
        >
          Bulk Supply & <span className="text-premium">Distribution</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Delivering critical veterinary care exactly where it's needed. Our logistics infrastructure ensures cold-chain integrity and rapid deployment across continents.
        </motion.p>
      </section>

      {/* Map Visualization Abstract */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="relative h-[500px] w-full bg-card rounded-3xl border border-border shadow-xl overflow-hidden flex items-center justify-center">
            {/* Abstract Map Background using Grid and Pings */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }}></div>
            
            <div className="text-center relative z-10 px-6">
               <h2 className="text-3xl font-bold font-heading mb-4 text-foreground text-primary">Global Footprint</h2>
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">Operating in over 40+ countries with strategic warehousing in Asia, Africa, and the Middle East.</p>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-background/80 backdrop-blur border border-border p-6 rounded-2xl shadow-sm">
                    <span className="text-3xl font-bold text-foreground block mb-1">40+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2"><Globe size={14}/> Countries</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur border border-border p-6 rounded-2xl shadow-sm">
                    <span className="text-3xl font-bold text-foreground block mb-1">500+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2"><Building2 size={14}/> Distributors</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur border border-border p-6 rounded-2xl shadow-sm">
                    <span className="text-3xl font-bold text-foreground block mb-1">12</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2"><Package size={14}/> Supply Hubs</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur border border-border p-6 rounded-2xl shadow-sm">
                    <span className="text-3xl font-bold text-foreground block mb-1"><span className="text-primary italic">Cold</span></span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2"><Truck size={14}/> Chain Intact</span>
                  </div>
               </div>
            </div>

            {/* Simulated map pings */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-premium rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-premium rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>
      </section>

      {/* Connecting Client Segments */}
      <section className="bg-card py-24 mb-32 border-y border-border">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground font-heading mb-4">Who Do We Supply?</h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">We categorize our distribution channels to ensure specialized support and targeted logistics for different segments of animal healthcare.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {CLIENTS.map((client, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-background p-8 rounded-2xl border border-border shadow-sm text-left hover:border-primary/50 transition-colors"
                  >
                     <client.icon className="text-primary mb-6" size={32}/>
                     <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{client.title}</h3>
                     <p className="text-muted-foreground">{client.desc}</p>
                  </motion.div>
               ))}
            </div>
            
            <div className="mt-16">
               <a href="/contact?type=bulk" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-premium text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:-translate-y-1">
                 Request Bulk Pricing
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
