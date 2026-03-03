import { useState } from "react";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, BookOpen, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const handleSubmit = (e: React.FormEvent, variant: string) => {
    e.preventDefault();
    toast.success(`Thanks for subscribing! (${variant} demo)`);
    if (variant === "A") setEmail1("");
    else setEmail2("");
  };

  return (
    <FeaturePageTemplate
      title="Newsletter Sign-up"
      subtitle="Capture leads and grow your audience with optimized sign-up experiences."
      bullets={[
        { text: "Email marketing delivers $42 ROI for every $1 spent — the highest of any channel." },
        { text: "Strategically placed sign-up forms can increase list growth by 300%." },
        { text: "Segmented email lists drive 760% more revenue than generic blasts." },
      ]}
      proTip="Use the Inline Footer Form (Variant A) for clients who want a persistent, non-intrusive capture. Use the Lead Magnet (Variant B) for content-driven brands that can offer a compelling freebie to boost conversion."
    >
      <VariantSection label="A" title="Inline Footer-Style Form">
        <div className="rounded-xl border border-border bg-secondary/50 p-8">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg font-semibold text-foreground">Stay in the loop</h4>
              <p className="text-sm text-muted-foreground">Get weekly insights delivered to your inbox.</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e, "A")} className="flex w-full gap-2 sm:w-auto">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                required
                className="w-full sm:w-56"
              />
              <Button type="submit">
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </VariantSection>

      <VariantSection label="B" title="Centered Lead Magnet Section">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h4 className="mb-2 text-2xl font-bold text-foreground">Free: The 2026 Growth Playbook</h4>
          <p className="mb-6 text-muted-foreground">50 pages of proven strategies, templates, and frameworks used by top-performing teams. Download it now — no strings attached.</p>
          <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {["Conversion Frameworks", "Email Templates", "SEO Checklist"].map((item) => (
              <span key={item} className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-primary" /> {item}</span>
            ))}
          </div>
          <form onSubmit={(e) => handleSubmit(e, "B")} className="mx-auto flex max-w-sm gap-2">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              required
            />
            <Button type="submit">
              Get Free Copy <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </VariantSection>
    </FeaturePageTemplate>
  );
};

export default Newsletter;
