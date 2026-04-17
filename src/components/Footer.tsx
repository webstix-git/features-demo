import { Link } from "react-router-dom";
import { Hammer, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Subscribed!", description: "You'll receive our latest project updates." });
      setEmail("");
    }
  };

  return (
    <footer className="bg-teal-gradient text-primary-foreground/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 text-lg font-bold text-primary-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Hammer className="h-4 w-4 text-accent" />
              </div>
              <span>Summit <span className="font-light text-accent">Builders</span></span>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/60">Building Dreams, One Home at a Time. Premium custom home construction and renovation services.</p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-accent/20 hover:text-accent transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-accent/20 hover:text-accent transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:bg-accent/20 hover:text-accent transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/destinations" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/ai-readiness-service-index" className="hover:text-accent transition-colors">AI Readiness</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> 742 Evergreen Terrace, Springfield, IL 62704</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" /> +1 (555) 867-5309</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-accent" /> hello@summitbuilders.co</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Project Updates</h4>
            <p className="mb-3 text-sm text-primary-foreground/60">Subscribe for home building tips and project showcases.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40"
                required
              />
              <button type="submit" className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Summit Builders Co. All rights reserved. This is a demo website. | <Link to="/sitemap" className="hover:text-accent transition-colors">Site Map</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;