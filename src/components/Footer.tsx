import { Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="L.I.M Scaffolding & Fabrication" 
                className="w-28 h-28 object-contain"
              />
            </div>
            <p className="text-steel-light mb-4 max-w-md leading-relaxed">
              Your trusted partner for scaffolding systems, acrow spans, and fabrication services 
              in Hyderabad and across Telangana. Quality, safety, and reliability guaranteed.
            </p>
            <p className="text-steel-light text-sm">
              <strong className="text-primary-foreground">GSTIN:</strong> 36FDXPS3556N1ZA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-steel-light hover:text-accent transition-colors">Home</a>
              <a href="#about" className="block text-steel-light hover:text-accent transition-colors">About Us</a>
              <a href="#services" className="block text-steel-light hover:text-accent transition-colors">Services</a>
              <a href="#products" className="block text-steel-light hover:text-accent transition-colors">Products</a>
              <a href="#contact" className="block text-steel-light hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:9866167407" className="flex items-center gap-3 text-steel-light hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                +91 9866167407
              </a>
              <div className="flex items-start gap-3 text-steel-light">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Durga Nagar, Nacharam,<br />
                  Hyderabad – 500076
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-light text-sm text-center md:text-left">
              © {currentYear} L.I.M Scaffolding & Fabrication. All rights reserved.
            </p>
            <p className="text-steel-light text-sm">
              Proprietor: <span className="text-primary-foreground">Shaik Yousf Pasha</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
