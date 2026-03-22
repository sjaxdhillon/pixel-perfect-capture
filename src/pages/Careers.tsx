import { motion } from "framer-motion";
import { Phone, DollarSign, Heart, TrendingUp, Building, Users, CalendarClock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careersCultureImg from "@/assets/pages/careers-culture.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const perks = [
  { icon: DollarSign, title: "Competitive Pay", body: "Salary and hourly rates that reflect your skills and experience." },
  { icon: Heart, title: "Benefits Package", body: "Health insurance, dental coverage (of course), PTO, and retirement plans." },
  { icon: TrendingUp, title: "Growth Opportunities", body: "23 offices means room to grow. Leadership positions, specialty training, and career advancement." },
  { icon: Building, title: "Modern Offices", body: "Work with the latest dental technology — digital x-rays, CEREC, iTero, laser dentistry." },
  { icon: Users, title: "Supportive Team Culture", body: "We hire people who genuinely care about patients and each other." },
  { icon: CalendarClock, title: "Flexible Scheduling", body: "Multiple shifts across 23 locations. Find a schedule that works for your life." },
];

const positions = [
  { title: "Dental Hygienist", detail: "Full-time & part-time. Multiple locations." },
  { title: "Dental Assistant", detail: "Full-time. Training provided for new graduates." },
  { title: "Front Office Coordinator", detail: "Full-time. Patient scheduling, insurance verification, billing." },
  { title: "Associate Dentist", detail: "Full-time. General dentistry. Mentorship available." },
  { title: "Orthodontic Assistant", detail: "Full-time. Braces and Invisalign support." },
  { title: "Office Manager", detail: "Full-time. Leadership role overseeing daily operations." },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="relative bg-[hsl(var(--navy-600))] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]" />
      <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Careers at Good Doc Dental</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-white/80 mb-4">Join a team that's changing dental care in Las Vegas.</motion.p>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={2}
          className="text-white/70 max-w-2xl mx-auto">
          Good Doc Dental is one of the fastest-growing dental groups in Nevada with 23 offices across the Las Vegas Valley. We're always looking for talented, compassionate people who want to make a difference in patients' lives.
        </motion.p>
      </div>
    </section>

    {/* Culture Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={careersCultureImg} alt="Good Doc Dental team celebrating together" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-10 text-center">Why You'll Love Working Here</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <motion.div key={p.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <p.icon className="w-7 h-7 text-[hsl(var(--blue-400))] mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--navy-600))] mb-2">{p.title}</h3>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-4xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4 text-center">Current Openings</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] text-center mb-10 text-sm">
          We're hiring across all 23 locations. Send your resume to jobs@gooddocdental.com with the position and preferred location in the subject line.
        </motion.p>
        <div className="space-y-4">
          {positions.map((p, i) => (
            <motion.div key={p.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 2}
              className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-[hsl(var(--navy-600))]">{p.title}</h3>
                <p className="text-[hsl(var(--slate))] text-sm">{p.detail}</p>
              </div>
              <Mail className="w-5 h-5 text-[hsl(var(--blue-400))] shrink-0" />
            </motion.div>
          ))}
        </div>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={9}
          className="text-center text-sm text-[hsl(var(--slate))] mt-8 italic">
          Don't see your role listed? We're always open to hearing from great people. Send your resume to jobs@gooddocdental.com.
        </motion.p>
      </div>
    </section>

    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Ready to Join the Team?</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><a href="mailto:jobs@gooddocdental.com">Email Your Resume</a></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829"><Phone className="w-4 h-4 mr-2" />Call 702-852-2829</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Careers;
