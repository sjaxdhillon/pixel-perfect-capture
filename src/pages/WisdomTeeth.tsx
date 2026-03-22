import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, Check, UserCheck, CalendarCheck, Tag, Moon,
  Shield, CreditCard, Info, Syringe, Wind, Droplets, BedDouble
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationCard from "@/components/LocationCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import wisdomTeethImg from "@/assets/pages/wisdom-teeth-consult.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const float = {
  initial: { y: 0 },
  animate: { y: [-8, 8, -8], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const } },
};
const floatSlow = {
  initial: { y: 0 },
  animate: { y: [-5, 12, -5], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const } },
};
const floatReverse = {
  initial: { y: 0 },
  animate: { y: [6, -10, 6], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const } },
};

const signs = [
  "Pain or swelling in the back of your mouth",
  "Recurring infections or gum irritation around back molars",
  "Crowding or shifting of your other teeth",
  "A cyst or fluid-filled sac forming around the tooth",
  "Difficulty opening your mouth or chewing",
  "Your dentist's x-rays show impaction or poor positioning",
];

const processSteps = [
  { title: "Free Consultation & X-Rays", body: "We start with a thorough exam and panoramic x-rays to evaluate the position, angle, and root development of your wisdom teeth. We'll explain exactly what we see and recommend the best approach. This consultation is completely free." },
  { title: "Choose Your Sedation", body: "We offer multiple sedation options so you can choose your comfort level: local anesthesia, laughing gas (nitrous oxide), IV sedation, or general anesthesia. Our team will help you decide what's right for you." },
  { title: "The Procedure", body: "Our oral surgeon removes all 4 wisdom teeth in a single visit, typically in 45 minutes to an hour. You won't feel a thing during the procedure. Most patients don't remember it at all." },
  { title: "Recovery & Follow-Up", body: "We'll send you home with detailed aftercare instructions, pain management guidance, and a direct line to our team if you have questions. Most patients are back to normal activities within 3–5 days." },
];

const sedationOptions = [
  { icon: Syringe, title: "Local Anesthesia", body: "Numbs the surgical area completely. You're awake but feel nothing. Best for patients who are comfortable in the dental chair." },
  { icon: Wind, title: "Laughing Gas (Nitrous Oxide)", body: "Breathed through a small nose mask. You'll feel relaxed and a little euphoric. Wears off within minutes — you can drive yourself home." },
  { icon: Droplets, title: "IV Sedation", body: "A deeper level of sedation administered through an IV. You'll be in a twilight state — awake but unlikely to remember the procedure. Someone will need to drive you home." },
  { icon: BedDouble, title: "General Anesthesia", body: "You'll be completely asleep throughout the entire procedure. Recommended for severe anxiety or complex extractions. You'll need someone to drive you home." },
];

const recoveryTimeline = [
  { day: "Day 1", title: "Rest & Ice", body: "Take it easy. Apply ice packs to reduce swelling. Take prescribed pain medication. Stick to cold, soft foods like yogurt, smoothies, and ice cream." },
  { day: "Days 2–3", title: "Peak Swelling", body: "Swelling and bruising peak around day 2–3. This is normal. Continue icing and taking medication as directed. Warm, soft foods like soup and mashed potatoes are good now." },
  { day: "Days 4–5", title: "Turning the Corner", body: "Swelling starts to go down. Pain decreases significantly. You can gradually return to normal activities and start reintroducing regular foods." },
  { day: "Day 7+", title: "Back to Normal", body: "Most patients feel fully recovered by day 7. We'll see you for a follow-up appointment to make sure everything is healing properly." },
];

const faqs = [
  { q: "How much does wisdom teeth removal cost at Good Doc Dental?", a: "Wisdom teeth removal for all 4 teeth is $1,899 at Good Doc Dental. This includes your consultation, x-rays, the extraction procedure, and your follow-up visit. Individual tooth extractions range from $150–$300 per tooth." },
  { q: "Does wisdom teeth removal hurt?", a: "You won't feel anything during the procedure thanks to our sedation options. After the procedure, most patients manage discomfort with over-the-counter pain medication and ice packs. Prescription pain medication is available if needed." },
  { q: "How long is recovery after wisdom teeth removal?", a: "Most patients return to normal activities within 3–5 days. Full healing of the extraction sites takes about 2–4 weeks, but you'll be eating normally and feeling fine much sooner." },
  { q: "What age should wisdom teeth be removed?", a: "The ideal window is between ages 17–25, when the roots aren't fully formed and recovery tends to be quicker. However, wisdom teeth can be safely removed at any age if they're causing problems." },
  { q: "Can I be put to sleep for wisdom teeth removal?", a: "Yes. We offer IV sedation and general anesthesia options where you'll either be in a twilight state or completely asleep during the procedure. Many patients prefer this option and don't remember anything about the surgery." },
];

