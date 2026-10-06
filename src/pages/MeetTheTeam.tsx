import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/teamMembers";

const MeetTheTeam = () => {
  useEffect(() => {
    document.title = "Meet the Team — Summit Builders Co.";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Get to know the builders, designers, and project managers behind Summit Builders Co.");
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-teal-gradient py-28">
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Meet the Team</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">The People Behind the Build</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Designers, superintendents, and project managers who stay on your job from first sketch to final walkthrough.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((m) => (
              <div key={m.slug} className="overflow-hidden rounded-2xl bg-card shadow-md">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} at Summit Builders Co.`}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="p-5">
                  <h2 className="text-lg font-bold text-foreground">{m.name}</h2>
                  <p className="text-sm font-semibold text-accent">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default MeetTheTeam;
