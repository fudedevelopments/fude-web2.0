// ─── Centralized Site Configuration ─────────────────────────────────────────
// Single source of truth for brand, contact, business, and core SEO values.

export const siteConfig = {
  companyName: 'Fude Development',
  legalName: 'Fude Development',
  brandShortName: 'Fude',

  websiteUrl: 'https://www.fude.in',

  companyEmail: 'contact@fudedevelopments.com',
  supportEmail: 'fudedevelopments@gmail.com',
  phone: '+91 9994025037',
  phoneHref: 'tel:+919994025037',

  address: {
    street: 'Slatter Nagar, Perunduari',
    city: 'Erode',
    state: 'Tamil Nadu',
    country: 'India',
    countryCode: 'IN',
    postalCode: '638053',
  },

  geo: {
    latitude: '11.3410',
    longitude: '77.7172',
  },

  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/104111287',
    github: 'https://github.com/fudedevelopments',
    instagram: 'https://instagram.com/fude_developments',
    youtube: 'https://youtube.com/@fudedevelopments',
    twitterHandle: '@fudedevelopments',
  },

  logoPath: '/images/logo/fude-logo.svg',
  faviconPath: '/favicon.ico',

  foundingDate: '2020',
  priceRange: '$$',
  languages: ['English', 'Tamil'],
  areasServed: [
    'Erode',
    'Coimbatore',
    'Tiruppur',
    'Salem',
    'Karur',
    'Chennai',
    'Tamil Nadu',
    'India',
  ],
  workingHours: {
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '18:00',
  },

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
    'School ERP Software',
    'Smart School Management System',
    'AI School Management System',
  ],

  defaultSEO: {
    title:
      'Fude | Fude Development - Software Solutions, Web & App Development in Erode',
    titleTemplate: '%s | Fude Development',
    description:
      'Fude Development is a leading software company in Erode, Tamil Nadu. We build custom web applications, Android apps, AI solutions, School ERP software, and business automation. Serving Erode, Coimbatore, Salem, Karur and across India.',
    locale: 'en_IN',
    ogImageAlt: 'Fude Development - Software Solutions in Erode',
  },
} as const

export default siteConfig
