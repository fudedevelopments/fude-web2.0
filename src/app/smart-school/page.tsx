import type { Metadata } from 'next'
import HeroSection from '@/components/sections/smart-school/HeroSection'
import CoreFeaturesSection from '@/components/sections/smart-school/CoreFeaturesSection'
import DashboardPreviewSection from '@/components/sections/smart-school/DashboardPreviewSection'
import ParentsMobileSection from '@/components/sections/smart-school/ParentsMobileSection'
import WhyChooseUsSection from '@/components/sections/smart-school/WhyChooseUsSection'
import DemoRequestForm from '@/components/sections/smart-school/DemoRequestForm'
import ClosingCTASection from '@/components/sections/smart-school/ClosingCTASection'
import siteConfig from '@/config/site'
import { pageKeywords } from '@/config/seo-keywords'
import { smartSchoolFaqSchema } from '@/lib/structured-data'

const PAGE_URL = `${siteConfig.websiteUrl}/smart-school/`

export const metadata: Metadata = {
  title: 'AI-Powered Smart School Management System | Fude Development',
  description:
    'Transform your school with AI-powered ERP by Fude Development. Manage admissions, attendance, fees, exams, parent communication, and live bus tracking from one platform. Serving schools in Erode, Coimbatore, Tiruppur, Salem, Karur, and across Tamil Nadu.',
  keywords: [...pageKeywords.smartSchool],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'AI-Powered Smart School Management System | Fude Development',
    description:
      'Transform your school with AI-powered ERP. Automate administration, track buses in real-time, manage fees & attendance, and deliver personalised learning — all in one platform.',
    url: PAGE_URL,
    siteName: 'Fude Development',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Smart School Management System | Fude Development',
    description:
      'One platform to manage admissions, attendance, bus tracking, fee collection, AI learning, and parent communication. Trusted by schools across Tamil Nadu.',
    site: '@fudedevelopment',
    creator: '@fudedevelopment',
  },
}

// ─── Structured Data ────────────────────────────────────────────────────────

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Smart School Management System by Fude Development',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web, Android, iOS',
  url: PAGE_URL,
  description:
    'An AI-powered school ERP platform offering live bus tracking, AI syllabus-based learning, attendance management, fee collection, parent communication, and real-time analytics — built for schools in India.',
  featureList: [
    'AI Syllabus-Based Personalised Learning',
    'Live GPS Bus Tracking with Parent Alerts',
    'Homework & Parent-Teacher Communication',
    'Real-Time Attendance Analytics',
    'Admin Dashboard with School Insights',
    'Fee Collection & Management',
    'Automated Report Card Generation',
    'AI-Powered Automation for Routine Tasks',
    'Secure Cloud-Based Platform',
    '24/7 Dedicated Support',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free 30-day trial with no hidden charges',
  },
  provider: {
    '@type': 'Organization',
    name: 'Fude Development',
    url: 'https://www.fude.digital',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@fudedevelopments.com',
      areaServed: ['Erode', 'Coimbatore', 'Tiruppur', 'Tamil Nadu', 'India'],
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '38',
    bestRating: '5',
    worstRating: '1',
  },
}

const faqSchema = smartSchoolFaqSchema

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteConfig.websiteUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Smart School',
      item: PAGE_URL,
    },
  ],
}

// ────────────────────────────────────────────────────────────────────────────

export default function SmartSchoolPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className='-mt-16'>
        <HeroSection />
        <CoreFeaturesSection />
        <DashboardPreviewSection />
        <ParentsMobileSection />
        <WhyChooseUsSection />
        <DemoRequestForm />
        <ClosingCTASection />
      </div>
    </>
  )
}
