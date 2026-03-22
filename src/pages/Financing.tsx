import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CreditCard, DollarSign, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import financingImg from "@/assets/pages/financing-consultation.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const paymentOptions = [
  { title: "Dental Insurance", body: "We accept 16 major plans and verify your benefits for free.", cta: "Insurance Info", href: "/new-patients/insurance", icon: Shield },
  { title: "Sunbit Financing", body: "Apply in minutes, right in the office. Get approved for a payment plan with low monthly payments. 3, 6, or 12-month options.", icon: CreditCard },
  { title: "CareCredit", body: "A trusted healthcare credit card accepted at all Good Doc Dental offices. Special financing offers available. No annual fees.", icon: CreditCard },
  { title: "Cash / Credit / Debit", body: "We accept all major credit cards, debit cards, and cash. Ask about our competitive cash-pay pricing.", icon: DollarSign },
];

const steps = [
  { title: "Apply in Minutes", body: "Apply for Sunbit or CareCredit right in our office or online. Approval takes just a few minutes and doesn't affect your credit score for Sunbit." },
  { title: "Choose Your Plan", body: "Select a payment plan that fits your budget. Options include 3, 6, or 12-month plans. Some plans offer 0% interest with CareCredit." },
  { title: "Get Your Treatment", body: "Start your dental care immediately. Your monthly payments begin after your treatment." },
];

const examples = [
  { treatment: "Teeth Whitening", price: "$350", monthly: "~$30/mo", term: "12 months" },
  { treatment: "Dental Crown", price: "$1,400", monthly: "~$117/mo", term: "12 months" },
  { treatment: "Invisalign", price: "$2,900", monthly: "~$142/mo", term: "12 months", note: "after $1,200 off" },
  { treatment: "Wisdom Teeth", price: "$1,899", monthly: "~$158/mo", term: "12 months" },
];

const Financing = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">
          Dental Financing & Payment Options
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">
          Smile now, pay over time — flexible plans for every budget.
        </motion.p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">
          Ways to Pay at Good Doc Dental
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {paymentOptions.map((o, i) => (
            <motion.div key={o.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <o.icon className="w-7 h-7 text-[hsl(var(--blue-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{o.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed mb-3">{o.body}</p>
              {o.cta && o.href && (
                <Button asChild variant="outline" size="sm"><Link to={o.href}>{o.cta}<ArrowRight className="w-3 h-3 ml-1" /></Link></Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-4xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4 text-center">
          How Dental Financing Works
        </motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] text-center mb-12 max-w-2xl mx-auto">
          Dental financing lets you split the cost of treatment into manageable monthly payments — so you can get the care you need without waiting.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 2}
              className="text-center">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--blue-400))] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">{i + 1}</div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{s.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Payment Examples */}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">
          What Could Monthly Payments Look Like?
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {examples.map((e, i) => (
            <motion.div key={e.treatment} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[hsl(var(--navy-50))] flex items-center gap-5">
              <div className="text-center shrink-0">
                <div className="text-2xl font-bold text-[hsl(var(--blue-400))]">{e.monthly}</div>
                <div className="text-xs text-[hsl(var(--slate))]">{e.term}</div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[hsl(var(--navy-600))]">{e.treatment}</h3>
                <p className="text-sm text-[hsl(var(--slate))]">{e.price}{e.note ? ` (${e.note})` : ""}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={5}
          className="text-center text-xs text-[hsl(var(--slate))] mt-6 italic">
          Payment examples are estimates. Actual terms depend on credit approval, plan selected, and any applicable interest.
        </motion.p>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Apply for Financing Today</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations">Find a Location</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Questions? Call 702-852-2829</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Financing;
