import { useState } from "react";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "How do I get started?", a: "Sign up for a free account, choose your template, and launch in under 5 minutes. Our onboarding wizard guides you step by step.", cat: "Getting Started" },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can request invoicing.", cat: "Billing" },
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel at any time from your account settings. No cancellation fees or hidden charges.", cat: "Billing" },
  { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption, SOC 2 compliance, and daily backups. Your data is always safe.", cat: "Security" },
  { q: "Do you offer custom integrations?", a: "Yes, our API supports RESTful endpoints and webhooks. We also have pre-built integrations with 50+ popular tools.", cat: "Features" },
  { q: "What kind of support do you offer?", a: "All plans include email support. Pro and Enterprise plans include priority chat and dedicated account managers.", cat: "Support" },
  { q: "Can I import my existing data?", a: "Yes! We support CSV, JSON, and direct database migration. Our team can assist with complex migrations.", cat: "Getting Started" },
  { q: "Is there a free trial?", a: "We offer a 14-day free trial with full access to all features. No credit card required.", cat: "Billing" },
];

const categories = [...new Set(faqData.map((f) => f.cat))];

const FAQs = () => {
  const [activeCat, setActiveCat] = useState<string>("All");

  const filtered = activeCat === "All" ? faqData : faqData.filter((f) => f.cat === activeCat);

  return (
    <FeaturePageTemplate
      title="FAQs"
      subtitle="Reduce support tickets and empower users to find answers instantly."
      bullets={[
        { text: "A well-structured FAQ page can reduce support inquiries by up to 70%." },
        { text: "FAQ pages are an SEO goldmine, capturing long-tail search traffic." },
        { text: "Self-service answers improve customer satisfaction scores by 25%." },
      ]}
      proTip="Use the Accordion (Variant A) for businesses with a concise list of common questions. Use the Category Filter (Variant B) for SaaS and enterprise clients with extensive knowledge bases spanning multiple topics."
    >
      <VariantSection label="A" title="Modern Accordion">
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </VariantSection>

      <VariantSection label="B" title="Category-Based with Sidebar Filter">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="shrink-0 md:w-48">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categories</p>
            <div className="flex flex-wrap gap-2 md:flex-col">
              {["All", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${activeCat === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Accordion type="single" collapsible>
              {filtered.map((faq, i) => (
                <AccordionItem key={i} value={`cat-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    <div className="flex items-center gap-3">
                      {faq.q}
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{faq.cat}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </VariantSection>
    </FeaturePageTemplate>
  );
};

export default FAQs;
