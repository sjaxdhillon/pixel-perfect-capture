import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, CalendarCheck, Tag, CreditCard,
  Shield, Eye, Utensils, Clock, Sparkles, Check, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import LocationCard from "@/components/LocationCard";
import ServiceCard from "@/components/ServiceCard";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import invisalignImg from "@/assets/pages/invisalign-smile.jpg";

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

const orthoLocations = locations.filter(l => !l.kidsOffice).slice(0, 6);

const processSteps = [
  { title: "Free Consultation & 3D Scan", body: "It starts with a comprehensive exam and digital 3D scan using our iTero scanner. We'll assess your teeth, discuss your goals, and show you a digital preview of your new smile — all at no cost." },
  { title: "Custom Treatment Plan", body: "Using your 3D scan, we design a precise treatment plan mapping every stage of tooth movement. You'll know exactly how many aligners you need and how long treatment will take before you commit." },
  { title: "Wear Your Aligners", body: "You'll wear each set of clear aligners for 20–22 hours a day, switching to the next set every 1–2 weeks. Check-ins every 6–8 weeks to make sure everything's on track." },
  { title: "Reveal Your New Smile", body: "Once your final aligner does its job, we'll fit you with a custom retainer to keep your teeth in their new position. Most patients are in and out of treatment in 12–18 months." },
];

const candidateSigns = [
  "Crowded teeth",
  "Gaps between teeth",
  "Overbite or underbite",
  "Crossbite",
  "Open bite",
  "Crooked or rotated teeth",
  "Relapse after previous braces",
  "Mild to moderate alignment issues",
];

const comparisonData = [
  { feature: "Appearance", invisalign: "Nearly invisible", braces: "Metal brackets visible" },
  { feature: "Removable", invisalign: "Yes — for eating, brushing", braces: "No — fixed for entire treatment" },
  { feature: "Comfort", invisalign: "Smooth plastic, no wires", braces: "May cause irritation initially" },
  { feature: "Diet", invisalign: "No restrictions", braces: "Avoid hard/sticky foods" },
  { feature: "Treatment Time", invisalign: "6–18 months (avg)", braces: "12–24 months (avg)" },
  { feature: "Office Visits", invisalign: "Every 6–8 weeks", braces: "Every 4 weeks" },
  { feature: "Best For", invisalign: "Mild to moderate cases", braces: "All complexity levels" },
  { feature: "Price at GDD", invisalign: "$2,900–$5,950", braces: "$2,900–$5,950" },
];

const techCards = [
  { title: "iTero 3D Scanner", body: "Digital impressions in minutes — no goopy molds. Plus, you'll see a realistic 3D preview of your final smile before you start." },
  { title: "ClinCheck® Treatment Planning", body: "Invisalign's proprietary software maps every single tooth movement from start to finish. You'll know your exact treatment timeline upfront." },
  { title: "SmartTrack® Material", body: "Invisalign's custom-engineered aligner material applies gentle, constant force for more predictable tooth movement and better comfort." },
];

const faqs = [
  { q: "How much does Invisalign cost at Good Doc Dental?", a: "Invisalign treatment at Good Doc Dental ranges from $2,900 to $5,950 depending on the complexity of your case. Simple cases with minor crowding cost less, while more complex cases require more aligners and take longer. Right now, we're offering $1,200 off all Invisalign and orthodontic treatment." },
  { q: "How long does Invisalign take?", a: "Most adult Invisalign cases take 12–18 months. Minor crowding or spacing can be corrected in as little as 6 months. Your exact timeline will be determined at your free consultation based on your 3D scan." },
  { q: "Does Invisalign hurt?", a: "Most patients experience mild pressure for the first day or two after switching to a new set of aligners. This is normal — it means the aligners are working. The discomfort is usually described as pressure, not pain, and it resolves quickly." },
  { q: "Can I eat with Invisalign in?", a: "No — you should remove your aligners before eating or drinking anything other than water. This is actually a benefit, because it means there are zero food restrictions. Eat whatever you want, then brush and pop them back in." },
  { q: "Is Invisalign as effective as braces?", a: "For mild to moderate cases, Invisalign delivers results that are comparable to traditional braces. For severe or complex cases, traditional braces may be recommended. During your free consultation, we'll give you an honest assessment of which option is best for your specific situation." },
  { q: "Do you offer Invisalign for teens?", a: "Yes! Invisalign Teen is designed specifically for teenage patients. It includes compliance indicators on the aligners so parents can verify wear time, and extra replacement aligners in case any get lost." },
];

