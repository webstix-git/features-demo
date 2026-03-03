import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { TrendingUp, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "TechCorp Inc.",
    challenge: "Low online conversion rates and outdated web presence causing 60% bounce rate.",
    solution: "Complete website redesign with optimized UX flows, A/B tested landing pages, and performance optimization.",
    results: [{ label: "Conversion Rate", value: "+127%" }, { label: "Bounce Rate", value: "-45%" }, { label: "Revenue", value: "+$2.1M" }],
    image: "https://picsum.photos/seed/case1/600/400",
  },
  {
    client: "FreshBite Delivery",
    challenge: "Mobile ordering experience was clunky, leading to high cart abandonment rates of 78%.",
    solution: "Rebuilt mobile-first checkout flow with one-tap ordering, saved payment methods, and real-time tracking.",
    results: [{ label: "Cart Abandonment", value: "-52%" }, { label: "Mobile Orders", value: "+89%" }, { label: "Avg Order Value", value: "+23%" }],
    image: "https://picsum.photos/seed/case2/600/400",
  },
  {
    client: "EduLearn Platform",
    challenge: "Student engagement dropping, with only 12% course completion rate across the platform.",
    solution: "Gamified learning paths, progress dashboards, and social learning features with peer collaboration.",
    results: [{ label: "Completion Rate", value: "+340%" }, { label: "Daily Active Users", value: "+156%" }, { label: "NPS Score", value: "72→91" }],
    image: "https://picsum.photos/seed/case3/600/400",
  },
];

const galleryItems = [
  { title: "E-commerce Redesign", category: "Web Design", image: "https://picsum.photos/seed/port1/600/400" },
  { title: "SaaS Dashboard", category: "UI/UX", image: "https://picsum.photos/seed/port2/600/400" },
  { title: "Brand Identity System", category: "Branding", image: "https://picsum.photos/seed/port3/600/400" },
  { title: "Mobile Banking App", category: "Mobile", image: "https://picsum.photos/seed/port4/600/400" },
  { title: "Marketing Automation", category: "Web App", image: "https://picsum.photos/seed/port5/600/400" },
  { title: "Healthcare Portal", category: "UI/UX", image: "https://picsum.photos/seed/port6/600/400" },
];

const Portfolio = () => (
  <FeaturePageTemplate
    title="Portfolio & Case Studies"
    subtitle="Prove your value with results-driven storytelling and visual showcases."
    bullets={[
      { text: "Case studies with specific metrics are 68% more persuasive to B2B buyers." },
      { text: "Portfolio pages are the #2 most visited section on agency websites." },
      { text: "Visual proof of past work increases proposal acceptance by 41%." },
    ]}
    proTip="Use the Results-Driven layout (Variant A) for agencies and consultancies selling on ROI. Use the Visual Gallery (Variant B) for creative studios, photographers, and design agencies that lead with aesthetics."
  >
    <VariantSection label="A" title="Results-Driven Case Studies">
      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex flex-col md:flex-row">
              <img src={cs.image} alt={cs.client} className="h-48 w-full object-cover md:h-auto md:w-72" loading="lazy" />
              <div className="flex-1 p-6">
                <h4 className="mb-4 text-lg font-bold text-foreground">{cs.client}</h4>
                <div className="mb-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-destructive">Challenge</p>
                    <p className="text-sm text-muted-foreground">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">Solution</p>
                    <p className="text-sm text-muted-foreground">{cs.solution}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  {cs.results.map((r, j) => (
                    <div key={j} className="text-center">
                      <p className="text-xl font-bold text-primary">{r.value}</p>
                      <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VariantSection>

    <VariantSection label="B" title="Visual Gallery with Hover Descriptions">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg border border-border">
            <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="mb-1 text-xs font-medium text-primary-foreground/80">{item.category}</span>
              <h4 className="text-lg font-bold text-primary-foreground">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </VariantSection>
  </FeaturePageTemplate>
);

export default Portfolio;
