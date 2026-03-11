import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SalesRepBubble from "@/components/SalesRepBubble";

const categories = ["All", "Booking", "Payments", "Travel Tips", "Support"];

const faqs = [
  { q: "How far in advance should I book my trip?", a: "We recommend booking at least 3-6 months in advance for peak season destinations. However, we can accommodate last-minute trips as well — reach out and we'll find the best options available.", cat: "Booking" },
  { q: "Can I customize my travel package?", a: "Absolutely! All our packages are fully customizable. Tell us your preferences, budget, and dream activities, and we'll create a bespoke itinerary just for you.", cat: "Booking" },
  { q: "What is your cancellation policy?", a: "We offer flexible cancellation up to 30 days before departure for a full refund. Cancellations within 14-30 days receive a 50% refund. Within 14 days, a rescheduling credit is offered.", cat: "Payments" },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and PayPal. We also offer installment plans for packages over £2,000 — pay in 3 easy installments with no interest.", cat: "Payments" },
  { q: "Do I need travel insurance?", a: "We strongly recommend travel insurance for all trips. We partner with leading providers and can arrange comprehensive coverage that includes medical, cancellation, and luggage protection.", cat: "Travel Tips" },
  { q: "Will you help with visa applications?", a: "Yes! We provide visa guidance for all destinations, including document checklists, application timelines, and embassy contact information.", cat: "Travel Tips" },
  { q: "What happens if there's an emergency during my trip?", a: "Our 24/7 support team is always available. You'll have a dedicated emergency contact number and access to our local partners in every destination.", cat: "Support" },
  { q: "Do you offer group discounts?", a: "Yes! Groups of 6 or more receive a 10% discount. We also offer special rates for corporate retreats, wedding groups, and school trips.", cat: "Support" },
];

const FAQs = () => {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? faqs : faqs.filter((f) => f.cat === activeCat);

  return (
    <div className="min-h-screen pt-16">
      <section className="border-b border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Help Center</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up-delay-1">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            Everything you need to know about booking your dream vacation with Horizon Travels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10 md:flex-row">
            <aside className="md:w-56 shrink-0">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Categories</h3>
              <div className="flex flex-wrap gap-2 md:flex-col md:gap-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${activeCat === c ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </aside>

            <div className="flex-1">
              <Accordion type="single" collapsible className="space-y-3">
                {filtered.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
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

      <SalesRepBubble feature="FAQs" tip="Use the category sidebar filter for clients with large knowledge bases. A simple accordion works best for small businesses. Category filters reduce support tickets by up to 30%." />
    </div>
  );
};

export default FAQs;
