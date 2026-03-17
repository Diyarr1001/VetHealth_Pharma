"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ShieldCheck, FileDown, ArrowRight } from "lucide-react";

// Mock Data
const PRODUCTS = [
  { id: "1", name: "MastiCure Pro", category: "Medicines", animal: "Cattle", summary: "Broad-spectrum intramammary infusion for clinical mastitis.", imageUrl: "https://images.unsplash.com/photo-1584745814571-0f723e7facb9?q=80&w=800&auto=format&fit=crop" },
  { id: "2", name: "CocciStop Solution", category: "Medicines", animal: "Poultry", summary: "Liquid anticoccidial for rapidly spreading infections.", imageUrl: "https://images.unsplash.com/photo-1542385151-efd014aa27f6?q=80&w=800&auto=format&fit=crop" },
  { id: "3", name: "BoviVax 5-Way", category: "Vaccines", animal: "Cattle", summary: "Pentavalent respiratory and reproductive vaccine.", imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop" },
  { id: "4", name: "AquaGrow Booster", category: "Feed Supplements", animal: "Aquaculture", summary: "Pelleted probiotic for enhanced FCR in shrimp and fish.", imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { id: "5", name: "ImidoVet Injection", category: "Medicines", animal: "Sheep & Goat", summary: "Specific hemoparasiticide against Babesiosis and Anaplasmosis.", imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" },
  { id: "6", name: "PetFlex Plus", category: "Nutritional", animal: "Pets", summary: "Advanced joint care chewables with Glucosamine for dogs.", imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" },
];

const CATEGORIES = ["All", "Medicines", "Vaccines", "Feed Supplements", "Nutritional", "Equipment"];
const ANIMALS = ["All", "Cattle", "Poultry", "Sheep & Goat", "Pets", "Aquaculture"];

export default function ProductListing() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAnimal, setActiveAnimal] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchAnim = activeAnimal === "All" || p.animal === activeAnimal;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchAnim && matchSearch;
  });

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <section className="container mx-auto px-4 md:px-8 mb-16 text-center max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Formulated for Efficacy
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-6"
        >
          Veterinary <span className="text-premium">Products</span>
        </motion.h1>
      </section>

      {/* Filtering Section */}
      <section className="container mx-auto px-4 md:px-8 mb-16">
        <div className="bg-card border border-border p-6 rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 items-center sticky top-24 z-20">
           
           <div className="relative w-full md:w-1/3">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
             <input 
               type="text" 
               placeholder="Search formulations..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
             />
           </div>
           
           <div className="w-full md:w-1/3 flex items-center gap-3">
             <Filter size={18} className="text-muted-foreground flex-shrink-0" />
             <select 
               className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground cursor-pointer"
               value={activeCategory}
               onChange={(e) => setActiveCategory(e.target.value)}
             >
               {CATEGORIES.map(c => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
             </select>
           </div>
           
           <div className="w-full md:w-1/3">
             <select 
               className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground cursor-pointer"
               value={activeAnimal}
               onChange={(e) => setActiveAnimal(e.target.value)}
             >
               {ANIMALS.map(a => <option key={a} value={a}>{a === "All" ? "All Species" : a}</option>)}
             </select>
           </div>
           
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 md:px-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredProducts.map((product, idx) => (
             <motion.div 
               key={product.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.05 }}
               className="bg-card border border-border rounded-3xl overflow-hidden group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col"
             >
               <div className="relative h-60 bg-muted overflow-hidden flex items-center justify-center p-6">
                 <Image src={product.imageUrl} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
                 
                 <div className="absolute top-4 right-4 flex flex-col gap-2">
                   <div className="bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold border border-border shadow-sm">
                     {product.category}
                   </div>
                   <div className="bg-primary/90 backdrop-blur text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                     {product.animal}
                   </div>
                 </div>
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                 <h2 className="text-2xl font-bold text-foreground font-heading mb-2 group-hover:text-primary transition-colors">
                   <Link href={`/products/${product.id}`}>{product.name}</Link>
                 </h2>
                 <p className="text-muted-foreground mb-6 flex-grow">{product.summary}</p>
                 
                 <div className="flex items-center justify-between mt-auto">
                   <Link 
                     href={`/products/${product.id}`}
                     className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full transition-colors"
                   >
                     <ArrowRight size={18} />
                   </Link>
                   <button className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors uppercase tracking-widest">
                     <FileDown size={14} /> Data Sheet
                   </button>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
         
         {filteredProducts.length === 0 && (
           <div className="text-center py-20">
             <ShieldCheck size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
             <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
             <p className="text-muted-foreground">Adjust your filters or search query to see results.</p>
           </div>
         )}
      </section>
    </div>
  );
}
