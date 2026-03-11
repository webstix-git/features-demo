import { Link } from "react-router-dom";
import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Lightbulb } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Subscribed!", description: "You'll receive our best travel deals." });
      setEmail("");
    }
  };

  return (
    <footer className="bg-teal-gradient text-primary-foreground/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 text-lg font-bold text-primary-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <Compass className="h-4 w-4 text-primary" />
              </div>
              <span>Horizon <span className="font-light text-accent">Travels</span></span>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/60">Your Journey, Our Passion. Premium travel experiences crafted for the curious traveler.</p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary/20 hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary/20 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary/20 hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li>
                <Link to="/tips" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Lightbulb className="h-3.5 w-3.5" /> Sales Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 350 Fifth Avenue, Suite 4200, New York, NY 10118</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +1 (212) 555-0147</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> hello@horizontravels.com</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Get Exclusive Deals</h4>
            <p className="mb-3 text-sm text-primary-foreground/60">Subscribe to our newsletter for travel inspiration and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40"
                required
              />
              <button type="submit" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Horizon Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
