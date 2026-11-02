import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, PenTool, Palette, RefreshCw, Wrench, Store, Briefcase, CalendarDays, Sparkles, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IMG = "/images/display-creative";
const TAN = "bg-[#f8f1ec]";
const WHITE = "bg-[#ffffff]";
const GRAY = "bg-[#f4f2f1]";

const handle = [
  { icon: Target, title: "Creative Strategy", text: "We learn your audience and goals so every ad design supports the campaign you’re running" },
  { icon: PenTool, title: "Ad Design", text: "Professional display ads in every standard size and format" },
  { icon: Palette, title: "Brand Consistency", text: "Every ad matches your brand identity across every size and placement" },
  { icon: RefreshCw, title: "Revisions", text: "Built-in revision rounds so the final creative is exactly right before launch" },
];

const formats = [
  { img: "business-static.jpg", label: "AD: Business Consulting", title: "Static banner ads", text: "300×250, 728×90, 160×600, 300×50, 320×50" },
  { img: "pizza-design-set-336x280-px.gif", label: "AD: Food Door", title: "Animated / GIF banner ads", text: "Motion that catches the eye without being intrusive" },
  { img: "social-beauty.jpg", label: "AD: Makeup Brand", title: "Social image ads", text: "1080×1080 static creative with ad copy" },
  { img: "business-mock.jpg", label: "AD: Business Consulting", title: "Custom sizes", text: "Built to match your specific platform requirements" },
];

const placements = [
  { img: "team-mockups.jpg", alt: "Team reviewing marketing mockups", title: "Website banner placements", text: "Publisher networks, industry sites, local news sites" },
  { img: "display-network.jpg", alt: "Digital display ads", title: "Native ad placements", text: "Designed to blend naturally into web content feeds" },
  { img: "retargeting.jpg", alt: "Red target block among cubes", title: "Retargeting creative", text: "Built for use across your existing website visitor audiences" },
];

const steps = [
  { title: "Discovery Call", text: "We learn about your brand, your audience, and the campaign your ads need to support. No pressure, just a conversation about what you’re trying to achieve." },
  { title: "Creative Direction", text: "We recommend the ad formats, sizes, and creative approach that fit your goals and your platform’s requirements." },
  { title: "Design & Revisions", text: "We design your ad creative and refine it with you through the included revision rounds until it’s ready to launch." },
  { title: "Final Delivery", text: "You receive every approved ad file, correctly sized and formatted, ready to hand off to your team, your media buyer, or your ad platform of choice." },
];

const concepts = [
  ["christmas-ad.gif", "AD: Craft Holiday Offer"],
  ["beauty.jpg", "AD: Makeup Brand"],
  ["linka-728x90-1-display-design-set-728x90-px.gif", "AD: Linka Messaging"],
  ["media-728x90-px.gif", "AD: Media Communication"],
  ["motivation-1200x1200-px.gif", "AD: Motivation"],
  ["sport-300x250-px.gif", "AD: Sports Brand – Score Flow"],
  ["mavis.gif", "AD: Mavis Furniture"],
  ["happy-days-970x250-px.gif", "AD: Happy Days, Early Education and Preschool"],
  ["flyway-fence-company_td_mayjune__-728x90-px.gif", "300×250, 728×90, 160×600"],
  ["rolling-embers_ad_1c-728x90-px.gif", "300×250, 728×90, 160×600"],
  ["gaming_gen_creatives_example-300x250-px-2.gif", "300×250, 728×90, 160×600"],
  ["semper_gumby_nov_displayad_-300x250-px.gif", "300×250, 728×90, 160×600"],
  ["kevin-decker-campaign_ad_1_-300x250-px.gif", "300×250, 728×90, 160×600"],
  ["honest-abe-roofing_a2_example-970x250-px.gif", "300×250, 728×90, 160×600"],
];

