import { Building2, Mail, MapPin, Phone, FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-metallic font-['Orbitron']">
            About HBN Scaffolding Works
          </h2>
          <p className="text-muted-foreground text-lg font-['Rajdhani'] max-w-3xl mx-auto">
            Leading provider of scaffolding and structural works solutions in Hyderabad,
            committed to safety, quality, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Company Details Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-metallic hover:shadow-glow transition-all duration-300 animate-fade-in">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-6 text-foreground font-['Rajdhani']">
              Company Information
            </h3>
            <div className="space-y-4 text-muted-foreground font-['Rajdhani']">
              <div>
                <strong className="text-foreground">Company:</strong> HBN Scaffolding Works
              </div>
              <div>
                <strong className="text-foreground">Proprietor:</strong> Shaik Nayyar Pasha
              </div>
              <div className="flex items-start gap-2">
                <FileText className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <strong className="text-foreground">GST:</strong> 36EHWPS6614B1ZW
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-metallic hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Phone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-6 text-foreground font-['Rajdhani']">
              Contact Details
            </h3>
            <div className="space-y-4 text-muted-foreground font-['Rajdhani']">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <a href="tel:9849216533" className="hover:text-primary transition-colors">9849216533</a>
                  {" / "}
                  <a href="tel:8523076533" className="hover:text-primary transition-colors">8523076533</a>
                  {" / "}
                  <a href="tel:6303569602" className="hover:text-primary transition-colors">6303569602</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <a
                  href="mailto:hbnscaffoldingworks9@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  hbnscaffoldingworks9@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Factory Location Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-metallic hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-6 text-foreground font-['Rajdhani']">
              Factory Location
            </h3>
            <p className="text-muted-foreground font-['Rajdhani']">
              Plot 23, Durganagar, Nacharam,<br />
              Hyderabad, Telangana
            </p>
          </div>

          {/* Unit Address Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-metallic hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-6 text-foreground font-['Rajdhani']">
              Unit Address
            </h3>
            <p className="text-muted-foreground font-['Rajdhani']">
              174/4/9, Zamistanpur,<br />
              Hyderabad, Telangana – 500020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
