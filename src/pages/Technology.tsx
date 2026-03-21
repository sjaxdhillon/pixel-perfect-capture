import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dentalTech from "@/assets/dental-technology.jpg";
import { MapPin, Scan, Camera, Box, Fingerprint, Zap, Flashlight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const techItems = [
  { icon: Scan, title: "Digital X-Rays", body: "80% less radiation than traditional film x-rays. Results appear on screen in seconds — no waiting for film to develop. Higher accuracy means better diagnosis.", callout: "80% less radiation" },
  { icon: Camera, title: "Intraoral Cameras", body: "A tiny camera that projects high-definition images of your teeth onto a screen. See exactly what your dentist sees. Better understanding leads to better decisions about your care.", callout: "See what we see" },
  { icon: Box, title: "CBCT 3D Imaging", body: "Full 3D imaging of your entire jaw — bone density, nerve locations, soft tissue, and tooth roots. Essential for implant planning, wisdom teeth evaluation, and complex cases.", callout: "Complete 3D view" },
  { icon: Fingerprint, title: "iTero Digital Scanner", body: "Digital impressions in minutes — no goopy mold trays. Creates a precise 3D model of your mouth for crowns, aligners, and orthodontic treatment.", callout: "No more goopy molds" },
  { icon: Zap, title: "CEREC Same-Day Crowns", body: "Design, mill, and place a permanent porcelain crown in a single visit — about 60 minutes. No temporary crown, no second appointment, no waiting for a lab.", callout: "Crown in 1 visit" },
  { icon: Flashlight, title: "Laser Dentistry", body: "No drill, no scalpel, no stitches for many procedures. Dental lasers are more precise, cause less bleeding, and promote faster healing. Safe for patients of all ages.", callout: "No drill, no pain" },
];

const Technology = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="relative bg-[hsl(var(--navy-600))] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]" />
      <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Our Dental Technology</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-white/80">Modern tools for better, faster, more comfortable dental care.</motion.p>
      </div>
    </section>

    {/* Hero Image */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-12 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={dentalTech} alt="Advanced dental technology at Good Doc Dental" className="w-full h-[300px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8">
          {techItems.map((t, i) => (
            <motion.div key={t.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--navy-50))]">
              <div className="flex items-start gap-4 mb-4">
                <t.icon className="w-8 h-8 text-[hsl(var(--blue-400))] shrink-0" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[hsl(var(--navy-600))]">{t.title}</h3>
                  <span className="inline-block mt-1 bg-[hsl(var(--teal-50))] text-[hsl(var(--teal-600))] text-xs font-semibold rounded-full px-3 py-1">{t.callout}</span>
                </div>
              </div>
              <p className="text-[hsl(var(--slate))] text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Experience Modern Dentistry</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href="tel:7028522829">Book Your Visit</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Technology;
