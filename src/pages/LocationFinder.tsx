import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, Search, Clock, Zap, Users,
  Check, Shield, CreditCard, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationCard from "@/components/LocationCard";
import PromoCard from "@/components/PromoCard";
import locations from "@/data/locations.json";
import promotions from "@/data/promotions.json";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const float = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatSlow = {
  initial: { y: 0 },
  animate: {
    y: [-5, 12, -5],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatReverse = {
  initial: { y: 0 },
  animate: {
    y: [6, -10, 6],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
  },
};

type FilterType = "all" | "kids" | "Las Vegas" | "Henderson" | "North Las Vegas";

const filters: { label: string; value: FilterType }[] = [
  { label: "All Offices", value: "all" },
  { label: "Kids Only", value: "kids" },
  { label: "Las Vegas", value: "Las Vegas" },
  { label: "Henderson", value: "Henderson" },
  { label: "North Las Vegas", value: "North Las Vegas" },
];

const cityCards = [
  { city: "Las Vegas", count: 13, slug: "las-vegas", body: "From Summerlin to Enterprise, we have 13 dental and kids offices across Las Vegas serving families throughout the valley." },
  { city: "Henderson", count: 7, slug: "henderson", body: "Cadence, Inspirada, St. Rose, and throughout Henderson — 7 offices serving Henderson families with convenient locations." },
  { city: "North Las Vegas", count: 3, slug: "north-las-vegas", body: "North 5th Street, Revere, and Sedona Ranch — dental care for North Las Vegas families, close to home." },
];

const insuranceCarriers = [
  "Aetna", "Delta Dental", "Careington", "MetLife", "Humana", "United Healthcare",
  "Anthem", "Guardian", "BlueCross BlueShield", "Unicare", "DHA", "United Concordia",
  "Ameritas", "Cigna", "Assurant", "Medicare",
];

const faqs = [
  { q: "How many Good Doc Dental offices are there?", a: "We have 23 offices across the Las Vegas Valley — 13 in Las Vegas, 7 in Henderson, and 3 in North Las Vegas. This includes 7 dedicated kids-only offices designed specifically for pediatric patients. No matter where you live in the valley, you're never far from a Good Doc Dental office." },
  { q: "Are all services available at every location?", a: "Most general, preventive, and cosmetic services are available at all family offices. Some specialized services like oral surgery, periodontia, or complex orthodontics may be available at specific locations. Our 7 kids offices focus exclusively on pediatric dentistry and orthodontics. When you book an appointment, we'll make sure you're scheduled at the right office for your needs." },
  { q: "Can I switch between offices?", a: "Absolutely. Your dental records are accessible across all Good Doc Dental locations. If you move, change jobs, or just find a more convenient office, switching is seamless. Just let us know your new preferred location, and we'll transfer your records immediately." },
  { q: "Do all offices accept the same insurance?", a: "Yes. Every Good Doc Dental office accepts the same 16 major insurance carriers. We also offer Sunbit and CareCredit financing at all locations for flexible payment plans. We'll verify your benefits for free before your visit, so you know exactly what to expect cost-wise." },
];

const activePromos = promotions.filter(p => p.active && p.id !== "wisdom-teeth");

const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredLocations = useMemo(() => {
    let filtered = [...locations];

    // Apply filter
    if (activeFilter === "kids") {
      filtered = filtered.filter(l => l.kidsOffice);
    } else if (activeFilter !== "all") {
      filtered = filtered.filter(l => l.city === activeFilter);
    }

    // Apply search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(l =>
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        l.zip.includes(q)
      );
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  const kidsLocations = locations.filter(l => l.kidsOffice);

  // Group filtered locations by city
  const groupedLocations = useMemo(() => {
    const groups: Record<string, typeof locations> = {};
    filteredLocations.forEach(loc => {
      if (!groups[loc.city]) groups[loc.city] = [];
      groups[loc.city].push(loc);
    });
    return groups;
  }, [filteredLocations]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PromoBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-brand-navy relative overflow-hidden">
        <motion.div variants={floatSlow} initial="initial" animate="animate"
          className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[100px] pointer-events-none" />
        <motion.div variants={floatReverse} initial="initial" animate="animate"
          className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/4 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/6 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/8">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-blue-200">23 Locations</span>
            </motion.div>

            <motion.h1 variants={reveal} custom={1}
              className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] tracking-[-2.5px] mb-7">
              Find a Good Doc
              <br />Dental Near You
            </motion.h1>

            <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-blue-200/70 mb-5 max-w-xl leading-[1.6]">
              23 offices across the Las Vegas Valley — one is right around the corner.
            </motion.p>

            <motion.p variants={reveal} custom={3} className="font-body text-body text-navy-100/80 mb-12 max-w-xl leading-[1.7]">
              From Summerlin to Henderson, Skye Canyon to Inspirada — we've got you covered. Every office offers the same high-quality care, the same great promotions, and the same commitment to your family's smiles.
            </motion.p>
          </motion.div>

          {/* SEARCH & FILTERS */}
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={reveal} custom={4} className="relative mb-5">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by zip code, neighborhood, or office name"
                className="w-full bg-white rounded-lg border-2 border-brand-blue/40 pl-12 pr-4 py-3 font-body text-body text-brand-navy placeholder:text-brand-slate/60 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                aria-label="Search offices"
              />
            </motion.div>

            <motion.div variants={reveal} custom={5} className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`font-display font-semibold text-body-sm px-4 py-2.5 rounded-btn border-2 transition-all duration-200 ${
                    activeFilter === f.value
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-white text-brand-slate border-gray-300 hover:border-brand-blue/40"
                  }`}
                  aria-pressed={activeFilter === f.value}
                >
                  {f.label}
                </button>
              ))}

              <a href="tel:7028522829" className="ml-auto hidden md:block">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="secondary" size="sm" className="border-white/20 text-white hover:bg-white/8">
                    <Phone className="w-3.5 h-3.5" /> Or Call Us: 702-852-2829
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206252.721472847!2d-115.17!3d36.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
          className="w-full h-[250px] md:h-[350px] lg:h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Good Doc Dental Locations Map"
          aria-label="Map showing all Good Doc Dental office locations"
        />
      </section>

      {/* CITY HUBS */}
      <section className="py-28 md:py-36 relative">
        <motion.div variants={float} initial="initial" animate="animate"
          className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Explore by City</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
              Three Cities, One Great Dental Network
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
            {cityCards.map((card, i) => (
              <motion.div key={card.city} variants={reveal} custom={i}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[24px] p-8 border border-blue-100/60 group">
                <h3 className="font-display text-h3 font-extrabold text-brand-navy mb-2">{card.city}</h3>
                <span className="font-display font-bold text-body-sm text-brand-teal">{card.count} Offices</span>
                <p className="font-body text-body text-brand-slate leading-[1.7] mt-4 mb-8">{card.body}</p>
                <Link to={`/locations/${card.slug}`}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="default" className="w-full">View {card.city} Offices <ArrowRight className="w-4 h-4" /></Button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ALL OFFICES GRID */}
      <section ref={gridRef} className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
        <motion.div variants={floatReverse} initial="initial" animate="animate"
          className="absolute left-10 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">All Locations</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
              Every Good Doc Dental Office
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
              All 23 of our offices offer the same high-quality care, the same great promotions, and book appointments 24/7. Use the search and filters above to find the office closest to you.
            </motion.p>
          </motion.div>

          {filteredLocations.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="font-display font-bold text-h4 text-brand-navy mb-3">No offices found</p>
              <p className="font-body text-body text-brand-slate mb-6">Try adjusting your search or filters.</p>
              <Button variant="secondary" onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}>
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            Object.entries(groupedLocations).map(([city, locs]) => (
              <div key={city} className="mb-12 last:mb-0">
                <div className="border-b border-blue-100/60 pb-3 mb-6">
                  <span className="font-display font-semibold text-body uppercase tracking-[0.15em] text-brand-navy">{city}</span>
                  <span className="font-body text-body-sm text-brand-slate ml-3">{locs.length} {locs.length === 1 ? "office" : "offices"}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {locs.map((loc, i) => (
                    <motion.div key={loc.id}
                      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4 }}>
                      <div className="relative">
                        {loc.kidsOffice && (
                          <span className="absolute -top-2.5 right-4 z-10 font-display font-semibold text-[11px] uppercase tracking-wider bg-brand-teal text-white px-3 py-1 rounded-btn">
                            Kids Office
                          </span>
                        )}
                        <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* KIDS OFFICES SPOTLIGHT */}
      <section className="bg-brand-sky py-28 md:py-36 relative overflow-hidden">
        <motion.div variants={floatSlow} initial="initial" animate="animate"
          className="absolute right-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-teal/5 blur-[50px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">For Little Smiles</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
              7 Offices Built Just for Kids
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
              Our dedicated kids offices are designed from the ground up for young patients. Colorful, fun, and staffed by pediatric dental specialists. If you're looking for a dentist for your child, these are the ones.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {kidsLocations.map((loc, i) => (
              <motion.div key={loc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
                <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/services/kids-dentistry">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default">Learn About Kids Dentistry <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="bg-gold-50 py-28 md:py-36 relative overflow-hidden">
        <motion.div variants={float} initial="initial" animate="animate"
          className="absolute left-10 top-20 w-[140px] h-[140px] rounded-full bg-brand-gold/6 blur-[50px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-gold">Current Specials</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
              Available at Every Location
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
              These promotions are available at all 23 Good Doc Dental offices. Take advantage of our current specials and get the dental care you need at an affordable price.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {activePromos.map((promo, i) => (
              <motion.div key={promo.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
                <PromoCard
                  title={promo.title}
                  price={promo.price}
                  regularPrice={promo.regularPrice}
                  description={promo.description}
                  cta={promo.cta}
                  ctaVariant={promo.ctaVariant}
                  type={promo.type}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INSURANCE & FINANCING */}
      <section className="bg-brand-sky py-28 md:py-36 relative overflow-hidden">
        <motion.div variants={floatReverse} initial="initial" animate="animate"
          className="absolute right-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Insurance Accepted</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
              We Accept 16 Major Dental Insurance Plans
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
              Every Good Doc Dental office accepts the same 16 insurance carriers. We'll verify your benefits for free before any treatment. No surprises, no hidden costs.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={reveal} custom={0} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {insuranceCarriers.map((carrier) => (
                <div key={carrier} className="bg-white rounded-[14px] px-5 py-3.5 border border-blue-100/60 text-center">
                  <span className="font-display font-semibold text-body-sm text-brand-navy">{carrier}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={reveal} custom={1}
              className="bg-white border-2 border-brand-blue/30 rounded-[14px] p-5 flex items-start gap-4 mb-12 max-w-2xl">
              <Info className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
              <p className="font-body text-body-sm text-brand-slate leading-[1.6]">
                Medicaid is not accepted. However, emergency care is available out-of-pocket at all locations with our $49 emergency special.
              </p>
            </motion.div>

            <motion.div variants={reveal} custom={2}>
              <h3 className="font-display font-bold text-h4 text-brand-navy mb-4">Flexible Payment Plans</h3>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-8 max-w-2xl">
                Beyond insurance, we offer Sunbit and CareCredit financing accepted at all 23 locations. Split payments into 3, 6, or 12-month installments with no interest options.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="dark">Get Your Free Benefits Check <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36 relative">
        <motion.div variants={float} initial="initial" animate="animate"
          className="absolute left-10 top-32 w-[100px] h-[100px] rounded-full bg-brand-blue/4 blur-[40px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">FAQ</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-14 leading-[1.05] tracking-[-1.5px]">
              Common Questions About Our Locations
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={reveal} custom={i}>
                  <AccordionItem value={`faq-${i}`} className="bg-white border border-blue-50 rounded-[20px] px-7 overflow-hidden data-[state=open]:shadow-lg transition-shadow duration-300">
                    <AccordionTrigger className="font-display font-bold text-body-lg text-brand-navy hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-body-lg text-brand-slate leading-[1.7] pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-brand-navy py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.06),transparent_50%)]" />
        <motion.div variants={float} initial="initial" animate="animate"
          className="absolute right-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-white mb-16 leading-[1.05] tracking-[-1.5px]">
              Why Patients Choose Good Doc Dental Locations
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "Open 7 Days a Week", body: "Most offices are open 6–7 days per week, including evenings and Sundays. Because life is busy." },
              { icon: Zap, title: "Same-Day Emergency Care", body: "$49 emergency exam & x-ray, available 7 days a week with no appointment needed. We're here when you hurt." },
              { icon: Users, title: "Whole Family Welcome", body: "From babies to seniors, all ages and all family sizes welcome. Kids, teens, adults, and grandparents in one convenient network." },
            ].map((card, i) => (
              <motion.div key={card.title} variants={reveal} custom={i}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/6 rounded-[20px] p-8 border-l-4 border-l-brand-teal transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h4 className="font-display text-h5 font-bold text-white mb-3 leading-tight">{card.title}</h4>
                <p className="font-body text-body text-navy-200 leading-[1.7]">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(4,116,193,0.06),transparent_60%)]" />
        <motion.div variants={floatSlow} initial="initial" animate="animate"
          className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
            <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
              Your Neighborhood Dentist
              <br />Is Closer Than You Think
            </motion.h2>
            <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
              23 offices. Open 7 days. Same-day emergency care. Book online, call, or text — whatever's easiest for you and your family.
            </motion.p>
            <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/20">
                  Book Your Visit Today <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <a href="tel:7028522829">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="emergency" size="lg">
                    <Phone className="w-4 h-4" /> Call Now — $49 Emergency Exam
                  </Button>
                </motion.div>
              </a>
            </motion.div>
            <motion.p variants={reveal} custom={3} className="font-display font-bold text-body-lg text-white mt-6">
              <a href="tel:7028522829" className="hover:text-brand-teal transition-colors">702-852-2829</a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationFinder;
