import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, Calendar, Shield, CreditCard, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationCard from "@/components/LocationCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PromoCard from "@/components/PromoCard";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import promotions from "@/data/promotions.json";
import { locationContentMap } from "@/data/locationContent";
import dentalOffice from "@/assets/dental-office-interior.jpg";
import happyKid from "@/assets/happy-kid-dental.jpg";
import happyFamily from "@/assets/happy-family-smiles.jpg";

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const insuranceCarriers = [
  "Aetna", "Anthem BCBS", "Cigna", "Delta Dental", "Guardian",
  "Humana", "Lincoln Financial", "MetLife", "Principal", "Sun Life",
  "UnitedHealthcare", "Ameritas", "GEHA", "Mutual of Omaha",
  "Renaissance", "Medicare",
];

const familyServiceSlugs = ["dental-exams", "dental-cleanings", "dental-implants", "invisalign", "emergency-dental-care", "dental-crowns"];
const kidsServiceSlugs = ["kids-dentistry", "dental-cleanings", "dental-exams", "baby-toddler-dentistry", "kids-orthodontics", "dental-sedation"];

const formatHours = (hours?: Record<string, string>) => {
  if (!hours) return null;
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days.map((d, i) => ({ day: labels[i], hours: hours[d] || "Closed" }));
};

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const location = useMemo(() => locations.find((l) => l.slug === slug), [slug]);
  const content = slug ? locationContentMap[slug] : undefined;

  const isKids = location?.kidsOffice ?? false;
  const fullAddress = location ? `${location.address}, ${location.city}, NV ${location.zip}` : "";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const citySlug = location?.city === "Henderson" ? "henderson" : location?.city === "North Las Vegas" ? "north-las-vegas" : "las-vegas";

  const officeServices = useMemo(() => {
    const slugs = isKids ? kidsServiceSlugs : familyServiceSlugs;
    return services.filter((s) => slugs.includes(s.slug));
  }, [isKids]);

  const officePromos = useMemo(() => {
    const promos = promotions.filter((p: any) => p.active);
    if (isKids) return promos.filter((p: any) => p.type === "kids" || p.type === "orthodontics").slice(0, 2);
    return promos.filter((p: any) => p.type === "emergency" || p.type === "invisalign" || p.type === "implants").slice(0, 3);
  }, [isKids]);

  const nearbyOffices = useMemo(() => {
    if (!location) return [];
    return locations.filter((l) => l.city === location.city && l.slug !== location.slug).slice(0, 3);
  }, [location]);

  const hoursData = useMemo(() => formatHours(location?.hours), [location]);

  if (!location || !content) return <Navigate to="/locations" replace />;

  const heroBg = isKids ? "bg-brand-sky" : "bg-brand-navy";
  const heroText = isKids ? "text-brand-navy" : "text-white";
  const heroSub = isKids ? "text-brand-slate" : "text-navy-200";
  const heroAccent = isKids ? "text-brand-blue" : "text-blue-200/80";

  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className={`relative ${heroBg} overflow-hidden`}>
        {!isKids && (
          <div className="absolute inset-0">
            <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/8 blur-[100px]" />
            <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-teal/6 blur-[80px]" />
          </div>
        )}
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={reveal} custom={0} className={`inline-flex items-center gap-2 ${isKids ? "bg-brand-blue/8" : "bg-white/8"} backdrop-blur-sm rounded-btn px-4 py-2 mb-6`}>
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className={`font-display font-semibold text-caption uppercase tracking-[0.1em] ${isKids ? "text-brand-blue" : "text-white/80"}`}>{content.neighborhood}</span>
            </motion.div>
            <motion.h1 variants={reveal} custom={1} className={`font-display text-display md:text-[56px] md:leading-[1.04] ${heroText} mb-5`}>
              {content.heroHeadline}
            </motion.h1>
            <motion.p variants={reveal} custom={2} className={`font-accent italic text-body-lg ${heroAccent} mb-6`}>
              {content.heroBody}
            </motion.p>
            <motion.div variants={reveal} custom={3} className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5">
                <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isKids ? "text-brand-blue" : "text-brand-teal"}`} />
                <span className={`font-body text-body-lg ${heroSub}`}>{fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className={`w-5 h-5 flex-shrink-0 ${isKids ? "text-brand-blue" : "text-brand-teal"}`} />
                <a href={`tel:${location.phone.replace(/-/g, "")}`} className={`font-display font-bold text-body-lg ${heroText} hover:underline`}>{location.phone}</a>
              </div>
            </motion.div>
            <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
              <Button size="lg">
                {isKids ? "Schedule Your Child's Visit" : "Book an Appointment"}
                <Calendar className="w-4 h-4" />
              </Button>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className={isKids ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/15"}>
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-blue-50 py-5">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap items-center justify-between gap-4">
            <motion.div variants={reveal} custom={0} className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-teal" />
              <span className="font-body text-body-sm text-brand-slate">{hoursData ? `Mon–Fri: ${hoursData[0].hours}` : `Call for hours: ${location.phone}`}</span>
            </motion.div>
            <motion.div variants={reveal} custom={1} className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-teal" />
              <a href={`tel:${location.phone.replace(/-/g, "")}`} className="font-body text-body-sm text-brand-blue hover:underline font-medium">{location.phone}</a>
            </motion.div>
            <motion.div variants={reveal} custom={2} className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-teal" />
              <span className="font-body text-body-sm text-brand-slate">{location.address}, {location.city}</span>
            </motion.div>
            <motion.div variants={reveal} custom={3}>
              <Button size="sm">Book Now</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Image + Map */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-5">
          <motion.div variants={reveal} custom={0} className="rounded-card overflow-hidden shadow-lg">
            <img src={isKids ? happyKid : dentalOffice} alt={`Inside ${location.name}`} className="w-full h-[260px] md:h-[300px] object-cover" />
          </motion.div>
          <motion.div variants={reveal} custom={1} className="rounded-card border border-blue-50 bg-brand-sky/30 flex flex-col items-center justify-center gap-4 p-8">
            <MapPin className="w-10 h-10 text-brand-blue" />
            <p className="font-display font-bold text-h4 text-brand-navy text-center">{location.name}</p>
            <p className="font-body text-body text-brand-slate text-center">{fullAddress}</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Google Maps
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-brand-sky/40">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Our Services</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-3">Services at {location.name}</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate max-w-xl">
              We offer comprehensive dental care for {isKids ? "children of all ages" : "the whole family"}.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {officeServices.map((s: any, i: number) => (
              <motion.div key={s.slug} variants={reveal} custom={i}>
                <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} priceUnit={s.priceUnit} icon={s.icon} promoText={s.promoText} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">About Us</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-6">{content.aboutHeading}</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-6 leading-relaxed">{content.aboutBody}</motion.p>
            <motion.p variants={reveal} custom={3} className="font-body text-body text-brand-slate">
              <span className="font-semibold text-brand-navy">Located in {content.neighborhood}</span> — {content.nearbyLandmarks}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-20 md:py-28 bg-gold-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Current Offers</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">Special Offers at {location.name}</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className={`grid grid-cols-1 ${officePromos.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" : "md:grid-cols-3"} gap-5`}>
            {officePromos.map((p: any, i: number) => (
              <motion.div key={p.id} variants={reveal} custom={i}>
                <PromoCard title={p.title} price={p.price} regularPrice={p.regularPrice} description={p.description} cta={p.cta} ctaVariant={p.ctaVariant} type={p.type} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-10">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Insurance</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-4">Insurance Accepted</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate max-w-xl mx-auto">We accept 16 major dental insurance plans and offer flexible financing through Sunbit and CareCredit.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-6">
            {insuranceCarriers.map((c, i) => (
              <motion.span key={c} variants={reveal} custom={i % 8} className="bg-brand-sky text-brand-navy font-display font-semibold text-caption px-4 py-2 rounded-btn">{c}</motion.span>
            ))}
          </motion.div>
          <div className="text-center">
            <p className="font-body text-body-sm text-brand-slate mb-5">Medicaid is not accepted.</p>
            <Link to="/new-patients/insurance">
              <Button variant="secondary" size="lg">
                <CreditCard className="w-4 h-4" />
                Get Your Free Benefits Check
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      {hoursData && (
        <section className="py-20 md:py-28 bg-brand-sky/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-lg mx-auto">
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block text-center">Hours</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-8 text-center">Office Hours</motion.h2>
              <motion.div variants={reveal} custom={2} className="bg-white rounded-card border border-blue-50 overflow-hidden shadow-sm">
                {hoursData.map((row, i) => {
                  const isWeekend = row.day === "Saturday" || row.day === "Sunday";
                  const isOpen = row.hours !== "Closed";
                  return (
                    <div key={row.day} className={`flex items-center justify-between px-6 py-4 ${i < hoursData.length - 1 ? "border-b border-blue-50" : ""} ${isWeekend && isOpen ? "bg-brand-sky/40" : ""}`}>
                      <span className={`font-display font-semibold text-body ${isWeekend && isOpen ? "text-brand-blue" : "text-brand-navy"}`}>{row.day}</span>
                      <span className={`font-body text-body ${isOpen ? "text-brand-slate" : "text-brand-slate/50"}`}>{row.hours}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Reviews</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">What Patients Say About {location.name}</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {content.testimonials.map((t, i) => (
              <motion.div key={t.name} variants={reveal} custom={i}>
                <TestimonialCard name={t.name} location={content.neighborhood} quote={t.quote} rating={t.stars} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nearby Offices */}
      {nearbyOffices.length > 0 && (
        <section className="py-20 md:py-28 bg-brand-sky/40">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Nearby</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">Other Good Doc Dental Offices Near {location.name}</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {nearbyOffices.map((loc, i) => (
                <motion.div key={loc.id} variants={reveal} custom={i}>
                  <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Link to={`/locations/${citySlug}`}>
                <Button variant="secondary" size="lg">View All {location.city} Offices <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className={`${isKids ? "bg-brand-sky" : "bg-brand-navy"} py-20 md:py-28 relative overflow-hidden`}>
        {!isKids && <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2 variants={reveal} custom={0} className={`font-display text-h2 md:text-h1 ${isKids ? "text-brand-navy" : "text-white"} mb-4`}>
              {isKids ? "Give Your Child a Great Dental Experience" : "Ready to Get Started?"}
            </motion.h2>
            <motion.p variants={reveal} custom={1} className={`font-body text-body-lg ${isKids ? "text-brand-slate" : "text-navy-200"} mb-8 max-w-xl mx-auto`}>
              Book your appointment at {location.name} today — online, by phone, or walk in.
            </motion.p>
            <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-3">
              <Button size="lg">
                {isKids ? "Schedule Your Child's Visit" : "Book an Appointment"}
                <Calendar className="w-4 h-4" />
              </Button>
              <a href={`tel:${location.phone.replace(/-/g, "")}`}>
                <Button variant="secondary" size="lg" className={isKids ? "" : "bg-white/10 border-white/20 text-white hover:bg-white/15"}>
                  <Phone className="w-4 h-4" />
                  Call {location.phone}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;
