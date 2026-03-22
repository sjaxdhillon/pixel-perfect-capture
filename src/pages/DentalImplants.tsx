import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, UserCheck, CalendarCheck, Tag, CreditCard,
  Shield, Smile, Activity, Utensils, Check, Star, ChevronRight
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
import implantImg from "@/assets/pages/dental-implants-procedure.jpg";

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

const topLocations = locations.filter(l => !l.kidsOffice).slice(0, 6);

const processSteps = [
  { title: "Free Consultation & 3D Scan", body: "We start with a comprehensive exam including CBCT 3D imaging to evaluate your jawbone and plan the ideal implant placement. This is completely free." },
  { title: "Implant Placement", body: "Our in-house oral surgeon places the titanium implant post into your jawbone. Most patients say the procedure is easier than they expected." },
  { title: "Healing & Integration", body: "Over 3–6 months, the implant fuses with your jawbone in a process called osseointegration. You'll wear a temporary restoration during this time." },
  { title: "Custom Crown Placement", body: "Once healed, we attach your permanent custom crown. It's color-matched and shaped to blend perfectly with your natural teeth." },
];

const candidateSigns = [
  "You're missing one or more teeth",
  "You have a cracked or broken tooth that can't be saved",
  "You're tired of loose or uncomfortable dentures",
  "You have enough jawbone density (or are open to bone grafting)",
  "You want a permanent fix, not a temporary solution",
  "You're in good general health",
];

const faqs = [
  { q: "How long do dental implants last?", a: "With proper care — brushing, flossing, and regular dental checkups — dental implants can last 25 years or more. Many patients keep their implants for life. The crown on top may need replacement after 10–15 years due to normal wear." },
  { q: "Does getting a dental implant hurt?", a: "Most patients are surprised by how comfortable the procedure is. We use local anesthesia, and sedation options are available if you're anxious. Most patients describe the discomfort as less than a tooth extraction." },
  { q: "How long does the whole implant process take?", a: "From consultation to final crown, the full process typically takes 4–6 months. The implant placement itself is usually done in under an hour." },
  { q: "Am I too old for dental implants?", a: "There's no upper age limit for dental implants. As long as you're in reasonable health and have adequate jawbone density, implants can be a great option." },
  { q: "What if I don't have enough jawbone?", a: "Bone grafting can build up the jawbone to support an implant. This is a common procedure that we perform in-house. In some cases, we can place the implant and do the bone graft at the same time." },
];

const relatedSlugs = ["implant-supported-dentures", "dental-crowns", "dental-bridges"];
const relatedServices = services.filter(s => relatedSlugs.includes(s.slug));

const techCards = [
  { title: "CBCT 3D Scan", body: "Full 3D imaging of your jaw for precise implant planning — seeing bone density, nerve locations, and ideal angles before we start." },
  { title: "Digital Impressions (iTero)", body: "No messy putty molds. Our iTero scanner creates a perfect digital model of your mouth in minutes." },
  { title: "Guided Implant Surgery", body: "Computer-guided placement for maximum accuracy, faster healing, and better long-term results." },
];

