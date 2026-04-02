import { useEffect } from "react";
import { Check, Users, EyeOff, Map, Bot, ShieldCheck, Star, Signal, QrCode, CreditCard, BookOpen, DollarSign } from "lucide-react";
import FeatureGuide from "@/components/FeatureGuide";

const features = [
  {
    module: "Local SEO Content Page",
    description: "A dedicated page presenting local SEO service plans with structured content hierarchy and pricing.",
    reasons: [
      "Educates potential clients on the importance of local search visibility",
      "Clear pricing tiers help clients self-select the right plan",
      "Structured content improves the page's own SEO performance",
    ],
  },
  {
    module: "Pricing Cards",
    description: "Three-tier pricing layout with feature comparison for easy decision-making.",
    reasons: [
      "Tiered pricing appeals to different budget levels",
      "Feature lists help justify the investment",
      "Visual hierarchy guides users toward higher-value plans",
    ],
  },
];

const basicFeatures = [
  "Optimization per location by increasing listings and reviews",
  "Google Business Profile optimization",
  "Google Business Profile competitive analysis",
  "Listing maintenance and distribution to keep your NAP consistent",
  "Schema suggestions to strengthen GBP and boost local rankings",
  "Review alerts and monitoring",
  "FAQs and menu or service buildout",
  "Reviews link and QR code",
  "Reporting and audits",
];

const advancedFeatures = [
  "Everything in Basic, plus:",
  "Keyword tracking up to 15 words",
  "Review responses up to 5 per month",
  "1 Google Business Profile post monthly",
  "1 review generation email per quarter",
];

const professionalFeatures = [
  "Everything in Advanced, plus:",
  "Review responses up to 10 per month",
  "1–2 additional listings and citations",
  "2 Google Business Profile posts monthly",
];

const listingExamples = [
  "Google Business Profile",
  "Apple Maps",
  "Bing Places",
  "TripAdvisor",
  "Angi",
];

const citationExamples = [
  "YellowPages.com",
  "Chamber of Commerce directories",
  "Local business directories",
  "Industry directories",
  "Data aggregators such as Foursquare, Data Axle, and Neustar Localeze",
];

