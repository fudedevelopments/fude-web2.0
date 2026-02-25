import type { Metadata } from 'next'
import HeroSection from '@/components/sections/smart-school/HeroSection'
import CoreFeaturesSection from '@/components/sections/smart-school/CoreFeaturesSection'
import DashboardPreviewSection from '@/components/sections/smart-school/DashboardPreviewSection'
import ParentsMobileSection from '@/components/sections/smart-school/ParentsMobileSection'
import WhyChooseUsSection from '@/components/sections/smart-school/WhyChooseUsSection'
import ClosingCTASection from '@/components/sections/smart-school/ClosingCTASection'

const PAGE_URL = 'https://www.fude.digital/smart-school/'

export const metadata: Metadata = {
  title: 'AI-Powered Smart School Management System | Fude Development',
  description:
    'Transform your school with AI-powered ERP by Fude Development. Automate administration, track buses in real-time, deliver personalised learning, manage attendance & fees — all from one platform. Serving schools in Erode, Coimbatore, Tiruppur & Tamil Nadu.',
  keywords: [
    // Core product keywords
    'smart school management system',
    'school ERP software',
    'AI school management system',
    'school management software India',
    'school automation platform',
    'AI-powered school ERP',
    'cloud-based school management',
    'digital school management system',
    'school administration software',
    'school fee management software',
    'student information system',
    'school attendance management',
    'live bus tracking for schools',
    'GPS school bus tracking',
    'parent communication app for schools',
    'school analytics dashboard',
    'AI learning platform for schools',
    'AI syllabus-based learning',
    'personalised learning platform',
    'school report card management',
    'teacher management software',
    'admission management system',
    // Erode
    'school management system in Erode',
    'school ERP software in Erode',
    'smart school software Erode',
    'school bus tracking Erode',
    'best school software in Erode',
    // Coimbatore
    'school management system in Coimbatore',
    'school ERP software in Coimbatore',
    'smart school software Coimbatore',
    'school bus tracking Coimbatore',
    'education technology Coimbatore',
    // Tiruppur
    'school management system in Tiruppur',
    'school ERP software in Tiruppur',
    'smart school software Tiruppur',
    'school bus tracking Tiruppur',
    'education technology Tiruppur',
    // Tamil Nadu & India
    'school ERP Tamil Nadu',
    'school management software Tamil Nadu',
    'AI school platform Tamil Nadu',
    'best school ERP in Tamil Nadu',
    'school software India',
  ],
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Smart School Management System by Fude Development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Smart School Management System by Fude Development is an AI-powered cloud-based ERP platform that helps schools automate administration, track buses in real-time, manage student attendance and fees, enable parent-teacher communication, and deliver personalised AI-driven learning — all from a single platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the platform support live GPS bus tracking for parents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The platform includes real-time GPS bus tracking with instant push notifications to parents when the bus is approaching their stop, when their child boards, and when the bus reaches school — ensuring complete safety and transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI features are included in the school management system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The system includes AI syllabus-based personalised learning that adapts to each student, an AI tutor for homework help, automated report generation, AI-driven attendance alerts, and intelligent analytics dashboards for administrators and teachers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this school ERP software available for schools in Erode and Tamil Nadu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fude Development is headquartered in Erode, Tamil Nadu, and the Smart School Management System is actively offered to schools across Erode, Coimbatore, Tiruppur, and the broader Tamil Nadu region, with support for schools across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can a school get started with the platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schools can go live in days, not months. Fude Development handles the onboarding, data migration, and comprehensive staff training at no extra cost. A free 30-day trial is available with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of support does Fude Development provide after deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide round-the-clock (24/7) technical support along with dedicated account managers who have deep expertise in the education domain. Support is available throughout the year to ensure uninterrupted school operations.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.fude.digital/',
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
        <ClosingCTASection />
      </div>
    </>
  )
}
