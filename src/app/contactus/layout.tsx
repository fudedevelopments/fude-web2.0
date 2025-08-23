import { Metadata } from 'next'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fudedevelopments.com'

// Enable static generation with revalidation every 30 days
export const revalidate = 2592000

export const metadata: Metadata = {
  title: 'Contact Us - Android App & Web Development Company in Erode',
  description:
    'Contact Fude Development, the best IT company in Erode, Tamil Nadu for Android app development, website development, and custom software solutions. Get a free consultation for your project.',
  keywords: [
    'contact Fude Development',
    'Android app development in Erode',
    'Web development company in Erode',
    'IT company in Erode contact',
    'Software company in Erode',
    'Best app developers in Erode',
    'Website designers in Erode contact',
    'Mobile app development consultation',
    'Custom software solutions in Erode',
    'Android app development quote',
    'Web development consultation Erode',
    'Software development inquiry Tamil Nadu',
    'Business website development contact',
    'E-commerce website development Erode',
    'Technology consulting Erode',
  ],
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
