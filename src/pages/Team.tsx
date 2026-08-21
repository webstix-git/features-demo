import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import FeatureGuide from "@/components/FeatureGuide";
import { teamMembers } from "@/data/teamMembers";

const features = [
  {
    module: "Team Option A — Photo Grid",
    description: "Balanced card grid with portrait, name, role, and a one-line summary. Each card links to a full profile page.",
    reasons: [
      "Grids scan quickly and scale to any team size",
      "Faces build trust faster than copy alone",
      "Consistent card height keeps the page tidy on mobile",
      "Every card is a clear entry point to a deeper profile",
    ],
  },
  {
    module: "Team Option B — Alternating Rows",
    description: "Full-width alternating rows with a larger portrait and more context per person. Editorial and story-driven.",
    reasons: [
      "More room to explain what each person actually does",
      "Alternating layout creates rhythm while scrolling",
      "Works well for smaller, senior-heavy teams",
      "Highlights expertise tags directly on the listing page",
    ],
  },
];

const Team = () => {
  const [option, setOption] = useState<"A" | "B">("A");

  useEffect(() => {
    document.title = "Our Team — Summit Builders Co.";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Meet the builders, designers, and project managers behind Summit Builders Co.");
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-gradient py-28">
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Our Team</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">The People Behind the Build</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Designers, superintendents, and project managers who stay on your job from first sketch to final walkthrough.
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
              aria-pressed={option === o}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${option === o ? "bg-warm-gradient text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:text-foreground"}`}
            >
              Team Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Photo Grid */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((m) => (
                <Link
                  key={m.slug}
                  to={`/team/${m.slug}`}
                  className="group overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <img
                      src={m.img}
                      alt={`${m.name}, ${m.role} at Summit Builders Co.`}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{m.name}</h2>
                    <p className="mb-3 text-sm font-semibold text-accent">{m.role}</p>
                    <p className="mb-4 text-sm text-muted-foreground">{m.short}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:gap-2 transition-all">
                      View profile <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Option B: Alternating Rows */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {teamMembers.map((m, i) => (
                <div
                  key={m.slug}
                  className={`flex flex-col gap-8 overflow-hidden rounded-3xl bg-card p-6 shadow-md md:p-8 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <div className="md:w-72 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={m.img}
                      alt={`${m.name}, ${m.role} at Summit Builders Co.`}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <h2 className="text-2xl font-bold text-foreground">{m.name}</h2>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{m.role}</p>
                    <p className="mb-4 text-muted-foreground">{m.bio[0]}</p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {m.expertise.map((e) => (
                        <span key={e} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{e}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to={`/team/${m.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg"
                      >
                        View full profile <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
                        <Mail className="h-4 w-4" /> Email
                      </a>
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-teal-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary-foreground">Want to talk to one of them?</h2>
          <p className="mx-auto mb-7 max-w-xl text-primary-foreground/70">
            Tell us about your project and we will put the right person on the call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FeatureGuide features={features} />
    </div>
  );
};

export default Team;
