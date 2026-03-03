import { ReactNode } from "react";
import { Lightbulb, TrendingUp, Users, BarChart3 } from "lucide-react";

interface BulletPoint {
  text: string;
}

interface FeaturePageTemplateProps {
  title: string;
  subtitle: string;
  bullets: BulletPoint[];
  children: ReactNode;
  proTip: string;
}

const FeaturePageTemplate = ({ title, subtitle, bullets, children, proTip }: FeaturePageTemplateProps) => {
  const bulletIcons = [TrendingUp, Users, BarChart3];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
            <p className="mb-10 text-lg text-muted-foreground">{subtitle}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up-delay-1">
              Why it Matters
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {bullets.map((b, i) => {
                const Icon = bulletIcons[i % bulletIcons.length];
                return (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 animate-fade-in-up-delay-2">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Lab */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Demo Lab</h2>
          <p className="mb-12 text-center text-muted-foreground">Explore live, functional variants below</p>
          {children}
        </div>
      </section>

      {/* Sales Cheat Sheet */}
      <section className="border-t border-border bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Pro Tip</h3>
              <p className="text-sm leading-relaxed text-foreground">{proTip}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePageTemplate;
