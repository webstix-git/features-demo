import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FeatureGuide from "@/components/FeatureGuide";

const categories = ["All", "Process", "Pricing", "Design", "Warranty"];

const faqs = [
  { q: "How long does it take to build a custom home?", a: "A typical custom home takes 8-14 months depending on size, complexity, and weather conditions. We provide a detailed timeline during the planning phase and keep you updated weekly.", cat: "Process" },
  { q: "Can I make changes during construction?", a: "Yes, within reason. Minor changes can often be accommodated. Significant changes may affect timeline and budget, which we'll discuss transparently before proceeding.", cat: "Process" },
  { q: "How do you handle project pricing?", a: "We provide a detailed, itemized quote after the design phase. Our fixed-price contracts mean no surprises. We also offer a transparent change-order process if modifications are needed.", cat: "Pricing" },
  { q: "Do you offer financing options?", a: "We work with several preferred lenders who specialize in construction loans. We can connect you with financing partners who offer competitive rates and flexible terms.", cat: "Pricing" },
  { q: "Can I customize an existing floor plan?", a: "Absolutely! Most clients start with one of our proven floor plans and customize it. This often saves time and money compared to designing from scratch while still creating a unique home.", cat: "Design" },
  { q: "Do you handle interior design?", a: "Yes, our in-house design team handles everything from floor plans to fixture selections. We also partner with local interior designers if you have specific style preferences.", cat: "Design" },
  { q: "What warranty do you offer?", a: "We provide a comprehensive 15-year structural warranty, 5-year systems warranty (HVAC, plumbing, electrical), and 1-year cosmetic warranty. We also conduct a complimentary 1-year walkthrough.", cat: "Warranty" },
  { q: "What happens if something goes wrong after move-in?", a: "Our dedicated warranty team responds within 24 hours. For emergencies (leaks, electrical issues), we have a 24/7 hotline. Most non-emergency items are resolved within 5 business days.", cat: "Warranty" },
];

const features = [
  { module: "FAQ Option A — Category Sidebar", description: "Sidebar navigation with category filters alongside an accordion FAQ list. Great for large knowledge bases.", reasons: ["Category sidebar helps visitors find relevant answers quickly", "Accordion format saves space and reduces overwhelm", "Reduces support tickets by up to 30%", "Sidebar works well on desktop for easy browsing"] },
  { module: "FAQ Option B — Searchable Accordion", description: "Single-column layout with a search bar for real-time filtering. Clean and minimal.", reasons: ["Search functionality lets visitors find answers instantly", "Single-column layout is mobile-first", "Simpler UI reduces cognitive load", "Best for businesses with fewer than 20 FAQs"] },
];

const FAQs = () => {
  const [option, setOption] = useState<"A" | "B">("A");
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filteredA = activeCat === "All" ? faqs : faqs.filter((f) => f.cat === activeCat);
  const filteredB = search ? faqs.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())) : faqs;

  useEffect(() => {
    document.title = "FAQs — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-faq.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Help Center</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Everything you need to know about building your dream home with Summit Builders.
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
              FAQ Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Category Sidebar */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-10 md:flex-row">
              <aside className="md:w-56 shrink-0">
                <h3 className="mb-4 text-sm font-semibold text-foreground">Categories</h3>
                <div className="flex flex-wrap gap-2 md:flex-col md:gap-1">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveCat(c)}
                      className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all ${activeCat === c ? "bg-warm-gradient text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-card hover:text-foreground"}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </aside>

              <div className="flex-1">
                <Accordion type="multiple" defaultValue={filteredA.map((_, i) => `faq-${i}`)} className="space-y-3">
                  {filteredA.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6 shadow-sm">
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Option B: Searchable Accordion */
        <section className="py-14">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <Accordion type="multiple" defaultValue={filteredB.map((_, i) => `faq-s-${i}`)} className="space-y-3">
              {filteredB.map((f, i) => (
                <AccordionItem key={i} value={`faq-s-${i}`} className="rounded-2xl border border-border bg-card px-6 shadow-sm">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredB.length === 0 && (
              <p className="mt-8 text-center text-muted-foreground">No questions match your search. Try different keywords.</p>
            )}
          </div>
        </section>
      )}

      <FeatureGuide features={features} />
    </div>
  );
};

export default FAQs;