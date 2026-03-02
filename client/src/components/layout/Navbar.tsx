import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Book a Table", path: "/book" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="font-serif text-3xl font-bold text-primary tracking-wider" data-testid="nav-logo">
                Andaaz E Awadh
              </a>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent ${
                    location === link.path ? "text-accent" : "text-foreground"
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-2 h-auto text-sm uppercase tracking-widest rounded-none border border-primary">
              <Link href="/book" data-testid="nav-book-btn">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
              data-testid="nav-mobile-btn"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium uppercase tracking-widest ${
                    location === link.path ? "text-accent" : "text-foreground"
                  }`}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-sm uppercase tracking-widest rounded-none border border-primary mt-4">
              <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}