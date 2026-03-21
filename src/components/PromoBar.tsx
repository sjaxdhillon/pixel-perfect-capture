import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const promos = [
  "🔴 Emergency Exam & X-Ray — $49",
  "👶 Kids New Patient Special — $95",
  "✨ Invisalign® — $1,200 OFF",
  "🦷 Complete Implant Package — $1,200 OFF",
];

const PromoBar = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-blue text-white py-2 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="font-display font-semibold text-[13px] tracking-wide">
            {promos[currentPromo]}
          </span>
        </div>
        <a
          href="tel:+17028522829"
          className="hidden md:flex items-center gap-1.5 text-brand-gold font-display font-semibold text-[13px] hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default PromoBar;
