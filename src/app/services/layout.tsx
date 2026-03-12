import { Metadata } from 'next'
import siteConfig from '@/config/site'
import { pageKeywords } from '@/config/seo-keywords'

const baseUrl = siteConfig.websiteUrl

export const metadata: Metadata = {
  title: 'Our Services - Android App & Web Development Company in Erode',
  description:
    'Comprehensive software development services in Erode, Coimbatore, Salem, and Karur. Fude Development offers web development, mobile apps, AI solutions, custom software, and School ERP software across Tamil Nadu and India.',
  keywords: [...pageKeywords.services],
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
