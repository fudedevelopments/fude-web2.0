import { Metadata } from 'next'
import siteConfig from '@/config/site'
import { pageKeywords } from '@/config/seo-keywords'

const baseUrl = siteConfig.websiteUrl

export const metadata: Metadata = {
  title: 'About Us - Best IT Company in Erode | Fude Development Team',
  description:
    'Learn about Fude Development, the leading software company in Erode, Tamil Nadu. Meet our expert team of Android app developers, web developers, and AI specialists driving digital transformation across India.',
  keywords: [...pageKeywords.about],
  openGraph: {
    title: 'About Fude Development - Best IT Company in Erode, Tamil Nadu',
    description:
      'Meet our expert team of Android app developers, web developers, and AI specialists at Fude Development, the leading software company in Erode.',
    url: `${baseUrl}/aboutus`,
    images: [
      {
        url: '/images/team-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fude Development Team - Best IT Company in Erode',
      },
    ],
  },
  twitter: {
    title: 'About Fude Development - Best IT Company in Erode',
    description:
      'Meet our expert team of Android app developers and web developers driving innovation in Erode, Tamil Nadu.',
  },
  alternates: {
    canonical: `${baseUrl}/aboutus`,
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
