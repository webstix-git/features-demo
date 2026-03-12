import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Check, Home } from "lucide-react";
import { useState, useEffect } from "react";
import FeatureGuide from "@/components/FeatureGuide";

const packages = [
  {
    name: "The Classic Build",
    dest: "Custom Homes",
    img: "/images/project-1.jpg",
    duration: "8-12 Months",
    price: "$350K+",
    includes: ["Custom floor plan design", "Premium materials & finishes", "Energy-efficient systems", "Landscaping package", "1-year warranty walkthrough"],
    highlights: "A ground-up custom home tailored to your family's lifestyle. Choose from traditional, colonial, or craftsman styles with fully customizable interiors.",
  },
  {
    name: "Modern Living",
    dest: "Contemporary Homes",
    img: "/images/project-2.jpg",
    duration: "10-14 Months",
    price: "$480K+",
    includes: ["Open-concept floor plans", "Floor-to-ceiling windows", "Smart home integration", "Rooftop terrace option", "Sustainable materials"],
    highlights: "Clean lines, open spaces, and cutting-edge technology. Our modern builds prioritize natural light, energy efficiency, and seamless indoor-outdoor living.",
  },
  {
    name: "Complete Renovation",
    dest: "Renovation Services",
    img: "https://picsum.photos/seed/pkg3/800/500",
    duration: "3-6 Months",
    price: "$120K+",
    includes: ["Full design consultation", "Structural assessment", "Kitchen & bath remodel", "Electrical & plumbing upgrades", "Project management"],
    highlights: "Transform your existing home into something extraordinary. We handle everything from initial design to final walkthrough, minimizing disruption to your daily life.",
  },
];

const pastProjects = [
  { name: "Harborview Estate", img: "https://picsum.photos/seed/past1b/600/400", desc: "Waterfront luxury home with private dock" },
  { name: "Lincoln Park Reno", img: "https://picsum.photos/seed/past2b/600/500", desc: "Full gut renovation of a 1920s brownstone" },
  { name: "Mountain View Lodge", img: "https://picsum.photos/seed/past3b/600/450", desc: "Timber-frame lodge with panoramic views" },
  { name: "Downtown Loft", img: "https://picsum.photos/seed/past4b/600/380", desc: "Industrial loft conversion with exposed brick" },
  { name: "Greenfield Farmhouse", img: "https://picsum.photos/seed/past5b/600/420", desc: "Modern farmhouse on 5 acres" },
  { name: "The Evergreen", img: "https://picsum.photos/seed/past6b/600/350", desc: "Net-zero energy family home" },
];

const features = [
  { module: "Portfolio Option A — Feature Cards", description: "Alternating left/right layout with detailed descriptions, pricing, inclusions list, and CTA button. Great for service-based businesses.", reasons: ["Detailed cards build trust with specifics", "Alternating layout creates visual rhythm", "Inclusion lists pre-answer buyer questions", "CTA on each card drives conversions"] },
  { module: "Portfolio Option B — Grid with Hover", description: "Compact grid layout where project details appear on hover/tap. Followed by a past projects gallery.", reasons: ["Grid layout shows more projects at once", "Hover reveals keep the page clean", "Visual-first approach works well for creative industries", "Past project gallery adds depth to the portfolio"] },
];

const Portfolio = () => {
  const [option, setOption] = useState<"A" | "B">("A");

  useEffect(() => {
    document.title = "Portfolio — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/porthero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Our Portfolio</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Build Packages & Past Work</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Explore our build packages and browse completed projects that showcase our craftsmanship.
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
              Portfolio Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Feature Cards */
        <section className="py-14">
          <div className="container mx-auto px-4 space-y-16">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className={`flex flex-col overflow-hidden rounded-3xl bg-card shadow-lg md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 overflow-hidden">
                  <img src={pkg.img} alt={pkg.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
                  <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-foreground">{pkg.dest}</span>
                  <h3 className="mb-3 text-3xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mb-5 text-muted-foreground">{pkg.highlights}</p>
                  <div className="mb-5 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Calendar className="h-4 w-4 text-accent" /> {pkg.duration}</span>
                    <span className="text-2xl font-bold text-accent">{pkg.price}</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-xl bg-warm-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Option B: Grid with Hover Overlay */
        <>
          <section className="py-14">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-foreground">Our Packages</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img src={pkg.img} alt={pkg.name} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mb-1 text-xs font-semibold text-accent">{pkg.dest}</span>
                      <h4 className="text-xl font-bold text-primary-foreground">{pkg.name}</h4>
                      <p className="mt-1 text-sm text-primary-foreground/80">{pkg.price} · {pkg.duration}</p>
                      <Link to="/contact" className="mt-3 inline-flex w-fit items-center gap-1 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground">
                        Get Quote <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-card py-20">
            <div className="container mx-auto px-4">
              <h2 className="mb-10 text-3xl font-bold text-foreground">Past Project Highlights</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pastProjects.map((t) => (
                  <div key={t.name} className="group relative overflow-hidden rounded-2xl shadow-md">
                    <img src={t.img} alt={t.name} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/70 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-lg font-bold text-primary-foreground">{t.name}</h4>
                      <p className="text-sm text-primary-foreground/80">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <FeatureGuide features={features} />
    </div>
  );
};

export default Portfolio;