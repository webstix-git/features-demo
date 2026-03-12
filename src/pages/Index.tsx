import { Link } from "react-router-dom";
import { ArrowRight, Home, Star, Headphones, Clock, Shield, Ruler, HardHat } from "lucide-react";
import { useEffect } from "react";
import FeatureGuide from "@/components/FeatureGuide";

const projects = [
  { name: "The Oakwood Estate", img: "/images/project-1.jpg", tag: "Custom Home", price: "From $450K" },
  { name: "Riverside Modern", img: "/images/project-2.jpg", tag: "Modern", price: "From $380K" },
  { name: "Cedar Ridge Villa", img: "/images/project-3.jpg", tag: "Luxury", price: "From $620K" },
  { name: "The Hartford", img: "/images/project-4.jpg", tag: "Traditional", price: "From $340K" },
  { name: "Sunset Terrace", img: "/images/project-5.jpg", tag: "Contemporary", price: "From $510K" },
  { name: "Maple Grove Cottage", img: "/images/project-6.jpg", tag: "Cottage", price: "From $290K" },
];

const reviews = [
  { name: "Karen Mitchell", quote: "Summit Builders turned our dream home into reality. Every detail was perfect.", avatar: "KM", rating: 5 },
  { name: "Robert Chen", quote: "Professional from start to finish. Our kitchen renovation exceeded expectations.", avatar: "RC", rating: 5 },
  { name: "Jennifer Torres", quote: "They completed our home on time and under budget. Couldn't be happier!", avatar: "JT", rating: 5 },
  { name: "David O'Brien", quote: "The craftsmanship and attention to detail is unmatched. Truly the best.", avatar: "DO", rating: 5 },
  { name: "Samantha Lee", quote: "From blueprint to move-in day, the whole experience was seamless.", avatar: "SL", rating: 4 },
  { name: "Mike Patterson", quote: "They transformed our outdated colonial into a stunning modern farmhouse.", avatar: "MP", rating: 5 },
];

const blogPosts = [
  { title: "5 Trends in Custom Home Design for 2026", img: "/images/blog-1.jpg", cat: "Design", date: "Mar 5, 2026" },
  { title: "How to Choose the Right Contractor", img: "/images/blog-2.jpg", cat: "Tips", date: "Feb 28, 2026" },
  { title: "Kitchen Remodel: Before & After", img: "/images/blog-3.jpg", cat: "Renovation", date: "Feb 20, 2026" },
];

const features = [
  { module: "Hero Section", description: "Full-width hero with a strong CTA drives visitors to take action immediately.", reasons: ["First impression sets the tone for the brand", "Clear CTA increases lead generation by up to 80%", "Background imagery builds trust and aspiration"] },
  { module: "Project Gallery Grid", description: "Showcases completed homes in a visually appealing card grid with tags and pricing.", reasons: ["Visual proof of work builds credibility", "Tags help visitors find relevant project types", "Price ranges pre-qualify leads"] },
  { module: "Stats Section", description: "Key business metrics displayed in a trust-building dark section.", reasons: ["Numbers create instant credibility", "Social proof reduces decision anxiety", "Stats sections increase time on page by 25%"] },
  { module: "Testimonials Marquee", description: "Auto-scrolling testimonial cards create social proof.", reasons: ["Testimonials near CTAs boost conversions by 34%", "Continuous motion draws the eye", "Star ratings add quick credibility signals"] },
  { module: "Blog Preview", description: "Featured blog posts drive SEO and demonstrate expertise.", reasons: ["Blog content improves organic search ranking", "Positions the business as an industry authority", "Keeps the homepage fresh with updated content"] },
  { module: "Newsletter Signup", description: "Footer email capture for ongoing lead nurturing.", reasons: ["Email lists are owned marketing channels", "Newsletter subscribers convert 3x more than cold leads"] },
];

const Index = () => {
  useEffect(() => {
    document.title = "Summit Builders Co. — Building Dreams, One Home at a Time";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/buildhero/1920/1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm animate-fade-in-up">
              🏗️ Custom Home Builders
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-7xl animate-fade-in-up-delay-1">
              Building <span className="text-accent">Dreams</span>, One Home at a Time
            </h1>
            <p className="mb-10 max-w-lg text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
              From custom builds to complete renovations, we bring your vision to life with expert craftsmanship and uncompromising quality.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Link to="/packages" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">What We Build</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">From ground-up custom homes to kitchen makeovers, we handle projects of every scale.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Home, title: "Custom Homes", desc: "Designed and built from scratch to match your lifestyle and vision." },
              { icon: Ruler, title: "Renovations", desc: "Transform your existing space with modern upgrades and thoughtful design." },
              { icon: HardHat, title: "Commercial", desc: "Office fit-outs, retail spaces, and commercial construction projects." },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Recent Projects</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">Our Latest Builds</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">Browse through our portfolio of custom homes and renovations.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((d) => (
              <Link key={d.name} to="/packages" className="group overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={d.img} alt={d.name} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">{d.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{d.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="flex items-center gap-1.5 text-lg font-bold text-foreground">
                    <Home className="h-4 w-4 text-accent" /> {d.name}
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

      {/* Stats */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-teal-gradient" />
        <div className="container relative mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Why Summit</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-primary-foreground">Why Homeowners Choose Us</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-primary-foreground/60">We don't just build houses — we build homes that last generations.</p>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Home, stat: "200+", label: "Homes Built", desc: "Across the region" },
              { icon: Star, stat: "98%", label: "Satisfaction", desc: "Happy homeowners" },
              { icon: Headphones, stat: "24/7", label: "Support", desc: "Always available" },
              { icon: Shield, stat: "15yr", label: "Warranty", desc: "Structural guarantee" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-primary-foreground/5 p-6 text-center backdrop-blur-sm border border-primary-foreground/10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent">
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
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">Real stories from homeowners who trusted us with their biggest investment.</p>
        </div>
        <div className="flex gap-6" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-80 shrink-0 rounded-2xl bg-card p-6 shadow-md border border-border">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`h-3.5 w-3.5 ${s < r.rating ? "fill-accent text-accent" : "text-muted"}`} />
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
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/buildpromo/1920/600')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
            <div className="relative flex flex-col items-start justify-center p-10 md:p-16 min-h-[360px]">
              <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider">Spring Special</span>
              <h2 className="mb-3 text-3xl font-bold text-primary-foreground md:text-5xl">Free Design Consultation</h2>
              <p className="mb-6 max-w-md text-primary-foreground/70">Book your free consultation before June 30th and receive a complimentary 3D rendering of your dream home.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">From Our Blog</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-foreground">Building Insights</h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">Tips, trends, and project showcases from our team of experts.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <Link key={p.title} to="/blog" className="group overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{p.cat}</span>
                  <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {p.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">View All Posts <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Ready to Build Your Dream Home?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">Let's discuss your project. Free consultation, no obligation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-warm-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <FeatureGuide features={features} />
    </div>
  );
};

export default Index;