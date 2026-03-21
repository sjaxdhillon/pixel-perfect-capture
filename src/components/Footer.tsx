import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logoIcon from "@/assets/gooddocdentalicon.svg";

const serviceLinks: { label: string; href: string }[] = [
  { label: "Dental Exams", href: "/services/dental-exams" },
  { label: "Cleanings", href: "/services/dental-cleanings" },
  { label: "Implants", href: "/services/dental-implants" },
  { label: "Invisalign®", href: "/services/invisalign" },
  { label: "Crowns", href: "/services/dental-crowns" },
  { label: "Emergency Care", href: "/services/emergency-dental-care" },
  { label: "Kids Dentistry", href: "/services/kids-dentistry" },
];

const locationLinks: { label: string; count: number; href: string }[] = [
  { label: "Las Vegas", count: 13, href: "/locations/las-vegas" },
  { label: "Henderson", count: 7, href: "/locations/henderson" },
  { label: "North Las Vegas", count: 3, href: "/locations/north-las-vegas" },
];

const companyLinks: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Technology", href: "/about/technology" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
];

const patientLinks: { label: string; href: string }[] = [
  { label: "New Patients", href: "/new-patients" },
  { label: "Insurance", href: "/new-patients/insurance" },
  { label: "Financing", href: "/new-patients/financing" },
  { label: "Patient Forms", href: "/new-patients/patient-forms" },
  { label: "Blog", href: "/blog" },
];

const Footer = () => (
  <footer className="bg-brand-navy text-white relative overflow-hidden">
    {/* Decorative top border */}
    <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue" />

    <div className="container mx-auto px-4 pt-20 pb-12">
      {/* Top row — brand + CTA */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 pb-16 border-b border-white/10">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/15 flex items-center justify-center">
              <img src={logoIcon} alt="" className="h-8 w-8 brightness-0 invert" />
            </div>
            <div>
              <span className="font-display font-bold text-xl">Good Doc Dental</span>
              <span className="block font-body text-caption text-navy-200 tracking-wider uppercase">of Nevada</span>
            </div>
          </div>
          <p className="font-accent italic text-body-lg text-blue-200 leading-relaxed">
            "Great dental care shouldn't feel like a chore — it should feel like coming home."
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:smile@gooddocdental.com" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-2xl px-6 py-4 transition-colors">
            <Mail className="w-5 h-5 text-brand-gold" />
            <div>
              <span className="block font-body text-caption text-navy-200 uppercase tracking-wider">Email Us</span>
              <span className="font-display font-bold text-body-sm text-brand-gold group-hover:text-gold-200 transition-colors">smile@gooddocdental.com</span>
            </div>
          </a>
          <a href="tel:+17028522829" className="group flex items-center gap-3 bg-brand-blue/15 hover:bg-brand-blue/25 rounded-2xl px-6 py-4 transition-colors">
            <Phone className="w-5 h-5 text-brand-blue" />
            <div>
              <span className="block font-body text-caption text-navy-200 uppercase tracking-wider">Call Us</span>
              <span className="font-display font-bold text-body-sm text-white">702-852-2829</span>
            </div>
          </a>
        </div>
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-5">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link to={s.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-5">Locations</h4>
          <ul className="space-y-2.5">
            {locationLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors flex items-center gap-2">
                  {l.label} <span className="text-caption text-brand-blue font-display font-bold">({l.count})</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/5">
            <Link to="/locations" className="font-display font-semibold text-caption text-brand-blue hover:text-blue-200 transition-colors flex items-center gap-1">
              Find a location <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-5">Company</h4>
          <ul className="space-y-2.5">
            {companyLinks.map((c) => (
              <li key={c.label}>
                <Link to={c.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-5">Patients</h4>
          <ul className="space-y-2.5">
            {patientLinks.map((p) => (
              <li key={p.label}>
                <Link to={p.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5 bg-navy-900">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-caption text-navy-200">
          © {new Date().getFullYear()} Good Doc Dental of Nevada. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="font-body text-caption text-navy-200 hover:text-white transition-colors">Privacy</Link>
          <Link to="/hipaa-notice" className="font-body text-caption text-navy-200 hover:text-white transition-colors">HIPAA</Link>
          <Link to="/website-accessibility" className="font-body text-caption text-navy-200 hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
