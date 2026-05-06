import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Index from "./pages/Index";

const PhotoGallery = lazy(() => import("./pages/PhotoGallery"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Contact = lazy(() => import("./pages/Contact"));
const Tips = lazy(() => import("./pages/Tips"));
const LocalSEOPlans = lazy(() => import("./pages/LocalSEOPlans"));
const AIReadinessServiceIndex = lazy(() => import("./pages/AIReadinessServiceIndex"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<PhotoGallery />} />
            <Route path="/packages" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/local-seo-plans" element={<LocalSEOPlans />} />
            <Route path="/ai-readiness-service-index" element={<AIReadinessServiceIndex />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
