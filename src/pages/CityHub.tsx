import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Zap, Tag, ArrowRight, Shield, CreditCard, Heart, Building2 } from "lucide-react";
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

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const insuranceCarriers = [
  "Aetna", "Anthem BCBS", "Cigna", "Delta Dental", "Guardian",
  "Humana", "Lincoln Financial", "MetLife", "Principal", "Sun Life",
  "UnitedHealthcare", "Ameritas", "GEHA", "Mutual of Omaha",
  "Renaissance", "Medicare",
];

interface CityHubProps {
  city: "Las Vegas" | "Henderson" | "North Las Vegas";
  slug: "las-vegas" | "henderson" | "north-las-vegas";
}

const cityTaglines: Record<string, string> = {
  "Las Vegas": "offices across the valley — from Summerlin to Silverado Ranch.",
  "Henderson": "offices serving Henderson — from Cadence to Inspirada.",
  "North Las Vegas": "offices in North Las Vegas — Aliante, Revere, and Sedona Ranch.",
};

const topServiceSlugs = ["dental-exams", "dental-cleanings", "dental-implants", "invisalign", "emergency-dental-care", "kids-dentistry"];

const CityHub = ({ city, slug }: CityHubProps) => {
  const cityLocations = useMemo(() => locations.filter((l) => l.city === city), [city]);
  const familyOffices = useMemo(() => cityLocations.filter((l) => !l.kidsOffice), [cityLocations]);
  const kidsOffices = useMemo(() => cityLocations.filter((l) => l.kidsOffice), [cityLocations]);
  const count = cityLocations.length;

  const topServices = useMemo(
    () => services.filter((s) => topServiceSlugs.includes(s.slug)),
    []
  );

  const activePromos = useMemo(
    () => promotions.filter((p: any) => p.active).slice(0, 3),
    []
  );

  const testimonials = useMemo(() => {
    const all: { name: string; stars: number; quote: string; office: string }[] = [];
    for (const loc of cityLocations) {
      const content = locationContentMap[loc.slug];
      if (content) {
        for (const t of content.testimonials) {
          all.push({ ...t, office: loc.name });
        }
      }
      if (all.length >= 3) break;
    }
    return all.slice(0, 3);
  }, [cityLocations]);

  const scrollToOffices = () => {
    document.getElementById("office-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/8 blur-[100px]" />
          <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-teal/6 blur-[80px]" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm rounded-btn px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="font-display font-semibold text-caption uppercase tracking-[0.1em] text-white/80">Good Doc Dental</span>
            </motion.div>
            <motion.h1 variants={reveal} custom={1} className="font-display text-display md:text-[56px] md:leading-[1.04] text-white mb-5">
              Dentists in {city}, NV
            </motion.h1>
            <motion.p variants={reveal} custom={2} className="font-accent italic text-body-lg text-blue-200/80 mb-4">
              {count} {cityTaglines[city]}
            </motion.p>
            <motion.p variants={reveal} custom={3} className="font-body text-body-lg text-navy-200 mb-8 max-w-xl">
              Find your neighborhood dentist at Good Doc Dental. Every office offers comprehensive dental care, accepts 16 insurance plans, and provides same-day emergency appointments. Open 6–7 days a week.
            </motion.p>
            <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
              <Button size="lg" onClick={scrollToOffices}>
                Find Your Office
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/15">
                Book Online 24/7
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-brand-sky py-6">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: MapPin, label: `${count} Offices` },
              { icon: Clock, label: "Open 7 Days" },
              { icon: Zap, label: "Same-Day Emergency" },
              { icon: Tag, label: "$49 Emergency Exam" },
            ].map((item, i) => (
              <motion.div key={item.label} variants={reveal} custom={i} className="flex items-center gap-2.5">
                <item.icon className="w-5 h-5 text-brand-blue" />
                <span className="font-display font-bold text-body-sm text-brand-navy">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office List */}
      <section id="office-list" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">{city} Offices</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">All Good Doc Dental Offices in {city}</motion.h2>
          </motion.div>

          {/* Family Offices */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.h3 variants={reveal} custom={0} className="font-display text-h4 text-brand-navy mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-brand-blue" />
              Family & General Dentistry
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {familyOffices.map((loc, i) => (
                <motion.div key={loc.id} variants={reveal} custom={i % 6}>
                  <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kids Offices */}
          {kidsOffices.length > 0 && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              <motion.h3 variants={reveal} custom={0} className="font-display text-h4 text-brand-navy mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-coral" />
                Kids-Only Offices
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {kidsOffices.map((loc, i) => (
                  <motion.div key={loc.id} variants={reveal} custom={i}>
                    <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-brand-sky/40">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Our Services</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-4">Dental Services in {city}</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate max-w-xl mx-auto">Every Good Doc Dental office in {city} provides a full range of dental services for the whole family.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {topServices.map((s: any, i: number) => (
              <motion.div key={s.slug} variants={reveal} custom={i}>
                <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} priceUnit={s.priceUnit} icon={s.icon} promoText={s.promoText} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Link to="/services">
              <Button variant="secondary" size="lg">View All Services <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Why Us</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">Why {city} Families Choose Good Doc Dental</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: MapPin, title: `${count} Convenient Locations`, body: `With ${count} offices across ${city}, there's always a Good Doc Dental nearby. Most patients are less than a 10-minute drive from one of our offices.` },
              { icon: Clock, title: "Open Evenings & Weekends", body: `We know life is busy. That's why most of our ${city} offices offer evening hours and Saturday appointments. Many offices are open Sundays too.` },
              { icon: Shield, title: "Transparent, Affordable Pricing", body: "No hidden fees, no surprise bills. We'll tell you exactly what treatment costs before we start, and we'll help you maximize your insurance benefits." },
              { icon: Zap, title: "Same-Day Emergency Care", body: `Toothache? Broken tooth? Don't wait. Every ${city} office offers same-day emergency appointments — $49 for an emergency exam and x-ray.` },
            ].map((card, i) => (
              <motion.div key={card.title} variants={reveal} custom={i} className="bg-white rounded-card border border-blue-50 p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-sky flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-display text-h4 text-brand-navy mb-3">{card.title}</h3>
                <p className="font-body text-body text-brand-slate">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-20 md:py-28 bg-gold-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Current Offers</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">Special Offers in {city}</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {activePromos.map((p: any, i: number) => (
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
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Insurance & Financing</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy mb-4">Insurance Accepted at All {city} Offices</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate max-w-xl mx-auto">Every Good Doc Dental location accepts 16 major insurance plans. We also offer Sunbit and CareCredit financing for flexible payment options.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-6">
            {insuranceCarriers.map((c, i) => (
              <motion.span key={c} variants={reveal} custom={i % 8} className="bg-brand-sky text-brand-navy font-display font-semibold text-caption px-4 py-2 rounded-btn">{c}</motion.span>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center">
            <motion.p variants={reveal} custom={0} className="font-body text-body-sm text-brand-slate mb-5">Medicaid is not accepted. Emergency care available out-of-pocket.</motion.p>
            <motion.div variants={reveal} custom={1}>
              <Link to="/new-patients/insurance">
                <Button variant="secondary" size="lg">
                  <CreditCard className="w-4 h-4" />
                  Get Your Free Benefits Check
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 md:py-28 bg-brand-sky/30">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-14">
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-label uppercase tracking-[0.12em] text-brand-blue mb-3 block">Patient Reviews</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-h2 text-brand-navy">What {city} Patients Are Saying</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} variants={reveal} custom={i}>
                  <TestimonialCard name={t.name} location={t.office} quote={t.quote} rating={t.stars} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-brand-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2 variants={reveal} custom={0} className="font-display text-h2 md:text-h1 text-white mb-4">Find Your {city} Dentist Today</motion.h2>
            <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Book your first appointment at any of our {count} {city} offices — online, by phone, or walk in.
            </motion.p>
            <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={scrollToOffices}>
                Find Your Office
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a href="tel:7028522829">
                <Button variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/15">
                  Call, Text, or Book Online 24/7
                </Button>
              </a>
            </motion.div>
            <motion.p variants={reveal} custom={3} className="font-body text-body-sm text-navy-200 mt-4">702-852-2829</motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityHub;
