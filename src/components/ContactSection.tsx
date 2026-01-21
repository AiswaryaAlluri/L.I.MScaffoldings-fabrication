import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello, I'm ${formData.name}. ${formData.message} Contact: ${formData.phone}${formData.email ? ', Email: ' + formData.email : ''}`;
    const whatsappUrl = `https://wa.me/919866167407?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: 'Opening WhatsApp...',
      description: 'Your enquiry is being sent via WhatsApp.',
    });
    
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Contact us for a free quote and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              <a 
                href="tel:9866167407"
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9866167407</p>
                </div>
              </a>

              <a 
                href="https://wa.me/919866167407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">Message us directly</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    4-6-158/2/9, Plot No.9, Sy. No.31 to 35,<br />
                    Block 06, Durga Nagar, Nacharam,<br />
                    Hyderabad – 500076, Telangana
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-border h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.5547!3d17.4192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzA5LjEiTiA3OMKwMzMnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="L.I.M Scaffolding Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-10 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email (Optional)</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Requirements *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your scaffolding or fabrication needs..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full gap-2">
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
