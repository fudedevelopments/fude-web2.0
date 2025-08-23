import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import AppBar from '@/components/ui/AppBar'
import Footer from '@/components/ui/Footer'
import NeuralBackgroundWrapper from '@/components/3d/NeuralBackgroundWrapper'
import { NavigationProvider } from '@/providers/NavigationProvider'
import Analytics from '@/components/Analytics'
import PWAInstaller from '@/components/ui/PWAInstaller'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fudedevelopments.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      'Fude Development – AI-Powered Software Solutions & Web Development',
    template: '%s | Fude Development',
  },
  description:
    'Leading AI-powered software development company in Erode, Tamil Nadu. Fude Development specializes in custom web applications, Android mobile apps, machine learning solutions, and intelligent business automation. Best IT company in Erode offering affordable app development and digital transformation services.',
  keywords: [
    // Company + Brand Keywords
    'Fude Development',
    'Fude Development Erode',
    'Fude Development Android apps',
    'Fude Development web development',
    'Fude Development software company',
    'Fude Development IT company',

    // Location-Based Keywords (Erode Local SEO)
    'Android app development in Erode',
    'Web development company in Erode',
    'Software company in Erode',
    'IT company in Erode',
    'Best app developers in Erode',
    'Website designers in Erode',
    'Mobile app development in Erode',
    'Custom software solutions in Erode',

    // Service-Based Keywords
    'Android app development company',
    'Website development company',
    'Mobile app development services',
    'E-commerce website development',
    'Business website development',
    'Custom Android apps',
    'Web application development',
    'Full-stack development company',
    'Software development services India',
    'Affordable app development',

    // Extended Keywords (Tamil Nadu & India)
    'Android app developers in Tamil Nadu',
    'Web development company in Tamil Nadu',
    'Best IT company in Tamil Nadu',
    'Mobile app development company India',
    'Website design company India',
    'Custom software company India',

    // Additional Tech Keywords
    'AI development',
    'machine learning solutions',
    'automation solutions',
    'artificial intelligence',
    'React development',
    'Next.js development',
    'business automation',
    'digital transformation',
    'tech consulting',
  ],
  authors: [{ name: 'Fude Development Team' }],
  creator: 'Fude Development',
  publisher: 'Fude Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      {
        url: '/images/logo/fude-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Fude Development',
    title:
      'Fude Development – AI-Powered Software Solutions & Web Development in Erode',
    description:
      'Leading AI-powered software development company in Erode, Tamil Nadu specializing in custom web applications, Android mobile apps, machine learning solutions, and intelligent business automation.',
    images: [
      {
        url: '/images/logo/fude-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Fude Development - AI-Powered Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Fude Development – AI-Powered Software Solutions & Web Development in Erode',
    description:
      'Leading AI-powered software development company in Erode, Tamil Nadu specializing in custom web applications, Android mobile apps, and intelligent business automation.',
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://fudedevelopments.com'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fude Development',
    legalName: 'Fude Development',
    url: siteUrl,
    logo: `${siteUrl}/images/logo/fude-logo.svg`,
    description:
      'Leading AI-powered software development company in Erode, Tamil Nadu specializing in custom web applications, Android mobile apps, machine learning solutions, and intelligent business automation.',
    foundingDate: '2020',
    areaServed: ['Erode', 'Tamil Nadu', 'India', 'Worldwide'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    services: [
      'Android App Development',
      'Web Development',
      'Mobile App Development',
      'E-commerce Website Development',
      'Business Website Development',
      'Custom Android Apps',
      'Web Application Development',
      'Full-stack Development',
      'Software Development Services',
      'AI Development',
      'Machine Learning Solutions',
      'Business Automation',
      'Custom Software Development',
    ],
    keywords: [
      'Android app development in Erode',
      'Web development company in Erode',
      'Software company in Erode',
      'IT company in Erode',
      'Best app developers in Erode',
      'Website designers in Erode',
      'Mobile app development in Erode',
    ],
    sameAs: [
      'https://linkedin.com/company/fudedevelopments',
      'https://github.com/fudedevelopments',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@fudedevelopments.com',
      areaServed: ['Erode', 'Tamil Nadu', 'India'],
      availableLanguage: ['English', 'Tamil'],
    },
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Fude Development',
    image: `${siteUrl}/images/logo/fude-logo.svg`,
    telephone: '+91 7904329569',
    email: 'contact@fudedevelopments.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Erode',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      postalCode: '638001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.3410',
      longitude: '77.7172',
    },
    url: siteUrl,
    sameAs: [
      'https://linkedin.com/company/fudedevelopments',
      'https://github.com/fudedevelopments',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
    currenciesAccepted: 'INR, USD',
  }

  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='canonical' href={siteUrl} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Analytics />
        <PWAInstaller />

        <NavigationProvider>
          {/* Neural Network Background - Fixed and shared across all pages */}
          <NeuralBackgroundWrapper />

          {/* Main App Structure */}
          <div className='relative' style={{ zIndex: 10 }}>
            <AppBar />
            <main className='relative'>{children}</main>
            <SpeedInsights />
            <Footer />
          </div>
        </NavigationProvider>
      </body>
    </html>
  )
}
