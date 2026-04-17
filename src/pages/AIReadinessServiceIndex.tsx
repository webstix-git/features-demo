import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Compass, Users, Search, TrendingUp, ArrowRight, CheckCircle2, FileText, Lightbulb } from "lucide-react";

const AIReadinessServiceIndex = () => {
  useEffect(() => {
    document.title = "AI Readiness — Service Index Pages | Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero — Teal */}
      <section className="bg-teal-gradient pt-32 pb-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-accent">
              <Compass className="h-4 w-4" /> AI Readiness
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Service Index Pages
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              A simple addition that quietly makes a website a lot more useful — for visitors, for search, and for AI assistants.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — Tan */}
      <section style={{ backgroundColor: "#f8f1ec" }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
                <Compass className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">A Clear Starting Point</h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                A Services Index page is one of those simple additions that can quietly make a website a lot more useful.
                Instead of making people dig through menus, guess which page applies to them, or send a vague contact form
                message, it gives them a clear starting point. It lays out your services in plain English, helps people
                self-sort, and points them toward the right next step.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-foreground">What it replaces</h3>
              <ul className="space-y-3">
                {[
                  "Digging through nested menus",
                  "Guessing which page applies to them",
                  "Sending a vague contact form message",
                  "Bouncing without finding the right path",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — White */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-2xl bg-muted p-8 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-foreground">A good fit for businesses that…</h3>
              <ul className="space-y-3">
                {[
                  "Offer more than one type of service",
                  "Serve a mix of audiences",
                  "Get inquiries from people who aren't sure what to ask for",
                  "Want better-qualified leads through the door",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Especially Helpful When Services Are Varied</h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                It is especially helpful for businesses that offer more than one type of service, have a mix of audiences,
                or get inquiries from people who know they need help but are not sure what to ask for yet. A page like this
                can include short service descriptions, common reasons someone would need that service, and what information
                to send when reaching out. That reduces confusion and tends to lead to better inquiries because people arrive
                with more clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Gray */}
      <section style={{ backgroundColor: "#f4f2f1" }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
                <Search className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">The SEO and AI-Readiness Angle</h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                There is also a strong SEO and AI-readiness angle to it. Your example page is built as a clear directory
                meant to help both busy people and AI assistants understand what help is available and how requests should
                be routed. That matters because many business websites describe services in scattered, inconsistent ways.
                A Services Index creates one organized page that makes your offerings easier to interpret, summarize, and
                connect to the right intent.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Search, title: "Easier to interpret", desc: "One organized page beats scattered service mentions." },
                { icon: FileText, title: "Easier to summarize", desc: "AI assistants can lift a clean overview directly." },
                { icon: Compass, title: "Easier to route", desc: "Intent gets matched to the right service quickly." },
              ].map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl bg-card p-5 shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm-gradient">
                    <b.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">{b.title}</h4>
                    <p className="text-sm text-foreground/70">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — White */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Turning Confusion Into Direction</h2>
            <p className="mb-12 text-base leading-relaxed text-foreground/80 md:text-lg">
              From a business standpoint, this is not just "another page." It helps turn confusion into direction.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                label: "The unsure visitor",
                quote: "I know something is wrong, but I don't know what I need.",
                outcome: "Now has a clear path forward.",
              },
              {
                label: "The comparison shopper",
                quote: "I'm evaluating a few providers.",
                outcome: "Can quickly see if you handle their kind of problem.",
              },
              {
                label: "The AI-assisted searcher",
                quote: "Asking ChatGPT or Google's AI for help.",
                outcome: "Gets routed to the right service instead of a vague answer.",
              },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl border border-border bg-card p-6 shadow-md">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">{p.label}</div>
                <p className="mb-4 text-base italic text-foreground/80">"{p.quote}"</p>
                <div className="flex items-start gap-2 border-t border-border pt-4 text-sm text-foreground/80">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{p.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Tan (Add-on) */}
      <section style={{ backgroundColor: "#f8f1ec" }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-gradient shadow-md">
                <Lightbulb className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Add-on
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              A Straightforward Project With Outsized Impact
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              This works well for companies that want their websites to be clearer, easier to navigate, and more ready for
              the way people search now. It is a relatively straightforward project, but it can improve usability, strengthen
              service positioning, support internal linking, and make the site easier for both humans and machines to
              understand. In plain terms, it helps the right people get to the right service faster.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Improved usability",
                "Stronger service positioning",
                "Better internal linking",
                "Easier for humans & AI",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-card p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Teal */}
      <section className="bg-teal-gradient py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to make your services easier to find?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Let's talk about adding a Services Index page that helps your visitors — and AI assistants — get to the right help faster.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Start the Conversation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIReadinessServiceIndex;
