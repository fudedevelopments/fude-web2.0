// ─── Centralized SEO Keywords ─────────────────────────────────────────────────
// Page-specific keyword sets to maximize search engine coverage.
// Import the relevant set in each page's metadata rather than writing inline arrays.
//
// Usage:
//   import { pageKeywords } from '@/config/seo-keywords'
//   keywords: pageKeywords.home

// ─── Base Keywords (included on every page) ───────────────────────────────────
const base = [
  // Brand
  'Fude Development',
  'Fude Development Erode',
  'Fude Developments',
  'fude.in',
  // Location – Erode
  'software company in Erode',
  'IT company in Erode',
  'web development company in Erode',
  'mobile app development in Erode',
  'Android app development in Erode',
  'best software company in Erode',
  'best IT company in Erode',
  'best app developers in Erode',
  'tech startup Erode',
  // Location – Coimbatore
  'software company in Coimbatore',
  'IT company in Coimbatore',
  'web development company in Coimbatore',
  'mobile app development in Coimbatore',
  'Android app development in Coimbatore',
  'best IT company in Coimbatore',
  // Location – Tiruppur
  'software company in Tiruppur',
  'IT company in Tiruppur',
  'web development company in Tiruppur',
  'mobile app development in Tiruppur',
  'Android app development in Tiruppur',
  // Region
  'software company Tamil Nadu',
  'IT company Tamil Nadu',
  'software development company India',
  'top IT company Tamil Nadu',
  'digital solutions Tamil Nadu',
]

// ─── Home Page ────────────────────────────────────────────────────────────────
const home = [
  ...base,
  // Brand intent
  'Fude Development official website',
  'Fude Development services',
  'Fude Development portfolio',
  // Primary services
  'web development company India',
  'Android app development company India',
  'mobile app development company India',
  'AI software development company India',
  'custom software development India',
  'full stack development company',
  'e-commerce website development India',
  // AI & ML
  'AI powered software solutions',
  'machine learning solutions India',
  'AI development company India',
  'intelligent automation solutions',
  // Value props
  'affordable web development India',
  'affordable app development India',
  'best app development company India',
  'startup software development partner',
  'digital transformation company India',
  // Technology
  'React development company',
  'Next.js development company',
  'Flutter app development company',
  'React Native development company',
  'Node.js development company',
  'Python development company India',
  // Erode specifics
  'Erode digital agency',
  'Erode tech company',
  'Erode software solutions',
]

// ─── About Us Page ────────────────────────────────────────────────────────────
const about = [
  ...base,
  // About intent
  'about Fude Development',
  'Fude Development team',
  'Fude Development company profile',
  'who is Fude Development',
  'Fude Development story',
  'Fude Development founders',
  // Company type
  'AI software company Erode',
  'AI development company Tamil Nadu',
  'machine learning company Tamil Nadu',
  // Team skills
  'React Next.js developer Erode',
  'Flutter developer Erode',
  'React Native developer Erode',
  'cloud engineer Erode',
  'full stack developer Erode',
  'backend developer Erode',
  'frontend developer Erode',
  'AI engineer Tamil Nadu',
  // Values
  'innovative software company India',
  'reliable IT company Erode',
  'experienced developers Erode',
  'quality software development India',
  'client-focused IT company India',
  // Geo long-tail
  'software company near me Erode',
  'IT professionals Erode',
  'tech experts Erode Tamil Nadu',
]

// ─── Services Page ────────────────────────────────────────────────────────────
const services = [
  ...base,
  // Web
  'website development services India',
  'business website development',
  'website designers Erode',
  'custom website development',
  'responsive website development',
  'Next.js website development',
  'React website development',
  'e-commerce website development Erode',
  'e-commerce website development Coimbatore',
  'WordPress alternative development India',
  // Mobile
  'custom Android app development',
  'Android app developers Tamil Nadu',
  'Flutter app development India',
  'React Native app development India',
  'cross-platform mobile app development',
  'iOS app development India',
  // AI & ML
  'AI solutions for business India',
  'machine learning development India',
  'natural language processing solutions',
  'computer vision solutions India',
  'AI chatbot development India',
  'deep learning solutions India',
  'predictive analytics India',
  // Cloud & Backend
  'cloud application development India',
  'AWS development company India',
  'scalable backend development',
  'API development company India',
  'microservices development India',
  // UI/UX
  'UI UX design company India',
  'user experience design Erode',
  'Figma design services India',
  // Pricing  
  'affordable software development India',
  'cost effective app development',
  'software development quote India',
  'get free consultation software India',
]

// ─── Contact Us Page ──────────────────────────────────────────────────────────
const contact = [
  ...base,
  // Intent
  'contact Fude Development',
  'hire Fude Development',
  'get a quote from Fude Development',
  'work with Fude Development',
  // CTA long-tail
  'hire software developer Erode',
  'hire web developer Erode',
  'hire app developer Erode',
  'hire React developer India',
  'hire Flutter developer India',
  'freelance developer Erode',
  // Service inquiry
  'web development consultation India',
  'Android app development quote',
  'mobile app development inquiry',
  'software development inquiry Tamil Nadu',
  'get free website quote',
  'free app development consultation',
  // Local discovery
  'software company contact Erode',
  'IT company phone number Erode',
  'IT office Erode',
  'developer near me Erode',
]

// ─── Smart School Page ────────────────────────────────────────────────────────
const smartSchool = [
  // Product core
  'smart school management system',
  'school ERP software',
  'AI school management system',
  'school management software India',
  'school automation platform',
  'AI powered school ERP',
  'cloud based school management',
  'digital school management system',
  'school administration software',
  // Features
  'school fee management software',
  'student information system',
  'school attendance management software',
  'live bus tracking for schools',
  'GPS school bus tracking system',
  'parent communication app for schools',
  'school analytics dashboard',
  'AI learning platform for schools',
  'AI syllabus based learning',
  'personalised learning platform',
  'school report card management',
  'teacher management software',
  'admission management system',
  'online school portal',
  'school timetable management software',
  // Location – Erode
  'school management system in Erode',
  'school ERP software in Erode',
  'smart school software Erode',
  'school bus tracking Erode',
  'best school software in Erode',
  // Location – Coimbatore
  'school management system in Coimbatore',
  'school ERP software in Coimbatore',
  'smart school software Coimbatore',
  'school bus tracking Coimbatore',
  'education technology Coimbatore',
  // Location – Tiruppur
  'school management system in Tiruppur',
  'school ERP software in Tiruppur',
  'smart school Tiruppur',
  // Region
  'school ERP software Tamil Nadu',
  'school management software Tamil Nadu',
  'school ERP India',
  'AI education software India',
  'best school ERP India',
  'school management system for CBSE schools',
  'school management system for state board schools',
  // Intent
  'buy school management software',
  'school software demo',
  'school ERP pricing India',
  'school digitization solution',
  'paperless school management',
]

// ─── Exported Map ─────────────────────────────────────────────────────────────
export const pageKeywords = {
  base,
  home,
  about,
  services,
  contact,
  smartSchool,
} as const

export default pageKeywords
