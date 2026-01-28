import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fixed message
    const message =
      "Hello, I am seeking scaffolding services. Please provide more details.";
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.open(`https://wa.me/916303569602?text=${encodedMessage}`, "_blank");

    // Reset form after redirect
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-metallic font-['Orbitron']">
            Get a Quote
          </h2>
          <p className="text-muted-foreground text-lg font-['Rajdhani']">
            Contact us for professional scaffolding and structural work services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-foreground font-['Rajdhani']"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary font-['Rajdhani']"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-foreground font-['Rajdhani']"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary font-['Rajdhani']"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 text-foreground font-['Rajdhani']"
                >
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary font-['Rajdhani']"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold mb-2 text-foreground font-['Rajdhani']"
                >
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-card border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-['Rajdhani'] text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="scaffolding">Scaffolding Systems</option>
                  <option value="acro-spans">Acro Spans</option>
                  <option value="centered-sheets">Centered Sheets</option>
                  <option value="clamps">Clamps</option>
                  <option value="metal-planks">Metal Planks</option>
                  <option value="jack-pipes">Jack Pipes</option>
                  <option value="column-box">Column Box</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-foreground font-['Rajdhani']"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-card border-border focus:border-primary font-['Rajdhani']"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full metallic-shine bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-['Rajdhani'] font-bold text-lg py-6"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-card border border-border rounded-lg p-8 shadow-metallic">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-['Rajdhani']">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="font-['Rajdhani']">
                    <p className="text-foreground font-semibold mb-1">Phone</p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:9849216533"
                        className="hover:text-primary transition-colors"
                      >
                        9849216533
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:8523076533"
                        className="hover:text-primary transition-colors"
                      >
                        8523076533
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:6303569602"
                        className="hover:text-primary transition-colors"
                      >
                        6303569602
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="font-['Rajdhani']">
                    <p className="text-foreground font-semibold mb-1">Email</p>
                    <a
                      href="mailto:hbnscaffoldingworks9@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      hbnscaffoldingworks9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="font-['Rajdhani']">
                    <p className="text-foreground font-semibold mb-1">
                      Factory
                    </p>
                    <p className="text-muted-foreground">
                      Plot 23, Durganagar, Nacharam
                      <br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="font-['Rajdhani']">
                    <p className="text-foreground font-semibold mb-1">Unit</p>
                    <p className="text-muted-foreground">
                      174/4/9, Zamistanpur
                      <br />
                      Hyderabad, Telangana – 500020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-metallic">
              <h3 className="text-xl font-bold mb-4 text-foreground font-['Rajdhani']">
                Business Hours
              </h3>
              <div className="space-y-2 text-muted-foreground font-['Rajdhani']">
                <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
