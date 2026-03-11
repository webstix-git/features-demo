import { useState } from "react";
import { Lightbulb, X } from "lucide-react";
import { useDemoMode } from "@/context/DemoModeContext";

interface SalesRepBubbleProps {
  tip: string;
  feature: string;
}

const SalesRepBubble = ({ tip, feature }: SalesRepBubbleProps) => {
  const { isDemoMode } = useDemoMode();
  const [open, setOpen] = useState(false);

  if (!isDemoMode) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-xl border border-border bg-card p-5 shadow-2xl animate-fade-in-up">
          <button onClick={() => setOpen(false)} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Sales Tip — {feature}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
        </div>
      )}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="Sales Rep Tip"
      >
        <Lightbulb className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SalesRepBubble;
