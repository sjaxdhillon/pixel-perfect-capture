import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services.json";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const categoryConfig: { key: string; label: string; categories: string[] }[] = [
  { key: "preventive-general", label: "Preventive & General", categories: ["preventive", "general"] },
  { key: "restorative", label: "Restorative", categories: ["restorative"] },
  { key: "cosmetic", label: "Cosmetic", categories: ["cosmetic"] },
  { key: "orthodontics", label: "Orthodontics", categories: ["orthodontics"] },
  { key: "surgery", label: "Oral Surgery", categories: ["surgery"] },
  { key: "periodontics", label: "Periodontics & Gum Care", categories: ["periodontics"] },
  { key: "pediatric", label: "Kids & Pediatric", categories: ["pediatric"] },
  { key: "emergency", label: "Emergency", categories: ["emergency"] },
];

const promoItems = [
  { label: "$49 Emergency Exam", href: "/services/emergency-dental-care" },
  { label: "$95 Kids Special", href: "/services/kids-dentistry" },
  { label: "$1,200 Off Invisalign", href: "/services/invisalign" },
  { label: "$1,200 Off Implants", href: "/services/dental-implants" },
  { label: "$1,899 Wisdom Teeth", href: "/services/wisdom-tooth-extractions" },
];

const ServicesIndex = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="relative bg-[hsl(var(--navy-600))] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]" />
      <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 text-center">
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={0}
          className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--gold-400))] mb-4">
          Our Services
        </motion.p>
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
          Everything Your Smile Needs —<br className="hidden md:block" /> Under One Roof
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={2}
          className="font-accent italic text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4">
          30 dental services across 23 locations. From routine cleanings to smile makeovers.
        </motion.p>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={3}
          className="text-base text-white/70 max-w-2xl mx-auto mb-8">
          Good Doc Dental offers comprehensive dental care for the whole family. Whether you need a simple checkup, emergency care, orthodontics, cosmetic dentistry, or oral surgery — we've got you covered at a location near you.
        </motion.p>
        <motion.div variants={reveal} initial="hidden" animate="visible" custom={4} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo">
            <Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Book Online 24/7</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Services by Category */}
    {categoryConfig.map((cat) => {
      const catServices = services.filter(s => cat.categories.includes(s.category));
      if (catServices.length === 0) return null;
      return (
        <section key={cat.key} className={`py-20 ${cat.key === "emergency" ? "bg-[hsl(var(--coral-50))]" : ""}`}>
          <div className="max-w-6xl mx-auto px-5">
            <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
              className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10">
              {cat.label}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catServices.map((service, i) => (
                <motion.div key={service.id} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    })}

    {/* Promotions Bar */}
    <section className="bg-[hsl(var(--gold-50))] py-16">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-8">
          Current Promotions
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {promoItems.map((p, i) => (
            <motion.div key={p.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}>
              <Button asChild variant="outline" className="border-[hsl(var(--gold-400))] text-[hsl(var(--navy-600))] hover:bg-[hsl(var(--gold-100))]">
                <Link to={p.href}>{p.label}<ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Not Sure What You Need?
        </motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-white/70 text-lg mb-8">
          That's what we're here for. Book an exam and we'll create a personalized care plan — no pressure, no surprises.
        </motion.p>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo">
            <Link to="/services/dental-exams">Book Your Exam</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Call 702-852-2829</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServicesIndex;
