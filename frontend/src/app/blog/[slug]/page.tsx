"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <article className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-semibold mb-8">
           <ArrowLeft size={16} className="mr-2" /> Back to Knowledge Center
        </Link>
        
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-md mb-6 border border-primary/20">
            Animal Diseases
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-6 leading-tight">
            Understanding Mastitis in Dairy Farm Cattle: Prevention & Treatment
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground uppercase tracking-wider">
             <div className="flex items-center gap-2"><User size={16} className="text-primary"/> Dr. Sarah Jenkins</div>
             <div className="flex items-center gap-2"><Calendar size={16} className="text-primary"/> Oct 12, 2026</div>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
           <Image 
             src="https://images.unsplash.com/photo-1596733430284-f74372752191?q=80&w=1200&auto=format&fit=crop" 
             alt="Mastitis in Dairy Cattle" 
             fill 
             className="object-cover"
           />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-xl text-foreground font-medium mb-8">
            Mastitis is one of the most costly diseases in the dairy industry. Learn how proactive management and the right therapeutics can mitigate losses.
          </p>
          
          <h2 className="text-3xl font-bold text-foreground font-heading mt-12 mb-6">What is Bovine Mastitis?</h2>
          <p className="mb-6">
            Bovine mastitis is the persistent, inflammatory reaction of the udder tissue. It is the most common disease in adult dairy cows and is accountable for the majority of the antibiotics administered to dairy cows. It is a potentially fatal mammary gland infection, resulting in a systemic illness.
          </p>
          
          <h3 className="text-2xl font-bold text-foreground font-heading mt-10 mb-4">Key Pathogens</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Staphylococcus aureus:</strong> A contagious pathogen that colonizes the udder.</li>
            <li><strong>Streptococcus agalactiae:</strong> Highly infectious but generally easier to treat.</li>
            <li><strong>Coliforms (E. coli):</strong> Environmental pathogens that cause acute, severe mastitis.</li>
          </ul>

          <div className="bg-card border-l-4 border-l-primary p-6 rounded-r-2xl my-10 shadow-sm">
            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <span className="text-primary">Clinical Observation:</span> Rapid Detection is Key
            </h4>
            <p className="text-sm m-0">
              Early detection using the California Mastitis Test (CMT) or automated somatic cell count (SCC) sensors can improve therapeutic success rates by up to 60%.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground font-heading mt-12 mb-6">Treatment Protocols</h2>
          <p className="mb-6">
            Veterinary interventions typically depend on whether the mastitis is clinical or subclinical, and the specific pathogens involved. VetHealth Pharma recommends our <strong>MastiCure Pro</strong> intramammary infusion for broad-spectrum coverage against both gram-positive and gram-negative bacteria.
          </p>
          
          <p>
            Always consult your farm veterinarian before initiating antibiotic therapy to ensure adherence to milk withdrawal periods and to prevent antimicrobial resistance.
          </p>
        </div>
        
        {/* Share & Tags */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-foreground">Dairy</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-foreground">Antibiotics</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-foreground">Prevention</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Share2 size={16}/> Share:</span>
            <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Facebook size={16}/></button>
            <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Twitter size={16}/></button>
            <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin size={16}/></button>
          </div>
        </div>
      </article>
    </div>
  );
}
