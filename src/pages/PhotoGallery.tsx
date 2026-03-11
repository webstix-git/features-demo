import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

const destinations = [
  { name: "Bali, Indonesia", img: "https://picsum.photos/seed/bali2/800/600", desc: "Lush rice terraces, ancient temples, and vibrant culture.", tag: "Tropical", height: 320, rating: 4.9 },
  { name: "Santorini, Greece", img: "https://picsum.photos/seed/santo2/800/600", desc: "Iconic blue domes and breathtaking Aegean sunsets.", tag: "Islands", height: 400, rating: 4.8 },
  { name: "Maldives", img: "https://picsum.photos/seed/mald2/800/600", desc: "Crystal-clear waters and overwater luxury villas.", tag: "Luxury", height: 280, rating: 5.0 },
  { name: "Swiss Alps", img: "https://picsum.photos/seed/swiss2/800/600", desc: "Snow-capped peaks, alpine meadows, and world-class skiing.", tag: "Adventure", height: 360, rating: 4.7 },
  { name: "Tokyo, Japan", img: "https://picsum.photos/seed/tokyo2/800/600", desc: "A captivating blend of ultramodern and traditional.", tag: "Culture", height: 300, rating: 4.9 },
  { name: "Amalfi Coast, Italy", img: "https://picsum.photos/seed/amalfi2/800/600", desc: "Dramatic coastal cliffs with pastel-coloured villages.", tag: "Romantic", height: 420, rating: 4.8 },
  { name: "Machu Picchu, Peru", img: "https://picsum.photos/seed/machu/800/600", desc: "Ancient Incan citadel set high in the Andes Mountains.", tag: "Adventure", height: 340, rating: 4.9 },
  { name: "Marrakech, Morocco", img: "https://picsum.photos/seed/marra/800/600", desc: "Vibrant souks, stunning palaces, and aromatic spice markets.", tag: "Culture", height: 380, rating: 4.6 },
  { name: "Patagonia, Argentina", img: "https://picsum.photos/seed/pata/800/600", desc: "Untamed wilderness with glaciers and towering granite peaks.", tag: "Adventure", height: 290, rating: 4.8 },
];

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    document.title = "Destinations — Horizon Travels";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/desthero/1920/800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in-up">Explore the World</p>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-in-up-delay-1">Our Destinations</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 animate-fade-in-up-delay-2">
            From tropical paradises to alpine adventures — discover the destinations we've handpicked for unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-foreground">All Destinations</h2>
          <div className="columns-2 gap-5 md:columns-3">
            {destinations.map((d, i) => (
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
                  <p className="flex items-center gap-1.5 text-sm font-bold text-foreground"><MapPin className="h-3.5 w-3.5 text-primary" /> {d.name}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs text-muted-foreground">{d.rating}</span>
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
            <img src={destinations[lightboxIdx]?.img} alt={destinations[lightboxIdx]?.name} className="w-full rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-primary-foreground">{destinations[lightboxIdx]?.name}</h3>
              <p className="text-sm text-primary-foreground/80">{destinations[lightboxIdx]?.desc}</p>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={() => setLightboxIdx((p) => (p - 1 + destinations.length) % destinations.length)} className="ml-2 rounded-full bg-card/80 p-2.5 text-foreground backdrop-blur-sm hover:bg-card shadow-md">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={() => setLightboxIdx((p) => (p + 1) % destinations.length)} className="mr-10 rounded-full bg-card/80 p-2.5 text-foreground backdrop-blur-sm hover:bg-card shadow-md">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Featured Carousel */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-foreground">Featured Destinations</h2>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="relative">
                <img src={destinations[carouselIdx].img} alt={destinations[carouselIdx].name} className="aspect-video w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-8">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{destinations[carouselIdx].tag}</span>
                  <h3 className="text-2xl font-bold text-primary-foreground">{destinations[carouselIdx].name}</h3>
                  <p className="text-sm text-primary-foreground/80">{destinations[carouselIdx].desc}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2">
              {destinations.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setCarouselIdx(i)}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${i === carouselIdx ? "border-primary ring-2 ring-primary/30 scale-105" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  <img src={d.img} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
