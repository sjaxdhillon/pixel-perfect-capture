import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/gooddocdentalicon.svg";

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
      { name: "Adult Orthodontics", slug: "adult-orthodontics" },
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
      { name: "Special Needs", slug: "special-needs-dentistry" },
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
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="bg-brand-navy sticky top-0 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logoIcon} alt="Good Doc Dental" className="h-9 w-9 brightness-0 invert" />
          <div className="hidden sm:block">
            <span className="font-display font-bold text-white text-lg leading-tight">Good Doc Dental</span>
            <span className="block font-body text-navy-200 text-[11px] tracking-wide">of Nevada</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services with mega menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("services")}
            onMouseLeave={handleMenuLeave}
          >
            <button className="flex items-center gap-1 font-display font-medium text-[13px] text-navy-200 hover:text-white transition-colors px-4 py-6">
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-card shadow-2xl border border-blue-50 p-8 w-[720px] grid grid-cols-3 gap-6 animate-fade-in">
                {serviceCategories.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="font-display font-bold text-label uppercase text-brand-blue tracking-widest mb-3">{cat.title}</h4>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/services/${item.slug}`}
                            className="font-body text-body-sm text-brand-slate hover:text-brand-blue transition-colors block py-0.5"
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* Emergency — special styling */}
                <div className="col-span-3 border-t border-blue-50 pt-4 mt-2">
                  <Link
                    to="/services/emergency-dental-care"
                    className="flex items-center gap-3 bg-coral-50 rounded-lg p-3 hover:bg-coral-100 transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <span className="w-3 h-3 rounded-full bg-brand-coral animate-pulse" />
                    <span className="font-display font-bold text-body-sm text-brand-coral">Emergency Dental Care — $49 Same-Day</span>
                    <ChevronRight className="w-4 h-4 text-brand-coral ml-auto" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Locations with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("locations")}
            onMouseLeave={handleMenuLeave}
          >
            <button className="flex items-center gap-1 font-display font-medium text-[13px] text-navy-200 hover:text-white transition-colors px-4 py-6">
              Locations
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "locations" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "locations" && (
              <div className="absolute top-full left-0 bg-white rounded-card shadow-2xl border border-blue-50 p-6 w-[280px] animate-fade-in">
                <ul className="space-y-3">
                  {locationGroups.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        to={`/locations/${loc.slug}`}
                        className="flex items-center justify-between font-body text-body-sm text-brand-slate hover:text-brand-blue transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span>{loc.city}</span>
                        <span className="font-display font-semibold text-caption text-brand-blue">{loc.count} offices</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-blue-50 mt-4 pt-4">
                  <Link
                    to="/locations"
                    className="flex items-center gap-2 font-display font-bold text-body-sm text-brand-blue hover:text-blue-600 transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Open Location Finder
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink label="New Patients" href="/new-patients" />
          <NavLink label="About" href="/about" />
          <NavLink label="Blog" href="/blog" />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="promo" size="default">Book Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-navy fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto">
          <div className="px-6 py-8 pb-32">
            <div className="flex flex-col gap-1">
              {/* Services accordion */}
              <MobileAccordion
                label="Services"
                isOpen={mobileAccordion === "services"}
                onToggle={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
              >
                {serviceCategories.map((cat) => (
                  <div key={cat.title} className="mb-4">
                    <span className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">{cat.title}</span>
                    <ul className="mt-2 space-y-1">
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/services/${item.slug}`}
                            className="font-body text-body-sm text-navy-200 hover:text-white transition-colors block py-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </MobileAccordion>

              {/* Locations accordion */}
              <MobileAccordion
                label="Locations"
                isOpen={mobileAccordion === "locations"}
                onToggle={() => setMobileAccordion(mobileAccordion === "locations" ? null : "locations")}
              >
                {locationGroups.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="flex items-center justify-between font-body text-body-sm text-navy-200 hover:text-white transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{loc.city}</span>
                    <span className="text-brand-blue font-display font-semibold text-caption">{loc.count} offices</span>
                  </Link>
                ))}
                <Link
                  to="/locations"
                  className="font-display font-bold text-body-sm text-brand-blue hover:text-blue-200 transition-colors block mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Open Location Finder →
                </Link>
              </MobileAccordion>

              <MobileNavLink label="New Patients" href="/new-patients" onClick={() => setMobileOpen(false)} />
              <MobileNavLink label="About" href="/about" onClick={() => setMobileOpen(false)} />
              <MobileNavLink label="Blog" href="/blog" onClick={() => setMobileOpen(false)} />
            </div>
          </div>
          {/* Fixed bottom CTA */}
          <div className="fixed bottom-0 inset-x-0 p-4 bg-navy-800 border-t border-navy-400">
            <Button variant="emergency" className="w-full" size="lg">
              <Phone className="w-4 h-4" />
              Call Now — $49 Emergency
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    to={href}
    className="font-display font-medium text-[13px] text-navy-200 hover:text-white transition-colors px-4 py-6"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => (
  <Link
    to={href}
    onClick={onClick}
    className="font-display font-bold text-lg text-white py-3 border-b border-navy-400"
  >
    {label}
  </Link>
);

const MobileAccordion = ({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="border-b border-navy-400">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full font-display font-bold text-lg text-white py-3"
    >
      {label}
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && <div className="pb-4 pl-2">{children}</div>}
  </div>
);

export default Navbar;
