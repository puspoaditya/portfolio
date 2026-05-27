export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  type: "Website" | "Web App" | "Mobile App";
  year: number;
  summary: string;
  client: string;
  location: string;
  duration: string;
  stack: string[];
  features: string[];
  results: { label: string; value: string }[];
  hero: { from: string; to: string; emoji: string };
  photo: string;
  photos: string[];
};

// Unsplash photos — seeded by keyword, consistent across builds
const U = (id: string, w = 900, h = 560) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const projects: Project[] = [
  {
    slug: "sharp-fade-barbershop",
    title: "Sharp Fade Barbershop — Booking Site",
    category: "Barber Shop",
    industry: "Barber Shop",
    type: "Website",
    year: 2025,
    summary:
      "A fast booking site with real-time chair availability, SMS reminders, and a loyalty stamp card. Increased online bookings by 3x in 2 months.",
    client: "Sharp Fade Co.",
    location: "Bandung, Indonesia",
    duration: "3 weeks",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe", "Twilio"],
    features: [
      "Per-barber chair scheduling with double-booking protection",
      "SMS + WhatsApp reminders 24h and 1h before appointment",
      "Loyalty stamp card (every 10th cut free)",
      "Walk-in queue display for the shop TV",
      "Owner dashboard with daily revenue + no-show rate",
    ],
    results: [
      { label: "Online bookings", value: "+312%" },
      { label: "No-show rate", value: "-48%" },
      { label: "Avg. booking time", value: "38s" },
    ],
    hero: { from: "#1f1147", to: "#7c5cff", emoji: "💈" },
    photo: U("photo-1503951914875-452162b0f3f1"),
    photos: [
      U("photo-1503951914875-452162b0f3f1"),
      U("photo-1599351431202-1e0f0137899a"),
      U("photo-1621605815971-fbc98d665033"),
    ],
  },
  {
    slug: "glow-room-salon",
    title: "Glow Room — Beauty Salon Web App",
    category: "Beauty Salon",
    industry: "Beauty Salon",
    type: "Web App",
    year: 2025,
    summary:
      "Multi-stylist booking platform with service add-ons, deposit payments, and a Google-reviews funnel that doubled their 5-star count.",
    client: "Glow Room Studio",
    location: "Jakarta, Indonesia",
    duration: "5 weeks",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Midtrans", "Cloudinary"],
    features: [
      "Stylist profiles with portfolio gallery",
      "Service bundles + add-on upsells at checkout",
      "Non-refundable deposit to reduce no-shows",
      "Post-visit Google review auto-prompt",
      "Inventory tracking for retail products",
    ],
    results: [
      { label: "Google reviews", value: "+218%" },
      { label: "Avg. ticket size", value: "+27%" },
      { label: "Repeat bookings", value: "+41%" },
    ],
    hero: { from: "#3a0d3a", to: "#ff7ac6", emoji: "💅" },
    photo: U("photo-1560066984-138dadb4c035"),
    photos: [
      U("photo-1560066984-138dadb4c035"),
      U("photo-1522337360788-8b13dee7a37e"),
      U("photo-1487412947147-5cebf100ffc2"),
    ],
  },
  {
    slug: "freshnest-cleaning",
    title: "FreshNest Cleaning — Instant Quote & Booking",
    category: "Cleaning Service",
    industry: "Cleaning Service",
    type: "Website",
    year: 2024,
    summary:
      "An instant-quote calculator (rooms × add-ons) with same-day booking and route-optimized crew dispatch. 4x lead conversion.",
    client: "FreshNest Home Services",
    location: "Surabaya, Indonesia",
    duration: "4 weeks",
    stack: ["Next.js", "Tailwind", "Supabase", "Google Maps API", "Resend"],
    features: [
      "Instant-quote form (rooms, bathrooms, pets, deep-clean)",
      "Same-day vs. scheduled booking flow",
      "Crew dispatch board with Google Maps route optimization",
      "Recurring weekly/bi-weekly subscription with auto-charge",
      "Photo before/after upload by crew via mobile",
    ],
    results: [
      { label: "Quote → booking", value: "4.1×" },
      { label: "Recurring clients", value: "+62%" },
      { label: "Crew jobs/day", value: "+35%" },
    ],
    hero: { from: "#06283d", to: "#22d3ee", emoji: "🧽" },
    photo: U("photo-1581578731548-c64695cc6952"),
    photos: [
      U("photo-1581578731548-c64695cc6952"),
      U("photo-1556909114-f6e7ad7d3136"),
      U("photo-1584820927498-cfe5211fd8bf"),
    ],
  },
  {
    slug: "voltcraft-electrician",
    title: "VoltCraft Electric — Emergency Call-Out App",
    category: "Electrician",
    industry: "Electrician",
    type: "Mobile App",
    year: 2025,
    summary:
      "iOS + Android app for an electrician company. Customers request emergency jobs, see live ETA, and pay in-app. Built with Expo.",
    client: "VoltCraft Electric",
    location: "Tangerang, Indonesia",
    duration: "8 weeks",
    stack: ["React Native (Expo)", "TypeScript", "Firebase", "Stripe Connect", "Mapbox"],
    features: [
      "Emergency vs. scheduled job flow",
      "Live technician ETA on map",
      "Photo-of-fault upload before dispatch",
      "Tiered pricing (callout fee + hourly + parts)",
      "Digital signed invoice + warranty PDF",
    ],
    results: [
      { label: "Avg. response time", value: "-44%" },
      { label: "Cash → digital pay", value: "92%" },
      { label: "5-star reviews", value: "+186%" },
    ],
    hero: { from: "#3a2a00", to: "#fbbf24", emoji: "⚡" },
    photo: U("photo-1621905251189-08b45d6a269e"),
    photos: [
      U("photo-1621905251189-08b45d6a269e"),
      U("photo-1558618666-fcd25c85cd64"),
      U("photo-1504328345606-18bbc8c9d7d1"),
    ],
  },
  {
    slug: "greenscape-landscaper",
    title: "GreenScape — Landscaper Portfolio & Quotes",
    category: "Landscaper",
    industry: "Landscaper",
    type: "Website",
    year: 2024,
    summary:
      "Project-driven portfolio site with a visual quote builder (yard size, services, materials) that emails a branded PDF estimate in 30 seconds.",
    client: "GreenScape Outdoor",
    location: "Bali, Indonesia",
    duration: "3 weeks",
    stack: ["Next.js", "Sanity CMS", "Tailwind", "Puppeteer", "Resend"],
    features: [
      "Before/after slider for every past project",
      "Visual quote builder with live price preview",
      "Auto-generated branded PDF estimate via email",
      "Seasonal service packages (spring clean-up, leaf removal)",
      "Owner can edit case studies from a no-code CMS",
    ],
    results: [
      { label: "Quote requests", value: "+275%" },
      { label: "Close rate", value: "+33%" },
      { label: "Time to estimate", value: "30s" },
    ],
    hero: { from: "#06311a", to: "#34d399", emoji: "🌿" },
    photo: U("photo-1416879595882-3373a0480b5b"),
    photos: [
      U("photo-1416879595882-3373a0480b5b"),
      U("photo-1585320806297-9794b3e4eeae"),
      U("photo-1558618047-3c8c76ca7d13"),
    ],
  },
  {
    slug: "roadhero-mobile-mechanic",
    title: "RoadHero — Mobile Mechanic Dispatch",
    category: "Mobile Mechanic",
    industry: "Mobile Mechanic",
    type: "Mobile App",
    year: 2025,
    summary:
      "On-demand mechanic dispatch. Drivers describe the problem, get an instant quote, and a certified mechanic comes to them. Includes mechanic-side app.",
    client: "RoadHero Auto",
    location: "Jakarta, Indonesia",
    duration: "10 weeks",
    stack: ["React Native (Expo)", "Node.js", "PostgreSQL", "Socket.IO", "Stripe"],
    features: [
      "Symptom-based diagnostic wizard for instant quoting",
      "Real-time dispatch with nearest available mechanic",
      "In-app chat + photo of the issue",
      "Mechanic side: job queue, parts ordering, daily payout",
      "Service history per vehicle (VIN-keyed)",
    ],
    results: [
      { label: "Jobs/mechanic/day", value: "+58%" },
      { label: "Customer rating", value: "4.9★" },
      { label: "Dispatch ETA", value: "<22 min" },
    ],
    hero: { from: "#2b0a0a", to: "#f87171", emoji: "🔧" },
    photo: U("photo-1530046339160-ce3e530c7d2f"),
    photos: [
      U("photo-1530046339160-ce3e530c7d2f"),
      U("photo-1486262715619-67b85e0b08d3"),
      U("photo-1492144534655-ae79c964c9d7"),
    ],
  },
  {
    slug: "pipepro-plumber",
    title: "PipePro — Plumber Booking & CRM",
    category: "Plumber",
    industry: "Plumber",
    type: "Web App",
    year: 2024,
    summary:
      "Booking website + internal CRM for a 6-truck plumbing company. Job assignment, parts inventory, and customer call-back automation in one place.",
    client: "PipePro Plumbing",
    location: "Bekasi, Indonesia",
    duration: "6 weeks",
    stack: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Twilio", "Tailwind"],
    features: [
      "Public booking + internal dispatcher view",
      "Job board with drag-and-drop assignment to trucks",
      "Parts inventory deducted per completed job",
      "30-day follow-up SMS for warranty satisfaction",
      "Owner KPI dashboard (revenue, avg job value, repeat %)",
    ],
    results: [
      { label: "Jobs completed/wk", value: "+47%" },
      { label: "Repeat customers", value: "+39%" },
      { label: "Phone-tag eliminated", value: "100%" },
    ],
    hero: { from: "#0a1f3a", to: "#60a5fa", emoji: "🔧" },
    photo: U("photo-1585771724684-38269d6639fd"),
    photos: [
      U("photo-1585771724684-38269d6639fd"),
      U("photo-1504328345606-18bbc8c9d7d1"),
      U("photo-1558618666-fcd25c85cd64"),
    ],
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
