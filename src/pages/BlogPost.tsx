import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight, Calendar, Clock, User, Info, AlertTriangle, Tag, CheckCircle, BookOpen } from "lucide-react";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, type BlogSection } from "@/data/blogPosts";
import services from "@/data/services.json";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

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

const categoryLabels: Record<string, string> = {
  preventive: "Preventive", cosmetic: "Cosmetic", emergency: "Emergency",
  kids: "Kids", orthodontics: "Orthodontics", "oral-surgery": "Oral Surgery",
  general: "General", "insurance-finance": "Insurance & Finance",
};

const renderSection = (section: BlogSection, idx: number) => {
  switch (section.type) {
    case "heading":
      return <h2 key={idx} className="font-display text-xl md:text-2xl font-bold text-[hsl(var(--navy-600))] mt-10 mb-4">{section.text}</h2>;
    case "paragraph":
      return <p key={idx} className="text-[hsl(var(--text-body))] text-base md:text-lg leading-relaxed mb-5">{section.text}</p>;
    case "list":
      return (
        <ul key={idx} className="space-y-2.5 mb-6 pl-1">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[hsl(var(--text-body))] text-base leading-relaxed">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--teal-400))] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const styles = {
        tip: { bg: "bg-[hsl(var(--surface-tint))]", icon: <Info className="w-5 h-5 text-[hsl(var(--blue-400))]" /> },
        warning: { bg: "bg-[hsl(var(--coral-50))]", icon: <AlertTriangle className="w-5 h-5 text-[hsl(var(--coral-400))]" /> },
        promo: { bg: "bg-[hsl(var(--gold-50))]", icon: <Tag className="w-5 h-5 text-[hsl(var(--gold-600))]" /> },
      };
      const s = styles[section.calloutType || "tip"];
      return (
        <div key={idx} className={`${s.bg} rounded-xl p-5 mb-6 flex items-start gap-3`}>
          <span className="shrink-0 mt-0.5">{s.icon}</span>
          <p className="text-[hsl(var(--text-body))] text-base leading-relaxed">{section.text}</p>
        </div>
      );
    }
    case "blockquote":
      return (
        <blockquote key={idx} className="border-l-4 border-[hsl(var(--blue-400))] bg-[hsl(var(--surface-tint)/0.5)] px-6 py-4 mb-6 rounded-r-xl">
          <p className="font-accent italic text-lg text-[hsl(var(--navy-600))] leading-relaxed">{section.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
};

const ctaConfigs: Record<string, { bg: string; heading: string; sub: string; btnVariant: "promo" | "emergency" | "default"; showPhone: boolean }> = {
  emergency: { bg: "bg-[hsl(var(--coral-400))]", heading: "Call Now for Same-Day Care", sub: "Emergency exams just $49 — 7 days a week.", btnVariant: "promo", showPhone: true },
  booking: { bg: "bg-[hsl(var(--navy-600))]", heading: "Book Your Visit Today", sub: "23 locations across the Las Vegas valley.", btnVariant: "promo", showPhone: true },
  kids: { bg: "bg-[hsl(var(--surface-tint))]", heading: "Schedule Your Child's First Visit", sub: "Kids special: $95 for exam, x-rays, cleaning & fluoride.", btnVariant: "default", showPhone: true },
  ortho: { bg: "bg-[hsl(var(--navy-600))]", heading: "Get $1,200 Off Invisalign or Braces", sub: "Free consultation at any of our 23 locations.", btnVariant: "promo", showPhone: true },
  implants: { bg: "bg-[hsl(var(--navy-600))]", heading: "Get $1,200 Off Your Implant Package", sub: "Free consultation with 3D CBCT scan included.", btnVariant: "promo", showPhone: true },
  general: { bg: "bg-[hsl(var(--navy-600))]", heading: "Find a Location Near You", sub: "23 offices across Las Vegas, Henderson & North Las Vegas.", btnVariant: "promo", showPhone: true },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = post.relatedSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedServices = post.relatedServiceSlugs.map((s) => services.find((svc: any) => svc.slug === s)).filter(Boolean);
  const cta = ctaConfigs[post.ctaType] || ctaConfigs.general;
  const isLightCTA = post.ctaType === "kids";

  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[hsl(var(--surface-tint))] pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute -left-32 -top-32 w-[400px] h-[400px] rounded-full bg-[hsl(var(--blue-400)/0.06)] blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={reveal} custom={0} className="flex items-center gap-3 mb-4">
              <Link to="/blog" className="font-display text-sm font-semibold text-[hsl(var(--blue-400))] hover:underline">← Blog</Link>
              <span className="text-[hsl(var(--navy-200))]">·</span>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-display font-semibold ${categoryBadgeColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
            </motion.div>
            <motion.h1 variants={reveal} custom={1} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy-600))] mb-5 text-balance leading-tight">
              {post.title}
            </motion.h1>
            <motion.div variants={reveal} custom={2} className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--text-muted))]">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Article Body */}
          <motion.article
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
            className="flex-1 max-w-3xl"
          >
            <motion.div variants={reveal} custom={0}>
              {post.content.map((section, i) => renderSection(section, i))}
            </motion.div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            {/* Related Services */}
            {relatedServices.length > 0 && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <motion.div variants={reveal} custom={0} className="bg-white rounded-2xl border border-[hsl(var(--navy-50))] p-5">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[hsl(var(--blue-400))] mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((svc: any) => (
                      <Link key={svc.slug} to={`/services/${svc.slug}`} className="flex items-center justify-between group">
                        <span className="font-display font-semibold text-sm text-[hsl(var(--navy-600))] group-hover:text-[hsl(var(--blue-400))] transition-colors">{svc.name}</span>
                        <ArrowRight className="w-4 h-4 text-[hsl(var(--blue-400))] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Book CTA */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.div variants={reveal} custom={0} className="bg-[hsl(var(--navy-600))] rounded-2xl p-5 text-center">
                <h3 className="font-display font-bold text-white text-lg mb-2">Book an Appointment</h3>
                <p className="text-sm text-[hsl(var(--navy-200))] mb-4">23 locations across the Las Vegas valley</p>
                <div className="space-y-2">
                  <Link to="/locations" className="block">
                    <Button variant="promo" size="sm" className="w-full gap-2"><MapPin className="w-4 h-4" /> Find a Location</Button>
                  </Link>
                  <a href="tel:+17028522829" className="block">
                    <Button variant="secondary" size="sm" className="w-full border-white text-white hover:bg-white/10 gap-2"><Phone className="w-4 h-4" /> 702-852-2829</Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[hsl(var(--surface-tint))] py-16">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.h2 variants={reveal} custom={0} className="font-display text-2xl font-bold text-[hsl(var(--navy-600))] text-center mb-10">
                You Might Also Like
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedPosts.map((rp: any, i: number) => (
                  <motion.div key={rp.slug} variants={reveal} custom={i + 1}>
                    <Link to={`/blog/${rp.slug}`} className="group block h-full">
                      <div className="bg-white rounded-2xl border border-[hsl(var(--navy-50))] p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <span className={`self-start inline-block px-3 py-1 rounded-full text-xs font-display font-semibold mb-3 ${categoryBadgeColors[rp.category]}`}>
                          {categoryLabels[rp.category]}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-[hsl(var(--navy-600))] mb-2 group-hover:text-[hsl(var(--blue-400))] transition-colors line-clamp-2">
                          {rp.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--text-body))] line-clamp-2 mb-4 flex-1">{rp.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-[hsl(var(--text-muted))]">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(rp.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{rp.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`${cta.bg} py-20`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={reveal} custom={0} className={`font-display text-3xl md:text-4xl font-bold mb-3 ${isLightCTA ? "text-[hsl(var(--navy-600))]" : "text-white"}`}>
              {cta.heading}
            </motion.h2>
            <motion.p variants={reveal} custom={1} className={`text-lg mb-8 ${isLightCTA ? "text-[hsl(var(--text-body))]" : "text-[hsl(var(--navy-200))]"}`}>
              {cta.sub}
            </motion.p>
            <motion.div variants={reveal} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/locations">
                <Button variant={cta.btnVariant} size="lg" className="gap-2"><MapPin className="w-4 h-4" /> Find a Location</Button>
              </Link>
              {cta.showPhone && (
                <a href="tel:+17028522829">
                  <Button variant="secondary" size="lg" className={`gap-2 ${isLightCTA ? "" : "border-white text-white hover:bg-white/10"}`}>
                    <Phone className="w-4 h-4" /> Call 702-852-2829
                  </Button>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
