import {
  Stethoscope, Sparkles, Puzzle, Crown, HeartPulse, MinusCircle, Link2, Zap,
  CircleDot, Smile, Layers, Sun, WandSparkles, AlignCenter, Grid3x3,
  Scissors, Shield, Baby, Siren, Moon, Heart, GraduationCap, User,
  Flashlight, Anchor, HeartHandshake, SmilePlus, Accessibility, type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  puzzle: Puzzle,
  crown: Crown,
  "heart-pulse": HeartPulse,
  "minus-circle": MinusCircle,
  link: Link2,
  zap: Zap,
  "circle-dot": CircleDot,
  smile: Smile,
  layers: Layers,
  sun: Sun,
  "wand-sparkles": WandSparkles,
  "align-center": AlignCenter,
  "grid-3x3": Grid3x3,
  scissors: Scissors,
  shield: Shield,
  baby: Baby,
  siren: Siren,
  moon: Moon,
  heart: Heart,
  "graduation-cap": GraduationCap,
  user: User,
  flashlight: Flashlight,
  anchor: Anchor,
  "heart-handshake": HeartHandshake,
  "smile-plus": SmilePlus,
  accessibility: Accessibility,
};

interface ServiceIconProps {
  icon: string;
  className?: string;
}

const ServiceIcon = ({ icon, className = "" }: ServiceIconProps) => {
  const Icon = iconMap[icon] || Stethoscope;
  return (
    <div className={`w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-200 ${className}`}>
      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-200" />
    </div>
  );
};

export default ServiceIcon;
