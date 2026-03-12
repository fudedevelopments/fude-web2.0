import { Metadata } from 'next'
import siteConfig from '@/config/site'
import { pageKeywords } from '@/config/seo-keywords'

const baseUrl = siteConfig.websiteUrl

export const metadata: Metadata = {
  title: 'Contact Us - Android App & Web Development Company in Erode',
  description:
    'Contact Fude Development, the best IT company in Erode, Tamil Nadu for Android app development, website development, and custom software solutions. Get a free consultation for your project.',
  keywords: [...pageKeywords.contact],
  openGraph: {
    title: 'Contact Fude Development - Best IT Company in Erode, Tamil Nadu',
    description:
      'Ready to start your Android app or website project? Contact the best software development company in Erode for a free consultation.',
    url: `${baseUrl}/contactus`,
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Fude Development - IT Company in Erode',
      },
    ],
  },
  twitter: {
    title: 'Contact Fude Development - Best IT Company in Erode',
    description:
      'Ready to start your Android app or website project? Contact the best software development company in Erode.',
  },
  alternates: {
    canonical: `${baseUrl}/contactus`,
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
