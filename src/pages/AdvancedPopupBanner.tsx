import { useEffect, useState } from "react";
import { MonitorSmartphone, X, Sparkles, Target, Timer, Megaphone, MousePointerClick, ArrowDownToLine, LogOut, Filter, Tag, Mail, Bell } from "lucide-react";
import popupDemo from "@/assets/popup-banner-demo.jpg";

const AdvancedPopupBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Advanced Pop-Up Banner — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with inline CTA */}
      <section className="relative overflow-hidden bg-teal-gradient pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/80">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Feature Overview
              </span>
              <h1 className="mb-5 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                Advanced Pop-Up Banner
              </h1>
              <p className="mb-8 max-w-xl text-lg text-primary-foreground/70">
                A flexible on-site message that appears at the right moment to guide visitors, share an offer,
                or highlight something they might otherwise miss.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Launch demo pop-up
              </button>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
                  <img
                    src={popupDemo}
                    alt="Laptop on a wooden desk showing a pop-up banner overlay on a website"
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl border border-border bg-background p-4 shadow-xl max-w-[220px]">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10">
                      <Bell className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">Triggered</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Shown after 15 seconds on the pricing page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does — single column, wide */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-accent">
            About the feature
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            What this feature does
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
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
          </div>
        </div>
      </section>

      {/* Trigger types — horizontal strip */}
      <section className="bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Ways to trigger it</h2>
            <p className="text-muted-foreground">
              Choose one trigger or combine several. Each pop-up can behave differently depending on how
              and where visitors land.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Timer, title: "Time on page", body: "Show after a set number of seconds." },
              { icon: ArrowDownToLine, title: "Scroll depth", body: "Appear once someone passes a section." },
              { icon: LogOut, title: "Exit intent", body: "Catch visitors as their cursor leaves the tab." },
              { icon: MousePointerClick, title: "Click trigger", body: "Open when a specific link is clicked." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases — alternating rows */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto mb-14 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-accent">
            In practice
          </span>
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Common use cases</h2>
          <p className="text-muted-foreground">
            A few ways businesses put the advanced pop-up to work.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Tag,
              label: "01",
              title: "Announce a seasonal offer",
              body: "Show a limited-time discount to first-time visitors on your services or pricing page.",
            },
            {
              icon: Mail,
              label: "02",
              title: "Capture emails before people leave",
              body: "Use exit intent to invite visitors onto your newsletter with a short, friendly prompt.",
            },
            {
              icon: Megaphone,
              label: "03",
              title: "Highlight a new project or update",
              body: "Point returning visitors to a recently added case study or landing page.",
            },
            {
              icon: Filter,
              label: "04",
              title: "Segment by traffic source",
              body: "Greet visitors from a Google Ad or email campaign with a message tailored to that audience.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground/60">
                  {item.label}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Demo bar — slim horizontal */}
      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-primary-foreground/10 bg-teal-gradient p-8 md:p-10 shadow-lg">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                <MonitorSmartphone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-foreground">See it in action</h3>
                <p className="text-sm text-primary-foreground/70">
                  Click the button to open a sample pop-up the way a visitor would see it.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Launch demo pop-up
            </button>
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
