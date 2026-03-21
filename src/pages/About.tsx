import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight, BookOpen, Cpu, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const navCards = [
  { icon: BookOpen, title: "Our Story", href: "/about/our-story", body: "How we grew from one office to 23 — and why we still feel like your neighborhood dentist." },
  { icon: Cpu, title: "Our Technology", href: "/about/technology", body: "Digital x-rays, iTero, CEREC same-day crowns, laser dentistry, and more." },
  { icon: Users, title: "Our Team", href: "/about/our-team", body: "Meet the dentists, specialists, and team members who make it all happen." },
  { icon: Briefcase, title: "Employer Dental Plans", href: "/about/employers", body: "Corporate dental plans for Las Vegas Valley businesses." },
];

const stats = [
  { number: "23", label: "Offices across the valley" },
  { number: "7", label: "Dedicated kids-only offices" },
  { number: "30+", label: "Dental services offered" },
  { number: "16", label: "Insurance plans accepted" },
  { number: "7 Days", label: "Open 7 days a week" },
  { number: "$49", label: "Emergency exam & x-ray" },
];

const values = [
  { title: "No Corporate Fluff", body: "We're a dental group, not a dental corporation. Every office feels like a neighborhood practice because that's exactly what it is." },
  { title: "Transparent Pricing", body: "We tell you what things cost before we start. No hidden fees, no surprise bills. Ever." },
  { title: "Every Age, Every Smile", body: "Babies, toddlers, teenagers, adults, seniors. We treat the whole family under one roof." },
  { title: "Access Over Everything", body: "Open 7 days, same-day emergencies, 23 locations, online booking 24/7. We remove every barrier to getting great dental care." },
];

const testimonials = [
  { name: "Amanda L.", location: "Summer Dental", quote: "I was so nervous about going to the dentist after 8 years. The team at Summer Dental was so kind and patient.", stars: 5 },
  { name: "Carlos R.", location: "Just for Kids Blue Diamond", quote: "Both my kids go here. The office is colorful, the staff is amazing, and my kids leave with huge smiles.", stars: 5 },
  { name: "Tyler K.", location: "Canyon Family Dentistry", quote: "Got all 4 wisdom teeth out. The $1,899 price was exactly what I paid — no surprises.", stars: 5 },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="relative bg-[hsl(var(--navy-600))] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]" />
      <div className="relative max-w-5xl mx-auto px-5 py-24 md:py-32 text-center">
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={0}
          className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--gold-400))] mb-4">About Good Doc Dental</motion.p>
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
          Your Neighborhood Dentist —<br className="hidden md:block" /> With 23 Front Doors
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={2}
          className="font-accent italic text-lg text-white/80 max-w-2xl mx-auto mb-4">
          Real, high-quality dental care for you and your family. No corporate fluff, no upselling.
        </motion.p>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={3}
          className="text-base text-white/70 max-w-3xl mx-auto">
          Good Doc Dental is a network of 23 dental offices across the Las Vegas Valley — Las Vegas, Henderson, and North Las Vegas. Each office carries its own name and personality, but they're all united by the same mission: make great dental care accessible, affordable, and genuinely enjoyable for every patient who walks through the door.
        </motion.p>
      </div>
    </section>

    {/* Navigation Cards */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 gap-6">
          {navCards.map((c, i) => (
            <motion.div key={c.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i}>
              <Link to={c.href} className="block bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))] hover:shadow-lg transition-all duration-300 group">
                <c.icon className="w-8 h-8 text-[hsl(var(--blue-400))] mb-4 group-hover:scale-105 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-[hsl(var(--navy-600))] mb-2 group-hover:text-[hsl(var(--blue-400))] transition-colors">
                  {c.title}<ArrowRight className="inline w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[hsl(var(--slate))] text-sm">{c.body}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-12 text-center">
          Good Doc Dental by the Numbers
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="font-heading text-3xl md:text-4xl font-bold text-[hsl(var(--blue-400))] mb-1">{s.number}</div>
              <div className="text-sm text-[hsl(var(--slate))]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">What We Believe</motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{v.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-[hsl(var(--sky))]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Find Your Office</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829">Book Online 24/7</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
