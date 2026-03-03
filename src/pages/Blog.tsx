import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Clock, Calendar } from "lucide-react";

const posts = [
  { title: "10 Web Design Trends That Will Dominate 2026", excerpt: "From AI-driven layouts to immersive 3D elements, here's what's next.", date: "Feb 28, 2026", readTime: "5 min", category: "Design", image: "https://picsum.photos/seed/blog1/800/400" },
  { title: "How to Increase Conversion Rates by 50%", excerpt: "Proven strategies that turn visitors into customers.", date: "Feb 25, 2026", readTime: "7 min", category: "Marketing", image: "https://picsum.photos/seed/blog2/800/400" },
  { title: "The Complete Guide to SEO in 2026", excerpt: "Everything you need to know about ranking in today's search landscape.", date: "Feb 20, 2026", readTime: "12 min", category: "SEO", image: "https://picsum.photos/seed/blog3/800/400" },
  { title: "Building Trust Online: A Visual Guide", excerpt: "Social proof, testimonials, and design patterns that build credibility.", date: "Feb 15, 2026", readTime: "6 min", category: "UX", image: "https://picsum.photos/seed/blog4/800/400" },
  { title: "Why Page Speed Matters More Than Ever", excerpt: "Core Web Vitals and their impact on user experience and rankings.", date: "Feb 10, 2026", readTime: "4 min", category: "Performance", image: "https://picsum.photos/seed/blog5/800/400" },
  { title: "Email Marketing Strategies for 2026", excerpt: "Segmentation, automation, and personalization techniques that work.", date: "Feb 5, 2026", readTime: "8 min", category: "Marketing", image: "https://picsum.photos/seed/blog6/800/400" },
];

const Blog = () => (
  <FeaturePageTemplate
    title="Blog"
    subtitle="Keep your audience engaged with fresh, structured content."
    bullets={[
      { text: "Companies that blog get 55% more website visitors than those that don't." },
      { text: "Blog content generates 3x more leads per dollar than paid search ads." },
      { text: "Long-form blog content earns 77% more backlinks for SEO authority." },
    ]}
    proTip="Use the List View (Variant A) for content-heavy publications and thought-leadership brands. Use the Card Grid (Variant B) for visual brands and agencies that want a magazine-style browsing experience."
  >
    <VariantSection label="A" title="Standard List View">
      <div className="mx-auto max-w-3xl space-y-6">
        {posts.map((p, i) => (
          <article key={i} className="group flex gap-6 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md">
            <img src={p.image} alt={p.title} className="h-32 w-48 shrink-0 rounded-md object-cover" loading="lazy" />
            <div className="flex flex-col justify-center">
              <span className="mb-1 text-xs font-medium text-primary">{p.category}</span>
              <h4 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h4>
              <p className="mb-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime} read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </VariantSection>

    <VariantSection label="B" title="Card-Based Grid">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <article key={i} className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md">
            <div className="overflow-hidden">
              <img src={p.image} alt={p.title} className="aspect-video w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{p.category}</span>
              <h4 className="mb-2 text-base font-semibold text-foreground">{p.title}</h4>
              <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </VariantSection>
  </FeaturePageTemplate>
);

export default Blog;
