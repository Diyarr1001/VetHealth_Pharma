"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Stethoscope } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    dropdown: [
      { name: "Veterinary Medicines", href: "/products/medicines" },
      { name: "Vaccines", href: "/products/vaccines" },
      { name: "Animal Nutrition & Feed", href: "/products/nutrition" },
      { name: "Poultry Products", href: "/products/poultry" },
      { name: "Pet Healthcare", href: "/products/pets" },
      { name: "Instruments & Equipment", href: "/products/equipment" },
      { name: "Artificial Insemination", href: "/products/ai-products" },
    ]
  },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Distribution", href: "/distribution" },
  { name: "Consultation", href: "/consultation" },
  { name: "Knowledge Center", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 pt-4"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-xl w-64 overflow-hidden py-2" style={{ backdropFilter: "blur(12px)" }}>
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-3 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/contact?type=bulk"
              className="bg-primary hover:bg-premium text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-premium/20"
            >
              Bulk Order
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground block focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          className="lg:hidden bg-background/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-y-auto pb-24"
        >
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl font-medium block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-border">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block text-muted-foreground hover:text-foreground py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Link
                href="/contact?type=bulk"
                className="bg-primary w-full block text-center text-primary-foreground px-5 py-3 rounded-xl font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bulk Order Request
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
