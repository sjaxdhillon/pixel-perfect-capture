import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
import lasVegasAerial from "@/assets/las-vegas-aerial.jpg";
import perfectSmile from "@/assets/perfect-smile.jpg";
import whyOpenHours from "@/assets/why-open-hours.jpg";
import whyWholeFamily from "@/assets/why-whole-family.jpg";
import whyEmergency from "@/assets/why-emergency.jpg";
import whyBooking from "@/assets/why-booking.jpg";
import whySpecialties from "@/assets/why-specialties.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceCosmetic from "@/assets/service-cosmetic.jpg";
import serviceRestorative from "@/assets/service-restorative.jpg";
import serviceKids from "@/assets/service-kids.jpg";
import serviceOrthodontics from "@/assets/service-orthodontics.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import promotions from "@/data/promotions.json";
import services from "@/data/services.json";

const serviceTabImages: Record<number, string> = {
  0: serviceFamily,
  1: serviceCosmetic,
  2: serviceRestorative,
  3: serviceKids,
  4: serviceOrthodontics,
  5: serviceEmergency,
};

/* ─── Animation variants ─── */
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
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const filteredServices = services
    .filter(s => serviceTabs[activeTab].categories.includes(s.category))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PromoBar />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO — Immersive with floating elements & parallax
         ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="bg-brand-navy relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          variants={floatSlow} initial="initial" animate="animate"
          className="absolute -right-40 -top-40 w-[700px] h-[700px] rounded-full bg-brand-blue/6 blur-[100px] pointer-events-none"
        />
        <motion.div
          variants={floatReverse} initial="initial" animate="animate"
          className="absolute -left-32 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-teal/4 blur-[80px] pointer-events-none"
        />
        <motion.div
          variants={float} initial="initial" animate="animate"
          className="absolute right-1/4 top-1/3 w-[200px] h-[200px] rounded-full bg-brand-gold/3 blur-[60px] pointer-events-none"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 py-16 md:py-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[82vh]">
            {/* Left — Content */}
            <motion.div initial="hidden" animate="visible" className="lg:col-span-6 relative z-10 lg:pr-16">
              <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/6 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/8">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-blue-200">23 offices · open 7 days</span>
              </motion.div>

              <motion.h1
                variants={reveal} custom={1}
                className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] mb-7 tracking-[-2.5px]"
              >
                Your Neighborhood
                <br />
                Dentist — With
                <br />
                <span className="relative">
                  <span className="text-brand-blue">23 Front Doors</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-brand-blue/40 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </motion.h1>

              <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-blue-200/70 mb-5 max-w-md leading-relaxed">
                Great dental care shouldn't feel like a chore — it should feel like coming home.
              </motion.p>

              <motion.p variants={reveal} custom={3} className="font-body text-body text-navy-100/80 mb-12 max-w-md leading-[1.7]">
                We're the anti-corporate dental group. No upselling, no surprise bills, no cold waiting rooms. Just honest care from real people — open evenings, Saturdays, and Sundays.
              </motion.p>

              <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
                <Link to="/locations">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/25 hover:shadow-2xl hover:shadow-brand-blue/35 transition-shadow duration-300">
                      Find Your New Dentist Today
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </Link>
                <a href="tel:7028522829">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="emergency" size="lg" className="shadow-xl shadow-brand-coral/20">
                      <Phone className="w-4 h-4" />
                      $49 Emergency — Call Now
                    </Button>
                  </motion.div>
                </a>
              </motion.div>

              {/* Floating stats */}
              <motion.div variants={reveal} custom={5} className="flex gap-10 mt-14 pt-8 border-t border-white/6">
                {[
                  { num: "23", label: "Locations" },
                  { num: "7", label: "Days Open" },
                  { num: "$49", label: "Emergency" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="font-display font-extrabold text-[32px] text-white leading-none block">{stat.num}</span>
                    <span className="block font-body text-caption text-navy-200 mt-1.5 uppercase tracking-[0.15em]">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Image composition with floating cards */}
            <motion.div
              className="lg:col-span-6 relative hidden lg:flex items-center justify-center"
              style={{ y: heroImageY, opacity: heroOpacity, scale: heroScale }}
            >
              <div className="relative w-full max-w-[540px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
                  className="rounded-[28px] overflow-hidden shadow-2xl shadow-black/40 relative"
                >
                  <img src={heroPatient} alt="Happy patient at Good Doc Dental" className="w-full h-[580px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
                </motion.div>

                {/* Floating review card */}
                <motion.div
                  variants={float} initial="initial" animate="animate"
                  className="absolute -left-16 bottom-28"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -40, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 }}
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/15 p-5 w-[240px] border border-white/60"
                  >
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="font-accent italic text-body-sm text-brand-slate leading-snug">
                      "They got me in same-day. Incredible team."
                    </p>
                    <span className="font-display font-bold text-caption text-brand-navy mt-2.5 block">— Maria G.</span>
                  </motion.div>
                </motion.div>

                {/* Floating kids card */}
                <motion.div
                  variants={floatReverse} initial="initial" animate="animate"
                  className="absolute -right-10 top-16"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 1 }}
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/15 overflow-hidden w-[150px] border border-white/60"
                  >
                    <img src={kidsSmile} alt="Happy kid" className="w-full h-[95px] object-cover" />
                    <div className="p-3.5">
                      <span className="font-display font-bold text-caption text-brand-navy block">Kids Welcome!</span>
                      <span className="font-body text-caption text-brand-slate">7 dedicated offices</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating location badge */}
                <motion.div
                  variants={floatSlow} initial="initial" animate="animate"
                  className="absolute -right-6 bottom-12"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="bg-brand-blue/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-brand-blue/50"
                  >
                    <MapPin className="w-5 h-5 text-white" />
                    <div>
                      <span className="font-display font-bold text-caption text-white block">23 Offices</span>
                      <span className="font-body text-caption text-blue-200">Las Vegas Valley</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BAR — Floating pills
         ═══════════════════════════════════════════ */}
      <section className="py-6 border-b border-blue-50/80 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: MapPin, text: "23 Locations" },
              { icon: Clock, text: "Open 7 Days" },
              { icon: Users, text: "All Ages" },
              { icon: Zap, text: "Same-Day Emergency" },
              { icon: Globe, text: "Book Online 24/7" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                variants={reveal}
                custom={i}
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2.5 bg-white rounded-btn px-5 py-2.5 shadow-sm border border-blue-50 hover:shadow-md transition-shadow duration-300"
              >
                <item.icon className="w-4 h-4 text-brand-teal" />
                <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY — Bento grid with floating accents
         ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative">
        <motion.div
          variants={floatSlow} initial="initial" animate="animate"
          className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/5 blur-[40px] pointer-events-none"
        />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-xl mb-20">
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Why Us</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 leading-[1.05] tracking-[-1.5px]">
              Why You'll Love
              <br />It Here
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mt-5 leading-[1.7]">
              We're not your typical dental chain. We're your neighbors — with better tools, transparent pricing, and a genuine love for what we do.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <div className="grid lg:grid-cols-3 gap-5 mb-5">
              {/* Featured card with image */}
              <motion.div
                variants={reveal} custom={0}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="lg:row-span-2 rounded-[24px] flex flex-col justify-end min-h-[360px] group relative overflow-hidden"
              >
                <img src={lasVegasAerial} alt="Las Vegas Valley aerial view" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                <div className="relative z-10 p-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-brand-blue" />
                  </div>
                  <h3 className="font-display text-h3 font-bold text-white mb-3 leading-tight">23 Locations<br/>Valleywide</h3>
                  <p className="font-body text-body text-navy-200 leading-[1.7]">Las Vegas, Henderson, North Las Vegas, Summerlin — there's always one near you.</p>
                  <Link to="/locations">
                    <Button variant="secondary" size="sm" className="self-start mt-6 border-white/15 text-white hover:bg-white/8 hover:border-white/25 transition-all duration-300">
                      Find yours <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {[
                { icon: Clock, title: "Open When You Need Us", desc: "Evenings, Saturdays, and Sundays. Because toothaches don't wait for Monday.", img: whyOpenHours, link: "/locations", cta: "See our hours" },
                { icon: Users, title: "The Whole Family", desc: "7 dedicated kids offices and 16 family locations. All ages, all under one roof.", img: whyWholeFamily, link: "/services/kids-dentistry", cta: "Explore kids dentistry" },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={reveal} custom={i + 1}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[24px] flex flex-col justify-end min-h-[200px] group relative overflow-hidden"
                >
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                  <div className="relative z-10 p-8">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-h5 font-bold text-white mb-1.5">{card.title}</h3>
                    <p className="font-body text-body-sm text-white/75 leading-[1.6]">{card.desc}</p>
                    <Link to={card.link} className="font-display font-semibold text-caption text-brand-blue hover:text-blue-300 flex items-center gap-1.5 mt-4 transition-colors group/link">
                      {card.cta} <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Zap, title: "Emergency Dental Care", desc: "Same-day appointments, 7 days a week. Walk-ins welcome. $49 exam & X-ray.", img: whyEmergency, link: "/services/emergency-dental-care", cta: "Learn about emergency care" },
                { icon: CalendarCheck, title: "Convenient Booking", desc: "Call, text, or book online 24/7. Free benefits check before any treatment.", img: whyBooking, link: "#", cta: "Book online now" },
                { icon: Building2, title: "All Specialties In-House", desc: "General, cosmetic, restorative, implants, ortho, oral surgery, pediatric — all here.", img: whySpecialties, link: "/services", cta: "View all services" },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={reveal} custom={i + 3}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[24px] flex flex-col justify-end min-h-[220px] group relative overflow-hidden"
                >
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                  <div className="relative z-10 p-8">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-h5 font-bold text-white mb-1.5">{card.title}</h3>
                    <p className="font-body text-body-sm text-white/75 leading-[1.6]">{card.desc}</p>
                    <Link to={card.link} className="font-display font-semibold text-caption text-brand-blue hover:text-blue-300 flex items-center gap-1.5 mt-4 transition-colors group/link">
                      {card.cta} <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Tabs with glass cards on dark bg
         ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.06),transparent_50%)]" />
        <motion.div
          variants={float} initial="initial" animate="animate"
          className="absolute right-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Our Services</motion.span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4 mb-6">
              <div>
                <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-white leading-[1.05] tracking-[-1.5px]">
                  Every Service You Need
                  <br />Under One Roof
                </motion.h2>
                <motion.p variants={reveal} custom={2} className="font-body text-body text-navy-100/80 mt-4 max-w-lg leading-[1.7]">
                  From routine cleanings to dental implants, orthodontics, and same-day emergency care — our in-house specialists handle it all.
                </motion.p>
              </div>
              <motion.div variants={reveal} custom={3} className="flex flex-wrap gap-2">
                {serviceTabs.map((tab, i) => (
                  <motion.button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`font-display font-semibold text-caption px-5 py-2.5 rounded-btn transition-all duration-300 ${
                      activeTab === i
                        ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                        : "bg-white/6 text-navy-100 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          >
            {filteredServices.map((s, i) => (
              <Link key={s.id} to={`/services/${s.slug}`} className="block">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-[20px] overflow-hidden relative min-h-[220px] flex flex-col justify-end group cursor-pointer h-full"
                >
                  <img
                    src={serviceTabImages[activeTab]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-800))] via-[hsl(var(--navy-800))]/60 to-transparent" />
                  <div className="relative z-10 p-7">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-body-lg font-bold text-white group-hover:text-brand-blue transition-colors duration-300">{s.name}</h3>
                      <ChevronRight className="w-4 h-4 text-navy-200 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="font-body text-body-sm text-navy-100/80 mb-4 leading-[1.6]">{s.tagline}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="font-display font-extrabold text-h5 text-white">{s.priceDisplay}</span>
                      {s.promoText && (
                        <span className="font-display font-bold text-caption bg-brand-gold/15 text-brand-gold px-3 py-1.5 rounded-btn uppercase tracking-wider">
                          {s.promoText}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
              </Link>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" className="border-white/15 text-white hover:bg-white/8">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROMOS — Featured card with floating price
         ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative">
        <motion.div
          variants={floatReverse} initial="initial" animate="animate"
          className="absolute left-0 top-40 w-[200px] h-[200px] rounded-full bg-brand-gold/5 blur-[60px] pointer-events-none"
        />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-gold">Current Specials</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
              Specials That Actually
              <br />Save You Money
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
              No gimmicks, no asterisks, no catch. These are real savings available at all 23 offices.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {/* Featured emergency promo */}
            <motion.div
              variants={reveal} custom={0}
              whileHover={{ y: -4 }}
              className="bg-brand-coral rounded-[28px] p-10 md:p-14 mb-6 relative overflow-hidden"
            >
              <motion.div
                variants={floatSlow} initial="initial" animate="animate"
                className="absolute -right-10 -top-10 w-[250px] h-[250px] rounded-full bg-white/5 blur-[40px]"
              />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2.5 bg-white/12 backdrop-blur-sm rounded-btn px-4 py-2 mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-white">Same-Day Available</span>
                  </span>
                  <h3 className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-white leading-[1.05]">
                    Emergency Exam & X-Ray
                  </h3>
                  <p className="font-body text-body-lg text-coral-50/90 mt-3 max-w-md leading-[1.6]">
                    Plus FREE comprehensive exam within 30 days ($380 value). Walk-ins welcome, 7 days a week.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
                  <motion.div
                    className="text-center md:text-right"
                    variants={float} initial="initial" animate="animate"
                  >
                    <span className="font-display font-extrabold text-[72px] text-white leading-none drop-shadow-lg">$49</span>
                    <span className="block font-body text-body-sm text-coral-100 line-through mt-1">reg. $155</span>
                  </motion.div>
                  <a href="tel:7028522829">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-2xl shadow-black/10" size="lg">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </Button>
                    </motion.div>
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
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-gold-50 border border-gold-100/60 rounded-[20px] p-7 group"
                >
                  <span className="font-display font-extrabold text-[32px] text-brand-navy leading-none">{promo.price}</span>
                  <h4 className="font-display font-bold text-body text-brand-navy mt-3 mb-1.5">{promo.title}</h4>
                  <p className="font-body text-body-sm text-brand-slate mb-6 leading-[1.6]">{promo.description}</p>
                  <Button variant={promo.ctaVariant === "promo" ? "promo" : "default"} size="sm" className="w-full">
                    {promo.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INSURANCE + FINANCING — Split layout
         ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-blue-50/60 to-blue-50 py-28 md:py-36 relative overflow-hidden">
        <motion.div
          variants={floatReverse} initial="initial" animate="animate"
          className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-brand-blue/3 blur-[80px] pointer-events-none"
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Insurance */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Insurance</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(24px,3.5vw,40px)] font-extrabold text-brand-navy mt-4 mb-4 leading-[1.1] tracking-[-1px]">
                Yes, We Probably
                <br />Take Your Insurance
              </motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-10 leading-[1.7]">
                We're in-network with 16 major carriers including Medicare. Not sure about yours? We'll check your benefits for free.
              </motion.p>
              <motion.div variants={reveal} custom={3} className="flex flex-wrap gap-2 mb-5">
                {insuranceCarriers.map((c, i) => (
                  <motion.span
                    key={c}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="font-display font-medium text-caption bg-white text-brand-navy px-4 py-2 rounded-xl border border-blue-100/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {c}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p variants={reveal} custom={4} className="font-body text-body-sm text-brand-slate mb-8 italic">
                Medicaid not accepted. Emergency out-of-pocket visits available starting at $49.
              </motion.p>
              <motion.div variants={reveal} custom={5}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="default">
                    <Shield className="w-4 h-4" />
                    Free Benefits Check
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Financing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Financing</motion.span>
              <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(24px,3.5vw,40px)] font-extrabold text-brand-navy mt-4 mb-4 leading-[1.1] tracking-[-1px]">
                Smile Now &
                <br />Pay-Over-Time
              </motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-10 leading-[1.7]">
                Don't let cost stand between you and the care you need. Flexible payment plans through trusted partners.
              </motion.p>
              {[
                { name: "Sunbit", desc: "Apply in 30 seconds from your phone. No hard credit check. Flexible 3, 6, or 12-month plans." },
                { name: "CareCredit", desc: "The healthcare credit card. Special promotional financing available." },
              ].map((provider, i) => (
                <motion.div
                  key={provider.name}
                  variants={reveal} custom={i + 3}
                  whileHover={{ y: -3, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.08)" }}
                  className="bg-white rounded-[20px] p-7 border border-blue-50 mb-4 flex items-start gap-5 group transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-body-lg text-brand-navy">{provider.name}</h4>
                    <p className="font-body text-body-sm text-brand-slate mt-1 leading-[1.6]">{provider.desc}</p>
                    <div className="flex gap-2 mt-4">
                      {["3 mo", "6 mo", "12 mo"].map((plan) => (
                        <span key={plan} className="font-display font-semibold text-caption bg-teal-50 text-brand-teal px-3 py-1.5 rounded-lg uppercase tracking-wider">{plan}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS — Featured + supporting
         ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative">
        <motion.div
          variants={float} initial="initial" animate="animate"
          className="absolute left-10 top-32 w-[100px] h-[100px] rounded-full bg-brand-gold/5 blur-[40px] pointer-events-none"
        />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Patient Stories</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
              Don't Take Our Word for It
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {/* Featured testimonial with image */}
            <motion.div
              variants={reveal} custom={0}
              whileHover={{ y: -3 }}
              className="bg-brand-navy rounded-[28px] overflow-hidden mb-6 relative"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative min-h-[200px]">
                  <img src={perfectSmile} alt="Beautiful smile result" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-12 md:p-16 relative">
                  <motion.div
                    variants={floatSlow} initial="initial" animate="animate"
                    className="absolute -right-10 -top-10 w-[200px] h-[200px] rounded-full bg-brand-blue/5 blur-[50px]"
                  />
                  <div className="absolute right-10 top-10 font-display text-[140px] text-white/[0.02] leading-none select-none">"</div>
                  <div className="flex gap-1 mb-7">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="font-accent italic text-[clamp(18px,2.2vw,24px)] text-blue-100/90 leading-[1.6] mb-10 max-w-3xl">
                    "My kids used to dread the dentist. Now they actually ask when their next appointment is. The staff is so patient and kind — truly feels like family."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/15 flex items-center justify-center font-display font-bold text-white text-body-lg">PK</div>
                    <div>
                      <span className="font-display font-bold text-body-lg text-white block">Patricia K.</span>
                      <span className="font-body text-body-sm text-navy-200">Henderson, NV</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Supporting testimonials */}
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { name: "Michelle M.", location: "Summerlin", quote: "I hadn't been to the dentist in over five years. They made me feel completely at ease, no judgment. Got a full treatment plan and the financing made it painless." },
                { name: "Alan S.", location: "North Las Vegas", quote: "Had an emergency on a Saturday — cracked tooth. They got me in within the hour. Professional, fast, and the $49 exam saved me hundreds. Can't recommend enough." },
              ].map((t, i) => (
                <motion.div key={t.name} variants={reveal} custom={i + 1} whileHover={{ y: -3 }}>
                  <TestimonialCard {...t} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCATIONS — Map + city cards
         ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
        <motion.div
          variants={floatReverse} initial="initial" animate="animate"
          className="absolute left-20 bottom-10 w-[180px] h-[180px] rounded-full bg-brand-teal/5 blur-[50px] pointer-events-none"
        />
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={reveal} custom={0} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
              <div>
                <span className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Find Us</span>
                <h2 className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 leading-[1.05] tracking-[-1.5px]">
                  Let's Find Your Dentist
                </h2>
              </div>
              <div className="relative max-w-md w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate" />
                <input
                  type="text"
                  placeholder="Search by city, zip, or office..."
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border border-blue-100/80 bg-white font-body text-body text-brand-navy placeholder:text-navy-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent shadow-sm hover:shadow-md transition-shadow duration-300"
                />
                <p className="font-body text-caption text-brand-slate mt-2.5 italic">Full location finder coming soon</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 border border-blue-100/60 mb-10"
          >
            <iframe
              title="Good Doc Dental Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45402815884!2d-115.36249!3d36.114647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1711000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* City cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-5">
            {[
              { city: "Las Vegas", count: 13, areas: "Summerlin · Blue Diamond · Skye Canyon · Fort Apache · Charleston", color: "bg-brand-blue", href: "/locations/las-vegas" },
              { city: "Henderson", count: 7, areas: "Cadence · Inspirada · St. Rose · Boulder Hwy · Lake Mead", color: "bg-brand-teal", href: "/locations/henderson" },
              { city: "North Las Vegas", count: 3, areas: "North 5th · Revere · Sedona Ranch", color: "bg-navy-400", href: "/locations/north-las-vegas" },
            ].map((loc, i) => (
              <motion.div key={loc.city} variants={reveal} custom={i}>
                <Link to={loc.href}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="block bg-white rounded-[20px] p-7 border border-blue-50 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3.5 h-3.5 rounded-full ${loc.color}`} />
                      <h3 className="font-display text-h5 font-bold text-brand-navy">{loc.city}</h3>
                      <span className="ml-auto font-display font-extrabold text-h3 text-brand-blue">{loc.count}</span>
                    </div>
                    <p className="font-body text-body-sm text-brand-slate mb-5 leading-[1.6]">{loc.areas}</p>
                    <span className="font-display font-semibold text-caption text-brand-blue group-hover:text-blue-600 flex items-center gap-1.5 transition-colors">
                      View offices <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EMERGENCY CTA — Full impact with floating elements
         ═══════════════════════════════════════════ */}
      <section className="bg-brand-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_50%)]" />
        <motion.div
          variants={float} initial="initial" animate="animate"
          className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-coral-600/20 blur-[60px] pointer-events-none"
        />
        <motion.div
          variants={floatReverse} initial="initial" animate="animate"
          className="absolute right-10 top-10 w-[150px] h-[150px] rounded-full bg-white/5 blur-[40px] pointer-events-none"
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/12 backdrop-blur-sm rounded-btn px-5 py-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-white">Available 7 Days a Week</span>
            </motion.div>
            <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
              Same-Day
              <br />Emergency Care
            </motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-coral-50/90 mb-3">Walk-ins welcome. No appointment needed.</motion.p>
            <motion.div variants={reveal} custom={3} className="my-10">
              <motion.span
                variants={float} initial="initial" animate="animate"
                className="font-display font-extrabold text-[72px] text-white leading-none drop-shadow-lg inline-block"
              >
                $49
              </motion.span>
              <span className="block font-body text-body-lg text-coral-100 mt-2">Emergency Exam & X-Ray</span>
            </motion.div>
            <motion.div variants={reveal} custom={4} className="flex flex-wrap justify-center gap-4">
              <a href="tel:7028522829">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-2xl shadow-black/15" size="lg">
                    <Phone className="w-4 h-4" />
                    Call Now for Same-Day Care
                  </Button>
                </motion.div>
              </a>
              <Link to="/services/emergency-dental-care">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/8">
                    Learn About Emergency Care
                  </Button>
                </motion.div>
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
