import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <div className="w-4 h-6 border-2 border-slate-dark"></div>
            </div>
            <span className="text-xl font-heading text-primary tracking-wider">HISTORY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
            <a href="#events" className="text-foreground/80 hover:text-primary transition-colors">Events</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
            <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">Contact Us</Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
              <a href="#events" className="text-foreground/80 hover:text-primary transition-colors">Events</a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
              <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a>
              <Button variant="ghost" className="text-foreground hover:text-primary justify-start">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