const LocalSEOPlans = () => {
  useEffect(() => {
    document.title = "Local SEO Plans — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-teal-gradient pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            Winning Local Search
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
            Show up where your customers are searching. Our Local SEO plans help you earn trust,
            visibility, and clicks on Google.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* How People Choose */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3"><Users className="h-8 w-8 text-accent shrink-0" /> How People Choose a Local Business</h2>
          <p className="text-muted-foreground leading-relaxed">
            Discovery happens in many places such as radio, social media, word of mouth, and more,
            but people often make their final decision in Google.
          </p>
          <ul className="space-y-2 text-muted-foreground pl-4">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Google's search engine holds 90% market share and 95% on mobile worldwide.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              The average user conducts 3 to 4 searches per day, with Gen Z exceeding 5 searches daily.
            </li>
          </ul>
        </section>

        {/* Not Visible */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <EyeOff className="h-8 w-8 text-accent shrink-0" /> If You're Not Visible in Google, You're Not an Option
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Customers search for businesses like yours every day from relevant, location-based
            searches, particularly on Google Maps and search engine results pages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our Local SEO work focuses on your Google Business Profile, so you show up in "near me"
            queries.
          </p>
        </section>

        {/* Map Pack */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Map className="h-8 w-8 text-accent shrink-0" /> The Map Pack: You Can Pay for Visibility or Earn It
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">Paid Placement</h3>
              <p className="mb-3 text-sm text-muted-foreground">Google Ads, including:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Local Service Ads
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Google Text Ads with local extensions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Performance Max
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">Trusted Organic Placement</h3>
              <p className="text-sm text-muted-foreground">Map Pack placement</p>
            </div>
          </div>
        </section>

        {/* AI Trusts */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3"><Bot className="h-8 w-8 text-accent shrink-0" /> AI Recommends Businesses It Trusts</h2>
          <p className="text-muted-foreground leading-relaxed">
            AI recommends businesses it trusts. It builds that trust from:
          </p>
          <ul className="space-y-2 text-muted-foreground pl-4">
            {["Reviews", "Listings", "Mentions"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Consistency */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-accent shrink-0" /> Consistency Builds Trust and Authority
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your business information needs to match across your website and listings. That includes your:
          </p>
          <ul className="space-y-2 text-muted-foreground pl-4">
            {["Business name", "Address", "Phone number", "Website", "Description"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold text-foreground">What Matters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Listings help with accuracy
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Reviews help build trust
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Google Business Profile is your primary source for local search visibility
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Something as minor as "LLC" appearing in one listing but not another can weaken
            credibility with search engines and AI.
          </p>
        </section>

        {/* Reviews */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Star className="h-8 w-8 text-accent shrink-0" /> Businesses With More and Better Reviews Get More Clicks, Even if They're Not #1
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Reviews are one of the strongest trust signals in local search.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            They help customers feel confident choosing your business, and they can influence clicks
            even when another business ranks above you.
          </p>
        </section>

        {/* Signals */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Signal className="h-8 w-8 text-accent shrink-0" /> We Build the Signals Google and AI Trust
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We focus on the signals that help your business earn trust and visibility:
          </p>
          <ul className="space-y-2 text-muted-foreground pl-4">
            {[
              "Google Business Profile visibility",
              "NAP listing accuracy",
              "Consistency everywhere Google looks",
              "Review support to build trust and drive clicks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* QR / Reviews */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <QrCode className="h-8 w-8 text-accent shrink-0" /> We Make It Easier for Your Customers to Leave Reviews
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We can create a QR code with a direct Google Business Profile link so you can send it to
            customers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We also monitor your reviews so you know when someone leaves feedback.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Advanced and Professional plans include review responses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We can also send an email to your customer list, provided by you, to help generate
            Google reviews. This is included once per quarter for Advanced and Professional plans.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3"><CreditCard className="h-8 w-8 text-accent shrink-0" /> Local SEO Plans</h2>
            <p className="mt-2 text-lg text-muted-foreground">Choose the plan that fits your goals</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We help your business stand out in local search by increasing visibility, building trust,
              and driving more customer action from Google.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-foreground">Basic</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Establishes your presence and accuracy.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground">$250</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 flex-1">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Annual contract. Early termination will result in billing for expenses and work
                completed.
              </p>
            </div>

            {/* Advanced */}
            <div className="rounded-2xl border-2 border-accent bg-card p-8 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warm-gradient px-4 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </span>
              <h3 className="text-2xl font-bold text-foreground">Advanced</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Improves visibility and engagement.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground">$450</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 flex-1">
                {advancedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Annual contract. Early termination will result in billing for expenses and work
                completed.
              </p>
            </div>

            {/* Professional */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-foreground">Professional</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Builds authority and outperforms competitors.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground">$750</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 flex-1">
                {professionalFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Annual contract. Early termination will result in billing for expenses and work
                completed.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            We help your business stand out in local search by increasing visibility, building trust,
            and driving more customer action from Google.
          </p>
        </section>

        {/* Appendix */}
        <section className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3"><BookOpen className="h-8 w-8 text-accent shrink-0" /> Appendix</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">
                Listings Are Profiles
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">Listings can include:</p>
              <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground">
                {["Business description", "Photos", "Reviews", "Hours", "Website link", "Directions"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mb-2 text-sm font-semibold text-foreground">Examples:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {listingExamples.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-foreground">
                Citations Are Mentions
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">Examples include:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {citationExamples.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Summary */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-center">
            Local SEO Investment Summary
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Basic", monthly: "$250", annual: "$3,000" },
              { name: "Advanced", monthly: "$450", annual: "$5,400" },
              { name: "Professional", monthly: "$750", annual: "$9,000" },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-foreground">{plan.monthly}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <p className="text-sm text-muted-foreground">{plan.annual}/year</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Must have a Google Business Profile.
          </p>
        </section>
      </div>

      <FeatureGuide features={features} />
    </div>
  );
};

export default LocalSEOPlans;
