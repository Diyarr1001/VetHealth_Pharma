"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Thermometer, FlaskConical, Stethoscope } from "lucide-react";
import Link from "next/link";

const ECOSYSTEM = [
  {
    id: "medicines",
    title: "Veterinary Medicines",
    description: "Antibiotics, Anti-inflammatory, Analgesics, and parasiticides for complete care.",
    icon: Activity,
    color: "text-blue-500",
  },
  {
    id: "feed-supplements",
    title: "Animal Feed Supplements",
    description: "Mineral mixtures, vitamin supplements, and energy boosters for enhanced nutrition.",
    icon: FlaskConical,
    color: "text-amber-500",
  },
  {
    id: "poultry-products",
    title: "Poultry Products",
    description: "Toxin binders, probiotics, and electrolytes to improve poultry productivity.",
    icon: Shield,
    color: "text-emerald-500",
  },
  {
    id: "pet-healthcare",
    title: "Pet Healthcare",
    description: "Specialized medicines, nutrition, and grooming products for companion animals.",
    icon: Thermometer,
    color: "text-rose-500",
  },
  {
    id: "farm-solutions",
    title: "Farm Solutions",
    description: "Veterinary instruments, diagnostic equipment, and artificial insemination products.",
    icon: Stethoscope,
    color: "text-purple-500",
  },
];

export function ProductEcosystem() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-premium/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-premium font-semibold tracking-wider uppercase text-sm mb-3 block">
            Comprehensive Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
            The VetHealth <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From prevention to cure, our R&D-driven product ecosystem delivers holistic health solutions across the entire lifecycle of the animal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ECOSYSTEM.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border border-border bg-background hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 relative group ${
                index === 0 ? "lg:col-span-2 lg:flex lg:items-center lg:gap-8" : ""
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 transition-transform group-hover:scale-110 ${item.color} ${
                index === 0 ? "lg:mb-0 lg:w-24 lg:h-24 lg:rounded-3xl" : ""
              }`}>
                <item.icon size={index === 0 ? 40 : 28} />
              </div>
              <div>
                <h3 className={`font-bold text-foreground mb-3 font-heading ${
                  index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-muted-foreground mb-6 ${
                  index === 0 ? "text-lg max-w-md" : "text-base"
                }`}>
                  {item.description}
                </p>
                <Link
                  href={`/products/${item.id}`}
                  className="inline-flex items-center text-primary font-semibold text-sm hover:text-premium transition-colors"
                >
                  Explore Category <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-premium scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-full" />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary to-premium text-primary-foreground flex flex-col justify-center shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-heading">Custom Formulation?</h3>
              <p className="mb-8 text-primary-foreground/90 font-medium">
                We offer private labeling and bespoke manufacturing services.
              </p>
              <Link
                href="/manufacturing"
                className="inline-flex items-center bg-background text-foreground px-6 py-3 rounded-full font-bold text-sm hover:bg-transparent hover:text-primary-foreground border border-transparent hover:border-primary-foreground transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
