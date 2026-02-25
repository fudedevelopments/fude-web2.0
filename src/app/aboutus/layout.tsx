import { Metadata } from 'next'

const baseUrl = 'https://fudedevelopments.com'

export const metadata: Metadata = {
  title: 'About Us - Best IT Company in Erode | Fude Development Team',
  description:
    'Learn about Fude Development, the leading software company in Erode, Tamil Nadu. Meet our expert team of Android app developers, web developers, and AI specialists driving digital transformation across India.',
  keywords: [
    'about Fude Development',
    // Erode
    'IT company in Erode',
    'software company in Erode',
    'Best app developers in Erode',
    'web development team Erode',
    'technology innovators Erode',
    // Coimbatore
    'IT company in Coimbatore',
    'software company in Coimbatore',
    'Best app developers in Coimbatore',
    'web development team Coimbatore',
    'technology company Coimbatore',
    // Tiruppur
    'IT company in Tiruppur',
    'software company in Tiruppur',
    'Best app developers in Tiruppur',
    'web development team Tiruppur',
    'technology company Tiruppur',
    // General
    'Android app developers in Tamil Nadu',
    'software development company Tamil Nadu',
    'tech company mission',
    'development experts India',
    'digital transformation team',
    'custom software company India',
    'mobile app development team',
    'AI development team India',
  ],
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
