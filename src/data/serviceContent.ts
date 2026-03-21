export interface ServiceContentEntry {
  slug: string;
  heroBackground: "navy" | "sky";
  eyebrow: string;
  headline: string;
  tagline: string;
  intro: string;
  signs: {
    heading: string;
    items: string[];
  };
  process: {
    title: string;
    body: string;
  }[];
  benefits: {
    icon: string;
    title: string;
    body: string;
  }[];
  technology?: {
    title: string;
    body: string;
  }[];
  pricing: {
    display: string;
    note?: string;
    promoText?: string;
    promoDetail?: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
  testimonials: {
    name: string;
    stars: number;
    quote: string;
    office: string;
  }[];
  relatedSlugs: string[];
  ctaHeading: string;
  ctaBody: string;
  ctaButtonText: string;
}

export const serviceContentMap: Record<string, ServiceContentEntry> = {

  // ─────────────────────────────────────────────
  // PREVENTIVE
  // ─────────────────────────────────────────────

  "dental-exams": {
    slug: "dental-exams",
    heroBackground: "navy",
    eyebrow: "Preventive Care",
    headline: "Dental Exams in Las Vegas",
    tagline: "Your smile's first line of defense — and it starts with a checkup.",
    intro: "A dental exam is more than just looking at your teeth. At Good Doc Dental, every exam includes a comprehensive evaluation of your teeth, gums, jaw, bite, and oral cancer screening. We use digital x-rays (80% less radiation than traditional film) and intraoral cameras to catch problems early — when they're smallest, easiest, and cheapest to fix. The American Dental Association recommends an exam every 6 months.",
    signs: {
      heading: "Why Regular Dental Exams Matter",
      items: [
        "Catch cavities before they become root canals",
        "Detect gum disease in its earliest, most treatable stage",
        "Screen for oral cancer — early detection saves lives",
        "Monitor existing dental work (fillings, crowns, implants)",
        "Identify bite issues or TMJ problems early",
        "Keep a baseline record of your oral health over time"
      ]
    },
    process: [
      { title: "Check-In & Medical History", body: "We'll review your medical history, current medications, and any concerns you have. If you're a new patient, this is also when we verify your insurance benefits — free." },
      { title: "Digital X-Rays", body: "Our digital x-rays use 80% less radiation than traditional film and produce instant results. We'll take images to check for cavities, bone loss, and any hidden issues below the surface." },
      { title: "Comprehensive Exam", body: "Your dentist examines every tooth, checks your gums for signs of disease, evaluates your bite and jaw, and performs an oral cancer screening. We'll use intraoral cameras so you can see exactly what we see." },
      { title: "Discussion & Care Plan", body: "We sit down with you, explain everything we found in plain language, and create a prioritized treatment plan if anything needs attention. No jargon, no pressure — just honest information." }
    ],
    benefits: [
      { icon: "search", title: "Early Detection", body: "Catching problems early means simpler treatments, less discomfort, and lower costs. A small cavity today is a root canal tomorrow." },
      { icon: "shield", title: "Oral Cancer Screening", body: "Every exam includes a visual and tactile oral cancer screening. Early detection dramatically improves treatment outcomes." },
      { icon: "monitor", title: "Digital Technology", body: "Digital x-rays and intraoral cameras give us — and you — a crystal-clear picture of your oral health. See what we see, in real time." },
      { icon: "piggy-bank", title: "Preventive = Affordable", body: "Regular exams are the single most cost-effective thing you can do for your dental health. Prevention is always cheaper than repair." }
    ],
    technology: [
      { title: "Digital X-Rays", body: "80% less radiation, instant results, and higher accuracy than traditional film. Images appear on screen in seconds." },
      { title: "Intraoral Cameras", body: "A tiny camera that projects images of your teeth onto a screen. See exactly what your dentist sees — no more guessing." }
    ],
    pricing: {
      display: "$0–$75",
      note: "Many insurance plans cover preventive exams at 100%. We'll verify your benefits for free."
    },
    faqs: [
      { q: "How often should I get a dental exam?", a: "The American Dental Association recommends a dental exam every 6 months. Some patients with gum disease or other ongoing conditions may need to come in more frequently — your dentist will recommend the right schedule for you." },
      { q: "What's included in a dental exam at Good Doc Dental?", a: "Every exam includes a full evaluation of your teeth, gums, bite, and jaw, plus digital x-rays as needed, an oral cancer screening, and a detailed discussion of any findings. For new patients, we also include a professional cleaning." },
      { q: "Does a dental exam hurt?", a: "Not at all. A dental exam is completely painless. If x-rays are needed, they take just seconds. The exam itself involves visual inspection and gentle probing — nothing uncomfortable." }
    ],
    testimonials: [
      { name: "Rachel P.", stars: 5, quote: "I hadn't been to the dentist in 5 years and was nervous about what they'd find. The team was so kind, explained everything clearly, and my exam was completely painless.", office: "Summer Dental" },
      { name: "Kevin M.", stars: 5, quote: "The digital x-rays are so cool — I could see everything on the screen right there. No surprises, no upselling. Just an honest exam.", office: "Durango Dental" }
    ],
    relatedSlugs: ["dental-cleanings", "deep-cleanings", "dental-fillings"],
    ctaHeading: "Due for a Checkup?",
    ctaBody: "Don't wait for a problem to bring you in. Schedule your dental exam today at any of our 23 Las Vegas offices.",
    ctaButtonText: "Book Your Exam"
  },

  "dental-cleanings": {
    slug: "dental-cleanings",
    heroBackground: "navy",
    eyebrow: "Preventive Care",
    headline: "Dental Cleanings in Las Vegas",
    tagline: "A fresh start for your smile — in about 30 minutes.",
    intro: "A professional dental cleaning removes plaque and tartar buildup that regular brushing and flossing can't reach. Our hygienists use specialized tools to clean above and below the gum line, polish your teeth, and apply a fluoride treatment to strengthen your enamel. Regular cleanings every 6 months are the foundation of good oral health — and they're covered by most insurance plans at little to no cost.",
    signs: {
      heading: "Why Professional Cleanings Matter",
      items: [
        "Remove tartar buildup that brushing alone can't eliminate",
        "Prevent cavities and gum disease before they start",
        "Freshen your breath and remove surface stains",
        "Give your hygienist a chance to spot early warning signs",
        "Keep your gums healthy and reduce inflammation",
        "Maintain a clean baseline between dental exams"
      ]
    },
    process: [
      { title: "Plaque & Tartar Removal", body: "Your hygienist uses an ultrasonic scaler and hand instruments to carefully remove plaque and hardened tartar from every surface of your teeth — including below the gum line where bacteria hide." },
      { title: "Polishing", body: "A high-speed polishing tool with a gritty paste removes surface stains and smooths your tooth enamel. This makes it harder for plaque to stick between cleanings." },
      { title: "Flossing", body: "Professional flossing removes any remaining debris between teeth and checks for areas where your gums may be inflamed or bleeding." },
      { title: "Fluoride Treatment", body: "A concentrated fluoride treatment is applied to your teeth to strengthen enamel and help prevent cavities until your next visit. You can choose your flavor." }
    ],
    benefits: [
      { icon: "sparkles", title: "Brighter Smile", body: "Professional cleaning removes surface stains from coffee, tea, and wine. Your teeth will look and feel noticeably cleaner." },
      { icon: "shield", title: "Cavity Prevention", body: "Removing plaque and tartar is the single best way to prevent cavities. Clean teeth are healthy teeth." },
      { icon: "heart", title: "Healthier Gums", body: "Regular cleanings keep gum disease at bay. Healthy gums mean a stronger foundation for your teeth." },
      { icon: "wind", title: "Fresh Breath", body: "Bad breath is often caused by bacteria buildup. A professional cleaning eliminates the source — not just the symptom." }
    ],
    pricing: {
      display: "$75–$100",
      note: "Most insurance plans cover cleanings at 100% twice per year. We'll verify your benefits for free."
    },
    faqs: [
      { q: "How often should I get my teeth cleaned?", a: "Most people should get a professional cleaning every 6 months. If you have gum disease or are at higher risk for oral health issues, your dentist may recommend cleanings every 3–4 months." },
      { q: "Does a dental cleaning hurt?", a: "For most patients, a dental cleaning is completely painless. If you have sensitive teeth or significant tartar buildup, you may feel some mild discomfort. Let your hygienist know and they'll adjust their approach." },
      { q: "What's the difference between a regular cleaning and a deep cleaning?", a: "A regular cleaning focuses on the surfaces of your teeth and just below the gum line. A deep cleaning (scaling and root planing) is a more intensive procedure for patients with gum disease — it cleans deeper pockets below the gum line and smooths the tooth roots." }
    ],
    testimonials: [
      { name: "Sarah J.", stars: 5, quote: "My cleaning at Good Doc was the most thorough I've ever had. My teeth felt amazing afterward and the hygienist was so gentle.", office: "Edge Dental" },
      { name: "Luis R.", stars: 5, quote: "In and out in 30 minutes and my teeth look great. Plus my insurance covered the whole thing. Can't beat that.", office: "Canyon Family Dentistry" }
    ],
    relatedSlugs: ["dental-exams", "deep-cleanings", "teeth-whitening"],
    ctaHeading: "Time for a Cleaning?",
    ctaBody: "Regular cleanings are the easiest thing you can do for your smile. Book yours today at any of our 23 Las Vegas offices.",
    ctaButtonText: "Book Your Cleaning"
  },

  // ─────────────────────────────────────────────
  // RESTORATIVE
  // ─────────────────────────────────────────────

  "dental-fillings": {
    slug: "dental-fillings",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Dental Fillings in Las Vegas",
    tagline: "Fix cavities fast — with tooth-colored fillings that blend right in.",
    intro: "Dental fillings restore teeth damaged by decay back to their normal shape and function. At Good Doc Dental, we use tooth-colored composite resin fillings that match your natural tooth color — no more silver or metal showing when you smile. The procedure is quick, usually done in a single visit, and most patients are back to eating normally the same day.",
    signs: {
      heading: "Signs You Might Need a Filling",
      items: [
        "Tooth sensitivity to hot, cold, or sweet foods",
        "A visible hole or dark spot on your tooth",
        "Pain when biting down or chewing",
        "Food getting stuck in the same spot repeatedly",
        "A rough or jagged edge on a tooth",
        "Your dentist detected decay on an x-ray"
      ]
    },
    process: [
      { title: "Numbing & Preparation", body: "We numb the area with local anesthetic so you won't feel a thing. Then we remove the decayed portion of the tooth using a gentle dental drill." },
      { title: "Tooth-Colored Filling", body: "We apply composite resin filling material in layers, color-matched to your natural tooth. Each layer is hardened with a special curing light." },
      { title: "Shaping & Polishing", body: "We shape the filling to match your natural bite and polish it smooth. The result looks and feels like your natural tooth." },
      { title: "Bite Check", body: "We check your bite to make sure everything feels comfortable and even. Adjustments are made on the spot if needed." }
    ],
    benefits: [
      { icon: "palette", title: "Natural Appearance", body: "Tooth-colored composite fillings blend seamlessly with your natural teeth. Nobody will know it's there." },
      { icon: "zap", title: "Quick Procedure", body: "Most fillings take 30–45 minutes from start to finish. One visit, done." },
      { icon: "shield", title: "Stops Decay in Its Tracks", body: "A filling removes the decayed portion and seals the tooth to prevent further damage. The sooner you treat a cavity, the better." },
      { icon: "smile", title: "Eat Normally Same Day", body: "Composite fillings set immediately. You can eat and drink as soon as the numbness wears off." }
    ],
    pricing: {
      display: "$160–$295 per tooth",
      note: "Price depends on the size and location of the filling. Most insurance plans cover fillings."
    },
    faqs: [
      { q: "Do dental fillings hurt?", a: "No. We numb the area completely before starting, so you won't feel the procedure. You may experience mild sensitivity for a day or two afterward, which is completely normal." },
      { q: "How long do tooth-colored fillings last?", a: "Composite resin fillings typically last 7–15 years depending on the size, location, and your oral hygiene habits. We'll monitor your fillings at every checkup and let you know if any need attention." },
      { q: "Can you replace my old silver fillings with tooth-colored ones?", a: "Yes. We can replace old amalgam (silver) fillings with tooth-colored composite when they wear out, crack, or if you simply want a more natural look. We'll evaluate the condition of your existing fillings and recommend replacement only when it's clinically appropriate." }
    ],
    testimonials: [
      { name: "Amy T.", stars: 5, quote: "Got two fillings done and was in and out in under an hour. Didn't feel a thing and you can't even tell they're there. Love the tooth-colored material.", office: "Westside Dental" },
      { name: "Marcus D.", stars: 5, quote: "I was dreading getting a filling but the whole experience was painless and quick. Good Doc made it easy.", office: "Providence Dental" }
    ],
    relatedSlugs: ["dental-exams", "dental-crowns", "root-canals"],
    ctaHeading: "Got a Cavity? Let's Fix It.",
    ctaBody: "The sooner you treat a cavity, the simpler and cheaper the fix. Book your filling appointment today.",
    ctaButtonText: "Book Your Appointment"
  },

  "dental-crowns": {
    slug: "dental-crowns",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Dental Crowns in Las Vegas",
    tagline: "Strong, natural-looking protection for damaged teeth — many done in one visit.",
    intro: "A dental crown is a custom-made cap that fits over a damaged, decayed, or weakened tooth to restore its shape, strength, and appearance. At Good Doc Dental, many of our offices offer same-day CEREC crowns — meaning you can get your permanent crown in a single visit, no temporary crown, no second appointment. Our crowns are made from high-quality porcelain that's color-matched to your natural teeth.",
    signs: {
      heading: "You Might Need a Crown If...",
      items: [
        "You have a large cavity too big for a filling",
        "A tooth is cracked, chipped, or broken",
        "You've had a root canal and need to protect the tooth",
        "An old filling is failing or falling out",
        "You want to improve the appearance of a discolored or misshapen tooth",
        "You're getting a dental implant and need the final crown"
      ]
    },
    process: [
      { title: "Exam & Digital Scan", body: "We examine the tooth and take a digital 3D scan — no messy impressions. If you're getting a same-day crown, the scan goes directly to our in-office CEREC milling machine." },
      { title: "Tooth Preparation", body: "We numb the area and reshape the tooth to make room for the crown. This is painless and takes just a few minutes." },
      { title: "Crown Fabrication", body: "For same-day crowns, our CEREC machine mills your permanent crown from a solid block of porcelain right in the office — takes about 15 minutes. For traditional crowns, we place a temporary and send the scan to a lab." },
      { title: "Crown Placement", body: "We check the fit, make any adjustments, and cement your permanent crown in place. Done — no temporary, no second visit (with same-day crowns)." }
    ],
    benefits: [
      { icon: "shield", title: "Protects Weak Teeth", body: "A crown covers and reinforces a damaged tooth, preventing further cracking, breaking, or decay." },
      { icon: "zap", title: "Same-Day Option", body: "CEREC technology lets us design, mill, and place your permanent crown in a single visit at many locations." },
      { icon: "smile", title: "Natural Appearance", body: "Our porcelain crowns are color-matched to your natural teeth. They look, feel, and function like the real thing." },
      { icon: "clock", title: "Long-Lasting", body: "With proper care, a dental crown can last 10–15 years or more. It's a durable, reliable restoration." }
    ],
    technology: [
      { title: "CEREC Same-Day Crowns", body: "Computer-aided design and manufacturing creates your permanent crown in the office in about 15 minutes. No temporary crown, no second visit." },
      { title: "Digital Impressions (iTero)", body: "A quick, comfortable digital scan replaces the old goopy impression trays. More accurate and much more pleasant." }
    ],
    pricing: {
      display: "$900–$1,400",
      note: "Price depends on the type of crown and complexity. Most insurance plans cover a significant portion."
    },
    faqs: [
      { q: "What's a same-day crown?", a: "A same-day crown uses CEREC technology to design and mill your permanent porcelain crown right in our office during a single visit. No temporary crown, no second appointment, no waiting for a lab. Many of our offices offer this option." },
      { q: "How long does a crown last?", a: "A well-maintained dental crown typically lasts 10–15 years, and many last even longer. Regular dental exams, brushing, and flossing help extend the life of your crown." },
      { q: "Does getting a crown hurt?", a: "No. The area is completely numbed with local anesthetic before we start. You won't feel anything during the procedure. Mild sensitivity for a few days afterward is normal." }
    ],
    testimonials: [
      { name: "Diana W.", stars: 5, quote: "Got a same-day crown at Good Doc and it was incredible. Walked in with a broken tooth, walked out with a permanent crown an hour later. Technology is amazing.", office: "Hello Dental" },
      { name: "Patrick O.", stars: 5, quote: "Needed two crowns and was dreading multiple visits. They did both in one appointment with CEREC. Painless and perfect match to my other teeth.", office: "Cadence Family Dental" }
    ],
    relatedSlugs: ["same-day-crowns", "root-canals", "dental-bridges"],
    ctaHeading: "Need a Crown? We Can Do It Today.",
    ctaBody: "Ask about same-day CEREC crowns — in and out in a single visit. Book your appointment now.",
    ctaButtonText: "Book Your Crown Appointment"
  },

  "root-canals": {
    slug: "root-canals",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Root Canals in Las Vegas",
    tagline: "Save your natural tooth — pain-free. Seriously.",
    intro: "A root canal removes infected or inflamed tissue from inside your tooth, saving it from extraction. Despite their reputation, modern root canals are no more uncomfortable than getting a filling. We use advanced rotary instruments, digital imaging, and sedation options to make the procedure quick, precise, and comfortable. Most root canals are completed in a single visit.",
    signs: {
      heading: "Signs You Might Need a Root Canal",
      items: [
        "Severe toothache, especially when chewing or applying pressure",
        "Prolonged sensitivity to hot or cold that lingers after the source is removed",
        "Darkening or discoloration of the tooth",
        "Swelling or tenderness in the gums near the affected tooth",
        "A persistent pimple on the gums (abscess)",
        "Pain that wakes you up at night"
      ]
    },
    process: [
      { title: "Diagnosis & Imaging", body: "We take digital x-rays to see the root structure and determine the extent of infection. We'll explain exactly what we see and what needs to be done." },
      { title: "Numbing & Access", body: "The area is completely numbed with local anesthesia. Sedation is available if you're anxious. We create a small opening in the crown of the tooth to access the inner chamber." },
      { title: "Cleaning & Shaping", body: "Using precision rotary instruments, we remove the infected tissue, clean the canals thoroughly, and shape them for the filling material. This is where the infection is eliminated." },
      { title: "Filling & Sealing", body: "The cleaned canals are filled with a biocompatible material called gutta-percha and sealed. A crown is typically placed on top to protect and restore the tooth." }
    ],
    benefits: [
      { icon: "heart", title: "Save Your Natural Tooth", body: "A root canal preserves your natural tooth structure, which is always better than extraction. Your own tooth is the best implant." },
      { icon: "shield", title: "Eliminate Infection", body: "Root canals completely remove the source of infection, ending the pain and preventing it from spreading to neighboring teeth or your jawbone." },
      { icon: "smile", title: "Pain-Free Procedure", body: "Modern root canals are nothing like the old days. Most patients say it feels like getting a filling — and the relief from the toothache is immediate." },
      { icon: "clock", title: "Long-Term Solution", body: "A properly treated root canal tooth, restored with a crown, can last a lifetime with normal care." }
    ],
    pricing: {
      display: "$650–$1,280",
      note: "Price varies by tooth location (front teeth cost less than molars). A crown is typically needed afterward and is billed separately."
    },
    faqs: [
      { q: "Does a root canal hurt?", a: "No. Modern root canals are performed under local anesthesia and are no more uncomfortable than getting a filling. In fact, the root canal relieves the severe pain caused by the infection. Sedation options are available if you're anxious." },
      { q: "How long does a root canal take?", a: "Most root canals are completed in a single visit lasting 60–90 minutes. Complex cases (like back molars with multiple canals) may occasionally require a second visit." },
      { q: "Will I need a crown after my root canal?", a: "In most cases, yes. A crown protects the treated tooth from fracturing and restores it to full function. We'll let you know during your treatment planning. We offer same-day crowns at many locations." }
    ],
    testimonials: [
      { name: "Steven H.", stars: 5, quote: "I was terrified of getting a root canal but it was honestly no worse than a filling. The pain from the infection was 10x worse than the procedure itself. Wish I hadn't waited.", office: "Inspirada Dental" },
      { name: "Linda M.", stars: 5, quote: "The whole thing took about an hour and I didn't feel a thing. My toothache was gone immediately. The team at Good Doc was amazing.", office: "Boulder Dental" }
    ],
    relatedSlugs: ["dental-crowns", "tooth-extractions", "emergency-dental-care"],
    ctaHeading: "Toothache? Don't Wait.",
    ctaBody: "If you're in pain, we can see you today. Root canal treatment eliminates the infection and stops the pain — fast.",
    ctaButtonText: "Book an Emergency Visit"
  },

  "tooth-extractions": {
    slug: "tooth-extractions",
    heroBackground: "navy",
    eyebrow: "Oral Surgery",
    headline: "Tooth Extractions in Las Vegas",
    tagline: "Gentle removal when a tooth can't be saved — with sedation options for your comfort.",
    intro: "Sometimes a tooth is too damaged, decayed, or infected to save — and extraction is the best option for your overall health. At Good Doc Dental, our dentists and in-house oral surgeons perform simple and surgical extractions with a focus on comfort, safety, and fast recovery. We offer multiple sedation options and always discuss replacement options so you know your next steps.",
    signs: {
      heading: "When Extraction May Be Needed",
      items: [
        "Severe decay that has destroyed too much tooth structure to restore",
        "A cracked or fractured tooth below the gum line",
        "Advanced gum disease causing loose teeth",
        "Crowding — making room for orthodontic treatment",
        "An impacted tooth causing pain or infection",
        "A failed root canal or recurring infection"
      ]
    },
    process: [
      { title: "Exam & X-Rays", body: "We examine the tooth, take digital x-rays, and determine the best approach — simple extraction or surgical extraction. We'll explain everything before we start." },
      { title: "Sedation & Numbing", body: "The area is completely numbed. Sedation options (laughing gas, oral sedation, or IV sedation) are available for anxious patients or surgical extractions." },
      { title: "Extraction", body: "For simple extractions, we loosen the tooth and remove it gently. For surgical extractions, a small incision may be needed. Most extractions take 20–30 minutes." },
      { title: "Aftercare & Next Steps", body: "We provide detailed recovery instructions, pain management guidance, and discuss replacement options (implants, bridges, or dentures) so you can plan ahead." }
    ],
    benefits: [
      { icon: "heart", title: "End the Pain", body: "When a tooth can't be saved, extraction eliminates the source of pain and infection so you can start healing." },
      { icon: "moon", title: "Sedation Available", body: "Nervous about the procedure? We offer laughing gas, oral sedation, and IV sedation so you can be as comfortable as possible." },
      { icon: "clock", title: "Quick Recovery", body: "Most patients feel significantly better within 24–48 hours and return to normal activities within 2–3 days." },
      { icon: "arrow-right", title: "Replacement Options", body: "We'll discuss implants, bridges, or dentures as replacement options and help you plan the next step for your smile." }
    ],
    pricing: {
      display: "$150–$300 per tooth",
      note: "Price depends on whether it's a simple or surgical extraction. Wisdom teeth have separate pricing at $1,899 for all 4."
    },
    faqs: [
      { q: "Does a tooth extraction hurt?", a: "You shouldn't feel pain during the extraction — we numb the area completely and offer sedation options for added comfort. You may feel some pressure, but not pain. Afterward, over-the-counter pain medication is usually sufficient." },
      { q: "How long does recovery take after an extraction?", a: "Most patients feel much better within 24–48 hours. Full healing of the extraction site takes 1–2 weeks. We'll give you detailed aftercare instructions." },
      { q: "What are my options after a tooth is extracted?", a: "The main replacement options are dental implants (permanent), dental bridges (fixed to neighboring teeth), or dentures (removable). We'll discuss the best option for your situation during your visit." }
    ],
    testimonials: [
      { name: "James F.", stars: 5, quote: "Had a tooth extracted that had been bothering me for months. The procedure was quick, painless, and I felt relief immediately. Should have done it sooner.", office: "North 5th Dental" },
      { name: "Carla R.", stars: 5, quote: "I was scared of getting a tooth pulled but the team was so reassuring. Chose laughing gas and it was over before I knew it.", office: "Sedona Ranch Dental" }
    ],
    relatedSlugs: ["wisdom-tooth-extractions", "dental-implants", "dental-sedation"],
    ctaHeading: "Need a Tooth Extracted?",
    ctaBody: "Don't suffer in silence. Our team makes extractions comfortable and we'll help you plan what comes next.",
    ctaButtonText: "Book Your Appointment"
  },

  "dental-bridges": {
    slug: "dental-bridges",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Dental Bridges in Las Vegas",
    tagline: "Bridge the gap with a natural-looking restoration — no surgery required.",
    intro: "A dental bridge replaces one or more missing teeth by anchoring a false tooth (or teeth) to the natural teeth on either side of the gap. It's a fixed, non-removable restoration that looks and functions like your natural teeth. Bridges are a great option for patients who want to replace missing teeth without the surgery involved in dental implants.",
    signs: {
      heading: "A Bridge Might Be Right for You If...",
      items: [
        "You're missing one or more teeth in a row",
        "The teeth next to the gap are healthy and strong enough to support a bridge",
        "You want a fixed (non-removable) replacement",
        "You prefer not to have implant surgery",
        "You want to restore your bite and prevent teeth from shifting"
      ]
    },
    process: [
      { title: "Consultation & Planning", body: "We examine the gap and the anchor teeth, take digital impressions, and determine if a bridge is the best option. We'll show you what the finished result will look like." },
      { title: "Tooth Preparation", body: "The teeth on either side of the gap are gently reshaped to make room for the bridge crowns. Digital impressions are taken for the dental lab." },
      { title: "Temporary Bridge", body: "A temporary bridge protects your prepared teeth while your permanent bridge is being crafted by the lab — typically 1–2 weeks." },
      { title: "Permanent Bridge Placement", body: "We remove the temporary, check the fit and color of your permanent bridge, make any adjustments, and cement it in place. Done." }
    ],
    benefits: [
      { icon: "smile", title: "Natural Appearance", body: "Our porcelain bridges are custom-made to match the color, shape, and size of your natural teeth." },
      { icon: "utensils", title: "Eat Normally", body: "A bridge restores your ability to chew and bite normally. No more avoiding certain foods." },
      { icon: "shield", title: "Prevents Shifting", body: "Missing teeth cause neighboring teeth to shift out of alignment. A bridge fills the gap and keeps your bite stable." },
      { icon: "minus-circle", title: "No Surgery", body: "Unlike implants, bridges don't require surgical placement. It's a great non-surgical alternative for tooth replacement." }
    ],
    pricing: {
      display: "$2,500–$3,000",
      note: "Price depends on the number of teeth being replaced and the materials used. Most insurance plans cover a portion."
    },
    faqs: [
      { q: "How long does a dental bridge last?", a: "With proper care — brushing, flossing, and regular dental checkups — a dental bridge typically lasts 10–15 years. Some bridges last even longer." },
      { q: "What's the difference between a bridge and an implant?", a: "A bridge anchors to neighboring natural teeth and doesn't require surgery. An implant is a titanium post placed into the jawbone and is a fully independent restoration. Implants are more expensive but don't affect neighboring teeth. We'll help you choose the best option for your situation." },
      { q: "Can I eat normally with a dental bridge?", a: "Yes. Once your permanent bridge is cemented in place, you can eat normally. We recommend avoiding extremely hard or sticky foods that could damage the bridge." }
    ],
    testimonials: [
      { name: "Gloria H.", stars: 5, quote: "My bridge looks completely natural. You genuinely can't tell it's not my real teeth. The team took their time to get the color match perfect.", office: "West Henderson Dental" },
      { name: "Robert K.", stars: 5, quote: "Went with a bridge instead of an implant and I'm very happy with the result. Quick process and it looks great.", office: "Cadence Family Dental" }
    ],
    relatedSlugs: ["dental-implants", "dental-crowns", "dentures"],
    ctaHeading: "Missing a Tooth? Let's Fix That.",
    ctaBody: "A dental bridge can restore your smile in just two visits. Book your consultation today.",
    ctaButtonText: "Book Your Consultation"
  },

  "same-day-crowns": {
    slug: "same-day-crowns",
    heroBackground: "navy",
    eyebrow: "Advanced Technology",
    headline: "Same-Day Crowns in Las Vegas",
    tagline: "Walk in, walk out — your permanent crown done in one visit.",
    intro: "With CEREC same-day crown technology, there's no need for a temporary crown, no goopy impressions, and no second appointment. We digitally scan your tooth, design your crown on a computer, and mill it from a solid block of porcelain right in our office — all while you wait. The entire process takes about an hour, and you leave with your permanent, color-matched crown in place.",
    signs: {
      heading: "Same-Day Crowns Are Perfect For...",
      items: [
        "Busy schedules — can't take multiple days off for dental work",
        "Anyone who dreads temporary crowns (they can be uncomfortable)",
        "Broken or cracked teeth that need immediate restoration",
        "Patients who want to avoid messy impression trays",
        "Anyone who wants the convenience of a single-visit solution"
      ]
    },
    process: [
      { title: "Digital 3D Scan", body: "We scan your tooth with our iTero digital scanner — takes about 60 seconds. No messy putty trays. The 3D image appears on screen instantly." },
      { title: "Computer-Aided Design", body: "Using CEREC software, we design your crown on a computer right in front of you. We can adjust the shape, size, and contours for a perfect fit." },
      { title: "In-Office Milling", body: "The design is sent to our CEREC milling machine, which carves your crown from a solid block of high-quality porcelain in about 15 minutes." },
      { title: "Placement & Polish", body: "We check the fit, adjust as needed, polish the crown, and cement it in place. You walk out with your permanent crown — done in a single visit." }
    ],
    benefits: [
      { icon: "zap", title: "One Visit", body: "No temporary crown, no second appointment. Your permanent crown is designed, milled, and placed in about an hour." },
      { icon: "scan", title: "Digital Impressions", body: "A quick, comfortable digital scan replaces messy impression trays. More accurate and much more pleasant." },
      { icon: "palette", title: "Perfect Match", body: "CEREC crowns are milled from porcelain blocks selected to match your natural tooth color. The result is seamless." },
      { icon: "shield", title: "Same Durability", body: "CEREC crowns are just as strong and durable as lab-made crowns. They typically last 10–15 years or more." }
    ],
    technology: [
      { title: "CEREC Technology", body: "Computer-aided design and manufacturing (CAD/CAM) creates your crown in-office. From scan to finished crown in about an hour." },
      { title: "iTero Digital Scanner", body: "A quick 60-second scan creates a precise 3D model of your tooth — no goopy mold trays needed." }
    ],
    pricing: {
      display: "$900–$1,400",
      note: "Same price as traditional crowns. No premium for the same-day convenience. Most insurance plans cover crowns."
    },
    faqs: [
      { q: "Are same-day crowns as good as lab-made crowns?", a: "Yes. CEREC crowns are made from the same high-quality porcelain materials as lab crowns. Studies show they have comparable durability and longevity. The main difference is convenience — you get your permanent crown in one visit." },
      { q: "Do all Good Doc Dental offices offer same-day crowns?", a: "Many of our offices have CEREC technology for same-day crowns. When you book your appointment, let us know you're interested in a same-day crown and we'll schedule you at an office that offers it." },
      { q: "How long does a same-day crown appointment take?", a: "The entire appointment — including the scan, design, milling, and placement — takes about 60–90 minutes. You'll walk out with your permanent crown." }
    ],
    testimonials: [
      { name: "Michelle P.", stars: 5, quote: "I couldn't believe they made my crown right there in the office. An hour later I had a permanent crown that matches perfectly. No temporary, no second visit. Amazing.", office: "Summer Dental" },
      { name: "Jason L.", stars: 5, quote: "Same-day crown technology is a game changer. I broke a tooth on Monday and had a permanent crown by lunchtime. The future is here.", office: "Hello Dental" }
    ],
    relatedSlugs: ["dental-crowns", "dental-fillings", "dental-implants"],
    ctaHeading: "Need a Crown? Get It Done Today.",
    ctaBody: "Ask about same-day CEREC crowns at Good Doc Dental. One visit, one hour, done.",
    ctaButtonText: "Book Your Same-Day Crown"
  },

  "implant-supported-dentures": {
    slug: "implant-supported-dentures",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Implant-Supported Dentures in Las Vegas",
    tagline: "Dentures that stay put — no adhesive, no slipping, no worries.",
    intro: "Implant-supported dentures combine the full-arch coverage of traditional dentures with the stability of dental implants. Instead of resting on your gums and relying on adhesive, these dentures snap onto 4–6 implant posts anchored in your jawbone. The result is a secure, comfortable fit that lets you eat, speak, and laugh with complete confidence.",
    signs: {
      heading: "Implant-Supported Dentures May Be Right If...",
      items: [
        "Your current dentures slip, click, or feel uncomfortable",
        "You're tired of using denture adhesive",
        "You can't eat certain foods with traditional dentures",
        "You want a more permanent, stable solution",
        "You're missing most or all teeth on one or both arches",
        "You have adequate jawbone density (or are open to bone grafting)"
      ]
    },
    process: [
      { title: "Free Consultation & 3D Scan", body: "We evaluate your jawbone with CBCT 3D imaging, discuss your goals, and determine the ideal implant placement. This consultation is completely free." },
      { title: "Implant Placement", body: "Our oral surgeon places 4–6 titanium implant posts into your jawbone. In many cases, you can leave the same day with a temporary denture attached to the implants." },
      { title: "Healing & Integration", body: "Over 3–6 months, the implants fuse with your jawbone. During this time, you wear a temporary denture so you're never without teeth." },
      { title: "Permanent Denture", body: "Once healed, we attach your custom-made permanent denture. It clicks securely onto the implants — stable, comfortable, and natural-looking." }
    ],
    benefits: [
      { icon: "lock", title: "Locks in Place", body: "Implant-supported dentures snap onto implant posts — they won't slip, click, or fall out. Speak and eat with total confidence." },
      { icon: "utensils", title: "Eat Real Food", body: "Unlike traditional dentures, implant-supported dentures let you bite into apples, eat steak, and chew gum. No food restrictions." },
      { icon: "activity", title: "Preserves Jawbone", body: "Implants stimulate the jawbone, preventing the bone loss that occurs with traditional dentures. Your facial structure stays intact." },
      { icon: "smile", title: "Natural Look & Feel", body: "Custom-made to look like your natural teeth. Most people won't know you're wearing dentures." }
    ],
    pricing: {
      display: "Varies by case",
      promoText: "$1,200 OFF",
      promoDetail: "Complete Implant Package — includes consultation, implants, abutments & denture",
      note: "Final price depends on the number of implants needed and denture type. Financing available."
    },
    faqs: [
      { q: "What's the difference between implant-supported dentures and traditional dentures?", a: "Traditional dentures rest on your gums and are held in place by suction or adhesive. Implant-supported dentures snap onto titanium implant posts anchored in your jawbone, providing a secure, stable fit that doesn't slip or move." },
      { q: "How many implants do I need for implant-supported dentures?", a: "Typically 4–6 implants per arch. The exact number depends on your jawbone density and the type of denture. We'll determine the ideal approach during your free consultation." },
      { q: "Can I remove implant-supported dentures?", a: "Some implant-supported dentures are designed to be removable for cleaning (snap-on), while others are permanently fixed. We'll discuss both options and help you choose what's best for your lifestyle." }
    ],
    testimonials: [
      { name: "Frank R.", stars: 5, quote: "I suffered with loose dentures for years. Implant-supported dentures changed my life — I can eat anything, speak clearly, and I never worry about them moving.", office: "Specialty Dental" },
      { name: "Betty S.", stars: 5, quote: "The best decision I ever made. My new dentures feel like real teeth. I wish I'd done this years ago.", office: "Durango Dental" }
    ],
    relatedSlugs: ["dental-implants", "dentures", "dental-bridges"],
    ctaHeading: "Tired of Loose Dentures?",
    ctaBody: "Implant-supported dentures give you the stability you deserve. Book your free consultation today.",
    ctaButtonText: "Get Your Free Consultation"
  },

  "dentures": {
    slug: "dentures",
    heroBackground: "navy",
    eyebrow: "Restorative Dentistry",
    headline: "Dentures in Las Vegas",
    tagline: "Full and partial options for a confident, complete smile.",
    intro: "Dentures replace missing teeth and restore your ability to eat, speak, and smile with confidence. At Good Doc Dental, we offer both full dentures (for patients missing all teeth on an arch) and partial dentures (for patients missing several teeth). Every set is custom-made from impressions of your mouth to ensure a comfortable, natural-looking fit.",
    signs: {
      heading: "Dentures Might Be Right for You If...",
      items: [
        "You're missing most or all of your teeth on one or both arches",
        "Remaining teeth are too damaged to save",
        "You want an affordable way to replace multiple missing teeth",
        "You want to restore your ability to eat and speak normally",
        "You're not a candidate for implants (or prefer a non-surgical option)"
      ]
    },
    process: [
      { title: "Consultation & Impressions", body: "We examine your mouth, discuss your options (full vs. partial, standard vs. implant-supported), and take detailed impressions for your custom dentures." },
      { title: "Wax Try-In", body: "We create a wax model of your dentures so you can see and approve the look before the final set is made. Adjustments are easy at this stage." },
      { title: "Final Dentures", body: "Your permanent dentures are crafted from durable, natural-looking materials. We check the fit, bite, and appearance during your fitting appointment." },
      { title: "Adjustments & Follow-Up", body: "It's normal to need a few minor adjustments as your mouth adapts. We include follow-up visits to ensure your dentures fit perfectly." }
    ],
    benefits: [
      { icon: "smile", title: "Complete Smile", body: "Dentures restore the appearance of a full, natural smile. Modern dentures look remarkably realistic." },
      { icon: "utensils", title: "Eat Comfortably", body: "Properly fitted dentures let you eat a wide variety of foods. Your diet no longer has to be limited by missing teeth." },
      { icon: "volume-2", title: "Speak Clearly", body: "Missing teeth affect speech. Dentures restore proper tooth and lip positioning for clearer pronunciation." },
      { icon: "piggy-bank", title: "Affordable Option", body: "Dentures are one of the most cost-effective ways to replace multiple missing teeth. Insurance often covers a significant portion." }
    ],
    pricing: {
      display: "$1,050–$1,550",
      note: "Price depends on full vs. partial dentures and materials. Most insurance plans cover a portion. Financing available."
    },
    faqs: [
      { q: "How long does it take to get dentures?", a: "The full process — from initial impressions to final fitting — typically takes 4–6 weeks. If teeth need to be extracted first, we can often provide immediate (temporary) dentures so you're never without teeth." },
      { q: "How long do dentures last?", a: "With proper care, a set of dentures typically lasts 5–8 years. Over time, your jawbone and gums change shape, which may require your dentures to be relined or replaced for a proper fit." },
      { q: "Should I consider implant-supported dentures?", a: "If you want more stability than traditional dentures offer, implant-supported dentures are an excellent upgrade. They snap onto implant posts in your jawbone and won't slip or require adhesive. We'll discuss all your options during your consultation." }
    ],
    testimonials: [
      { name: "Dorothy A.", stars: 5, quote: "My new dentures look so natural — even my friends were surprised. The fit is comfortable and I can eat things I haven't been able to in years.", office: "Las Vegas Blvd Dental" },
      { name: "Henry T.", stars: 5, quote: "The team took the time to get everything right. Multiple try-ins, adjustments until the fit was perfect. Very patient and professional.", office: "Revere Dental" }
    ],
    relatedSlugs: ["implant-supported-dentures", "dental-implants", "tooth-extractions"],
    ctaHeading: "Ready for a Complete Smile?",
    ctaBody: "Explore your denture options at Good Doc Dental. Book a consultation to find the right fit for you.",
    ctaButtonText: "Book Your Consultation"
  },

  // ─────────────────────────────────────────────
  // COSMETIC
  // ─────────────────────────────────────────────

  "porcelain-veneers": {
    slug: "porcelain-veneers",
    heroBackground: "navy",
    eyebrow: "Cosmetic Dentistry",
    headline: "Porcelain Veneers in Las Vegas",
    tagline: "Transform your smile with custom veneers — thin, strong, and stunning.",
    intro: "Porcelain veneers are ultra-thin shells of dental ceramic bonded to the front of your teeth to change their shape, size, color, or alignment. They're the go-to solution for chipped, stained, uneven, or gapped teeth — and they deliver dramatic results that look completely natural. At Good Doc Dental, our cosmetic dentists design every veneer case to complement your facial features and give you a smile you'll love.",
    signs: {
      heading: "Veneers Can Fix...",
      items: [
        "Teeth that are chipped, cracked, or worn down",
        "Stubborn discoloration that whitening can't fix",
        "Teeth that are uneven, irregularly shaped, or too small",
        "Gaps between teeth",
        "Minor alignment issues you want to fix without braces",
        "An overall smile makeover"
      ]
    },
    process: [
      { title: "Smile Design Consultation", body: "We discuss your goals, examine your teeth, and use digital imaging to preview your new smile. You'll see what your veneers will look like before we start." },
      { title: "Tooth Preparation", body: "A thin layer of enamel (about 0.5mm) is removed from the front of each tooth to make room for the veneer. Digital impressions are taken and sent to our lab." },
      { title: "Temporary Veneers", body: "We place temporary veneers while your permanent set is handcrafted by the lab — typically 1–2 weeks." },
      { title: "Bonding", body: "We check the fit, color, and shape of your permanent veneers, make any adjustments, and bond them to your teeth. Your new smile is ready." }
    ],
    benefits: [
      { icon: "sparkles", title: "Dramatic Transformation", body: "Veneers can completely transform your smile in just two visits. Fix multiple cosmetic issues at once." },
      { icon: "palette", title: "Custom Color & Shape", body: "Every veneer is handcrafted to match the exact shade, shape, and translucency you want. The result looks completely natural." },
      { icon: "shield", title: "Stain Resistant", body: "Porcelain veneers resist staining from coffee, tea, and wine much better than natural tooth enamel." },
      { icon: "clock", title: "Long-Lasting", body: "With proper care, porcelain veneers last 10–20 years. They're a durable investment in your smile." }
    ],
    pricing: {
      display: "$1,200–$1,500 per veneer",
      note: "Most patients get 6–10 veneers for a full smile makeover. Cosmetic procedures are typically not covered by insurance. Financing available."
    },
    faqs: [
      { q: "How long do porcelain veneers last?", a: "With proper care — regular brushing, flossing, and dental checkups — porcelain veneers typically last 10–20 years. Avoiding habits like biting nails or chewing ice helps extend their life." },
      { q: "Do veneers look natural?", a: "Yes. Modern porcelain veneers are incredibly natural-looking. They're custom-made to match the translucency, color, and shape of natural teeth. Most people can't tell the difference." },
      { q: "Can I whiten my veneers?", a: "No — veneers don't respond to whitening treatments. That's why we match your veneers to your desired shade before bonding. If you want whiter teeth overall, we recommend whitening your natural teeth first, then matching the veneers to the new shade." }
    ],
    testimonials: [
      { name: "Nicole B.", stars: 5, quote: "I've been self-conscious about my smile my whole life. Six veneers later and I can't stop smiling. The results are incredible — they look completely real.", office: "Summer Dental" },
      { name: "Anthony R.", stars: 5, quote: "Best investment I've ever made. My veneers look amazing and the process was much easier than I expected. Two visits and done.", office: "Edge Dental" }
    ],
    relatedSlugs: ["teeth-whitening", "smile-makeovers", "dental-crowns"],
    ctaHeading: "Ready for Your Dream Smile?",
    ctaBody: "Schedule a veneer consultation and see what's possible. Our cosmetic team will design a smile you'll love.",
    ctaButtonText: "Book Your Veneer Consultation"
  },

  "teeth-whitening": {
    slug: "teeth-whitening",
    heroBackground: "navy",
    eyebrow: "Cosmetic Dentistry",
    headline: "Teeth Whitening in Las Vegas",
    tagline: "A brighter smile in just one visit — up to 8 shades whiter.",
    intro: "Professional teeth whitening at Good Doc Dental delivers dramatic results that over-the-counter products simply can't match. Our in-office treatment uses a concentrated whitening gel activated by a special light to remove years of stains from coffee, tea, wine, and aging — in about an hour. Results are immediate and can last up to a year with proper care.",
    signs: {
      heading: "Whitening Is Great For...",
      items: [
        "Yellowing or discoloration from coffee, tea, wine, or tobacco",
        "Age-related darkening of tooth enamel",
        "Stains from certain medications",
        "Wanting a brighter smile for a special event",
        "A confidence boost that makes a real difference"
      ]
    },
    process: [
      { title: "Shade Assessment", body: "We assess your current tooth shade and discuss your whitening goals. We'll show you what results to expect so there are no surprises." },
      { title: "Preparation", body: "We apply a protective barrier to your gums and soft tissue. Then a professional-strength whitening gel is applied to your teeth." },
      { title: "Light Activation", body: "A special light activates the whitening gel, breaking down stain molecules on your enamel. This process is repeated in 15-minute intervals." },
      { title: "Reveal Your Results", body: "After about an hour, the gel is removed and you see your results immediately. Most patients see results of 4–8 shades brighter in a single session." }
    ],
    benefits: [
      { icon: "sun", title: "Immediate Results", body: "Walk out with a noticeably brighter smile the same day. No waiting weeks for results like with strips or trays." },
      { icon: "shield", title: "Safe & Professional", body: "Our whitening is supervised by dental professionals who protect your gums and monitor the process. Safer and more effective than DIY kits." },
      { icon: "sparkles", title: "Up to 8 Shades Whiter", body: "Professional whitening achieves results that over-the-counter products can't come close to matching." },
      { icon: "clock", title: "Long-Lasting", body: "Results can last 6–12 months with proper care. Avoid heavy staining foods and drinks to maintain your bright smile." }
    ],
    pricing: {
      display: "$350–$550",
      note: "Whitening is a cosmetic procedure and typically not covered by insurance. Financing available through Sunbit and CareCredit."
    },
    faqs: [
      { q: "How long does professional whitening last?", a: "Results typically last 6–12 months depending on your diet and habits. Avoiding coffee, tea, red wine, and tobacco helps maintain your results longer. Touch-up treatments are available." },
      { q: "Does teeth whitening hurt?", a: "Some patients experience temporary tooth sensitivity during or after whitening, which usually resolves within 24–48 hours. We take precautions to minimize sensitivity and can adjust the treatment intensity if needed." },
      { q: "Is professional whitening better than whitening strips?", a: "Yes. Professional whitening uses higher-concentration gels and light activation to achieve results that are significantly better than over-the-counter strips. It's also faster — one office visit vs. weeks of daily strip use." }
    ],
    testimonials: [
      { name: "Ashley T.", stars: 5, quote: "6 shades whiter in one hour. I couldn't believe the difference. Should have done this years ago. My only regret is waiting so long.", office: "Westside Dental" },
      { name: "Mike S.", stars: 5, quote: "Got my teeth whitened before a wedding and the results were amazing. The staff made the whole experience comfortable and fun.", office: "Westside Dental" }
    ],
    relatedSlugs: ["porcelain-veneers", "smile-makeovers", "dental-cleanings"],
    ctaHeading: "Ready for a Brighter Smile?",
    ctaBody: "Professional whitening takes about an hour. Book your appointment and see the difference today.",
    ctaButtonText: "Book Your Whitening"
  },

  "smile-makeovers": {
    slug: "smile-makeovers",
    heroBackground: "navy",
    eyebrow: "Cosmetic Dentistry",
    headline: "Smile Makeovers in Las Vegas",
    tagline: "Your dream smile, designed by experts — one comprehensive plan.",
    intro: "A smile makeover is a customized treatment plan that combines multiple cosmetic and restorative procedures to completely transform your smile. Whether you need veneers, whitening, crowns, implants, orthodontics, or a combination — we design a comprehensive plan tailored to your goals, timeline, and budget. At Good Doc Dental, our cosmetic dentists have transformed thousands of smiles across the Las Vegas Valley.",
    signs: {
      heading: "A Smile Makeover Can Address...",
      items: [
        "Multiple cosmetic issues at once (chips, stains, gaps, alignment)",
        "Years of dental neglect that need comprehensive restoration",
        "A smile you've never been happy with",
        "Aging-related changes to your teeth and gums",
        "A desire for a complete transformation, not just a quick fix"
      ]
    },
    process: [
      { title: "Comprehensive Consultation", body: "We listen to your goals, examine your teeth, take digital photos and scans, and discuss every option available. This is a collaborative design process — your input drives the plan." },
      { title: "Smile Design & Preview", body: "Using digital imaging, we create a preview of your new smile so you can see the results before we start. We'll adjust until you love the design." },
      { title: "Phased Treatment", body: "Your makeover may include multiple procedures — veneers, whitening, crowns, implants, orthodontics — scheduled in the optimal order for the best results and your convenience." },
      { title: "Reveal Your New Smile", body: "As each phase completes, your smile transforms step by step. The final result is a complete, beautiful smile that looks natural and feels amazing." }
    ],
    benefits: [
      { icon: "wand-sparkles", title: "Comprehensive Solution", body: "Instead of fixing one issue at a time, a makeover addresses everything at once with a coordinated plan for the best overall result." },
      { icon: "palette", title: "Custom Design", body: "Your smile is designed specifically for you — considering your facial features, skin tone, and personal preferences." },
      { icon: "users", title: "Multi-Specialty Team", body: "Our in-house specialists (cosmetic, orthodontic, surgical) collaborate on your plan so everything works together seamlessly." },
      { icon: "credit-card", title: "Flexible Financing", body: "Smile makeovers can be phased over time to fit your budget. Sunbit and CareCredit financing available." }
    ],
    pricing: {
      display: "Varies by plan",
      note: "Every smile makeover is custom. We'll provide a detailed cost breakdown during your consultation. Financing available to spread payments over time."
    },
    faqs: [
      { q: "How much does a smile makeover cost?", a: "It depends on the procedures included. A makeover combining whitening and veneers might range from $5,000–$15,000, while one including implants and full-mouth reconstruction could be more. We provide a detailed, transparent cost breakdown during your consultation — no surprises." },
      { q: "How long does a smile makeover take?", a: "It depends on the complexity. Simple makeovers (whitening + veneers) can be completed in 2–4 weeks. More complex plans involving implants or orthodontics may take several months. We'll give you a clear timeline upfront." },
      { q: "Is a smile makeover worth it?", a: "Our patients consistently say it's the best investment they've ever made. A confident smile affects every aspect of your life — how you feel, how you interact with others, and how you present yourself. We'll work within your budget to make it achievable." }
    ],
    testimonials: [
      { name: "Vanessa C.", stars: 5, quote: "I did a full smile makeover — veneers on top, whitening on the bottom, one implant. The transformation is unreal. I look in the mirror and finally love my smile.", office: "Summer Dental" },
      { name: "Richard N.", stars: 5, quote: "The team coordinated everything — implants, crowns, and whitening — into one cohesive plan. The results speak for themselves. I can't stop smiling.", office: "Specialty Dental" }
    ],
    relatedSlugs: ["porcelain-veneers", "teeth-whitening", "dental-implants"],
    ctaHeading: "Ready to Transform Your Smile?",
    ctaBody: "Book a smile makeover consultation. We'll design your dream smile and create a plan to make it happen.",
    ctaButtonText: "Book Your Makeover Consultation"
  },

  // ─────────────────────────────────────────────
  // ORTHODONTICS
  // ─────────────────────────────────────────────

  "traditional-braces": {
    slug: "traditional-braces",
    heroBackground: "navy",
    eyebrow: "Orthodontics",
    headline: "Traditional Braces in Las Vegas",
    tagline: "Proven results for every age — and $1,200 off to get started.",
    intro: "Traditional metal braces are still the gold standard for orthodontic treatment — especially for complex cases. At Good Doc Dental, our in-house orthodontists use modern, low-profile brackets and heat-activated wires that move teeth faster and more comfortably than braces from even a decade ago. Braces work for kids, teens, and adults, and they're currently $1,200 off.",
    signs: {
      heading: "Braces Can Fix...",
      items: [
        "Crowded or overlapping teeth",
        "Overbite, underbite, or crossbite",
        "Gaps between teeth",
        "Severe misalignment that Invisalign can't handle",
        "Jaw alignment issues",
        "Rotated or tilted teeth"
      ]
    },
    process: [
      { title: "Free Consultation & 3D Scan", body: "We evaluate your teeth and bite, take digital 3D scans, and create a custom treatment plan. You'll know exactly how long treatment will take and what it will cost — before you commit. This consultation is free." },
      { title: "Bracket Placement", body: "Brackets are bonded to your teeth and connected with an archwire. The whole process takes about 60–90 minutes and is completely painless." },
      { title: "Monthly Adjustments", body: "You'll come in every 4–6 weeks for wire adjustments. Each visit is quick (15–20 minutes) and keeps your teeth moving on schedule." },
      { title: "Braces Off & Retainer", body: "When your teeth reach their final positions, we remove the braces and fit you with a custom retainer to maintain your results." }
    ],
    benefits: [
      { icon: "check-circle", title: "Handles Complex Cases", body: "Braces can correct severe crowding, significant bite issues, and complex jaw alignment that other options can't." },
      { icon: "clock", title: "Predictable Timeline", body: "Braces deliver consistent, reliable results. Your orthodontist can predict your timeline with high accuracy." },
      { icon: "piggy-bank", title: "Same Price as Invisalign", body: "At Good Doc Dental, braces and Invisalign are the same price range: $2,900–$5,950. Both are currently $1,200 off." },
      { icon: "users", title: "All Ages", body: "Braces work for kids (age 7+), teens, and adults. It's never too late — or too early — to start." }
    ],
    pricing: {
      display: "$2,900–$5,950",
      promoText: "$1,200 OFF",
      promoDetail: "All orthodontic treatment — braces or Invisalign. Includes free consultation."
    },
    faqs: [
      { q: "How long do you wear braces?", a: "Most patients wear braces for 12–24 months. Simple cases may finish sooner, and complex cases may take a bit longer. Your orthodontist will give you an accurate estimate at your free consultation." },
      { q: "Do braces hurt?", a: "Getting braces put on doesn't hurt. You'll experience some soreness and pressure for 3–5 days after the initial placement and after each adjustment. This is normal and manageable with over-the-counter pain medication." },
      { q: "Are braces better than Invisalign?", a: "It depends on your case. Braces are better for severe or complex cases. Invisalign is better for mild to moderate cases and offers the benefit of being removable and nearly invisible. During your free consultation, we'll recommend the best option for you — honestly." }
    ],
    testimonials: [
      { name: "Marco R.", stars: 5, quote: "My son got braces at Good Doc and his teeth look amazing. The orthodontist was great with him and the $1,200 off made it affordable for us.", office: "Canyon Family Dentistry" },
      { name: "Tanya W.", stars: 5, quote: "Got braces at 35 and it was the best decision. The team never made me feel weird about being an adult with braces. Results are perfect.", office: "Durango Dental" }
    ],
    relatedSlugs: ["invisalign", "teen-orthodontics", "adult-orthodontics"],
    ctaHeading: "Ready for a Straighter Smile?",
    ctaBody: "Book your free orthodontic consultation today. $1,200 off braces and Invisalign — limited time.",
    ctaButtonText: "Get $1,200 Off Braces"
  },

  "teen-orthodontics": {
    slug: "teen-orthodontics",
    heroBackground: "sky",
    eyebrow: "Teen Orthodontics",
    headline: "Orthodontics for Teens in Las Vegas",
    tagline: "Confidence-boosting smiles for teenagers — braces or Invisalign, $1,200 off.",
    intro: "The teen years are the most popular time to start orthodontic treatment — and for good reason. At Good Doc Dental, we offer both traditional braces and Invisalign Teen, giving your teen options that fit their lifestyle. Our in-house orthodontists specialize in working with teenagers, making the experience positive and even fun. Plus, all orthodontic treatment is currently $1,200 off.",
    signs: {
      heading: "Signs Your Teen May Need Orthodontics",
      items: [
        "Crowded, crooked, or overlapping teeth",
        "Visible overbite, underbite, or crossbite",
        "Difficulty chewing or biting",
        "Self-consciousness about their smile",
        "Jaw clicking or pain",
        "Teeth that don't come together properly when the mouth is closed"
      ]
    },
    process: [
      { title: "Free Consultation & Scan", body: "We'll examine your teen's teeth and bite, take digital 3D scans, and discuss whether braces or Invisalign Teen is the best fit. This consultation is completely free." },
      { title: "Choose Your Treatment", body: "Traditional braces or Invisalign Teen — both deliver great results. We'll help your teen understand the pros and cons of each so they feel confident in their choice." },
      { title: "Active Treatment", body: "For braces: monthly adjustment visits (15–20 min). For Invisalign: new aligners every 1–2 weeks with checkups every 6–8 weeks. Treatment typically lasts 12–24 months." },
      { title: "Retainer & Maintenance", body: "When treatment is complete, we fit a custom retainer to keep that new smile in place. We'll teach your teen how to care for their retainer for long-lasting results." }
    ],
    benefits: [
      { icon: "smile", title: "Confidence Boost", body: "A straight smile does wonders for teen confidence. Many parents tell us their teen is happier and more outgoing after treatment." },
      { icon: "settings", title: "Braces or Invisalign", body: "Your teen gets to choose. Braces for complex cases, Invisalign for a nearly invisible option. Both are the same price range." },
      { icon: "graduation-cap", title: "Teen-Friendly Team", body: "Our orthodontists love working with teenagers. We make the experience fun, not stressful." },
      { icon: "tag", title: "$1,200 Off", body: "All orthodontic treatment — braces or Invisalign — is currently $1,200 off. Plus a free consultation to get started." }
    ],
    pricing: {
      display: "$2,900–$5,950",
      promoText: "$1,200 OFF",
      promoDetail: "Braces or Invisalign Teen — includes free consultation & 3D scan."
    },
    faqs: [
      { q: "What age should my teen start orthodontics?", a: "Most teens start orthodontic treatment between ages 11–14, once all permanent teeth have erupted. However, the American Association of Orthodontists recommends an initial evaluation by age 7 to catch any issues early. Our orthodontic consultations are always free." },
      { q: "Should my teen get braces or Invisalign?", a: "It depends on the complexity of their case and their lifestyle. Invisalign Teen is great for mild to moderate issues and teens who play sports or instruments. Braces are better for more complex alignment problems. We'll recommend the best option at the free consultation." },
      { q: "How do I get my teen to wear their Invisalign?", a: "Invisalign Teen includes compliance indicators on the aligners — small blue dots that fade with wear, so you can verify your teen is wearing them the recommended 20–22 hours per day. They also come with extra replacement aligners in case any get lost." }
    ],
    testimonials: [
      { name: "Jennifer L.", stars: 5, quote: "My 14-year-old chose Invisalign and she's so happy with it. She loves that no one can tell she's in orthodontic treatment. The compliance indicators give me peace of mind too.", office: "Edge Dental" },
      { name: "Michael B.", stars: 5, quote: "My son got braces and the orthodontist was fantastic with him. Explained everything in a way he could understand and made every appointment easy. His smile looks amazing.", office: "Providence Dental" }
    ],
    relatedSlugs: ["invisalign", "traditional-braces", "kids-orthodontics"],
    ctaHeading: "Give Your Teen a Smile They'll Love",
    ctaBody: "Book a free orthodontic consultation for your teenager. $1,200 off braces and Invisalign — limited time.",
    ctaButtonText: "Book a Free Teen Consultation"
  },

  "adult-orthodontics": {
    slug: "adult-orthodontics",
    heroBackground: "navy",
    eyebrow: "Orthodontics",
    headline: "Adult Orthodontics in Las Vegas",
    tagline: "It's never too late for a straighter smile — and it's $1,200 off right now.",
    intro: "More adults are straightening their teeth than ever before — and for good reason. Modern options like Invisalign and low-profile braces make adult orthodontics discreet, comfortable, and faster than you'd think. At Good Doc Dental, about 40% of our orthodontic patients are adults. Whether you missed out on braces as a kid or your teeth have shifted over the years, we can help.",
    signs: {
      heading: "You're Never Too Old If...",
      items: [
        "Your teeth have shifted or crowded over the years",
        "You never had braces as a kid and always wanted straighter teeth",
        "You had braces but didn't wear your retainer (relapse)",
        "Your bite feels off or you have jaw pain",
        "You want a more confident smile for personal or professional reasons",
        "You're interested in Invisalign's discreet clear aligners"
      ]
    },
    process: [
      { title: "Free Consultation", body: "We assess your teeth, bite, and goals. We'll recommend braces or Invisalign based on your specific case and show you a digital preview of your results — all at no cost." },
      { title: "Custom Treatment Plan", body: "Your orthodontist creates a precise, phased treatment plan. You'll know your timeline, total cost, and expected results before you start." },
      { title: "Active Treatment", body: "Invisalign: wear clear aligners 20–22 hrs/day, change every 1–2 weeks, checkups every 6–8 weeks. Braces: monthly adjustments. Average adult treatment: 12–18 months." },
      { title: "Maintain Your Results", body: "A custom retainer keeps your new smile in place. We'll set you up for success with clear care instructions." }
    ],
    benefits: [
      { icon: "eye-off", title: "Discreet Options", body: "Invisalign is nearly invisible. Low-profile ceramic braces are also available for a more subtle look than traditional metal." },
      { icon: "briefcase", title: "Professional-Friendly", body: "Clear aligners are perfect for working professionals. Nobody at the office needs to know you're straightening your teeth." },
      { icon: "clock", title: "Faster Than You Think", body: "Many adult cases finish in 12–18 months. Minor crowding can be corrected in as little as 6 months." },
      { icon: "tag", title: "$1,200 Off", body: "All orthodontic treatment is currently $1,200 off — braces or Invisalign. Includes a free consultation." }
    ],
    pricing: {
      display: "$2,900–$5,950",
      promoText: "$1,200 OFF",
      promoDetail: "Braces or Invisalign — includes free consultation & 3D smile preview."
    },
    faqs: [
      { q: "Am I too old for braces or Invisalign?", a: "No. There's no upper age limit for orthodontic treatment. We've successfully treated patients in their 30s, 40s, 50s, and beyond. As long as your teeth and gums are healthy, you're a candidate." },
      { q: "Will people notice I'm wearing Invisalign?", a: "Invisalign aligners are virtually invisible. Most people won't notice you're wearing them unless you point it out. They're especially popular with working professionals." },
      { q: "How long does adult orthodontic treatment take?", a: "Most adult cases take 12–18 months with Invisalign and 12–24 months with braces. Minor cosmetic corrections can sometimes be completed in as little as 6 months." }
    ],
    testimonials: [
      { name: "David T.", stars: 5, quote: "I thought I was too old for braces at 42. My dentist recommended Invisalign and I'm so glad I did it. Nobody at work even noticed I was wearing them.", office: "Edge Dental" },
      { name: "Susan M.", stars: 5, quote: "Finally straightened my teeth at 50. The $1,200 off made it affordable and the Invisalign process was so easy. My only regret is not doing it sooner.", office: "Hello Dental" }
    ],
    relatedSlugs: ["invisalign", "traditional-braces", "porcelain-veneers"],
    ctaHeading: "Your Straighter Smile Starts Today",
    ctaBody: "Book a free orthodontic consultation. No age limit, no judgment — just a clear plan for a better smile.",
    ctaButtonText: "Get $1,200 Off Orthodontics"
  },

  // ─────────────────────────────────────────────
  // PERIODONTICS
  // ─────────────────────────────────────────────

  "deep-cleanings": {
    slug: "deep-cleanings",
    heroBackground: "navy",
    eyebrow: "Periodontics & Gum Care",
    headline: "Deep Cleanings in Las Vegas",
    tagline: "Fight gum disease before it fights you — scaling and root planing done right.",
    intro: "A deep cleaning (also called scaling and root planing) is a non-surgical treatment for gum disease. Unlike a regular cleaning that focuses on the tooth surface, a deep cleaning goes below the gum line to remove bacteria, plaque, and tartar from the root surfaces of your teeth. It's the first line of defense against periodontal disease and can stop bone loss before it progresses.",
    signs: {
      heading: "Signs You May Need a Deep Cleaning",
      items: [
        "Gums that bleed when you brush or floss",
        "Red, swollen, or tender gums",
        "Persistent bad breath that doesn't go away",
        "Gums pulling away from your teeth (receding)",
        "Loose or shifting teeth",
        "Your dentist found deep gum pockets (4mm or more)"
      ]
    },
    process: [
      { title: "Gum Assessment", body: "We measure the depth of the pockets around each tooth using a periodontal probe. Healthy pockets are 1–3mm. Pockets of 4mm or deeper indicate gum disease that needs treatment." },
      { title: "Numbing", body: "We numb the areas being treated so you're completely comfortable. The procedure is done one section (quadrant) at a time — typically two visits to complete all four quadrants." },
      { title: "Scaling", body: "Using ultrasonic and hand instruments, we remove plaque, tartar, and bacteria from below the gum line — deep into the pockets where regular brushing can't reach." },
      { title: "Root Planing", body: "We smooth the root surfaces of your teeth, making it harder for bacteria to re-attach and encouraging your gums to heal and reattach to the tooth." }
    ],
    benefits: [
      { icon: "shield", title: "Stops Gum Disease", body: "Deep cleaning removes the bacteria causing gum disease and gives your gums a chance to heal. It's the most effective non-surgical treatment available." },
      { icon: "activity", title: "Prevents Bone Loss", body: "Untreated gum disease destroys the bone supporting your teeth. Deep cleaning stops the progression before teeth become loose." },
      { icon: "heart", title: "Better Overall Health", body: "Gum disease is linked to heart disease, diabetes, and other systemic conditions. Treating it improves your overall health, not just your smile." },
      { icon: "refresh-cw", title: "Non-Surgical", body: "Deep cleaning is a non-surgical procedure. For many patients, it's enough to reverse early gum disease without the need for surgery." }
    ],
    pricing: {
      display: "$160–$226 per quadrant",
      note: "Most insurance plans cover deep cleanings when medically necessary. Treatment is typically done over two visits (2 quadrants per visit)."
    },
    faqs: [
      { q: "Does a deep cleaning hurt?", a: "We numb the area completely before starting, so you won't feel pain during the procedure. You may experience some tenderness and sensitivity for a few days afterward, which is normal and manageable." },
      { q: "How is a deep cleaning different from a regular cleaning?", a: "A regular cleaning focuses on the tooth surfaces above and just below the gum line. A deep cleaning goes much deeper — cleaning the root surfaces and pockets below the gum line where gum disease bacteria live. It's a therapeutic procedure, not just preventive." },
      { q: "How often do I need deep cleanings?", a: "After the initial deep cleaning, most patients transition to maintenance cleanings every 3–4 months (instead of the standard 6 months) to keep gum disease under control. Over time, your dentist may adjust this schedule based on your progress." }
    ],
    testimonials: [
      { name: "George T.", stars: 5, quote: "Was told I had gum disease and needed deep cleaning. The team was thorough and gentle. My gums feel so much better and my follow-up numbers improved significantly.", office: "Cadence Family Dental" },
      { name: "Marie F.", stars: 5, quote: "I was nervous about the deep cleaning but it was honestly not bad at all. They numbed everything and I barely felt it. My gums have never been healthier.", office: "Inspirada Dental" }
    ],
    relatedSlugs: ["dental-cleanings", "laser-dentistry", "gum-surgery"],
    ctaHeading: "Don't Ignore Your Gums",
    ctaBody: "Gum disease doesn't go away on its own. Book your periodontal evaluation today.",
    ctaButtonText: "Book Your Evaluation"
  },

  "laser-dentistry": {
    slug: "laser-dentistry",
    heroBackground: "navy",
    eyebrow: "Advanced Technology",
    headline: "Laser Dentistry in Las Vegas",
    tagline: "No drill, no pain — advanced laser treatment safe for all ages.",
    intro: "Laser dentistry uses focused light energy to perform a variety of dental procedures with greater precision, less discomfort, and faster healing than traditional methods. At Good Doc Dental, we use dental lasers for gum treatments, cavity preparation, tongue tie release, and more. For many procedures, lasers eliminate the need for drills, scalpels, and sutures — making treatment more comfortable and recovery faster.",
    signs: {
      heading: "Laser Dentistry Can Help With...",
      items: [
        "Gum disease treatment (bacterial reduction, pocket therapy)",
        "Gum reshaping for a gummy smile",
        "Tongue tie or lip tie release (frenectomy)",
        "Cavity preparation without a drill",
        "Cold sore and canker sore treatment",
        "Biopsy of oral lesions"
      ]
    },
    process: [
      { title: "Evaluation", body: "We assess your condition and determine if laser treatment is the best approach. For many procedures, the laser is less invasive and more comfortable than traditional methods." },
      { title: "Preparation", body: "In many cases, no numbing is needed at all. For more involved procedures, we may use a light local anesthetic. Protective eyewear is provided." },
      { title: "Laser Treatment", body: "The dental laser delivers focused light energy to the treatment area. It's precise, quiet, and most patients report little to no discomfort during the procedure." },
      { title: "Immediate Healing", body: "Laser treatment typically means less bleeding, less swelling, and faster recovery. Many patients return to normal activities the same day." }
    ],
    benefits: [
      { icon: "zap", title: "No Drill Required", body: "For many procedures, the laser replaces the drill entirely. No vibration, no pressure, no scary sounds." },
      { icon: "heart", title: "Less Pain", body: "Many laser procedures require no anesthesia at all. The laser is gentler on tissue than traditional instruments." },
      { icon: "clock", title: "Faster Healing", body: "Laser treatment causes less bleeding, less swelling, and promotes faster tissue healing compared to traditional surgical methods." },
      { icon: "shield", title: "More Precise", body: "Lasers target only the affected tissue, preserving more healthy tissue than scalpels or drills." }
    ],
    technology: [
      { title: "Diode Laser", body: "Used for soft tissue procedures including gum treatment, frenectomies, and lesion removal. Precise, gentle, and fast-healing." },
      { title: "Er:YAG Laser", body: "Used for hard tissue procedures like cavity preparation. Removes decay without the heat, vibration, or sound of a traditional drill." }
    ],
    pricing: {
      display: "Varies by procedure",
      note: "Laser treatment is often covered by insurance when used for medically necessary procedures like gum disease treatment. We'll verify your benefits."
    },
    faqs: [
      { q: "Does laser dentistry hurt?", a: "Most patients report little to no discomfort during laser procedures. Many don't even need numbing. The laser is much gentler than traditional drills and scalpels." },
      { q: "Is laser dentistry safe?", a: "Yes. Dental lasers have been used safely for decades and are approved by the FDA. They're safe for patients of all ages, including children." },
      { q: "Is laser dentistry more expensive?", a: "In most cases, laser procedures cost the same as traditional treatments. The benefits — less pain, faster healing, no stitches — come at no extra charge." }
    ],
    testimonials: [
      { name: "Kim N.", stars: 5, quote: "Had a laser gum treatment and couldn't believe how easy it was. No scalpel, minimal bleeding, and I was back to normal the next day.", office: "Hello Dental" },
      { name: "Tom L.", stars: 5, quote: "My son had a tongue tie released with a laser. The whole thing took 5 minutes, he barely fussed, and he was nursing normally within the hour. Amazing.", office: "Go Kids Dental" }
    ],
    relatedSlugs: ["deep-cleanings", "gum-surgery", "dental-sedation"],
    ctaHeading: "Experience Pain-Free Dentistry",
    ctaBody: "Ask about laser treatment options at your next visit. Less pain, faster healing, better results.",
    ctaButtonText: "Book Your Appointment"
  },

  "gum-surgery": {
    slug: "gum-surgery",
    heroBackground: "navy",
    eyebrow: "Periodontics & Gum Care",
    headline: "Gum Surgery in Las Vegas",
    tagline: "Advanced care for healthy gums — from our in-house periodontists.",
    intro: "When gum disease progresses beyond what deep cleanings can manage, gum surgery may be needed to restore the health and structure of your gums and jawbone. At Good Doc Dental, our in-house periodontists perform a range of gum surgical procedures including pocket reduction, gum grafting, and bone regeneration — all with sedation options for your comfort.",
    signs: {
      heading: "Gum Surgery May Be Needed If...",
      items: [
        "Deep cleanings haven't resolved your gum disease",
        "Gum pockets are too deep to clean effectively (6mm+)",
        "You've experienced significant bone loss around teeth",
        "Gums have receded exposing tooth roots",
        "You need gum tissue rebuilt before other dental work",
        "You want to correct a gummy smile (cosmetic)"
      ]
    },
    process: [
      { title: "Comprehensive Evaluation", body: "Our periodontist examines your gums, measures pocket depths, reviews x-rays, and creates a surgical plan tailored to your specific condition." },
      { title: "Sedation & Preparation", body: "We offer local anesthesia plus sedation options (laughing gas, oral sedation, or IV sedation) so you're completely comfortable throughout the procedure." },
      { title: "Surgical Procedure", body: "Depending on your needs: pocket reduction removes diseased tissue and reshapes bone. Gum grafting rebuilds receded gum tissue. Bone regeneration promotes new bone growth. Procedures vary from 1–3 hours." },
      { title: "Healing & Maintenance", body: "Detailed post-operative instructions and pain management are provided. Follow-up appointments ensure proper healing. Most patients are back to normal activities in 1–2 weeks." }
    ],
    benefits: [
      { icon: "shield", title: "Stop Disease Progression", body: "Gum surgery eliminates deep bacterial pockets and restores healthy gum architecture to prevent further damage." },
      { icon: "activity", title: "Rebuild Lost Tissue", body: "Gum grafting and bone regeneration can rebuild tissue and bone lost to periodontal disease." },
      { icon: "user-check", title: "In-House Specialists", body: "No outside referrals needed. Our periodontists perform all gum surgical procedures right here." },
      { icon: "moon", title: "Sedation Available", body: "Full range of sedation options so even anxious patients can get the care they need comfortably." }
    ],
    pricing: {
      display: "Varies by procedure",
      note: "Most insurance plans cover medically necessary gum surgery. We'll provide a detailed cost estimate and verify your benefits before any procedure."
    },
    faqs: [
      { q: "Is gum surgery painful?", a: "The procedure itself is painless — we use local anesthesia and sedation. You may experience some discomfort during recovery, which is manageable with prescribed pain medication and typically resolves within a week." },
      { q: "How long is recovery from gum surgery?", a: "Most patients return to normal activities within 1–2 weeks. Soft foods are recommended for the first week. Complete healing may take several weeks, but you'll feel much better within days." },
      { q: "Can gum disease come back after surgery?", a: "Gum surgery is very effective, but it's not a cure-all. You'll need to maintain excellent oral hygiene and attend regular maintenance cleanings (usually every 3–4 months) to prevent recurrence." }
    ],
    testimonials: [
      { name: "Patricia B.", stars: 5, quote: "Had gum surgery and was nervous, but the periodontist was excellent. Chose IV sedation and didn't remember a thing. My gums are healthier than they've been in years.", office: "Specialty Dental" },
      { name: "James L.", stars: 5, quote: "The gum grafting procedure went perfectly. My receding gums are now covered and my teeth are less sensitive. Really grateful for the team.", office: "Cadence Family Dental" }
    ],
    relatedSlugs: ["deep-cleanings", "laser-dentistry", "dental-sedation"],
    ctaHeading: "Advanced Gum Care You Can Trust",
    ctaBody: "Our in-house periodontists are here to help. Book your evaluation today.",
    ctaButtonText: "Book Your Periodontal Evaluation"
  },

  // ─────────────────────────────────────────────
  // PEDIATRIC (remaining sub-services)
  // ─────────────────────────────────────────────

  "baby-toddler-dentistry": {
    slug: "baby-toddler-dentistry",
    heroBackground: "sky",
    eyebrow: "Pediatric Dentistry",
    headline: "Baby & Toddler Dentistry in Las Vegas",
    tagline: "First smiles deserve the best start — first visit by age 1.",
    intro: "The American Academy of Pediatric Dentistry recommends your child's first dental visit by age 1 — or within 6 months of the first tooth. At Good Doc Dental, our pediatric specialists are trained to work with the littlest patients, making that first visit gentle, positive, and stress-free for both baby and parents. Early dental care sets the foundation for a lifetime of healthy smiles.",
    signs: {
      heading: "When to Bring Your Baby or Toddler In",
      items: [
        "Their first tooth has appeared (usually around 6 months)",
        "They're approaching their first birthday",
        "You notice white or brown spots on their teeth",
        "They seem to be in pain when eating or drinking",
        "You have questions about teething, pacifier use, or bottle habits",
        "You want to establish a dental home early"
      ]
    },
    process: [
      { title: "Knee-to-Knee Exam", body: "For babies and young toddlers, our dentist performs a gentle 'knee-to-knee' exam. The parent holds the child in their lap facing the dentist — it's comfortable and allows the dentist to see everything clearly." },
      { title: "Gentle Tooth Check", body: "We count teeth, check for early decay, examine the gums and tongue, and assess jaw and bite development. The whole exam takes just a few minutes." },
      { title: "Cleaning & Fluoride", body: "If appropriate for your child's age, we'll do a gentle cleaning and apply fluoride varnish to strengthen developing enamel and prevent cavities." },
      { title: "Parent Education", body: "We'll answer all your questions about brushing techniques, teething, diet, pacifier habits, thumb sucking, and when to expect the next teeth." }
    ],
    benefits: [
      { icon: "heart", title: "Positive First Experience", body: "Starting early helps your child build a comfortable, positive relationship with the dentist before any problems occur." },
      { icon: "search", title: "Catch Problems Early", body: "Early decay, tongue ties, and developmental issues are much easier to treat when detected early." },
      { icon: "shield", title: "Preventive Focus", body: "Fluoride, dietary guidance, and early hygiene habits dramatically reduce your child's risk of cavities." },
      { icon: "message-circle", title: "Parent Guidance", body: "Get expert answers to all your questions about your child's dental development, from teething to first brushing." }
    ],
    pricing: {
      display: "$95",
      promoText: "Kids New Patient Special",
      promoDetail: "Includes exam, x-rays (if needed), and cleaning for children ages 0–17."
    },
    faqs: [
      { q: "Why does my baby need to see a dentist so early?", a: "Early visits let us catch potential problems before they develop, educate parents on proper care, and help your child become comfortable with dental visits from the start. Cavities can form as soon as teeth appear — early intervention is key." },
      { q: "What happens at a baby's first dental visit?", a: "It's very gentle. We do a brief visual exam of your baby's teeth, gums, and jaw, usually with your baby sitting in your lap. We'll check for early signs of decay, assess development, and answer all your questions. It typically takes 15–20 minutes." },
      { q: "When should I start brushing my baby's teeth?", a: "Start as soon as the first tooth appears. Use a soft-bristled infant toothbrush with a tiny smear of fluoride toothpaste (rice-grain size) twice a day. At age 3, increase to a pea-sized amount." }
    ],
    testimonials: [
      { name: "Priya S.", stars: 5, quote: "Brought my 10-month-old for her first dental visit. The team was so gentle — she didn't cry at all. They explained everything about caring for her new teeth.", office: "Hello Kids Fort Apache" },
      { name: "Kevin M.", stars: 5, quote: "Was impressed by how well the dentist handled my toddler. The knee-to-knee exam technique was great — my son felt safe in my lap the whole time.", office: "Hello Kids Inspirada" }
    ],
    relatedSlugs: ["kids-dentistry", "kids-orthodontics", "special-needs-dentistry"],
    ctaHeading: "Give Your Little One a Healthy Start",
    ctaBody: "Schedule your baby or toddler's first dental visit at one of our 7 dedicated kids offices.",
    ctaButtonText: "Schedule Your Child's First Visit"
  },

  "kids-orthodontics": {
    slug: "kids-orthodontics",
    heroBackground: "sky",
    eyebrow: "Pediatric Orthodontics",
    headline: "Kids Orthodontics in Las Vegas",
    tagline: "Early treatment for lasting results — free consultation, $1,200 off.",
    intro: "The American Association of Orthodontists recommends every child get an orthodontic evaluation by age 7. Early evaluation doesn't always mean early treatment — but it does mean we can identify potential issues and plan the best approach. At Good Doc Dental, our orthodontists specialize in working with children, offering early interceptive treatment, traditional braces, and Invisalign First for younger patients.",
    signs: {
      heading: "Signs Your Child May Need Orthodontic Evaluation",
      items: [
        "Early or late loss of baby teeth",
        "Difficulty chewing or biting",
        "Mouth breathing or snoring",
        "Thumb sucking past age 4",
        "Crowded or misaligned teeth",
        "Jaw clicking, shifting, or asymmetry",
        "Teeth that don't come together properly"
      ]
    },
    process: [
      { title: "Free Orthodontic Evaluation", body: "We examine your child's teeth, jaw, and bite development. Digital scans and x-rays help us see what's happening below the surface. This evaluation is completely free." },
      { title: "Treatment Timing", body: "Not every child needs immediate treatment. We'll recommend the ideal time to start — whether that's now (early interceptive treatment) or waiting until more permanent teeth emerge." },
      { title: "Custom Treatment Plan", body: "If treatment is recommended, we'll present your options: early intervention appliances, traditional braces, or Invisalign First. You'll know the timeline and cost upfront." },
      { title: "Active Treatment & Monitoring", body: "During treatment, regular visits monitor progress. If we recommend waiting, we'll monitor your child's development at no charge until the right time to start." }
    ],
    benefits: [
      { icon: "timer", title: "Timing Is Everything", body: "Early evaluation lets us intervene at the optimal time — which can mean shorter treatment, better results, and avoiding more complex procedures later." },
      { icon: "smile", title: "Multiple Options", body: "Braces, Invisalign First, palate expanders, and other appliances — we match the treatment to your child's specific needs and age." },
      { icon: "piggy-bank", title: "Free Monitoring", body: "If your child isn't ready for treatment yet, we'll monitor their development at no charge until the time is right." },
      { icon: "tag", title: "$1,200 Off", body: "All orthodontic treatment — braces or Invisalign — is currently $1,200 off. Plus the initial consultation is always free." }
    ],
    pricing: {
      display: "$2,900–$5,950",
      promoText: "$1,200 OFF",
      promoDetail: "Braces or Invisalign for kids — includes free consultation & 3D scan."
    },
    faqs: [
      { q: "At what age should my child see an orthodontist?", a: "The American Association of Orthodontists recommends an initial evaluation by age 7. This doesn't mean treatment starts at 7 — it means we can spot potential issues early and plan the best approach." },
      { q: "What is Phase 1 (early) orthodontic treatment?", a: "Phase 1 treatment typically happens between ages 7–10 and addresses specific issues like crossbites, severe crowding, or jaw growth problems. It uses appliances like palate expanders or partial braces. Not every child needs Phase 1 — it's only recommended when early intervention will produce significantly better results." },
      { q: "How much do kids braces cost?", a: "Kids braces and Invisalign at Good Doc Dental range from $2,900 to $5,950 depending on complexity. Right now, all orthodontic treatment is $1,200 off. Many dental insurance plans include orthodontic benefits for children." }
    ],
    testimonials: [
      { name: "Alicia M.", stars: 5, quote: "Took my 7-year-old for a free orthodontic evaluation. They said he doesn't need treatment yet but they'll monitor him for free. No pressure, no unnecessary treatment. Really appreciated the honesty.", office: "Just for Kids Durango" },
      { name: "Steve L.", stars: 5, quote: "My daughter started Phase 1 treatment with a palate expander. The orthodontist was great with her and explained everything to us clearly. Her bite is already improving.", office: "Canyon Family Dentistry" }
    ],
    relatedSlugs: ["kids-dentistry", "invisalign", "traditional-braces"],
    ctaHeading: "Is It Time for an Orthodontic Evaluation?",
    ctaBody: "Free orthodontic consultations for kids. Early evaluation leads to better outcomes — book today.",
    ctaButtonText: "Book a Free Kids Ortho Consultation"
  },

  "special-needs-dentistry": {
    slug: "special-needs-dentistry",
    heroBackground: "sky",
    eyebrow: "Pediatric Dentistry",
    headline: "Special Needs Dentistry in Las Vegas",
    tagline: "Compassionate care for every patient — because every smile matters.",
    intro: "At Good Doc Dental, we believe every child and adult deserves access to quality dental care — regardless of physical, developmental, cognitive, or behavioral challenges. Our pediatric specialists and general dentists are trained to provide compassionate, patient-centered care for individuals with special needs. We take the time to understand each patient's unique requirements and adapt our approach accordingly.",
    signs: {
      heading: "We Provide Care For Patients With...",
      items: [
        "Autism spectrum disorder",
        "Down syndrome",
        "Cerebral palsy",
        "Intellectual and developmental disabilities",
        "Sensory processing disorders",
        "Severe dental anxiety or phobia",
        "Physical disabilities affecting mobility"
      ]
    },
    process: [
      { title: "Pre-Visit Planning", body: "Before your first visit, we'll talk with you about your loved one's specific needs, triggers, and preferences. We can schedule extra time, prepare the room, and plan our approach in advance." },
      { title: "Comfortable Introduction", body: "We take it slow. Desensitization visits (just to see the office and meet the team) are always available. We use visual schedules, social stories, and other communication aids when helpful." },
      { title: "Adapted Treatment", body: "Our team adapts examination and treatment techniques to each patient. Sedation options (laughing gas, oral sedation) are available when needed for comfort and safety." },
      { title: "Ongoing Relationship", body: "Consistency matters. We'll assign the same team members when possible so your loved one builds familiarity and trust over time." }
    ],
    benefits: [
      { icon: "heart", title: "Patient-Centered Approach", body: "We adapt to the patient — not the other way around. Every treatment plan is individualized." },
      { icon: "clock", title: "Flexible Scheduling", body: "We offer longer appointment times, preferred time slots, and desensitization visits to accommodate special needs." },
      { icon: "moon", title: "Sedation Options", body: "Laughing gas and oral sedation are available for patients who need extra help staying calm and comfortable." },
      { icon: "users", title: "Trained Team", body: "Our pediatric and general dentists have specialized training in working with patients who have physical, developmental, and behavioral challenges." }
    ],
    pricing: {
      display: "Varies",
      note: "Pricing depends on the services needed. Many insurance plans cover preventive and restorative dental care. We'll verify benefits and create a transparent cost plan."
    },
    faqs: [
      { q: "Do you work with patients with autism?", a: "Yes. Our team has experience working with patients on the autism spectrum. We can accommodate sensory sensitivities, use visual schedules, allow desensitization visits, and adjust our approach based on each patient's specific needs." },
      { q: "What sedation options are available for special needs patients?", a: "We offer laughing gas (nitrous oxide) and oral sedation for patients who need help staying calm during treatment. For more complex procedures, we can discuss additional sedation options on a case-by-case basis." },
      { q: "Can I stay with my child during the appointment?", a: "Absolutely. Parents and caregivers are always welcome in the treatment room. Your presence often helps the patient feel more comfortable and secure." }
    ],
    testimonials: [
      { name: "Maria G.", stars: 5, quote: "My son has autism and dental visits used to be a nightmare. The team at Good Doc was incredible — they took their time, let him explore the office first, and he actually sat for the exam. We cried happy tears in the car.", office: "Red Rock Kids Dental" },
      { name: "Thomas K.", stars: 5, quote: "Finding a dentist who truly understands special needs is so hard. Good Doc Dental gets it. They're patient, kind, and they've made dental care accessible for our daughter.", office: "Just for Kids Blue Diamond" }
    ],
    relatedSlugs: ["kids-dentistry", "dental-sedation", "baby-toddler-dentistry"],
    ctaHeading: "Every Patient Deserves Great Care",
    ctaBody: "Let's talk about your loved one's needs. We'll create a care plan that works for your family.",
    ctaButtonText: "Schedule a Consultation"
  },

  // ─────────────────────────────────────────────
  // GENERAL
  // ─────────────────────────────────────────────

  "dental-sedation": {
    slug: "dental-sedation",
    heroBackground: "navy",
    eyebrow: "Comfort & Sedation",
    headline: "Dental Sedation in Las Vegas",
    tagline: "Relax — we've got you covered. Sedation options for every comfort level.",
    intro: "Dental anxiety is real, and it keeps millions of people from getting the care they need. At Good Doc Dental, we offer multiple sedation options so you can get any dental procedure done comfortably — from routine cleanings to oral surgery. Whether you want to take the edge off or be fully asleep, we've got an option for you.",
    signs: {
      heading: "Sedation Might Be Right for You If...",
      items: [
        "You feel anxious or fearful about dental visits",
        "You have a strong gag reflex",
        "You need extensive dental work done in one visit",
        "You have difficulty getting numb with local anesthesia alone",
        "Past dental experiences have been traumatic",
        "You have sensory sensitivities or special needs"
      ]
    },
    process: [
      { title: "Discuss Your Options", body: "We'll talk about your anxiety level, the procedure planned, and your medical history to recommend the best sedation option for you." },
      { title: "Pre-Appointment Prep", body: "Depending on the sedation type, we may have specific instructions — like fasting for IV sedation or arranging a ride home." },
      { title: "Relaxed Treatment", body: "Sedation is administered before or at the start of your procedure. You'll be monitored throughout by trained staff. You'll be comfortable and calm the entire time." },
      { title: "Safe Recovery", body: "After your procedure, we monitor you until you're ready to go home. For deeper sedation, you'll need someone to drive you. Recovery is smooth and most patients feel normal within hours." }
    ],
    benefits: [
      { icon: "moon", title: "Multiple Options", body: "From mild (laughing gas) to deep (IV sedation or general anesthesia) — we match the sedation level to your needs." },
      { icon: "shield", title: "Safe & Monitored", body: "All sedation is administered by trained professionals and you're monitored throughout the procedure." },
      { icon: "clock", title: "Get More Done in Less Time", body: "Sedation lets us perform multiple procedures in a single visit, reducing the number of appointments you need." },
      { icon: "heart", title: "Break the Anxiety Cycle", body: "A positive, comfortable experience can help reduce dental anxiety over time. Many patients find subsequent visits easier." }
    ],
    pricing: {
      display: "Varies by type",
      note: "Laughing gas is typically $50–$100 per visit. Oral and IV sedation costs vary by procedure and duration. Insurance may cover sedation when medically necessary."
    },
    faqs: [
      { q: "What sedation options do you offer?", a: "We offer laughing gas (nitrous oxide) for mild relaxation, oral sedation (a pill taken before your appointment) for moderate relaxation, IV sedation for a deeper twilight state, and general anesthesia for complete sleep. The right choice depends on your anxiety level and the procedure being performed." },
      { q: "Will I be completely asleep?", a: "It depends on the sedation type. With laughing gas, you're fully awake but relaxed. With oral sedation, you're drowsy but responsive. With IV sedation, you're in a twilight state and unlikely to remember the procedure. With general anesthesia, you're completely asleep." },
      { q: "Is dental sedation safe?", a: "Yes. All sedation methods we use are well-studied, FDA-approved, and administered by trained professionals. We review your medical history, monitor your vitals throughout the procedure, and ensure you're recovered before you leave." }
    ],
    testimonials: [
      { name: "Sandra M.", stars: 5, quote: "I have severe dental anxiety and avoided the dentist for 10 years. IV sedation at Good Doc changed everything. I didn't feel or remember anything. Getting all my dental work done now.", office: "Specialty Dental" },
      { name: "Tyler K.", stars: 5, quote: "Chose laughing gas for my wisdom teeth extraction and it was perfect. Took the edge off without making me feel out of it. Would definitely do it again.", office: "Canyon Family Dentistry" }
    ],
    relatedSlugs: ["emergency-dental-care", "wisdom-tooth-extractions", "root-canals"],
    ctaHeading: "Don't Let Anxiety Keep You from Great Care",
    ctaBody: "Talk to us about sedation options. We'll find the right approach to make your visit comfortable.",
    ctaButtonText: "Book a Comfortable Visit"
  }
};
