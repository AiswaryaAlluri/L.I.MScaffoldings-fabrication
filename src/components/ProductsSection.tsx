import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import scaffoldingEquipment from '@/assets/scaffolding-equipment.jpg';
import centeringSheets from '@/assets/centering-sheets.jpg';
import fabricationWork from '@/assets/fabrication-work.jpg';

const products = [
  {
    image: scaffoldingEquipment,
    title: 'Acrow Spans & Jack Pipes',
    description: 'Heavy-duty acrow spans and adjustable jack pipes for structural support. Available in multiple sizes for various load requirements.',
    features: ['High load capacity', 'Adjustable heights', 'Rust-resistant coating'],
  },
  {
    image: centeringSheets,
    title: 'Centering Sheets',
    description: 'Premium steel centering sheets for concrete slab formwork. Perfectly flat surfaces ensure quality concrete finishing.',
    features: ['Multiple thickness options', 'Standard & custom sizes', 'Reusable design'],
  },
  {
    image: fabricationWork,
    title: 'Custom Fabrication',
    description: 'Bespoke steel fabrication services including welding, cutting, bending, and assembly for specialized requirements.',
    features: ['Precision cutting', 'Expert welding', 'Quality finishing'],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-charcoal industrial-grid">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Quality Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Our Products
          </h2>
          <p className="text-steel-light text-lg">
            High-quality scaffolding equipment and fabrication materials built to last.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-steel-dark/50 rounded-2xl overflow-hidden border border-steel-dark hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{product.title}</h3>
                <p className="text-steel-light mb-4 leading-relaxed">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-steel-light text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button variant="outline" className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
