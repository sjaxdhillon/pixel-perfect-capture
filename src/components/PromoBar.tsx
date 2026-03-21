import { useEffect, useRef } from "react";
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
    <div className="bg-brand-navy border-b border-navy-400 relative z-50 overflow-hidden">
      <div className="flex items-center h-10">
        {/* Marquee */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-navy to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-navy to-transparent z-10" />
          <div className="animate-marquee flex whitespace-nowrap">
            {[...offers, ...offers].map((offer, i) => (
              <a
                key={i}
                href={offer.href}
                className="inline-flex items-center gap-2 px-8 font-display font-medium text-[12px] text-navy-100 hover:text-white transition-colors"
              >
                <span>{offer.emoji}</span>
                <span>{offer.text}</span>
                <span className="text-brand-gold font-bold">→</span>
              </a>
            ))}
          </div>
        </div>
        {/* Phone CTA */}
        <a
          href="tel:+17028522829"
          className="hidden md:flex items-center gap-1.5 px-5 h-full bg-brand-blue hover:bg-blue-600 transition-colors font-display font-bold text-[12px] text-white"
        >
          <Phone className="w-3 h-3" />
          702-852-2829
        </a>
      </div>
    </div>
  );
};

export default PromoBar;
