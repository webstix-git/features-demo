import { Lightbulb, Home, Image, Package, MessageSquare, BookOpen, HelpCircle, Mail } from "lucide-react";
import { useEffect } from "react";

const tips = [
  {
    icon: Home,
    feature: "Homepage",
    tip: "The homepage integrates multiple features — photo gallery (destinations grid), testimonial marquee, blog cards, and newsletter sign-up. Point out how each section naturally drives engagement and conversions for travel companies.",
  },
  {
    icon: Image,
    feature: "Photo Gallery / Destinations",
    tip: "Use the Masonry Grid layout for clients needing visual density (real estate, portfolios). The Carousel is better for e-commerce and product-focused brands wanting a curated, sequential experience. Both increase dwell time by up to 3x.",
  },
  {
    icon: Package,
    feature: "Packages / Portfolio",
    tip: "Use the results-driven layout for clients selling services — it builds trust with specifics. The visual gallery with hover descriptions works great for creative agencies showcasing past work.",
  },
  {
    icon: MessageSquare,
    feature: "Testimonials",
    tip: "Use the Marquee for high-volume B2C brands that want energy and movement. Use the Grid for B2B and SaaS clients who need detailed, scannable social proof with ratings. Testimonials near CTAs increase conversion by 34%.",
  },
  {
    icon: BookOpen,
    feature: "Blog",
    tip: "Card-based grid layouts with category tags drive 40% more engagement than plain list views. Categories help users self-segment, reducing bounce rates.",
  },
  {
    icon: HelpCircle,
    feature: "FAQs",
    tip: "Use the category sidebar filter for clients with large knowledge bases. A simple accordion works best for small businesses. Category filters reduce support tickets by up to 30%.",
  },
  {
    icon: Mail,
    feature: "Contact Form",
    tip: "A well-structured contact form with specific fields (destination interest, phone) converts 25% better than a generic name+email form. Include business hours and multiple contact methods to build trust.",
  },
];

const Tips = () => {
  useEffect(() => {
    document.title = "Sales Tips — Horizon Travels";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tipshero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
            <Lightbulb className="h-7 w-7 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl animate-fade-in-up">
            Sales Tips & Feature Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-1">
            Pro tips for each feature on this website — insights on conversion optimization, layout choices, and best practices for pitching to clients.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((t) => (
              <div
                key={t.feature}
                className="group rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{t.feature}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
