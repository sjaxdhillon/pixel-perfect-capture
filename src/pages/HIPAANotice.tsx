import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HIPAANotice = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">HIPAA Notice of Privacy Practices</h1>
        <p className="font-accent italic text-lg text-[hsl(var(--slate))]">Your health information rights and our responsibilities.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Our Commitment</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Good Doc Dental is committed to protecting your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA). This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">How We May Use Your PHI</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          We may use and disclose your protected health information for the following purposes: treatment (providing dental care, coordinating with specialists, and making referrals), payment (submitting insurance claims, billing, and collections), healthcare operations (quality improvement, staff training, and compliance activities), appointment reminders and health-related communications, and as required by federal, state, or local law.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Your Rights</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          You have the right to inspect and copy your dental and medical records, request amendments to your records, receive an accounting of disclosures of your PHI, request restrictions on certain uses and disclosures, request confidential communications by alternative means or at alternative locations, and receive a paper copy of this notice upon request.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Our Responsibilities</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          Good Doc Dental is required to maintain the privacy of your protected health information, provide you with this notice of our legal duties and privacy practices, follow the terms of this notice currently in effect, and notify you in the event of a breach of your unsecured protected health information.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Complaints</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed mb-5">
          If you believe your privacy rights have been violated, you may file a complaint with our Privacy Officer at <a href="mailto:smile@gooddocdental.com" className="text-[hsl(var(--blue-400))] underline">smile@gooddocdental.com</a> or with the U.S. Department of Health and Human Services. You will not be penalized for filing a complaint.
        </p>

        <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-3 mt-8">Effective Date</h2>
        <p className="text-[hsl(var(--slate))] leading-relaxed">This notice is effective as of March 2026.</p>
      </div>
    </section>

    <Footer />
  </div>
);

export default HIPAANotice;
