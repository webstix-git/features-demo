import { Star } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  { name: "Sarah Chen", role: "Bali Honeymoon", quote: "Every single detail was handled perfectly. From the private villa to the sunset dinner — it was pure magic. We didn't have to worry about a thing.", avatar: "SC", rating: 5 },
  { name: "Marcus Johnson", role: "Maldives Family Trip", quote: "The kids are still talking about the snorkeling. Horizon found us the perfect family-friendly resort with amazing kids' activities.", avatar: "MJ", rating: 5 },
  { name: "Elena Rodriguez", role: "Japan Cultural Tour", quote: "Our guide in Kyoto was incredible. We experienced tea ceremonies, hidden temples, and the best ramen of our lives.", avatar: "ER", rating: 5 },
  { name: "David Park", role: "Santorini Anniversary", quote: "Santorini was breathtaking and the private catamaran tour at sunset was the highlight of our 10th anniversary trip.", avatar: "DP", rating: 5 },
  { name: "Lisa Wang", role: "Swiss Alps Adventure", quote: "Hiking through the Alps with a personal guide was life-changing. The mountain lodges Horizon booked were cozy and stunning.", avatar: "LW", rating: 4 },
  { name: "Tom Baker", role: "Amalfi Coast Road Trip", quote: "The itinerary was perfectly paced. We had enough time to explore each village without feeling rushed. Absolutely loved Positano.", avatar: "TB", rating: 5 },
];

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials — Horizon Travels";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero with banner */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/testimonialshero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Real Stories</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">What Our Travelers Say</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Don't just take our word for it — hear from travelers who've experienced the Horizon difference.
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
                  <Star key={s} className={`h-3.5 w-3.5 ${s < t.rating ? "fill-primary text-primary" : "text-muted"}`} />
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
                    <Star key={s} className={`h-4 w-4 ${s < t.rating ? "fill-primary text-primary" : "text-muted"}`} />
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
    </div>
  );
};

export default Testimonials;
