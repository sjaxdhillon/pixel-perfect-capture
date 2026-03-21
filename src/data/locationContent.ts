export interface LocationContent {
  slug: string;
  metaTitle: string;
  heroHeadline: string;
  heroBody: string;
  aboutHeading: string;
  aboutBody: string;
  neighborhood: string;
  nearbyLandmarks: string;
  testimonials: { name: string; stars: number; quote: string }[];
}

export const locationContentMap: Record<string, LocationContent> = {
  "summer-dental": {
    slug: "summer-dental",
    metaTitle: "Summer Dental & Orthodontics | Summerlin Dentist | Good Doc Dental",
    heroHeadline: "Summer Dental & Orthodontics",
    heroBody: "Located in the heart of Summerlin on Lavender Hill Drive, Summer Dental has been serving families with comprehensive dental care including orthodontics, cosmetic dentistry, implants, and emergency services. Open 6 days a week with Saturday hours.",
    aboutHeading: "Your Summerlin Neighborhood Dentist",
    aboutBody: "Summer Dental & Orthodontics is one of Summerlin's most trusted dental practices. We offer everything from routine cleanings and exams to advanced procedures like dental implants, Invisalign, and same-day crowns — all under one roof. Our team is passionate about making dental care comfortable, affordable, and convenient. Whether you're a long-time Summerlin resident or new to the area, you'll feel at home here.",
    neighborhood: "Summerlin",
    nearbyLandmarks: "Near Downtown Summerlin, Red Rock Casino, and Tivoli Village",
    testimonials: [
      { name: "Amanda L.", stars: 5, quote: "I was so nervous about going to the dentist after 8 years. The team at Summer Dental was so kind and patient — they made me feel completely at ease." },
      { name: "Brian C.", stars: 5, quote: "Best dental experience I've had in Vegas. Quick, professional, and they actually explained everything before doing anything. Highly recommend." }
    ]
  },
  "cadence-kids-dental": {
    slug: "cadence-kids-dental",
    metaTitle: "Cadence Kids Dental & Orthodontics | Henderson Kids Dentist | Good Doc Dental",
    heroHeadline: "Cadence Kids Dental & Orthodontics",
    heroBody: "A dedicated pediatric dental office in Henderson's Cadence community. Cadence Kids specializes in making dental visits fun and stress-free for children of all ages — from first tooth to teen braces. Open 6 days a week.",
    aboutHeading: "Henderson's Favorite Kids Dentist",
    aboutBody: "Cadence Kids Dental & Orthodontics is designed from the ground up for young patients. Our colorful, kid-friendly office features child-sized chairs, TVs in the ceiling, and a treasure chest for every visit. We offer comprehensive pediatric dental care including exams, cleanings, sealants, fluoride treatments, and orthodontics. Our pediatric dental team is specially trained to work with anxious children, toddlers, and patients with special needs.",
    neighborhood: "Cadence, Henderson",
    nearbyLandmarks: "Near Cadence Community Park, Lake Mead Pkwy & Boulder Hwy",
    testimonials: [
      { name: "Maria S.", stars: 5, quote: "My kids actually look forward to going to the dentist! The Cadence Kids team is amazing with children. They make it fun and my kids leave with huge smiles." },
      { name: "Daniel P.", stars: 5, quote: "We switched to Cadence Kids after a bad experience elsewhere. What a difference — patient, gentle, and my daughter is no longer scared of the dentist." }
    ]
  },
  "cadence-family-dental": {
    slug: "cadence-family-dental",
    metaTitle: "Cadence Family Dental & Orthodontics | Henderson Dentist | Good Doc Dental",
    heroHeadline: "Cadence Family Dental & Orthodontics",
    heroBody: "Full-service family dentistry in Henderson's Cadence master-planned community. From routine cleanings to dental implants and Invisalign — we've got the whole family covered. Open 6 days a week.",
    aboutHeading: "Family Dental Care in Cadence",
    aboutBody: "Cadence Family Dental & Orthodontics serves families throughout Henderson with comprehensive dental care. Located on East Lake Mead Parkway, we're convenient to Cadence, Whitney Ranch, and surrounding Henderson neighborhoods. Our team provides general, cosmetic, restorative, and orthodontic services — all in one comfortable location.",
    neighborhood: "Cadence, Henderson",
    nearbyLandmarks: "Near Lake Mead Pkwy, Boulder Hwy, and Cadence Community",
    testimonials: [
      { name: "Lisa T.", stars: 5, quote: "The whole family goes here — my husband, me, and our two teenagers. Cadence Family makes it so easy to schedule everyone back to back." },
      { name: "Robert K.", stars: 5, quote: "Had an emergency on a Saturday and they got me in the same day. Great team, fair prices, and they actually listen." }
    ]
  },
  "canyon-family-dentistry": {
    slug: "canyon-family-dentistry",
    metaTitle: "Canyon Family Dentistry & Orthodontics | Skye Canyon Dentist | Good Doc Dental",
    heroHeadline: "Canyon Family Dentistry & Orthodontics",
    heroBody: "Serving the Skye Canyon and Northwest Las Vegas community with complete dental and orthodontic care. From kids' cleanings to dental implants — we're your neighborhood dental home. Open 6 days a week.",
    aboutHeading: "Skye Canyon's Trusted Dental Practice",
    aboutBody: "Canyon Family Dentistry & Orthodontics is the go-to dental office for Skye Canyon, Providence, and Northwest Las Vegas families. We offer a full range of services including preventive care, cosmetic dentistry, implants, orthodontics (braces and Invisalign), oral surgery, and emergency dental care. Our modern office on Skye Canyon Park Drive is equipped with the latest digital technology.",
    neighborhood: "Skye Canyon, Northwest Las Vegas",
    nearbyLandmarks: "Near Skye Canyon Park, US-95, and Providence",
    testimonials: [
      { name: "Jennifer M.", stars: 5, quote: "Canyon Family is the best dental office in Skye Canyon. They take their time, explain everything, and never push unnecessary treatments." },
      { name: "David R.", stars: 5, quote: "Love having a great dentist right in Skye Canyon. No more driving across town. They're thorough, friendly, and always on time." }
    ]
  },
  "durango-dental": {
    slug: "durango-dental",
    metaTitle: "Durango Dental & Orthodontics | Southwest Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "Durango Dental & Orthodontics",
    heroBody: "Comprehensive dental and orthodontic care in Southwest Las Vegas on South Durango Drive. We offer everything from routine exams to same-day crowns, Invisalign, and dental implants. Open 6 days a week.",
    aboutHeading: "Southwest Las Vegas Dental Care",
    aboutBody: "Durango Dental & Orthodontics serves families in Spring Valley, Enterprise, and Southwest Las Vegas with quality dental care at affordable prices. Our Durango Drive location is easy to access from the 215 Beltway and offers convenient evening and Saturday hours. We provide general dentistry, cosmetic procedures, restorative work, orthodontics, and same-day emergency care.",
    neighborhood: "Spring Valley / Southwest Las Vegas",
    nearbyLandmarks: "Near 215 Beltway, South Durango Dr & Warm Springs Rd",
    testimonials: [
      { name: "Patricia M.", stars: 5, quote: "Durango Dental is hands down the best dental office I've been to. They treated my emergency like it was the most important thing on their schedule." },
      { name: "Chris H.", stars: 5, quote: "Affordable, professional, and friendly. Got Invisalign here with the $1,200 off deal and couldn't be happier with my results." }
    ]
  },
  "edge-dental": {
    slug: "edge-dental",
    metaTitle: "Edge Dental & Orthodontics | Blue Diamond Rd Dentist | Good Doc Dental",
    heroHeadline: "Edge Dental & Orthodontics",
    heroBody: "Located on Blue Diamond Road in Southwest Las Vegas, Edge Dental offers full-service family dentistry and orthodontics. From preventive care to cosmetic makeovers and dental implants — we do it all. Open 6 days a week.",
    aboutHeading: "Your Blue Diamond Road Dental Home",
    aboutBody: "Edge Dental & Orthodontics is a trusted dental practice serving Enterprise, Southern Highlands, and Mountain's Edge communities. Our Blue Diamond Road office provides comprehensive care including cleanings, exams, fillings, crowns, bridges, implants, Invisalign, braces, teeth whitening, and emergency services. We're committed to making quality dental care accessible and affordable.",
    neighborhood: "Enterprise / Mountain's Edge",
    nearbyLandmarks: "Near Mountain's Edge, Southern Highlands, and Blue Diamond Rd",
    testimonials: [
      { name: "David T.", stars: 5, quote: "I thought I was too old for braces at 42. My dentist at Edge recommended Invisalign and I'm so glad I did it. Nobody at work even noticed." },
      { name: "Sarah K.", stars: 5, quote: "Edge Dental is fantastic. My whole family goes here. The staff is so welcoming and the office is always clean and modern." }
    ]
  },
  "go-kids-dental": {
    slug: "go-kids-dental",
    metaTitle: "Go Kids Dental & Orthodontics | Skye Canyon Kids Dentist | Good Doc Dental",
    heroHeadline: "Go Kids Dental & Orthodontics Sky Canyon",
    heroBody: "A dedicated kids dental office in Skye Canyon designed to make every visit fun and stress-free. Pediatric exams, cleanings, sealants, fluoride, and orthodontics for children of all ages. Open 6 days a week.",
    aboutHeading: "Skye Canyon's Kids-Only Dental Office",
    aboutBody: "Go Kids Dental is built from the ground up for young patients. Located in the Skye Canyon community, our colorful, kid-friendly office makes dental visits exciting — not scary. We specialize in pediatric dentistry for babies, toddlers, children, and teens. Our team is trained in pediatric behavior management and offers laughing gas for anxious patients. Every visit ends with a trip to the treasure chest.",
    neighborhood: "Skye Canyon, Northwest Las Vegas",
    nearbyLandmarks: "Near Skye Canyon Park and W Skye Canyon Park Dr",
    testimonials: [
      { name: "Jennifer M.", stars: 5, quote: "My daughter was terrified of the dentist. The team at Go Kids made her feel so safe and comfortable — she actually asked when she could go back." },
      { name: "Michael B.", stars: 5, quote: "Best pediatric dental office in the northwest. They're patient, gentle, and my son loves going. The treasure chest doesn't hurt either!" }
    ]
  },
  "hello-dental": {
    slug: "hello-dental",
    metaTitle: "Hello Dental & Orthodontics | Fort Apache Rd Dentist | Good Doc Dental",
    heroHeadline: "Hello Dental & Orthodontics",
    heroBody: "Full-service family dental care on South Fort Apache Road in Southwest Las Vegas. General dentistry, orthodontics, cosmetic procedures, implants, and emergency care — all under one roof. Open 6 days a week.",
    aboutHeading: "Fort Apache Road Family Dentistry",
    aboutBody: "Hello Dental & Orthodontics provides comprehensive dental care to families in Spring Valley, Summerlin South, and surrounding Southwest Las Vegas neighborhoods. Our Fort Apache Road location offers convenient access and a comfortable, modern environment. From your child's first checkup to your parent's dental implant — we treat the whole family.",
    neighborhood: "Spring Valley / Southwest Las Vegas",
    nearbyLandmarks: "Near S Fort Apache Rd, Spring Valley, and Summerlin South",
    testimonials: [
      { name: "Karen L.", stars: 5, quote: "Hello Dental lives up to their name — genuinely welcoming every single time. I've been coming here for two years and wouldn't go anywhere else." },
      { name: "James P.", stars: 5, quote: "Got my implant done here and the whole process was smooth from start to finish. Great communication and fair pricing." }
    ]
  },
  "hello-kids-fort-apache": {
    slug: "hello-kids-fort-apache",
    metaTitle: "Hello Kids Dental Fort Apache | Southwest Las Vegas Kids Dentist | Good Doc Dental",
    heroHeadline: "Hello Kids Dental Fort Apache",
    heroBody: "A dedicated pediatric dental office on South Fort Apache Road, serving young patients from first tooth to teen years. Fun, friendly, and designed just for kids. Open 6 days a week.",
    aboutHeading: "Kids Dental Care on Fort Apache",
    aboutBody: "Hello Kids Dental Fort Apache is a pediatric-focused office that makes every child's dental visit a positive experience. Located alongside Hello Dental & Orthodontics on Fort Apache Road, our kids-only environment features age-appropriate decor, gentle care, and a team that specializes in working with young patients — including those with dental anxiety or special needs.",
    neighborhood: "Spring Valley / Southwest Las Vegas",
    nearbyLandmarks: "Near S Fort Apache Rd and Spring Valley",
    testimonials: [
      { name: "Priya S.", stars: 5, quote: "Hello Kids is amazing. My 3-year-old had her first dental visit here and she didn't cry once. The team was so gentle and patient." },
      { name: "Tony G.", stars: 5, quote: "Both my kids have been going to Hello Kids for years. Great with anxious kids, and the $95 new patient special is a great deal." }
    ]
  },
  "hello-kids-inspirada": {
    slug: "hello-kids-inspirada",
    metaTitle: "Hello Kids Dental Inspirada | Henderson Kids Dentist | Good Doc Dental",
    heroHeadline: "Hello Kids Dental Inspirada",
    heroBody: "Pediatric dental care in Henderson's Inspirada community. Designed for babies, toddlers, kids, and teens — with a fun, welcoming environment and gentle approach. Open 6 days a week.",
    aboutHeading: "Kids Dental Care in Inspirada",
    aboutBody: "Hello Kids Dental Inspirada brings kid-friendly dental care to South Henderson's Inspirada master-planned community. Our pediatric dental team provides comprehensive care for children from their first tooth through their teen years. We offer preventive exams, cleanings, sealants, fluoride treatments, orthodontics, and emergency care in a colorful, comfortable setting.",
    neighborhood: "Inspirada, South Henderson",
    nearbyLandmarks: "Near Via Inspirada and Inspirada Community Park",
    testimonials: [
      { name: "Angela R.", stars: 5, quote: "Love having a kids dentist right here in Inspirada. My two boys are always excited for their dental appointments — that says everything." },
      { name: "Kevin M.", stars: 5, quote: "The Hello Kids team in Inspirada is phenomenal with toddlers. My 18-month-old had her first visit and they were incredibly gentle." }
    ]
  },
  "inspirada-dental": {
    slug: "inspirada-dental",
    metaTitle: "Inspirada Dental & Orthodontics | South Henderson Dentist | Good Doc Dental",
    heroHeadline: "Inspirada Dental & Orthodontics",
    heroBody: "Comprehensive family dental and orthodontic care in Henderson's Inspirada community. Cleanings, cosmetic dentistry, implants, Invisalign, and emergency services. Open 6 days a week.",
    aboutHeading: "Your Inspirada Family Dentist",
    aboutBody: "Inspirada Dental & Orthodontics serves families throughout South Henderson, Inspirada, and Anthem. Our Via Inspirada location offers a full range of dental services including preventive care, cosmetic procedures, restorative dentistry, orthodontics, implants, and emergency care. We pride ourselves on transparent pricing, minimal wait times, and a welcoming environment for the whole family.",
    neighborhood: "Inspirada, South Henderson",
    nearbyLandmarks: "Near Via Inspirada, Anthem, and South Henderson",
    testimonials: [
      { name: "Sophia N.", stars: 5, quote: "I was putting off my wisdom teeth for years because I was terrified. The team at Inspirada made me feel so comfortable and the whole thing was done in under an hour." },
      { name: "Mark T.", stars: 5, quote: "Inspirada Dental is excellent. Moved to Henderson last year and this is by far the best dental office I've found. Very transparent about pricing." }
    ]
  },
  "just-for-kids-blue-diamond": {
    slug: "just-for-kids-blue-diamond",
    metaTitle: "Just for Kids Dentistry Blue Diamond | Southwest Las Vegas Kids Dentist | Good Doc Dental",
    heroHeadline: "Just for Kids Dentistry Blue Diamond",
    heroBody: "A kids-only dental office on Blue Diamond Road in Southwest Las Vegas. Pediatric exams, cleanings, fluoride, sealants, and orthodontics in a fun, colorful environment. Open 6 days a week.",
    aboutHeading: "Blue Diamond's Kids-Only Dental Office",
    aboutBody: "Just for Kids Dentistry on Blue Diamond Road is dedicated exclusively to pediatric patients. Our office is designed to make kids feel comfortable and excited about dental care — from the moment they walk in to the treasure chest on the way out. We serve families in Mountain's Edge, Enterprise, Southern Highlands, and surrounding communities.",
    neighborhood: "Enterprise / Mountain's Edge",
    nearbyLandmarks: "Near Blue Diamond Rd, Mountain's Edge, and Southern Highlands",
    testimonials: [
      { name: "Carlos R.", stars: 5, quote: "Both my kids go to Just for Kids on Blue Diamond. The office is colorful, the staff is amazing, and my kids leave every appointment with huge smiles." },
      { name: "Nina W.", stars: 5, quote: "Found Just for Kids when we moved to Mountain's Edge and we couldn't be happier. They're so good with young kids and the $95 special is a great value." }
    ]
  },
  "just-for-kids-durango": {
    slug: "just-for-kids-durango",
    metaTitle: "Just for Kids Dentistry Durango | Northwest Las Vegas Kids Dentist | Good Doc Dental",
    heroHeadline: "Just for Kids Dentistry Durango",
    heroBody: "Pediatric dental care in Northwest Las Vegas on North Durango Drive. Kids-only environment with gentle, fun dental care for babies through teens. Open 6 days a week.",
    aboutHeading: "Northwest Las Vegas Kids Dentist",
    aboutBody: "Just for Kids Dentistry Durango brings specialized pediatric care to the Centennial Hills and Northwest Las Vegas area. Our Durango Drive office is designed exclusively for children, offering a colorful, fun atmosphere with a team that's trained to work with patients of all ages and comfort levels — including those with dental anxiety.",
    neighborhood: "Centennial Hills / Northwest Las Vegas",
    nearbyLandmarks: "Near N Durango Dr, Centennial Hills, and Floyd Lamb Park",
    testimonials: [
      { name: "Alicia M.", stars: 5, quote: "Just for Kids on Durango is the only place my daughter will go. The team made her first visit so fun she keeps asking when she can go back." },
      { name: "Steve L.", stars: 5, quote: "Great kids dental office in the northwest. They got us in for an emergency on a Saturday and took amazing care of my son." }
    ]
  },
  "las-vegas-blvd-dental": {
    slug: "las-vegas-blvd-dental",
    metaTitle: "Las Vegas Blvd Dental & Orthodontics | South Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "Las Vegas Blvd Dental & Orthodontics",
    heroBody: "Full-service family dentistry on South Las Vegas Boulevard. Cleanings, crowns, implants, Invisalign, and emergency care — convenient to South Point and Silverado Ranch. Open 6 days a week.",
    aboutHeading: "South Las Vegas Blvd Dental Care",
    aboutBody: "Las Vegas Blvd Dental & Orthodontics serves families in the Silverado Ranch, South Point, and South Las Vegas corridor. Our Las Vegas Boulevard location is easy to access and offers comprehensive dental services including preventive care, cosmetic dentistry, implants, orthodontics, and same-day emergency appointments. We accept 16 insurance plans and offer financing for all major procedures.",
    neighborhood: "Silverado Ranch / South Las Vegas",
    nearbyLandmarks: "Near South Point, Silverado Ranch, and Las Vegas Blvd South",
    testimonials: [
      { name: "Rachel G.", stars: 5, quote: "Las Vegas Blvd Dental is amazing. I needed a crown and they did it all in one visit. No temporary, no second appointment. Incredible." },
      { name: "Jorge V.", stars: 5, quote: "Moved from California and was nervous about finding a good dentist. LV Blvd Dental exceeded my expectations in every way." }
    ]
  },
  "north-5th-dental": {
    slug: "north-5th-dental",
    metaTitle: "North 5th Dental & Orthodontics | North Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "North 5th Dental & Orthodontics",
    heroBody: "Family dental care in North Las Vegas on North 5th Street. General dentistry, orthodontics, implants, and emergency services for the entire family. Open 6 days a week.",
    aboutHeading: "North Las Vegas Family Dental",
    aboutBody: "North 5th Dental & Orthodontics is North Las Vegas's go-to dental office for comprehensive family care. Located on North 5th Street near Aliante, we provide general dentistry, cosmetic procedures, dental implants, Invisalign, braces, and emergency care. Our team is committed to making quality dental care accessible and affordable for North Las Vegas families.",
    neighborhood: "Aliante / North Las Vegas",
    nearbyLandmarks: "Near Aliante, N 5th St, and I-215",
    testimonials: [
      { name: "Terrence J.", stars: 5, quote: "Finally a great dentist in North Las Vegas. North 5th Dental is professional, affordable, and they actually care about their patients." },
      { name: "Stephanie R.", stars: 5, quote: "The whole staff at North 5th is wonderful. They make dental visits as pleasant as possible and the prices are very fair." }
    ]
  },
  "providence-dental": {
    slug: "providence-dental",
    metaTitle: "Providence Dental & Orthodontics | Northwest Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "Providence Dental & Orthodontics",
    heroBody: "Comprehensive dental and orthodontic care in the Providence community of Northwest Las Vegas. From routine exams to implants and Invisalign — your dental home is here. Open 6 days a week.",
    aboutHeading: "Providence's Trusted Family Dentist",
    aboutBody: "Providence Dental & Orthodontics serves the growing Providence, Centennial Hills, and Northwest Las Vegas community with full-service dental care. Located on Hualapai Way, we're easy to reach from the 95 and offer a wide range of services including preventive, cosmetic, restorative, and orthodontic care. Our modern office features the latest dental technology for comfortable, efficient treatment.",
    neighborhood: "Providence / Centennial Hills",
    nearbyLandmarks: "Near Hualapai Way, Providence, and US-95",
    testimonials: [
      { name: "Amanda W.", stars: 5, quote: "Providence Dental is top-notch. They take such good care of my whole family. The office is beautiful and the team is always friendly." },
      { name: "Paul D.", stars: 5, quote: "I've tried several dentists in the area and Providence Dental is the clear winner. Honest, transparent, and great work." }
    ]
  },
  "red-rock-kids-dental": {
    slug: "red-rock-kids-dental",
    metaTitle: "Red Rock Kids Dental | Summerlin Kids Dentist | Good Doc Dental",
    heroHeadline: "Red Rock Kids Dental",
    heroBody: "Summerlin's dedicated kids dental office on West Charleston Boulevard. Fun, gentle pediatric dental care for babies, toddlers, kids, and teens. Open 6 days a week.",
    aboutHeading: "Summerlin's Kids-Only Dentist",
    aboutBody: "Red Rock Kids Dental brings specialized pediatric care to the Summerlin and West Las Vegas community. Our Charleston Boulevard office is designed exclusively for children, offering a warm, colorful environment where kids feel safe and excited about dental visits. We provide comprehensive pediatric services including exams, cleanings, sealants, fluoride, orthodontics, and emergency care.",
    neighborhood: "Summerlin / West Las Vegas",
    nearbyLandmarks: "Near W Charleston Blvd, Red Rock Canyon, and Summerlin",
    testimonials: [
      { name: "Christine B.", stars: 5, quote: "Red Rock Kids is the best kids dentist in Summerlin. My kids have been going here for 3 years and they love it. The team is amazing." },
      { name: "Ryan F.", stars: 5, quote: "Brought my nervous 4-year-old and they handled her with such patience. She left with a smile and a toy from the treasure chest." }
    ]
  },
  "westside-dental": {
    slug: "westside-dental",
    metaTitle: "Westside Dental & Orthodontics | West Charleston Dentist | Good Doc Dental",
    heroHeadline: "Westside Dental & Orthodontics",
    heroBody: "Family dental care on West Charleston Boulevard serving Summerlin and West Las Vegas. Complete dental and orthodontic services including implants, Invisalign, and emergency care. Open 6 days a week.",
    aboutHeading: "West Las Vegas Family Dental Care",
    aboutBody: "Westside Dental & Orthodontics provides comprehensive family dental care on West Charleston Boulevard. Conveniently located for Summerlin, Sun City, and West Las Vegas residents, we offer general dentistry, cosmetic procedures, restorative care, orthodontics, and same-day emergency appointments. Our team prioritizes patient comfort, transparent pricing, and exceptional results.",
    neighborhood: "Summerlin / West Las Vegas",
    nearbyLandmarks: "Near W Charleston Blvd, Summerlin, and Sun City",
    testimonials: [
      { name: "Linda H.", stars: 5, quote: "Westside Dental is convenient, professional, and affordable. I've been a patient for over a year and every visit has been great." },
      { name: "Mike S.", stars: 5, quote: "Got my teeth whitened at Westside and the results were amazing. The staff made the whole experience comfortable and fun." }
    ]
  },
  "boulder-dental": {
    slug: "boulder-dental",
    metaTitle: "Boulder Dental & Orthodontics | East Henderson Dentist | Good Doc Dental",
    heroHeadline: "Boulder Dental & Orthodontics",
    heroBody: "Full-service family dental care on South Boulder Highway in Henderson. General dentistry, orthodontics, implants, cosmetic dentistry, and emergency care. Open 6 days a week.",
    aboutHeading: "East Henderson Family Dentistry",
    aboutBody: "Boulder Dental & Orthodontics serves families in East Henderson, Whitney Ranch, and the Boulder Highway corridor with comprehensive dental care. From routine cleanings to dental implants and Invisalign, we provide quality care at transparent prices. Our team is committed to making every visit comfortable and stress-free.",
    neighborhood: "East Henderson / Whitney Ranch",
    nearbyLandmarks: "Near S Boulder Hwy, Whitney Ranch, and Lake Mead",
    testimonials: [
      { name: "Frank R.", stars: 5, quote: "Boulder Dental is the real deal. Honest, affordable, and they take the time to explain everything. Best dentist I've had in Henderson." },
      { name: "Maria D.", stars: 5, quote: "Needed emergency dental work on a weekend and Boulder Dental got me in the same day. Lifesaver. Can't recommend them enough." }
    ]
  },
  "specialty-dental-cadence": {
    slug: "specialty-dental-cadence",
    metaTitle: "Specialty Dental & Orthodontics | Henderson Specialist | Good Doc Dental",
    heroHeadline: "Specialty Dental & Orthodontics",
    heroBody: "Specialized dental care in Henderson's Cadence area. Orthodontics, dental implants, oral surgery, and endodontics — advanced care from in-house specialists. Open 6 days a week.",
    aboutHeading: "Henderson's Dental Specialty Center",
    aboutBody: "Specialty Dental & Orthodontics provides advanced dental care including orthodontics, implant placement, oral surgery, and endodontic (root canal) therapy. Located in the Cadence area of Henderson, we serve as the specialty referral center for patients who need procedures beyond what a general dentist provides. Our in-house specialists deliver expert care in a comfortable, modern setting.",
    neighborhood: "Cadence, Henderson",
    nearbyLandmarks: "Near E Lake Mead Pkwy and Cadence community",
    testimonials: [
      { name: "Richard N.", stars: 5, quote: "Got my implants done at Specialty Dental and the results are incredible. The oral surgeon was top-notch and the price was very fair." },
      { name: "Diana C.", stars: 5, quote: "Was referred here for a root canal and I'm so glad. The endodontist was amazing — painless procedure and great follow-up care." }
    ]
  },
  "west-henderson-dental": {
    slug: "west-henderson-dental",
    metaTitle: "West Henderson Dental & Orthodontics | St Rose Pkwy Dentist | Good Doc Dental",
    heroHeadline: "West Henderson Dental & Orthodontics",
    heroBody: "Family dental care on St. Rose Parkway in West Henderson. Comprehensive services including preventive care, cosmetic dentistry, implants, and orthodontics. Open 6 days a week.",
    aboutHeading: "West Henderson Family Dental",
    aboutBody: "West Henderson Dental & Orthodontics serves the growing West Henderson, Inspirada, and Anthem communities with full-service dental care. Our St. Rose Parkway location is convenient, modern, and equipped with the latest dental technology. We offer everything from routine cleanings and exams to advanced procedures like dental implants, Invisalign, and same-day crowns.",
    neighborhood: "West Henderson / Seven Hills",
    nearbyLandmarks: "Near St Rose Pkwy, Seven Hills, and Inspirada",
    testimonials: [
      { name: "Nancy J.", stars: 5, quote: "West Henderson Dental is wonderful. Clean, modern office with a caring staff. They made getting a crown completely painless." },
      { name: "Tom B.", stars: 5, quote: "My family has been going to West Henderson Dental for over a year. Consistently great experience for both adults and kids." }
    ]
  },
  "revere-dental": {
    slug: "revere-dental",
    metaTitle: "Revere Dental & Orthodontics | North Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "Revere Dental & Orthodontics",
    heroBody: "Family dental and orthodontic care on Revere Street in North Las Vegas. General dentistry, cosmetic procedures, implants, and emergency services. Open 6 days a week.",
    aboutHeading: "North Las Vegas Dental on Revere St",
    aboutBody: "Revere Dental & Orthodontics provides comprehensive dental care to families in North Las Vegas, Aliante, and El Dorado. Located on Revere Street, we offer a full range of services including preventive, cosmetic, restorative, and orthodontic care. We're proud to serve the North Las Vegas community with honest, affordable dental care.",
    neighborhood: "Aliante / North Las Vegas",
    nearbyLandmarks: "Near Revere St, Aliante, and El Dorado",
    testimonials: [
      { name: "Desiree L.", stars: 5, quote: "Revere Dental is great! They got me in for an emergency visit within hours and the whole team was so kind and professional." },
      { name: "Anthony M.", stars: 5, quote: "Best dental office in North Las Vegas. Honest about what you need, transparent about pricing, and they do great work." }
    ]
  },
  "sedona-ranch-dental": {
    slug: "sedona-ranch-dental",
    metaTitle: "Sedona Ranch Dental & Orthodontics | North Las Vegas Dentist | Good Doc Dental",
    heroHeadline: "Sedona Ranch Dental & Orthodontics",
    heroBody: "Comprehensive family dental care on East Ann Road in North Las Vegas. From cleanings and exams to implants, braces, and emergency appointments. Open 6 days a week.",
    aboutHeading: "North Las Vegas Dental Care on Ann Rd",
    aboutBody: "Sedona Ranch Dental & Orthodontics serves families in North Las Vegas, Aliante, and surrounding communities with quality dental care. Our East Ann Road location offers convenient hours, a comfortable atmosphere, and a full range of dental services. Whether you need a simple cleaning or a complex implant procedure, our team is here to help.",
    neighborhood: "Sedona Ranch / North Las Vegas",
    nearbyLandmarks: "Near E Ann Rd, Aliante, and North Las Vegas",
    testimonials: [
      { name: "Victor H.", stars: 5, quote: "Sedona Ranch Dental is fantastic. The team is professional, the office is modern, and they actually listen to what you want." },
      { name: "Carmen S.", stars: 5, quote: "Was nervous about going to the dentist after years. Sedona Ranch made me feel so comfortable. No judgment, just great care." }
    ]
  }
};
