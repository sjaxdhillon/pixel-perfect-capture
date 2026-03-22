import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Stethoscope, Baby, AlignCenter, Scissors, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamPhoto from "@/assets/pages/our-team-group.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const specialties = [
  { icon: Stethoscope, title: "General & Family Dentists", body: "Comprehensive dental care for adults and families. Exams, cleanings, fillings, crowns, whitening, and more." },
  { icon: Baby, title: "Pediatric Dentists", body: "Specially trained to work with babies, toddlers, children, and teens. Available at our 7 kids-only offices." },
  { icon: AlignCenter, title: "Orthodontists", body: "Braces and Invisalign for kids, teens, and adults. In-house at most locations." },
  { icon: Scissors, title: "Oral Surgeons", body: "Wisdom teeth removal, dental implants, tooth extractions, and complex surgical procedures. All done in-office." },
  { icon: Heart, title: "Periodontists", body: "Gum disease treatment, gum surgery, bone grafting, and implant placement." },
];

const OurTeam = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">Meet Our Team</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">Dentists, specialists, and team members who actually love what they do.</motion.p>
      </div>
    </section>

    {/* Team Photo */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={teamPhoto} alt="The Good Doc Dental team of dentists and specialists" className="w-full h-[280px] md:h-[400px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">The People Behind Your Smile</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] leading-relaxed">
          Good Doc Dental employs a team of general dentists, pediatric dentists, orthodontists, oral surgeons, periodontists, endodontists, and hundreds of hygienists, assistants, and front office staff across our 23 offices. Every team member shares a commitment to patient-first care, transparent communication, and making dental visits genuinely enjoyable.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">In-House Specialists — No Referrals Needed</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => (
            <motion.div key={s.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <s.icon className="w-8 h-8 text-[hsl(var(--blue-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{s.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="bg-[hsl(var(--teal-50))] rounded-2xl p-8 text-center">
          <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">Want to Join the Team?</h3>
          <p className="text-[hsl(var(--slate))] text-sm mb-4">We're always looking for talented dental professionals who share our passion for patient care.</p>
          <Button asChild variant="outline" size="sm"><Link to="/careers">View Open Positions<ArrowRight className="w-3 h-3 ml-1" /></Link></Button>
        </motion.div>
      </div>
    </section>

    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Book with Our Team</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link></Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurTeam;