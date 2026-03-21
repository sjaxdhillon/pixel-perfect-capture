import { motion } from "framer-motion";
import { MapPin, Clock, Users, Zap, Globe, Shield, Heart, Smile, Sparkles, Star, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-family.jpg";
import promotions from "@/data/promotions.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromoBar />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="relative z-10">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">
              23 Locations Across Las Vegas Valley
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-[clamp(34px,5vw,64px)] font-extrabold text-white leading-[1.05] mt-4 mb-4 text-balance" style={{ letterSpacing: "-1.5px" }}>
              Delivering Smiles Across Las Vegas Valley
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="font-accent italic text-[clamp(18px,2.5vw,28px)] text-blue-200 leading-relaxed mb-3">
              "Great dental care shouldn't feel like a chore — it should feel like coming home."
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="font-body text-body-lg text-navy-200 mb-8 max-w-lg">
              No corporate fluff, no upselling. Open 7 days a week with same-day emergency appointments. Kids, teens, and adults welcome.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                Find Your New Dentist Today
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="emergency" size="lg">
                <Phone className="w-4 h-4" />
                $49 Emergency Exam
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-card overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Smiling families at Good Doc Dental" className="w-full h-[480px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-brand-sky py-6 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12"
          >
            {[
              { icon: MapPin, text: "23 Locations" },
              { icon: Clock, text: "Open 7 Days" },
              { icon: Users, text: "All Ages Welcome" },
              { icon: Zap, text: "Same-Day Emergency" },
              { icon: Globe, text: "Book Online 24/7" },
            ].map((item, i) => (
              <motion.div key={item.text} variants={fadeUp} custom={i} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-brand-blue" />
                <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY YOU'LL LOVE IT HERE ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">Why Good Doc Dental</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-h2 text-brand-navy mt-3 text-balance">Why You'll Love It Here</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-body-lg text-brand-slate mt-4 max-w-2xl mx-auto text-pretty">
              We're not your typical dental chain. We're your neighbors — with better tools.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "No Surprise Bills", desc: "Free benefits check before every treatment. We verify your insurance so you know exactly what to expect." },
              { icon: Clock, title: "Open When You Need Us", desc: "Evenings, Saturdays, and Sundays. Because toothaches don't wait for Monday." },
              { icon: Heart, title: "Anxiety-Free Options", desc: "Sedation dentistry, laughing gas, and a team trained to put nervous patients at ease." },
              { icon: Users, title: "The Whole Family", desc: "Kids, teens, parents, grandparents — 7 dedicated kids offices and 16 family locations." },
              { icon: Sparkles, title: "Modern Technology", desc: "Digital X-Rays, iTero scanners, CEREC same-day crowns, and laser dentistry." },
              { icon: Smile, title: "Real People, Real Care", desc: "No corporate scripts. Just dentists and hygienists who actually care about your smile." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-200">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-display text-h4 text-brand-navy mb-2">{item.title}</h3>
                <p className="font-body text-body-sm text-brand-slate">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROMOTIONS ── */}
      <section className="bg-gold-50 py-20 md:py-28 border-y border-gold-100">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">Current Specials</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-h2 text-brand-navy mt-3 text-balance">Save on the Care You Need</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.filter(p => p.active).map((promo, i) => (
              <motion.div
                key={promo.id}
                variants={fadeUp}
                custom={i}
                className={`rounded-card p-8 border ${
                  promo.type === "emergency"
                    ? "bg-brand-coral text-white border-coral-600"
                    : "bg-white border-gold-100"
                }`}
              >
                <span className="font-display font-extrabold text-[32px] leading-tight">
                  {promo.price}
                </span>
                {promo.regularPrice && (
                  <span className={`ml-2 font-body text-body-sm line-through ${promo.type === "emergency" ? "text-coral-100" : "text-brand-slate"}`}>
                    {promo.regularPrice}
                  </span>
                )}
                <h3 className={`font-display text-h4 mt-2 mb-2 ${promo.type === "emergency" ? "text-white" : "text-brand-navy"}`}>
                  {promo.title}
                </h3>
                <p className={`font-body text-body-sm mb-6 ${promo.type === "emergency" ? "text-coral-50" : "text-brand-slate"}`}>
                  {promo.description}
                </p>
                <Button
                  variant={promo.ctaVariant === "emergency" ? "dark" : promo.ctaVariant === "promo" ? "promo" : "default"}
                  className={promo.type === "emergency" ? "bg-white text-brand-coral hover:bg-coral-50" : ""}
                >
                  {promo.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">Patient Stories</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-h2 text-brand-navy mt-3 text-balance">What Our Patients Say</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria G.", location: "Henderson", quote: "I brought all three of my kids here. The staff treats them like family — no tears, just smiles. We actually look forward to dental visits now.", rating: 5 },
              { name: "David R.", location: "Las Vegas", quote: "Had an emergency on a Sunday. They got me in the same day and the whole team was incredible. I'm never going anywhere else.", rating: 5 },
              { name: "Samantha K.", location: "Summerlin", quote: "Best dental experience I've ever had. They explained everything, no pressure to buy extras. Just honest, quality care. Highly recommend.", rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="font-accent italic text-body-lg text-brand-slate mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <span className="font-display font-bold text-body-sm text-brand-navy">{t.name}</span>
                  <span className="font-body text-caption text-brand-slate ml-2">— {t.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EMERGENCY CTA ── */}
      <section className="bg-brand-coral py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-h2 text-white mb-4 text-balance">
              Dental Emergency? We've Got You.
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-body text-body-lg text-coral-50 mb-8">
              Same-day appointments available 7 days a week. Don't wait in pain — call now and get seen today.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-coral hover:bg-coral-50 shadow-lg" size="lg">
                <Phone className="w-4 h-4" />
                Call Now — $49 Emergency Exam
              </Button>
              <Button variant="dark" size="lg">
                Book Online
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATIONS PREVIEW ── */}
      <section className="bg-brand-sky py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="font-display font-semibold text-label uppercase text-brand-blue tracking-widest">Find Us</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-h2 text-brand-navy mt-3 text-balance">23 Offices Across the Valley</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-body-lg text-brand-slate mt-4 max-w-2xl mx-auto">
              There's a Good Doc Dental near you — Las Vegas, Henderson, North Las Vegas, and beyond.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Las Vegas", count: 13, areas: "Summerlin, Blue Diamond, Skye Canyon, Fort Apache" },
              { city: "Henderson", count: 7, areas: "Cadence, Inspirada, St. Rose, Boulder Hwy" },
              { city: "North Las Vegas", count: 3, areas: "North 5th, Revere, Sedona Ranch" },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-card border border-blue-50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                  <h3 className="font-display text-h3 text-brand-navy">{loc.city}</h3>
                </div>
                <p className="font-display font-bold text-brand-blue text-body-lg mb-2">{loc.count} offices</p>
                <p className="font-body text-body-sm text-brand-slate mb-6">{loc.areas}</p>
                <Button variant="secondary" size="sm">
                  View {loc.city} Offices
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
