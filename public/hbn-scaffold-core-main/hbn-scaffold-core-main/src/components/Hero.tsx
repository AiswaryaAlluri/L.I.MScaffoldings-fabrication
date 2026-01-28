import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-['Orbitron'] z-[999]">
            Reliable Scaffolding &<br />Structural Works
          </h1>
          <p className="text-xl md:text-2xl text-metallic-foreground mb-8 font-['Rajdhani'] max-w-3xl mx-auto">
            Professional scaffolding systems, acro spans, and structural solutions
            for construction projects in Hyderabad
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="metallic-shine bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-['Rajdhani'] font-bold text-lg px-8 py-6"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow text-primary"
        aria-label="Scroll to services"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
