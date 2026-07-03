import { useEffect, useState } from "react";
import { Mail, Send, CheckCircle2, Users, Bell, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import newsletterDemo from "@/assets/newsletter-demo.jpg";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Newsletter Sign-Up — Summit Builders Co.";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "You're on the list", description: "Thanks for subscribing to our newsletter." });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Mail className="h-3.5 w-3.5 text-accent" />
            Newsletter Feature
          </span>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Newsletter Sign-Up
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A simple way for visitors to stay in touch with your business. The newsletter sign-up gives people
            a clear place to leave their email so you can share updates, new work, and announcements on your
            own schedule.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
              What this feature does
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The newsletter sign-up is a small form that lives on your website, usually in the footer or
                on a dedicated page. A visitor types their email address, clicks the button, and their
                information is saved so you can reach them later.
              </p>
              <p>
                It works best when you have something worth sharing regularly. That could be project photos,
                seasonal offers, industry tips, or news about your company. You do not need to send updates
                every week for it to be useful. What matters is that people who care about your work have a
                way to hear from you directly, without depending on social media algorithms or ads.
              </p>
              <p>
                Once the form is in place, submissions can be sent to your email inbox, stored in a database,
                or connected to a service like Mailchimp, Brevo, or ConvertKit. We can wire it up to whichever
                setup fits how you already work.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={newsletterDemo}
                alt="Newsletter sign-up shown on a phone placed on a wooden desk with a notebook and coffee"
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
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Why businesses add it</h2>
            <p className="text-muted-foreground">
              A few practical reasons to include a newsletter sign-up on your site.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Build a direct audience",
                body: "Your email list belongs to you. It is not affected by changes to social platforms or paid ad costs.",
              },
              {
                icon: Bell,
                title: "Stay top of mind",
                body: "Occasional updates keep past clients and interested visitors familiar with your work for when they are ready to hire.",
              },
              {
                icon: Sparkles,
                title: "Share what matters",
                body: "Announce new projects, highlight case studies, or share seasonal tips without needing to publish a full blog post.",
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
          <div className="rounded-2xl border border-border bg-warm-gradient p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Try the sign-up</h3>
                <p className="text-sm text-muted-foreground">A working example of how it feels to visitors.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
            <div className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              <span>No spam. Unsubscribe any time. This demo does not actually store your email.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSignup;
