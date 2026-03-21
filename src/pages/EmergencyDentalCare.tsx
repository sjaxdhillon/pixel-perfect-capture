import { motion } from "framer-motion";
import {
  Phone, MapPin, ArrowRight, Clock, CalendarCheck, UserCheck, ShieldCheck,
  AlertTriangle, Check, Star, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import LocationCard from "@/components/LocationCard";
import ProcessSteps from "@/components/ProcessSteps";
import locations from "@/data/locations.json";
import { Link } from "react-router-dom";

/* ─── Animation ─── */
const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
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

    {/* ═══════════════════════════════════════
        HERO — Coral emergency, urgent but warm
       ═══════════════════════════════════════ */}
    <section className="bg-brand-coral relative overflow-hidden">
      {/* Subtle radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="absolute -right-24 -bottom-24 w-[400px] h-[400px] rounded-full bg-coral-600/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-btn px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-display font-semibold text-caption uppercase tracking-[0.1em] text-white">Same-Day Appointments Available</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(34px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-[-2px] mb-6"
          >
            Emergency Dentist
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-body text-[clamp(15px,1.8vw,20px)] text-coral-50 leading-relaxed mb-8 max-w-xl">
            Toothache? Broken tooth? Knocked-out crown? We see emergency patients 7 days a week — including Sundays. Many patients are treated in a single visit.
          </motion.p>

          {/* Price callout */}
          <motion.div variants={reveal} custom={3} className="inline-flex items-baseline gap-3 bg-white/12 backdrop-blur-sm rounded-2xl px-6 py-4 mb-10">
            <span className="font-display font-extrabold text-display text-white leading-none">$49</span>
            <div>
              <span className="font-display font-bold text-body text-white block">Emergency Exam & X-Ray</span>
              <span className="font-body text-body-sm text-coral-100 line-through">reg. $155</span>
            </div>
          </motion.div>

          <motion.div variants={reveal} custom={4} className="flex flex-wrap gap-3">
            <a href="tel:+17028522829">
              <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-xl shadow-coral-800/20" size="lg">
                <Phone className="w-4 h-4" />
                Call Now for Same-Day Care
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
        TRUST BAR — Coral-tinted
       ═══════════════════════════════════════ */}
    <section className="bg-coral-50 py-5 border-b border-coral-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
        >
          {[
            { icon: Clock, text: "Available 7 Days a Week" },
            { icon: CalendarCheck, text: "Same-Day Appointments" },
            { icon: UserCheck, text: "Most Work Done in One Visit" },
            { icon: ShieldCheck, text: "No Referral Needed" },
          ].map((item, i) => (
            <motion.div key={item.text} variants={reveal} custom={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-coral" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        WHAT COUNTS — Two-column
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-coral">Dental Emergencies</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            Is Your Situation a
            <br />Dental Emergency?
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Emergency list */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-3">
            <p className="font-body text-body text-brand-slate mb-8 leading-relaxed max-w-lg">
              If you're experiencing any of these symptoms, don't wait — dental emergencies can get worse quickly. We're here to help right now.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {emergencyList.map((item, i) => (
                <motion.div
                  key={item}
                  variants={reveal}
                  custom={i}
                  className="flex items-start gap-3 bg-coral-50 rounded-2xl p-4 border border-coral-100/60 group hover:shadow-md hover:border-coral-200 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-brand-coral" />
                  </div>
                  <span className="font-display font-semibold text-body text-brand-navy leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Value card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <motion.div variants={reveal} custom={0} className="bg-brand-coral rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-[150px] h-[150px] rounded-full bg-white/5 blur-xl" />
              <div className="relative z-10">
                <span className="font-display font-extrabold text-[56px] text-white leading-none">$49</span>
                <h3 className="font-display font-bold text-h5 text-white mt-3 mb-3 leading-tight">
                  Emergency Exam & X-Ray
                </h3>
                <div className="w-full h-px bg-white/15 my-5" />
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="font-body text-body-sm text-coral-50 leading-relaxed">
                    Includes a <strong className="text-white font-display font-bold">FREE comprehensive exam</strong> within 30 days — a $380 value.
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="font-body text-body-sm text-coral-50 leading-relaxed">
                    Walk-ins welcome. Available <strong className="text-white font-display font-bold">7 days a week</strong> at all locations.
                  </p>
                </div>
                <a href="tel:+17028522829">
                  <Button className="bg-white text-brand-coral hover:bg-coral-50 w-full shadow-lg" size="lg">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        PROCESS — Sky tint, 4 steps
       ═══════════════════════════════════════ */}
    <section className="bg-brand-sky py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-teal">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-4 leading-[1.1] tracking-tight">
            What to Expect When
            <br />You Come In
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body text-brand-slate mb-14 max-w-lg">
            We know dental pain is stressful. Here's exactly what happens when you walk through our doors — no surprises.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={reveal} custom={i} className="bg-white rounded-3xl p-7 border border-blue-50 relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="font-display font-extrabold text-display text-blue-50 leading-none select-none absolute top-4 right-5 group-hover:text-coral-50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-coral-50 flex items-center justify-center mb-5">
                  <span className="font-display font-extrabold text-body text-brand-coral">{i + 1}</span>
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
        PRICING — Transparent
       ═══════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-coral">No Surprises</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-14 leading-[1.1] tracking-tight">
            Transparent Emergency Pricing
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid lg:grid-cols-2 gap-6">
          {/* Main pricing card */}
          <motion.div variants={reveal} custom={0} className="bg-brand-coral rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -left-12 -bottom-12 w-[200px] h-[200px] rounded-full bg-white/5 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block font-display font-bold text-caption uppercase tracking-wider text-coral-100 bg-white/10 px-3 py-1 rounded-btn mb-5">Most Popular</span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-extrabold text-[56px] text-white leading-none">$49</span>
                <span className="font-body text-body text-coral-100 line-through">$155</span>
              </div>
              <h3 className="font-display font-bold text-h4 text-white mb-3">Emergency Exam & X-Ray</h3>
              <p className="font-body text-body text-coral-50 leading-relaxed mb-6">
                Complete emergency evaluation with digital X-rays. Our dentist will diagnose the issue and present treatment options — with transparent pricing before any work begins.
              </p>
              <div className="space-y-3 mb-8">
                {["Full emergency exam & digital X-rays", "Same-day pain relief treatment", "FREE comprehensive exam within 30 days ($380 value)", "Insurance verification included"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    <span className="font-body text-body-sm text-coral-50">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+17028522829">
                <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-xl w-full" size="lg">
                  <Phone className="w-4 h-4" />
                  Call for Same-Day Appointment
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Insurance + financing info */}
          <div className="space-y-5">
            <motion.div variants={reveal} custom={1} className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-body-lg text-brand-navy">Insurance Friendly</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-relaxed mb-4">
                We verify your insurance before treatment so there are no surprises. We're in-network with most major PPO plans, including Medicare.
              </p>
              <Button variant="default" size="sm">
                Free Benefits Check
              </Button>
            </motion.div>

            <motion.div variants={reveal} custom={2} className="bg-gold-50 rounded-3xl p-8 border border-gold-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-gold/15 flex items-center justify-center">
                  <span className="font-display font-extrabold text-body text-gold-600">$0</span>
                </div>
                <h4 className="font-display font-bold text-body-lg text-brand-navy">No Insurance? No Problem.</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-relaxed mb-2">
                Our $49 emergency special makes care accessible for everyone. Payment plans available through Sunbit (90% approval) and CareCredit.
              </p>
              <div className="flex gap-2 mt-4">
                {["3 mo", "6 mo", "12 mo"].map((plan) => (
                  <span key={plan} className="font-display font-semibold text-caption bg-white text-gold-600 px-3 py-1.5 rounded-lg border border-gold-100 uppercase tracking-wider">{plan}</span>
                ))}
              </div>
            </motion.div>
          </div>
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
            Emergency Dental Care Near You
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body text-brand-slate mb-14 max-w-lg">
            Walk-ins welcome at all locations, 7 days a week. Call ahead so we can prepare for your arrival.
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
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-coral">FAQ</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-brand-navy mt-3 mb-12 leading-[1.1] tracking-tight">
            Common Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
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
            Real Emergency Patients, Real Relief
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Hailey L.",
              location: "Henderson, NV",
              quote: "I was terrified to get my wisdom teeth out, but they made it so easy. The whole thing was over before I knew it, and I barely had any swelling. I wish I hadn't waited so long!",
            },
            {
              name: "Ryan A.",
              location: "Las Vegas, NV",
              quote: "I needed an oral surgeon and didn't want to go to some random place. Found Good Doc and was seen the same day. The surgeon was incredible — calm, explained everything, and I was pain-free by the next morning.",
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
        SECONDARY CTA — Navy
       ═══════════════════════════════════════ */}
    <section className="bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(232,93,74,0.12),transparent_60%)]" />
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(28px,4vw,48px)] font-extrabold text-white leading-[1.05] tracking-tight mb-4">
            Don't Wait — Dental Pain
            <br />Gets Worse
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-navy-100 mb-10 leading-relaxed">
            Same-day appointments are available at all 23 of our Las Vegas Valley locations. Call, text, or book online right now.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-3">
            <a href="tel:+17028522829">
              <Button variant="emergency" size="lg" className="shadow-lg shadow-brand-coral/30">
                <Phone className="w-4 h-4" />
                Call Now for Same-Day Care
              </Button>
            </a>
            <Button variant="secondary" size="lg" className="border-white/25 text-white hover:bg-white/10">
              <CalendarCheck className="w-4 h-4" />
              Book Online 24/7
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EmergencyDentalCare;
