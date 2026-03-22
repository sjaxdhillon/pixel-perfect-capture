import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, MapPin, ArrowRight, Baby, Smile, Moon, Tag,
  Heart, Search, Sparkles, MessageCircle, Check, Shield, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import LocationCard from "@/components/LocationCard";
import ServiceCard from "@/components/ServiceCard";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import kidsImg from "@/assets/pages/kids-dentistry-fun.jpg";

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

const kidsLocations = locations.filter(l => l.kidsOffice);

const kidsServices = [
  { slug: "kids-dentistry", name: "Kids Dentistry", tagline: "General checkups & cleanings", icon: "baby", priceDisplay: "$95", promoText: "Kids New Patient Special" },
  { slug: "baby-toddler-dentistry", name: "Baby & Toddler Dentistry", tagline: "First smiles deserve the best start", icon: "heart-handshake", priceDisplay: "$95" },
  { slug: "kids-orthodontics", name: "Kids Orthodontics", tagline: "Early treatment for lasting results", icon: "smile-plus", priceDisplay: "$2,900–$5,950", promoText: "$1,200 OFF" },
  { slug: "special-needs-dentistry", name: "Special Needs Dentistry", tagline: "Compassionate care for every patient", icon: "accessibility", priceDisplay: "Varies" },
  { slug: "dental-cleanings", name: "Dental Sealants", tagline: "Protective coating for molars — prevents cavities", icon: "shield", priceDisplay: "Varies" },
  { slug: "dental-cleanings", name: "Fluoride Treatments", tagline: "Strengthens enamel and fights cavities", icon: "sparkles", priceDisplay: "Included" },
  { slug: "emergency-dental-care", name: "Emergency Care for Kids", tagline: "Same-day appointments — $49 exam", icon: "siren", priceDisplay: "$49", promoText: "$49 Emergency Exam" },
];

const relatedSlugs = ["baby-toddler-dentistry", "kids-orthodontics", "special-needs-dentistry"];
const relatedServices = services.filter(s => relatedSlugs.includes(s.slug));

const faqs = [
  { q: "When should my child first see a dentist?", a: "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 or within 6 months of the first tooth erupting, whichever comes first. Early visits help us catch problems before they become bigger issues and help your child get comfortable with the dentist." },
  { q: "What does the $95 Kids New Patient Special include?", a: "The $95 special includes a comprehensive dental exam, necessary digital x-rays, and a professional cleaning with fluoride treatment. It's designed to give us a complete picture of your child's oral health at a very affordable price." },
  { q: "Do you offer sedation for kids?", a: "Yes. We offer laughing gas (nitrous oxide) and oral sedation for children who are anxious or need extra help relaxing during dental visits. Both options are safe, well-studied, and administered by our trained pediatric dental team." },
  { q: "What if my child is scared of the dentist?", a: "Dental anxiety in kids is very common, and our team is trained to handle it with patience and compassion. We use tell-show-do techniques, allow parents in the treatment room, and never force anything. Many kids who start out scared end up loving their visits." },
  { q: "Do you accept dental insurance for kids?", a: "Yes, we accept 16 major dental insurance plans. Most plans include pediatric dental benefits that cover preventive visits like exams and cleanings. We'll verify your child's benefits for free before any visit." },
  { q: "At what age should my child see an orthodontist?", a: "The American Association of Orthodontists recommends an orthodontic evaluation by age 7. This doesn't mean treatment starts that early — it means we can identify potential issues and plan the best time to start, if needed. Orthodontic consultations at Good Doc Dental are always free." },
];

