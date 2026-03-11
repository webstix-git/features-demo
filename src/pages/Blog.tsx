import { useState } from "react";
import { Clock, User } from "lucide-react";
import SalesRepBubble from "@/components/SalesRepBubble";

const posts = [
  { title: "Top 10 Hidden Beaches in Southeast Asia", img: "https://picsum.photos/seed/beach1/800/500", cat: "Destinations", date: "Mar 5, 2026", readTime: "6 min", author: "Emma Wright", excerpt: "Escape the crowds and discover pristine shorelines that most travelers never find." },
  { title: "How to Pack for a Month-Long Trip", img: "https://picsum.photos/seed/packing/800/500", cat: "Travel Tips", date: "Feb 28, 2026", readTime: "4 min", author: "James Cole", excerpt: "Master the art of minimalist packing. One carry-on, 30 days, zero stress." },
  { title: "A Food Lover's Guide to Tokyo", img: "https://picsum.photos/seed/tokyofood/800/500", cat: "Culture", date: "Feb 20, 2026", readTime: "8 min", author: "Yuki Tanaka", excerpt: "From Michelin-starred sushi bars to hidden ramen joints in Tokyo." },
  { title: "Trekking the Inca Trail: What You Need to Know", img: "https://picsum.photos/seed/inca/800/500", cat: "Adventure", date: "Feb 12, 2026", readTime: "7 min", author: "Carlos Mendez", excerpt: "Everything from permits and fitness preparation to campsite expectations." },
  { title: "Island Hopping in Greece: The Ultimate Itinerary", img: "https://picsum.photos/seed/greece/800/500", cat: "Destinations", date: "Jan 30, 2026", readTime: "5 min", author: "Emma Wright", excerpt: "Santorini, Mykonos, Naxos — our 14-day island-hopping itinerary." },
  { title: "Safari Planning: Your Complete Guide to East Africa", img: "https://picsum.photos/seed/safari/800/500", cat: "Adventure", date: "Jan 18, 2026", readTime: "9 min", author: "David Okafor", excerpt: "When to go, where to stay, and how to see the Big Five." },
];

const cats = ["All", "Destinations", "Travel Tips", "Culture", "Adventure"];

const Blog = () => {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? posts : posts.filter((p) => p.cat === activeCat);

  return (
    <div className="min-h-screen pt-16">
      <section className="border-b border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Our Blog</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up-delay-1">Travel Stories & Tips</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            Inspiration, practical advice, and insider knowledge from our team of passionate travelers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${activeCat === c ? "bg-primary text-primary-foreground font-medium" : "border border-border text-muted-foreground hover:bg-accent hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
                <img src={p.img} alt={p.title} className="aspect-video w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{p.cat}</span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime} read</span>
                    <span>{p.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SalesRepBubble feature="Blog" tip="Card-based grid layouts with category tags drive 40% more engagement than plain list views. Categories help users self-segment, reducing bounce rates." />
    </div>
  );
};

export default Blog;
