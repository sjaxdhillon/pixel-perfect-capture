import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Clock, Shield, CalendarCheck, Check, ArrowRight,
  Search, Monitor, PiggyBank, Sparkles, Heart, Wind, Palette, Zap, Smile,
  Moon, Activity, Lock, Utensils, MinusCircle, Volume2, Sun, CreditCard,
  Users, WandSparkles, CheckCircle, Tag, Briefcase, EyeOff, RefreshCw,
  UserCheck, Timer, MessageCircle, GraduationCap, Settings, Scan, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services.json";
import { serviceContentMap } from "@/data/serviceContent";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
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

const iconMap: Record<string, React.ReactNode> = {
  "search": <Search className="w-6 h-6" />,
  "shield": <Shield className="w-6 h-6" />,
  "monitor": <Monitor className="w-6 h-6" />,
  "piggy-bank": <PiggyBank className="w-6 h-6" />,
  "sparkles": <Sparkles className="w-6 h-6" />,
  "heart": <Heart className="w-6 h-6" />,
  "wind": <Wind className="w-6 h-6" />,
  "palette": <Palette className="w-6 h-6" />,
  "zap": <Zap className="w-6 h-6" />,
  "smile": <Smile className="w-6 h-6" />,
  "clock": <Clock className="w-6 h-6" />,
  "moon": <Moon className="w-6 h-6" />,
  "activity": <Activity className="w-6 h-6" />,
  "lock": <Lock className="w-6 h-6" />,
  "utensils": <Utensils className="w-6 h-6" />,
  "minus-circle": <MinusCircle className="w-6 h-6" />,
  "volume-2": <Volume2 className="w-6 h-6" />,
  "sun": <Sun className="w-6 h-6" />,
  "credit-card": <CreditCard className="w-6 h-6" />,
  "users": <Users className="w-6 h-6" />,
  "wand-sparkles": <WandSparkles className="w-6 h-6" />,
  "check-circle": <CheckCircle className="w-6 h-6" />,
  "tag": <Tag className="w-6 h-6" />,
  "briefcase": <Briefcase className="w-6 h-6" />,
  "eye-off": <EyeOff className="w-6 h-6" />,
  "refresh-cw": <RefreshCw className="w-6 h-6" />,
  "user-check": <UserCheck className="w-6 h-6" />,
  "timer": <Timer className="w-6 h-6" />,
  "message-circle": <MessageCircle className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  "settings": <Settings className="w-6 h-6" />,
  "scan": <Scan className="w-6 h-6" />,
  "arrow-right": <ArrowRight className="w-6 h-6" />,
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/services" replace />;

  const content = serviceContentMap[slug];
  const serviceData = services.find((s: any) => s.slug === slug);
  if (!content || !serviceData) return <Navigate to="/services" replace />;

  const relatedServices = services.filter((s: any) => content.relatedSlugs.includes(s.slug));
  const isNavy = content.heroBackground === "navy";
  const hasPromo = !!content.pricing.promoText;

  const trustItems = [
    { icon: <MapPin className="w-5 h-5" />, label: "23 Locations" },
    { icon: <Clock className="w-5 h-5" />, label: "Open 7 Days" },
    { icon: <Shield className="w-5 h-5" />, label: "Free Benefits Check" },
    { icon: <CalendarCheck className="w-5 h-5" />, label: "Book Online 24/7" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className={`relative overflow-hidden ${isNavy ? "bg-brand-navy" : "bg-brand-sky"} pt-32 pb-20 md:pt-40 md:pb-28`}>
        <motion.div {...floatSlow} className={`absolute -right-32 top-20 w-72 h-72 rounded-full ${isNavy ? "bg-brand-blue/8" : "bg-brand-blue/10"} blur-3xl`} />
        <motion.div {...floatReverse} className={`absolute -left-20 bottom-10 w-56 h-56 rounded-full ${isNavy ? "bg-brand-teal/6" : "bg-brand-teal/8"} blur-3xl`} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={reveal} custom={0} className={`inline-flex items-center gap-2 px-4 py-2 rounded-btn ${isNavy ? "bg-white/10 backdrop-blur-sm" : "bg-white/60"} mb-6`}>
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              <span className={`font-display font-semibold text-caption uppercase tracking-wider ${isNavy ? "text-blue-200" : "text-brand-navy"}`}>{content.eyebrow}</span>
            </motion.div>

            <motion.h1 variants={reveal} custom={1} className={`font-display font-extrabold text-h1 leading-[1.05] mb-4 ${isNavy ? "text-white" : "text-brand-navy"}`}>
              {content.headline}
            </motion.h1>

            <motion.p variants={reveal} custom={2} className={`font-accent italic text-body-lg mb-8 ${isNavy ? "text-blue-200/80" : "text-brand-slate"}`}>
              {content.tagline}
            </motion.p>

            {hasPromo && (
              <motion.div variants={reveal} custom={3} className="mb-8">
                <span className="inline-block bg-brand-gold text-brand-navy font-display font-extrabold text-h3 px-5 py-2 rounded-btn">
                  {content.pricing.promoText}
                </span>
                {content.pricing.promoDetail && (
                  <span className={`block mt-2 font-body text-body-sm ${isNavy ? "text-blue-200/70" : "text-brand-slate"}`}>{content.pricing.promoDetail}</span>
                )}
              </motion.div>
            )}

            {!hasPromo && (
              <motion.div variants={reveal} custom={3} className="mb-8">
                <span className={`font-display font-extrabold text-h2 ${isNavy ? "text-white" : "text-brand-navy"}`}>{content.pricing.display}</span>
              </motion.div>
            )}

            <motion.div variants={reveal} custom={4} className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className={`rounded-btn font-display font-bold ${hasPromo ? "bg-brand-gold hover:bg-gold-400 text-brand-navy" : "bg-brand-blue hover:bg-blue-600 text-white"}`}>
                {content.ctaButtonText}
              </Button>
              <Link to="/locations">
                <Button size="lg" variant="outline" className={`rounded-btn font-display font-bold ${isNavy ? "border-white/20 text-white hover:bg-white/10" : "border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5"}`}>
                  Find a Location Near You
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-brand-sky border-y border-blue-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item, i) => (
              <motion.div key={item.label} variants={reveal} custom={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-blue shadow-sm">{item.icon}</div>
                <span className="font-display font-bold text-body-sm text-brand-navy">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About This Service */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">About This Service</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-6">
            What Are {serviceData.name}?
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate leading-relaxed">
            {content.intro}
          </motion.p>
        </div>
      </motion.section>

      {/* Signs / Reasons */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Is This For You?</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-10 max-w-2xl">
            {content.signs.heading}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {content.signs.items.map((item, i) => (
              <motion.div key={i} variants={reveal} custom={i + 2} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-blue-50">
                <Check className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                <span className="font-body text-body-sm text-brand-slate">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28 bg-brand-sky">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Our Process</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
            What to Expect
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.process.map((step, i) => (
              <motion.div key={i} variants={reveal} custom={i + 2} className="relative">
                <span className="font-display font-extrabold text-display text-blue-100/60 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display font-bold text-h4 text-brand-navy mt-1 mb-2">{step.title}</h4>
                <p className="font-body text-body-sm text-brand-slate">{step.body}</p>
                {i < content.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 right-0 w-8 border-t-2 border-dashed border-blue-200 translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Benefits</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
            Why Choose Good Doc Dental
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((b, i) => (
              <motion.div key={i} variants={reveal} custom={i + 2} className="bg-brand-sky rounded-2xl border border-blue-100 p-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-blue shadow-sm mb-4">
                  {iconMap[b.icon] || <Shield className="w-6 h-6" />}
                </div>
                <h3 className="font-display font-bold text-h4 text-brand-navy mb-2">{b.title}</h3>
                <p className="font-body text-body-sm text-brand-slate">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology (optional) */}
      {content.technology && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Our Technology</motion.span>
            <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
              Advanced Technology
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {content.technology.map((t, i) => (
                <motion.div key={i} variants={reveal} custom={i + 2} className="bg-white rounded-2xl border border-blue-50 p-6">
                  <h3 className="font-display font-bold text-h4 text-brand-navy mb-2">{t.title}</h3>
                  <p className="font-body text-body-sm text-brand-slate">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Pricing */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Transparent Pricing</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
            {serviceData.name} Cost in Las Vegas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {/* Main pricing card */}
            <motion.div variants={reveal} custom={2} className={`rounded-2xl border-2 p-8 ${hasPromo ? "bg-gold-50 border-brand-gold" : "bg-blue-50 border-brand-blue"}`}>
              <span className="font-display font-extrabold text-h2 text-brand-navy block mb-2">{content.pricing.display}</span>
              {hasPromo && (
                <span className="inline-block bg-brand-gold text-brand-navy font-display font-bold text-caption px-3 py-1 rounded-btn mb-3">
                  {content.pricing.promoText}
                </span>
              )}
              {content.pricing.note && (
                <p className="font-body text-body-sm text-brand-slate mt-3">{content.pricing.note}</p>
              )}
              <Button size="lg" className="mt-6 w-full rounded-btn font-display font-bold bg-brand-blue hover:bg-blue-600 text-white">
                {content.ctaButtonText}
              </Button>
            </motion.div>

            {/* Insurance card */}
            <motion.div variants={reveal} custom={3} className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
              <Shield className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-display font-bold text-h4 text-brand-navy mb-2">Insurance Accepted</h3>
              <p className="font-body text-body-sm text-brand-slate">
                We accept 16 major insurance plans. We'll verify your benefits and maximize your coverage — free.
              </p>
              <span className="inline-block mt-4 font-display font-semibold text-caption text-brand-blue">Free Benefits Check</span>
            </motion.div>

            {/* Financing card */}
            <motion.div variants={reveal} custom={4} className="bg-gold-50 rounded-2xl border border-gold-200 p-8">
              <CreditCard className="w-8 h-8 text-brand-gold mb-4" />
              <h3 className="font-display font-bold text-h4 text-brand-navy mb-2">Financing Available</h3>
              <p className="font-body text-body-sm text-brand-slate">
                Sunbit and CareCredit accepted. Split your cost into monthly payments — 3, 6, or 12-month plans.
              </p>
              <span className="inline-block mt-4 font-display font-semibold text-caption text-brand-gold">Low Monthly Payments</span>
            </motion.div>
          </div>

          <motion.p variants={reveal} custom={5} className="font-body text-caption text-navy-200 italic mt-6 max-w-3xl">
            Prices may vary based on individual treatment needs. A personalized quote is provided at your visit.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">FAQ</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-10">
            Frequently Asked Questions
          </motion.h2>
          <motion.div variants={reveal} custom={2}>
            <Accordion type="single" collapsible className="space-y-3">
              {content.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-blue-50 px-6 overflow-hidden">
                  <AccordionTrigger className="font-display font-bold text-body text-brand-navy py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-body-sm text-brand-slate pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Patient Reviews</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
            What Patients Are Saying
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {content.testimonials.map((t, i) => (
              <motion.div key={i} variants={reveal} custom={i + 2}>
                <TestimonialCard name={t.name} location={t.office} quote={t.quote} rating={t.stars} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related Services */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.span variants={reveal} custom={0} className="font-display font-semibold text-caption uppercase tracking-wider text-brand-blue block mb-3">Related Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display font-extrabold text-h2 text-brand-navy mb-12">
            You Might Also Need
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            {relatedServices.map((s: any, i: number) => (
              <motion.div key={s.slug} variants={reveal} custom={i + 2}>
                <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} priceUnit={s.priceUnit} icon={s.icon} promoText={s.promoText} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <section className={`py-20 md:py-28 ${isNavy ? "bg-brand-navy" : "bg-brand-sky"} relative overflow-hidden`}>
        <motion.div {...floatSlow} className={`absolute -right-32 top-10 w-72 h-72 rounded-full ${isNavy ? "bg-brand-blue/8" : "bg-brand-blue/10"} blur-3xl`} />
        <motion.div {...floatReverse} className={`absolute -left-20 bottom-10 w-48 h-48 rounded-full ${isNavy ? "bg-brand-teal/5" : "bg-brand-teal/8"} blur-3xl`} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 variants={reveal} custom={0} className={`font-display font-extrabold text-h2 mb-4 ${isNavy ? "text-white" : "text-brand-navy"}`}>
            {content.ctaHeading}
          </motion.h2>
          <motion.p variants={reveal} custom={1} className={`font-body text-body-lg max-w-2xl mx-auto mb-8 ${isNavy ? "text-blue-200/80" : "text-brand-slate"}`}>
            {content.ctaBody}
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className={`rounded-btn font-display font-bold ${hasPromo ? "bg-brand-gold hover:bg-gold-400 text-brand-navy" : "bg-brand-blue hover:bg-blue-600 text-white"}`}>
              {content.ctaButtonText}
            </Button>
            <a href="tel:+17028522829">
              <Button size="lg" variant="outline" className={`rounded-btn font-display font-bold ${isNavy ? "border-white/20 text-white hover:bg-white/10" : "border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5"}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call 702-852-2829
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
