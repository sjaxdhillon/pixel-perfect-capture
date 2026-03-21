import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebsiteAccessibility = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">Website Accessibility Statement</h1>
        <p className="font-accent italic text-lg text-[hsl(var(--slate))]">Our commitment to making gooddocdental.com accessible to everyone.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Our Commitment</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Good Doc Dental is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards to ensure we provide equal access to all users.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Standards</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Measures Taken</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Our website incorporates semantic HTML for meaningful document structure, proper heading hierarchy for screen reader navigation, descriptive alt text for all images, full keyboard navigation support, sufficient color contrast ratios throughout the design, and screen reader compatibility across all pages and interactive elements.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Known Limitations</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We're actively working to identify and address any accessibility issues on our website. As we add new features and content, we review them for accessibility compliance before publication.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Feedback & Contact</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us at <a href="mailto:smile@gooddocdental.com" className="text-[hsl(var(--blue-400))] underline">smile@gooddocdental.com</a> or call <a href="tel:7028522829" className="text-[hsl(var(--blue-400))] underline">702-852-2829</a>.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Last Updated</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed">March 2026.</p>
      </div>
    </section>

    <Footer />
  </div>
);

export default WebsiteAccessibility;
