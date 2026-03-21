import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, FileText, Shield, Briefcase, Clock, Eye, Search, Sparkles, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const beforeCards = [
  { icon: FileText, title: "Complete Your Forms Online", body: "Save time by filling out your new patient paperwork online before your visit. It takes about 5 minutes.", cta: "Access Patient Forms", href: "/new-patients/patient-forms" },
  { icon: Shield, title: "Verify Your Insurance", body: "We'll check your benefits for free before your appointment so you know exactly what's covered.", cta: "Learn About Insurance", href: "/new-patients/insurance" },
  { icon: Briefcase, title: "What to Bring", body: "Valid photo ID, insurance card (if applicable), list of current medications, and any dental records from your previous dentist." },
];

const timeline = [
  { time: "5 min", title: "Arrive & Check In", body: "You'll be greeted by name. If you completed forms online, you're all set. Otherwise, we'll hand you a tablet.", icon: CalendarCheck },
  { time: "5 min", title: "Medical History Review", body: "Your dentist reviews your health history, medications, and any specific concerns or goals you have.", icon: FileText },
  { time: "5 min", title: "Digital X-Rays", body: "Quick, low-radiation digital x-rays give us a complete picture of what's happening above and below the surface.", icon: Search },
  { time: "15 min", title: "Comprehensive Exam", body: "Your dentist examines every tooth, your gums, bite, jaw, and performs an oral cancer screening. We use intraoral cameras so you can see what we see.", icon: Eye },
  { time: "30 min", title: "Professional Cleaning", body: "Our hygienist removes plaque and tartar, polishes your teeth, and applies fluoride treatment.", icon: Sparkles },
  { time: "10 min", title: "Your Care Plan", body: "We explain everything we found in plain language. If treatment is needed, we present options with transparent pricing. No surprises.", icon: MessageCircle },
];

const YourFirstVisit = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={0}
          className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--blue-400))] mb-4">New Patients</motion.p>
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">
          Your First Visit at Good Doc Dental
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={2}
          className="font-accent italic text-lg text-[hsl(var(--slate))] max-w-xl mx-auto">
          Here's exactly what to expect — from check-in to checkout.
        </motion.p>
      </div>
    </section>

    {/* Before Your Visit */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">Before You Arrive</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {beforeCards.map((c, i) => (
            <motion.div key={c.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <c.icon className="w-8 h-8 text-[hsl(var(--blue-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{c.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed mb-4">{c.body}</p>
              {c.cta && c.href && (
                <Button asChild variant="outline" size="sm">
                  <Link to={c.href}>{c.cta}<span className="ml-1">→</span></Link>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* During Your Visit — Timeline */}
    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-12 text-center">
          What Happens During Your First Visit
        </motion.h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[hsl(var(--blue-100))]" />
          {timeline.map((step, i) => (
            <motion.div key={step.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="relative pl-16 pb-10 last:pb-0">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[hsl(var(--blue-400))] text-white flex items-center justify-center text-xs font-semibold shadow-md">
                {step.time}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-1">{step.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* After Your Visit */}
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">After Your Appointment</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] leading-relaxed">
          We'll schedule any follow-up appointments, send you a visit summary, and you can always reach us by phone or text if questions come up. Your dental records are accessible at all 23 of our offices, so you can visit any location.
        </motion.p>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready for Your First Visit?</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild size="lg" variant="promo"><Link to="/locations">Book Your First Appointment</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Call 702-852-2829</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default YourFirstVisit;
