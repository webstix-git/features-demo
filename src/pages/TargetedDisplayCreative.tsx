import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, PenTool, Palette, RefreshCw, MapPin, ShoppingCart, Briefcase, CalendarDays, Sparkles } from "lucide-react";

const IMG = "/images/display-creative";
const TAN = "bg-[#f8f1ec]";
const WHITE = "bg-[#ffffff]";
const GRAY = "bg-[#f4f2f1]";
const RED = "bg-[#a6192e]";
const RED_TEXT = "text-[#a6192e]";

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

const audiences = [
  { icon: MapPin, title: "Local service businesses", text: "Plumbers, HVAC, electricians, dentists, lawyers, chiropractors" },
  { icon: ShoppingCart, title: "Retail & restaurants", text: "Promoting sales, new locations, or seasonal menus" },
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

const Pill = ({ children, variant = "red" }: { children: React.ReactNode; variant?: "red" | "white" }) => (
  <Link
    to="/contact"
    className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-medium transition-all duration-200 hover:-translate-y-0.5 ${
      variant === "red" ? `${RED} text-primary-foreground hover:opacity-90` : "bg-[#ffffff] text-foreground hover:bg-muted"
    }`}
  >
    {children} {variant === "red" && <ArrowRight className="h-4 w-4" />}
  </Link>
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
    <div className="min-h-screen bg-[#ffffff]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-[#111111]">
        <img src={`${IMG}/display-network.jpg`} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative container mx-auto px-4 py-24 text-center md:py-28">
          <h1 className="text-4xl font-medium text-primary-foreground md:text-5xl">Targeted Display Creative</h1>
        </div>
      </section>
      <nav aria-label="Breadcrumb" className="border-b border-border">
        <div className="container mx-auto px-4 py-3 text-muted-foreground">
          <Link to="/" className={`${RED_TEXT} underline`}>Home</Link> | <Link to="/sitemap" className={`${RED_TEXT} underline`}>Services</Link> | Targeted Display Creative
        </div>
      </nav>

      {/* Intro */}
      <section className="border-b border-border py-20 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 text-3xl font-medium leading-tight text-foreground md:text-[2.5rem]">
              <span className={RED_TEXT}>Professionally Designed Display Ads,</span> Built for the Web, Ready to Launch
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Targeted display ads put your business on the websites your ideal customers already visit. We design the ad creative: banners, native ads, and animated formats, built to spec for the platforms and placements you’re running on.
            </p>
            <div className={`${TAN} rounded-r-lg border-l-4 border-[#a6192e] px-8 py-6 font-medium leading-relaxed text-foreground`}>
              You bring the strategy and the media plan (or your ad platform/agency partner). We get you the creative that actually gets noticed.
            </div>
          </div>
          <figure>
            <img src={`${IMG}/remote-work.jpg`} alt="Remote work devices showing an online event display ad" width={800} height={600} className="w-full rounded-3xl object-cover" />
            <figcaption className="mt-6 pl-8 text-sm text-muted-foreground">AD: Online Event Banner</figcaption>
          </figure>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <img src={`${IMG}/meeting.jpg`} alt="Woman presenting ad concepts at a whiteboard" width={800} height={600} loading="lazy" className="w-full rounded-3xl object-cover" />
          <div>
            <h2 className="mb-6 text-3xl font-medium text-foreground md:text-4xl">What We <span className={RED_TEXT}>Handle</span></h2>
            <ul>
              {handle.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className={`flex gap-6 py-6 ${i < handle.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted-foreground text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-medium text-foreground">{title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-gradient-to-b from-[#111111] to-[#2a2a2a] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-medium text-primary-foreground md:text-4xl">The Digital Advertising Ecosystem, Explained</h2>
          <div className="mx-auto aspect-video max-w-6xl overflow-hidden">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/NB3YO598ZOI"
              title="Ad Tech Explained"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className={`${TAN} py-20 md:py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-medium text-foreground md:text-4xl">Ad Formats We Design</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {formats.map((f) => (
              <div key={f.title} className="overflow-hidden rounded-3xl border border-border bg-[#ffffff]">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted p-4">
                  <img src={`${IMG}/${f.img}`} alt={`${f.title} example`} loading="lazy" className="h-auto max-h-full w-auto max-w-full object-contain" />
                </div>
                <div className="p-8">
                  <p className="mb-2 text-sm text-muted-foreground">{f.label}</p>
                  <h3 className="mb-3 text-xl font-medium text-foreground">{f.title.replace(/\b\w/g, (c) => c.toUpperCase())}</h3>
                  <p className="text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-medium text-foreground md:text-4xl">Where Your Ads Are Designed to Run</h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">We design display creative for the web-based placements your business actually uses:</p>
          <div className="grid gap-8 md:grid-cols-3">
            {placements.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-3xl border border-border">
                <img src={`${IMG}/${p.img}`} alt={p.alt} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-8">
                  <h3 className="mb-3 text-xl font-medium text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${GRAY} py-20 md:py-24`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-medium text-foreground md:text-4xl">How It Works</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-[#ffffff] p-8">
                <span className="mb-6 block text-6xl font-bold text-muted-foreground">{i + 1}</span>
                <h3 className="mb-5 text-xl font-medium text-foreground">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* It's Yours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`${RED} mx-auto grid max-w-6xl items-center gap-10 rounded-3xl px-8 py-12 md:grid-cols-[1fr_auto] md:px-20`}>
            <div>
              <h2 className="mb-5 text-3xl font-medium text-primary-foreground md:text-4xl">It’s Yours</h2>
              <p className="text-lg leading-relaxed text-primary-foreground">
                Once your project is complete and paid for, <strong>you have an unrestricted license from us to every final creative file,</strong> no restrictions and you can do what you want with it. It is ready to launch wherever your campaign runs. We still maintain authoring rights, technically, but we give you a full license to use or modify the creative as you wish.
              </p>
            </div>
            <img src={`${IMG}/magnetic.svg`} alt="" aria-hidden="true" width={200} height={200} className="mx-auto w-40 md:w-52" />
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="pb-20 pt-8 md:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-medium text-foreground md:text-5xl">Advertising Design Concepts</h2>
          <div className="columns-1 gap-6 md:columns-2">
            {concepts.map(([img, label]) => (
              <figure key={img} className={`${GRAY} mb-6 break-inside-avoid rounded-xl p-3 text-center`}>
                <img src={`${IMG}/${img}`} alt={label.startsWith("AD:") ? label.replace("AD: ", "") + " display ad" : "Animated display ad example"} loading="lazy" className="mx-auto h-auto w-auto max-w-full" />
                <figcaption className="mt-4 pb-2 text-sm text-muted-foreground">{label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center"><Pill>Get a Free Creative Quote</Pill></div>
        </div>
      </section>

      {/* Who */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-medium text-foreground md:text-4xl">Who This Is For</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${TAN} rounded-2xl border border-border p-8`}>
                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-[#ffffff]">
                  <Icon className={`h-8 w-8 ${RED_TEXT}`} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mb-4 text-xl font-medium text-foreground">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`${GRAY} py-20 md:py-24`}>
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[2fr_3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className={`mb-4 text-sm font-semibold uppercase tracking-widest ${RED_TEXT}`}>FAQs</p>
            <h2 className="mb-8 text-3xl font-medium text-foreground md:text-4xl">Frequently Asked Questions</h2>
            <Pill>Ask Us Anything</Pill>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-xl bg-[#ffffff] p-6">
                <h3 className="mb-4 text-lg font-medium text-foreground">{q}</h3>
                <p className="leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${RED} py-16`}>
        <div className="container mx-auto flex flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-3xl font-medium text-primary-foreground md:text-4xl">Ready to Get Professional Display Ad Creative?</h2>
            <p className="text-lg text-primary-foreground/85">Tell us about your brand, your goals, and the sizes you need, we’ll put together a creative package that fits.</p>
          </div>
          <Pill variant="white">Get a Free Creative Quote</Pill>
        </div>
      </section>
    </div>
  );
};

export default TargetedDisplayCreative;
