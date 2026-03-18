"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:bg-premium transition-colors">
                <Stethoscope size={24} />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-foreground block leading-tight">
                  VetHealth<span className="text-primary">Pharma</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                  Premium Animal Care
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing premium, scientifically formulated medicines, vaccines, and supplements for global livestock and companion animals. Trusted by veterinarians worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Facebook size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Twitter size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary-foreground hover:bg-primary transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Products</Link></li>
              <li><Link href="/manufacturing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Manufacturing & Private Label</Link></li>
              <li><Link href="/distribution" className="text-muted-foreground hover:text-primary transition-colors text-sm">Bulk Supply</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Knowledge Center</Link></li>
              <li><Link href="/dealers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Dealer Network</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-premium rounded-full"></span> Key Categories
            </h3>
            <ul className="space-y-3">
              <li><Link href="/products/livestock" className="text-muted-foreground hover:text-premium transition-colors text-sm">Livestock Healthcare</Link></li>
              <li><Link href="/products/poultry" className="text-muted-foreground hover:text-premium transition-colors text-sm">Poultry Solutions</Link></li>
              <li><Link href="/products/pets" className="text-muted-foreground hover:text-premium transition-colors text-sm">Companion Animal Care</Link></li>
              <li><Link href="/products/aquaculture" className="text-muted-foreground hover:text-premium transition-colors text-sm">Aquaculture Nutrition</Link></li>
              <li><Link href="/products/vaccines" className="text-muted-foreground hover:text-premium transition-colors text-sm">Veterinary Vaccines</Link></li>
              <li><Link href="/products/equipment" className="text-muted-foreground hover:text-premium transition-colors text-sm">Clinical Equipment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span> Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Global HQ: Pharma Tech Park, Industrial Area Phase 1,<br />
                  Mumbai, India - 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +91 1800-VET-CARE<br />
                  +91 98765 43210 (WhatsApp)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@vethealthpharma.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@vethealthpharma.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} VetHealth Pharma Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
