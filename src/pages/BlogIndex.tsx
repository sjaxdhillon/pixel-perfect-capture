import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const categories = [
  { value: "all", label: "All" },
  { value: "preventive", label: "Preventive" },
  { value: "cosmetic", label: "Cosmetic" },
  { value: "emergency", label: "Emergency" },
  { value: "kids", label: "Kids" },
  { value: "orthodontics", label: "Orthodontics" },
  { value: "oral-surgery", label: "Oral Surgery" },
  { value: "insurance-finance", label: "Insurance & Finance" },
  { value: "general", label: "General" },
];

const categoryBadgeColors: Record<string, string> = {
  preventive: "bg-[hsl(var(--teal-50))] text-[hsl(var(--teal-600))]",
  cosmetic: "bg-[hsl(var(--blue-50))] text-[hsl(var(--blue-600))]",
  emergency: "bg-[hsl(var(--coral-50))] text-[hsl(var(--coral-600))]",
  kids: "bg-[hsl(var(--gold-50))] text-[hsl(var(--gold-800))]",
  orthodontics: "bg-[hsl(var(--blue-50))] text-[hsl(var(--blue-600))]",
  "oral-surgery": "bg-[hsl(var(--navy-50))] text-[hsl(var(--navy-600))]",
  general: "bg-[hsl(var(--navy-50))] text-[hsl(var(--navy-400))]",
  "insurance-finance": "bg-[hsl(var(--gold-50))] text-[hsl(var(--gold-800))]",
};

const promos = [
  { text: "$49 Emergency Exam", href: "/services/emergency-dental-care" },
  { text: "$95 Kids Special", href: "/services/kids-dentistry" },
  { text: "$1,200 Off Invisalign", href: "/services/invisalign" },
  { text: "$1,200 Off Implants", href: "/services/dental-implants" },
  { text: "All 4 Wisdom Teeth — $1,899", href: "/services/wisdom-tooth-extractions" },
];

const BlogIndex = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = blogPosts.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const featured = blogPosts[0];
  const gridPosts = activeCategory === "all" ? filtered.slice(1) : filtered;

  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[hsl(var(--surface-tint))] pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-[hsl(var(--blue-400)/0.06)] blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center max-w-2xl mx-auto">
            <motion.div variants={reveal} custom={0} className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[hsl(var(--blue-400))]" />
              <span className="font-display font-semibold text-sm uppercase tracking-wider text-[hsl(var(--blue-400))]">Blog</span>
            </motion.div>
            <motion.h1 variants={reveal} custom={1} className="font-display text-4xl md:text-5xl font-bold text-[hsl(var(--navy-600))] mb-4 text-balance">
              The Good Doc Blog
            </motion.h1>
            <motion.p variants={reveal} custom={2} className="font-accent italic text-lg text-[hsl(var(--text-body))]">
              Dental tips, guides, and straight talk — no jargon, no fluff.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-[hsl(var(--navy-50))]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-display font-semibold transition-all duration-200 active:scale-[0.97] ${
                  activeCategory === cat.value
                    ? "bg-[hsl(var(--blue-400))] text-white shadow-md"
                    : "bg-white text-[hsl(var(--navy-600))] border border-[hsl(var(--navy-50))] hover:border-[hsl(var(--blue-400))] hover:text-[hsl(var(--blue-400))]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "all" && (
        <section className="container mx-auto px-4 py-12 md:py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Link to={`/blog/${featured.slug}`}>
              <motion.div
                variants={reveal} custom={0}
                className="bg-[hsl(var(--navy-600))] rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-display font-semibold mb-4 ${categoryBadgeColors[featured.category]}`}>
                  {categories.find(c => c.value === featured.category)?.label}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[hsl(var(--gold-400))] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[hsl(var(--navy-200))] text-base md:text-lg mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[hsl(var(--navy-200))]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(featured.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-6 font-display font-semibold text-[hsl(var(--blue-200))] group-hover:text-white transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Post Grid */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gridPosts.map((post, i) => (
            <motion.div key={post.slug} variants={reveal} custom={i}>
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl border border-[hsl(var(--navy-50))] p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <span className={`self-start inline-block px-3 py-1 rounded-full text-xs font-display font-semibold mb-3 ${categoryBadgeColors[post.category]}`}>
                    {categories.find(c => c.value === post.category)?.label}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[hsl(var(--navy-600))] mb-2 group-hover:text-[hsl(var(--blue-400))] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--text-body))] line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[hsl(var(--text-muted))]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Promos */}
      <section className="bg-[hsl(var(--gold-50))] py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={reveal} custom={0} className="font-display text-2xl font-bold text-[hsl(var(--navy-600))] text-center mb-8">
              Current Specials
            </motion.h2>
            <motion.div variants={reveal} custom={1} className="flex flex-wrap justify-center gap-3">
              {promos.map((p) => (
                <Link key={p.text} to={p.href}>
                  <Button variant="promo" size="sm">{p.text}</Button>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[hsl(var(--navy-600))] py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={reveal} custom={0} className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book?
            </motion.h2>
            <motion.div variants={reveal} custom={1} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/locations">
                <Button variant="promo" size="lg" className="gap-2">
                  <MapPin className="w-4 h-4" /> Find a Location
                </Button>
              </Link>
              <a href="tel:+17028522829">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10 gap-2">
                  <Phone className="w-4 h-4" /> Call 702-852-2829
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndex;
