import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Users, Headphones, Clock } from "lucide-react";
import SalesRepBubble from "@/components/SalesRepBubble";

const destinations = [
  { name: "Bali, Indonesia", img: "https://picsum.photos/seed/bali/600/400", tag: "Tropical" },
  { name: "Santorini, Greece", img: "https://picsum.photos/seed/santorini/600/500", tag: "Islands" },
  { name: "Maldives", img: "https://picsum.photos/seed/maldives/600/350", tag: "Luxury" },
  { name: "Swiss Alps", img: "https://picsum.photos/seed/swiss/600/450", tag: "Adventure" },
  { name: "Tokyo, Japan", img: "https://picsum.photos/seed/tokyo/600/380", tag: "Culture" },
  { name: "Amalfi Coast, Italy", img: "https://picsum.photos/seed/amalfi/600/420", tag: "Romantic" },
];

const reviews = [
  { name: "Sarah Chen", quote: "Our Bali honeymoon was absolutely magical. Every detail was perfect.", avatar: "SC" },
  { name: "Marcus Johnson", quote: "The Maldives trip exceeded all our expectations. Truly a once-in-a-lifetime experience.", avatar: "MJ" },
  { name: "Elena Rodriguez", quote: "Seamless booking, incredible guides, and unforgettable memories in Japan.", avatar: "ER" },
  { name: "David Park", quote: "Santorini was breathtaking. Horizon handled everything flawlessly.", avatar: "DP" },
  { name: "Lisa Wang", quote: "Our family trip to the Swiss Alps was the best vacation we've ever taken.", avatar: "LW" },
  { name: "Tom Baker", quote: "Professional, attentive, and truly passionate about travel. Highly recommend!", avatar: "TB" },
];

const blogPosts = [
  { title: "Top 10 Hidden Beaches in Southeast Asia", img: "https://picsum.photos/seed/beach1/600/400", cat: "Destinations", date: "Mar 5, 2026" },
  { title: "How to Pack for a Month-Long Trip", img: "https://picsum.photos/seed/packing/600/400", cat: "Travel Tips", date: "Feb 28, 2026" },
  { title: "A Food Lover's Guide to Tokyo", img: "https://picsum.photos/seed/tokyofood/600/400", cat: "Culture", date: "Feb 20, 2026" },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 py-28 md:py-40">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/travelhero/1920/1080')] bg-cover bg-center opacity-15" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">
            Premium Travel Experiences
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl animate-fade-in-up-delay-1">
            Discover Paradise.<br className="hidden md:block" /> We Handle Everything.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            From sun-kissed beaches to snow-capped mountains, we craft unforgettable journeys tailored to your dreams. Your adventure starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delay-3">
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              Explore Destinations <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Popular Destinations</p>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Where Will You Go Next?</h2>
          <div className="columns-2 gap-4 md:columns-3">
            {destinations.map((d) => (
              <Link key={d.name} to="/destinations" className="group mb-4 block overflow-hidden rounded-xl border border-border transition-transform hover:scale-[1.02]">
                <div className="relative">
                  <img src={d.img} alt={d.name} className="w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="mb-1 inline-block rounded-full bg-primary/90 px-2 py-0.5 text-xs font-medium text-primary-foreground">{d.tag}</span>
                    <p className="text-sm font-semibold text-primary-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {d.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Why Travelers Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: MapPin, stat: "500+", label: "Curated Trips" },
              { icon: Star, stat: "98%", label: "Client Satisfaction" },
              { icon: Headphones, stat: "24/7", label: "Travel Support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-foreground">{s.stat}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">What Our Travelers Say</h2>
        </div>
        <div className="flex gap-6" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-72 shrink-0 rounded-xl border border-border bg-card p-5">
              <p className="mb-4 text-sm italic text-muted-foreground">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{r.avatar}</div>
                <p className="text-sm font-medium text-foreground">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">From Our Blog</p>
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Travel Stories & Tips</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <Link key={p.title} to="/blog" className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
                <img src={p.img} alt={p.title} className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{p.cat}</span>
                  <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {p.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog" className="text-sm font-medium text-primary hover:underline">View All Posts →</Link>
          </div>
        </div>
      </section>

      <SalesRepBubble feature="Homepage" tip="The homepage integrates multiple features — photo gallery (destinations grid), testimonial marquee, blog cards, and newsletter sign-up. Point out how each section naturally drives engagement and conversions for travel companies." />
    </div>
  );
};

export default Index;
