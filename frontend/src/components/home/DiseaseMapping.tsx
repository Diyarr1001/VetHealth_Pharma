"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Dna, ArrowRight } from "lucide-react";
import Link from "next/link";

const DISEASES = [
  {
    id: "mastitis",
    name: "Mastitis",
    animal: "Cattle",
    description: "Inflammation of the mammary gland and udder tissue, commonly affecting dairy cattle.",
    solution: "MastiCure Pro",
    benefits: "Rapid action against gram-positive and gram-negative bacteria, no milk discard period.",
  },
  {
    id: "coccidiosis",
    name: "Coccidiosis",
    animal: "Poultry",
    description: "Intestinal tract disease causing massive economic losses in poultry farming.",
    solution: "CocciStop Solution",
    benefits: "Broad-spectrum anticoccidial, improves feed conversion ratio (FCR), zero toxicity.",
  },
  {
    id: "tick-fever",
    name: "Tick Fever",
    animal: "Sheep & Goat",
    description: "Vector-borne disease causing high fever, anemia, and mortality.",
    solution: "ImidoVet Injection",
    benefits: "Single dose cure, prolonged protection, safe for pregnant animals.",
  },
  {
    id: "liver-fluke",
    name: "Liver Fluke",
    animal: "Cattle / Livestock",
    description: "Parasitic disease affecting the liver, severely impacting productivity.",
    solution: "OxyFlas 34%",
    benefits: "Kills all stages of liver fluke, highly palatable oral suspension.",
  },
];

export function DiseaseMapping() {
  const [activeDisease, setActiveDisease] = useState(DISEASES[0]);

  return (
    <section className="py-24 bg-gradient-to-t from-background via-slate-50 to-background relative border-y border-border overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -mb-20 -ml-20 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-violet-400/20 rounded-full mb-6 text-primary shadow-sm">
            <Dna size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground font-heading mb-6">
            Disease to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Solution</span> Matrix
          </h2>
          <p className="text-slate-600 text-lg">
            Identify the issue. Find the scientifically proven cure. We map common pathogens to targeted pharmaceutical interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* List Section */}
          <div className="lg:col-span-5 bg-card border border-border rounded-3xl p-6 shadow-sm">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search by disease or symptom..." 
                className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>

            <div className="space-y-3">
              {DISEASES.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setActiveDisease(disease)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all border flex items-center justify-between group ${
                    activeDisease.id === disease.id
                      ? "bg-gradient-to-r from-violet-50 to-white border-primary shadow-[inset_4px_0_0_0_rgba(109,40,217,1)] shadow-sm"
                      : "bg-white border-border hover:border-primary/30 hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <h4 className={`font-bold text-lg ${activeDisease.id === disease.id ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"}`}>
                      {disease.name}
                    </h4>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                      {disease.animal}
                    </span>
                  </div>
                  <ChevronRight size={20} className={`${activeDisease.id === disease.id ? "text-primary scale-110" : "text-slate-400"} transform transition-all group-hover:translate-x-1`} />
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border text-center">
              <Link href="/consultation" className="text-primary hover:text-violet-600 text-sm font-bold inline-flex items-center transition-colors group">
                Need Vet Consultation? <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDisease.id}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
              >
                {/* Decorative background logo/icon */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none text-primary">
                  <Dna size={300} />
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-red-100 shadow-sm">
                    Clinical Condition
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground font-heading mb-4 text-slate-800">
                    {activeDisease.name}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    {activeDisease.description}
                  </p>

                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 border-l-4 border-l-primary shadow-sm mb-8 hover:shadow-md transition-shadow">
                    <span className="text-sm text-primary font-bold uppercase tracking-widest block mb-1">
                      Recommended Intervention
                    </span>
                    <h4 className="text-2xl font-extrabold text-slate-800 font-heading mb-4">
                      {activeDisease.solution}
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Clinical Benefits:</strong> {activeDisease.benefits}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/products?search=${activeDisease.solution.toLowerCase()}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-premium text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all shadow-md w-full sm:w-auto"
                  >
                    View Product Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
