import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Clock, Users, Zap, Globe, Phone, ArrowRight,
  Shield, Heart, Smile, Sparkles, CalendarCheck, Building2,
  CreditCard, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import PromoCard from "@/components/PromoCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-family.jpg";
import promotions from "@/data/promotions.json";
import services from "@/data/services.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const serviceTabs = [
  { label: "Family Dentistry", categories: ["preventive", "general"] },
  { label: "Cosmetic", categories: ["cosmetic"] },
  { label: "Restorative", categories: ["restorative"] },
  { label: "Kids", categories: ["pediatric"] },
  { label: "Orthodontics", categories: ["orthodontics"] },
];

const insuranceCarriers = [
  "Aetna", "Delta Dental", "Careington", "MetLife", "Humana", "United Healthcare",
  "Anthem", "Guardian", "BlueCross BlueShield", "Unicare", "DHA", "United Concordia",
  "Ameritas", "Cigna", "Assurant", "Medicare"
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filteredServices = services
    .filter(s => serviceTabs[activeTab].categories.includes(s.category))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Navbar />

      {/* ═══ 1. HERO ═══ */}
      <section className="bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="relative z-10">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">
              23 Locations Across Las Vegas Valley
            </motion.span>
            <motion.h1
              variants={fadeUp} custom={1}
              className="font-display text-[clamp(34px,5vw,64px)] font-extrabold text-white leading-[1.05] mt-4 mb-4 text-balance"
              style={{ letterSpacing: "-1.5px" }}
            >
              Delivering Smiles Across Las Vegas Valley
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="font-accent italic text-[clamp(18px,2.5vw,28px)] text-blue-200 leading-relaxed mb-3">
              Beautiful smiles at affordable prices.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="font-body text-body-lg text-navy-200 mb-8 max-w-lg">
              Welcome to our family of dental offices in Las Vegas & Henderson, NV. No corporate fluff, no upselling — open 7 days a week with same-day emergency appointments.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                Find Your New Dentist Today
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="emergency" size="lg">
                <Phone className="w-4 h-4" />
                Same-Day Emergency — $49
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-card overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Smiling families at Good Doc Dental" className="w-full h-[480px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. TRUST BAR ═══ */}
      <section className="bg-brand-sky py-5 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: MapPin, text: "23 Locations Valleywide" },
              { icon: Clock, text: "Open 7 Days a Week" },
              { icon: Users, text: "All Ages Welcome" },
              { icon: Zap, text: "Same-Day Emergency Care" },
              { icon: Globe, text: "Book Online 24/7" },
            ].map((item, i) => (
              <motion.div key={item.text} variants={fadeUp} custom={i} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. WHY YOU'LL LOVE IT HERE ═══ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Why Good Doc Dental"
            heading="Why You'll Love It Here"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Locations Valleywide", desc: "23 offices across Las Vegas, Henderson, and North Las Vegas. There's always one near you." },
              { icon: Clock, title: "Open Weekdays & Weekends", desc: "Evenings, Saturdays, and Sundays. Because toothaches don't wait for Monday." },
              { icon: Users, title: "Dentistry for Adults & Kids", desc: "7 dedicated kids offices and 16 family locations. The whole family under one roof." },
              { icon: Zap, title: "Emergency Dental Care", desc: "Same-day appointments 7 days a week. Walk-ins welcome. $49 emergency exam & X-ray." },
              { icon: CalendarCheck, title: "Convenient Booking", desc: "Call, text, or book online 24/7. Free benefits check before any treatment." },
              { icon: Building2, title: "All Specialties Under One Roof", desc: "General, cosmetic, restorative, orthodontics, implants, oral surgery, and pediatric — all in-house." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-200">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-display text-h4 text-brand-navy mb-2">{item.title}</h3>
                <p className="font-body text-body-sm text-brand-slate">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. SERVICES TABS ═══ */}
      <section className="bg-brand-sky py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="What We Do"
            heading="Our Services in Las Vegas"
          />
          {/* Tab switcher */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {serviceTabs.map((tab, i) => (
              <motion.button
                key={tab.label}
                variants={fadeUp}
                custom={i}
                onClick={() => setActiveTab(i)}
                className={`font-display font-semibold text-body-sm px-5 py-2.5 rounded-btn transition-all duration-200 active:scale-[0.97] ${
                  activeTab === i
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-white text-brand-navy border border-blue-100 hover:border-brand-blue"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredServices.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                slug={s.slug}
                tagline={s.tagline}
                priceDisplay={s.priceDisplay}
                priceUnit={s.priceUnit}
                icon={s.icon}
                promoText={s.promoText}
              />
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button variant="secondary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 5. PROMOTIONS ═══ */}
      <section className="bg-gold-50 py-20 md:py-28 border-y border-gold-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Current Specials"
            heading="Affordable Dental Care, Just for You"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.filter(p => p.active).map((promo, i) => (
              <motion.div key={promo.id} variants={fadeUp} custom={i}>
                <PromoCard {...promo} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. INSURANCE ═══ */}
      <section className="bg-brand-sky py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Insurance"
            heading="Do You Take My Insurance?"
            description="We're in-network with most major PPO plans, including Medicare. Don't see yours? Call us — we'll check your benefits for free."
          />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {insuranceCarriers.map((carrier, i) => (
              <motion.span
                key={carrier}
                variants={fadeUp}
                custom={i * 0.5}
                className="font-display font-medium text-body-sm bg-white text-brand-navy px-4 py-2 rounded-btn border border-blue-100 shadow-sm"
              >
                {carrier}
              </motion.span>
            ))}
          </motion.div>
          <div className="text-center">
            <Button variant="secondary" size="lg">
              <Shield className="w-4 h-4" />
              Get Your Free Benefits Check
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 7. FINANCING ═══ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Financing"
            heading="Smile Now & Pay-Over-Time"
            description="Don't let cost stand between you and the care you need. We offer flexible payment plans through trusted partners."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sunbit",
                desc: "Apply in 30 seconds. Up to $20,000 in financing. No hard credit check. 90% approval rate.",
                plans: ["3 months", "6 months", "12 months"],
              },
              {
                name: "CareCredit",
                desc: "The healthcare credit card. Use at any Good Doc Dental office. Special promotional financing available.",
                plans: ["3 months", "6 months", "12 months"],
              },
            ].map((provider, i) => (
              <motion.div
                key={provider.name}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-8 h-8 text-brand-teal" />
                  <h3 className="font-display text-h3 text-brand-navy">{provider.name}</h3>
                </div>
                <p className="font-body text-body-sm text-brand-slate mb-5">{provider.desc}</p>
                <div className="flex gap-2">
                  {provider.plans.map((plan) => (
                    <span key={plan} className="font-display font-semibold text-caption bg-brand-sky text-brand-navy px-3 py-1.5 rounded-btn">
                      {plan}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button variant="secondary">
              Learn About Financing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 8. TESTIMONIALS ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Patient Stories"
            heading="Hear From Our Patients"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Patricia K.", location: "Henderson", quote: "My kids used to dread the dentist. Now they actually ask when their next appointment is. The staff is so patient and kind — truly feels like family." },
              { name: "Michelle M.", location: "Summerlin", quote: "I hadn't been to the dentist in over five years. They made me feel completely at ease, no judgment. Got a full treatment plan and the financing made it painless." },
              { name: "Alan S.", location: "North Las Vegas", quote: "Had an emergency on a Saturday — cracked tooth. They got me in within the hour. Professional, fast, and the $49 exam saved me hundreds. Can't recommend enough." },
            ].map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} custom={i}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. LOCATION FINDER ═══ */}
      <section className="bg-brand-sky py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Find Us"
            heading="Let's Find the Right Dentist For You"
            description="23 offices across Las Vegas, Henderson, and North Las Vegas. There's always one near you."
          />
          {/* Search bar */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl mx-auto mb-8"
          >
            <motion.div variants={fadeUp} custom={0} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate" />
              <input
                type="text"
                placeholder="Search by city, zip code, or office name..."
                className="w-full pl-12 pr-4 py-3.5 rounded-btn border border-blue-100 bg-white font-body text-body text-brand-navy placeholder:text-navy-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </motion.div>
          </motion.div>
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-card overflow-hidden shadow-lg border border-blue-100 mb-10"
          >
            <iframe
              title="Good Doc Dental Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45402815884!2d-115.36249!3d36.114647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1711000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          {/* City cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Las Vegas", count: 13, areas: "Summerlin, Blue Diamond, Skye Canyon, Fort Apache, Charleston" },
              { city: "Henderson", count: 7, areas: "Cadence, Inspirada, St. Rose, Boulder Hwy, Lake Mead" },
              { city: "North Las Vegas", count: 3, areas: "North 5th, Revere, Sedona Ranch" },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                  <h3 className="font-display text-h3 text-brand-navy">{loc.city}</h3>
                </div>
                <p className="font-display font-bold text-brand-blue text-body-lg mb-2">{loc.count} offices</p>
                <p className="font-body text-body-sm text-brand-slate mb-5">{loc.areas}</p>
                <Button variant="secondary" size="sm">
                  View {loc.city} Offices
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button variant="default" size="lg">
              <MapPin className="w-4 h-4" />
              Find a Location Near You
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 10. EMERGENCY CTA ═══ */}
      <section className="bg-brand-coral py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-h2 text-white mb-3 text-balance">
              Same-Day Emergency Care
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-body text-body-lg text-coral-50 mb-3">
              7 days a week. Walk-ins welcome.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mb-8">
              <span className="font-display font-extrabold text-[40px] text-white">$49</span>
              <span className="font-body text-body-lg text-coral-50 ml-2">Emergency Exam & X-Ray</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-lg" size="lg">
                <Phone className="w-4 h-4" />
                Call Now for Same-Day Care
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 11. FOOTER ═══ */}
      <Footer />
    </div>
  );
};

/* ─── Shared section header ─── */
const SectionHeader = ({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="text-center mb-14"
  >
    <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">
      {eyebrow}
    </motion.span>
    <motion.h2 variants={fadeUp} custom={1} className="font-display text-h2 text-brand-navy mt-3 text-balance">
      {heading}
    </motion.h2>
    {description && (
      <motion.p variants={fadeUp} custom={2} className="font-body text-body-lg text-brand-slate mt-4 max-w-2xl mx-auto text-pretty">
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default Index;
