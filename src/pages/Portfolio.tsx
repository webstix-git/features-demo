import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import SalesRepBubble from "@/components/SalesRepBubble";

const packages = [
  {
    name: "Bali Bliss",
    dest: "Bali, Indonesia",
    img: "https://picsum.photos/seed/balipkg/800/500",
    duration: "10 Days / 9 Nights",
    price: "£2,499",
    includes: ["5-star resort stay", "Private temple tours", "Spa & wellness retreat", "Surf lessons", "Airport transfers"],
    highlights: "Immerse yourself in Balinese culture with private guided tours, world-class spa treatments, and stunning rice terrace treks.",
  },
  {
    name: "Greek Island Explorer",
    dest: "Santorini & Mykonos",
    img: "https://picsum.photos/seed/greecepkg/800/500",
    duration: "12 Days / 11 Nights",
    price: "£3,299",
    includes: ["Boutique hotel stays", "Catamaran cruise", "Wine tasting tour", "Ferry transfers", "Guided walking tours"],
    highlights: "Island-hop through the Aegean with luxury stays, private sunset cruises, and authentic Greek culinary experiences.",
  },
  {
    name: "Alpine Adventure",
    dest: "Swiss Alps",
    img: "https://picsum.photos/seed/swisspkg/800/500",
    duration: "7 Days / 6 Nights",
    price: "£2,899",
    includes: ["Mountain lodge accommodation", "Guided hikes", "Scenic train passes", "Fondue dinner experience", "Ski passes (winter)"],
    highlights: "Conquer stunning alpine trails, ride the world's most scenic railways, and unwind in cozy mountain lodges.",
  },
];

const pastTrips = [
  { name: "Maldives Honeymoon", img: "https://picsum.photos/seed/past1/600/400", desc: "A romantic overwater villa experience for two" },
  { name: "Japan Cultural Tour", img: "https://picsum.photos/seed/past2/600/500", desc: "14 days through Tokyo, Kyoto, and Osaka" },
  { name: "African Safari", img: "https://picsum.photos/seed/past3/600/450", desc: "Big Five adventure in Kenya and Tanzania" },
  { name: "Amalfi Coast Road Trip", img: "https://picsum.photos/seed/past4/600/380", desc: "Coastal drives and Italian cuisine" },
  { name: "Patagonia Trek", img: "https://picsum.photos/seed/past5/600/420", desc: "Glaciers and granite peaks in South America" },
  { name: "Morocco Discovery", img: "https://picsum.photos/seed/past6/600/350", desc: "From Marrakech souks to Sahara dunes" },
];

const Portfolio = () => (
  <div className="min-h-screen pt-16">
    <section className="border-b border-border bg-secondary/30 py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Our Packages</p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up-delay-1">Curated Travel Experiences</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
          Handcrafted itineraries designed for unforgettable adventures. Every detail planned, every moment savored.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-12">
        {packages.map((pkg, i) => (
          <div key={pkg.name} className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-card md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/2">
              <img src={pkg.img} alt={pkg.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">{pkg.dest}</span>
              <h3 className="mb-2 text-2xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{pkg.highlights}</p>
              <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-primary" /> {pkg.duration}</span>
                <span className="text-lg font-bold text-primary">{pkg.price}<span className="text-xs font-normal text-muted-foreground"> / person</span></span>
              </div>
              <ul className="mb-6 space-y-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                Book This Trip <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold text-foreground">Past Trip Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pastTrips.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-xl border border-border">
              <img src={t.img} alt={t.name} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/70 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-lg font-bold text-primary-foreground">{t.name}</h4>
                <p className="text-sm text-primary-foreground/80">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SalesRepBubble feature="Packages / Portfolio" tip="Use the results-driven layout for clients selling services — it builds trust with specifics. The visual gallery with hover descriptions works great for creative agencies showcasing past work." />
  </div>
);

export default Portfolio;
