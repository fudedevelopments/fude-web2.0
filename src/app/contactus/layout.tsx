import { Metadata } from 'next'

const baseUrl = 'https://fudedevelopments.com'

export const metadata: Metadata = {
  title: 'Contact Us - Android App & Web Development Company in Erode',
  description:
    'Contact Fude Development, the best IT company in Erode, Tamil Nadu for Android app development, website development, and custom software solutions. Get a free consultation for your project.',
  keywords: [
    'contact Fude Development',
    // Erode
    'Android app development in Erode',
    'Web development company in Erode',
    'IT company in Erode contact',
    'Software company in Erode',
    'Best app developers in Erode',
    'Website designers in Erode contact',
    'Custom software solutions in Erode',
    'Web development consultation Erode',
    'E-commerce website development Erode',
    'Technology consulting Erode',
    // Coimbatore
    'Android app development in Coimbatore',
    'Web development company in Coimbatore',
    'IT company in Coimbatore contact',
    'Software company in Coimbatore',
    'Best app developers in Coimbatore',
    'Website designers in Coimbatore contact',
    'Custom software solutions in Coimbatore',
    'Web development consultation Coimbatore',
    'E-commerce website development Coimbatore',
    'Technology consulting Coimbatore',
    // Tiruppur
    'Android app development in Tiruppur',
    'Web development company in Tiruppur',
    'IT company in Tiruppur contact',
    'Software company in Tiruppur',
    'Best app developers in Tiruppur',
    'Website designers in Tiruppur contact',
    'Custom software solutions in Tiruppur',
    'Web development consultation Tiruppur',
    'E-commerce website development Tiruppur',
    'Technology consulting Tiruppur',
    // General
    'Mobile app development consultation',
    'Android app development quote',
    'Software development inquiry Tamil Nadu',
    'Business website development contact',
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
