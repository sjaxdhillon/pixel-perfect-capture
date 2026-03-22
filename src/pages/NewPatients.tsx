import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, CalendarCheck, FileText, Heart,
  Clock, Eye, Search, Sparkles, MessageCircle, Zap, Users,
  DollarSign, Stethoscope, Shield, CreditCard, Check, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import newPatientsImg from "@/assets/pages/new-patients-welcome.jpg";

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

const insuranceCarriers = [
  "Aetna", "Delta Dental", "Careington", "MetLife", "Humana", "United Healthcare",
  "Anthem", "Guardian", "BlueCross BlueShield", "Unicare", "DHA", "United Concordia",
  "Ameritas", "Cigna", "Assurant", "Medicare",
];

const faqs = [
  { q: "Do I need a referral to come to Good Doc Dental?", a: "No referral needed. You can book directly online, call any of our 23 offices, or walk in. We welcome new patients every day." },
  { q: "What should I bring to my first appointment?", a: "Bring a valid photo ID, your insurance card (if applicable), and a list of any medications you're currently taking. If you've completed your patient forms online, that's all you need." },
  { q: "How long does the first visit take?", a: "Plan for about 60–90 minutes for your first visit. This includes paperwork (if not completed online), digital x-rays, a comprehensive exam, and a professional cleaning." },
  { q: "What if I haven't been to the dentist in years?", a: "You're not alone, and we're not here to judge. Seriously. Our team treats patients every day who haven't seen a dentist in 5, 10, even 20 years. We'll take it at your pace, explain everything, and build a plan that works for you." },
  { q: "Can I book online?", a: "Yes! You can book your appointment online 24/7 at any of our 23 locations. You can also call or text us during business hours." },
];

