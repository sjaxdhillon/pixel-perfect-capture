import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
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
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-brand-navy/95 backdrop-blur-md shadow-lg" : "bg-brand-navy"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
            <img src={logoIcon} alt="" className="h-7 w-7 brightness-0 invert" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-white text-body-lg leading-tight tracking-tight">Good Doc Dental</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          <MenuTrigger
            label="Services"
            isOpen={activeMenu === "services"}
            onEnter={() => handleMenuEnter("services")}
            onLeave={handleMenuLeave}
          >
            <div className="absolute top-full -left-32 pt-3">
              <div
                className="bg-white rounded-2xl shadow-2xl border border-blue-50/80 p-8 w-[760px] grid grid-cols-3 gap-x-8 gap-y-6"
                onMouseEnter={() => handleMenuEnter("services")}
                onMouseLeave={handleMenuLeave}
              >
                {serviceCategories.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="font-display font-bold text-caption uppercase text-brand-blue tracking-[0.12em] mb-2.5 pb-1.5 border-b border-blue-50">{cat.title}</h4>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/services/${item.slug}`}
                            className="font-body text-body-sm text-brand-slate hover:text-brand-blue hover:translate-x-1 transition-all block py-1"
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-3 border-t border-blue-50 pt-4 mt-1 flex items-center justify-between">
                  <Link
                    to="/services/emergency-dental-care"
                    className="flex items-center gap-3 bg-coral-50 rounded-xl px-4 py-3 hover:bg-coral-100 transition-colors group/em"
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
                    className="font-display font-semibold text-body-sm text-brand-blue hover:text-blue-600 transition-colors flex items-center gap-1"
                    onClick={() => setActiveMenu(null)}
                  >
                    View all services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </MenuTrigger>

          <MenuTrigger
            label="Locations"
            isOpen={activeMenu === "locations"}
            onEnter={() => handleMenuEnter("locations")}
            onLeave={handleMenuLeave}
          >
            <div className="absolute top-full left-0 pt-3">
              <div
                className="bg-white rounded-2xl shadow-2xl border border-blue-50/80 p-6 w-[300px]"
                onMouseEnter={() => handleMenuEnter("locations")}
                onMouseLeave={handleMenuLeave}
              >
                <ul className="space-y-1">
                  {locationGroups.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        to={`/locations/${loc.slug}`}
                        className="flex items-center justify-between font-body text-body-sm text-brand-slate hover:text-brand-blue transition-colors rounded-lg hover:bg-blue-50 px-3 py-2.5"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="font-medium">{loc.city}</span>
                        <span className="font-display font-bold text-caption text-brand-blue bg-blue-50 px-2 py-0.5 rounded-btn">{loc.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-blue-50 mt-3 pt-3">
                  <Link
                    to="/locations"
                    className="flex items-center gap-2 font-display font-bold text-body-sm text-brand-blue hover:text-blue-600 transition-colors px-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Find a location <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </MenuTrigger>

          <NavLink label="New Patients" href="/new-patients" />
          <NavLink label="About" href="/about" />
          <NavLink label="Blog" href="/blog" />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="promo" size="default" className="shadow-lg shadow-brand-gold/20">Book Now</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-navy fixed inset-x-0 top-[72px] bottom-0 z-50 overflow-y-auto">
          <div className="px-6 py-6 pb-32 space-y-1">
            <MobileAccordion
              label="Services" isOpen={mobileAccordion === "services"}
              onToggle={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
            >
              {serviceCategories.map((cat) => (
                <div key={cat.title} className="mb-4">
                  <span className="font-display font-semibold text-caption uppercase text-brand-blue tracking-[0.12em]">{cat.title}</span>
                  <ul className="mt-1.5 space-y-0.5">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/services/${item.slug}`} className="font-body text-body-sm text-navy-200 hover:text-white transition-colors block py-1" onClick={() => setMobileOpen(false)}>{item.name}</Link>
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
                <Link key={loc.slug} to={`/locations/${loc.slug}`} className="flex items-center justify-between font-body text-body-sm text-navy-200 hover:text-white transition-colors py-2" onClick={() => setMobileOpen(false)}>
                  <span>{loc.city}</span>
                  <span className="text-brand-blue font-display font-bold text-caption">{loc.count} offices</span>
                </Link>
              ))}
            </MobileAccordion>
            <MobileNavLink label="New Patients" href="/new-patients" onClick={() => setMobileOpen(false)} />
            <MobileNavLink label="About" href="/about" onClick={() => setMobileOpen(false)} />
            <MobileNavLink label="Blog" href="/blog" onClick={() => setMobileOpen(false)} />
          </div>
          <div className="fixed bottom-0 inset-x-0 p-4 bg-navy-800/95 backdrop-blur-sm border-t border-navy-400">
            <a href="tel:7028522829" className="block">
              <Button variant="emergency" className="w-full" size="lg">
                <Phone className="w-4 h-4" />
                Call Now — $49 Emergency
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

/* Sub-components */
const MenuTrigger = ({ label, isOpen, onEnter, onLeave, children }: {
  label: string; isOpen: boolean; onEnter: () => void; onLeave: () => void; children: React.ReactNode;
}) => (
  <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <button className={`flex items-center gap-1 font-display font-medium text-body-sm px-4 py-2 rounded-lg transition-all ${
      isOpen ? "text-white bg-white/10" : "text-navy-100 hover:text-white"
    }`}>
      {label}
      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && children}
  </div>
);

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link to={href} className="font-display font-medium text-body-sm text-navy-100 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
    {label}
  </Link>
);

const MobileNavLink = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => (
  <Link to={href} onClick={onClick} className="font-display font-bold text-body-lg text-white py-3.5 border-b border-white/5 block">
    {label}
  </Link>
);

const MobileAccordion = ({ label, isOpen, onToggle, children }: {
  label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) => (
  <div className="border-b border-white/5">
    <button onClick={onToggle} className="flex items-center justify-between w-full font-display font-bold text-body-lg text-white py-3.5">
      {label}
      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] pb-4" : "max-h-0"}`}>
      <div className="pl-1">{children}</div>
    </div>
  </div>
);

export default Navbar;
