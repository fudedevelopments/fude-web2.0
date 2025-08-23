export const seoConfig = {
  // Base URL for the site
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fude.digital',

  // Default meta information
  defaultMeta: {
    title:
      'Fude Development – AI-Powered Software Solutions & Web Development in Erode',
    description:
      'Leading AI-powered software development company in Erode, Tamil Nadu. Fude Development specializes in custom web applications, Android mobile apps, machine learning solutions, and intelligent business automation. Best IT company in Erode offering affordable app development and digital transformation services.',
    keywords: [
      // Company + Brand Keywords
      'Fude Development',
      'Fude Development Erode',
      'Fude Development Android apps',
      'Fude Development web development',
      'Fude Development software company',
      'Fude Development IT company',

      // Location-Based Keywords (Erode Local SEO)
      'Android app development in Erode',
      'Web development company in Erode',
      'Software company in Erode',
      'IT company in Erode',
      'Best app developers in Erode',
      'Website designers in Erode',
      'Mobile app development in Erode',
      'Custom software solutions in Erode',

      // Service-Based Keywords
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

      // Extended Keywords (Tamil Nadu & India)
      'Android app developers in Tamil Nadu',
      'Web development company in Tamil Nadu',
      'Best IT company in Tamil Nadu',
      'Mobile app development company India',
      'Website design company India',
      'Custom software company India',
    ],
  },

  // Location information for local SEO
  location: {
    city: 'Erode',
    state: 'Tamil Nadu',
    country: 'India',
    countryCode: 'IN',
    postalCode: '638053',
    coordinates: {
      latitude: '11.3410',
      longitude: '77.7172',
    },
  },

  // Business information
  business: {
    name: 'Fude Development',
    legalName: 'Fude Development',
    email: 'contact@fudedevelopments.com',
    phone: '+91-XXXXXXXXXX',
    foundingDate: '2020',
    languages: ['English', 'Tamil'],
    currencies: ['INR', 'USD'],
    paymentMethods: [
      'Cash',
      'Credit Card',
      'Debit Card',
      'UPI',
      'Bank Transfer',
    ],
    priceRange: '$$',
  },

  // Social media links
  socialMedia: {
    linkedin: 'https://linkedin.com/company/fudedevelopments',
    github: 'https://github.com/fudedevelopments',
    // Add more social media links as needed
  },

  // Services offered
  services: [
    'Android App Development',
    'Web Development',
    'Mobile App Development',
    'E-commerce Website Development',
    'Business Website Development',
    'Custom Android Apps',
    'Web Application Development',
    'Full-stack Development',
    'Software Development Services',
    'AI Development',
    'Machine Learning Solutions',
    'Business Automation',
    'Custom Software Development',
  ],

  // Areas served
  areasServed: ['Erode', 'Tamil Nadu', 'India', 'Worldwide'],

  // Working hours
  workingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export default seoConfig
