import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LocationCardProps {
  name: string;
  slug: string;
  address: string;
  city: string;
  phone: string;
  hours?: Record<string, string>;
}

const LocationCard = ({ name, slug, address, city, phone, hours }: LocationCardProps) => (
  <div className="bg-white rounded-card border border-blue-50 p-6 hover:shadow-lg transition-all duration-300">
    <h3 className="font-display text-h4 text-brand-navy mb-3">{name}</h3>
    <div className="space-y-2 mb-5">
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
        <span className="font-body text-body-sm text-brand-slate">{address}, {city}, NV</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
        <a href={`tel:${phone.replace(/-/g, '')}`} className="font-body text-body-sm text-brand-blue hover:underline">{phone}</a>
      </div>
      {hours && (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-teal flex-shrink-0" />
          <span className="font-body text-body-sm text-brand-slate">{hours.monday || "Call for hours"}</span>
        </div>
      )}
    </div>
    <div className="flex gap-2">
      <Link to={`/locations/${slug}`} className="flex-1">
        <Button variant="secondary" size="sm" className="w-full">
          View Office
          <ArrowRight className="w-3 h-3" />
        </Button>
      </Link>
      <a href={`tel:${phone.replace(/-/g, '')}`}>
        <Button variant="default" size="sm">
          <Phone className="w-3 h-3" />
          Call
        </Button>
      </a>
    </div>
  </div>
);

export default LocationCard;
