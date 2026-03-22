import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import faqsImg from "@/assets/pages/faqs-education.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const faqSections = [
  {
    title: "General",
    items: [
      { q: "How many offices does Good Doc Dental have?", a: "We have 23 offices across the Las Vegas Valley — 13 in Las Vegas, 7 in Henderson, and 3 in North Las Vegas. This includes 7 dedicated kids-only offices." },
      { q: "What are your hours?", a: "Most offices are open Monday through Saturday, with many locations offering evening hours. Several offices are also open on Sundays. Hours vary by location — check your nearest office for specific times." },
      { q: "Do I need an appointment or can I walk in?", a: "We accept both. Appointments are recommended to minimize wait times, but walk-ins are always welcome — especially for emergencies." },
      { q: "Do you accept new patients?", a: "Yes! We welcome new patients every day at all 23 locations. No referral needed. You can book online, call, or walk in." },
      { q: "Can I switch between Good Doc Dental locations?", a: "Absolutely. Your records are accessible at all 23 offices. Visit whichever location is most convenient for you." },
      { q: "How do I book an appointment?", a: "Book online 24/7 at any location, call during business hours, or text us. Walk-ins are always welcome." },
    ],
  },
  {
    title: "Insurance & Payment",
    items: [
      { q: "What insurance do you accept?", a: "We accept 16 major dental insurance plans: Aetna, Delta Dental, Careington, MetLife, Humana, United Healthcare, Anthem, Guardian, BlueCross BlueShield, Unicare, DHA, United Concordia, Ameritas, Cigna, Assurant, and Medicare." },
      { q: "Do you accept Medicaid?", a: "Medicaid is not accepted at our offices. However, emergency dental care is available on an out-of-pocket basis at our $49 emergency exam rate." },
      { q: "What if I don't have insurance?", a: "No problem. We offer competitive cash-pay pricing and flexible financing through Sunbit and CareCredit. Many uninsured patients find our prices very affordable." },
      { q: "Do you offer payment plans?", a: "Yes. Sunbit and CareCredit financing is available at all locations. You can split dental costs into 3, 6, or 12-month payment plans. Apply in minutes at the office." },
    ],
  },
  {
    title: "Emergency",
    items: [
      { q: "What qualifies as a dental emergency?", a: "Severe tooth pain, a knocked-out tooth, a broken or cracked tooth, swelling, bleeding that won't stop, or a dental abscess. If you're in pain, come in." },
      { q: "Can I get a same-day emergency appointment?", a: "Yes. Every Good Doc Dental office offers same-day emergency appointments 7 days a week. Call your nearest office or walk in." },
      { q: "How much does an emergency visit cost?", a: "Our emergency exam and x-ray is just $49 (regularly $155). Plus you get a free comprehensive exam within 30 days — a $380 value." },
    ],
  },
  {
    title: "Kids",
    items: [
      { q: "At what age should my child first see a dentist?", a: "By age 1, or within 6 months of the first tooth. The American Academy of Pediatric Dentistry recommends early visits to establish a dental home and catch issues early." },
      { q: "Do you have offices just for kids?", a: "Yes! We have 7 dedicated kids-only offices designed to make dental visits fun and stress-free for children of all ages." },
      { q: "What does the $95 Kids New Patient Special include?", a: "A comprehensive exam, necessary digital x-rays, and a professional cleaning with fluoride. Available for new patients ages 0–17." },
    ],
  },
  {
    title: "Orthodontics",
    items: [
      { q: "Do you offer Invisalign?", a: "Yes! Invisalign is available at all Good Doc Dental locations. We also offer traditional braces, Invisalign Teen, and kids orthodontics." },
      { q: "How much does Invisalign cost?", a: "Invisalign at Good Doc Dental ranges from $2,900 to $5,950 depending on complexity. Right now, all orthodontic treatment is $1,200 off." },
      { q: "Do you offer braces for adults?", a: "Absolutely. About 40% of our orthodontic patients are adults. Both braces and Invisalign are available for patients of all ages." },
    ],
  },
];

const FAQs = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">Frequently Asked Questions</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">Answers to the questions we hear most — straight talk, no jargon.</motion.p>
      </div>
    </section>

    {/* Hero Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={faqsImg} alt="Dental team explaining procedures to a patient" className="w-full h-[260px] md:h-[340px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5 space-y-12">
        {faqSections.map((section, si) => (
          <motion.div key={section.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={si}>
            <h2 className="font-heading text-xl font-bold text-[hsl(var(--navy-600))] mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.items.map((item, i) => (
                <AccordionItem key={i} value={`${section.title}-${i}`} className="bg-white rounded-xl border border-[hsl(var(--navy-50))] px-6">
                  <AccordionTrigger className="font-heading text-[hsl(var(--navy-600))] text-left py-4">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--slate))] text-sm leading-relaxed pb-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-[hsl(var(--navy-50))]">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">Didn't Find Your Answer?</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] mb-8">Call, text, or visit any of our 23 offices. Our team is happy to answer any questions.</motion.p>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="default"><a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Contact Us — 702-852-2829</a></Button>
          <Button asChild size="lg" variant="outline"><Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link></Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default FAQs;
