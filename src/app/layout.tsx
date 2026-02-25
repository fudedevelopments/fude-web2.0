import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const baseUrl = 'https://fude.in'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Fude Development - Software Solutions & Web Development in Erode',
    template: '%s | Fude Development',
  },
  description:
    'Leading software development company in Erode, Tamil Nadu. Fude Development specializes in custom web applications, Android mobile apps, AI solutions, and business automation.',
  keywords: [
    'Fude Development',
    // Erode
    'Android app development in Erode',
    'Web development company in Erode',
    'Software company in Erode',
    'IT company in Erode',
    'Best app developers in Erode',
    'Mobile app development in Erode',
    'Website designers in Erode',
    'Custom software solutions in Erode',
    // Coimbatore
    'Android app development in Coimbatore',
    'Web development company in Coimbatore',
    'Software company in Coimbatore',
    'IT company in Coimbatore',
    'Best app developers in Coimbatore',
    'Mobile app development in Coimbatore',
    'Website designers in Coimbatore',
    'Custom software solutions in Coimbatore',
    // Tiruppur
    'Android app development in Tiruppur',
    'Web development company in Tiruppur',
    'Software company in Tiruppur',
    'IT company in Tiruppur',
    'Best app developers in Tiruppur',
    'Mobile app development in Tiruppur',
    'Website designers in Tiruppur',
    'Custom software solutions in Tiruppur',
    // Generic / India
    'Android app development company',
    'Website development company',
    'Full-stack development company',
    'Software development services India',
    'Android app developers in Tamil Nadu',
    'Web development company in Tamil Nadu',
    'Best IT company in Tamil Nadu',
    'AI development',
    'React development',
    'Next.js development',
  ],
  authors: [{ name: 'Fude Development Team' }],
  creator: 'Fude Development',
  publisher: 'Fude Development',
  icons: {
    icon: [{ url: '/images/logo/fude-logo.svg', sizes: 'any', type: 'image/svg+xml' }],
    shortcut: '/images/logo/fude-logo.svg',
    apple: [{ url: '/images/logo/fude-logo.svg', sizes: '180x180', type: 'image/svg+xml' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Fude Development',
    title: 'Fude Development - Software Solutions & Web Development in Erode',
    description:
      'Leading software development company in Erode, Tamil Nadu specializing in custom web applications, Android mobile apps, and business automation.',
    images: [
      {
        url: '/images/logo/fude-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Fude Development - Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fude Development - Software Solutions & Web Development in Erode',
    description:
      'Leading software development company in Erode, Tamil Nadu.',
    images: ['/images/logo/fude-logo.svg'],
    creator: '@fudedevelopments',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = 'https://fudedevelopments.com'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fude Development',
    url: siteUrl,
    logo: siteUrl + '/images/logo/fude-logo.svg',
    description:
      'Leading software development company in Erode, Tamil Nadu.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    sameAs: [
      'https://linkedin.com/company/fudedevelopments',
      'https://github.com/fudedevelopments',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'fudedevelopments@gmail.com',
      availableLanguage: ['English', 'Tamil'],
    },
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl + '/#organization',
    name: 'Fude Development',
    image: siteUrl + '/images/logo/fude-logo.svg',
    telephone: '+91 7904329569',
    email: 'fudedevelopments@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Slatter Nagar, Perunduari',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      postalCode: '638053',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.3410',
      longitude: '77.7172',
    },
    url: siteUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '5',
  }

  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href={siteUrl} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </head>
      <body className={inter.variable + ' ' + poppins.variable + ' font-sans antialiased'}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
