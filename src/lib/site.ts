/**
 * Single source of truth for UP Circuit organizational data.
 * All facts sourced from the official brief and upcircuit.org.
 */

export const ORG = {
  name: "University of the Philippines Circuit",
  shortName: "UP Circuit",
  alias: "UP CKT",
  slogan: "Conduct, Rectify, Amplify",
  motto: "Dare to Be; Be Different",
  affiliation: "Electrical and Electronics Engineering Institute (EEEI), UP Diliman",
  founded: "February 1994",
  website: "https://www.upcircuit.org/",
  email: "upcircuit.squeeeze@gmail.com",
  location: {
    label: "EEE Tambayan Complex, UP Diliman",
    lines: ["EEE Tambayan Complex", "University of the Philippines Diliman", "Quezon City, Philippines"],
  },
  mapEmbed:
    "https://www.google.com/maps?q=EEE%20Tambayan%20Complex%2C%20University%20of%20the%20Philippines%20Diliman%2C%20Quezon%20City&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=EEE+Tambayan+Complex+UP+Diliman",
} as const;

export type SocialKind = "facebook" | "instagram" | "x" | "youtube" | "linkedin";

export const SOCIALS: { kind: SocialKind; label: string; handle: string; href: string }[] = [
  { kind: "facebook", label: "UP Circuit — Facebook", handle: "facebook.com/upcircuit", href: "https://facebook.com/upcircuit" },
  { kind: "facebook", label: "SquEEEze — Facebook", handle: "facebook.com/upcircuit.squeeeze", href: "https://facebook.com/upcircuit.squeeeze" },
  { kind: "facebook", label: "The E-Waste Project — Facebook", handle: "facebook.com/ewasteproject", href: "https://facebook.com/ewasteproject" },
  { kind: "facebook", label: "InteraCKT — Facebook", handle: "facebook.com/upcircuit.interackt", href: "https://facebook.com/upcircuit.interackt" },
  { kind: "instagram", label: "Instagram", handle: "@up.circuit", href: "https://www.instagram.com/up.circuit/" },
  { kind: "x", label: "Twitter / X", handle: "@upckt", href: "https://twitter.com/upckt" },
  { kind: "youtube", label: "YouTube", handle: "@circuithayt", href: "https://www.youtube.com/@circuithayt" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#why-partner", label: "Why Partner" },
  { href: "#projects", label: "Flagship Projects" },
  { href: "#legacy", label: "Legacy" },
  { href: "#tiers", label: "Sponsorship Tiers" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_STATS = [
  { value: 1994, suffix: "", unit: "", label: "Established", sub: "February 1994" },
  { value: 30, suffix: "+", unit: "", label: "Years of Legacy", sub: "of academic leadership" },
  { value: 10793, suffix: "", unit: "kg", label: "E-Waste Diverted", sub: "collected in Year 12 alone" },
  { value: 3, suffix: "", unit: "", label: "Flagship Programs", sub: "SquEEEze · E-Waste · InteraCKT" },
] as const;

export const INQUIRY_CATEGORIES = [
  "Corporate Sponsorship",
  "E-Waste Project Partnership",
  "Recruitment & Talks",
  "Media / Publicity",
  "General Inquiry",
] as const;
export type InquiryCategory = (typeof INQUIRY_CATEGORIES)[number];

/* ------------------------------------------------------------------ */
/* Sponsorship tiers                                                   */
/* ------------------------------------------------------------------ */

export type TierId = "title" | "platinum" | "gold" | "silver" | "inkind";

export const TIERS: { id: TierId; label: string; summary: string }[] = [
  {
    id: "title",
    label: "Title Sponsor",
    summary:
      "Own the flagship stage: naming rights across SquEEEze, The E-Waste Project, and InteraCKT, with the deepest integration into every UP Circuit event, channel, and audience.",
  },
  {
    id: "platinum",
    label: "Platinum",
    summary:
      "Premium placement across all three flagship projects: prominent branding on collaterals, priority booths, speaking slots, co-branded e-waste hubs, and steady social media promotion.",
  },
  {
    id: "gold",
    label: "Gold",
    summary:
      "High-visibility partnership with logo presence on event collaterals, a standard recruitment booth, a speaking slot, one co-branded e-waste hub, and regular social promotion.",
  },
  {
    id: "silver",
    label: "Silver",
    summary:
      "An accessible entry point for corporate partners: logo presence in event decks and thank-you reels, a shared booth, quarterly social promotion, and an annual email blast.",
  },
  {
    id: "inkind",
    label: "In-Kind Partner",
    summary:
      "Contribute products, services, or expertise: product sampling at InteraCKT, logo acknowledgment in posts, and recognition across UP Circuit channels.",
  },
];

export const PERK_ROWS: { perk: string; values: Record<TierId, string> }[] = [
  {
    perk: "Logo Placement Size",
    values: {
      title: "Logo + naming rights on all flagship events & collaterals",
      platinum: "Prominent logo on all event collaterals",
      gold: "Logo on event collaterals",
      silver: "Logo in event decks & thank-you reels",
      inkind: "Logo acknowledgment in posts",
    },
  },
  {
    perk: "Social Media Reach",
    values: {
      title: "Dedicated campaign + unlimited feature posts",
      platinum: "12+ posts per partnership",
      gold: "8+ posts per partnership",
      silver: "4+ posts per partnership",
      inkind: "2 recognition posts",
    },
  },
  {
    perk: "Recruitment Booth Access",
    values: {
      title: "Priority booth at all flagship events",
      platinum: "Priority booth at events",
      gold: "Standard booth",
      silver: "Shared booth",
      inkind: "Product sampling at InteraCKT",
    },
  },
  {
    perk: "Speaking Slots",
    values: {
      title: "Keynote + panel + awards night",
      platinum: "2 speaking slots",
      gold: "1 speaking slot",
      silver: "—",
      inkind: "—",
    },
  },
  {
    perk: "Co-Branded E-Waste Collection Hubs",
    values: {
      title: "3 hubs + naming rights",
      platinum: "2 hubs",
      gold: "1 hub",
      silver: "—",
      inkind: "—",
    },
  },
  {
    perk: "Direct Student Email Blasts",
    values: {
      title: "All chapters, all flagship events",
      platinum: "3 per year",
      gold: "2 per year",
      silver: "1 per year",
      inkind: "—",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Legacy of excellence                                                */
/* ------------------------------------------------------------------ */

export type AlumniEntry = {
  initials: string;
  name: string;
  role: string;
  description: string;
  gradient: string;
  dark?: boolean;
};

export const ALUMNI: AlumniEntry[] = [
  {
    initials: "AB",
    name: "Dr. Anastacia Ballesil-Alvarez",
    role: "Founding Member · Senior Faculty Adviser",
    description:
      "Founding member and long-time Senior Faculty Adviser of UP Circuit. Professor at the UP EEEI specializing in Microelectronics, Low-Power VLSI, and Memory Design.",
    gradient: "from-upindigo to-upblue",
  },
  {
    initials: "LT",
    name: "Dr. Lew Andrew Tria",
    role: "Chairperson 2006–2007",
    description:
      "Former UP Circuit Chairperson and Founder of AKBAY and DEEEskarte. Professor and Director at the UP EEEI specializing in Solar Photovoltaic Systems, Power Electronics, and Electric Vehicles.",
    gradient: "from-upblue to-azure",
  },
  {
    initials: "CA",
    name: "Dr. Charleston Dale Ambatali",
    role: "Magna Cum Laude · Top 2 ECE Board 2016",
    description:
      "Magna Cum Laude graduate and Top 2, ECE Board Exam (April 2016). Associate Professor at the UP EEEI specializing in Wireless Power Transfer, Microwave Engineering, and Satellite Engineering.",
    gradient: "from-azure to-skysea",
  },
  {
    initials: "D1",
    name: "Oliveros & Espiritu",
    role: "DIWATA-1 Pioneer Engineers",
    description:
      "Julian Marvick Oliveros and Juan Paolo Espiritu — two of the nine pioneer Filipino engineers who developed DIWATA-1, the Philippines' first microsatellite.",
    gradient: "from-upblue to-upindigo",
    dark: true,
  },
];

export type TopnotcherEntry = { name: string; detail: string; highlight?: boolean };

export const TOPNOTCHERS: TopnotcherEntry[] = [
  { name: "John Labrador", detail: "Top 1 · EE Board Exam, April 2026" },
  { name: "Nathaniel Dimaunahan", detail: "Top 1 · ECE Board Exam, April 2025" },
  { name: "Daniel Vicho", detail: "Top 1 · ECT Board Exam, April 2025" },
  { name: "Martha Isabel Dealino", detail: "Top 1 · EE Board Exam, 2015" },
  { name: "Emiliano Tan", detail: "Top 1 · ECE Board Exam, 2015" },
  { name: "Jonathan Ross Fauni", detail: "Top 1 ECE · UP Diliman's first-ever topnotcher", highlight: true },
];

export const ACHIEVEMENTS = [
  {
    title: "Oblation Scholars & Latin Honor Graduates",
    detail: "A continuing legacy of Oblation Scholars and Summa / Magna Cum Laude graduates from the UP EEEI.",
  },
  {
    title: "Board Topnotchers Across EE, ECE & ECT",
    detail: "A sustained record of Top 1 examinees — including UP Diliman's first-ever ECE topnotcher.",
  },
  {
    title: "3D PrintEarth",
    detail: "1st Place — DOST Electronics Design Competition.",
  },
  {
    title: "HeartSmart",
    detail: "Champion — Undergraduate Project Competition.",
  },
] as const;

export const MILESTONES = [
  { year: "1994", title: "UP Circuit is founded", detail: "Established in February at the EEEI, UP Diliman." },
  { year: "1998", title: "SquEEEze is born", detail: "The National EEE Competition and Convention begins its nationwide run." },
  {
    year: "2015",
    title: "Top 1 sweep",
    detail:
      "Martha Isabel Dealino (EE) and Emiliano Tan (ECE) top their board exams; Jonathan Ross Fauni becomes UP Diliman's first-ever ECE topnotcher.",
  },
  { year: "2016", title: "DIWATA-1 reaches orbit", detail: "Circuit alumni Oliveros and Espiritu help build the Philippines' first microsatellite." },
  {
    year: "2023",
    title: "Ignacio B. Gimenez Award",
    detail: "The E-Waste Project wins the Parangal sa Samahang Mag-aaral for Social Innovation Project Excellence.",
  },
  {
    year: "2025–2026",
    title: "A new wave of Top 1s",
    detail:
      "Dimaunahan (ECE), Vicho (ECT), and Labrador (EE) top their board exams; The E-Waste Project is crowned Youth In-Charge 2025 Champion.",
  },
] as const;
