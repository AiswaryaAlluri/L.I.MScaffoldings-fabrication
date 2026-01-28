import { Wrench, Grid3x3, FileStack, Link2, PanelTop, PipetteIcon, Box } from "lucide-react";

const services = [
  {
    title: "Scaffolding Systems",
    icon: Grid3x3,
    description: "Complete scaffolding solutions for all construction needs",
  },
  {
    title: "Acrow Spans",
    icon: Wrench,
    description: "Adjustable support systems for precise load distribution",
  },
  {
    title: "Centring Sheets",
    icon: FileStack,
    description: "High-quality centered sheet installations",
  },
  {
    title: "Clamps",
    icon: Link2,
    description: "Industrial-grade clamps for secure connections",
  },
  {
    title: "Walkway Planks",
    icon: PanelTop,
    description: "Durable metal planks for safe working platforms",
  },
  {
    title: "Jack Pipes",
    icon: PipetteIcon,
    description: "Heavy-duty jack pipes for structural support",
  },
  {
    title: "Column Box",
    icon: Box,
    description: "Professional column box solutions",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-metallic font-['Orbitron']">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg font-['Rajdhani']">
            Comprehensive scaffolding and structural work solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-metallic opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2 text-foreground font-['Rajdhani']">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-['Rajdhani']">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
