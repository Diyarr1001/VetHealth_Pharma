"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Globe, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
          >
            Pioneering the Future of <br/>
            <span className="text-primary">Animal Health</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            VetHealth Pharma Pvt Ltd operates in veterinary healthcare and animal nutrition. 
            We manufacture, distribute, and innovate healthcare solutions that empower veterinarians, farmers, and pet owners worldwide.
          </motion.p>
        </div>
      </section>

      {/* Business Activities & Overview Split */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb8122?q=80&w=1000&auto=format&fit=crop" 
              alt="Veterinary laboratory research and care" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">25+ Years</div>
                <div className="text-primary-foreground/80 font-medium">Of Scientific Excellence</div>
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-premium font-bold tracking-widest uppercase text-sm mb-4 block">Company Overview</span>
            <h2 className="text-4xl font-bold text-foreground font-heading mb-6">
              A trusted leader in veterinary healthcare and animal nutrition.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg mb-8">
              <p>
                <strong>Our Mission:</strong> Provide high-quality veterinary healthcare products and nutrition solutions.
              </p>
              <p>
                <strong>Our Vision:</strong> Become a trusted leader in veterinary healthcare and animal nutrition.
              </p>
              
              <div className="pt-4">
                <h3 className="font-bold text-foreground mb-3 font-heading text-xl">Key Business Activities:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Retail and wholesale veterinary medicines</li>
                  <li>Manufacturing of feed supplements</li>
                  <li>Distribution of national and international brands</li>
                  <li>Veterinary advisory services</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold text-foreground mb-1">1st</div>
                <div className="text-sm font-medium text-muted-foreground">Choice for Vets</div>
              </div>
              <div className="border-l-2 border-premium pl-4">
                <div className="text-3xl font-bold text-foreground mb-1">40+</div>
                <div className="text-sm font-medium text-muted-foreground">Countries Exported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-card border-y border-border py-24 mb-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground font-heading mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The foundational principles that drive our innovation and operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-primary mb-4" size={32} />, title: "Quality", desc: "Stringent GMP compliance and multi-stage testing for every batch produced." },
              { icon: <Users className="text-premium mb-4" size={32} />, title: "Integrity", desc: "Honest, transparent partnerships with farmers, veterinarians, and distributors." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope text-primary mb-4"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>, title: "Innovation", desc: "Continuous R&D to bring cutting-edge solutions to animal healthcare." },
              { icon: <TrendingUp className="text-premium mb-4" size={32} />, title: "Farmer Support", desc: "Empowering agricultural communities with better yields and healthier livestock." },
              { icon: <Globe className="text-primary mb-4" size={32} />, title: "Scientific Approach", desc: "Evidence-based product development targeting maximum bioavailability." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all hover:border-primary/30"
              >
                {value.icon}
                <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