const NewPatients = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO */}
    <section className="bg-brand-sky relative overflow-hidden min-h-[65vh] flex items-center">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/4 blur-[100px] pointer-events-none" />
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[80px] pointer-events-none" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-1/4 bottom-1/3 w-[150px] h-[150px] rounded-full bg-brand-gold/6 blur-[50px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-brand-blue/8 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-brand-blue/10">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-brand-blue">Welcome to Good Doc Dental</span>
          </motion.div>

          <motion.h1 variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-brand-navy leading-[0.92] tracking-[-2.5px] mb-7">
            New Patients Welcome
            <br />— Walk-Ins Too
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-brand-blue/70 mb-5 max-w-xl leading-[1.6]">
            No referral needed. No long waits. Just great dental care, starting today.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-brand-slate mb-10 max-w-xl leading-[1.7]">
            Whether you're switching dentists, haven't been in a while, or need care for the first time — you're in the right place. With 23 offices across Las Vegas, Henderson, and North Las Vegas, getting started is easy.
          </motion.p>

          <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/15">
                Book Your First Visit <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <Link to="/locations">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="dark" size="lg">
                  <MapPin className="w-4 h-4" /> Find a Location Near You
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Welcome Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-8 mb-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={newPatientsImg} alt="New patient being warmly welcomed at reception" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    {/* GETTING STARTED */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">How It Works</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Three Steps to Your First Appointment
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {[
            { icon: CalendarCheck, title: "Book Online or Call", body: "Schedule your appointment online 24/7, call any of our 23 offices, or just walk in. Same-day appointments are often available — especially for emergencies." },
            { icon: FileText, title: "Fill Out Your Forms", body: "Complete your new patient paperwork online before you arrive — it only takes about 5 minutes. Or fill it out when you get here. Either way, we make it easy." },
            { icon: Heart, title: "Meet Your Dentist", body: "Your first visit includes a comprehensive exam, digital x-rays, and a professional cleaning. We'll take the time to listen, explain everything, and create a personalized care plan." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-blue-50/60 rounded-[24px] p-10 border border-blue-100/60 relative group">
              <span className="font-display font-extrabold text-[56px] text-blue-100/80 leading-none select-none absolute top-5 right-6 group-hover:text-brand-blue/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h4 className="font-display text-h4 font-bold text-brand-navy mb-3 leading-tight">{card.title}</h4>
              <p className="font-body text-body text-brand-slate leading-[1.7]">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* WHAT TO EXPECT — TIMELINE */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Your First Visit</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Here's What Happens When You Walk In
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            We know visiting a new dentist can feel a little awkward. You don't know the team, you don't know the office, and maybe it's been a while since your last visit. That's okay — seriously. No judgment here. Here's exactly what your first visit looks like:
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-3xl mx-auto space-y-5">
          {[
            { icon: Clock, title: "Check-In", time: "5 min", body: "You'll be greeted by name at the front desk. If you filled out forms online, you're already ahead. If not, we'll hand you a tablet — it takes about 5 minutes." },
            { icon: Eye, title: "Digital X-Rays", time: "5 min", body: "Our digital x-rays use 80% less radiation than traditional film. Results appear on screen in seconds so your dentist can review them with you." },
            { icon: Search, title: "Comprehensive Exam", time: "15 min", body: "Your dentist will check every tooth, your gums, your bite, and your jaw. We'll look for cavities, gum disease, oral cancer signs, and anything else that needs attention." },
            { icon: Sparkles, title: "Professional Cleaning", time: "30 min", body: "Our hygienist will clean and polish your teeth, removing plaque and tartar buildup. Fluoride treatment is included." },
            { icon: MessageCircle, title: "Your Care Plan", time: "10 min", body: "We'll sit down with you, explain everything we found, and create a prioritized treatment plan. We'll also check your insurance benefits and give you a clear cost breakdown — no surprises." },
          ].map((step, i) => (
            <motion.div key={step.title} variants={reveal} custom={i}
              whileHover={{ y: -3 }}
              className="bg-white rounded-[20px] p-8 border border-blue-100/60 flex gap-6 items-start group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-brand-blue" />
                </div>
                {i < 4 && <div className="w-0.5 h-8 bg-blue-100 mt-2" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-display text-h5 font-bold text-brand-navy leading-tight">{step.title}</h4>
                  <span className="font-display font-semibold text-caption bg-blue-50 text-brand-blue px-3 py-1 rounded-btn">{step.time}</span>
                </div>
                <p className="font-body text-body text-brand-slate leading-[1.7]">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* NEW PATIENT SPECIALS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-20 top-20 w-[130px] h-[130px] rounded-full bg-brand-gold/5 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-gold">New Patient Offers</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Special Offers for New Patients
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { price: "$49", title: "Emergency Exam & X-Ray", desc: "Same-day emergency appointments available. Plus free comprehensive exam within 30 days ($380 value).", cta: "Book Emergency Visit", variant: "emergency" as const, link: "/services/emergency-dental-care", accent: "coral" },
            { price: "$95", title: "Kids New Patient Special", desc: "Includes exam, x-rays, and cleaning for kids ages 0–17.", cta: "Schedule Child's First Visit", variant: "default" as const, link: "/services/kids-dentistry", accent: "blue" },
            { price: "$1,200 OFF", title: "Invisalign & Implants", desc: "Includes free consultation and 3D smile preview.", cta: "Get $1,200 Off", variant: "promo" as const, link: "/services/invisalign", accent: "gold" },
          ].map((promo, i) => (
            <motion.div key={promo.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              className={`rounded-[24px] p-8 border flex flex-col ${
                promo.accent === "coral" ? "bg-brand-coral text-white border-coral-600" :
                promo.accent === "gold" ? "bg-gold-50 border-gold-100" :
                "bg-blue-50 border-blue-100/60"
              }`}>
              <span className={`font-display font-extrabold text-h2 leading-tight mb-2 ${
                promo.accent === "coral" ? "text-white" : promo.accent === "gold" ? "text-gold-600" : "text-brand-blue"
              }`}>{promo.price}</span>
              <h3 className={`font-display text-h4 mb-2 ${promo.accent === "coral" ? "text-white" : "text-brand-navy"}`}>{promo.title}</h3>
              <p className={`font-body text-body-sm mb-6 flex-1 ${promo.accent === "coral" ? "text-coral-50" : "text-brand-slate"}`}>{promo.desc}</p>
              <Link to={promo.link}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant={promo.variant} className={promo.accent === "coral" ? "bg-white text-brand-coral hover:bg-coral-50" : "w-full"}>
                    {promo.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body text-brand-slate italic">
            Already a patient? These promotions are available for existing patients too — ask us about current specials at your next visit.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* INSURANCE & PAYMENT */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute left-10 top-20 w-[140px] h-[140px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Insurance & Financing</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            We Make Dental Care Affordable
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid lg:grid-cols-2 gap-8">
          {/* Insurance */}
          <motion.div variants={reveal} custom={0} className="bg-white rounded-[24px] p-10 border border-blue-100/60">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-h4 text-brand-navy">16 Insurance Plans Accepted</h3>
            </div>
            <p className="font-body text-body text-brand-slate leading-[1.7] mb-6">
              We accept most major dental insurance plans and will verify your benefits for free before any treatment. Our team handles the paperwork so you don't have to.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {insuranceCarriers.map(c => (
                <div key={c} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                  <span className="font-body text-body-sm text-brand-slate">{c}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-brand-blue/20 rounded-[14px] p-4 flex items-start gap-3 mb-6">
              <Info className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
              <span className="font-body text-body-sm text-brand-slate">Medicaid is not accepted. Emergency care available out-of-pocket.</span>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default">Get Your Free Benefits Check <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </motion.div>

          {/* Financing */}
          <motion.div variants={reveal} custom={1} className="bg-white rounded-[24px] p-10 border border-blue-100/60">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/12 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-display font-bold text-h4 text-brand-navy">No Insurance? No Problem.</h3>
            </div>
            <p className="font-body text-body text-brand-slate leading-[1.7] mb-6">
              We offer flexible payment plans through Sunbit and CareCredit so you can get the care you need now and pay over time. Apply in minutes, right in the office.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-gold-50 rounded-[14px] p-5 border border-gold-100/60">
                <h4 className="font-display font-bold text-body text-brand-navy mb-1">Sunbit</h4>
                <p className="font-body text-body-sm text-brand-slate">3, 6, or 12-month plans. Quick approval.</p>
              </div>
              <div className="bg-gold-50 rounded-[14px] p-5 border border-gold-100/60">
                <h4 className="font-display font-bold text-body text-brand-navy mb-1">CareCredit</h4>
                <p className="font-body text-body-sm text-brand-slate">Special financing offers available. No annual fees.</p>
              </div>
            </div>
            <p className="font-body text-body-sm text-brand-slate italic mb-6">
              We also offer cash-pay pricing that's often lower than what insured patients pay out-of-pocket. Just ask.
            </p>
            <Link to="/new-patients/financing">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary">Learn About Financing <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* PATIENT FORMS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-20 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Save Time</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Fill Out Your Forms Before You Arrive
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-10 leading-[1.7]">
            Complete your new patient paperwork online — it only takes about 5 minutes and saves you time at the office. You can also fill out forms when you arrive.
          </motion.p>
          <motion.div variants={reveal} custom={3}>
            <Link to="/new-patients/patient-forms">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button variant="default" size="lg">Access Patient Forms <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </Link>
          </motion.div>
          <motion.p variants={reveal} custom={4} className="font-body text-body-sm text-brand-slate italic mt-6">
            All patient information is protected under HIPAA. Your data is encrypted and secure.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* WHY US — VALUE PROPS */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Why Us</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            What Makes Us Different
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: MapPin, title: "23 Locations", body: "From Summerlin to Henderson — there's always a Good Doc Dental nearby." },
            { icon: Clock, title: "Open 7 Days", body: "Evenings, weekends, and Sundays at most locations." },
            { icon: Zap, title: "Same-Day Emergency", body: "$49 emergency exam & x-ray. Walk-ins welcome." },
            { icon: Users, title: "All Ages Welcome", body: "Kids, teens, adults, and seniors. Plus 7 dedicated kids offices." },
            { icon: DollarSign, title: "Transparent Pricing", body: "No hidden fees. We'll tell you the cost before we start." },
            { icon: Stethoscope, title: "In-House Specialists", body: "Orthodontists, oral surgeons, and pediatric dentists — all under one roof." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-[24px] p-8 border border-blue-100/60 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight">{card.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-[1.6]">{card.body}</p>
            </motion.div>
          ))}
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
            Common Questions for New Patients
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

    {/* TESTIMONIALS */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Patient Stories</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            What New Patients Are Saying
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Amanda L.", location: "Summer Dental", quote: "I was so nervous about going to the dentist after 8 years. The team at Summer Dental was so kind and patient — they made me feel completely at ease. Already booked my next cleaning." },
            { name: "Marcus W.", location: "Cadence Family Dental", quote: "Switched from my old dentist and the difference is night and day. They checked my insurance, told me exactly what I'd pay, and got me in the same week I called. This is how dental care should be." },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* BOTTOM CTA */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(4,116,193,0.06),transparent_60%)]" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
            Book your first appointment today — online, by phone, or just walk in. 23 offices, open 7 days, all ages welcome.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/20">
                Book Your First Visit <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <Link to="/locations">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" size="lg" className="border-white/15 text-white hover:bg-white/8">
                  <MapPin className="w-4 h-4" /> Find a Location Near You
                </Button>
              </motion.div>
            </Link>
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

export default NewPatients;
