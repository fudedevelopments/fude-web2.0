// ─── Centralized Site Configuration ─────────────────────────────────────────
// Single source of truth for ALL brand, contact, and SEO values.
// Every component, page, and config file must import from here.

export const siteConfig = {
  // ─── Brand ───────────────────────────────────────────────────────────────
  companyName: 'Fude Development',
  legalName: 'Fude Development',
  brandShortName: 'Fude',

  // ─── URLs ─────────────────────────────────────────────────────────────────
  websiteUrl: 'https://www.fude.in',

  // ─── Contact ──────────────────────────────────────────────────────────────
  companyEmail: 'contact@fudedevelopments.com',
  supportEmail: 'fudedevelopments@gmail.com',
  phone: '+91 9994025037',
  phoneHref: 'tel:+919994025037',

  // ─── Address ──────────────────────────────────────────────────────────────
  address: {
    street: 'Slatter Nagar, Perunduari',
    city: 'Erode',
    state: 'Tamil Nadu',
    country: 'India',
    countryCode: 'IN',
    postalCode: '638053',
  },

  // ─── Geo Coordinates ──────────────────────────────────────────────────────
  geo: {
    latitude: '11.3410',
    longitude: '77.7172',
  },

  // ─── Social Links ─────────────────────────────────────────────────────────
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/104111287',
    github: 'https://github.com/fudedevelopments',
    instagram: 'https://instagram.com/fude_developments',
    youtube: 'https://youtube.com/@fudedevelopments',
    twitterHandle: '@fudedevelopments',
  },

  // ─── Assets ───────────────────────────────────────────────────────────────
  logoPath: '/images/logo/fude-logo.svg',
  faviconPath: '/favicon.ico',

  // ─── Business Details ─────────────────────────────────────────────────────
  foundingDate: '2020',
  priceRange: '$$',
  languages: ['English', 'Tamil'],
  areasServed: ['Erode', 'Coimbatore', 'Tiruppur', 'Tamil Nadu', 'India'],
  workingHours: {
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ] as string[],
    opens: '09:00',
    closes: '18:00',
  },

  // ─── Services ─────────────────────────────────────────────────────────────
  services: [
    'Android App Development',
    'Web Development',
    'Mobile App Development',
    'E-commerce Website Development',
    'Business Website Development',
    'Web Application Development',
    'Full-stack Development',
    'AI Development',
    'Machine Learning Solutions',
    'Business Automation',
    'Custom Software Development',
  ],

  // ─── Default SEO ──────────────────────────────────────────────────────────
  defaultSEO: {
    title:
      'Fude Development - Software Solutions & Web Development in Erode',
    titleTemplate: '%s | Fude Development',
    description:
      'Leading software development company in Erode, Tamil Nadu. Fude Development specializes in custom web applications, Android mobile apps, AI solutions, and business automation.',
    locale: 'en_IN',
    ogImageAlt: 'Fude Development - Software Solutions',
  },

  // ─── Shared Keywords Pool ─────────────────────────────────────────────────
  keywords: [
    // Brand
    'Fude Development',
    'Fude Development Erode',
    'Fude Development Android apps',
    'Fude Development web development',
    'Fude Development software company',
    'Fude Development IT company',
    // Erode
    'Android app development in Erode',
    'Web development company in Erode',
    'Software company in Erode',
    'IT company in Erode',
    'Best app developers in Erode',
    'Website designers in Erode',
    'Mobile app development in Erode',
    'Custom software solutions in Erode',
    'Affordable app development in Erode',
    'E-commerce website development Erode',
    // Coimbatore
    'Android app development in Coimbatore',
    'Web development company in Coimbatore',
    'Software company in Coimbatore',
    'IT company in Coimbatore',
    'Best app developers in Coimbatore',
    'Website designers in Coimbatore',
    'Mobile app development in Coimbatore',
    'Custom software solutions in Coimbatore',
    'Affordable app development in Coimbatore',
    'E-commerce website development Coimbatore',
    // Tiruppur
    'Android app development in Tiruppur',
    'Web development company in Tiruppur',
    'Software company in Tiruppur',
    'IT company in Tiruppur',
    'Best app developers in Tiruppur',
    'Website designers in Tiruppur',
    'Mobile app development in Tiruppur',
    'Custom software solutions in Tiruppur',
    'Affordable app development in Tiruppur',
    'E-commerce website development Tiruppur',
    // Service-Based
    'Android app development company',
    'Website development company',
    'Mobile app development services',
    'E-commerce website development',
    'Business website development',
    'Custom Android apps',
    'Web application development',
    'Full-stack development company',
    'Software development services India',
    'Affordable app development',
    // Tamil Nadu & India
    'Android app developers in Tamil Nadu',
    'Web development company in Tamil Nadu',
    'Best IT company in Tamil Nadu',
    'Mobile app development company India',
    'Website design company India',
    'Custom software company India',
    'AI development',
    'React development',
    'Next.js development',
  ],
} as const

export default siteConfig
