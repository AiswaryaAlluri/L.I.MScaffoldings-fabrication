import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="HBN Scaffolding Works" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary font-['Orbitron']">HBN</span>
                <span className="text-xs text-foreground font-['Rajdhani'] tracking-widest">
                  SCAFFOLDING & WORKS
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-['Rajdhani']">
              Professional scaffolding and structural works solutions in Hyderabad
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-['Rajdhani']">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["home", "services", "about", "gallery", "contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-muted-foreground hover:text-primary transition-colors font-['Rajdhani'] capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-['Rajdhani']">
              Our Services
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm font-['Rajdhani']">
              <li>Scaffolding Systems</li>
              <li>Acrow Spans</li>
              <li>Centring Sheets</li>
              <li>Walkway Planks</li>
              <li>Jack Pipes</li>
              <li>Column Box</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-['Rajdhani']">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <div className="font-['Rajdhani']">
                  <a href="tel:9849216533" className="hover:text-primary transition-colors block">
                    9849216533
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <a
                  href="mailto:hbnscaffoldingworks9@gmail.com"
                  className="hover:text-primary transition-colors font-['Rajdhani'] break-all"
                >
                  hbnscaffoldingworks9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span className="font-['Rajdhani']">
                  Hyderabad, Telangana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-['Rajdhani']">
            © {new Date().getFullYear()} HBN Scaffolding Works. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2 font-['Rajdhani']">
            GST: 36EHWPS6614B1ZW | Proprietor: Shaik Nayyar Pasha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
