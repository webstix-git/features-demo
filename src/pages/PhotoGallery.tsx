import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Home, Star } from "lucide-react";
import FeatureGuide from "@/components/FeatureGuide";

const projects = [
  { name: "The Oakwood Estate", img: "https://picsum.photos/seed/gal1/800/600", desc: "4-bed custom home with wrap-around porch and chef's kitchen.", tag: "Custom Home", height: 320, rating: 4.9 },
  { name: "Riverside Modern", img: "https://picsum.photos/seed/gal2/800/600", desc: "Sleek modern design with floor-to-ceiling windows overlooking the river.", tag: "Modern", height: 400, rating: 4.8 },
  { name: "Cedar Ridge Villa", img: "https://picsum.photos/seed/gal3/800/600", desc: "Luxury hillside villa with infinity pool and wine cellar.", tag: "Luxury", height: 280, rating: 5.0 },
  { name: "The Hartford", img: "https://picsum.photos/seed/gal4/800/600", desc: "Classic colonial revival with modern interior finishes.", tag: "Traditional", height: 360, rating: 4.7 },
  { name: "Sunset Terrace", img: "https://picsum.photos/seed/gal5/800/600", desc: "Contemporary build with rooftop terrace and smart home features.", tag: "Contemporary", height: 300, rating: 4.9 },
  { name: "Maple Grove Cottage", img: "https://picsum.photos/seed/gal6/800/600", desc: "Charming 3-bed cottage with stone fireplace and garden.", tag: "Cottage", height: 420, rating: 4.8 },
  { name: "The Kensington", img: "https://picsum.photos/seed/gal7/800/600", desc: "Georgian-style mansion with grand foyer and library.", tag: "Luxury", height: 340, rating: 4.9 },
  { name: "Lakeview Retreat", img: "https://picsum.photos/seed/gal8/800/600", desc: "Lakefront property with dock, boathouse, and open-plan living.", tag: "Custom Home", height: 380, rating: 4.6 },
  { name: "The Willowbrook", img: "https://picsum.photos/seed/gal9/800/600", desc: "Farmhouse style with reclaimed wood accents and barn doors.", tag: "Farmhouse", height: 290, rating: 4.8 },
];

const features = [
  { module: "Gallery Option A — Masonry Grid", description: "A Pinterest-style masonry layout with varying image heights. Clicking opens a lightbox overlay with navigation.", reasons: ["Masonry creates visual variety and interest", "Lightbox lets visitors view full-size images without leaving the page", "Great for portfolios, real estate, and creative industries"] },
  { module: "Gallery Option B — Carousel", description: "A hero-size carousel with thumbnail strip below. One image at a time, focused viewing experience.", reasons: ["Carousel creates a curated, editorial feel", "Thumbnail strip lets visitors jump to specific images", "Best for product showcases and featured collections"] },
];

const PhotoGallery = () => {
  const [option, setOption] = useState<"A" | "B">("A");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    document.title = "Gallery — Summit Builders Co.";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gallhero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in-up">Our Work</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Project Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            Browse our portfolio of custom homes, renovations, and commercial builds.
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
              Gallery Option {o}
            </button>
          ))}
        </div>
      </div>

      {option === "A" ? (
        /* Option A: Masonry Grid */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="columns-2 gap-5 md:columns-3">
              {projects.map((d, i) => (
                <div
                  key={d.name}
                  className="group mb-5 cursor-pointer overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                  onClick={() => { setLightboxIdx(i); setLightboxOpen(true); }}
                >
                  <div className="relative overflow-hidden">
                    <img src={d.img} alt={d.name} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" style={{ height: d.height }} loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">{d.tag}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="flex items-center gap-1.5 text-sm font-bold text-foreground"><Home className="h-3.5 w-3.5 text-accent" /> {d.name}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-xs text-muted-foreground">{d.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
              <div className="relative">
                <img src={projects[lightboxIdx]?.img} alt={projects[lightboxIdx]?.name} className="w-full rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-primary-foreground">{projects[lightboxIdx]?.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{projects[lightboxIdx]?.desc}</p>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={() => setLightboxIdx((p) => (p - 1 + projects.length) % projects.length)} className="ml-2 rounded-full bg-card/80 p-2.5 text-foreground backdrop-blur-sm hover:bg-card shadow-md">
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={() => setLightboxIdx((p) => (p + 1) % projects.length)} className="mr-10 rounded-full bg-card/80 p-2.5 text-foreground backdrop-blur-sm hover:bg-card shadow-md">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      ) : (
        /* Option B: Carousel */
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <div className="relative">
                  <img src={projects[carouselIdx].img} alt={projects[carouselIdx].name} className="aspect-video w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-8">
                    <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{projects[carouselIdx].tag}</span>
                    <h3 className="text-2xl font-bold text-primary-foreground">{projects[carouselIdx].name}</h3>
                    <p className="text-sm text-primary-foreground/80">{projects[carouselIdx].desc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2">
                {projects.map((d, i) => (
                  <button
                    key={d.name}
                    onClick={() => setCarouselIdx(i)}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${i === carouselIdx ? "border-accent ring-2 ring-accent/30 scale-105" : "border-transparent opacity-50 hover:opacity-100"}`}
                  >
                    <img src={d.img} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <FeatureGuide features={features} />
    </div>
  );
};

export default PhotoGallery;