import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Check, AlertTriangle, ArrowRight } from "lucide-react";
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

const insuranceCarriers = [
  "Aetna", "Delta Dental", "Careington", "MetLife", "Humana", "United Healthcare",
  "Anthem", "Guardian", "BlueCross BlueShield", "Unicare", "DHA", "United Concordia",
  "Ameritas", "Cigna", "Assurant", "Medicare",
];

const infoCards = [
  { title: "Free Benefits Verification", body: "Give us your insurance info when you book and we'll check your coverage before you arrive. You'll know your costs upfront." },
  { title: "We Handle the Paperwork", body: "We file all claims directly with your insurance company. You don't have to deal with forms, codes, or follow-ups." },
  { title: "Maximize Your Benefits", body: "Many people leave insurance benefits unused. We help you understand what's covered and schedule treatment to get the most from your plan." },
];

const tiers = [
  { label: "Preventive", coverage: "usually 100% covered", body: "Exams, cleanings, x-rays, fluoride. Most plans cover two preventive visits per year at no cost to you.", color: "teal" },
  { label: "Basic", coverage: "usually 70–80% covered", body: "Fillings, simple extractions, root canals. You'll pay a copay or percentage after your deductible.", color: "blue" },
  { label: "Major", coverage: "usually 50% covered", body: "Crowns, bridges, dentures, implants, oral surgery. Higher out-of-pocket, but we help maximize coverage and offer financing.", color: "gold" },
];

const Insurance = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">
          Dental Insurance at Good Doc Dental
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">
          We accept 16 major plans and verify your benefits for free.
        </motion.p>
      </div>
    </section>

    {/* How Insurance Works */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4 text-center">
          How Dental Insurance Works at Our Offices
        </motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] text-center max-w-2xl mx-auto mb-12">
          Dental insurance can be confusing — we make it simple. Before any treatment, we verify your benefits and tell you exactly what's covered and what your out-of-pocket cost will be.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((c, i) => (
            <motion.div key={c.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 2}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <Check className="w-7 h-7 text-[hsl(var(--teal-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{c.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Accepted Plans */}
    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10">
          16 Insurance Plans Accepted
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {insuranceCarriers.map((c, i) => (
            <motion.span key={c} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i * 0.5}
              className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-[hsl(var(--navy-600))] shadow-sm border border-[hsl(var(--navy-50))]">
              {c}
            </motion.span>
          ))}
        </div>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={9}
          className="bg-[hsl(var(--blue-50))] rounded-xl p-5 text-sm text-[hsl(var(--navy-600))] inline-block mb-4">
          <strong>Medicare:</strong> Accepted at all locations.
        </motion.div>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={10}
          className="bg-[hsl(var(--coral-50))] rounded-xl p-5 text-sm text-[hsl(var(--navy-600))] flex items-start gap-3 max-w-xl mx-auto text-left">
          <AlertTriangle className="w-5 h-5 text-[hsl(var(--coral-400))] shrink-0 mt-0.5" />
          <span><strong>Medicaid:</strong> Not accepted. Emergency dental care is available on an out-of-pocket basis. Our $49 emergency exam special applies.</span>
        </motion.div>
      </div>
    </section>

    {/* Coverage Tiers */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">
          What Dental Insurance Typically Covers
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <div className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-[hsl(var(--${t.color}-50))] text-[hsl(var(--${t.color}-600))]`}>
                {t.coverage}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{t.label}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={4}
          className="text-center text-sm text-[hsl(var(--slate))] mt-6 italic">
          Coverage varies by plan. We'll verify your specific benefits before any treatment.
        </motion.p>
      </div>
    </section>

    {/* No Insurance */}
    <section className="py-16 bg-[hsl(var(--gold-50))]">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">
          No Insurance? No Problem.
        </motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] mb-6">
          We offer competitive cash-pay pricing and flexible financing through Sunbit and CareCredit. Many patients without insurance find our cash prices are lower than what insured patients pay out-of-pocket.
        </motion.p>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2}>
          <Button asChild variant="outline"><Link to="/new-patients/financing">Learn About Financing<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </motion.div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Get Your Free Benefits Check</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations">Find a Location</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Call 702-852-2829</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Insurance;