const packages = [
  { name: "Social Image", price: "40", desc: "1080×1080 static image with ad copy", rows: [["Format", "1 static image"]] },
  { name: "Static Banner Bundle", price: "90", desc: "5 standard sizes", rows: [["Revisions included", "2"], ["Each extra revision", "$20"]] },
  { name: "Animated GIF Banner Bundle", price: "110", desc: "5 standard sizes", rows: [["Revisions included", "2"], ["Each extra revision", "$50"]] },
];

const audiences = [
  { icon: Wrench, title: "Local service businesses", text: "Plumbers, HVAC, electricians, dentists, lawyers, chiropractors" },
  { icon: Store, title: "Retail & restaurants", text: "Promoting sales, new locations, or seasonal menus" },
  { icon: Briefcase, title: "B2B companies", text: "Needing on-brand creative for a specific campaign" },
  { icon: CalendarDays, title: "Event promoters", text: "Building awareness quickly with professional ad creative" },
  { icon: Sparkles, title: "New businesses", text: "Needing a first set of display ads while their brand is taking shape" },
];

const faqs = [
  ["Do you place and manage the ad campaigns, or just design the creative?", "We focus on creative, professional, on-brand display ads designed to spec for your campaign. Media placement, targeting setup, and campaign management are handled by you or your media/advertising partner."],
  ["Can you help me figure out where to run these ads?", "We can offer general guidance based on your goals, but media buying and placement decisions are outside our service, we’d recommend a media buyer or ad platform for that part."],
  ["What sizes and formats do you deliver?", "All standard IAB display sizes, plus custom sizes on request, in static and animated formats."],
  ["Do I need a new website?", "No. But the page people land on matters a lot. If your current site doesn’t convert visitors into leads, we can help, we design landing pages built specifically for ad campaigns."],
  ["How long does creative take?", "Most creative packages are delivered within 1–2 business days, depending on revisions."],
  ["Who owns the final ad files?", "You do, once the project is paid for, every approved file is yours to use however and wherever you’d like."],
  ["What's the difference between Display Ads and Google Search Ads?", "Google Search Ads capture existing demand, someone searches “plumber near me” and your ad appears. Display ads create demand, they put your business in front of people before they search. They work well together, though Webstix’s role here is the display creative, not the search campaign."],
];

const CTA = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <Link
    to="/contact"
    className={`inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
      light ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
    }`}
  >
    {children} <ArrowRight className="h-4 w-4" />
  </Link>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</span>
);

