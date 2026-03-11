import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Headphones, Clock, Shield, Globe } from "lucide-react";

const destinations = [
  { name: "Bali, Indonesia", img: "https://picsum.photos/seed/bali/600/400", tag: "Tropical", price: "From $1,299" },
  { name: "Santorini, Greece", img: "https://picsum.photos/seed/santorini/600/500", tag: "Islands", price: "From $2,199" },
  { name: "Maldives", img: "https://picsum.photos/seed/maldives/600/350", tag: "Luxury", price: "From $3,499" },
  { name: "Swiss Alps", img: "https://picsum.photos/seed/swiss/600/450", tag: "Adventure", price: "From $2,899" },
  { name: "Tokyo, Japan", img: "https://picsum.photos/seed/tokyo/600/380", tag: "Culture", price: "From $1,899" },
  { name: "Amalfi Coast", img: "https://picsum.photos/seed/amalfi/600/420", tag: "Romantic", price: "From $2,499" },
];

const reviews = [
  { name: "Sarah Chen", quote: "Our Bali honeymoon was absolutely magical. Every detail was perfect.", avatar: "SC", rating: 5 },
  { name: "Marcus Johnson", quote: "The Maldives trip exceeded all our expectations. Truly once-in-a-lifetime.", avatar: "MJ", rating: 5 },
  { name: "Elena Rodriguez", quote: "Seamless booking, incredible guides, and unforgettable memories in Japan.", avatar: "ER", rating: 5 },
  { name: "David Park", quote: "Santorini was breathtaking. Horizon handled everything flawlessly.", avatar: "DP", rating: 5 },
  { name: "Lisa Wang", quote: "Our family trip to the Swiss Alps was the best vacation we've ever taken.", avatar: "LW", rating: 4 },
  { name: "Tom Baker", quote: "Professional, attentive, and truly passionate about travel. Highly recommend!", avatar: "TB", rating: 5 },
];

const blogPosts = [
  { title: "Top 10 Hidden Beaches in Southeast Asia", img: "https://picsum.photos/seed/beach1/600/400", cat: "Destinations", date: "Mar 5, 2026" },
  { title: "How to Pack for a Month-Long Trip", img: "https://picsum.photos/seed/packing/600/400", cat: "Travel Tips", date: "Feb 28, 2026" },
  { title: "A Food Lover's Guide to Tokyo", img: "https://picsum.photos/seed/tokyofood/600/400", cat: "Culture", date: "Feb 20, 2026" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/travelhero2/1920/1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm animate-fade-in-up">
              ✈️ Premium Travel Experiences
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-7xl animate-fade-in-up-delay-1">
              Discover the World's <span className="text-primary">Hidden</span> Wonders
            </h1>
            <p className="mb-10 max-w-lg text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
              From sun-kissed beaches to snow-capped mountains, we craft unforgettable journeys tailored to your dreams.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Link to="/destinations" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Explore Destinations <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Popular Destinations</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">Where Will You Go Next?</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">Handpicked destinations curated by our travel experts for unforgettable experiences.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link key={d.name} to="/destinations" className="group overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={d.img} alt={d.name} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">{d.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{d.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="flex items-center gap-1.5 text-lg font-bold text-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> {d.name}
                  </h3>
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">(4.9)</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-teal-gradient" />
        <div className="container relative mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Why Horizon</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-primary-foreground">Why Travelers Choose Us</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-primary-foreground/60">We don't just plan trips — we create memories that last a lifetime.</p>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Globe, stat: "500+", label: "Curated Trips", desc: "Worldwide destinations" },
              { icon: Star, stat: "98%", label: "Satisfaction", desc: "Happy travelers" },
              { icon: Headphones, stat: "24/7", label: "Support", desc: "Always available" },
              { icon: Shield, stat: "100%", label: "Secure", desc: "Protected bookings" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-primary-foreground/5 p-6 text-center backdrop-blur-sm border border-primary-foreground/10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-primary-foreground">{s.stat}</p>
                <p className="text-sm font-medium text-primary-foreground/80">{s.label}</p>
                <p className="text-xs text-primary-foreground/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">What Our Travelers Say</h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">Real stories from real adventurers who trusted us with their dream trips.</p>
        </div>
        <div className="flex gap-6" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-80 shrink-0 rounded-2xl bg-card p-6 shadow-md border border-border">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`h-3.5 w-3.5 ${s < r.rating ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <p className="mb-5 text-sm text-muted-foreground leading-relaxed">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient text-xs font-bold text-primary-foreground">{r.avatar}</div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Deal Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cruisedeal/1920/600')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
            <div className="relative flex flex-col items-start justify-center p-10 md:p-16 min-h-[360px]">
              <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">Limited Time</span>
              <h2 className="mb-3 text-3xl font-bold text-primary-foreground md:text-5xl">Summer Special Deals</h2>
              <p className="mb-6 max-w-md text-primary-foreground/70">Save up to 30% on selected Bali and Maldives packages. Book before June 30th and get complimentary airport transfers.</p>
              <Link to="/packages" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
                View Packages <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">From Our Blog</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">Travel Stories & Tips</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">Inspiration and insider knowledge from our passionate travel team.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <Link key={p.title} to="/blog" className="group overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{p.cat}</span>
                  <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {p.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">View All Posts <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Ready for Your Next Adventure?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">Let us handle the planning. You focus on making memories.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Start Planning <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
