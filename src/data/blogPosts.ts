export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "callout" | "blockquote";
  text?: string;
  items?: string[];
  calloutType?: "tip" | "warning" | "promo";
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "preventive" | "cosmetic" | "emergency" | "kids" | "orthodontics" | "oral-surgery" | "general" | "insurance-finance";
  publishDate: string;
  author: string;
  authorRole: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: BlogSection[];
  relatedSlugs: string[];
  relatedServiceSlugs: string[];
  ctaType: "emergency" | "booking" | "kids" | "ortho" | "implants" | "general";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-at-your-first-dental-visit",
    title: "What to Expect at Your First Dental Visit at Good Doc Dental",
    metaTitle: "Your First Dental Visit | What to Expect | Good Doc Dental",
    metaDescription: "Nervous about your first visit? Here's exactly what happens — step by step — so there are zero surprises at Good Doc Dental.",
    category: "general",
    publishDate: "2026-01-15",
    author: "Good Doc Dental Team",
    authorRole: "Editorial Team",
    readTime: "4 min read",
    heroImage: "/images/blog/what-to-expect-at-your-first-dental-visit.jpg",
    excerpt: "Nervous about your first visit? Here's exactly what happens — step by step — so there are zero surprises.",
    content: [
      { type: "paragraph", text: "Walking into a new dental office for the first time can feel a little nerve-wracking — we get it. Maybe it's been a while since your last visit, or maybe you're switching from another practice. Either way, we want you to know exactly what's going to happen so there are absolutely zero surprises." },
      { type: "heading", text: "What to Bring With You" },
      { type: "list", items: [
        "A valid photo ID (driver's license or state ID)",
        "Your insurance card, if you have one — we accept most major plans",
        "A list of any medications you're currently taking",
        "Any recent dental records or x-rays, if available"
      ]},
      { type: "callout", text: "Don't have insurance? No worries at all. Many of our patients pay out of pocket, and our prices are often lower than insured copays at other offices. Ask about our $49 emergency exam or $95 kids special.", calloutType: "tip" },
      { type: "heading", text: "The Check-In Process" },
      { type: "paragraph", text: "When you arrive, our front desk team will greet you by name (yes, really). We'll get your paperwork squared away — you can also fill out forms online ahead of time at our Patient Forms page. The whole check-in takes about 5 minutes." },
      { type: "heading", text: "Your Exam and Cleaning" },
      { type: "paragraph", text: "Your dentist will do a thorough exam of your teeth, gums, and mouth. We use digital x-rays, which means 80% less radiation than the old-school film kind. Your hygienist will then do a professional cleaning — removing plaque and tartar that regular brushing can't reach." },
      { type: "blockquote", text: "We believe everyone deserves a dentist who actually listens. That's why we build in extra time for your first visit — so we can answer every single question you have." },
      { type: "heading", text: "Your Treatment Plan" },
      { type: "paragraph", text: "If we find anything that needs attention, we'll walk you through your options in plain English — no confusing dental jargon. We'll go over costs, timelines, and help you figure out the best path forward based on your budget and priorities." },
      { type: "callout", text: "Every new patient gets a free benefits check. We'll call your insurance company for you and find out exactly what's covered before you commit to anything.", calloutType: "promo" }
    ],
    relatedSlugs: ["how-often-should-you-go-to-the-dentist", "how-to-pay-for-dental-work-without-insurance", "are-dental-x-rays-safe"],
    relatedServiceSlugs: ["dental-exams", "dental-cleanings"],
    ctaType: "booking"
  },
  {
    slug: "dental-emergency-what-to-do",
    title: "Dental Emergency? Here's Exactly What to Do (and What NOT to Do)",
    metaTitle: "Dental Emergency Guide | What to Do | Good Doc Dental",
    metaDescription: "Knocked-out tooth? Severe pain? Swelling? Don't panic — here's your step-by-step emergency dental guide from Good Doc Dental.",
    category: "emergency",
    publishDate: "2026-01-22",
    author: "Good Doc Dental Team",
    authorRole: "Editorial Team",
    readTime: "5 min read",
    heroImage: "/images/blog/dental-emergency-what-to-do.jpg",
    excerpt: "Knocked-out tooth? Severe pain? Swelling? Don't panic — here's your step-by-step emergency guide.",
    content: [
      { type: "paragraph", text: "Dental emergencies don't wait for business hours. A tooth gets knocked out at a Saturday soccer game. You wake up at 3 a.m. with throbbing pain. Your kid bites into something and cracks a tooth. When these moments happen, knowing what to do — and what NOT to do — can be the difference between saving a tooth and losing one." },
      { type: "heading", text: "What Counts as a Dental Emergency?" },
      { type: "list", items: [
        "A knocked-out (avulsed) tooth",
        "A broken, cracked, or chipped tooth with pain or sharp edges",
        "Severe, persistent toothache that won't respond to over-the-counter pain relief",
        "Swelling in your face, jaw, or gums — especially with fever",
        "An abscess (a painful bump on your gums that may be draining pus)",
        "Uncontrolled bleeding after an extraction or injury"
      ]},
      { type: "heading", text: "Knocked-Out Tooth: Your 30-Minute Window" },
      { type: "paragraph", text: "If a permanent tooth gets knocked out, time matters. Pick it up by the crown (the white part) — never touch the root. If it's dirty, gently rinse it with milk or saline. Try to place it back in the socket and hold it there. If you can't, keep it in a glass of milk. Get to us within 30 minutes and there's a good chance we can save it." },
      { type: "callout", text: "Never scrub a knocked-out tooth, wrap it in tissue, or let it dry out. These are the most common mistakes people make — and they can mean the difference between saving the tooth and needing an implant.", calloutType: "warning" },
      { type: "heading", text: "Severe Toothache" },
      { type: "paragraph", text: "Rinse with warm salt water. Take ibuprofen (not aspirin, which can increase bleeding). Apply a cold compress to the outside of your cheek — 15 minutes on, 15 minutes off. Then call us. A toothache that doesn't go away typically means there's an infection or decay that needs professional treatment." },
      { type: "heading", text: "When to Go to the ER vs. the Dentist" },
      { type: "paragraph", text: "The ER is the right call if you have uncontrolled bleeding, difficulty breathing or swallowing, a broken jaw, or trauma from an accident that involves head/neck injuries. For everything else — pain, swelling, broken teeth, abscesses — you'll get faster, more specialized care at a dental office." },
      { type: "callout", text: "Good Doc Dental offers same-day emergency appointments 7 days a week for just $49. No waiting in an ER. No referral needed. Walk in or call.", calloutType: "promo" },
      { type: "heading", text: "What NOT to Do" },
      { type: "list", items: [
        "Don't put aspirin directly on your gums (it causes chemical burns)",
        "Don't ignore swelling — it can spread to your airway",
        "Don't try to glue a broken tooth back together",
        "Don't wait and 'hope it goes away' — infections only get worse"
      ]}
    ],
    relatedSlugs: ["wisdom-teeth-removal-what-to-expect", "what-to-expect-at-your-first-dental-visit", "are-dental-x-rays-safe"],
    relatedServiceSlugs: ["emergency-dental-care", "tooth-extractions"],
    ctaType: "emergency"
  },
  {
    slug: "invisalign-vs-braces-which-is-right-for-you",
    title: "Invisalign vs. Braces: Which Is Right for You?",
    metaTitle: "Invisalign vs Braces Comparison | Cost & Results | Good Doc Dental",
    metaDescription: "Clear aligners or metal brackets? We break down cost, comfort, treatment time, and results so you can decide. From $2,900 at Good Doc Dental.",
    category: "orthodontics",
    publishDate: "2026-02-03",
    author: "Good Doc Dental Team",
    authorRole: "Orthodontic Team",
    readTime: "6 min read",
    heroImage: "/images/blog/invisalign-vs-braces-which-is-right-for-you.jpg",
    excerpt: "Clear aligners or metal brackets? We break down cost, comfort, treatment time, and results so you can decide.",
    content: [
      { type: "paragraph", text: "So you've decided to straighten your teeth — great call. But now comes the big question: Invisalign or traditional braces? Both get results, but they work differently, feel different, and cost different amounts. Let's break it all down so you can make the right choice for your life." },
      { type: "heading", text: "How Each One Works" },
      { type: "paragraph", text: "Traditional braces use metal brackets bonded to your teeth, connected by wires that are tightened over time to shift teeth into position. Invisalign uses a series of custom-made clear plastic trays (aligners) that you swap out every 1–2 weeks. Each set moves your teeth a tiny bit closer to the final goal." },
      { type: "heading", text: "Treatment Timeline" },
      { type: "paragraph", text: "Braces typically take 12–24 months. Invisalign may take 6–18 months for mild to moderate cases, though complex cases can take longer. Your treatment plan is customized either way — we'll give you a clear timeline at your free consultation." },
      { type: "heading", text: "Comfort and Appearance" },
      { type: "paragraph", text: "Invisalign wins on both counts for most people. The aligners are nearly invisible, and you can remove them to eat, brush, and floss. Braces are more visible (though ceramic options help) and can cause irritation on your cheeks and lips, especially early on." },
      { type: "heading", text: "Cost at Good Doc Dental" },
      { type: "paragraph", text: "Here's where we differ from most offices: at Good Doc Dental, both Invisalign and braces start at $2,900 and go up to about $5,950 depending on complexity. That's significantly below the national average for both options." },
      { type: "callout", text: "Right now, we're offering $1,200 off Invisalign or traditional braces. Plus, every ortho case starts with a free consultation — no commitment, no pressure.", calloutType: "promo" },
      { type: "heading", text: "Which Is Better for Your Case?" },
      { type: "list", items: [
        "Mild to moderate crowding or spacing → Invisalign typically works great",
        "Severe bite issues (overbite, underbite, crossbite) → Braces may be more effective",
        "Teens who might lose aligners → Braces are often the safer bet",
        "Adults who want discretion → Invisalign is the clear winner (pun intended)",
        "Budget-conscious patients → Both are the same price at GDD, so choose based on lifestyle"
      ]},
      { type: "blockquote", text: "The best orthodontic treatment is the one you'll actually follow through with. If you won't wear aligners 22 hours a day, braces might be the smarter choice — and there's no shame in that." }
    ],
    relatedSlugs: ["how-to-get-your-kids-excited-about-the-dentist", "how-to-pay-for-dental-work-without-insurance", "what-to-expect-at-your-first-dental-visit"],
    relatedServiceSlugs: ["invisalign", "traditional-braces", "adult-orthodontics"],
    ctaType: "ortho"
  },
  {
    slug: "how-to-get-your-kids-excited-about-the-dentist",
    title: "How to Get Your Kids Excited About the Dentist (Yes, Really)",
    metaTitle: "Kids & the Dentist | Tips to Build Excitement | Good Doc Dental",
    metaDescription: "Dental anxiety starts early — but so does dental confidence. Here's how to make the dentist something your kids look forward to.",
    category: "kids",
    publishDate: "2026-02-10",
    author: "Good Doc Dental Team",
    authorRole: "Pediatric Team",
    readTime: "5 min read",
    heroImage: "/images/blog/how-to-get-your-kids-excited-about-the-dentist.jpg",
    excerpt: "Dental anxiety starts early — but so does dental confidence. Here's how to make the dentist something your kids look forward to.",
    content: [
      { type: "paragraph", text: "Here's a stat that might surprise you: about 20% of kids have significant dental anxiety. That fear usually starts from a bad experience — or from absorbing their parents' anxiety. The good news? You can absolutely flip the script. With a little preparation, the dentist can become something your child actually looks forward to." },
      { type: "heading", text: "Start Earlier Than You Think" },
      { type: "paragraph", text: "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 — or within 6 months of their first tooth appearing. That sounds early, but early visits are gentle and short. The goal isn't a deep cleaning — it's building familiarity so the dental office feels like a normal, safe place." },
      { type: "heading", text: "Choose the Right Office" },
      { type: "paragraph", text: "Not every dental office is built for kids. At Good Doc Dental, we have 7 kid-focused locations across the Las Vegas valley with colorful themed rooms, kid-sized chairs, TVs on the ceiling, and a prize wall for after the visit. The environment matters — it's the difference between walking into a sterile medical office and walking into a place that feels like it was designed for your child." },
      { type: "callout", text: "Our $95 Kids Special includes a full exam, x-rays, cleaning, and fluoride treatment — everything your child needs in one visit, one price, no surprises.", calloutType: "promo" },
      { type: "heading", text: "Prep at Home" },
      { type: "list", items: [
        "Role-play dentist visits with stuffed animals — let your child be the dentist",
        "Read kid-friendly books about going to the dentist (we love 'The Berenstain Bears Visit the Dentist')",
        "Watch kid-appropriate videos about dental visits on YouTube",
        "Use positive language — say 'the dentist will count your teeth' instead of 'it won't hurt'",
        "Never use the dentist as a threat ('If you don't brush, the dentist will have to drill!')"
      ]},
      { type: "heading", text: "What We Do Differently" },
      { type: "paragraph", text: "Our pediatric-trained team knows how to work with anxious kids. We use tell-show-do techniques — we explain what we're going to do, show them the tools, then gently proceed. We never hold a child down or force treatment. If a child isn't ready, we stop and try again another day. Building trust is more important than getting through a checklist." },
      { type: "blockquote", text: "A child who feels safe at the dentist at age 4 becomes a teenager who takes care of their teeth — and an adult who never misses a checkup. That's the long game we're playing." },
      { type: "heading", text: "Positive Reinforcement Goes a Long Way" },
      { type: "paragraph", text: "After the visit, celebrate! Let them pick a prize from our prize wall. Tell them how proud you are. Avoid bribing them beforehand ('If you're good, you'll get ice cream') — instead, make the visit itself the positive experience. Over time, the dentist becomes associated with good feelings, not fear." }
    ],
    relatedSlugs: ["what-to-expect-at-your-first-dental-visit", "how-often-should-you-go-to-the-dentist", "are-dental-x-rays-safe"],
    relatedServiceSlugs: ["kids-dentistry", "baby-toddler-dentistry"],
    ctaType: "kids"
  },
  {
    slug: "dental-implants-complete-guide",
    title: "Dental Implants: The Complete Guide to Cost, Process, and Recovery",
    metaTitle: "Dental Implants Guide | Cost, Process, Recovery | Good Doc Dental",
    metaDescription: "Everything you need to know about dental implants — from the first consultation to your final crown. Starting at $1,800 at Good Doc Dental.",
    category: "oral-surgery",
    publishDate: "2026-02-18",
    author: "Good Doc Dental Team",
    authorRole: "Surgical Team",
    readTime: "7 min read",
    heroImage: "/images/blog/dental-implants-complete-guide.jpg",
    excerpt: "Everything you need to know about dental implants — from the first consultation to your final crown.",
    content: [
      { type: "paragraph", text: "Missing a tooth — or several — affects more than your smile. It can change how you eat, how you speak, and how you feel about yourself. Dental implants are the gold standard for tooth replacement, and at Good Doc Dental, we've made them more accessible than you might think." },
      { type: "heading", text: "What Exactly Is a Dental Implant?" },
      { type: "paragraph", text: "A dental implant is a small titanium post that's placed into your jawbone, where it acts as an artificial tooth root. Once it heals and fuses with the bone (a process called osseointegration), we attach a custom-made crown on top that looks, feels, and functions like a natural tooth." },
      { type: "heading", text: "Who's a Good Candidate?" },
      { type: "list", items: [
        "Adults with one or more missing teeth",
        "People with enough jawbone density to support the implant (or willing to do bone grafting)",
        "Non-smokers, or those willing to quit during the healing period",
        "Patients in overall good health without uncontrolled diabetes or immune disorders"
      ]},
      { type: "heading", text: "The Step-by-Step Process" },
      { type: "list", items: [
        "Step 1: Free consultation with CBCT 3D scan to evaluate your bone and plan placement",
        "Step 2: Implant placement surgery (typically 30–60 minutes per implant under local anesthesia or sedation)",
        "Step 3: Healing period of 3–6 months while the implant fuses with your jawbone",
        "Step 4: Abutment placement — a small connector piece is attached to the implant",
        "Step 5: Custom crown fabrication and placement — your new tooth is complete"
      ]},
      { type: "heading", text: "Cost at Good Doc Dental" },
      { type: "paragraph", text: "A single dental implant at Good Doc Dental typically costs $1,800–$2,200, which includes the implant, abutment, and crown. That's well below the national average of $3,000–$5,000. For multiple teeth, implant-supported bridges or dentures may be more cost-effective." },
      { type: "callout", text: "Get $1,200 off a complete implant package right now. This includes the implant, abutment, crown, and all follow-up visits. Free consultation included.", calloutType: "promo" },
      { type: "heading", text: "Implants vs. Bridges vs. Dentures" },
      { type: "paragraph", text: "Bridges require grinding down healthy adjacent teeth. Dentures can slip and don't prevent bone loss. Implants preserve your jawbone, don't affect neighboring teeth, and can last a lifetime with proper care. They cost more upfront but typically save money long-term." },
      { type: "heading", text: "Recovery Tips" },
      { type: "list", items: [
        "Stick to soft foods for the first week (smoothies, yogurt, mashed potatoes, soup)",
        "Use ice packs for the first 48 hours — 15 minutes on, 15 off",
        "Take prescribed medications as directed",
        "Avoid smoking, straws, and vigorous rinsing for at least 72 hours",
        "Most patients return to normal activities within 2–3 days"
      ]},
      { type: "callout", text: "Implant success rates are typically 95–98% when placed by an experienced surgeon and maintained with good oral hygiene.", calloutType: "tip" }
    ],
    relatedSlugs: ["wisdom-teeth-removal-what-to-expect", "how-to-pay-for-dental-work-without-insurance", "what-to-expect-at-your-first-dental-visit"],
    relatedServiceSlugs: ["dental-implants", "implant-supported-dentures", "dental-crowns"],
    ctaType: "implants"
  },
  {
    slug: "how-to-pay-for-dental-work-without-insurance",
    title: "How to Pay for Dental Work Without Insurance",
    metaTitle: "Dental Care Without Insurance | Affordable Options | Good Doc Dental",
    metaDescription: "No dental insurance? You still deserve great care. Here are your affordable options at Good Doc Dental in Las Vegas.",
    category: "insurance-finance",
    publishDate: "2026-02-24",
    author: "Good Doc Dental Team",
    authorRole: "Editorial Team",
    readTime: "5 min read",
    heroImage: "/images/blog/how-to-pay-for-dental-work-without-insurance.jpg",
    excerpt: "No dental insurance? You still deserve great care. Here are your options at Good Doc Dental.",
    content: [
      { type: "paragraph", text: "About 74 million Americans don't have dental insurance. If you're one of them, you've probably put off dental work because you assumed you couldn't afford it. Here's the thing: at Good Doc Dental, our cash-pay prices are often lower than what insured patients pay in copays at other offices. Seriously." },
      { type: "heading", text: "Our Cash-Pay Pricing" },
      { type: "paragraph", text: "We keep our prices transparent and competitive. A standard exam runs $0–$75. Cleanings start at $75. Fillings are $120–$220. These are all-in prices — no surprise fees, no hidden charges. Compare that to your typical dental office where an exam alone can run $150–$300." },
      { type: "callout", text: "Our $49 emergency exam and $95 kids special are available to everyone — insured or not. These are among the lowest prices in the Las Vegas valley.", calloutType: "promo" },
      { type: "heading", text: "Financing Options" },
      { type: "list", items: [
        "Sunbit financing: Apply in 30 seconds, get approved for 3, 6, or 12-month plans with low or no interest",
        "CareCredit: A healthcare credit card accepted at all our locations",
        "In-house payment plans: For larger treatments, we can often set up a custom payment schedule",
        "Most plans require no hard credit check and have instant approval"
      ]},
      { type: "heading", text: "How to Prioritize When Budget Is Tight" },
      { type: "paragraph", text: "If you need multiple treatments but can't do everything at once, we'll help you prioritize. Pain and infection always come first. Then we focus on preventing small problems from becoming big (expensive) ones. A $150 filling today may save you from a $1,200 crown next year." },
      { type: "blockquote", text: "We'd rather see you for affordable preventive care every six months than have you show up in pain two years from now needing $5,000 in work. Prevention is always the cheapest option." },
      { type: "heading", text: "Free Benefits Check" },
      { type: "paragraph", text: "Even if you think you don't have dental coverage, you might be surprised. Many health plans, Medicare Advantage plans, and employer benefits include dental that people don't know about. Our team will run a free benefits check for you — we call your insurance company and find out exactly what's covered." },
      { type: "callout", text: "Visit our Financing page or Insurance page for a full breakdown of payment options and accepted plans.", calloutType: "tip" }
    ],
    relatedSlugs: ["what-to-expect-at-your-first-dental-visit", "how-often-should-you-go-to-the-dentist", "dental-implants-complete-guide"],
    relatedServiceSlugs: ["dental-exams", "dental-cleanings"],
    ctaType: "general"
  },
  {
    slug: "wisdom-teeth-removal-what-to-expect",
    title: "Wisdom Teeth Removal: What to Expect Before, During, and After",
    metaTitle: "Wisdom Teeth Removal Guide | Process & Recovery | Good Doc Dental",
    metaDescription: "Getting your wisdom teeth out? Here's the honest truth about the procedure, recovery, and cost at Good Doc Dental.",
    category: "oral-surgery",
    publishDate: "2026-03-01",
    author: "Good Doc Dental Team",
    authorRole: "Surgical Team",
    readTime: "6 min read",
    heroImage: "/images/blog/wisdom-teeth-removal-what-to-expect.jpg",
    excerpt: "Getting your wisdom teeth out? Here's the honest truth about the procedure, recovery, and cost.",
    content: [
      { type: "paragraph", text: "Wisdom teeth removal is one of the most common dental procedures — about 10 million wisdom teeth are extracted in the U.S. every year. If yours are coming in and causing trouble (or your dentist says they will), here's everything you need to know about what happens before, during, and after." },
      { type: "heading", text: "Why Do Wisdom Teeth Need to Come Out?" },
      { type: "paragraph", text: "Most people's mouths simply don't have room for a third set of molars. When wisdom teeth are impacted (stuck under the gum or growing sideways), they can cause pain, infection, damage to adjacent teeth, cysts, and crowding. Not everyone needs them removed — but most people do." },
      { type: "heading", text: "Signs Your Wisdom Teeth Are Coming In" },
      { type: "list", items: [
        "Pain or pressure in the back of your jaw",
        "Swollen, tender, or bleeding gums behind your last molar",
        "Headaches or earaches on one side",
        "Bad breath or a bad taste that won't go away",
        "Difficulty opening your mouth fully"
      ]},
      { type: "heading", text: "The Consultation" },
      { type: "paragraph", text: "At Good Doc Dental, your wisdom teeth consultation is free. We'll take a panoramic x-ray or CBCT scan to see exactly where your wisdom teeth are, how they're positioned, and whether they need to come out. We'll walk you through your options in plain English." },
      { type: "heading", text: "Sedation Options" },
      { type: "list", items: [
        "Local anesthesia: You're awake but completely numb — good for simple extractions",
        "Nitrous oxide (laughing gas): Takes the edge off while keeping you conscious",
        "Oral sedation: A pill that makes you drowsy and relaxed — you won't remember much",
        "IV sedation: Deep relaxation, ideal for removing all four teeth at once or anxious patients"
      ]},
      { type: "heading", text: "Day-by-Day Recovery" },
      { type: "list", items: [
        "Day 1: Rest, ice your cheeks, eat soft cold foods (ice cream, smoothies, yogurt)",
        "Days 2–3: Swelling typically peaks — keep using ice and take prescribed medication",
        "Days 4–5: Swelling starts to go down, you can introduce warmer soft foods",
        "Days 6–7: Most patients feel significantly better and can return to normal activities",
        "Days 10–14: Stitches dissolve (if used) and you're back to eating normally"
      ]},
      { type: "callout", text: "All four wisdom teeth removed for $1,899 at Good Doc Dental — that includes the procedure, sedation, and all follow-up visits. Free consultation to get started.", calloutType: "promo" },
      { type: "heading", text: "When to Call Us After Surgery" },
      { type: "paragraph", text: "Some discomfort and swelling is normal. But call us right away if you have a fever over 101°F, uncontrolled bleeding, severe pain that gets worse after day 3, numbness that doesn't go away, or difficulty swallowing or breathing. These are rare but we want to catch them early." }
    ],
    relatedSlugs: ["dental-emergency-what-to-do", "dental-implants-complete-guide", "are-dental-x-rays-safe"],
    relatedServiceSlugs: ["wisdom-tooth-extractions", "dental-sedation"],
    ctaType: "general"
  },
  {
    slug: "best-teeth-whitening-options",
    title: "Teeth Whitening: Professional vs. At-Home — What Actually Works?",
    metaTitle: "Teeth Whitening Options Compared | Good Doc Dental",
    metaDescription: "Whitening strips, LED kits, professional treatment — we cut through the noise and tell you what actually delivers results.",
    category: "cosmetic",
    publishDate: "2026-03-05",
    author: "Good Doc Dental Team",
    authorRole: "Cosmetic Team",
    readTime: "5 min read",
    heroImage: "/images/blog/best-teeth-whitening-options.jpg",
    excerpt: "Whitening strips, LED kits, professional treatment — we cut through the noise and tell you what actually delivers results.",
    content: [
      { type: "paragraph", text: "Teeth whitening is a billion-dollar industry — and that means a lot of products competing for your money. Some work. Some don't. Some can actually damage your teeth. Let's cut through the noise and talk about what actually delivers results." },
      { type: "heading", text: "Why Do Teeth Stain?" },
      { type: "paragraph", text: "The usual suspects: coffee, tea, red wine, dark berries, tobacco, and just plain aging. Your enamel develops micro-cracks over time that trap stain-causing molecules. Some medications (like tetracycline) can cause deeper, intrinsic staining that surface treatments can't fully address." },
      { type: "heading", text: "Over-the-Counter Options" },
      { type: "list", items: [
        "Whitening strips (Crest, etc.): Mild results over 1–2 weeks, can cause sensitivity. Typically 2–4 shades lighter.",
        "LED whitening kits: Marketing hype is strong, but studies show the LED light doesn't add much benefit beyond the gel alone.",
        "Whitening toothpaste: Good for maintenance but won't dramatically change your shade.",
        "Whitening pens: Convenient but very mild results — good for touch-ups, not transformations."
      ]},
      { type: "heading", text: "Professional In-Office Whitening" },
      { type: "paragraph", text: "Professional whitening at Good Doc Dental costs $350–$550 and typically delivers 6–8 shades of improvement in a single visit. We use a higher-concentration peroxide gel with protective barriers for your gums. The whole process takes about 60–90 minutes." },
      { type: "callout", text: "Professional whitening is 3–5x more effective than over-the-counter strips, and the results are visible immediately. One session may be all you need.", calloutType: "tip" },
      { type: "heading", text: "Sensitivity Concerns" },
      { type: "paragraph", text: "Some sensitivity during and after whitening is normal — it typically fades within 24–48 hours. We can adjust the concentration and application time based on your sensitivity level. If you have very sensitive teeth, we may recommend a take-home tray system with a gentler formula." },
      { type: "heading", text: "When Veneers Might Be Better" },
      { type: "paragraph", text: "Whitening works great on surface stains. But if you have intrinsic staining, uneven coloring, or chips and gaps you also want to address, porcelain veneers may give you a better overall result. Veneers at Good Doc Dental start at $850 per tooth." },
      { type: "blockquote", text: "The best whitening result is the one that looks natural. Nobody should look at your teeth and think 'those are too white' — they should just think 'great smile.'" }
    ],
    relatedSlugs: ["how-often-should-you-go-to-the-dentist", "what-to-expect-at-your-first-dental-visit", "how-to-pay-for-dental-work-without-insurance"],
    relatedServiceSlugs: ["teeth-whitening", "porcelain-veneers", "smile-makeovers"],
    ctaType: "general"
  },
  {
    slug: "how-often-should-you-go-to-the-dentist",
    title: "How Often Should You Really Go to the Dentist?",
    metaTitle: "How Often to Visit the Dentist | Expert Advice | Good Doc Dental",
    metaDescription: "Twice a year? More? Less? Here's what the science says — and why it might be different for you.",
    category: "preventive",
    publishDate: "2026-03-10",
    author: "Good Doc Dental Team",
    authorRole: "Editorial Team",
    readTime: "4 min read",
    heroImage: "/images/blog/how-often-should-you-go-to-the-dentist.jpg",
    excerpt: "Twice a year? More? Less? Here's what the science says — and why it might be different for you.",
    content: [
      { type: "paragraph", text: "You've heard it your whole life: 'Go to the dentist twice a year.' But is that actually right for everyone? The short answer: it's a great starting point, but some people need more frequent visits — and knowing which camp you fall into can save you a lot of money and discomfort down the road." },
      { type: "heading", text: "The Standard Recommendation" },
      { type: "paragraph", text: "For most healthy adults and children, twice-yearly checkups (every 6 months) are the sweet spot. This gives us enough time to catch cavities early, monitor gum health, and do a professional cleaning that removes tartar buildup your toothbrush can't handle." },
      { type: "heading", text: "Who Might Need More Frequent Visits?" },
      { type: "list", items: [
        "People with gum disease (periodontal disease) — may need cleanings every 3–4 months",
        "Diabetics — higher risk for gum infections and slower healing",
        "Smokers and tobacco users — significantly higher risk for gum disease and oral cancer",
        "Pregnant women — hormonal changes can worsen gum inflammation",
        "Patients with braces or other orthodontic devices — harder to clean, more cavity risk",
        "People with a history of frequent cavities"
      ]},
      { type: "heading", text: "What Happens When You Skip Visits" },
      { type: "paragraph", text: "Cavities don't send you a warning text. By the time a tooth hurts, the decay has often reached the nerve — which means a root canal instead of a simple filling. Gum disease progresses silently too. What starts as reversible gingivitis can become irreversible bone loss that leads to loose teeth." },
      { type: "callout", text: "A routine exam and cleaning at Good Doc Dental runs $0–$75 for the exam and $75+ for the cleaning. Most insurance plans cover preventive visits at 100%. That's a small price to catch a $150 filling before it becomes a $1,200 crown.", calloutType: "tip" },
      { type: "heading", text: "Haven't Been in Years? No Judgment." },
      { type: "paragraph", text: "We see patients every day who haven't been to a dentist in 3, 5, even 10+ years. Life happens. We're not here to lecture you — we're here to help you get back on track. We'll assess where things stand, prioritize what needs attention, and build a plan that works for your budget." },
      { type: "blockquote", text: "The best time to go to the dentist was six months ago. The second best time is today." }
    ],
    relatedSlugs: ["what-to-expect-at-your-first-dental-visit", "are-dental-x-rays-safe", "how-to-pay-for-dental-work-without-insurance"],
    relatedServiceSlugs: ["dental-exams", "dental-cleanings", "deep-cleanings"],
    ctaType: "booking"
  },
  {
    slug: "are-dental-x-rays-safe",
    title: "Are Dental X-Rays Safe? Everything You Need to Know",
    metaTitle: "Are Dental X-Rays Safe? | Radiation Facts | Good Doc Dental",
    metaDescription: "Worried about radiation? Here's the truth about dental x-ray safety — including why digital x-rays changed everything.",
    category: "preventive",
    publishDate: "2026-03-15",
    author: "Good Doc Dental Team",
    authorRole: "Editorial Team",
    readTime: "4 min read",
    heroImage: "/images/blog/are-dental-x-rays-safe.jpg",
    excerpt: "Worried about radiation? Here's the truth about dental x-ray safety — including why digital x-rays changed everything.",
    content: [
      { type: "paragraph", text: "It's one of the most common questions we hear: 'Are dental x-rays safe?' The concern makes sense — nobody wants unnecessary radiation exposure. The good news is that modern dental x-rays, especially the digital kind we use at Good Doc Dental, involve incredibly low levels of radiation." },
      { type: "heading", text: "Types of Dental X-Rays" },
      { type: "list", items: [
        "Bitewing x-rays: Show cavities between teeth, taken during routine checkups",
        "Periapical x-rays: Show the entire tooth from crown to root, used for diagnosing infections",
        "Panoramic x-rays: A single wide image of your entire mouth, jaw, and sinuses",
        "CBCT scans: 3D imaging for implant planning, wisdom teeth, and complex cases"
      ]},
      { type: "heading", text: "How Much Radiation Are We Talking About?" },
      { type: "paragraph", text: "A set of 4 bitewing x-rays delivers about 0.005 mSv of radiation. To put that in perspective: you get more radiation from a 2-hour airplane flight (0.01 mSv), from a day of natural background radiation (0.008 mSv), or even from eating a banana (0.0001 mSv). It's an incredibly small amount." },
      { type: "callout", text: "Digital x-rays — the kind we use at every Good Doc Dental location — produce up to 80% less radiation than traditional film x-rays. It's one of many reasons we've invested in modern technology across all 23 offices.", calloutType: "tip" },
      { type: "heading", text: "How Often Do You Need X-Rays?" },
      { type: "paragraph", text: "For healthy adults with no current dental issues, bitewing x-rays are typically taken once a year. A full set of x-rays may be taken every 3–5 years. For patients with active decay, gum disease, or other concerns, we may recommend x-rays more frequently. Children and teens may need them more often because their teeth are still developing." },
      { type: "heading", text: "X-Rays During Pregnancy" },
      { type: "paragraph", text: "The American Dental Association and the American College of Obstetricians and Gynecologists both agree that dental x-rays with proper shielding are safe during pregnancy. We always use a lead apron and thyroid collar. That said, we typically postpone elective x-rays until after delivery unless there's a clinical need." },
      { type: "heading", text: "X-Rays for Kids" },
      { type: "paragraph", text: "Kids are more sensitive to radiation than adults, which is why we use the lowest possible settings and fastest digital sensors. We also limit x-rays to what's clinically necessary — we don't take them 'just because.' If your child has healthy teeth and low cavity risk, we may take x-rays less frequently." },
      { type: "heading", text: "Why X-Rays Matter" },
      { type: "paragraph", text: "X-rays catch problems we literally cannot see with our eyes: cavities between teeth, infections at the root tip, bone loss from gum disease, impacted teeth, cysts, and tumors. Skipping x-rays doesn't save you from these problems — it just means we find them later, when they're bigger and more expensive to treat." },
      { type: "callout", text: "At Good Doc Dental, x-rays are included in our $49 emergency exam and $95 kids special. No extra charges, no surprises.", calloutType: "promo" }
    ],
    relatedSlugs: ["how-often-should-you-go-to-the-dentist", "what-to-expect-at-your-first-dental-visit", "how-to-get-your-kids-excited-about-the-dentist"],
    relatedServiceSlugs: ["dental-exams", "dental-cleanings"],
    ctaType: "booking"
  }
];
