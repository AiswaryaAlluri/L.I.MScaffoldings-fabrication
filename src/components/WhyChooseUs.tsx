import { Shield, Clock, Wrench, Award, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All our equipment meets strict safety standards. We prioritize worker safety on every project.',
  },
  {
    icon: Award,
    title: 'Quality Materials',
    description: 'We use only premium-grade steel and materials that ensure durability and reliability.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand project timelines. Expect prompt delivery and setup services.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our skilled professionals provide guidance and support throughout your project.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'We offer tailored scaffolding and fabrication solutions for unique requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Quality products and services at fair prices. Flexible rental options available.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 industrial-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className=" font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            The L.I.M Advantage
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            What sets us apart in the scaffolding and fabrication industry.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 lg:p-8 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
