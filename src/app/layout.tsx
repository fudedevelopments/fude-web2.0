import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import siteConfig from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: siteConfig.defaultSEO.title,
    template: siteConfig.defaultSEO.titleTemplate,
  },
  description: siteConfig.defaultSEO.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: `${siteConfig.companyName} Team` }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  icons: {
    icon: [{ url: siteConfig.logoPath, sizes: 'any', type: 'image/svg+xml' }],
    shortcut: siteConfig.logoPath,
    apple: [{ url: siteConfig.logoPath, sizes: '180x180', type: 'image/svg+xml' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: siteConfig.defaultSEO.locale,
    url: siteConfig.websiteUrl,
    siteName: siteConfig.companyName,
    title: siteConfig.defaultSEO.title,
    description: siteConfig.defaultSEO.description,
    images: [
      {
        url: siteConfig.logoPath,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultSEO.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultSEO.title,
    description: siteConfig.defaultSEO.description,
    images: [siteConfig.logoPath],
    creator: siteConfig.socialLinks.twitterHandle,
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.websiteUrl,
    logo: siteConfig.websiteUrl + siteConfig.logoPath,
    description: siteConfig.defaultSEO.description,
    foundingDate: siteConfig.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.github,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.supportEmail,
      availableLanguage: siteConfig.languages,
    },
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.websiteUrl + '/#organization',
    name: siteConfig.companyName,
    image: siteConfig.websiteUrl + siteConfig.logoPath,
    telephone: siteConfig.phone,
    email: siteConfig.supportEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    url: siteConfig.websiteUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: siteConfig.workingHours.days,
      opens: siteConfig.workingHours.opens,
      closes: siteConfig.workingHours.closes,
    },
    priceRange: siteConfig.priceRange,
  }

  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href={siteConfig.websiteUrl} />
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
