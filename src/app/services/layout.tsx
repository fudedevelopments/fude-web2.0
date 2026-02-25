import { Metadata } from 'next'

const baseUrl = 'https://fudedevelopments.com'

export const metadata: Metadata = {
  title: 'Our Services - Android App & Web Development Company in Erode',
  description:
    'Comprehensive software development services in Erode, Tamil Nadu. Fude Development offers Android app development, website development, e-commerce solutions, and custom software development across India.',
  keywords: [
    // Erode
    'Android app development in Erode',
    'Web development company in Erode',
    'Mobile app development in Erode',
    'Custom software solutions in Erode',
    'Website designers in Erode',
    'Affordable app development in Erode',
    'E-commerce website development Erode',
    // Coimbatore
    'Android app development in Coimbatore',
    'Web development company in Coimbatore',
    'Mobile app development in Coimbatore',
    'Custom software solutions in Coimbatore',
    'Website designers in Coimbatore',
    'Affordable app development in Coimbatore',
    'E-commerce website development Coimbatore',
    // Tiruppur
    'Android app development in Tiruppur',
    'Web development company in Tiruppur',
    'Mobile app development in Tiruppur',
    'Custom software solutions in Tiruppur',
    'Website designers in Tiruppur',
    'Affordable app development in Tiruppur',
    'E-commerce website development Tiruppur',
    // Generic
    'Website development company',
    'E-commerce website development',
    'Business website development',
    'Custom Android apps',
    'Web application development',
    'Full-stack development company',
    'Software development services India',
    'Affordable app development',
    'Android app development company',
    'Mobile app development services',
    'Android app developers in Tamil Nadu',
    'Web development company in Tamil Nadu',
    'Mobile app development company India',
    'Website design company India',
  ],
  openGraph: {
    title: 'Fude Development Services - Android App & Web Development in Erode',
    description:
      'Comprehensive software development services including Android apps, websites, e-commerce solutions, and custom software development in Erode, Tamil Nadu.',
    url: `${baseUrl}/services`,
    images: [
      {
        url: '/images/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fude Development Services - Android & Web Development in Erode',
      },
    ],
  },
  twitter: {
    title: 'Fude Development Services - Android App & Web Development in Erode',
    description:
      'Comprehensive software development services including Android apps, websites, and custom software development in Erode, Tamil Nadu.',
  },
  alternates: {
    canonical: `${baseUrl}/services`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
