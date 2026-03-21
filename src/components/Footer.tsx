import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/gooddocdentalicon.svg";

const Footer = () => (
  <footer className="bg-brand-navy text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoIcon} alt="Good Doc Dental" className="h-8 w-8 brightness-0 invert" />
            <span className="font-display font-bold text-lg">Good Doc Dental</span>
          </div>
          <p className="font-body text-body-sm text-navy-200 mb-6">
            No corporate fluff, no upselling — real, high-quality dental care for you and your family.
          </p>
          <a href="mailto:smile@gooddocdental.com" className="font-display font-semibold text-brand-gold hover:text-gold-200 transition-colors text-body-sm">
            <Mail className="w-4 h-4 inline mr-2" />
            smile@gooddocdental.com
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-body-sm mb-4 text-white">Services</h4>
          <ul className="space-y-2.5">
            {["Dental Exams", "Cleanings", "Implants", "Invisalign®", "Crowns", "Emergency Care", "Kids Dentistry"].map((s) => (
              <li key={s}>
                <Link to="/services" className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-display font-bold text-body-sm mb-4 text-white">Locations</h4>
          <ul className="space-y-2.5">
            {["Las Vegas (13 offices)", "Henderson (7 offices)", "North Las Vegas (3 offices)"].map((l) => (
              <li key={l}>
                <Link to="/locations" className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-start gap-2 text-navy-200">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <a href="tel:+17028522829" className="font-body text-body-sm hover:text-white transition-colors">702-852-2829</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-bold text-body-sm mb-4 text-white">Company</h4>
          <ul className="space-y-2.5">
            {["About Us", "Our Team", "Technology", "Careers", "FAQs", "New Patients", "Insurance"].map((c) => (
              <li key={c}>
                <Link to="/about" className="font-body text-body-sm text-navy-200 hover:text-white transition-colors">{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-navy-800 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-caption text-navy-200">
          © {new Date().getFullYear()} Good Doc Dental of Nevada. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="font-body text-caption text-navy-200 hover:text-white transition-colors">Privacy</Link>
          <Link to="/hipaa-notice" className="font-body text-caption text-navy-200 hover:text-white transition-colors">HIPAA</Link>
          <Link to="/website-accessibility" className="font-body text-caption text-navy-200 hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
