import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Users, DollarSign, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import employersImg from "@/assets/pages/employers-meeting.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const benefits = [
  { icon: MapPin, title: "23 Convenient Locations", body: "Your employees are never far from a Good Doc Dental office. Las Vegas, Henderson, and North Las Vegas coverage." },
  { icon: Clock, title: "Extended Hours", body: "Open evenings, weekends, and many offices open Sundays. Less time off work for dental appointments." },
  { icon: Users, title: "Comprehensive Care", body: "30+ services under one roof — general, cosmetic, orthodontics, surgery, kids. One provider for the whole family." },
  { icon: DollarSign, title: "Transparent Pricing", body: "No surprise bills. We provide clear pricing so your employees know what to expect." },
];

const steps = [
  { title: "Contact Us", body: "Reach out to request a quote for your team. We'll tailor a plan based on your company size and needs." },
  { title: "Enroll Your Team", body: "We make enrollment easy and provide your employees with everything they need to get started." },
  { title: "Employees Visit Any Office", body: "Your team can visit any of our 23 offices. Records are shared across locations for maximum convenience." },
];

const Employers = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="relative bg-[hsl(var(--navy-600))] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]" />
      <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Employer Dental Plans</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-white/80">Corporate dental benefits for Las Vegas Valley businesses — 23 offices, one easy plan.</motion.p>
      </div>
    </section>

    {/* Hero Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={employersImg} alt="Business meeting discussing dental plans for employees" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">Why Businesses Choose Good Doc Dental</motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <b.icon className="w-7 h-7 text-[hsl(var(--blue-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{b.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-4xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">How Employer Plans Work</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--blue-400))] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">{i + 1}</div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{s.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">Request a Corporate Plan Quote</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] mb-8">Email us at smile@gooddocdental.com or call 702-852-2829 to discuss dental benefits for your organization.</motion.p>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="default"><a href="mailto:smile@gooddocdental.com">Request a Quote</a></Button>
          <Button asChild size="lg" variant="outline"><a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Call 702-852-2829</a></Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Employers;
