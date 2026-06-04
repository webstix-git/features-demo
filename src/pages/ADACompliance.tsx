import { useEffect } from "react";

import { Accessibility, Check, ShieldCheck, Sparkles, X, Eye, Keyboard, Brain, Code2 } from "lucide-react";
import adaHero from "@/assets/ada-hero.jpg";
import adaPrinciples from "@/assets/ada-principles.jpg";
import adaCustom from "@/assets/ada-custom.jpg";

const principles = [
  { icon: Eye, name: "Perceivable", text: "Information and UI must be presentable to users in ways they can perceive, alt text, captions, sufficient contrast." },
  { icon: Keyboard, name: "Operable", text: "Interface and navigation must be operable, keyboard access, enough time, no seizure triggers." },
  { icon: Brain, name: "Understandable", text: "Information and UI operation must be understandable, readable text, predictable behavior, input assistance." },
  { icon: Code2, name: "Robust", text: "Content must be robust enough to be interpreted by a wide range of assistive technologies." },
];

const levelA = [
  "Alt text on all meaningful images",
  "Full keyboard navigation",
  "Captions for pre-recorded video",
  "No content flashing more than 3× per second",
  "Page titles and a declared page language",
  "Form inputs paired with labels",
  "Logical reading and focus order",
];

const levelAA = [
  "Everything in Level A",
  "Color contrast 4.5:1 (text) and 3:1 (large text / UI)",
  "Text resizable up to 200% without loss of function",
  "Multiple ways to find pages (nav, search, sitemap)",
  "Consistent navigation and identification",
  "Visible focus indicators on every interactive element",
  "Error identification and correction suggestions on forms",
  "Headings and labels that describe topic or purpose",
  "Audio descriptions for pre-recorded video",
  "Status messages announced to screen readers",
];

const levelAAA = [
  "Everything in Level AA",
  "Color contrast 7:1 (text) and 4.5:1 (large text)",
  "Sign language interpretation for pre-recorded audio",
  "Extended audio descriptions for video",
  "No timing or time limits on interactions",
  "Reading level no more advanced than lower secondary",
  "Context-sensitive help available throughout",
  "Pronunciation guides for ambiguous words",
  "Re-authentication without loss of submitted data",
];

const Bullet = ({ children, included = true }: { children: React.ReactNode; included?: boolean }) => (
  <li className="flex items-start gap-2.5 text-sm text-foreground/80">
    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${included ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>
      {included ? <Check className="h-3 w-3" strokeWidth={3} /> : <X className="h-3 w-3" strokeWidth={3} />}
    </span>
    <span>{children}</span>
  </li>
);

const ADACompliance = () => {
  useEffect(() => {
    document.title = "ADA Compliance, Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={adaHero}
            alt="A diverse team collaborating around a wooden table on a website design"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-background backdrop-blur">
              <Accessibility className="h-3.5 w-3.5" /> Accessibility
            </span>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl">
              ADA Compliance
            </h1>
            <p className="text-lg leading-relaxed text-background/80">
              The Americans with Disabilities Act requires that digital experiences be usable by everyone.
              We build to the WCAG 2.1 / 2.2 technical standard, reducing legal exposure, widening your
              audience, and lifting search performance along the way.
            </p>
          </div>
        </div>
      </section>

      {/* What is ADA */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl">What is ADA Compliance?</h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              ADA compliance for websites means meeting the WCAG (Web Content Accessibility Guidelines)
              standard so people using screen readers, keyboard-only navigation, magnification, or other
              assistive technology can use your site without barriers.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              WCAG is organized around four principles, known as <strong className="text-foreground">POUR</strong>.
              Every requirement at every level traces back to one of them.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.name} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-warm-gradient">
                    <p.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-foreground">{p.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={adaPrinciples}
              alt="Close-up of hands using an accessible keyboard with assistive device beside it"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Conformance Levels */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Conformance Levels</h2>
            <p className="text-base text-muted-foreground">
              WCAG defines three increasing levels of accessibility. Our standard build delivers up to AA,
              the level cited in most ADA-related lawsuits and the practical bar for modern sites.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Level A */}
            <article className="flex flex-col rounded-3xl border border-border bg-background p-7 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Included</span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-foreground">Level A</h3>
              <p className="mb-5 text-sm text-muted-foreground">Essential, the absolute minimum.</p>
              <ul className="space-y-2.5">
                {levelA.map((item) => <Bullet key={item}>{item}</Bullet>)}
              </ul>
            </article>

            {/* Level AA, featured */}
            <article className="relative flex flex-col rounded-3xl border-2 border-accent bg-background p-7 shadow-xl lg:-translate-y-3">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warm-gradient px-4 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                Our Standard
              </span>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warm-gradient">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Included</span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-foreground">Level AA</h3>
              <p className="mb-5 text-sm text-muted-foreground">Standard, the target for most regulated sites.</p>
              <ul className="space-y-2.5">
                {levelAA.map((item) => <Bullet key={item}>{item}</Bullet>)}
              </ul>
            </article>

            {/* Level AAA */}
            <article className="flex flex-col rounded-3xl border border-dashed border-border bg-background p-7 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                  <Accessibility className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">Custom Scope</span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-foreground">Level AAA</h3>
              <p className="mb-5 text-sm text-muted-foreground">Enhanced, quoted separately, case by case.</p>
              <ul className="space-y-2.5">
                {levelAAA.map((item, i) => <Bullet key={item} included={i === 0}>{item}</Bullet>)}
              </ul>
            </article>
          </div>

          <div className="mt-14 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              For most businesses working toward ADA website compliance, WCAG Level AA is usually the right target. It is the most commonly referenced accessibility standard, covers the issues that affect most users, and helps reduce legal risk without forcing unnecessary design compromises.
            </p>
            <p>
              Level AAA is more demanding and often requires a much higher level of custom planning, content adjustment, and development work. While AAA can be appropriate in certain situations, it is not typically required for general ADA compliance and may not be realistic or necessary for every website.
            </p>
          </div>
        </div>
      </section>


      {/* Why AAA is custom */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              src={adaCustom}
              alt="Designers reviewing wireframes and color contrast swatches on a wooden desk"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Why AAA is custom
            </span>
            <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl">
              AAA changes the design, the content, and the workflow.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Where AA can be reliably delivered against a template, AAA touches choices that only make
              sense in context, palette ratios that may rule out brand colors, copy rewritten to a lower
              reading level, sign-language video production, and editorial review that continues after launch.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Because every AAA requirement needs case-by-case design analysis, we scope it as a separate
              engagement rather than bundling it into the standard package.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ADACompliance;
