"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/store/CartContext";
import { Search, Filter, ShieldCheck, FileDown, ArrowRight, ShoppingCart, Loader2 } from "lucide-react";

const CATEGORIES = ["All", "Medicines", "Vaccines", "Feed Supplements", "Nutritional", "Equipment"];
const ANIMALS = ["All", "Cattle", "Poultry", "Sheep & Goat", "Pets", "Aquaculture"];

export default function ProductListing() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAnimal, setActiveAnimal] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(p => {
    const pCategory = p.category?.name || "Uncategorized";
    const pAnimals = p.animalTypes || [];
    const matchCat = activeCategory === "All" || pCategory === activeCategory;
    const matchAnim = activeAnimal === "All" || pAnimals.includes(activeAnimal);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description?.toLowerCase().includes(search.toLowerCase());
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
         {loading ? (
           <div className="flex justify-center items-center py-20 text-muted-foreground">
             <Loader2 size={40} className="animate-spin text-primary" />
           </div>
         ) : (
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
                   {product.imageUrl ? (
                     <Image src={product.imageUrl} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
                   ) : (
                     <ShieldCheck size={80} className="text-muted-foreground/30" />
                   )}
                   
                   <div className="absolute top-4 right-4 flex flex-col gap-2">
                     <div className="bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold border border-border shadow-sm">
                       {product.category?.name || "Uncategorized"}
                     </div>
                     {product.animalTypes && product.animalTypes.length > 0 && (
                       <div className="bg-primary/90 backdrop-blur text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                         {product.animalTypes[0]}
                       </div>
                     )}
                   </div>
                 </div>
                 
                 <div className="p-8 flex flex-col flex-grow">
                   <h2 className="text-2xl font-bold text-foreground font-heading mb-2 group-hover:text-primary transition-colors">
                     <Link href={`/products/${product.slug || product.id}`}>{product.name}</Link>
                   </h2>
                   <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                   
                   <div className="flex items-end justify-between mb-4">
                     <span className="text-xl font-extrabold text-foreground">${product.price?.toFixed(2) || "0.00"}</span>
                     <button 
                       className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors uppercase tracking-widest"
                     >
                       <FileDown size={14} /> Data
                     </button>
                   </div>
                   
                   <div className="flex items-center justify-between gap-3 mt-auto">
                     <button 
                       onClick={() => addToCart({ id: product.id, name: product.name, price: product.price || 0, slug: product.slug, imageUrl: product.imageUrl, quantity: 1 })}
                       className="flex-1 bg-primary hover:bg-violet-700 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all text-sm shadow-sm"
                     >
                       <ShoppingCart size={16} /> Add to Cart
                     </button>
                     <Link 
                       href={`/products/${product.slug || product.id}`}
                       className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-xl transition-colors"
                     >
                       <ArrowRight size={18} />
                     </Link>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         )}
         
         {!loading && filteredProducts.length === 0 && (
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