const relatedSlugs = ["traditional-braces", "teen-orthodontics", "teeth-whitening"];
const relatedServices = services.filter(s => relatedSlugs.includes(s.slug));

const Invisalign = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO — Blue, aspirational */}
    <section className="bg-brand-blue relative overflow-hidden min-h-[70vh] flex items-center">
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/6 blur-[80px] pointer-events-none"
      />
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute right-1/3 bottom-1/4 w-[150px] h-[150px] rounded-full bg-brand-gold/5 blur-[50px] pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-white/90">Clear Aligner Therapy</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] tracking-[-2.5px] mb-7"
          >
            Invisalign® Clear
            <br />Aligners in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-white/70 mb-5 max-w-xl leading-[1.6]">
            Straighter teeth, zero metal — and $1,200 off to get you started.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-white/75 mb-10 max-w-xl leading-[1.7]">
            Invisalign uses a series of custom-made, virtually invisible aligners to gradually shift your teeth into place. No brackets, no wires, no monthly tightening appointments. Just smooth, comfortable trays you can remove to eat, drink, and brush normally. And with 23 locations across Las Vegas, Henderson, and North Las Vegas — your Invisalign provider is always close by.
          </motion.p>

          {/* Floating price callout */}
          <motion.div variants={reveal} custom={4}>
            <motion.div
              variants={float} initial="initial" animate="animate"
              className="inline-flex items-baseline gap-4 bg-white/12 backdrop-blur-md rounded-[20px] px-8 py-5 mb-12 border border-white/10"
            >
              <span className="font-display font-extrabold text-[56px] text-white leading-none drop-shadow-lg">$1,200</span>
              <div>
                <span className="font-display font-bold text-body-lg text-white block">OFF Invisalign® or Braces</span>
                <span className="font-body text-body-sm text-white/70">Includes free consultation & 3D smile preview</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={reveal} custom={5} className="flex flex-wrap gap-3">
            <a href="#pricing">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20">
                  Get $1,200 Off Invisalign® <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </a>
            <a href="#process">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/8">
                  <Sparkles className="w-4 h-4" /> See Your New Smile First — Free
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* TRUST BAR */}
    <section className="bg-gradient-to-b from-blue-50/40 to-white py-6 border-b border-blue-100/60">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: CalendarCheck, text: "Free Consultation" },
            { icon: Sparkles, text: "3D Smile Preview" },
            { icon: Tag, text: "$1,200 Off Treatment" },
            { icon: CreditCard, text: "Financing Available" },
          ].map((item, i) => (
            <motion.div key={item.text} variants={reveal} custom={i} whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-2.5 bg-white rounded-btn px-5 py-2.5 shadow-sm border border-blue-50 hover:shadow-md transition-shadow duration-300">
              <item.icon className="w-4 h-4 text-brand-blue" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* WHAT IS INVISALIGN */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">How It Works</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            What Is Invisalign® and How Does It Work?
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            Invisalign is a modern alternative to traditional braces that uses a series of clear, removable aligners to straighten your teeth. Each set of aligners is custom-made using 3D digital scanning technology, and you'll switch to a new set every 1–2 weeks as your teeth gradually move into their ideal position. Most adults complete treatment in 12–18 months, though some cases finish in as little as 6 months.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Eye, title: "Virtually Invisible", body: "Clear aligners are nearly undetectable. Most people won't even notice you're wearing them — perfect for professionals and teens." },
            { icon: Utensils, title: "Eat Whatever You Want", body: "Remove your aligners for meals and snacks. No food restrictions — enjoy popcorn, apples, and everything in between." },
            { icon: Clock, title: "Fewer Office Visits", body: "Invisalign typically requires check-ins every 6–8 weeks, not monthly adjustments. Less time in the chair, more time living your life." },
            { icon: Sparkles, title: "See Results Before You Start", body: "Our iTero 3D scanner shows you a digital preview of your new smile before treatment even begins. See exactly where your teeth will move." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-blue-50/60 rounded-[24px] p-8 border border-blue-100/60 group">
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

    {/* CANDIDATES */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Good Candidates</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Invisalign Can Fix More Than You Think
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid sm:grid-cols-2 gap-4 mb-12">
          {candidateSigns.map((item, i) => (
            <motion.div key={item} variants={reveal} custom={i}
              whileHover={{ y: -3, boxShadow: "0 16px 40px -12px rgba(4,116,193,0.1)" }}
              className="flex items-start gap-4 bg-white rounded-[20px] p-6 border border-blue-100/60 group transition-all duration-300">
              <div className="w-7 h-7 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-brand-blue" />
              </div>
              <span className="font-display font-semibold text-body text-brand-navy leading-snug">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body-lg text-brand-slate max-w-2xl leading-[1.7] mb-10">
            Not sure if Invisalign is right for your case? Book a free consultation and we'll let you know — honestly. If traditional braces are a better fit, we'll tell you that too. No pressure, no upselling.
          </motion.p>
          <motion.div variants={reveal} custom={1}>
            <a href="#pricing">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo">Book Your Free Consultation <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* PROCESS */}
    <section id="process" className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-32 w-[130px] h-[130px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Your Invisalign Journey
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            From first scan to final smile — here's how Invisalign works at Good Doc Dental.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={reveal} custom={i}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-blue-50/60 rounded-[24px] p-8 border border-blue-100/60 relative group">
                <span className="font-display font-extrabold text-[56px] text-blue-100/80 leading-none select-none absolute top-5 right-6 group-hover:text-brand-blue/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                  <span className="font-display font-extrabold text-body-lg text-brand-blue">{i + 1}</span>
                </div>
                <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight">{step.title}</h4>
                <p className="font-body text-body-sm text-brand-slate leading-[1.6]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* COMPARISON — Invisalign vs Braces */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Compare Your Options</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Invisalign® vs. Traditional Braces
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Both options deliver great results. Here's how they compare:
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-3 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={reveal} custom={0} className="grid grid-cols-3 gap-3">
            <div className="rounded-[16px] bg-white/60 px-6 py-4 border border-blue-100/40">
              <span className="font-display font-bold text-body-sm text-brand-slate uppercase tracking-wider">Feature</span>
            </div>
            <div className="rounded-[16px] bg-brand-blue px-6 py-4">
              <span className="font-display font-bold text-body-sm text-white">Invisalign®</span>
            </div>
            <div className="rounded-[16px] bg-brand-navy px-6 py-4">
              <span className="font-display font-bold text-body-sm text-white">Traditional Braces</span>
            </div>
          </motion.div>

          {/* Rows */}
          {comparisonData.map((row, i) => (
            <motion.div key={row.feature} variants={reveal} custom={i + 1}
              whileHover={{ y: -2 }}
              className="grid grid-cols-3 gap-3">
              <div className="rounded-[16px] bg-white px-6 py-4 border border-blue-50">
                <span className="font-display font-semibold text-body-sm text-brand-navy">{row.feature}</span>
              </div>
              <div className="rounded-[16px] bg-blue-50/60 px-6 py-4 border border-blue-100/40">
                <span className="font-body text-body-sm text-brand-slate">{row.invisalign}</span>
              </div>
              <div className="rounded-[16px] bg-navy-50/30 px-6 py-4 border border-navy-100/20">
                <span className="font-body text-body-sm text-brand-slate">{row.braces}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body text-brand-slate italic mt-10 max-w-2xl mx-auto text-center leading-[1.7]">
            Both options are $1,200 off right now. Not sure which is right for you? We'll help you decide at your free consultation.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* TECHNOLOGY */}
    <section className="bg-brand-navy py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.06),transparent_50%)]" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Our Technology</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-white mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            See Your Future Smile Before Treatment Starts
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-navy-100/80 mb-16 max-w-lg leading-[1.7]">
            Our offices are equipped with the latest digital orthodontic technology to make your Invisalign experience faster, more accurate, and more comfortable.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {techCards.map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)" }}
              className="bg-white/5 backdrop-blur-sm border border-white/6 rounded-[20px] p-8 transition-all duration-300">
              <h4 className="font-display text-h5 font-bold text-white mb-4 leading-tight">{card.title}</h4>
              <p className="font-body text-body text-navy-200 leading-[1.7]">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* PRICING */}
    <section id="pricing" className="py-28 md:py-36 relative">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-0 top-20 w-[200px] h-[200px] rounded-full bg-brand-gold/4 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-gold">Transparent Pricing</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Invisalign Cost in Las Vegas
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid lg:grid-cols-5 gap-6">
          <motion.div variants={reveal} custom={0} whileHover={{ y: -4 }}
            className="lg:col-span-3 bg-gold-50 border-2 border-brand-gold rounded-[28px] p-10 md:p-12 relative overflow-hidden">
            <motion.div variants={floatSlow} initial="initial" animate="animate"
              className="absolute -left-14 -bottom-14 w-[220px] h-[220px] rounded-full bg-brand-gold/8 blur-[50px]" />
            <div className="relative z-10">
              <span className="inline-block font-display font-bold text-caption uppercase tracking-[0.12em] text-gold-600 bg-brand-gold/15 px-4 py-1.5 rounded-btn mb-6">Limited Time Offer</span>
              <div className="flex items-baseline gap-3 mb-3">
                <motion.span variants={float} initial="initial" animate="animate"
                  className="font-display font-extrabold text-[64px] text-brand-navy leading-none drop-shadow-sm inline-block">$1,200</motion.span>
                <span className="font-display font-bold text-h4 text-brand-navy">OFF</span>
              </div>
              <h3 className="font-display font-bold text-h3 text-brand-navy mb-4">Invisalign® or Braces</h3>
              <p className="font-body text-body-lg text-brand-slate leading-[1.6] mb-3">
                Treatment range: $2,900–$5,950
              </p>
              <p className="font-body text-body text-brand-slate leading-[1.6] mb-8">
                Final price depends on complexity — simple cases start lower.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20 w-full sm:w-auto">
                  Get $1,200 Off Invisalign® <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-5">
            <motion.div variants={reveal} custom={1} whileHover={{ y: -3 }}
              className="bg-blue-50 rounded-[24px] p-8 border border-blue-100/60">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Insurance Friendly</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-6">
                Many dental insurance plans include orthodontic benefits that cover a portion of Invisalign. We'll verify your benefits and maximize your coverage — free.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="sm">Free Benefits Check</Button>
              </motion.div>
            </motion.div>

            <motion.div variants={reveal} custom={2} whileHover={{ y: -3 }}
              className="bg-gold-50 rounded-[24px] p-8 border border-gold-100/60">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/12 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Financing Available</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-5">
                Sunbit and CareCredit accepted. Split your Invisalign cost into easy monthly payments — as low as $99/month with approved credit.
              </p>
              <div className="flex gap-2">
                {["3 mo", "6 mo", "12 mo"].map((plan) => (
                  <span key={plan} className="font-display font-semibold text-caption bg-white text-gold-600 px-4 py-2 rounded-xl border border-gold-100/80 uppercase tracking-wider">{plan}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body-sm text-brand-slate italic mt-8">
            Prices may vary based on individual treatment needs. A personalized quote is provided during your free consultation.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute right-20 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">23 Locations</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Invisalign Providers Across Las Vegas
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Every Good Doc Dental location offers Invisalign and orthodontic services. Find the office closest to you.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {orthoLocations.map((loc, i) => (
            <motion.div key={loc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/locations">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="secondary">View All 23 Locations <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </Link>
        </div>
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
            Common Questions About Invisalign
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
            Real Invisalign Patients, Real Results
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Michelle K.", location: "Summer Dental", quote: "I was so self-conscious about my smile for years. After 14 months with Invisalign at Good Doc, I can't stop smiling. The $1,200 off made it actually affordable too." },
            { name: "David T.", location: "Edge Dental", quote: "I thought I was too old for braces at 42. My dentist recommended Invisalign and I'm so glad I did it. Nobody at work even noticed I was wearing them." },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* RELATED SERVICES */}
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Related Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            You May Also Be Interested In
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {relatedServices.map((s, i) => (
            <motion.div key={s.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} priceUnit={s.priceUnit} icon={s.icon} promoText={s.promoText} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* BOTTOM CTA */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(4,116,193,0.06),transparent_60%)]" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
            Ready to See Your
            <br />New Smile?
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
            Book your free Invisalign consultation today. We'll scan your teeth, show you a preview of your results, and give you a personalized treatment plan — all at no cost.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20">
                Get $1,200 Off Invisalign® <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <a href="tel:7028522829">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" size="lg" className="border-white/15 text-white hover:bg-white/8">
                  <Phone className="w-4 h-4" /> Call, Text, or Book Online 24/7
                </Button>
              </motion.div>
            </a>
          </motion.div>
          <motion.p variants={reveal} custom={3} className="font-body text-body-sm text-navy-200 mt-6">702-852-2829</motion.p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Invisalign;
