import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Users, text: 'Experienced Team' },
    { icon: Award, text: 'Quality Materials' },
    { icon: Clock, text: 'Timely Delivery' },
    { icon: CheckCircle, text: 'Safety First' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              L.I.M Scaffolding & Fabrication
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Based in Hyderabad, Telangana, L.I.M Scaffolding & Fabrication is a trusted name in the 
              construction industry. Under the leadership of <strong className="text-foreground">Shaik Yousf Pasha</strong>, 
              we have been providing top-quality scaffolding systems, fabrication services, and construction 
              equipment to builders and contractors across the region.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, quality, and timely service has made us the preferred choice 
              for construction projects of all sizes. From residential buildings to large commercial 
              complexes, we deliver reliable solutions that meet the highest industry standards.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info Card */}
          <div className="bg-charcoal rounded-2xl p-8 lg:p-10 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6 text-accent">Company Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-steel-light text-sm uppercase tracking-wider">Proprietor</label>
                <p className="text-xl font-semibold mt-1">Shaik Yousf Pasha</p>
              </div>
              
              <div>
                <label className="text-steel-light text-sm uppercase tracking-wider">GSTIN</label>
                <p className="text-lg font-mono mt-1">36FDXPS3556N1ZA</p>
              </div>
              
              <div>
                <label className="text-steel-light text-sm uppercase tracking-wider">Contact</label>
                <a href="tel:9866167407" className="text-xl font-semibold block mt-1 hover:text-accent transition-colors">
                  +91 9866167407
                </a>
              </div>
              
              <div>
                <label className="text-steel-light text-sm uppercase tracking-wider">Address</label>
                <p className="mt-1 leading-relaxed">
                  4-6-158/2/9, Plot No.9, Sy. No.31 to 35,<br />
                  Block 06, Durga Nagar, Nacharam,<br />
                  Hyderabad – 500076, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
