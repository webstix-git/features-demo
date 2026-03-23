import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { posts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} — Summit Builders Co.` : "Post Not Found";
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-foreground">Post Not Found</h1>
        <Link to="/blog" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug && p.cat === post.cat).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden h-[50vh] min-h-[360px]">
        <div className="absolute inset-0">
          <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container relative mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
          <span className="mb-3 inline-block rounded-full bg-accent/90 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {post.cat}
          </span>
          <h1 className="mb-3 max-w-3xl text-3xl font-bold text-primary-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="mb-5 text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex items-center gap-2 border-t border-border pt-6">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{post.cat}</span>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Related Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{p.cat}</span>
                    <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
