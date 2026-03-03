import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "VP Marketing, TechCorp", quote: "This increased our conversion rate by 34% in just two months.", avatar: "SC", rating: 5 },
  { name: "Marcus Johnson", role: "CEO, StartupHQ", quote: "The best investment we've made this year. Our team productivity doubled.", avatar: "MJ", rating: 5 },
  { name: "Elena Rodriguez", role: "Director, MediaFlow", quote: "Intuitive, powerful, and beautifully designed. Our clients love it.", avatar: "ER", rating: 4 },
  { name: "David Park", role: "CTO, CloudNine", quote: "Seamless integration with our existing stack. Zero downtime during migration.", avatar: "DP", rating: 5 },
  { name: "Lisa Wang", role: "Head of Growth, ScaleUp", quote: "We saw 50% more engagement within the first week of launching.", avatar: "LW", rating: 5 },
  { name: "Tom Baker", role: "Founder, PixelPerfect", quote: "Finally a solution that matches our brand quality. Exceptional support too.", avatar: "TB", rating: 4 },
];

const Testimonials = () => (
  <FeaturePageTemplate
    title="Testimonials"
    subtitle="Build trust and social proof with compelling customer stories."
    bullets={[
      { text: "92% of consumers read testimonials before making a purchase decision." },
      { text: "Testimonials near CTAs can increase conversion rates by 34%." },
      { text: "Video and named testimonials are perceived as 3x more trustworthy." },
    ]}
    proTip="Use the Marquee (Variant A) for high-volume B2C brands that want energy and movement. Use the Grid (Variant B) for B2B and SaaS clients who need detailed, scannable social proof with ratings."
  >
    <VariantSection label="A" title="Auto-Scrolling Marquee">
      <div className="overflow-hidden rounded-lg border border-border bg-secondary/30 py-8">
        <div className="flex gap-6" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-72 shrink-0 rounded-lg border border-border bg-card p-5">
              <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{t.avatar}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </VariantSection>

    <VariantSection label="B" title="3-Column Grid with Ratings">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-6">
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className={`h-4 w-4 ${s < t.rating ? "fill-primary text-primary" : "text-border"}`} />
              ))}
            </div>
            <p className="mb-4 text-sm text-foreground">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{t.avatar}</div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VariantSection>
  </FeaturePageTemplate>
);

export default Testimonials;
