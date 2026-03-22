import { motion } from "framer-motion";
import {
  Phone, MapPin, ArrowRight, Clock, CalendarCheck, UserCheck, ShieldCheck,
  AlertTriangle, Check, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import LocationCard from "@/components/LocationCard";
import locations from "@/data/locations.json";
import { Link } from "react-router-dom";
import emergencyCareImg from "@/assets/pages/emergency-care.jpg";

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

const emergencyList = [
  "Severe toothache or throbbing pain",
  "Abscessed or infected tooth",
  "Broken, cracked, or chipped tooth",
  "Knocked-out or loose tooth",
  "Lost crown or fallen-out filling",
  "Swollen or bleeding gums",
  "Jaw pain or injury",
];

const topLocations = locations.filter(l => !l.kidsOffice).slice(0, 6);

const processSteps = [
  { title: "Check In & Relax", body: "Walk in or arrive for your same-day appointment. Our front desk team will get you settled in our comfortable waiting area." },
  { title: "Emergency Exam", body: "Our trained emergency dentist examines your situation thoroughly, asking questions and assessing pain levels." },
  { title: "Accurate Diagnosis", body: "We use advanced digital X-rays and intraoral cameras for a precise diagnosis — no guesswork." },
  { title: "Same-Day Treatment", body: "Most patients receive treatment the same day and leave pain-free. We don't make you wait or come back." },
];

const faqs = [
  {
    q: "What should I do if I knock out a tooth?",
    a: "Pick the tooth up by the crown (the white part), not the root. Rinse it gently with water — don't scrub. If possible, place it back in the socket and hold it there. If you can't, keep it in a glass of milk. Then call us immediately. The faster you get here, the better the chance we can save it.",
  },
  {
    q: "Do you accept walk-ins for emergency care?",
    a: "Absolutely. All 23 of our Las Vegas Valley locations accept walk-ins for emergency dental care, 7 days a week. We recommend calling ahead so we can prepare for your arrival, but you're always welcome to walk in.",
  },
  {
    q: "Does my insurance cover emergency dental visits?",
    a: "Most dental insurance plans cover emergency exams and X-rays. We'll verify your benefits before any treatment so there are no surprises. If you don't have insurance, our $49 emergency exam special makes care accessible and affordable.",
  },
];

const EmergencyDentalCare = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO — Coral with floating elements */}
    <section className="bg-brand-coral relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full bg-coral-600/20 blur-[80px] pointer-events-none"
      />
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 top-20 w-[200px] h-[200px] rounded-full bg-white/4 blur-[50px] pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-white/12 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-white">Same-Day Appointments Available</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[0.92] tracking-[-2.5px] mb-7"
          >
            Emergency Dentist
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-body text-[clamp(16px,2vw,22px)] text-coral-50/90 leading-[1.6] mb-10 max-w-xl">
            Toothache? Broken tooth? Knocked-out crown? We see emergency patients 7 days a week — including Sundays. Many patients are treated in a single visit.
          </motion.p>

          {/* Floating price callout */}
          <motion.div variants={reveal} custom={3}>
            <motion.div
              variants={float} initial="initial" animate="animate"
              className="inline-flex items-baseline gap-4 bg-white/10 backdrop-blur-md rounded-[20px] px-8 py-5 mb-12 border border-white/10"
            >
              <span className="font-display font-extrabold text-[56px] text-white leading-none drop-shadow-lg">$49</span>
              <div>
                <span className="font-display font-bold text-body-lg text-white block">Emergency Exam & X-Ray</span>
                <span className="font-body text-body-sm text-coral-100 line-through">reg. $155</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
            <a href="tel:+17028522829">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-2xl shadow-coral-800/20" size="lg">
                  <Phone className="w-4 h-4" />
                  Call Now for Same-Day Care
                </Button>
              </motion.div>
            </a>
            <Link to="/locations">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/8">
                  <MapPin className="w-4 h-4" />
                  Find a Location Near You
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* TRUST BAR — Floating pills */}
    <section className="bg-coral-50 py-6 border-b border-coral-100/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Clock, text: "Available 7 Days a Week" },
            { icon: CalendarCheck, text: "Same-Day Appointments" },
            { icon: UserCheck, text: "Most Work Done in One Visit" },
            { icon: ShieldCheck, text: "No Referral Needed" },
          ].map((item, i) => (
            <motion.div
              key={item.text} variants={reveal} custom={i}
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-2.5 bg-white rounded-btn px-5 py-2.5 shadow-sm border border-coral-100/40 hover:shadow-md transition-shadow duration-300"
            >
              <item.icon className="w-4 h-4 text-brand-coral" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* WHAT COUNTS — Two-column */}
    <section className="py-28 md:py-36 relative">
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-coral/5 blur-[40px] pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-coral">Dental Emergencies</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Is Your Situation a
            <br />Dental Emergency?
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-3">
            <p className="font-body text-body-lg text-brand-slate mb-10 leading-[1.7] max-w-lg">
              If you're experiencing any of these symptoms, don't wait — dental emergencies can get worse quickly. We're here to help right now.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {emergencyList.map((item, i) => (
                <motion.div
                  key={item}
                  variants={reveal}
                  custom={i}
                  whileHover={{ y: -3, boxShadow: "0 16px 40px -12px rgba(232,93,74,0.1)" }}
                  className="flex items-start gap-3.5 bg-coral-50 rounded-[20px] p-5 border border-coral-100/50 group transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-xl bg-brand-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-brand-coral" />
                  </div>
                  <span className="font-display font-semibold text-body text-brand-navy leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <motion.div
              variants={reveal} custom={0}
              whileHover={{ y: -4 }}
              className="bg-brand-coral rounded-[28px] p-9 md:p-11 relative overflow-hidden"
            >
              <motion.div
                variants={floatReverse} initial="initial" animate="animate"
                className="absolute -right-10 -top-10 w-[180px] h-[180px] rounded-full bg-white/5 blur-[40px]"
              />
              <div className="relative z-10">
                <motion.span
                  variants={float} initial="initial" animate="animate"
                  className="font-display font-extrabold text-[64px] text-white leading-none drop-shadow-lg inline-block"
                >
                  $49
                </motion.span>
                <h3 className="font-display font-bold text-h4 text-white mt-4 mb-3 leading-tight">
                  Emergency Exam & X-Ray
                </h3>
                <div className="w-full h-px bg-white/12 my-6" />
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="w-6 h-6 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="font-body text-body-sm text-coral-50 leading-[1.6]">
                    Includes a <strong className="text-white font-display font-bold">FREE comprehensive exam</strong> within 30 days — a $380 value.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 mb-8">
                  <div className="w-6 h-6 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="font-body text-body-sm text-coral-50 leading-[1.6]">
                    Walk-ins welcome. Available <strong className="text-white font-display font-bold">7 days a week</strong> at all locations.
                  </p>
                </div>
                <a href="tel:+17028522829">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="bg-white text-brand-coral hover:bg-coral-50 w-full shadow-xl" size="lg">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* PROCESS — 4 Steps */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute left-20 top-20 w-[150px] h-[150px] rounded-full bg-brand-teal/5 blur-[50px] pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            What to Expect When
            <br />You Come In
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            We know dental pain is stressful. Here's exactly what happens when you walk through our doors — no surprises.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={reveal} custom={i}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[24px] p-8 border border-blue-50 relative group"
              >
                <span className="font-display font-extrabold text-[56px] text-blue-50 leading-none select-none absolute top-5 right-6 group-hover:text-coral-50 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-coral-50 flex items-center justify-center mb-6">
                  <span className="font-display font-extrabold text-body-lg text-brand-coral">{i + 1}</span>
                </div>
                <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight">{step.title}</h4>
                <p className="font-body text-body-sm text-brand-slate leading-[1.6]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* PRICING */}
    <section className="py-28 md:py-36 relative">
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute right-0 top-20 w-[200px] h-[200px] rounded-full bg-brand-coral/3 blur-[60px] pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-coral">No Surprises</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Transparent Emergency Pricing
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid lg:grid-cols-2 gap-6">
          <motion.div
            variants={reveal} custom={0}
            whileHover={{ y: -4 }}
            className="bg-brand-coral rounded-[28px] p-10 md:p-12 relative overflow-hidden"
          >
            <motion.div
              variants={floatSlow} initial="initial" animate="animate"
              className="absolute -left-14 -bottom-14 w-[220px] h-[220px] rounded-full bg-white/4 blur-[40px]"
            />
            <div className="relative z-10">
              <span className="inline-block font-display font-bold text-caption uppercase tracking-[0.12em] text-coral-100 bg-white/10 px-4 py-1.5 rounded-btn mb-6">Most Popular</span>
              <div className="flex items-baseline gap-3 mb-3">
                <motion.span
                  variants={float} initial="initial" animate="animate"
                  className="font-display font-extrabold text-[64px] text-white leading-none drop-shadow-lg inline-block"
                >
                  $49
                </motion.span>
                <span className="font-body text-body-lg text-coral-100 line-through">$155</span>
              </div>
              <h3 className="font-display font-bold text-h3 text-white mb-4">Emergency Exam & X-Ray</h3>
              <p className="font-body text-body-lg text-coral-50/90 leading-[1.6] mb-8">
                Complete emergency evaluation with digital X-rays. Our dentist will diagnose the issue and present treatment options — with transparent pricing before any work begins.
              </p>
              <div className="space-y-3.5 mb-10">
                {["Full emergency exam & digital X-rays", "Same-day pain relief treatment", "FREE comprehensive exam within 30 days ($380 value)", "Insurance verification included"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    <span className="font-body text-body text-coral-50">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+17028522829">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-2xl w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Call for Same-Day Appointment
                  </Button>
                </motion.div>
              </a>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              variants={reveal} custom={1}
              whileHover={{ y: -3 }}
              className="bg-blue-50 rounded-[24px] p-8 border border-blue-100/60"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Insurance Friendly</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-5">
                We verify your insurance before treatment so there are no surprises. We're in-network with most major PPO plans, including Medicare.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="sm">Free Benefits Check</Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={reveal} custom={2}
              whileHover={{ y: -3 }}
              className="bg-gold-50 rounded-[24px] p-8 border border-gold-100/60"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/12 flex items-center justify-center">
                  <span className="font-display font-extrabold text-body-lg text-gold-600">$0</span>
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">No Insurance? No Problem.</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-3">
                Our $49 emergency special makes care accessible for everyone. Payment plans available through Sunbit (90% approval) and CareCredit.
              </p>
              <div className="flex gap-2 mt-5">
                {["3 mo", "6 mo", "12 mo"].map((plan) => (
                  <span key={plan} className="font-display font-semibold text-caption bg-white text-gold-600 px-4 py-2 rounded-xl border border-gold-100/80 uppercase tracking-wider">{plan}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute right-20 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Near You</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Emergency Dental Care Near You
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Walk-ins welcome at all locations, 7 days a week. Call ahead so we can prepare for your arrival.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {topLocations.map((loc, i) => (
            <motion.div key={loc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
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
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="secondary">
                See All 23 Locations <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-28 md:py-36 relative">
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute left-10 top-32 w-[100px] h-[100px] rounded-full bg-brand-coral/4 blur-[40px] pointer-events-none"
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-coral">FAQ</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-14 leading-[1.05] tracking-[-1.5px]">
            Common Questions
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
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[150px] h-[150px] rounded-full bg-brand-blue/3 blur-[50px] pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Patient Stories</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Real Emergency Patients, Real Relief
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Hailey L.", location: "Henderson, NV", quote: "I was terrified to get my wisdom teeth out, but they made it so easy. The whole thing was over before I knew it, and I barely had any swelling. I wish I hadn't waited so long!" },
            { name: "Ryan A.", location: "Las Vegas, NV", quote: "I needed an oral surgeon and didn't want to go to some random place. Found Good Doc and was seen the same day. The surgeon was incredible — calm, explained everything, and I was pain-free by the next morning." },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* BOTTOM CTA — Navy with floating orbs */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(232,93,74,0.08),transparent_60%)]" />
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-coral/6 blur-[60px] pointer-events-none"
      />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-5">
            Don't Wait — Dental Pain
            <br />Gets Worse
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100/80 mb-12 leading-[1.7]">
            Same-day appointments are available at all 23 of our Las Vegas Valley locations. Call, text, or book online right now.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17028522829">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="emergency" size="lg" className="shadow-xl shadow-brand-coral/25">
                  <Phone className="w-4 h-4" />
                  Call Now for Same-Day Care
                </Button>
              </motion.div>
            </a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="secondary" size="lg" className="border-white/15 text-white hover:bg-white/8">
                <CalendarCheck className="w-4 h-4" />
                Book Online 24/7
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EmergencyDentalCare;
