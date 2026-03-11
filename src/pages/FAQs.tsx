import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqHero from "@/assets/faq-hero.jpg";

const categories = ["All", "Booking", "Payments", "Travel Tips", "Support"];

const faqs = [
  { q: "How far in advance should I book my trip?", a: "We recommend booking at least 3-6 months in advance for peak season destinations. However, we can accommodate last-minute trips as well — reach out and we'll find the best options available.", cat: "Booking" },
  { q: "Can I customize my travel package?", a: "Absolutely! All our packages are fully customizable. Tell us your preferences, budget, and dream activities, and we'll create a bespoke itinerary just for you.", cat: "Booking" },
  { q: "What is your cancellation policy?", a: "We offer flexible cancellation up to 30 days before departure for a full refund. Cancellations within 14-30 days receive a 50% refund. Within 14 days, a rescheduling credit is offered.", cat: "Payments" },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and PayPal. We also offer installment plans for packages over $2,000 — pay in 3 easy installments with no interest.", cat: "Payments" },
  { q: "Do I need travel insurance?", a: "We strongly recommend travel insurance for all trips. We partner with leading providers and can arrange comprehensive coverage that includes medical, cancellation, and luggage protection.", cat: "Travel Tips" },
  { q: "Will you help with visa applications?", a: "Yes! We provide visa guidance for all destinations, including document checklists, application timelines, and embassy contact information.", cat: "Travel Tips" },
  { q: "What happens if there's an emergency during my trip?", a: "Our 24/7 support team is always available. You'll have a dedicated emergency contact number and access to our local partners in every destination.", cat: "Support" },
  { q: "Do you offer group discounts?", a: "Yes! Groups of 6 or more receive a 10% discount. We also offer special rates for corporate retreats, wedding groups, and school trips.", cat: "Support" },
];

const FAQs = () => {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? faqs : faqs.filter((f) => f.cat === activeCat);

  useEffect(() => {
    document.title = "FAQs — Horizon Travels";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero with banner */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${faqHero})` }} />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Help Center</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Everything you need to know about booking your dream vacation with Horizon Travels.
          </p>
        </div>
      </section>

      <section className="py-20">
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
              <Accordion type="single" collapsible className="space-y-3">
                {filtered.map((f, i) => (
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
    </div>
  );
};

export default FAQs;
