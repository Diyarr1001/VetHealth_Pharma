"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Map, Briefcase, ChevronRight, Send } from "lucide-react";

export default function DealerNetwork() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Grow With Us
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
        >
          Join Our <span className="text-premium">Dealer Network</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Unlock exclusive distribution rights, aggressive pricing models, and comprehensive marketing support by becoming an authorized VetHealth partner.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Briefcase, title: "High Margin Portfolio", desc: "Access 500+ high-demand veterinary formulations with lucrative wholesaler margins." },
             { icon: Map, title: "Exclusive Territory", desc: "Get protected distribution rights in your designated geographical area." },
             { icon: Handshake, title: "Marketing Support", desc: "Receive promotional materials, clinical trial data, and localized advertising push." },
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-card border border-border p-8 rounded-3xl text-center group hover:border-primary/50 transition-colors"
             >
               <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                 <item.icon size={28} />
               </div>
               <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{item.title}</h3>
               <p className="text-muted-foreground">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-premium" />
             
             {isSuccess ? (
               <div className="text-center py-20 bg-background/50 rounded-2xl border border-border mt-4">
                 <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-foreground font-heading mb-2">Application Submitted!</h3>
                 <p className="text-muted-foreground mb-8">Our partnership team evaluates applications every 48 hours. We will be in touch shortly.</p>
               </div>
             ) : (
               <>
                 <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">Partnership Application</h2>
                 <form onSubmit={handleSubmit} className="space-y-6">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Company Name</label>
                       <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Contact Person</label>
                       <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Business Email</label>
                       <input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Phone Number</label>
                       <input required type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Target Territory / City / Country</label>
                     <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Current Business Volume / Experience</label>
                     <textarea required rows={4} placeholder="Briefly describe your current distribution network and monthly turnover..." className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none"></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-primary hover:bg-premium text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 group"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-primary-foreground text-foreground border-t-transparent rounded-full animate-spin"></div>
                     ) : (
                        <>Submit Application <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                     )}
                   </button>
                 </form>
               </>
             )}
          </motion.div>
      </section>
    </div>
  );
}
