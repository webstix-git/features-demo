import { useState } from "react";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import VariantSection from "@/components/VariantSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/show${i + 1}/600/400`,
  alt: `Gallery image ${i + 1}`,
  height: [300, 400, 250, 350, 280, 420, 320, 380, 290][i],
}));

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  return (
    <FeaturePageTemplate
      title="Photo Gallery"
      subtitle="Showcase visual content with stunning, interactive gallery layouts."
      bullets={[
        { text: "Galleries increase page dwell time by up to 3x, reducing bounce rates." },
        { text: "Visual-first content drives 40% more social shares and engagement." },
        { text: "Lightbox views boost product image interaction by 65%." },
      ]}
      proTip="Use the Masonry Grid (Variant A) for portfolio and real-estate clients who need visual density. Use the Carousel (Variant B) for e-commerce and product-focused brands that want a curated, sequential experience."
    >
      <VariantSection label="A" title="Masonry Grid with Lightbox">
        <div className="columns-2 gap-4 md:columns-3">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="mb-4 cursor-pointer overflow-hidden rounded-lg border border-border transition-transform hover:scale-[1.02]"
              onClick={() => { setLightboxIdx(i); setLightboxOpen(true); }}
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover" style={{ height: img.height }} loading="lazy" />
            </div>
          ))}
        </div>
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
            <img src={images[lightboxIdx]?.src} alt={images[lightboxIdx]?.alt} className="w-full rounded-lg" />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={() => setLightboxIdx((p) => (p - 1 + images.length) % images.length)} className="ml-2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background">
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={() => setLightboxIdx((p) => (p + 1) % images.length)} className="mr-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </VariantSection>

      <VariantSection label="B" title="Carousel with Thumbnail Navigation">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-lg border border-border">
            <img src={images[carouselIdx].src} alt={images[carouselIdx].alt} className="aspect-video w-full object-cover" />
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setCarouselIdx(i)}
                className={`h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${i === carouselIdx ? "border-primary ring-2 ring-primary/30" : "border-border opacity-60 hover:opacity-100"}`}
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </VariantSection>
    </FeaturePageTemplate>
  );
};

export default PhotoGallery;
