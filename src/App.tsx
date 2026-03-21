import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EmergencyDentalCare from "./pages/EmergencyDentalCare.tsx";
import DentalImplants from "./pages/DentalImplants.tsx";
import Invisalign from "./pages/Invisalign.tsx";
import KidsDentistry from "./pages/KidsDentistry.tsx";
import LocationFinder from "./pages/LocationFinder.tsx";
import NewPatients from "./pages/NewPatients.tsx";
import WisdomTeeth from "./pages/WisdomTeeth.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import PlaceholderPage from "./pages/PlaceholderPage.tsx";
import CityHub from "./pages/CityHub.tsx";
import LocationPage from "./pages/LocationPage.tsx";
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

          {/* Service pages — specific routes first */}
          <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="/services/emergency-dental-care" element={<EmergencyDentalCare />} />
          <Route path="/services/dental-implants" element={<DentalImplants />} />
          <Route path="/services/invisalign" element={<Invisalign />} />
          <Route path="/services/wisdom-tooth-extractions" element={<WisdomTeeth />} />
          <Route path="/services/kids-dentistry" element={<KidsDentistry />} />
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* Location pages */}
          <Route path="/locations" element={<LocationFinder />} />
          <Route path="/locations/las-vegas" element={<CityHub city="Las Vegas" slug="las-vegas" />} />
          <Route path="/locations/henderson" element={<CityHub city="Henderson" slug="henderson" />} />
          <Route path="/locations/north-las-vegas" element={<CityHub city="North Las Vegas" slug="north-las-vegas" />} />
          <Route path="/locations/:slug" element={<LocationPage />} />

          {/* New Patients */}
          <Route path="/new-patients" element={<NewPatients />} />
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
