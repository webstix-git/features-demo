import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Map, Home, Image, Briefcase, FileText, MessageSquare, HelpCircle, BookOpen, Mail, Lightbulb } from "lucide-react";

const sections = [
  { name: "Home", path: "/", icon: Home, description: "Landing page with project gallery, testimonials, and more" },
  { name: "Gallery", path: "/destinations", icon: Image, description: "Photo gallery of completed construction projects" },
  { name: "Portfolio", path: "/packages", icon: Briefcase, description: "Detailed portfolio of services and past builds" },
  { name: "Case Studies", path: "/case-studies", icon: FileText, description: "In-depth project case studies with results" },
  { name: "Blog", path: "/blog", icon: BookOpen, description: "Articles on home building tips and trends" },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquare, description: "Client reviews and success stories" },
  { name: "FAQs", path: "/faqs", icon: HelpCircle, description: "Frequently asked questions about our services" },
  { name: "Contact", path: "/contact", icon: Mail, description: "Get in touch or request a quote" },
  { name: "Sales Tips", path: "/tips", icon: Lightbulb, description: "Feature guide and sales tips for this demo" },
];

const Sitemap = () => {
  useEffect(() => {
    document.title = "Sitemap — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-warm-gradient" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
            <Map className="h-7 w-7 text-accent" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl animate-fade-in-up">
            Sitemap
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-1">
            A complete overview of all pages on this website.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {sections.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
