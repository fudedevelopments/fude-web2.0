export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Fude Development offer in Erode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fude Development offers comprehensive software development services in Erode including Android app development, website development, e-commerce solutions, business website development, custom Android apps, web application development, and AI-powered solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fude Development the best IT company in Erode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Fude Development is recognized as one of the best IT companies in Erode, Tamil Nadu, specializing in Android app development, web development, and custom software solutions with a proven track record of successful projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide Android app development services in Tamil Nadu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide professional Android app development services across Tamil Nadu, with our main operations based in Erode. We develop custom Android applications for businesses throughout India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Fude Development different from other web development companies in Erode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fude Development stands out with our AI-powered approach, affordable pricing, experienced team of developers, comprehensive services from web development to mobile apps, and strong focus on customer satisfaction in Erode and across Tamil Nadu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer affordable app development services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Fude Development offers affordable app development services without compromising on quality. We provide cost-effective solutions for Android app development, website development, and custom software development.',
      },
    },
  ],
}

export const serviceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development in Erode',
  description:
    'Professional Android app development services in Erode, Tamil Nadu by Fude Development. Custom Android applications for businesses across India.',
  provider: {
    '@type': 'Organization',
    name: 'Fude Development',
    url: 'https://fudedevelopments.com',
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
