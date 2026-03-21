import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Clock, Users, Zap, Globe, Phone, ArrowRight,
  Shield, Heart, Sparkles, CalendarCheck, Building2,
  CreditCard, Search, Star, ChevronRight, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import heroPatient from "@/assets/hero-patient.jpg";
import kidsSmile from "@/assets/kids-smile.jpg";
import promotions from "@/data/promotions.json";
import services from "@/data/services.json";

/* ─── Animation variants ─── */
const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const serviceTabs = [
  { label: "Family", categories: ["preventive", "general"] },
  { label: "Cosmetic", categories: ["cosmetic"] },
  { label: "Restorative", categories: ["restorative"] },
  { label: "Kids", categories: ["pediatric"] },
  { label: "Orthodontics", categories: ["orthodontics"] },
  { label: "Emergency", categories: ["emergency"] },
];

const insuranceCarriers = [
  "Aetna", "Delta Dental", "Careington", "MetLife", "Humana", "United Healthcare",
  "Anthem", "Guardian", "BlueCross BlueShield", "Unicare", "DHA", "United Concordia",
  "Ameritas", "Cigna", "Assurant", "Medicare",
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const filteredServices = services
    .filter(s => serviceTabs[activeTab].categories.includes(s.category))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PromoBar />
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO — Immersive split with parallax image
         ════════════════════════════════════════════ */}
      <section ref={heroRef} className="bg-brand-navy relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 py-12 md:py-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[80vh]">
            {/* Left — Content */}
            <motion.div initial="hidden" animate="visible" className="lg:col-span-6 relative z-10 lg:pr-12">
              <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm rounded-btn px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="font-display font-semibold text-[11px] uppercase tracking-[0.1em] text-blue-200">23 offices · open 7 days</span>
              </motion.div>

              <motion.h1
                variants={reveal} custom={1}
                className="font-display text-[clamp(36px,5.5vw,72px)] font-extrabold text-white leading-[0.95] mb-6 tracking-[-2px]"
              >
                Your Neighborhood
                <br />
                Dentist — With
                <br />
                <span className="text-brand-blue">23 Front Doors</span>
              </motion.h1>

              <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-blue-200/80 mb-4 max-w-md leading-relaxed">
                Great dental care shouldn't feel like a chore — it should feel like coming home.
              </motion.p>

              <motion.p variants={reveal} custom={3} className="font-body text-[16px] text-navy-100 mb-10 max-w-md leading-relaxed">
                We're the anti-corporate dental group. No upselling, no surprise bills, no cold waiting rooms. Just honest care from real people — open evenings, Saturdays, and Sundays.
              </motion.p>

              <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
                <Link to="/locations">
                  <Button variant="default" size="lg" className="shadow-lg shadow-brand-blue/30">
                    Find Your New Dentist Today
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:7028522829">
                  <Button variant="emergency" size="lg" className="shadow-lg shadow-brand-coral/25">
                    <Phone className="w-4 h-4" />
                    $49 Emergency — Call Now
                  </Button>
                </a>
              </motion.div>

              {/* Floating stats */}
              <motion.div variants={reveal} custom={5} className="flex gap-8 mt-12 pt-8 border-t border-white/8">
                {[
                  { num: "23", label: "Locations" },
                  { num: "7", label: "Days Open" },
                  { num: "$49", label: "Emergency" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display font-extrabold text-[28px] text-white leading-none">{stat.num}</span>
                    <span className="block font-body text-[11px] text-navy-200 mt-1 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Image composition */}
            <motion.div
              className="lg:col-span-6 relative hidden lg:flex items-center justify-center"
              style={{ y: heroImageY, opacity: heroOpacity }}
            >
              <div className="relative w-full max-w-[520px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
                  className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30 relative"
                >
                  <img src={heroPatient} alt="Happy patient at Good Doc Dental" className="w-full h-[560px] object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.7 }}
                  className="absolute -left-12 bottom-24 bg-white rounded-2xl shadow-xl p-4 w-[220px]"
                >
                  <div className="flex gap-0.5 mb-1.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="font-accent italic text-[13px] text-brand-slate leading-snug">
                    "They got me in same-day. Incredible team."
                  </p>
                  <span className="font-display font-bold text-[11px] text-brand-navy mt-2 block">— Maria G.</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.9 }}
                  className="absolute -right-8 top-12 bg-white rounded-2xl shadow-xl overflow-hidden w-[140px]"
                >
                  <img src={kidsSmile} alt="Happy kid" className="w-full h-[90px] object-cover" />
                  <div className="p-3">
                    <span className="font-display font-bold text-[11px] text-brand-navy block">Kids Welcome!</span>
                    <span className="font-body text-[10px] text-brand-slate">7 dedicated offices</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRUST BAR — Minimal, confident
         ════════════════════════════════════════════ */}
      <section className="py-5 border-b border-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-3"
          >
            {[
              { icon: MapPin, text: "23 Locations" },
              { icon: Clock, text: "Open 7 Days" },
              { icon: Users, text: "All Ages" },
              { icon: Zap, text: "Same-Day Emergency" },
              { icon: Globe, text: "Book Online 24/7" },
            ].map((item, i) => (
              <motion.div key={item.text} variants={reveal} custom={i} className="flex items-center gap-2 group">
                <item.icon className="w-4 h-4 text-brand-teal" />
                <span className="font-display font-semibold text-[13px] text-brand-navy">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY — Asymmetric layout with feature highlight
         ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-xl mb-16">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-teal">Why Us</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-brand-navy mt-3 leading-[1.1] tracking-tight">
              Why You'll Love
              <br />It Here
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-[16px] text-brand-slate mt-4 leading-relaxed">
              We're not your typical dental chain. We're your neighbors — with better tools, transparent pricing, and a genuine love for what we do.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {/* Row 1: Featured card + 2 smaller */}
            <div className="grid lg:grid-cols-3 gap-5 mb-5">
              <motion.div variants={reveal} custom={0} className="lg:row-span-2 bg-brand-navy rounded-3xl p-10 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-[200px] h-[200px] rounded-full bg-brand-blue/10 blur-2xl" />
                <div>
                  <MapPin className="w-8 h-8 text-brand-blue mb-4" />
                  <h3 className="font-display text-[22px] font-bold text-white mb-3 leading-tight">23 Locations<br/>Valleywide</h3>
                  <p className="font-body text-[14px] text-navy-200 leading-relaxed">Las Vegas, Henderson, North Las Vegas, Summerlin — there's always one near you.</p>
                </div>
                <Link to="/locations">
                  <Button variant="secondary" size="sm" className="self-start mt-6 border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                    Find yours <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={reveal} custom={1} className="bg-blue-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                <Clock className="w-7 h-7 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-[18px] font-bold text-brand-navy mb-2">Open When You Need Us</h3>
                <p className="font-body text-[14px] text-brand-slate">Evenings, Saturdays, and Sundays. Because toothaches don't wait for Monday.</p>
                <Link to="/locations" className="font-display font-semibold text-[12px] text-brand-blue hover:text-blue-600 flex items-center gap-1 mt-4 transition-colors">
                  See our hours <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>

              <motion.div variants={reveal} custom={2} className="bg-teal-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                <Users className="w-7 h-7 text-brand-teal mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-[18px] font-bold text-brand-navy mb-2">The Whole Family</h3>
                <p className="font-body text-[14px] text-brand-slate">7 dedicated kids offices and 16 family locations. All ages, all under one roof.</p>
                <Link to="/services/kids-dentistry" className="font-display font-semibold text-[12px] text-brand-blue hover:text-blue-600 flex items-center gap-1 mt-4 transition-colors">
                  Explore kids dentistry <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            </div>

            {/* Row 2: 3 cards flush */}
            <div className="grid md:grid-cols-3 gap-5">
              <motion.div variants={reveal} custom={3} className="bg-coral-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                <Zap className="w-7 h-7 text-brand-coral mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-[18px] font-bold text-brand-navy mb-2">Emergency Dental Care</h3>
                <p className="font-body text-[14px] text-brand-slate">Same-day appointments, 7 days a week. Walk-ins welcome. $49 exam & X-ray.</p>
                <Link to="/services/emergency-dental-care" className="font-display font-semibold text-[12px] text-brand-blue hover:text-blue-600 flex items-center gap-1 mt-4 transition-colors">
                  Learn about emergency care <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>

              <motion.div variants={reveal} custom={4} className="bg-gold-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                <CalendarCheck className="w-7 h-7 text-gold-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-[18px] font-bold text-brand-navy mb-2">Convenient Booking</h3>
                <p className="font-body text-[14px] text-brand-slate">Call, text, or book online 24/7. Free benefits check before any treatment.</p>
                <a href="#" className="font-display font-semibold text-[12px] text-brand-blue hover:text-blue-600 flex items-center gap-1 mt-4 transition-colors">
                  Book online now <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div variants={reveal} custom={5} className="bg-white border border-blue-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                <Building2 className="w-7 h-7 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-[18px] font-bold text-brand-navy mb-2">All Specialties In-House</h3>
                <p className="font-body text-[14px] text-brand-slate">General, cosmetic, restorative, implants, ortho, oral surgery, pediatric — all here.</p>
                <Link to="/services" className="font-display font-semibold text-[12px] text-brand-blue hover:text-blue-600 flex items-center gap-1 mt-4 transition-colors">
                  View all services <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES — Horizontal scroll cards with tabs
         ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-teal">Our Services</motion.span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-3 mb-4">
              <div>
                <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-white leading-[1.1] tracking-tight">
                  Every Service You Need — Under One Roof
                </motion.h2>
                <motion.p variants={reveal} custom={2} className="font-body text-[16px] text-navy-100 mt-3 max-w-lg leading-relaxed">
                  From routine cleanings to dental implants, orthodontics, and same-day emergency care — our in-house specialists handle it all. No referrals, no runaround.
                </motion.p>
              </div>
              <motion.div variants={reveal} custom={3} className="flex flex-wrap gap-2">
                {serviceTabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`font-display font-semibold text-[12px] px-4 py-2 rounded-btn transition-all duration-200 active:scale-[0.96] ${
                      activeTab === i
                        ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                        : "bg-white/8 text-navy-100 hover:bg-white/12 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
          >
            {filteredServices.map((s) => (
              <Link key={s.id} to={`/services/${s.slug}`} className="block">
                <div className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-[17px] font-bold text-white group-hover:text-brand-blue transition-colors">{s.name}</h3>
                    <ChevronRight className="w-4 h-4 text-navy-200 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="font-body text-[13px] text-navy-200 mb-5 leading-relaxed">{s.tagline}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/8">
                    <span className="font-display font-extrabold text-[18px] text-white">{s.priceDisplay}</span>
                    {s.promoText && (
                      <span className="font-display font-bold text-[10px] bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-btn uppercase tracking-wider">
                        {s.promoText}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROMOS — Staggered cards with featured highlight
         ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gold">Current Specials</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-brand-navy mt-3 mb-4 leading-[1.1] tracking-tight">
              Specials That Actually Save You Money
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-[16px] text-brand-slate mb-14 max-w-lg">
              No gimmicks, no asterisks, no catch. These are real savings available at all 23 offices.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {/* Featured emergency promo */}
            <motion.div variants={reveal} custom={0} className="bg-brand-coral rounded-3xl p-8 md:p-12 mb-5 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-[200px] h-[200px] rounded-full bg-white/5 blur-xl" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 bg-white/15 rounded-btn px-3 py-1 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Same-Day Available</span>
                  </span>
                  <h3 className="font-display text-[28px] md:text-[36px] font-extrabold text-white leading-[1.05]">
                    Emergency Exam & X-Ray
                  </h3>
                  <p className="font-body text-[15px] text-coral-50 mt-2 max-w-md">
                    Plus FREE comprehensive exam within 30 days ($380 value). Walk-ins welcome, 7 days a week.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-3 flex-shrink-0">
                  <div className="text-center md:text-right">
                    <span className="font-display font-extrabold text-[56px] text-white leading-none">$49</span>
                    <span className="block font-body text-[13px] text-coral-100 line-through">reg. $155</span>
                  </div>
                  <a href="tel:7028522829">
                    <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-xl" size="lg">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other promos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {promotions.filter(p => p.active && p.type !== "emergency").map((promo, i) => (
                <motion.div
                  key={promo.id}
                  variants={reveal}
                  custom={i + 1}
                  className="bg-gold-50 border border-gold-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="font-display font-extrabold text-[28px] text-brand-navy leading-none">{promo.price}</span>
                  <h4 className="font-display font-bold text-[15px] text-brand-navy mt-2 mb-1">{promo.title}</h4>
                  <p className="font-body text-[13px] text-brand-slate mb-5">{promo.description}</p>
                  <Button variant={promo.ctaVariant === "promo" ? "promo" : "default"} size="sm" className="w-full">
                    {promo.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          INSURANCE + FINANCING — Side by side
         ════════════════════════════════════════════ */}
      <section className="bg-blue-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Insurance */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-blue">Insurance</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(24px,3vw,36px)] font-extrabold text-brand-navy mt-3 mb-3 leading-[1.15] tracking-tight">
                Yes, We Probably Take Your Insurance
              </motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-[15px] text-brand-slate mb-8 leading-relaxed">
                We're in-network with 16 major carriers including Medicare. Not sure about yours? We'll check your benefits for free before any treatment — no surprises, no pressure.
              </motion.p>
              <motion.div variants={reveal} custom={3} className="flex flex-wrap gap-2 mb-4">
                {insuranceCarriers.map((c) => (
                  <span key={c} className="font-display font-medium text-[12px] bg-white text-brand-navy px-3.5 py-1.5 rounded-lg border border-blue-100 shadow-sm">
                    {c}
                  </span>
                ))}
              </motion.div>
              <motion.p variants={reveal} custom={4} className="font-body text-[13px] text-brand-slate mb-8 italic">
                Medicaid not accepted. Emergency out-of-pocket visits available starting at $49.
              </motion.p>
              <motion.div variants={reveal} custom={5}>
                <Button variant="default">
                  <Shield className="w-4 h-4" />
                  Free Benefits Check
                </Button>
              </motion.div>
            </motion.div>

            {/* Financing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-teal">Financing</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(24px,3vw,36px)] font-extrabold text-brand-navy mt-3 mb-3 leading-[1.15] tracking-tight">
                Smile Now & Pay-Over-Time
              </motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-[15px] text-brand-slate mb-8 leading-relaxed">
                Don't let cost stand between you and the care you need. Flexible payment plans through trusted partners.
              </motion.p>
              {[
                { name: "Sunbit", desc: "Apply in 30 seconds from your phone. No hard credit check. Flexible 3, 6, or 12-month plans." },
                { name: "CareCredit", desc: "The healthcare credit card. Special promotional financing available." },
              ].map((provider, i) => (
                <motion.div key={provider.name} variants={reveal} custom={i + 3} className="bg-white rounded-2xl p-6 border border-blue-50 mb-3 flex items-start gap-4 group hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] text-brand-navy">{provider.name}</h4>
                    <p className="font-body text-[13px] text-brand-slate mt-1">{provider.desc}</p>
                    <div className="flex gap-2 mt-3">
                      {["3 mo", "6 mo", "12 mo"].map((plan) => (
                        <span key={plan} className="font-display font-semibold text-[10px] bg-teal-50 text-brand-teal px-2 py-1 rounded-md uppercase">{plan}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS — Large featured quote + supporting
         ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-blue">Patient Stories</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
              Don't Take Our Word for It
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {/* Featured testimonial */}
            <motion.div variants={reveal} custom={0} className="bg-brand-navy rounded-3xl p-10 md:p-14 mb-6 relative overflow-hidden">
              <div className="absolute right-8 top-8 font-display text-[120px] text-white/3 leading-none select-none">"</div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="font-accent italic text-[clamp(18px,2.5vw,26px)] text-blue-100 leading-relaxed mb-8 max-w-3xl">
                "My kids used to dread the dentist. Now they actually ask when their next appointment is. The staff is so patient and kind — truly feels like family."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center font-display font-bold text-white text-[16px]">PK</div>
                <div>
                  <span className="font-display font-bold text-[15px] text-white block">Patricia K.</span>
                  <span className="font-body text-[13px] text-navy-200">Henderson, NV</span>
                </div>
              </div>
            </motion.div>

            {/* Supporting testimonials */}
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { name: "Michelle M.", location: "Summerlin", quote: "I hadn't been to the dentist in over five years. They made me feel completely at ease, no judgment. Got a full treatment plan and the financing made it painless." },
                { name: "Alan S.", location: "North Las Vegas", quote: "Had an emergency on a Saturday — cracked tooth. They got me in within the hour. Professional, fast, and the $49 exam saved me hundreds. Can't recommend enough." },
              ].map((t, i) => (
                <motion.div key={t.name} variants={reveal} custom={i + 1}>
                  <TestimonialCard {...t} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          LOCATIONS — Visual map section
         ════════════════════════════════════════════ */}
      <section className="bg-blue-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={reveal} custom={0} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="font-display font-bold text-[11px] uppercase tracking-[0.12em] text-brand-teal">Find Us</span>
                <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-brand-navy mt-3 leading-[1.1] tracking-tight">
                  Let's Find Your Dentist
                </h2>
              </div>
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate" />
                <input
                  type="text"
                  placeholder="Search by city, zip, or office..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-blue-100 bg-white font-body text-[14px] text-brand-navy placeholder:text-navy-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent shadow-sm"
                />
                <p className="font-body text-[11px] text-brand-slate mt-2 italic">Full location finder coming soon</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-3xl overflow-hidden shadow-lg border border-blue-100 mb-8"
          >
            <iframe
              title="Good Doc Dental Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45402815884!2d-115.36249!3d36.114647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1711000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* City cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-4">
            {[
              { city: "Las Vegas", count: 13, areas: "Summerlin · Blue Diamond · Skye Canyon · Fort Apache · Charleston", color: "bg-brand-blue", href: "/locations/las-vegas" },
              { city: "Henderson", count: 7, areas: "Cadence · Inspirada · St. Rose · Boulder Hwy · Lake Mead", color: "bg-brand-teal", href: "/locations/henderson" },
              { city: "North Las Vegas", count: 3, areas: "North 5th · Revere · Sedona Ranch", color: "bg-navy-400", href: "/locations/north-las-vegas" },
            ].map((loc, i) => (
              <motion.div key={loc.city} variants={reveal} custom={i}>
                <Link to={loc.href} className="block bg-white rounded-2xl p-6 border border-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${loc.color}`} />
                    <h3 className="font-display text-[20px] font-bold text-brand-navy">{loc.city}</h3>
                    <span className="ml-auto font-display font-extrabold text-[24px] text-brand-blue">{loc.count}</span>
                  </div>
                  <p className="font-body text-[13px] text-brand-slate mb-4 leading-relaxed">{loc.areas}</p>
                  <span className="font-display font-semibold text-[12px] text-brand-blue group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                    View offices <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          EMERGENCY CTA — Full impact
         ════════════════════════════════════════════ */}
      <section className="bg-brand-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2 bg-white/15 rounded-btn px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Available 7 Days a Week</span>
            </motion.div>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(32px,5vw,52px)] font-extrabold text-white leading-[1.0] tracking-tight mb-4">
              Same-Day Emergency Care
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-[17px] text-coral-50 mb-2">Walk-ins welcome. No appointment needed.</motion.p>
            <motion.div variants={reveal} custom={3} className="my-8">
              <span className="font-display font-extrabold text-[72px] text-white leading-none">$49</span>
              <span className="block font-body text-[15px] text-coral-100 mt-1">Emergency Exam & X-Ray</span>
            </motion.div>
            <motion.div variants={reveal} custom={4} className="flex flex-wrap justify-center gap-3">
              <a href="tel:7028522829">
                <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-xl shadow-black/10" size="lg">
                  <Phone className="w-4 h-4" />
                  Call Now for Same-Day Care
                </Button>
              </a>
              <Link to="/services/emergency-dental-care">
                <Button variant="secondary" size="lg" className="border-white/25 text-white hover:bg-white/10">
                  Learn About Emergency Care
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
