import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  name: string;
  slug: string;
  tagline: string;
  priceDisplay: string;
  priceUnit?: string;
  icon: string;
  promoText?: string;
  image?: string;
}

const ServiceCard = ({ name, slug, tagline, priceDisplay, priceUnit, icon, promoText, image }: ServiceCardProps) => (
  <Link to={`/services/${slug}`} className="block">
    <div className="bg-white rounded-card border border-blue-50 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      {image && (
        <div className="h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <ServiceIcon icon={icon} />
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-h4 text-brand-navy group-hover:text-brand-blue transition-colors">{name}</h3>
            <p className="font-body text-body-sm text-brand-slate mt-1">{tagline}</p>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-blue-50 flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-brand-navy">{priceDisplay}</span>
            {priceUnit && <span className="font-body text-caption text-brand-slate ml-1">/{priceUnit}</span>}
            {promoText && (
              <span className="block font-display font-semibold text-caption text-brand-gold mt-0.5">{promoText}</span>
            )}
          </div>
          <Button variant="ghost" size="icon" className="text-brand-blue">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </Link>
);

export default ServiceCard;