const KidsDentistry = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <PromoBar />
    <Navbar />

    {/* HERO — Sky tint, warm & friendly */}
    <section className="bg-brand-sky relative overflow-hidden min-h-[70vh] flex items-center">
      <motion.div
        variants={floatSlow} initial="initial" animate="animate"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-brand-blue/4 blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={floatReverse} initial="initial" animate="animate"
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[80px] pointer-events-none"
      />
      <motion.div
        variants={float} initial="initial" animate="animate"
        className="absolute right-1/4 bottom-1/3 w-[150px] h-[150px] rounded-full bg-brand-gold/6 blur-[50px] pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-28 md:pb-28 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={reveal} custom={0} className="inline-flex items-center gap-2.5 bg-brand-blue/8 backdrop-blur-md rounded-btn px-5 py-2.5 mb-8 border border-brand-blue/10">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-display font-semibold text-caption uppercase tracking-[0.12em] text-brand-blue">Pediatric Dentistry</span>
          </motion.div>

          <motion.h1
            variants={reveal} custom={1}
            className="font-display text-[clamp(36px,5.5vw,64px)] font-extrabold text-brand-navy leading-[0.92] tracking-[-2.5px] mb-7"
          >
            Kids Dentistry
            <br />in Las Vegas
          </motion.h1>

          <motion.p variants={reveal} custom={2} className="font-accent italic text-[clamp(16px,2vw,22px)] text-brand-blue/70 mb-5 max-w-xl leading-[1.6]">
            Big smiles for little patients — with 7 offices built just for kids.
          </motion.p>

          <motion.p variants={reveal} custom={3} className="font-body text-body text-brand-slate mb-10 max-w-xl leading-[1.7]">
            At Good Doc Dental, we believe every child deserves a positive first dental experience. Our 7 dedicated kids offices are designed from the ground up for young patients — fun, friendly, and totally stress-free. From baby's first tooth to teen braces, our pediatric dental team makes every visit something to smile about.
          </motion.p>

          {/* Price callout */}
          <motion.div variants={reveal} custom={4}>
            <motion.div
              variants={float} initial="initial" animate="animate"
              className="inline-flex items-baseline gap-4 bg-brand-blue/8 backdrop-blur-md rounded-[20px] px-8 py-5 mb-12 border border-brand-blue/10"
            >
              <span className="font-display font-extrabold text-[56px] text-brand-navy leading-none drop-shadow-sm">$95</span>
              <div>
                <span className="font-display font-bold text-body-lg text-brand-navy block">Kids New Patient Special</span>
                <span className="font-body text-body-sm text-brand-slate">Includes exam, x-rays & cleaning</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={reveal} custom={5} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/15">
                Schedule Your Child's First Visit <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <Link to="/locations">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="dark" size="lg">
                  <MapPin className="w-4 h-4" /> Find a Kids Office Near You
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Kids Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-8 mb-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={kidsImg} alt="Happy child laughing in colorful pediatric dental office" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    {/* TRUST BAR */}
    <section className="bg-white py-6 border-b border-blue-100/60">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Baby, text: "7 Kids-Only Offices" },
            { icon: Smile, text: "Fun, Friendly Environment" },
            { icon: Moon, text: "Sedation Available" },
            { icon: Tag, text: "$95 New Patient Special" },
          ].map((item, i) => (
            <motion.div key={item.text} variants={reveal} custom={i} whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-2.5 bg-blue-50/60 rounded-btn px-5 py-2.5 shadow-sm border border-blue-50 hover:shadow-md transition-shadow duration-300">
              <item.icon className="w-4 h-4 text-brand-blue" />
              <span className="font-display font-semibold text-body-sm text-brand-navy">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* WHAT TO EXPECT */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 top-20 w-[120px] h-[120px] rounded-full bg-brand-teal/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">First Visit</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            What to Expect at Your Child's First Visit
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            We know the first dental visit can feel like a big deal — for kids AND parents. That's why we take it slow. Our team is trained to work with children of all ages, including babies, toddlers, and kids with dental anxiety. Here's what a typical first visit looks like:
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Heart, title: "Warm Welcome", body: "We greet every kid by name, let them explore the office, and explain everything in kid-friendly language before we do anything." },
            { icon: Search, title: "Gentle Exam", body: "Our dentists do a thorough but gentle check of your child's teeth, gums, and jaw development. Digital x-rays as needed — quick and painless." },
            { icon: Sparkles, title: "Cleaning & Fluoride", body: "A professional cleaning followed by a fluoride treatment to strengthen enamel and fight cavities. Kids get to pick their favorite flavor." },
            { icon: MessageCircle, title: "Parent Chat", body: "We'll share everything we found, answer your questions, and create a plan for keeping those little teeth healthy. No jargon, no pressure." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-blue-50/60 rounded-[24px] p-8 border border-blue-100/60 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h4 className="font-display text-h5 font-bold text-brand-navy mb-3 leading-tight">{card.title}</h4>
              <p className="font-body text-body-sm text-brand-slate leading-[1.6]">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* WHEN TO START */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute left-10 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-teal/5 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Early Care Matters</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-12 leading-[1.05] tracking-[-1.5px]">
            The American Academy of Pediatric Dentistry Recommends...
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={reveal} custom={0}
            className="bg-teal-50 border-2 border-brand-teal/20 rounded-[24px] p-10 md:p-12 mb-10">
            <p className="font-display text-[clamp(24px,3vw,36px)] font-extrabold text-brand-navy leading-[1.1] tracking-[-1px] mb-4">
              First dental visit by age 1
            </p>
            <p className="font-display font-semibold text-body-lg text-brand-teal mb-6">
              Or within 6 months of the first tooth
            </p>
            <p className="font-body text-body text-brand-slate leading-[1.7]">
              Early dental visits help us catch problems before they start. Starting early also helps your child build a positive relationship with the dentist — so they're never afraid.
            </p>
          </motion.div>

          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-brand-slate leading-[1.7] mb-10">
            Most parents are surprised to learn the recommendation is this early. But catching issues like early decay, tongue ties, or bite problems at age 1 is much easier (and less expensive) than dealing with them at age 5. Think of it as prevention, not treatment.
          </motion.p>

          <motion.div variants={reveal} custom={2}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default">Schedule Your Child's First Visit <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-32 w-[130px] h-[130px] rounded-full bg-brand-blue/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Pediatric Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Everything Your Child's Smile Needs
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {kidsServices.map((s, i) => (
            <motion.div key={s.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} icon={s.icon} promoText={s.promoText} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* SEDATION & COMFORT */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute right-10 bottom-20 w-[160px] h-[160px] rounded-full bg-brand-teal/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Anxiety-Free Dentistry</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Nervous Kids? We've Got This.
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-3xl leading-[1.7]">
            Dental anxiety is completely normal — especially for little ones. Our team is trained in pediatric behavior management, and we offer multiple sedation options to make sure your child is comfortable and calm throughout their visit.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Laughing Gas (Nitrous Oxide)", body: "A mild, safe sedative breathed in through a small nose mask. Your child stays awake and relaxed. Wears off within minutes after the appointment." },
            { title: "Oral Sedation", body: "For kids who need a little more help relaxing, we offer oral sedation — a safe liquid medication taken before the appointment. Your child will be drowsy but responsive." },
            { title: "Kid-Friendly Environment", body: "Every kids office is designed to be fun and welcoming — colorful decor, kid-sized chairs, TV in the ceiling, and a treasure chest after every visit." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={reveal} custom={i}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-[24px] p-8 border border-blue-100/60 group">
              <h4 className="font-display text-h5 font-bold text-brand-navy mb-4 leading-tight">{card.title}</h4>
              <p className="font-body text-body text-brand-slate leading-[1.7]">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* 7 KIDS OFFICES */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={floatReverse} initial="initial" animate="animate"
        className="absolute right-20 bottom-20 w-[180px] h-[180px] rounded-full bg-brand-blue/4 blur-[50px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Dedicated Kids Offices</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            7 Offices Built Just for Kids
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-16 max-w-lg leading-[1.7]">
            Our kids-only offices are separate from our family practices, so your child gets a space designed entirely for them.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {kidsLocations.map((loc, i) => (
            <motion.div key={loc.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <LocationCard name={loc.name} slug={loc.slug} address={loc.address} city={loc.city} phone={loc.phone} hours={loc.hours} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/locations">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="secondary">View All 23 Locations <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>

    {/* PRICING */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative overflow-hidden">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute left-0 top-20 w-[200px] h-[200px] rounded-full bg-brand-blue/4 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Affordable Kids Dental Care</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            Kids Dental Costs in Las Vegas
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid lg:grid-cols-5 gap-6">
          <motion.div variants={reveal} custom={0} whileHover={{ y: -4 }}
            className="lg:col-span-3 bg-blue-50 border-2 border-brand-blue rounded-[28px] p-10 md:p-12 relative overflow-hidden">
            <motion.div variants={floatSlow} initial="initial" animate="animate"
              className="absolute -left-14 -bottom-14 w-[220px] h-[220px] rounded-full bg-brand-blue/6 blur-[50px]" />
            <div className="relative z-10">
              <span className="inline-block font-display font-bold text-caption uppercase tracking-[0.12em] text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-btn mb-6">New Patient Special</span>
              <div className="flex items-baseline gap-3 mb-3">
                <motion.span variants={float} initial="initial" animate="animate"
                  className="font-display font-extrabold text-[64px] text-brand-navy leading-none drop-shadow-sm inline-block">$95</motion.span>
              </div>
              <h3 className="font-display font-bold text-h3 text-brand-navy mb-4">Kids New Patient Special</h3>
              <p className="font-body text-body-lg text-brand-slate leading-[1.6] mb-3">
                Includes comprehensive exam, necessary x-rays, and professional cleaning.
              </p>
              <p className="font-body text-body text-brand-slate leading-[1.6] mb-8">
                New patients only. Ages 0–17.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/15 w-full sm:w-auto">
                  Schedule Your Child's First Visit <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-5">
            <motion.div variants={reveal} custom={1} whileHover={{ y: -3 }}
              className="bg-blue-50 rounded-[24px] p-8 border border-blue-100/60">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Insurance Accepted</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-6">
                We accept 16 major dental insurance plans, including most plans that cover pediatric dental benefits. We'll check your child's benefits for free before any treatment.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="default" size="sm">Free Benefits Check</Button>
              </motion.div>
            </motion.div>

            <motion.div variants={reveal} custom={2} whileHover={{ y: -3 }}
              className="bg-gold-50 rounded-[24px] p-8 border border-gold-100/60">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/12 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="font-display font-bold text-h5 text-brand-navy">Financing Available</h4>
              </div>
              <p className="font-body text-body text-brand-slate leading-[1.7] mb-5">
                Need help with costs beyond what insurance covers? Sunbit and CareCredit make it easy to split payments into manageable monthly installments.
              </p>
              <div className="flex gap-2">
                {["3 mo", "6 mo", "12 mo"].map((plan) => (
                  <span key={plan} className="font-display font-semibold text-caption bg-white text-gold-600 px-4 py-2 rounded-xl border border-gold-100/80 uppercase tracking-wider">{plan}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p variants={reveal} custom={0} className="font-body text-body-sm text-brand-slate italic mt-8">
            The $95 new patient special covers the first visit. Additional treatment, if needed, will be quoted separately with a full breakdown before we proceed.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* FREE ORTHO CONSULTATION */}
    <section className="py-28 md:py-36 relative">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute right-20 top-32 w-[130px] h-[130px] rounded-full bg-brand-gold/5 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Straight Teeth for Kids</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-5 leading-[1.05] tracking-[-1.5px]">
            Free Orthodontic Consultation for Kids
          </motion.h2>
          <motion.p variants={reveal} custom={2} className="font-body text-body-lg text-brand-slate mb-8 leading-[1.7]">
            The American Association of Orthodontists recommends every child get an orthodontic evaluation by age 7. At Good Doc Dental, that evaluation is completely free. Whether your child needs early intervention, braces, or Invisalign Teen — we'll give you an honest assessment and a clear plan.
          </motion.p>

          <motion.div variants={reveal} custom={3}
            className="inline-block bg-gold-50 border border-brand-gold/20 rounded-[16px] px-6 py-3 mb-10">
            <span className="font-display font-bold text-body text-brand-navy">$1,200 off all orthodontic treatment — braces or Invisalign</span>
          </motion.div>

          <motion.div variants={reveal} custom={4} className="block">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button variant="default" size="lg">Book a Free Orthodontic Consultation <ArrowRight className="w-4 h-4" /></Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36 relative">
      <motion.div variants={floatSlow} initial="initial" animate="animate"
        className="absolute left-10 top-32 w-[100px] h-[100px] rounded-full bg-brand-blue/4 blur-[40px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">FAQ</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-14 leading-[1.05] tracking-[-1.5px]">
            Common Questions About Kids Dentistry
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
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-blue">Parent Reviews</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            What Parents Are Saying
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Jennifer M.", location: "Go Kids Dental Sky Canyon", quote: "My daughter was terrified of the dentist. The team at Go Kids made her feel so safe and comfortable — she actually asked when she could go back. Can't recommend them enough." },
            { name: "Carlos R.", location: "Just for Kids Blue Diamond", quote: "Both my kids go to Just for Kids on Blue Diamond. The office is colorful, the staff is amazing, and my kids leave every appointment with huge smiles. Best pediatric dental experience we've had." },
          ].map((t, i) => (
            <motion.div key={t.name} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* RELATED SERVICES */}
    <section className="bg-gradient-to-b from-blue-50/40 to-blue-50 py-28 md:py-36">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={reveal} custom={0} className="font-display font-bold text-caption uppercase tracking-[0.15em] text-brand-teal">Related Services</motion.span>
          <motion.h2 variants={reveal} custom={1} className="font-display text-[clamp(30px,4vw,48px)] font-extrabold text-brand-navy mt-4 mb-16 leading-[1.05] tracking-[-1.5px]">
            More Pediatric Services
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-5">
          {relatedServices.map((s, i) => (
            <motion.div key={s.id} variants={reveal} custom={i} whileHover={{ y: -4 }}>
              <ServiceCard name={s.name} slug={s.slug} tagline={s.tagline} priceDisplay={s.priceDisplay} priceUnit={s.priceUnit} icon={s.icon} promoText={s.promoText} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* BOTTOM CTA — Sky tint (warm, not navy) */}
    <section className="bg-brand-sky relative overflow-hidden">
      <motion.div variants={float} initial="initial" animate="animate"
        className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[60px] pointer-events-none" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={reveal} custom={0} className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-brand-navy leading-[0.95] tracking-[-2px] mb-5">
            Give Your Child a Smile
            <br />to Grow Up With
          </motion.h2>
          <motion.p variants={reveal} custom={1} className="font-body text-body-lg text-brand-slate mb-12 leading-[1.7]">
            From first tooth to first braces, Good Doc Dental is here for your family every step of the way. Schedule your child's first visit today.
          </motion.p>
          <motion.div variants={reveal} custom={2} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="shadow-xl shadow-brand-blue/15">
                Schedule Your Child's First Visit <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <a href="tel:7028522829">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="dark" size="lg">
                  <Phone className="w-4 h-4" /> Call, Text, or Book Online 24/7
                </Button>
              </motion.div>
            </a>
          </motion.div>
          <motion.p variants={reveal} custom={3} className="font-body text-body-sm text-brand-slate mt-6">702-852-2829</motion.p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default KidsDentistry;
