import { Button } from "@/components/ui/button";

interface PromoCardProps {
  title: string;
  price: string;
  regularPrice?: string;
  description: string;
  cta: string;
  ctaVariant: string;
  type: string;
}

const PromoCard = ({ title, price, regularPrice, description, cta, ctaVariant, type }: PromoCardProps) => {
  const isEmergency = type === "emergency";

  return (
    <div className={`rounded-card p-8 border flex flex-col ${
      isEmergency
        ? "bg-brand-coral text-white border-coral-600"
        : "bg-white border-gold-100"
    }`}>
      <div className="mb-2">
        <span className={`font-display font-extrabold text-h2 leading-tight ${isEmergency ? "text-white" : "text-brand-navy"}`}>
          {price}
        </span>
        {regularPrice && (
          <span className={`ml-2 font-body text-body-sm line-through ${isEmergency ? "text-coral-100" : "text-brand-slate"}`}>
            {regularPrice}
          </span>
        )}
      </div>
      <h3 className={`font-display text-h4 mb-2 ${isEmergency ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h3>
      <p className={`font-body text-body-sm mb-6 flex-1 ${isEmergency ? "text-coral-50" : "text-brand-slate"}`}>
        {description}
      </p>
      <Button
        variant={isEmergency ? "dark" : ctaVariant === "promo" ? "promo" : "default"}
        className={isEmergency ? "bg-white text-brand-coral hover:bg-coral-50" : ""}
      >
        {cta}
      </Button>
    </div>
  );
};

export default PromoCard;