const DentalImplants = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO — Navy, premium with floating elements */}
    <section className="bg-brand-navy relative overflow-hidden min-h-[70vh] flex items-center">
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/4 blur-[80px] pointer-events-none"
      />
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute right-1/3 bottom-1/4 w-[150px] h-[150px] rounded-full bg-brand-gold/3 blur-[50px] pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/6 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/8">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-blue-200">Permanent Tooth Replacement</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] tracking-[-2.5px] mb-7"
          >
            Dental Implants
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-blue-200/70 mb-5 max-w-xl leading-[1.6]">
            The permanent solution for missing teeth — and the confidence that comes with them.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-navy-100/80 mb-10 max-w-xl leading-[1.7]">
            Unlike dentures or bridges, dental implants replace the root of your tooth. They look, feel, and function like your natural teeth — and with proper care, they can last a lifetime.
          </motion.p>

          {/* Floating price callout */}
          <motion.div variants={reveal} custom={4}>
            <motion.div
              variants={float} initial="initial" animate="animate"
              className="inline-flex items-baseline gap-4 bg-white/8 backdrop-blur-md rounded-[20px] px-8 py-5 mb-12 border border-white/8"
            >
              <span className="font-display font-extrabold text-[56px] text-white leading-none drop-shadow-lg">$1,200</span>
              <div>
                <span className="font-display font-bold text-body-lg text-white block">OFF Complete Implant Package</span>
                <span className="font-body text-body-sm text-blue-200">Includes consultation, implant, abutment & crown</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={reveal} custom={5} className="flex flex-wrap gap-3">
            <a href="#pricing">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20">
                  Get $1,200 Off Your Implant Package <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </a>
            <Link to="/locations">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/8">
                  <MapPin className="w-4 h-4" /> Find a Location Near You
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Implant Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-8 mb-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={implantImg} alt="Dental implant procedure close-up" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    {/* TRUST BAR */}
    <section className="bg-gradient-to-b from-blue-50/40 to-white py-6 border-b border-blue-100/60">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: UserCheck, text: "In-House Specialists" },
            { icon: CalendarCheck, text: "Free Consultation" },
            { icon: Tag, text: "$1,200 Off Complete Package" },
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

    {/* WHAT IS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Understanding Implants</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            What Exactly Is a Dental Implant?
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            A dental implant is a small titanium post that's surgically placed into your jawbone, where it fuses with the bone over time. Once healed, a custom-made crown is attached — giving you a replacement tooth that looks and feels completely natural.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, title: "Permanent Solution", body: "Implants can last 25+ years with proper care — often a lifetime." },
            { icon: Smile, title: "Looks & Feels Natural", body: "Custom-matched to your existing teeth in shape, size, and color." },
            { icon: Activity, title: "Preserves Your Jawbone", body: "Implants stimulate the jawbone just like natural roots, preventing bone loss." },
            { icon: Utensils, title: "Eat Whatever You Want", body: "No food restrictions. Bite into apples, eat steak, chew gum." },
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
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Is This Right for You?</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            You Might Be a Good Candidate If...
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
            Not sure if implants are right for you? That's exactly what the free consultation is for.
          </motion.p>
          <motion.div variants={reveal} custom={1}>
            <a href="#pricing">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo">Schedule Your Free Consultation <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-32 w-[130px] h-[130px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            How Dental Implants Work
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            From your first visit to your final smile — here's the complete implant journey.
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

    {/* TECHNOLOGY */}
    <section className="bg-brand-navy py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.06),transparent_50%)]" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Advanced Technology</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-white mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Precision Implant Dentistry
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-navy-100/80 mb-16 max-w-lg leading-[1.7]">
            We use the latest technology to ensure your implant is placed perfectly and heals properly.
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
            Dental Implant Costs in Las Vegas
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
              <h3 className="font-display font-bold text-h3 text-brand-navy mb-4">Complete Implant Package</h3>
              <p className="font-body text-body-lg text-brand-slate leading-[1.6] mb-8">
                Includes consultation, implant, abutment & custom crown. Individual implant range: $1,800–$2,200.
              </p>
              <div className="space-y-3.5 mb-10">
                {["Free consultation & 3D scan", "Titanium implant placement", "Custom abutment", "Porcelain crown — color-matched to your teeth", "All follow-up visits included"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-body text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20 w-full sm:w-auto">
                  Get $1,200 Off Your Implant Package <ArrowRight className="w-4 h-4" />
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
                Most insurance plans cover a portion of implant costs. We'll verify your benefits and give you an exact out-of-pocket estimate.
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
                Sunbit and CareCredit accepted. Split your implant cost into easy monthly payments.
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
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Near You</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Dental Implant Locations
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Our in-house oral surgeons perform implant procedures at these convenient Las Vegas Valley locations.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {topLocations.map((loc, i) => (
            <motion.div key={loc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/locations">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="secondary">See All 23 Locations <ArrowRight className="w-4 h-4" /></Button>
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
            Common Questions About Implants
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
            Real Implant Patients, Real Results
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "James R.", location: "Henderson, NV", quote: "I put off getting an implant for years because I thought it would be painful and expensive. Good Doc changed my mind on both counts." },
            { name: "Sandra M.", location: "Summerlin, NV", quote: "After losing a tooth, I tried a bridge first but it never felt right. The implant from Good Doc feels exactly like my real tooth. I forget it's even there." },
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,196,61,0.06),transparent_60%)]" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
            Ready to Replace Your
            <br />Missing Teeth?
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
            Schedule your free implant consultation at any of our 23 Las Vegas Valley offices.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="promo" size="lg" className="shadow-xl shadow-brand-gold/20">
                Get $1,200 Off Your Implant Package <ArrowRight className="w-4 h-4" />
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
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default DentalImplants;
