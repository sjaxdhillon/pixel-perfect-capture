import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Heart } from "lucide-react";
import logoIcon from "@/assets/gooddocdentalicon.svg";
import wordMark from "@/assets/gooddocdentalwordmark.svg";

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const serviceLinks = [
  { label: "Dental Exams", href: "/services/dental-exams" },
  { label: "Cleanings", href: "/services/dental-cleanings" },
  { label: "Implants", href: "/services/dental-implants" },
  { label: "Invisalign®", href: "/services/invisalign" },
  { label: "Crowns", href: "/services/dental-crowns" },
  { label: "Emergency Care", href: "/services/emergency-dental-care" },
  { label: "Kids Dentistry", href: "/services/kids-dentistry" },
];

const locationLinks = [
  { label: "Las Vegas", count: 13, href: "/locations/las-vegas" },
  { label: "Henderson", count: 7, href: "/locations/henderson" },
  { label: "North Las Vegas", count: 3, href: "/locations/north-las-vegas" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Technology", href: "/about/technology" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
];

const patientLinks = [
  { label: "New Patients", href: "/new-patients" },
  { label: "Insurance", href: "/new-patients/insurance" },
  { label: "Financing", href: "/new-patients/financing" },
  { label: "Patient Forms", href: "/new-patients/patient-forms" },
  { label: "Blog", href: "/blog" },
];

const Footer = () => (
  <footer className="bg-brand-navy text-white relative overflow-hidden">
    {/* Decorative gradient */}
    <div className="h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
    <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-brand-blue/3 blur-3xl pointer-events-none" />
    <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-brand-teal/3 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
      {/* Top row — brand + CTA */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 pb-16 border-b border-white/8"
      >
        <motion.div variants={reveal} custom={0} className="max-w-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-teal/10 flex items-center justify-center shadow-lg shadow-brand-blue/10">
              <img src={logoIcon} alt="" className="h-9 w-9 brightness-0 invert" />
            </div>
            <div>
              <img src={wordMark} alt="Good Doc Dental" className="h-6 brightness-0 invert opacity-95" />
            </div>
          </div>
          <p className="font-accent italic text-body-lg text-blue-200/80 leading-relaxed">
            "Great dental care shouldn't feel like a chore — it should feel like coming home."
          </p>
        </motion.div>
        <motion.div variants={reveal} custom={1} className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:smile@gooddocdental.com" className="group flex items-center gap-3 bg-white/5 hover:bg-white/8 rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <Mail className="w-5 h-5 text-brand-gold" />
            <div>
              <span className="block font-body text-caption text-navy-200 uppercase tracking-wider">Email Us</span>
              <span className="font-display font-bold text-body-sm text-brand-gold group-hover:text-gold-200 transition-colors">smile@gooddocdental.com</span>
            </div>
          </a>
          <a href="tel:+17028522829" className="group flex items-center gap-3 bg-brand-blue/12 hover:bg-brand-blue/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10">
            <Phone className="w-5 h-5 text-brand-blue" />
            <div>
              <span className="block font-body text-caption text-navy-200 uppercase tracking-wider">Call Us</span>
              <span className="font-display font-bold text-body-sm text-white">702-852-2829</span>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Links grid */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
      >
        <motion.div variants={reveal} custom={0}>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-6">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link to={s.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors duration-200">{s.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={reveal} custom={1}>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-6">Locations</h4>
          <ul className="space-y-3">
            {locationLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  {l.label} <span className="text-caption text-brand-blue font-display font-bold">({l.count})</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-5 border-t border-white/5">
            <Link to="/locations" className="font-display font-semibold text-caption text-brand-blue hover:text-blue-200 transition-colors flex items-center gap-1">
              Find a location <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={reveal} custom={2}>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-6">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((c) => (
              <li key={c.label}>
                <Link to={c.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors duration-200">{c.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={reveal} custom={3}>
          <h4 className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue mb-6">Patients</h4>
          <ul className="space-y-3">
            {patientLinks.map((p) => (
              <li key={p.label}>
                <Link to={p.href} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors duration-200">{p.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5 bg-navy-900/50">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-caption text-navy-200 flex items-center gap-1.5">
          © {new Date().getFullYear()} Good Doc Dental. Made with <Heart className="w-3 h-3 text-brand-coral fill-brand-coral" /> in Las Vegas.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="font-body text-caption text-navy-200 hover:text-white transition-colors duration-200">Privacy</Link>
          <Link to="/hipaa-notice" className="font-body text-caption text-navy-200 hover:text-white transition-colors duration-200">HIPAA</Link>
          <Link to="/website-accessibility" className="font-body text-caption text-navy-200 hover:text-white transition-colors duration-200">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
