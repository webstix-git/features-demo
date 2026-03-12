import { Lightbulb, Home, Image, Briefcase, MessageSquare, BookOpen, HelpCircle, Mail, FileText } from "lucide-react";
import { useEffect } from "react";
import FeatureGuide from "@/components/FeatureGuide";

const tips = [
  {
    icon: Home,
    feature: "Homepage",
    tip: "The homepage integrates multiple modules — project gallery, testimonial marquee, blog cards, stats section, and newsletter signup. Each section naturally drives engagement and leads for home builders.",
  },
  {
    icon: Image,
    feature: "Gallery (Option A / B)",
    tip: "Option A: Masonry grid with lightbox — best for visual density (real estate, portfolios). Option B: Carousel with thumbnails — ideal for curated, sequential showcases. Both increase dwell time by up to 3x.",
  },
  {
    icon: Briefcase,
    feature: "Portfolio (Option A / B)",
    tip: "Option A: Alternating feature cards with detailed specs — builds trust with specifics for service businesses. Option B: Grid with hover overlays — visual-first approach for creative agencies.",
  },
  {
    icon: FileText,
    feature: "Case Studies (Option A / B)",
    tip: "Option A: Vertical timeline with challenge/solution/result — creates a compelling narrative. Option B: Before/after cards with stats — delivers visual impact and immediate proof of value.",
  },
  {
    icon: MessageSquare,
    feature: "Testimonials",
    tip: "Marquee for high-volume B2C brands wanting energy and movement. Grid for B2B and high-ticket services needing detailed, scannable social proof. Testimonials near CTAs increase conversion by 34%.",
  },
  {
    icon: BookOpen,
    feature: "Blog (Option A / B)",
    tip: "Option A: Card grid with category filters — drives 40% more engagement than plain lists. Option B: Magazine layout with featured post — positions the brand as an authority.",
  },
  {
    icon: HelpCircle,
    feature: "FAQs (Option A / B)",
    tip: "Option A: Category sidebar for large knowledge bases. Option B: Searchable single-column for smaller FAQ sets. Both reduce support tickets by up to 30%.",
  },
  {
    icon: Mail,
    feature: "Contact Form",
    tip: "Structured forms with specific fields (project type, phone) convert 25% better than generic forms. Include business hours and multiple contact methods to build trust.",
  },
];

const features = [
  { module: "Sales Tips Page", description: "A dedicated page summarizing all features and their sales value. Serves as a training resource for the sales team.", reasons: ["Quick reference for feature pitches", "Conversion stats add credibility to each recommendation", "Helps sales reps understand the 'why' behind each module"] },
];

const Tips = () => {
  useEffect(() => {
    document.title = "Sales Tips — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tipshero2/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
            <Lightbulb className="h-7 w-7 text-accent" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl animate-fade-in-up">
            Sales Tips & Feature Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-1">
            Pro tips for each feature on this demo website — insights on layout choices, conversion optimization, and best practices.
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
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

      <FeatureGuide features={features} />
    </div>
  );
};

export default Tips;