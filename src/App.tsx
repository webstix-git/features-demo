import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import PhotoGallery from "./pages/PhotoGallery";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Tips from "./pages/Tips";
import LocalSEOPlans from "./pages/LocalSEOPlans";
import AIReadinessServiceIndex from "./pages/AIReadinessServiceIndex";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
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
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;