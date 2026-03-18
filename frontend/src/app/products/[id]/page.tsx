"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileDown, ShieldCheck, ShoppingCart, MessageSquareText, Plus, Minus } from "lucide-react";
import { useCart } from "@/store/CartContext";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Hardcoded for demo, normally fetched from API using params.id
  const product = {
    id: "1",
    name: "MastiCure Pro",
    price: 24.99,
    slug: "masticure-pro",
    imageUrl: "https://images.unsplash.com/photo-1584745814571-0f723e7facb9?q=80&w=800&auto=format&fit=crop"
  };
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <section className="container mx-auto px-4 md:px-8">
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-semibold mb-8">
           <ArrowLeft size={16} className="mr-2" /> Back to Products
        </Link>
        
        <div className="bg-card border border-border rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
             
             {/* Left: Image & Quick Actions */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-6"
             >
               <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center p-8">
                 <Image src="https://images.unsplash.com/photo-1584745814571-0f723e7facb9?q=80&w=800&auto=format&fit=crop" fill className="object-cover" alt="Product Image" />
                 
                 <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                   Rx Only
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <button className="flex items-center justify-center gap-2 bg-background border border-border hover:border-primary/50 text-foreground py-4 rounded-xl font-bold transition-all text-sm group">
                   <FileDown size={18} className="text-muted-foreground group-hover:text-primary transition-colors"/> Tech Data Sheet
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-background border border-border hover:border-primary/50 text-foreground py-4 rounded-xl font-bold transition-all text-sm group">
                   <FileDown size={18} className="text-muted-foreground group-hover:text-primary transition-colors"/> Material Safety (MSDS)
                 </button>
               </div>
             </motion.div>

             {/* Right: Details */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex flex-col justify-center"
             >
               <div className="flex gap-2 mb-4">
                 <span className="bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Medicines</span>
                 <span className="bg-foreground/10 text-foreground border border-border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Cattle</span>
               </div>
               
               <h1 className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-2">
                 MastiCure Pro
               </h1>
               
               <div className="text-3xl font-extrabold text-primary mb-4">${product.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground tracking-widest uppercase">/ unit</span></div>

               <p className="text-lg text-muted-foreground mb-8">
                 Broad-spectrum, rapid-action intramammary infusion designed specifically for the treatment of clinical mastitis in lactating dairy cattle.
               </p>
               
               <div className="space-y-6 mb-10">
                 <div className="bg-background border border-border rounded-2xl p-6">
                   <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Composition</h3>
                   <p className="text-foreground font-medium text-lg border-l-2 border-primary pl-4">Cefoperazone Sodium 250mg <br/><span className="text-muted-foreground text-sm">per 10ml syringe</span></p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div className="bg-background border border-border rounded-2xl p-6">
                     <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Dosage</h3>
                     <p className="text-foreground font-medium">1 syringe per infected quarter</p>
                   </div>
                   <div className="bg-background border border-border rounded-2xl p-6">
                     <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Withdrawal</h3>
                     <p className="text-foreground font-medium text-destructive">Milk: 72 hours<br/>Meat: 7 days</p>
                   </div>
                 </div>
               </div>
               
               <div className="pt-6 border-t border-border mt-auto space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="flex items-center border border-border rounded-xl bg-background overflow-hidden p-1">
                     <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"><Minus size={16}/></button>
                     <span className="w-12 text-center font-bold">{quantity}</span>
                     <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"><Plus size={16}/></button>
                   </div>
                   <button 
                     onClick={() => addToCart({ ...product, quantity })}
                     className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-premium text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-premium/20"
                   >
                     <ShoppingCart size={18} /> Add to Cart
                   </button>
                 </div>
                 <Link href="/contact?type=bulk" className="w-full flex items-center justify-center gap-2 bg-card hover:bg-muted border border-border text-foreground px-8 py-3 rounded-xl font-bold transition-all">
                   <MessageSquareText size={18} /> Request Bulk Quote / Ask a Vet
                 </Link>
               </div>
             </motion.div>
          </div>
        </div>
        
        {/* Additional Info Tabs */}
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-foreground font-heading mb-8">Clinical Details</h2>
           
           <div className="space-y-8">
             <div>
               <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><ShieldCheck className="text-primary"/> Indications & Usage</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Indicated for the treatment of clinical mastitis in lactating cows caused by susceptible strains of Staphylococcus aureus, Streptococcus agalactiae, Streptococcus dysgalactiae, Streptococcus uberis, and Escherichia coli. The synergistic formulation rapidly penetrates inflamed udder tissue to deliver bactericidal concentrations.
               </p>
             </div>
             
             <div>
               <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><ShieldCheck className="text-primary"/> Key Benefits</h3>
               <ul className="space-y-3">
                 <li className="flex items-start gap-3"><CheckCircle2 className="text-primary flex-shrink-0 mt-0.5"/> <span className="text-muted-foreground">High clinical and bacteriological cure rates.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="text-primary flex-shrink-0 mt-0.5"/> <span className="text-muted-foreground">Broad spectrum efficacy targeting both gram-positive and gram-negative pathogens.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="text-primary flex-shrink-0 mt-0.5"/> <span className="text-muted-foreground">Specialized base ensures uniform dispersion throughout the infected quarter.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="text-primary flex-shrink-0 mt-0.5"/> <span className="text-muted-foreground">Reduced inflammation and rapid return to normal milk production.</span></li>
               </ul>
             </div>
             
             <div>
               <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><ShieldCheck className="text-primary"/> Administration Guidelines</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Milk out the infected quarter completely. Clean and disinfect the teat end thoroughly with the provided alcohol pad. Remove the cap from the syringe tip and carefully insert the tip into the teat canal. Push the plunger to infuse the entire contents into the quarter. Massage the quarter to distribute the medication.
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
