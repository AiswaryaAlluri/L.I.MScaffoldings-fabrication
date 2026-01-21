import { Button } from '@/components/ui/button';
import { Phone, FileText, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-scaffolding.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 industrial-grid" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Trusted Since Years in Hyderabad</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Building India's
            <span className="block text-accent">Infrastructure</span>
            With Strength
          </h1>

          <p className="text-lg md:text-xl text-steel-light mb-8 max-w-xl">
            Professional scaffolding systems, acrow spans, and fabrication services. 
            Reliable, safe, and delivered on time across Telangana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:9866167407">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call: 9866167407
              </Button>
            </a>
            <a href="#contact">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto gap-2">
                <FileText className="w-5 h-5" />
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-steel-light text-sm">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-steel-light text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
              <div className="text-steel-light text-sm">Safety Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
