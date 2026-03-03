import { useState } from "react";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Gift, ArrowRight } from "lucide-react";

const Popups = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [slideInOpen, setSlideInOpen] = useState(false);

  return (
    <FeaturePageTemplate
      title="Advanced Pop-ups"
      subtitle="Capture attention at the perfect moment with strategic overlays."
      bullets={[
        { text: "Well-timed pop-ups convert 3-9% of visitors compared to 1% for static CTAs." },
        { text: "Exit-intent pop-ups recover up to 15% of abandoning visitors." },
        { text: "Personalized pop-ups see 2x higher engagement than generic ones." },
      ]}
      proTip="Use the Exit-Intent Modal (Variant A) for e-commerce and lead-gen sites where you need a last-chance conversion. Use the Slide-In Notification (Variant B) for content sites and SaaS products that want to promote without disrupting the user flow."
    >
      <VariantSection label="A" title="Exit-Intent Modal Overlay">
        <div className="text-center">
          <p className="mb-4 text-sm text-muted-foreground">Click the button to simulate an exit-intent modal pop-up.</p>
          <Button onClick={() => setModalOpen(true)} size="lg">
            Trigger Demo Modal
          </Button>
        </div>
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-md text-center">
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-7 w-7 text-primary" />
              </div>
              <DialogTitle className="text-2xl">Wait — Don't Leave Empty-Handed!</DialogTitle>
              <DialogDescription className="text-base">
                Get 20% off your first order. Enter your email and we'll send you an exclusive discount code.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-3">
              <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              <Button className="w-full" onClick={() => setModalOpen(false)}>
                Claim My 20% Off <ArrowRight className="h-4 w-4" />
              </Button>
              <button onClick={() => setModalOpen(false)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                No thanks, I'll pay full price
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </VariantSection>

      <VariantSection label="B" title="Slide-In Promotional Notification">
        <div className="text-center">
          <p className="mb-4 text-sm text-muted-foreground">Click the button to trigger a slide-in notification in the bottom corner.</p>
          <Button onClick={() => setSlideInOpen(true)} size="lg" variant="outline">
            Trigger Slide-In Demo
          </Button>
        </div>
        {slideInOpen && (
          <div className="fixed bottom-6 right-6 z-50 w-80 animate-slide-in-right rounded-xl border border-border bg-card p-5 shadow-2xl">
            <button onClick={() => setSlideInOpen(false)} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Gift className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-foreground">🔥 Flash Sale — 30% Off</h4>
                <p className="mb-3 text-xs text-muted-foreground">Limited time offer on all annual plans. Don't miss out!</p>
                <Button size="sm" onClick={() => setSlideInOpen(false)}>
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </VariantSection>
    </FeaturePageTemplate>
  );
};

export default Popups;
