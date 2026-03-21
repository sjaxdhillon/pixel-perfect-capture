import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EmergencyDentalCare from "./pages/EmergencyDentalCare.tsx";
import DentalImplants from "./pages/DentalImplants.tsx";
import PlaceholderPage from "./pages/PlaceholderPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/emergency-dental-care" element={<EmergencyDentalCare />} />

          {/* Service pages */}
          <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="/services/dental-exams" element={<PlaceholderPage title="Dental Exams" />} />
          <Route path="/services/dental-cleanings" element={<PlaceholderPage title="Dental Cleanings" />} />
          <Route path="/services/dental-fillings" element={<PlaceholderPage title="Dental Fillings" />} />
          <Route path="/services/dental-crowns" element={<PlaceholderPage title="Dental Crowns" />} />
          <Route path="/services/root-canals" element={<PlaceholderPage title="Root Canals" />} />
          <Route path="/services/tooth-extractions" element={<PlaceholderPage title="Tooth Extractions" />} />
          <Route path="/services/dental-bridges" element={<PlaceholderPage title="Dental Bridges" />} />
          <Route path="/services/same-day-crowns" element={<PlaceholderPage title="Same-Day Crowns" />} />
          <Route path="/services/dental-implants" element={<DentalImplants />} />
          <Route path="/services/implant-supported-dentures" element={<PlaceholderPage title="Implant-Supported Dentures" />} />
          <Route path="/services/dentures" element={<PlaceholderPage title="Dentures" />} />
          <Route path="/services/porcelain-veneers" element={<PlaceholderPage title="Porcelain Veneers" />} />
          <Route path="/services/teeth-whitening" element={<PlaceholderPage title="Teeth Whitening" />} />
          <Route path="/services/smile-makeovers" element={<PlaceholderPage title="Smile Makeovers" />} />
          <Route path="/services/invisalign" element={<PlaceholderPage title="Invisalign®" />} />
          <Route path="/services/traditional-braces" element={<PlaceholderPage title="Traditional Braces" />} />
          <Route path="/services/teen-orthodontics" element={<PlaceholderPage title="Teen Orthodontics" />} />
          <Route path="/services/adult-orthodontics" element={<PlaceholderPage title="Adult Orthodontics" />} />
          <Route path="/services/wisdom-tooth-extractions" element={<PlaceholderPage title="Wisdom Tooth Extractions" />} />
          <Route path="/services/deep-cleanings" element={<PlaceholderPage title="Deep Cleanings" />} />
          <Route path="/services/laser-dentistry" element={<PlaceholderPage title="Laser Dentistry" />} />
          <Route path="/services/gum-surgery" element={<PlaceholderPage title="Gum Surgery" />} />
          <Route path="/services/kids-dentistry" element={<PlaceholderPage title="Kids Dentistry" />} />
          <Route path="/services/baby-toddler-dentistry" element={<PlaceholderPage title="Baby & Toddler Dentistry" />} />
          <Route path="/services/kids-orthodontics" element={<PlaceholderPage title="Kids Orthodontics" />} />
          <Route path="/services/special-needs-dentistry" element={<PlaceholderPage title="Special Needs Dentistry" />} />
          <Route path="/services/dental-sedation" element={<PlaceholderPage title="Dental Sedation" />} />

          {/* Location pages */}
          <Route path="/locations" element={<PlaceholderPage title="Find a Location" />} />
          <Route path="/locations/las-vegas" element={<PlaceholderPage title="Las Vegas Locations" />} />
          <Route path="/locations/henderson" element={<PlaceholderPage title="Henderson Locations" />} />
          <Route path="/locations/north-las-vegas" element={<PlaceholderPage title="North Las Vegas Locations" />} />

          {/* New Patients */}
          <Route path="/new-patients" element={<PlaceholderPage title="New Patients" />} />
          <Route path="/new-patients/your-first-visit" element={<PlaceholderPage title="Your First Visit" />} />
          <Route path="/new-patients/insurance" element={<PlaceholderPage title="Insurance" />} />
          <Route path="/new-patients/financing" element={<PlaceholderPage title="Financing" />} />
          <Route path="/new-patients/patient-forms" element={<PlaceholderPage title="Patient Forms" />} />

          {/* About */}
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/about/our-story" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/about/technology" element={<PlaceholderPage title="Technology" />} />
          <Route path="/about/our-team" element={<PlaceholderPage title="Our Team" />} />
          <Route path="/about/employers" element={<PlaceholderPage title="Employers" />} />

          {/* Misc */}
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/faqs" element={<PlaceholderPage title="FAQs" />} />
          <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/hipaa-notice" element={<PlaceholderPage title="HIPAA Notice" />} />
          <Route path="/website-accessibility" element={<PlaceholderPage title="Website Accessibility" />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
