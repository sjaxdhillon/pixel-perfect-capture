import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, FileText, User, Shield, Heart, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patientFormsImg from "@/assets/pages/patient-forms.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const infoItems = [
  { icon: User, title: "Personal Information", body: "Name, date of birth, address, phone, email" },
  { icon: Shield, title: "Insurance Details", body: "Insurance company, member ID, group number (if applicable)" },
  { icon: Heart, title: "Medical History", body: "Current medications, allergies, medical conditions, previous surgeries" },
  { icon: ClipboardList, title: "Dental History", body: "Previous dentist info, recent dental work, specific concerns or goals" },
];

const PatientForms = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    {/* Hero */}
    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">
          Patient Forms
        </motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">
          Save time — complete your paperwork before your visit.
        </motion.p>
      </div>
    </section>

    {/* Hero Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={patientFormsImg} alt="Patient completing dental forms on tablet in waiting room" className="w-full h-[260px] md:h-[340px] object-cover" />
        </div>
      </motion.div>
    </section>

    {/* Forms Section */}
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4 text-center">New Patient Forms</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] text-center mb-10">
          Complete your new patient registration online before your first visit. It takes about 5 minutes and helps us prepare for your appointment.
        </motion.p>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2}
          className="bg-[hsl(var(--blue-50))] rounded-2xl p-10 text-center">
          <FileText className="w-12 h-12 text-[hsl(var(--blue-400))] mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-[hsl(var(--navy-600))] mb-2">Complete Your Forms Online</h3>
          <p className="text-[hsl(var(--slate))] text-sm mb-6">New patient registration, medical history, consent forms</p>
          {/* URL will be updated to external form system */}
          <Button asChild size="lg" variant="default"><a href="#">Start Your Forms</a></Button>
        </motion.div>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={3}
          className="text-center text-sm text-[hsl(var(--slate))] mt-6 italic">
          Having trouble with online forms? Just come in 15 minutes early and we'll have paper forms ready for you.
        </motion.p>
      </div>
    </section>

    {/* What You'll Need */}
    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">
          What Information You'll Need
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {infoItems.map((item, i) => (
            <motion.div key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <item.icon className="w-7 h-7 text-[hsl(var(--blue-400))] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-1">{item.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* HIPAA */}
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="bg-[hsl(var(--teal-50))] rounded-2xl p-8 text-center">
          <Shield className="w-8 h-8 text-[hsl(var(--teal-400))] mx-auto mb-3" />
          <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">Your Information Is Protected</h3>
          <p className="text-[hsl(var(--slate))] text-sm mb-4">
            All patient information is protected under HIPAA federal privacy regulations. Your data is encrypted, secure, and never shared without your consent.
          </p>
          <Button asChild variant="outline" size="sm"><Link to="/hipaa-notice">Read our HIPAA Notice</Link></Button>
        </motion.div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Book Your First Visit</motion.h2>
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

export default PatientForms;
