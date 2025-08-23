import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Best IT Company in Erode | Fude Development Team',
  description:
    'Learn about Fude Development, the leading software company in Erode, Tamil Nadu. Meet our expert team of Android app developers, web developers, and AI specialists driving digital transformation across India.',
  keywords: [
    'about Fude Development',
    'IT company in Erode',
    'software company in Erode',
    'Best app developers in Erode',
    'Android app developers in Tamil Nadu',
    'web development team Erode',
    'software development company Tamil Nadu',
    'tech company mission',
    'development experts India',
    'technology innovators Erode',
    'digital transformation team',
    'custom software company India',
    'mobile app development team',
    'AI development team India',
  ],
  openGraph: {
    title: 'About Fude Development - Best IT Company in Erode, Tamil Nadu',
    description:
      'Meet our expert team of Android app developers, web developers, and AI specialists at Fude Development, the leading software company in Erode.',
    url: 'https://fudedevelopments.com/aboutus',
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
    canonical: 'https://fudedevelopments.com/aboutus',
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
