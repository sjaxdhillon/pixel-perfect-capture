import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import storyOrigin from "@/assets/pages/our-story-origin.jpg";
import storyGrowth from "@/assets/pages/our-story-growth.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const OurStory = () => (
  <div className="min-h-screen bg-background">
    <PromoBar />
    <Navbar />

    <section className="bg-[hsl(var(--sky))] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0}
          className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] leading-tight mb-4">Our Story</motion.h1>
        <motion.p variants={reveal} initial="hidden" animate="visible" custom={1}
          className="font-accent italic text-lg text-[hsl(var(--slate))]">From one office to twenty-three — and we're just getting started.</motion.p>
      </div>
    </section>

    {/* Image Banner */}
    <section className="py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5 -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={storyOrigin} alt="The first Good Doc Dental office welcoming families" className="w-full h-[280px] md:h-[380px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-6">How Good Doc Dental Began</motion.h2>
        {[
          "Good Doc Dental started with a simple idea: dental care in Las Vegas should be better. Better access. Better pricing. Better experience. Too many families were stuck choosing between overpriced dental chains that treated them like numbers and solo practices with limited hours and long wait times.",
          "We opened our first office with a commitment to doing things differently — transparent pricing, extended hours, same-day emergencies, and a team that actually listens. Patients noticed. They told their friends. And before long, one office became two. Then five. Then ten.",
          "Today, Good Doc Dental operates 23 offices across Las Vegas, Henderson, and North Las Vegas — including 7 offices built exclusively for kids. We employ in-house orthodontists, oral surgeons, periodontists, and pediatric specialists so patients can get virtually any dental service without being referred somewhere else.",
          "But here's what hasn't changed: every office still feels like your neighborhood dentist. We know our patients by name. We don't upsell. We tell you what things cost before we start. And we're open 7 days a week because we know life doesn't pause for dental emergencies.",
        ].map((p, i) => (
          <motion.p key={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i + 1}
            className="text-[hsl(var(--slate))] leading-relaxed mb-5 last:mb-0">{p}</motion.p>
        ))}
      </div>
    </section>

    {/* Growth Image */}
    <section className="py-0 mb-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-5">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={storyGrowth} alt="Good Doc Dental locations across the Las Vegas Valley" className="w-full h-[260px] md:h-[340px] object-cover" />
        </div>
      </motion.div>
    </section>

    <section className="py-20 bg-[hsl(var(--navy-50))]">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--navy-600))] mb-4">What We're Building</motion.h2>
        <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}
          className="text-[hsl(var(--slate))] leading-relaxed">
          Our goal isn't to be the biggest dental group in Nevada. It's to be the one that families actually love going to. The one where you never feel rushed, never feel judged, and never get a surprise bill. We measure our success by the number of patients who refer their friends — and by the number of kids who ask to come back.
        </motion.p>
      </div>
    </section>

    <section className="bg-[hsl(var(--navy-600))] text-white py-20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}
          className="font-heading text-3xl md:text-4xl font-bold mb-8">Join the Good Doc Family</motion.h2>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1} className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="promo"><Link to="/locations"><MapPin className="w-4 h-4 mr-2" />Find a Location</Link></Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurStory;