import { Link } from "react-router-dom";
import { Hammer, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/destinations" },
  { name: "Portfolio", path: "/packages" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
  { name: "Local SEO Plans", path: "/local-seo-plans" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card shadow-lg shadow-foreground/5" : "bg-card/90 backdrop-blur-md"}`}>
      <div className="container mx-auto flex h-18 items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
            <Hammer className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground leading-tight">
              Summit <span className="font-light text-accent">Builders</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">Features Demo Website</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground hover:bg-background"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-xl bg-warm-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            Get a Quote
          </Link>
        </nav>

        <button className="xl:hidden text-foreground" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 xl:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-xl bg-warm-gradient px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;