const TargetedDisplayCreative = () => {
  useEffect(() => {
    document.title = "Targeted Display Creative — Summit Builders Co.";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Professionally designed display ads, built to spec for the web and ready to launch. View formats, pricing, and FAQs.");
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-teal-gradient py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Targeted Display Creative</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
              Professionally Designed Display Ads, Built for the Web, Ready to Launch
            </h1>
            <p className="mb-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Targeted display ads put your business on the websites your ideal customers already visit. We design the ad creative: banners, native ads, and animated formats, built to spec for the platforms and placements you’re running on.
            </p>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              You bring the strategy and the media plan (or your ad platform/agency partner). We get you the creative that actually gets noticed.
            </p>
            <CTA light>Get a Free Creative Quote</CTA>
          </div>
          <div className="relative">
            <img src={`${IMG}/remote-work.jpg`} alt="Remote work devices showing an online event display ad" width={800} height={600} className="w-full rounded-2xl object-cover shadow-2xl" />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">AD: Online Event Banner</span>
            <img src={`${IMG}/meeting.jpg`} alt="Woman presenting at a whiteboard" width={400} height={300} className="absolute -bottom-10 -left-6 hidden w-1/2 rounded-xl border-4 border-background object-cover shadow-xl md:block" />
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className={`${WHITE} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">What We Handle</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {handle.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${TAN} rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-1`}>
                <Icon className="mb-5 h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className={`${TAN} py-24`}>
        <div className="container mx-auto px-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">The Digital Advertising Ecosystem, Explained</p>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Ad Formats We Design</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formats.map((f) => (
              <div key={f.title} className="overflow-hidden rounded-2xl bg-card shadow-md">
                <img src={`${IMG}/${f.img}`} alt={`${f.title} example`} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <Caption>{f.label}</Caption>
                  <h3 className="mb-1 mt-2 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className={`${WHITE} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Where Your Ads Are Designed to Run</h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">We design display creative for the web-based placements your business actually uses:</p>
          <div className="grid gap-8 md:grid-cols-3">
            {placements.map((p) => (
              <div key={p.title}>
                <img src={`${IMG}/${p.img}`} alt={p.alt} width={600} height={400} loading="lazy" className="mb-5 aspect-[3/2] w-full rounded-2xl object-cover" />
                <h3 className="mb-1 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${GRAY} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-card p-7 shadow-sm">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">{i + 1}</span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* It's Yours */}
      <section className="bg-teal-gradient py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">It’s Yours</h2>
          <p className="text-lg leading-relaxed text-primary-foreground/85">
            Once your project is complete and paid for, <strong className="text-primary-foreground">you have an unrestricted license from us to every final creative file,</strong> no restrictions and you can do what you want with it. It is ready to launch wherever your campaign runs. We still maintain authoring rights, technically, but we give you a full license to use or modify the creative as you wish.
          </p>
        </div>
      </section>

      {/* Concepts */}
      <section className={`${WHITE} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Advertising Design Concepts</h2>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {concepts.map(([img, label]) => (
              <figure key={img} className={`${GRAY} mb-6 break-inside-avoid overflow-hidden rounded-2xl p-4`}>
                <img src={`${IMG}/${img}`} alt={label.startsWith("AD:") ? label.replace("AD: ", "") + " display ad" : "Animated display ad example"} loading="lazy" className="w-full rounded-lg" />
                <figcaption className="mt-3"><Caption>{label}</Caption></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center"><CTA>Get a Free Creative Quote</CTA></div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`${TAN} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Pricing</h2>
          <h3 className="mb-10 text-xl font-semibold text-muted-foreground">Creative Packages</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl bg-card p-8 shadow-md">
                <h4 className="mb-4 text-lg font-semibold text-foreground">{p.name}</h4>
                <p className="mb-2 text-5xl font-bold text-primary"><span className="align-top text-2xl">$</span>{p.price}</p>
                <p className="mb-6 text-muted-foreground">{p.desc}</p>
                <dl className="mt-auto space-y-3 border-t border-border pt-5">
                  {p.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <dt className="text-muted-foreground">{k}</dt><dd className="font-semibold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <h3 className="mb-6 mt-14 text-xl font-semibold text-muted-foreground">Add-ons</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Additional creative refresh", "A new take on your existing campaign", "$300", "per new ad set"],
              ["Landing page design / build", "Final price depends on scope", "$1,200–$3,000", ""],
            ].map(([t, d, price, unit]) => (
              <div key={t} className="flex items-center justify-between gap-4 rounded-2xl bg-card p-7 shadow-sm">
                <div className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div><h4 className="font-semibold text-foreground">{t}</h4><p className="text-sm text-muted-foreground">{d}</p></div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">{price}</p>
                  {unit && <p className="text-xs text-muted-foreground">{unit}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10"><CTA>Get Started</CTA></div>
        </div>
      </section>

      {/* Who */}
      <section className={`${WHITE} py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Who This Is For</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${GRAY} rounded-2xl p-6`}>
                <Icon className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`${GRAY} py-24`}>
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-3">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">FAQs</p>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
            <CTA>Ask Us Anything</CTA>
          </div>
          <Accordion type="single" collapsible className="lg:col-span-2">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`f${i}`} className="mb-3 rounded-xl border-none bg-card px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground">{q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-gradient py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Get Professional Display Ad Creative?</h2>
          <p className="mb-8 text-lg text-primary-foreground/80">Tell us about your brand, your goals, and the sizes you need, we’ll put together a creative package that fits.</p>
          <CTA light>Get a Free Creative Quote</CTA>
        </div>
      </section>
    </div>
  );
};

export default TargetedDisplayCreative;
