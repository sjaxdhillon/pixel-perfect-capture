interface PricingBlockProps {
  price: string;
  unit?: string;
  promoText?: string;
  disclaimer?: string;
}

const PricingBlock = ({ price, unit, promoText, disclaimer }: PricingBlockProps) => (
  <div className="text-center md:text-left">
    <span className="font-display font-extrabold text-h2 text-brand-navy">{price}</span>
    {unit && <span className="font-body text-body-sm text-brand-slate ml-2">{unit}</span>}
    {promoText && (
      <div className="inline-block ml-3 bg-brand-gold text-brand-navy font-display font-bold text-caption px-3 py-1 rounded-btn">
        {promoText}
      </div>
    )}
    {disclaimer && (
      <p className="font-body text-caption text-navy-200 italic mt-2">{disclaimer}</p>
    )}
  </div>
);

export default PricingBlock;
