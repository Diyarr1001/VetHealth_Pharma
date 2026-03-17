"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

// Mock Data for the Blog
const CATEGORIES = ["All", "Animal Diseases", "Vaccination", "Nutrition", "Farm Management"];

const POSTS = [
  {
    id: "1",
    title: "Understanding Mastitis in Dairy Farm Cattle: Prevention & Treatment",
    slug: "understanding-mastitis",
    excerpt: "Mastitis is one of the most costly diseases in the dairy industry. Learn how proactive management and the right therapeutics can mitigate losses.",
    category: "Animal Diseases",
    author: "Dr. Sarah Jenkins",
    date: "Oct 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1596733430284-f74372752191?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "The Importance of Cold Chain Integrity for Avian Vaccines",
    slug: "cold-chain-avian-vaccines",
    excerpt: "Vaccine failure in poultry is often linked to compromised cold chain logistics. Discover our new temperature-stable formulations.",
    category: "Vaccination",
    author: "Dr. Rajesh Kumar",
    date: "Oct 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1615569485125-1e35d25920de?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Optimizing Feed Additives for Rapid Broiler Growth",
    slug: "optimizing-feed-additives",
    excerpt: "Probiotics vs Enzymes: Which yields the best feed conversion ratio? A comprehensive study on broiler nutrition.",
    category: "Nutrition",
    author: "Prof. Alena Smith",
    date: "Sep 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1548684534-4b5f8ceaeed2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Biosecurity Measures Every Modern Farm Must Implement",
    slug: "biosecurity-modern-farms",
    excerpt: "With the rise of novel pathogens, physical barriers and strict sanitization protocols are your farm's first line of defense.",
    category: "Farm Management",
    author: "Dr. Ahmed El-Sayed",
    date: "Sep 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
  }
];

export default function BlogListing() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Insights & Research
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground font-heading mb-6"
        >
          Knowledge <span className="text-premium">Center</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Stay updated with the latest advancements in veterinary science, farm management practices, and animal nutrition.
        </motion.p>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {CATEGORIES.map((cat, idx) => (
             <button 
               key={idx}
               className={`px-6 py-2 rounded-full font-medium transition-all ${
                 idx === 0 
                  ? "bg-foreground text-background" 
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
               }`}
             >
               {cat}
             </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/40 transition-colors shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-border">
                  <Tag size={12} className="text-primary"/> {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                   <div className="flex items-center gap-1"><Calendar size={14}/> {post.date}</div>
                   <div className="w-1 h-1 bg-border rounded-full" />
                   <div className="flex items-center gap-1"><User size={14}/> {post.author}</div>
                </div>
                <h2 className="text-2xl font-bold text-foreground font-heading mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center text-primary font-semibold hover:text-premium transition-colors"
                >
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Pagination mock */}
        <div className="mt-16 flex justify-center">
           <button className="bg-card border border-border px-6 py-3 rounded-xl font-semibold text-foreground hover:border-primary/50 transition-colors">
             Load More Articles
           </button>
        </div>
      </section>
    </div>
  );
}
