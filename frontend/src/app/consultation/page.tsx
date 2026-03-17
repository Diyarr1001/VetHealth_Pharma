"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Headset, Calendar, Video, FileText, Send } from "lucide-react";

export default function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <section className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider uppercase text-sm mb-4 bg-primary/10 w-fit px-3 py-1 rounded-full"
            >
              <Headset size={16} /> Virtual Vet
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-6"
            >
              Expert Veterinary <br/><span className="text-premium">Consultation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              Connect with our team of elite veterinary specialists for diagnostic support, treatment protocols, and nutritional advice for your livestock or pets.
            </motion.p>
            
            <div className="space-y-8">
              {[
                { icon: Video, title: "Telemedicine Support", desc: "Live video consults for immediate visual diagnostics." },
                { icon: FileText, title: "Protocol Design", desc: "Customized vaccination and deworming schedules." },
                { icon: Calendar, title: "Farm Visits", desc: "On-site comprehensive herd health assessments." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-card border border-border p-3 rounded-2xl flex-shrink-0 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 font-heading">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-premium" />
             
             {isSuccess ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-foreground font-heading mb-2">Request Received</h3>
                 <p className="text-muted-foreground">Our veterinary team will contact you within 24 hours to schedule your consultation.</p>
                 <button onClick={() => setIsSuccess(false)} className="mt-8 text-primary hover:text-premium font-semibold">Book another session</button>
               </div>
             ) : (
               <>
                 <h2 className="text-2xl font-bold text-foreground font-heading mb-6">Request a Session</h2>
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">First Name</label>
                       <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Last Name</label>
                       <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Email</label>
                     <input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Animal Type</label>
                       <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none cursor-pointer">
                         <option value="">Select...</option>
                         <option value="cattle">Cattle / Buffalo</option>
                         <option value="poultry">Poultry</option>
                         <option value="pet">Dog / Cat</option>
                         <option value="other">Other</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Consultation Type</label>
                       <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none cursor-pointer">
                         <option value="video">Video Call</option>
                         <option value="phone">Phone Call</option>
                         <option value="visit">Farm Visit Request</option>
                       </select>
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Describe the issue</label>
                     <textarea required rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none"></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-primary hover:bg-premium text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-primary-foreground text-foreground border-t-transparent rounded-full animate-spin"></div>
                     ) : (
                        <><Send size={18} /> Submit Request</>
                     )}
                   </button>
                 </form>
               </>
             )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
