"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "cattle",
    title: "Cattle & Dairy",
    items: "120+ Products",
    imageUrl: "https://images.unsplash.com/photo-1568038100292-c75e7d6b9d82?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // color: "from-blue-500/90 via-blue-700/60 to-transparent",
  },
  {
    id: "poultry",
    title: "Poultry Farming",
    items: "85+ Products",
    imageUrl: "https://images.unsplash.com/photo-1441122456239-401e92b73c65?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // color: "from-amber-500/90 via-amber-700/60 to-transparent",
  },
  {
    id: "aqua",
    title: "Aquaculture",
    items: "40+ Products",
    imageUrl: "https://images.pexels.com/photos/5806533/pexels-photo-5806533.jpeg",
    // color: "from-teal-400/90 via-teal-700/60 to-transparent",
  },
  {
    id: "sheep-goat",
    title: "Sheep & Goat",
    items: "65+ Products",
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=800&auto=format&fit=crop",
    // color: "from-emerald-500/90 via-emerald-800/60 to-transparent",
  },
  {
    id: "pets",
    title: "Companion Animals",
    items: "150+ Products",
    imageUrl: "https://images.pexels.com/photos/5745216/pexels-photo-5745216.jpeg",
    // color: "from-rose-500/90 via-rose-700/60 to-transparent",
  },
  {
    id: "equine",
    title: "Equine Healthcare",
    items: "30+ Products",
    imageUrl: "https://images.pexels.com/photos/14734881/pexels-photo-14734881.jpeg",
    // color: "from-purple-500/90 via-purple-700/60 to-transparent",
  },
];

export function AnimalCategories() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Targeted Species Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
              Healthcare by <span className="text-premium">Species</span>
            </h2>
          </div>
          <Link
            href="/categories"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group"
          >
            View All Categories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/products?animal=${category.id}`} className="block group">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-90 transition-opacity duration-300 group-hover:opacity-80`} />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium mb-3 border border-white/20">
                        {category.items}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                        {category.title}
                      </h3>
                      <div className="flex items-center text-primary-foreground/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Explore range <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
