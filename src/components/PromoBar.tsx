import { Phone } from "lucide-react";

const offers = [
  { text: "Emergency Exam & X-Ray — $49", emoji: "🔴", href: "/services/emergency-dental-care" },
  { text: "Kids New Patient Special — $95", emoji: "👶", href: "/services/kids-dentistry" },
  { text: "Invisalign® — $1,200 OFF", emoji: "✨", href: "/services/invisalign" },
  { text: "Wisdom Teeth (4) — $1,899", emoji: "🦷", href: "/services/wisdom-tooth-extractions" },
  { text: "Implant Package — $1,200 OFF", emoji: "💎", href: "/services/dental-implants" },
];

const PromoBar = () => {
  return (
    <div className="bg-gradient-to-r from-navy-900 via-brand-navy to-navy-900 border-b border-white/5 relative z-50 overflow-hidden">
      <div className="flex items-center h-11">
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 to-transparent z-10" />
          <div className="animate-marquee flex whitespace-nowrap">
            {[...offers, ...offers].map((offer, i) => (
              <a
                key={i}
                href={offer.href}
                className="inline-flex items-center gap-2.5 px-10 font-display font-medium text-caption text-navy-100 hover:text-white transition-colors duration-200"
              >
                <span>{offer.emoji}</span>
                <span className="tracking-wide">{offer.text}</span>
                <span className="text-brand-gold font-bold text-body-sm">→</span>
              </a>
            ))}
          </div>
        </div>
        <a
          href="tel:+17028522829"
          className="hidden md:flex items-center gap-2 px-6 h-full bg-brand-blue/90 hover:bg-brand-blue transition-colors font-display font-bold text-caption text-white tracking-wide"
        >
          <Phone className="w-3.5 h-3.5" />
          702-852-2829
        </a>
      </div>
    </div>
  );
};

export default PromoBar;
