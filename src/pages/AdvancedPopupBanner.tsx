import { useEffect, useState } from "react";
import { MonitorSmartphone, X, Sparkles, Target, Timer, Megaphone, CheckCircle2 } from "lucide-react";
import popupDemo from "@/assets/popup-banner-demo.jpg";

const AdvancedPopupBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Advanced Pop-Up Banner — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-teal-gradient pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            Advanced Pop-Up Banner
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
            A flexible on-site message that appears at the right moment to guide visitors, share an offer,
            or highlight something they might otherwise miss.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-20 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
              What this feature does
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                An advanced pop-up banner is a small window that opens on top of your website to show a
                specific message. Unlike a basic pop-up that shows the moment someone lands on your site,
                an advanced version lets you control when it appears, who sees it, and how often.
              </p>
              <p>
                You can trigger it after a visitor scrolls past a certain point, spends a set amount of
                time on the page, moves their cursor toward the tab bar, or clicks a particular link. You
                can also limit it to specific pages, first-time visitors, returning visitors, or people
                coming from a certain source such as a Google Ad or an email campaign.
              </p>
              <p>
                Common uses include announcing a seasonal offer, collecting emails before someone leaves,
                sharing an important update, promoting a new project, or steering visitors to a page you
                want them to see. Each pop-up can be paired with an image, a call to action button, or a
                short form depending on the goal.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={popupDemo}
                alt="Laptop on a wooden desk showing a pop-up banner overlay on a website"
                width={1280}
                height={896}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Why businesses use it</h2>
            <p className="text-muted-foreground">
              A few practical reasons to add an advanced pop-up banner to your site.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Reach the right visitors",
                body: "Rules based on page, source, or behavior mean the message only shows to people it actually applies to.",
              },
              {
                icon: Timer,
                title: "Show at the right moment",
                body: "Trigger by scroll depth, time on page, or exit intent so the pop-up feels helpful instead of intrusive.",
              },
              {
                icon: Megaphone,
                title: "Move visitors to action",
                body: "Highlight a promotion, capture an email, or push people toward a page they might otherwise miss.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-primary-foreground/10 bg-teal-gradient p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <MonitorSmartphone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">Try the pop-up</h3>
                <p className="text-sm text-primary-foreground/70">A working example of how it feels to visitors.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Launch demo pop-up
            </button>
            <div className="mt-5 flex items-start gap-2 text-xs text-primary-foreground/70">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              <span>Click the button to see how a triggered pop-up appears on the page.</span>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close pop-up"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Welcome to Summit Builders</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              This is what a triggered pop-up looks like. You can use it to share an offer, announce a new
              project, or prompt visitors to take an action before they leave.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Got it
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPopupBanner;
