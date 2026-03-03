import { Link } from "react-router-dom";
import { Image, MessageSquareQuote, HelpCircle, FileText, Briefcase, Mail, Zap, ArrowRight } from "lucide-react";

const features = [
  { name: "Photo Gallery", path: "/photo-gallery", icon: Image, desc: "Masonry grids, lightboxes, and carousel sliders with thumbnail navigation." },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquareQuote, desc: "Auto-scrolling marquees and structured rating grids that build trust." },
  { name: "FAQs", path: "/faqs", icon: HelpCircle, desc: "Clean accordions and category-filtered knowledge bases." },
  { name: "Blog", path: "/blog", icon: FileText, desc: "List and card layouts with read-time estimates and category tags." },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase, desc: "Results-driven case studies and visual gallery layouts." },
  { name: "Newsletter", path: "/newsletter", icon: Mail, desc: "Inline sign-up forms and lead-magnet sections that convert." },
  { name: "Pop-ups", path: "/popups", icon: Zap, desc: "Exit-intent modals and slide-in promotional notifications." },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/50 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">
            Built for Sales Teams
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl animate-fade-in-up-delay-1">
            Explore battle-tested web features,<br className="hidden md:block" /> ready to deploy
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            Walk your clients through live, interactive demos of the most requested website features — from photo galleries to pop-ups. Pick a variant, close the deal.
          </p>
          <Link
            to="/photo-gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 animate-fade-in-up-delay-3"
          >
            Start Exploring <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Features</h2>
          <p className="mb-12 text-center text-2xl font-bold text-foreground">7 features, multiple variants each</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Link
                key={f.path}
                to={f.path}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{f.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{f.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View Demos <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
