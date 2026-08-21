import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Phone, Linkedin, Award, GraduationCap, BadgeCheck, Briefcase } from "lucide-react";
import { teamMembers } from "@/data/teamMembers";

const TeamMember = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembers.find((m) => m.slug === slug);

  useEffect(() => {
    document.title = member ? `${member.name}, ${member.role} — Summit Builders Co.` : "Team Member Not Found";
    const desc = document.querySelector('meta[name="description"]');
    if (desc && member) desc.setAttribute("content", `${member.name}, ${member.role} at Summit Builders Co. ${member.short}`);
  }, [member]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-foreground">Team Member Not Found</h1>
        <Link to="/team" className="flex items-center gap-2 text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Our Team
        </Link>
      </div>
    );
  }

  const others = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-teal-gradient pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/team" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to Our Team
          </Link>
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="w-full max-w-[280px] overflow-hidden rounded-3xl shadow-lg">
              <img
                src={member.img}
                alt={`${member.name}, ${member.role} at Summit Builders Co.`}
                width={1200}
                height={1500}
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div>
              <h1 className="mb-2 text-4xl font-bold text-primary-foreground md:text-5xl">{member.name}</h1>
              <p className="mb-4 text-lg font-semibold text-accent">{member.role}</p>
              <p className="mb-6 max-w-xl text-primary-foreground/70">{member.short}</p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg">
                  <Mail className="h-4 w-4" /> Email {member.name.split(" ")[0]}
                </a>
                <a href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="h-4 w-4" /> {member.phone}
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + details */}
      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-5 text-2xl font-bold text-foreground">About {member.name.split(" ")[0]}</h2>
            {member.bio.map((p, i) => (
              <p key={i} className="mb-5 leading-relaxed text-muted-foreground">{p}</p>
            ))}

            <h3 className="mb-4 mt-10 text-xl font-bold text-foreground">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((e) => (
                <span key={e} className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">{e}</span>
              ))}
            </div>

            <h3 className="mb-4 mt-10 text-xl font-bold text-foreground">Notable Achievements</h3>
            <ul className="space-y-3">
              {member.achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" /> Experience
              </h3>
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {member.education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" /> Certifications
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {member.certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Other members */}
      <section className="border-t border-border bg-muted/30 py-14">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Meet the Rest of the Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => (
              <Link key={m.slug} to={`/team/${m.slug}`} className="group overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
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
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{m.name}</h3>
                  <p className="text-sm font-semibold text-accent">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg">
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamMember;
