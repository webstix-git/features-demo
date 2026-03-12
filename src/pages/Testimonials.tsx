import { Star } from "lucide-react";
import { useEffect } from "react";
import FeatureGuide from "@/components/FeatureGuide";

const testimonials = [
  { name: "Karen Mitchell", role: "Custom Home — Oakwood Estate", quote: "Every single detail was handled perfectly. From the foundation to the final walkthrough — Summit Builders exceeded every expectation we had.", avatar: "KM", rating: 5 },
  { name: "Robert Chen", role: "Kitchen Renovation", quote: "Our kitchen went from outdated to stunning in just 8 weeks. The team was clean, professional, and communicative throughout.", avatar: "RC", rating: 5 },
  { name: "Jennifer Torres", role: "Modern Build — Sunset Terrace", quote: "They completed our home on time and under budget. The smart home integration was flawless. We couldn't be happier.", avatar: "JT", rating: 5 },
  { name: "David O'Brien", role: "Full Renovation", quote: "The craftsmanship and attention to detail is unmatched. Our 1920s brownstone feels brand new while keeping its character.", avatar: "DO", rating: 5 },
  { name: "Samantha Lee", role: "Custom Home — Cedar Ridge", quote: "From blueprint to move-in day, the whole experience was seamless. Our hillside villa is everything we dreamed of.", avatar: "SL", rating: 4 },
  { name: "Mike Patterson", role: "Farmhouse Build", quote: "They transformed our vision of a modern farmhouse into reality. The reclaimed wood details are absolutely gorgeous.", avatar: "MP", rating: 5 },
];

const features = [
  { module: "Testimonials Marquee", description: "Auto-scrolling horizontal carousel of testimonial cards. Creates social proof with continuous motion.", reasons: ["Continuous motion draws the eye and creates energy", "Star ratings add quick credibility signals", "Testimonials near CTAs boost conversions by 34%", "Great for B2C brands with many positive reviews"] },
  { module: "Testimonials Grid", description: "Static grid of detailed testimonial cards with star ratings. Scannable and detailed.", reasons: ["Grid layout lets visitors compare reviews", "Detailed quotes build trust through specificity", "Works well for B2B and high-ticket services", "Visitors can read at their own pace"] },
];

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-testimonials.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Real Stories</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">What Our Clients Say</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Don't just take our word for it — hear from homeowners who trusted us with their biggest investment.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden py-14">
        <div className="flex gap-6" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-80 shrink-0 rounded-2xl bg-card p-5 shadow-md border border-border">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`h-3.5 w-3.5 ${s < t.rating ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-gradient text-xs font-bold text-primary-foreground">{t.avatar}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-foreground">All Reviews</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-border">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`h-4 w-4 ${s < t.rating ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
                <p className="mb-5 text-sm text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-gradient text-sm font-bold text-primary-foreground">{t.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGuide features={features} />
    </div>
  );
};

export default Testimonials;