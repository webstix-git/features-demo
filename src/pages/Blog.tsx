import { useState, useEffect } from "react";
import { Clock, User } from "lucide-react";
import FeatureGuide from "@/components/FeatureGuide";

const posts = [
  { title: "5 Trends in Custom Home Design for 2026", img: "/images/blog-1.jpg", cat: "Design", date: "Mar 5, 2026", readTime: "6 min", author: "Sarah Mitchell", excerpt: "From biophilic design to multi-generational floor plans, these trends are shaping the future of home building." },
  { title: "How to Choose the Right Contractor", img: "/images/blog-2.jpg", cat: "Tips", date: "Feb 28, 2026", readTime: "4 min", author: "James Patterson", excerpt: "Red flags, green flags, and the questions you should ask before signing any contract." },
  { title: "Kitchen Remodel: What to Expect", img: "/images/blog-3.jpg", cat: "Renovation", date: "Feb 20, 2026", readTime: "8 min", author: "Karen O'Brien", excerpt: "A realistic timeline and budget guide for your kitchen renovation project." },
  { title: "The Complete Guide to Building Permits", img: "/images/blog-4.jpg", cat: "Tips", date: "Feb 12, 2026", readTime: "7 min", author: "David Chen", excerpt: "Everything you need to know about permits, inspections, and code compliance." },
  { title: "Sustainable Building Materials Worth the Investment", img: "/images/blog-5.jpg", cat: "Sustainability", date: "Jan 30, 2026", readTime: "5 min", author: "Sarah Mitchell", excerpt: "Eco-friendly materials that save money long-term and reduce your carbon footprint." },
  { title: "Smart Home Features Every New Build Should Have", img: "/images/blog-6.jpg", cat: "Design", date: "Jan 18, 2026", readTime: "9 min", author: "James Patterson", excerpt: "From automated lighting to integrated security — the must-have smart features." },
];

const cats = ["All", "Design", "Tips", "Renovation", "Sustainability"];

const features = [
  { module: "Blog Option A — Card Grid", description: "Card-based grid layout with category filter pills. Each card shows image, category tag, title, excerpt, and metadata.", reasons: ["Card grids are scannable and mobile-friendly", "Category filters help visitors self-segment", "Visual thumbnails increase click-through rates by 40%", "Author and read-time metadata builds content credibility"] },
  { module: "Blog Option B — Magazine List", description: "Featured hero post at top, followed by a list-style layout. Editorial feel with larger typography.", reasons: ["Featured post drives attention to key content", "List layout shows more content above the fold", "Magazine style positions the brand as an authority", "Great for content-heavy businesses"] },
];

const Blog = () => {
  const [option, setOption] = useState<"A" | "B">("A");
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? posts : posts.filter((p) => p.cat === activeCat);

  useEffect(() => {
    document.title = "Blog — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-blog.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Our Blog</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Building Insights</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Tips, trends, and expert advice for homeowners and aspiring builders.
          </p>
        </div>
      </section>

      {/* Option Toggle */}
      <div className="container mx-auto px-4 pt-10">
        <div className="flex items-center justify-center gap-2">
          {(["A", "B"] as const).map((o) => (
            <button
              key={o}
              onClick={() => setOption(o)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${option === o ? "bg-warm-gradient text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:text-foreground"}`}
            >
              Blog Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Card Grid */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCat === c ? "bg-warm-gradient text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border"}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <article key={p.title} className="group overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{p.cat}</span>
                    <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Option B: Magazine List */
        <section className="py-14">
          <div className="container mx-auto px-4">
            {/* Featured Post */}
            <div className="mb-12 overflow-hidden rounded-3xl bg-card shadow-lg md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <img src={posts[0].img} alt={posts[0].title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
                <span className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Featured</span>
                <h2 className="mb-3 text-3xl font-bold text-foreground">{posts[0].title}</h2>
                <p className="mb-4 text-muted-foreground">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{posts[0].author}</span>
                  <span>{posts[0].date}</span>
                  <span>{posts[0].readTime} read</span>
                </div>
              </div>
            </div>

            {/* List */}
            <div className="space-y-6">
              {posts.slice(1).map((p) => (
                <article key={p.title} className="group flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-md transition-all hover:shadow-xl md:flex-row md:items-center">
                  <div className="md:w-48 shrink-0 overflow-hidden rounded-xl">
                    <img src={p.img} alt={p.title} className="aspect-video w-full object-cover md:aspect-square transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <span className="mb-1 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{p.cat}</span>
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{p.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{p.author}</span>
                      <span>{p.date}</span>
                      <span>{p.readTime} read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FeatureGuide features={features} />
    </div>
  );
};

export default Blog;