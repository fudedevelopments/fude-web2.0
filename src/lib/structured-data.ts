import siteConfig from '@/config/site'
import { getFaqSchema, generalFaq, servicesFaq, processFaq, smartSchoolFaq, allFaq } from '@/config/faq'

// Per-page FAQ schemas — inject these via <script type="application/ld+json"> in each page
export const homeFaqSchema = getFaqSchema([...generalFaq, ...processFaq])
export const servicesFaqSchema = getFaqSchema(servicesFaq)
export const smartSchoolFaqSchema = getFaqSchema(smartSchoolFaq)
export const allFaqSchema = getFaqSchema(allFaq)

// Legacy export kept for backward compatibility
export const faqStructuredData = homeFaqSchema

export const serviceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development in Erode',
  description:
    'Professional Android app development services in Erode, Tamil Nadu by Fude Development. Custom Android applications for businesses across India.',
  provider: {
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.websiteUrl,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Erode, Tamil Nadu, India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Android App Development',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Android App Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Android Apps',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Web Development',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Website Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Website Development',
            },
          },
        ],
      },
    ],
  },
}
