import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-metallic"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          {/* Logo always visible */}
          <img
            src="/logo.png"
            alt="HBN Scaffolding Works Logo"
            className="w-[55px] drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
          />

          {/* Text hidden on mobile */}
          <div className="flex-col hidden md:flex">
            <span className="text-2xl font-bold text-primary font-['Orbitron'] tracking-wider drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
              HBN
            </span>
            <span className="text-xs text-foreground font-['Rajdhani'] tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              SCAFFOLDING & WORKS
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors font-['Rajdhani'] font-medium text-lg relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="metallic-shine border-primary text-primary hover:bg-primary hover:text-primary-foreground font-['Rajdhani'] font-semibold"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-['Rajdhani'] font-medium text-lg text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="metallic-shine border-primary text-primary hover:bg-primary hover:text-primary-foreground font-['Rajdhani'] font-semibold w-full"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
