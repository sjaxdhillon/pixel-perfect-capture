import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/gooddocdentalicon.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-brand-navy sticky top-0 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoIcon} alt="Good Doc Dental" className="h-9 w-9 brightness-0 invert" />
          <div className="hidden sm:block">
            <span className="font-display font-bold text-white text-lg leading-tight">
              Good Doc Dental
            </span>
            <span className="block font-body text-navy-200 text-[11px] tracking-wide">
              of Nevada
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavItem label="Services" href="/services" />
          <NavItem label="Locations" href="/locations" />
          <NavItem label="New Patients" href="/new-patients" />
          <NavItem label="About" href="/about" />
          <NavItem label="Blog" href="/blog" />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="promo" size="default">
            Book Now
          </Button>
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
        <div className="lg:hidden bg-brand-navy absolute inset-x-0 top-16 bottom-0 min-h-screen z-50 px-6 py-8">
          <div className="flex flex-col gap-6">
            <MobileNavItem label="Services" href="/services" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="Locations" href="/locations" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="New Patients" href="/new-patients" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="About" href="/about" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="Blog" href="/blog" onClick={() => setMobileOpen(false)} />
          </div>
          <div className="mt-10">
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

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <Link
    to={href}
    className="font-display font-medium text-[13px] text-navy-200 hover:text-white transition-colors"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => (
  <Link
    to={href}
    onClick={onClick}
    className="font-display font-bold text-lg text-white"
  >
    {label}
  </Link>
);

export default Navbar;
