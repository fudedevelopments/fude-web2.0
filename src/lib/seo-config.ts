import siteConfig from '@/config/site'

export const seoConfig = {
  baseUrl: siteConfig.websiteUrl,

  defaultMeta: {
    title: siteConfig.defaultSEO.title,
    description: siteConfig.defaultSEO.description,
    keywords: [...siteConfig.keywords],
  },

  location: {
    city: siteConfig.address.city,
    state: siteConfig.address.state,
    country: siteConfig.address.country,
    countryCode: siteConfig.address.countryCode,
    postalCode: siteConfig.address.postalCode,
    coordinates: {
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
  },

  business: {
    name: siteConfig.companyName,
    legalName: siteConfig.legalName,
    email: siteConfig.companyEmail,
    phone: siteConfig.phone,
    foundingDate: siteConfig.foundingDate,
    languages: siteConfig.languages,
    currencies: ['INR', 'USD'],
    paymentMethods: [
      'Cash',
      'Credit Card',
      'Debit Card',
      'UPI',
      'Bank Transfer',
    ],
    priceRange: siteConfig.priceRange,
  },

  socialMedia: {
    linkedin: siteConfig.socialLinks.linkedin,
    github: siteConfig.socialLinks.github,
    instagram: siteConfig.socialLinks.instagram,
    youtube: siteConfig.socialLinks.youtube,
  },

  services: [...siteConfig.services],

  areasServed: [...siteConfig.areasServed],

  workingHours: {
    days: siteConfig.workingHours.days,
    opens: siteConfig.workingHours.opens,
    closes: siteConfig.workingHours.closes,
  },
}

export default seoConfig
