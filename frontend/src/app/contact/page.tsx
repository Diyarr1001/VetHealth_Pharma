"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
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
      <section className="container mx-auto px-4 md:px-8 mb-20 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Have a question about our products, need bulk supply details, or want to report an adverse event? Our global support team is ready to help.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-card border border-border p-3 rounded-xl text-primary mt-1"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">VetHealth Pharma Pvt Ltd</h4>
                    <p className="text-muted-foreground">Pharma Tech Park, Industrial Area Phase 1,<br/>Mumbai, India - 400001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card border border-border p-3 rounded-xl text-primary mt-1"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone & WhatsApp</h4>
                    <p className="text-muted-foreground">+91 1800-VET-CARE (Toll Free)<br/>+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card border border-border p-3 rounded-xl text-primary mt-1"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@vethealthpharma.com<br/>support@vethealthpharma.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card border border-border p-3 rounded-xl text-primary mt-1"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM (IST)<br/>Response Time: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="h-64 bg-card border border-border rounded-3xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" fill className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-background/90 backdrop-blur px-4 py-2 rounded-full border border-primary/20 text-sm font-bold shadow-lg flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse"/> VetHealth HQ
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl"
          >
            {isSuccess ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-foreground font-heading mb-2">Message Sent</h3>
                 <p className="text-muted-foreground">Thank you for contacting us. Our support team will revert within 24 hours.</p>
                 <button onClick={() => setIsSuccess(false)} className="mt-8 text-primary hover:text-premium font-semibold">Send another message</button>
               </div>
             ) : (
               <>
                 <h2 className="text-2xl font-bold text-foreground font-heading mb-6">Send us a message</h2>
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Name</label>
                       <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-foreground">Email</label>
                       <input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" />
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                     <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none cursor-pointer">
                       <option value="">Select...</option>
                       <option value="product">Product Inquiry</option>
                       <option value="bulk">Bulk Order</option>
                       <option value="partnership">Partnership</option>
                       <option value="support">General Support</option>
                     </select>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Message</label>
                     <textarea required rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none"></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-foreground hover:bg-primary text-background hover:text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 group"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-background text-foreground border-t-transparent rounded-full animate-spin"></div>
                     ) : (
                        <><Send size={18} /> Send Message</>
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
