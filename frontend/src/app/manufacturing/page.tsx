"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, ShieldCheck, ClipboardCheck, FlaskConical, Settings, PackagePlus, CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  { title: "Raw Material Sourcing", description: "Procuring highest-grade APIs globally with strict vendor compliance.", icon: PackagePlus },
  { title: "Formulation R&D", description: "Scientifically developing optimal drug delivery profiles for specific species.", icon: FlaskConical },
  { title: "Pilot Batch Production", description: "Validation of stability and efficacy before commercial scale up.", icon: Settings },
  { title: "Commercial Manufacturing", description: "Automated GMP-compliant production ensuring pristine quality.", icon: Factory },
  { title: "Rigorous QC Testing", description: "Multi-parameter testing including HPLC, GC, and microbiological assays.", icon: Micropscope },
  { title: "Packaging & Dispatch", description: "Cold-chain intact and secure packaging for global transportation.", icon: ClipboardCheck },
];

function Micropscope({ className, size }: { className?: string, size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
  );
}

export default function Manufacturing() {
  return (
    <div className="bg-background pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 mb-24 text-center max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          World-Class Infrastructure
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
        >
          Manufacturing & <span className="text-premium">Private Label</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Our state-of-the-art, GMP-certified facilities represent the pinnacle of veterinary drug manufacturing. We offer comprehensive private labeling and custom formulation services.
        </motion.p>
      </section>

      {/* Factory Visuals & Certs */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1563969113643-4a0bba8f4ac6?q=80&w=1000&auto=format&fit=crop" alt="Sterile Manufacturing line" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-white">Sterile Injectables Facility</h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-8 h-[400px]">
             <div className="relative rounded-3xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1542159492-4f3df7b6ec75?q=80&w=1000&auto=format&fit=crop" alt="Quality Control Lab" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <h3 className="text-xl font-bold text-white">Advanced QC Laboratory</h3>
               </div>
             </div>
             <div className="relative rounded-3xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1615569485125-1e35d25920de?q=80&w=1000&auto=format&fit=crop" alt="Feed Additives Plant" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <h3 className="text-xl font-bold text-white">Oral Solutions & Powders</h3>
               </div>
             </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center py-8 border-y border-border">
          <div className="flex items-center gap-2"><ShieldCheck className="text-primary"/><span className="font-bold text-foreground">WHO-GMP Certified</span></div>
          <div className="flex items-center gap-2"><ShieldCheck className="text-premium"/><span className="font-bold text-foreground">ISO 9001:2015</span></div>
          <div className="flex items-center gap-2"><ShieldCheck className="text-primary"/><span className="font-bold text-foreground">GLP Compliant</span></div>
        </div>
      </section>

      {/* Private Label & Custom Formulation */}
      <section className="bg-card py-24 mb-32 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground font-heading mb-6">Private Label & <br/>Bespoke Formulations</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Looking to launch your own brand of veterinary products? VetHealth Pharma takes the complexity out of product development.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                From conceptualization and regulatory approvals to manufacturing and packaging, we offer end-to-end contract manufacturing for domestic and international markets.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary"/> <span className="font-medium text-foreground">Customized Drug Profiles</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary"/> <span className="font-medium text-foreground">Regulatory Dossier Support</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary"/> <span className="font-medium text-foreground">Flexible Batch Sizes</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary"/> <span className="font-medium text-foreground">Branding & Packaging Design</span></li>
              </ul>
              <a href="/contact?type=partnership" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-premium text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all">
                Partner With Us
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-premium/20 rounded-full blur-3xl opacity-50" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Process Steps visualized as cards */}
                {PROCESS_STEPS.slice(0, 4).map((step, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-background border border-border p-6 rounded-2xl shadow-sm"
                   >
                     <step.icon className="text-primary mb-4" size={28}/>
                     <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                     <p className="text-sm text-muted-foreground">{step.description}</p>
                   </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Flow */}
      <section className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
        <h2 className="text-4xl font-bold text-foreground font-heading mb-16">The Manufacturing Flow</h2>
        <div className="relative">
           {/* Connecting line */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-card border-4 border-background shadow-md flex items-center justify-center text-primary font-bold text-xl mb-4 group hover:border-primary transition-colors cursor-default relative">
                    {idx + 1}
                    <div className="absolute inset-0 rounded-full border border-primary/20 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1 leading-tight">{step.title}</h4>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
