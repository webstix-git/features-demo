import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureGuide from "@/components/FeatureGuide";

const caseStudies = [
  {
    title: "The Oakwood Estate",
    client: "Mitchell Family",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    challenge: "The family needed a 4-bedroom home on a sloping lot with limited road access and strict zoning requirements.",
    solution: "We designed a split-level layout that worked with the terrain, used retaining walls creatively, and navigated the zoning process end-to-end.",
    result: "Completed 2 weeks ahead of schedule. The home appraised at 15% above build cost. The family moved in before school started.",
    duration: "11 months",
    budget: "$420K",
    year: "2025",
  },
  {
    title: "Lincoln Park Brownstone",
    client: "Chen & Torres",
    before: "https://picsum.photos/seed/csbefore2/800/500",
    after: "https://picsum.photos/seed/csafter2/800/500",
    challenge: "A 100-year-old brownstone needed a full gut renovation while preserving the historic facade per city regulations.",
    solution: "We carefully deconstructed the interior, reinforced the structure with modern steel framing, and installed contemporary systems behind the original brickwork.",
    result: "Featured in Architectural Digest's 'Best Renovations' list. Property value increased by 40% post-renovation.",
    duration: "6 months",
    budget: "$280K",
    year: "2024",
  },
  {
    title: "Greenfield Net-Zero Home",
    client: "Patel Family",
    before: "https://picsum.photos/seed/csbefore3/800/500",
    after: "https://picsum.photos/seed/csafter3/800/500",
    challenge: "The clients wanted a fully net-zero energy home without sacrificing aesthetics or comfort.",
    solution: "We used passive house principles, installed a 12kW solar array, geothermal heating, and triple-pane windows. Every material was sourced for thermal performance.",
    result: "The home produces more energy than it consumes. Utility bills average $12/month. Won the regional Green Building Award.",
    duration: "14 months",
    budget: "$550K",
    year: "2025",
  },
];

const features = [
  { module: "Case Study Option A — Timeline", description: "Vertical timeline layout showing challenge → solution → result in chronological order. Great for storytelling.", reasons: ["Timeline format creates a narrative arc", "Visitors can follow the project journey", "Challenge/solution format builds trust in problem-solving ability", "Results section provides concrete proof of value"] },
  { module: "Case Study Option B — Before & After", description: "Side-by-side before/after cards with project stats. Visual impact first, details second.", reasons: ["Before/after images create immediate visual impact", "Stats (budget, duration) pre-qualify leads", "Card format is scannable and mobile-friendly", "Visual proof is more compelling than text alone"] },
];

const CaseStudies = () => {
  const [option, setOption] = useState<"A" | "B">("A");

  useEffect(() => {
    document.title = "Case Studies — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/casehero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Success Stories</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Case Studies</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Real projects, real challenges, real results. See how we deliver for our clients.
          </p>
        </div>
      </section>

      {/* Option Toggle */}
      <div className="container mx-auto px-4 pt-10">
        <div className="flex items-center justify-center gap-2">
          {(["A", "B"] as const).map((o) => (
            <button
              key={o}
              onClick={() => setOption(o)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${option === o ? "bg-warm-gradient text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:text-foreground"}`}
            >
              Case Study Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Timeline */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="relative mx-auto max-w-3xl">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

              {caseStudies.map((cs, i) => (
                <div key={cs.title} className="relative mb-16 last:mb-0">
                  {/* Dot */}
                  <div className="absolute left-6 top-0 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                  </div>

                  <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="rounded-2xl bg-card p-6 shadow-md border border-border">
                      <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">{cs.year}</span>
                        <span>{cs.duration} · {cs.budget}</span>
                      </div>
                      <img src={cs.after} alt={cs.title} className="mb-4 aspect-video w-full rounded-xl object-cover" loading="lazy" />
                      <h3 className="mb-1 text-xl font-bold text-foreground">{cs.title}</h3>
                      <p className="mb-3 text-xs text-muted-foreground">Client: {cs.client}</p>

                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-foreground">Challenge</p>
                          <p className="text-muted-foreground">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Solution</p>
                          <p className="text-muted-foreground">{cs.solution}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-accent">Result</p>
                          <p className="text-muted-foreground">{cs.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Option B: Before/After Cards */
        <section className="py-14">
          <div className="container mx-auto px-4 space-y-12">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="overflow-hidden rounded-3xl bg-card shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img src={cs.before} alt={`${cs.title} before`} className="aspect-video w-full object-cover" loading="lazy" />
                    <span className="absolute top-4 left-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-bold text-primary-foreground">Before</span>
                  </div>
                  <div className="relative">
                    <img src={cs.after} alt={`${cs.title} after`} className="aspect-video w-full object-cover" loading="lazy" />
                    <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">After</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-bold text-foreground">{cs.title}</h3>
                    <span className="text-sm text-muted-foreground">— {cs.client}</span>
                  </div>
                  <p className="mb-4 text-muted-foreground">{cs.result}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 font-semibold text-accent">{cs.budget}</span>
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 font-semibold text-accent">{cs.duration}</span>
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 font-semibold text-accent">{cs.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">Let's discuss how we can bring your vision to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FeatureGuide features={features} />
    </div>
  );
};

export default CaseStudies;