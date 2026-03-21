import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating?: number;
}

const TestimonialCard = ({ name, location, quote, rating = 5 }: TestimonialCardProps) => (
  <div className="bg-white rounded-card border border-blue-50 p-8 relative overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />
    <div className="flex gap-1 mb-4">
      {Array.from({ length: rating }).map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
      ))}
    </div>
    <p className="font-accent italic text-body-lg text-brand-slate mb-6 leading-relaxed">
      "{quote}"
    </p>
    <div>
      <span className="font-display font-bold text-body-sm text-brand-navy">{name}</span>
      <span className="font-body text-caption text-brand-slate ml-2">— {location}</span>
    </div>
  </div>
);

export default TestimonialCard;
