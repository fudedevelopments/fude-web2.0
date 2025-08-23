import { Metadata } from 'next'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fudedevelopments.com'

// Enable static generation with revalidation every 7 days
export const revalidate = 604800

export const metadata: Metadata = {
  title: 'Our Services - Android App & Web Development Company in Erode',
  description:
    'Comprehensive software development services in Erode, Tamil Nadu. Fude Development offers Android app development, website development, e-commerce solutions, and custom software development across India.',
  keywords: [
    'Android app development in Erode',
    'Web development company in Erode',
    'Mobile app development in Erode',
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
    'Custom software solutions in Erode',
    'Website designers in Erode',
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
