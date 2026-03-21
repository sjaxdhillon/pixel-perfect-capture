import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">Privacy Policy</h1>
        <p className="font-accent italic text-lg text-[hsl(var(--slate))]">How we collect, use, and protect your information.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5 prose-custom">
        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Information We Collect</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Good Doc Dental collects personal information necessary to provide dental care, including your name, contact information, date of birth, dental and medical history, insurance information, and payment details. We also collect website usage data through cookies and analytics tools to improve our online experience.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">How We Use Your Information</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Your information is used to provide dental care, process insurance claims, communicate about appointments and treatment, improve our services, and comply with legal obligations. We use your contact information to send appointment reminders and important health communications.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">How We Share Your Information</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We share your information with insurance companies for claims processing, with referral specialists when clinically necessary, and as required by law. Good Doc Dental never sells your personal information to third parties.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Data Security</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We protect your data using encryption, secure systems, and HIPAA-compliant infrastructure. All team members receive regular training on data privacy and security protocols. Physical records are stored in secure, access-controlled facilities.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Your Rights</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at smile@gooddocdental.com or call 702-852-2829. We will respond to all requests within 30 days.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Cookies & Website Tracking</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Our website uses standard analytics cookies to understand how visitors use our site and improve the experience. We do not use third-party advertising cookies or sell browsing data.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Updates to This Policy</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We may update this privacy policy periodically. The latest version will always be available on this page. Last updated: March 2026.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Contact</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed">
          For questions about this privacy policy, contact us at <a href="mailto:smile@gooddocdental.com" className="text-[hsl(var(--blue-400))] underline">smile@gooddocdental.com</a> or call <a href="tel:7028522829" className="text-[hsl(var(--blue-400))] underline">702-852-2829</a>.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