const topLocations = locations.filter(l => !l.kidsOffice).slice(0, 6);
const relatedServices = services.filter(s => ["tooth-extractions", "dental-sedation", "emergency-dental-care"].includes(s.id));

const WisdomTeeth = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO */}
    <section className="bg-brand-navy relative overflow-hidden min-h-[70vh] flex items-center">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[100px] pointer-events-none" />
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/4 blur-[80px] pointer-events-none" />
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-1/4 bottom-1/3 w-[150px] h-[150px] rounded-full bg-brand-gold/6 blur-[50px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/6 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/8">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-blue-200">Oral Surgery</span>
          </motion.div>

          <motion.h1 variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] tracking-[-2.5px] mb-7">
            Wisdom Teeth Removal
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-blue-200/70 mb-5 max-w-xl leading-[1.6]">
            All 4 wisdom teeth. One fixed price. In-house oral surgeons.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-navy-100/80 mb-10 max-w-xl leading-[1.7]">
            Wisdom teeth removal doesn't have to be stressful or expensive. At Good Doc Dental, our in-house oral surgeons handle everything from consultation to recovery — all under one roof. No referrals, no runaround, no surprise bills.
          </motion.p>

          <motion.div variants={reveal} custom={4}
            className="inline-flex items-center gap-5 bg-brand-gold/10 backdrop-blur-md rounded-[20px] px-8 py-5 border border-brand-gold/15 mb-10">
            <div>
              <span className="font-display text-[clamp(36px,5vw,52px)] font-extrabold text-brand-gold leading-none">$1,899</span>
              <span className="block font-display font-bold text-body text-white mt-1">All 4 Wisdom Teeth</span>
              <span className="block font-body text-body-sm text-blue-200/60">Includes free consultation</span>
            </div>
          </motion.div>

          <motion.div variants={reveal} custom={5} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/20">
                Book Your Free Consultation <ArrowRight className="w-4 h-4" />
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
        </motion.div>
      </div>
    </section>

    {/* Consultation Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-8 mb-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={wisdomTeethImg} alt="Oral surgeon explaining wisdom teeth x-ray to patient" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    {/* TRUST BAR */}
    <section className="bg-brand-sky py-5">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { icon: UserCheck, text: "In-House Oral Surgeons" },
            { icon: CalendarCheck, text: "Free Consultation" },
            { icon: Tag, text: "$1,899 — All 4 Teeth" },
            { icon: Moon, text: "Sedation Options Available" },
          ].map((item, i) => (
            <motion.div key={item.text} variants={reveal} custom={i} className="flex items-center gap-2.5">
              <item.icon className="w-5 h-5 text-brand-blue" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* SIGNS & SYMPTOMS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-coral/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Signs & Symptoms</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            How to Know If Your Wisdom Teeth Need to Come Out
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            Not everyone needs their wisdom teeth removed — but most people do. Wisdom teeth (third molars) typically emerge between ages 17–25, and they often cause problems because there's not enough room in the jaw for them to come in properly.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-4 mb-10">
          {signs.map((sign, i) => (
            <motion.div key={i} variants={reveal} custom={i}
              className="bg-coral-50 rounded-[18px] px-6 py-5 border border-coral-100/60 flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-brand-coral" />
              </div>
              <span className="font-body text-body text-brand-navy leading-[1.6]">{sign}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={reveal} custom={0}
          className="font-body text-body text-brand-slate leading-[1.7] max-w-3xl">
          Even if your wisdom teeth aren't causing pain yet, your dentist may recommend proactive removal if x-rays show they're likely to cause problems down the road. Early removal (teens to early 20s) typically means easier surgery and faster recovery.
        </motion.p>
      </div>
    </section>

    {/* PROCESS */}
    <section className="bg-brand-sky py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-blue/5 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">How It Works</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            What to Expect When You Come In
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
            <motion.div key={step.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-[24px] p-8 border border-blue-100/60 relative group">
              <span className="font-display font-extrabold text-[56px] text-blue-100/80 leading-none select-none absolute top-5 right-6 group-hover:text-brand-blue/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight mt-8">{step.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-[1.7]">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* SEDATION OPTIONS */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-20 top-20 w-[130px] h-[130px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Your Comfort First</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Sedation Options for Wisdom Teeth Removal
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            We know the thought of oral surgery can be nerve-wracking. That's why we offer a full range of sedation options — from mild to full sleep. You're in control.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sedationOptions.map((opt, i) => (
            <motion.div key={opt.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-[24px] p-8 border border-blue-100/60 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <opt.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight">{opt.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-[1.7]">{opt.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* PRICING */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute left-10 top-20 w-[140px] h-[140px] rounded-full bg-brand-gold/6 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-gold">Transparent Pricing</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Wisdom Teeth Removal Cost in Las Vegas
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid lg:grid-cols-3 gap-5">
          {/* Main pricing card */}
          <motion.div variants={reveal} custom={0}
            className="lg:col-span-1 bg-gold-50 rounded-[24px] p-10 border-2 border-brand-gold/20">
            <span className="font-display text-[clamp(40px,6vw,64px)] font-extrabold text-gold-600 leading-none">$1,899</span>
            <h3 className="font-display font-bold text-h4 text-brand-navy mt-3 mb-2">All 4 Wisdom Teeth</h3>
            <p className="font-display font-semibold text-body-sm text-brand-gold mb-6">One flat price — no hidden fees</p>
            <div className="space-y-2.5 mb-6">
              {["Consultation", "X-rays", "Extractions", "Follow-up visit"].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="font-body text-body-sm text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-body-sm text-brand-slate mb-8">Individual tooth extraction: $150–$300 per tooth</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" className="w-full">Book Your Free Consultation <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </motion.div>

          {/* Insurance & Financing */}
          <motion.div variants={reveal} custom={1} className="lg:col-span-2 grid gap-5">
            <div className="bg-blue-50 rounded-[24px] p-8 border border-blue-100/60">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Insurance Coverage</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-5">
                Most dental insurance plans cover a portion of wisdom tooth extraction. We'll verify your benefits and give you an exact out-of-pocket cost before your procedure.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="sm">Free Benefits Check <ArrowRight className="w-4 h-4" /></Button>
              </motion.div>
            </div>

            <div className="bg-gold-50 rounded-[24px] p-8 border border-gold-100/60">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/12 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gold-600" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Flexible Financing</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7]">
                Sunbit and CareCredit accepted. Split your wisdom teeth cost into easy monthly payments — 3, 6, or 12-month plans. Apply in minutes, right in the office.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={reveal} custom={0}
          className="font-body text-body-sm text-brand-slate italic mt-8 max-w-3xl">
          The $1,899 price covers standard extraction of all 4 wisdom teeth. Complex impactions or additional procedures may affect pricing. A personalized quote is provided during your free consultation.
        </motion.p>
      </div>
    </section>

    {/* RECOVERY TIMELINE */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">After Your Procedure</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Wisdom Teeth Recovery: What to Expect
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            Recovery from wisdom teeth removal is usually faster than people expect. Here's a day-by-day overview:
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {recoveryTimeline.map((step, i) => (
            <motion.div key={step.day} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              className="bg-blue-50/60 rounded-[24px] p-8 border border-blue-100/60 group">
              <span className="font-display font-extrabold text-body-sm text-brand-blue uppercase tracking-wider">{step.day}</span>
              <h4 className="font-display text-h5 font-bold text-brand-navy mt-2 mb-3 leading-tight">{step.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-[1.7]">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="bg-brand-sky py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-teal/5 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">23 Locations</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Wisdom Teeth Removal Near You
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Every Good Doc Dental office offers wisdom tooth extractions with in-house oral surgery capabilities.
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
            Common Questions About Wisdom Teeth
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
            Hear From Our Patients
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Tyler K.", location: "Canyon Family Dentistry", quote: "Got all 4 wisdom teeth out at Good Doc. The $1,899 price was exactly what I paid — no surprises. I chose IV sedation and honestly don't remember a thing. Recovery was way easier than I expected." },
            { name: "Sophia N.", location: "Inspirada Dental", quote: "I was putting off my wisdom teeth for years because I was terrified. The team made me feel so comfortable and the whole thing was done in under an hour. Wish I hadn't waited so long." },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* RELATED SERVICES */}
    <section className="py-28 md:py-36 relative">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Related Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            You Might Also Need
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {relatedServices.map((svc, i) => (
            <motion.div key={svc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <ServiceCard name={svc.name} slug={svc.slug} tagline={svc.tagline} priceDisplay={svc.priceDisplay} priceUnit={svc.priceUnit} icon={svc.icon} promoText={svc.promoText} />
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
            Don't Wait Until It Hurts
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
            If your wisdom teeth are causing problems — or your dentist says they will — book a free consultation today. Our in-house oral surgeons make the whole process easy.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/20">
                Book Your Free Consultation <ArrowRight className="w-4 h-4" />
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
          <motion.p variants={reveal} custom={3} className="font-display font-bold text-body-lg text-white mt-6">
            <a href="tel:7028522829" className="hover:text-brand-teal transition-colors">702-852-2829</a>
          </motion.p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default WisdomTeeth;
