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
import ServicesIndex from "./pages/ServicesIndex.tsx";
import CityHub from "./pages/CityHub.tsx";
import LocationPage from "./pages/LocationPage.tsx";
import YourFirstVisit from "./pages/YourFirstVisit.tsx";
import Insurance from "./pages/Insurance.tsx";
import Financing from "./pages/Financing.tsx";
import PatientForms from "./pages/PatientForms.tsx";
import About from "./pages/About.tsx";
import OurStory from "./pages/OurStory.tsx";
import Technology from "./pages/Technology.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import Employers from "./pages/Employers.tsx";
import Careers from "./pages/Careers.tsx";
import FAQs from "./pages/FAQs.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import HIPAANotice from "./pages/HIPAANotice.tsx";
import WebsiteAccessibility from "./pages/WebsiteAccessibility.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
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
          <Route path="/services" element={<ServicesIndex />} />
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
          <Route path="/new-patients/your-first-visit" element={<YourFirstVisit />} />
          <Route path="/new-patients/insurance" element={<Insurance />} />
          <Route path="/new-patients/financing" element={<Financing />} />
          <Route path="/new-patients/patient-forms" element={<PatientForms />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/technology" element={<Technology />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/employers" element={<Employers />} />

          {/* Misc */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/hipaa-notice" element={<HIPAANotice />} />
          <Route path="/website-accessibility" element={<WebsiteAccessibility />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
