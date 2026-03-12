import { BookOpen } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react";

interface FeatureInfo {
  module: string;
  description: string;
  reasons: string[];
}

interface FeatureGuideProps {
  features: FeatureInfo[];
}

const FeatureGuide = ({ features }: FeatureGuideProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-warm-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
      >
        <BookOpen className="h-4 w-4" />
        Feature Guide
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[380px] sm:w-[420px] overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-accent" />
              Feature Guide
            </SheetTitle>
            <SheetDescription>
              Modules on this page and why they matter for client websites.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-4">
                <h4 className="mb-2 text-sm font-bold text-foreground">{f.module}</h4>
                <p className="mb-3 text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-foreground">Why this matters:</p>
                  {f.reasons.map((r, j) => (
                    <p key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FeatureGuide;