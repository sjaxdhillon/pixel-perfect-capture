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

/* ─── Animation ─── */
const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const topLocations = locations.filter(l => !l.kidsOffice).slice(0, 6);

const processSteps = [
  { title: "Free Consultation & 3D Scan", body: "We start with a comprehensive exam including CBCT 3D imaging to evaluate your jawbone and plan the ideal implant placement. This is completely free." },
  { title: "Implant Placement", body: "Our in-house oral surgeon places the titanium implant post into your jawbone. Most patients say the procedure is easier than they expected — many go back to work the next day." },
  { title: "Healing & Integration", body: "Over 3–6 months, the implant fuses with your jawbone in a process called osseointegration. You'll wear a temporary restoration during this time." },
  { title: "Custom Crown Placement", body: "Once healed, we attach your permanent custom crown. It's color-matched and shaped to blend perfectly with your natural teeth. You'll walk out with a complete smile." },
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
  { q: "Does getting a dental implant hurt?", a: "Most patients are surprised by how comfortable the procedure is. We use local anesthesia, and sedation options are available if you're anxious. Most patients describe the discomfort as less than a tooth extraction and manage it with over-the-counter pain medication for a few days." },
  { q: "How long does the whole implant process take?", a: "From consultation to final crown, the full process typically takes 4–6 months. The implant placement itself is usually done in under an hour. The majority of the timeline is healing time while the implant fuses with your jawbone." },
  { q: "Am I too old for dental implants?", a: "There's no upper age limit for dental implants. As long as you're in reasonable health and have adequate jawbone density, implants can be a great option. We've successfully placed implants for patients in their 80s." },
  { q: "What if I don't have enough jawbone?", a: "Bone grafting can build up the jawbone to support an implant. This is a common procedure that we perform in-house. In some cases, we can place the implant and do the bone graft at the same time, which reduces your overall treatment timeline." },
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

    {/* ═══════════════════════════════════════
        HERO — Navy, premium feel
       ═══════════════════════════════════════ */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-[350px] h-[350px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm rounded-btn px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.1em] text-blue-200">Permanent Tooth Replacement</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(34px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-6"
          >
            Dental Implants
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,1.8vw,22px)] text-blue-200/80 mb-4 max-w-xl leading-relaxed">
            The permanent solution for missing teeth — and the confidence that comes with them.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-navy-100 mb-8 max-w-xl leading-relaxed">
            Unlike dentures or bridges, dental implants replace the root of your tooth. They look, feel, and function like your natural teeth — and with proper care, they can last a lifetime. Our in-house oral surgeons and prosthodontists handle every step, from consultation to final crown, right here.
          </motion.p>

          {/* Price callout */}
          <motion.div variants={reveal} custom={4} className="inline-flex items-baseline gap-3 bg-white/12 backdrop-blur-sm rounded-2xl px-6 py-4 mb-10">
            <span className="font-display font-extrabold text-display text-white leading-none">$1,200</span>
            <div>
              <span className="font-display font-bold text-body text-white block">OFF Complete Implant Package</span>
              <span className="font-body text-body-sm text-blue-200">Includes consultation, implant, abutment & crown</span>
            </div>
          </motion.div>

          <motion.div variants={reveal} custom={5} className="flex flex-wrap gap-3">
            <a href="#pricing">
              <Button variant="promo" size="lg" className="shadow-lg shadow-brand-gold/20">
                Get $1,200 Off Your Implant Package
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/locations">
              <Button variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <MapPin className="w-4 h-4" />
                Find a Location Near You
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        TRUST BAR — Sky tint
       ═══════════════════════════════════════ */}
    <section className="bg-brand-sky py-5 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
        >
          {[
            { icon: UserCheck, text: "In-House Specialists" },
            { icon: CalendarCheck, text: "Free Consultation" },
            { icon: Tag, text: "$1,200 Off Complete Package" },
            { icon: CreditCard, text: "Financing Available" },
          ].map((item, i) => (
            <motion.div key={item.text} variants={reveal} custom={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-blue" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        WHAT IS — Explanation + 4 InfoCards
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Understanding Implants</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-4 leading-[1.1] tracking-tight">
            What Exactly Is a Dental Implant?
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-14 max-w-3xl leading-relaxed">
            A dental implant is a small titanium post that's surgically placed into your jawbone, where it fuses with the bone over time. Once healed, a custom-made crown is attached to the post — giving you a replacement tooth that looks and feels completely natural. Unlike bridges, implants don't require grinding down healthy neighboring teeth. And unlike dentures, they don't slip, click, or require adhesive.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, title: "Permanent Solution", body: "Implants can last 25+ years with proper care — often a lifetime. No re-fitting, no replacements." },
            { icon: Smile, title: "Looks & Feels Natural", body: "Custom-matched to your existing teeth in shape, size, and color. No one will know the difference." },
            { icon: Activity, title: "Preserves Your Jawbone", body: "Implants stimulate the jawbone just like natural roots, preventing the bone loss that occurs with missing teeth." },
            { icon: Utensils, title: "Eat Whatever You Want", body: "No food restrictions. Bite into apples, eat steak, chew gum — your implant handles it all." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i} className="bg-brand-sky rounded-3xl p-7 border border-blue-100 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
                <card.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <h4 className="font-display text-body-lg font-bold text-brand-navy mb-2 leading-tight">{card.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        CANDIDATES — Who needs implants
       ═══════════════════════════════════════ */}
    <section className="bg-blue-50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue">Is This Right for You?</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            You Might Be a Good Candidate If...
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid sm:grid-cols-2 gap-3 mb-10">
          {candidateSigns.map((item, i) => (
            <motion.div
              key={item}
              variants={reveal}
              custom={i}
              className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-blue-100 group hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-brand-blue" />
              </div>
              <span className="font-display font-semibold text-body text-brand-navy leading-snug">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body text-brand-slate max-w-2xl leading-relaxed mb-8">
            Not sure if implants are right for you? That's exactly what the free consultation is for. Our team will evaluate your jawbone, review your health history, and give you an honest recommendation — no pressure, no obligation.
          </motion.p>
          <motion.div variants={reveal} custom={1}>
            <a href="#pricing">
              <Button variant="promo">
                Schedule Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        PROCESS — 4 Steps, sky tint
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-4 leading-[1.1] tracking-tight">
            How Dental Implants Work
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body text-brand-slate mb-14 max-w-lg">
            From your first visit to your final smile — here's the complete implant journey, step by step.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={reveal} custom={i} className="bg-brand-sky rounded-3xl p-7 border border-blue-100 relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="font-display font-extrabold text-display text-blue-100 leading-none select-none absolute top-4 right-5 group-hover:text-brand-blue/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
                  <span className="font-display font-extrabold text-body text-brand-blue">{i + 1}</span>
                </div>
                <h4 className="font-display text-body-lg font-bold text-brand-navy mb-2 leading-tight">{step.title}</h4>
                <p className="font-body text-body-sm text-brand-slate leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        TECHNOLOGY — 3 cards
       ═══════════════════════════════════════ */}
    <section className="bg-brand-navy py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,116,193,0.08),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Advanced Technology</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-white mt-3 mb-4 leading-[1.1] tracking-tight">
            Precision Implant Dentistry
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body text-navy-100 mb-14 max-w-lg leading-relaxed">
            We use the latest technology to ensure your implant is placed perfectly and heals properly.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-3 gap-5">
          {techCards.map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i} className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-2xl p-7 hover:bg-white/10 hover:border-white/15 transition-all duration-300">
              <h4 className="font-display text-body-lg font-bold text-white mb-3 leading-tight">{card.title}</h4>
              <p className="font-body text-body-sm text-navy-200 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        PRICING — Transparent
       ═══════════════════════════════════════ */}
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-gold">Transparent Pricing</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            Dental Implant Costs in Las Vegas
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid lg:grid-cols-5 gap-6">
          {/* Main pricing card */}
          <motion.div variants={reveal} custom={0} className="lg:col-span-3 bg-gold-50 border-2 border-brand-gold rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -left-12 -bottom-12 w-[200px] h-[200px] rounded-full bg-brand-gold/10 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block font-display font-bold text-caption uppercase tracking-wider text-gold-600 bg-brand-gold/15 px-3 py-1 rounded-btn mb-5">Limited Time Offer</span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-extrabold text-[56px] text-brand-navy leading-none">$1,200</span>
                <span className="font-display font-bold text-h5 text-brand-navy">OFF</span>
              </div>
              <h3 className="font-display font-bold text-h4 text-brand-navy mb-3">Complete Implant Package</h3>
              <p className="font-body text-body text-brand-slate leading-relaxed mb-6">
                Includes consultation, implant, abutment & custom crown. Individual implant range: $1,800–$2,200.
              </p>
              <div className="space-y-3 mb-8">
                {["Free consultation & 3D scan", "Titanium implant placement", "Custom abutment", "Porcelain crown — color-matched to your teeth", "All follow-up visits included"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-body-sm text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="promo" size="lg" className="shadow-lg shadow-brand-gold/20 w-full sm:w-auto">
                Get $1,200 Off Your Implant Package
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Side cards */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div variants={reveal} custom={1} className="bg-blue-50 rounded-3xl p-7 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-body-lg text-brand-navy">Insurance Friendly</h4>
              </div>
              <p className="font-body text-body-sm text-brand-slate leading-relaxed mb-5">
                Most insurance plans cover a portion of implant costs. We'll verify your benefits and give you an exact out-of-pocket estimate before any work begins.
              </p>
              <Button variant="default" size="sm">
                Free Benefits Check
              </Button>
            </motion.div>

            <motion.div variants={reveal} custom={2} className="bg-gold-50 rounded-3xl p-7 border border-gold-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-gold/15 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gold-600" />
                </div>
                <h4 className="font-display font-bold text-body-lg text-brand-navy">Financing Available</h4>
              </div>
              <p className="font-body text-body-sm text-brand-slate leading-relaxed mb-4">
                Sunbit and CareCredit accepted. Split your implant cost into easy monthly payments — 3, 6, or 12-month plans available.
              </p>
              <div className="flex gap-2">
                {["3 mo", "6 mo", "12 mo"].map((plan) => (
                  <span key={plan} className="font-display font-semibold text-caption bg-white text-gold-600 px-3 py-1.5 rounded-lg border border-gold-100 uppercase tracking-wider">{plan}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body-sm text-brand-slate italic mt-6">
            Prices may vary based on individual treatment needs. A personalized quote is provided during your free consultation.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        LOCATIONS — Sky tint, 6 offices
       ═══════════════════════════════════════ */}
    <section className="bg-brand-sky py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Near You</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-4 leading-[1.1] tracking-tight">
            Dental Implant Locations
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body text-brand-slate mb-14 max-w-lg">
            Our in-house oral surgeons perform implant procedures at these convenient Las Vegas Valley locations.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {topLocations.map((loc, i) => (
            <motion.div key={loc.id} variants={reveal} custom={i}>
              <LocationCard
                name={loc.name}
                slug={loc.slug}
                address={loc.address}
                city={loc.city}
                phone={loc.phone}
                hours={loc.hours}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/locations">
            <Button variant="secondary">
              See All 23 Locations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        FAQ — Accordion
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue">FAQ</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-12 leading-[1.1] tracking-tight">
            Common Questions About Implants
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={reveal} custom={i}>
                <AccordionItem value={`faq-${i}`} className="bg-white border border-blue-50 rounded-2xl px-6 overflow-hidden data-[state=open]:shadow-md transition-shadow">
                  <AccordionTrigger className="font-display font-bold text-body text-brand-navy hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-body text-brand-slate leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        TESTIMONIALS
       ═══════════════════════════════════════ */}
    <section className="bg-blue-50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue">Patient Stories</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            Real Implant Patients, Real Results
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "James R.",
              location: "Henderson, NV",
              quote: "I put off getting an implant for years because I thought it would be painful and expensive. Good Doc changed my mind on both counts. The procedure was easier than I expected, and the financing made it totally affordable. My only regret is not doing it sooner.",
            },
            {
              name: "Sandra M.",
              location: "Summerlin, NV",
              quote: "After losing a tooth, I tried a bridge first but it never felt right. The implant from Good Doc feels exactly like my real tooth. I forget it's even there. The team was incredible from consultation to crown.",
            },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        RELATED SERVICES
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Related Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            You May Also Be Interested In
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-3 gap-5">
          {relatedServices.map((s, i) => (
            <motion.div key={s.id} variants={reveal} custom={i}>
              <ServiceCard
                name={s.name}
                slug={s.slug}
                tagline={s.tagline}
                priceDisplay={s.priceDisplay}
                priceUnit={s.priceUnit}
                icon={s.icon}
                promoText={s.promoText}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        BOTTOM CTA — Navy
       ═══════════════════════════════════════ */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,196,61,0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(28px,4vw,48px)] font-extrabold text-white leading-[1.05] tracking-tight mb-4">
            Ready to Replace Your
            <br />Missing Teeth?
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100 mb-10 leading-relaxed">
            Schedule your free implant consultation at any of our 23 Las Vegas Valley offices. We'll evaluate your situation, explain your options, and give you a personalized treatment plan — with no obligation.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-3">
            <Button variant="promo" size="lg" className="shadow-lg shadow-brand-gold/20">
              Get $1,200 Off Your Implant Package
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a href="tel:7028522829">
              <Button variant="secondary" size="lg" className="border-white/25 text-white hover:bg-white/10">
                <Phone className="w-4 h-4" />
                Call, Text, or Book Online 24/7
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default DentalImplants;
