import { Link } from "react-router-dom";
import { useEffect } from "react";
import { posts } from "@/data/blogPosts";

const pages = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/destinations" },
  { name: "Portfolio", path: "/packages" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
  { name: "Sales Tips", path: "/tips" },
];

const Sitemap = () => {
  useEffect(() => {
    document.title = "Site Map — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="mb-8 text-4xl font-bold text-foreground">Site Map</h1>
        <hr className="mb-10 border-border" />

        <h2 className="mb-4 text-xl font-bold text-foreground">Pages</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          {pages.map((p) => (
            <li key={p.path}>
              <Link to={p.path} className="text-destructive hover:underline">{p.name}</Link>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-xl font-bold text-foreground">Blog Posts</h2>
        <ul className="list-disc pl-6 space-y-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="text-destructive hover:underline">{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sitemap;
