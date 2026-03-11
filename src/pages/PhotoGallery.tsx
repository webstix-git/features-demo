import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SalesRepBubble from "@/components/SalesRepBubble";

const destinations = [
  { name: "Bali, Indonesia", img: "https://picsum.photos/seed/bali2/800/600", desc: "Lush rice terraces, ancient temples, and vibrant culture.", tag: "Tropical", height: 320 },
  { name: "Santorini, Greece", img: "https://picsum.photos/seed/santo2/800/600", desc: "Iconic blue domes and breathtaking Aegean sunsets.", tag: "Islands", height: 400 },
  { name: "Maldives", img: "https://picsum.photos/seed/mald2/800/600", desc: "Crystal-clear waters and overwater luxury villas.", tag: "Luxury", height: 280 },
  { name: "Swiss Alps", img: "https://picsum.photos/seed/swiss2/800/600", desc: "Snow-capped peaks, alpine meadows, and world-class skiing.", tag: "Adventure", height: 360 },
  { name: "Tokyo, Japan", img: "https://picsum.photos/seed/tokyo2/800/600", desc: "A captivating blend of ultramodern and traditional.", tag: "Culture", height: 300 },
  { name: "Amalfi Coast, Italy", img: "https://picsum.photos/seed/amalfi2/800/600", desc: "Dramatic coastal cliffs with pastel-coloured villages.", tag: "Romantic", height: 420 },
  { name: "Machu Picchu, Peru", img: "https://picsum.photos/seed/machu/800/600", desc: "Ancient Incan citadel set high in the Andes Mountains.", tag: "Adventure", height: 340 },
  { name: "Marrakech, Morocco", img: "https://picsum.photos/seed/marra/800/600", desc: "Vibrant souks, stunning palaces, and aromatic spice markets.", tag: "Culture", height: 380 },
  { name: "Patagonia, Argentina", img: "https://picsum.photos/seed/pata/800/600", desc: "Untamed wilderness with glaciers and towering granite peaks.", tag: "Adventure", height: 290 },
];

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Explore the World</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up-delay-1">Our Destinations</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay-2">
            From tropical paradises to alpine adventures — discover the destinations we've handpicked for unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">All Destinations</h2>
          <div className="columns-2 gap-4 md:columns-3">
            {destinations.map((d, i) => (
              <div
                key={d.name}
                className="group mb-4 cursor-pointer overflow-hidden rounded-xl border border-border transition-transform hover:scale-[1.02]"
                onClick={() => { setLightboxIdx(i); setLightboxOpen(true); }}
              >
                <div className="relative">
                  <img src={d.img} alt={d.name} className="w-full object-cover" style={{ height: d.height }} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mb-1 inline-block rounded-full bg-primary/90 px-2 py-0.5 text-xs font-medium text-primary-foreground">{d.tag}</span>
                    <p className="text-sm font-semibold text-primary-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {d.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <div className="relative">
            <img src={destinations[lightboxIdx]?.img} alt={destinations[lightboxIdx]?.name} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-primary-foreground">{destinations[lightboxIdx]?.name}</h3>
              <p className="text-sm text-primary-foreground/80">{destinations[lightboxIdx]?.desc}</p>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={() => setLightboxIdx((p) => (p - 1 + destinations.length) % destinations.length)} className="ml-2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={() => setLightboxIdx((p) => (p + 1) % destinations.length)} className="mr-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Featured Carousel */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Featured Destinations</h2>
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="relative">
                <img src={destinations[carouselIdx].img} alt={destinations[carouselIdx].name} className="aspect-video w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                  <span className="mb-1 inline-block rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">{destinations[carouselIdx].tag}</span>
                  <h3 className="text-xl font-bold text-primary-foreground">{destinations[carouselIdx].name}</h3>
                  <p className="text-sm text-primary-foreground/80">{destinations[carouselIdx].desc}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {destinations.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setCarouselIdx(i)}
                  className={`h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${i === carouselIdx ? "border-primary ring-2 ring-primary/30" : "border-border opacity-60 hover:opacity-100"}`}
                >
                  <img src={d.img} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SalesRepBubble feature="Photo Gallery" tip="Use the Masonry Grid layout for clients needing visual density (real estate, portfolios). The Carousel is better for e-commerce and product-focused brands wanting a curated, sequential experience. Both increase dwell time by up to 3x." />
    </div>
  );
};

export default PhotoGallery;
