import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/gooddocdentalicon.svg";
import wordLogo from "@/assets/gooddocdentalwordlogo.svg";

const serviceCategories = [
  {
    title: "Preventive & General",
    items: [
      { name: "Dental Exams", slug: "dental-exams" },
      { name: "Dental Cleanings", slug: "dental-cleanings" },
      { name: "Dental Sedation", slug: "dental-sedation" },
    ],
  },
  {
    title: "Restorative & Implants",
    items: [
      { name: "Dental Fillings", slug: "dental-fillings" },
      { name: "Dental Crowns", slug: "dental-crowns" },
      { name: "Same-Day Crowns", slug: "same-day-crowns" },
      { name: "Dental Implants", slug: "dental-implants" },
      { name: "Dental Bridges", slug: "dental-bridges" },
      { name: "Dentures", slug: "dentures" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      { name: "Teeth Whitening", slug: "teeth-whitening" },
      { name: "Porcelain Veneers", slug: "porcelain-veneers" },
      { name: "Smile Makeovers", slug: "smile-makeovers" },
    ],
  },
  {
    title: "Oral Surgery",
    items: [
      { name: "Tooth Extractions", slug: "tooth-extractions" },
      { name: "Wisdom Teeth", slug: "wisdom-tooth-extractions" },
      { name: "Root Canals", slug: "root-canals" },
    ],
  },
  {
    title: "Orthodontics",
    items: [
      { name: "Invisalign®", slug: "invisalign" },
      { name: "Traditional Braces", slug: "traditional-braces" },
      { name: "Teen Orthodontics", slug: "teen-orthodontics" },
    ],
  },
  {
    title: "Periodontics & Gum",
    items: [
      { name: "Deep Cleanings", slug: "deep-cleanings" },
      { name: "Laser Dentistry", slug: "laser-dentistry" },
      { name: "Gum Surgery", slug: "gum-surgery" },
    ],
  },
  {
    title: "Kids & Pediatric",
    items: [
      { name: "Kids Dentistry", slug: "kids-dentistry" },
      { name: "Baby & Toddler", slug: "baby-toddler-dentistry" },
      { name: "Kids Orthodontics", slug: "kids-orthodontics" },
    ],
  },
];

const locationGroups = [
  { city: "Las Vegas", count: 13, slug: "las-vegas" },
  { city: "Henderson", count: 7, slug: "henderson" },
  { city: "North Las Vegas", count: 3, slug: "north-las-vegas" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };
  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => {
    return () => { if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current); };
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-500 ${
      scrolled
        ? "bg-brand-navy/97 backdrop-blur-xl shadow-2xl shadow-black/20"
        : "bg-brand-navy"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-[80px]">
        {/* Logo — larger, dynamic */}
        <Link to="/" className="flex items-center gap-4 flex-shrink-0 group">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-teal/10 flex items-center justify-center group-hover:from-brand-blue/30 group-hover:to-brand-teal/20 transition-all duration-500 shadow-lg shadow-brand-blue/10">
              <img src={logoIcon} alt="" className="h-9 w-9 brightness-0 invert drop-shadow-sm" />
            </div>
            {/* Floating glow */}
            <div className="absolute -inset-1 rounded-2xl bg-brand-blue/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
          <div className="hidden sm:block">
            <img src={wordLogo} alt="Good Doc Dental" className="h-7 brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <MenuTrigger
            label="Services"
            isOpen={activeMenu === "services"}
            onEnter={() => handleMenuEnter("services")}
            onLeave={handleMenuLeave}
          >
            <AnimatePresence>
              {activeMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full -left-32 pt-4"
                >
                  <div
                    className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/12 border border-blue-50/60 p-8 w-[780px] grid grid-cols-3 gap-x-8 gap-y-6"
                    onMouseEnter={() => handleMenuEnter("services")}
                    onMouseLeave={handleMenuLeave}
                  >
                    {serviceCategories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="font-display font-bold text-caption uppercase text-brand-blue tracking-[0.12em] mb-3 pb-2 border-b border-blue-50">{cat.title}</h4>
                        <ul className="space-y-0.5">
                          {cat.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                to={`/services/${item.slug}`}
                                className="font-body text-body-sm text-brand-slate hover:text-brand-blue hover:translate-x-1.5 transition-all duration-200 block py-1.5 rounded-lg hover:bg-blue-50/50 px-2 -mx-2"
                                onClick={() => setActiveMenu(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 border-t border-blue-50 pt-5 mt-2 flex items-center justify-between">
                      <Link
                        to="/services/emergency-dental-care"
                        className="flex items-center gap-3 bg-coral-50 rounded-2xl px-5 py-3.5 hover:bg-coral-100 transition-all duration-200 group/em hover:shadow-md"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-coral" />
                        </span>
                        <span className="font-display font-bold text-body-sm text-brand-coral">Emergency Care — $49</span>
                      </Link>
                      <Link
                        to="/services"
                        className="font-display font-semibold text-body-sm text-brand-blue hover:text-blue-600 transition-colors flex items-center gap-1.5 group/all"
                        onClick={() => setActiveMenu(null)}
                      >
                        View all services <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MenuTrigger>

          <MenuTrigger
            label="Locations"
            isOpen={activeMenu === "locations"}
            onEnter={() => handleMenuEnter("locations")}
            onLeave={handleMenuLeave}
          >
            <AnimatePresence>
              {activeMenu === "locations" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-4"
                >
                  <div
                    className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/12 border border-blue-50/60 p-6 w-[320px]"
                    onMouseEnter={() => handleMenuEnter("locations")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <ul className="space-y-1">
                      {locationGroups.map((loc) => (
                        <li key={loc.slug}>
                          <Link
                            to={`/locations/${loc.slug}`}
                            className="flex items-center justify-between font-body text-body-sm text-brand-slate hover:text-brand-blue transition-all duration-200 rounded-xl hover:bg-blue-50/60 px-4 py-3"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="font-medium">{loc.city}</span>
                            <span className="font-display font-bold text-caption text-brand-blue bg-blue-50 px-2.5 py-1 rounded-btn">{loc.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-blue-50 mt-3 pt-3">
                      <Link
                        to="/locations"
                        className="flex items-center gap-2 font-display font-bold text-body-sm text-brand-blue hover:text-blue-600 transition-colors px-4 group/find"
                        onClick={() => setActiveMenu(null)}
                      >
                        Find a location <ArrowRight className="w-3.5 h-3.5 group-hover/find:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MenuTrigger>

          <NavLink label="New Patients" href="/new-patients" />
          <NavLink label="About" href="/about" />
          <NavLink label="Blog" href="/blog" />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button variant="promo" size="default" className="shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/30 transition-shadow duration-300">
              Book Now
            </Button>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-brand-navy fixed inset-x-0 top-[80px] bottom-0 z-50 overflow-y-auto"
          >
            <div className="px-6 py-6 pb-32 space-y-1">
              <MobileAccordion
                label="Services" isOpen={mobileAccordion === "services"}
                onToggle={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
              >
                {serviceCategories.map((cat) => (
                  <div key={cat.title} className="mb-5">
                    <span className="font-display font-semibold text-caption uppercase text-brand-blue tracking-[0.12em]">{cat.title}</span>
                    <ul className="mt-2 space-y-1">
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <Link to={`/services/${item.slug}`} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors block py-1.5" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </MobileAccordion>
              <MobileAccordion
                label="Locations" isOpen={mobileAccordion === "locations"}
                onToggle={() => setMobileAccordion(mobileAccordion === "locations" ? null : "locations")}
              >
                {locationGroups.map((loc) => (
                  <Link key={loc.slug} to={`/locations/${loc.slug}`} className="flex items-center justify-between font-body text-body-sm text-navy-200 hover:text-white transition-colors py-2.5" onClick={() => setMobileOpen(false)}>
                    <span>{loc.city}</span>
                    <span className="text-brand-blue font-display font-bold text-caption">{loc.count} offices</span>
                  </Link>
                ))}
              </MobileAccordion>
              <MobileNavLink label="New Patients" href="/new-patients" onClick={() => setMobileOpen(false)} />
              <MobileNavLink label="About" href="/about" onClick={() => setMobileOpen(false)} />
              <MobileNavLink label="Blog" href="/blog" onClick={() => setMobileOpen(false)} />
            </div>
            <div className="fixed bottom-0 inset-x-0 p-4 bg-navy-800/97 backdrop-blur-xl border-t border-navy-400">
              <a href="tel:7028522829" className="block">
                <Button variant="emergency" className="w-full" size="lg">
                  <Phone className="w-4 h-4" />
                  Call Now — $49 Emergency
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* Sub-components */
const MenuTrigger = ({ label, isOpen, onEnter, onLeave, children }: {
  label: string; isOpen: boolean; onEnter: () => void; onLeave: () => void; children: React.ReactNode;
}) => (
  <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <button className={`flex items-center gap-1.5 font-display font-medium text-body-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
      isOpen ? "text-white bg-white/10" : "text-navy-100 hover:text-white hover:bg-white/5"
    }`}>
      {label}
      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {children}
  </div>
);

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link to={href} className="font-display font-medium text-body-sm text-navy-100 hover:text-white transition-all duration-200 px-4 py-2.5 rounded-xl hover:bg-white/5">
    {label}
  </Link>
);

const MobileNavLink = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => (
  <Link to={href} onClick={onClick} className="font-display font-bold text-body-lg text-white py-4 border-b border-white/5 block">
    {label}
  </Link>
);

const MobileAccordion = ({ label, isOpen, onToggle, children }: {
  label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) => (
  <div className="border-b border-white/5">
    <button onClick={onToggle} className="flex items-center justify-between w-full font-display font-bold text-body-lg text-white py-4">
      {label}
      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? "max-h-[700px] pb-4" : "max-h-0"}`}>
      <div className="pl-1">{children}</div>
    </div>
  </div>
);

export default Navbar;
