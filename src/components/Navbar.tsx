import { Link } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-lg shadow-foreground/5" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-18 items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
            <Compass className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>
            Horizon <span className="font-light text-primary">Travels</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-card/50"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-xl bg-warm-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            Book Now
          </Link>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-xl bg-warm-gradient px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
