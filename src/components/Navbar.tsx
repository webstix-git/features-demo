import { Link } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useDemoMode } from "@/context/DemoModeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Packages", path: "/packages" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDemoMode, toggleDemoMode } = useDemoMode();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Compass className="h-6 w-6 text-primary" />
          <span>Horizon <span className="font-light">Travels</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {l.name}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Book Now
          </Link>
          <div className="ml-3 flex items-center gap-2 border-l border-border pl-3">
            <span className="text-xs text-muted-foreground">Demo</span>
            <Switch checked={isDemoMode} onCheckedChange={toggleDemoMode} className="scale-75" />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
            Book Now
          </Link>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Demo Mode</span>
            <Switch checked={isDemoMode} onCheckedChange={toggleDemoMode} className="scale-75" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
