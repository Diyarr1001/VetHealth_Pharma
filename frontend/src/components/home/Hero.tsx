"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Headset } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Color Blooms & Video Layer */}
      <div className="absolute inset-0 z-0 bg-secondary/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-premium/20 blur-[150px] rounded-full mix-blend-multiply" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-90"
        >
          <source src="https://res.cloudinary.com/demo/video/upload/v1641370241/elephants.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent"></div>
      </div>

      {/* Content Wrapper */}
      <div className="container relative z-10 px-4 md:px-8 mx-auto mt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
              Global Standards in Veterinary Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight font-heading"
          >
            Complete Veterinary <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-premium">Healthcare</span> & Nutrition
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium"
          >
            VetHealth Pharma Pvt Ltd provides veterinary medicines, vaccines, feed supplements, poultry products, pet healthcare, and veterinary consultation services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-violet-600 hover:from-violet-600 hover:to-premium text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_15px_40px_rgba(201,162,39,0.5)] hover:-translate-y-1 group"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact?type=bulk"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border-2 border-slate-100 text-foreground px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              <ShoppingCart size={18} className="text-primary" />
              Bulk Order
            </Link>
            <Link
              href="/consultation"
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-foreground px-6 py-4 rounded-full font-bold transition-all hover:-translate-y-1 group"
            >
              <Headset size={18} className="text-premium" />
              Get Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted-foreground rounded-full flex justify-center pt-1 block"
        >
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
