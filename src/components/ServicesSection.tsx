import { Wrench, Building2, Factory, Truck, Shield, Ruler } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Scaffolding Systems',
    description: 'Complete scaffolding solutions for residential, commercial, and industrial projects with certified materials.',
  },
  {
    icon: Ruler,
    title: 'Acrow Span Manufacturing',
    description: 'High-quality acrow spans manufactured to precise specifications for structural support applications.',
  },
  {
    icon: Wrench,
    title: 'Jack Pipes & Props',
    description: 'Heavy-duty jack pipes and adjustable props for concrete formwork and temporary support.',
  },
  {
    icon: Factory,
    title: 'Centering Sheets',
    description: 'Durable steel centering sheets for concrete slab work, available in various sizes.',
  },
  {
    icon: Shield,
    title: 'Fabrication Works',
    description: 'Custom steel fabrication services including welding, cutting, and metal forming.',
  },
  {
    icon: Truck,
    title: 'Rental & Supply',
    description: 'Flexible rental options and timely supply of all scaffolding equipment and materials.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive scaffolding and fabrication solutions tailored to your construction needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 lg:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
