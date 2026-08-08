import type { Metadata } from 'next'
import HeroSection from '@/components/sections/smart-school/HeroSection'
import FeaturesSection from '@/components/sections/smart-school/FeaturesSection'
import HowItWorksSection from '@/components/sections/smart-school/HowItWorksSection'
import PersonalizedExperienceSection from '@/components/sections/smart-school/PersonalizedExperienceSection'
import TestimonialsSection from '@/components/sections/smart-school/TestimonialsSection'
import CTASection from '@/components/sections/smart-school/CTASection'
import SmartSchoolFooter from '@/components/sections/smart-school/SmartSchoolFooter'
import siteConfig from '@/config/site'
import { PLATFORM_NAME } from '@/config/smartSchool'
import { pageKeywords } from '@/config/seo-keywords'
import { smartSchoolFaqSchema } from '@/lib/structured-data'

const PAGE_URL = `${siteConfig.websiteUrl}/smart-school/`

export const metadata: Metadata = {
  title: `${PLATFORM_NAME} Student AI Learning Platform | Fude Development`,
  description:
    `Empower students with ${PLATFORM_NAME} — a personalised AI learning platform by Fude Development. Adaptive lessons, real-time progress tracking, and intelligent study plans tailored to every student.`,
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
    title: `${PLATFORM_NAME} Student AI Learning Platform | Fude Development`,
    description:
      `Empower students with ${PLATFORM_NAME}. Personalised AI-driven lessons, adaptive study plans, and real-time progress insights — all in one platform.`,
    url: PAGE_URL,
    siteName: 'Fude Development',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PLATFORM_NAME} Student AI Learning Platform | Fude Development`,
    description:
      `Personalised AI learning for every student. Adaptive lessons, progress tracking, and intelligent study plans powered by ${PLATFORM_NAME}.`,
    site: '@fudedevelopment',
    creator: '@fudedevelopment',
  },
}

// ─── Structured Data ────────────────────────────────────────────────────────

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${PLATFORM_NAME} Student AI Learning Platform by Fude Development`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web, Android, iOS',
  url: PAGE_URL,
  description:
    `An AI-powered student learning platform offering personalised lessons, adaptive study plans, real-time progress tracking, and intelligent recommendations — built for schools across India.`,
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
        <div data-testid='section-hero'>
          <HeroSection />
        </div>
        <div data-testid='section-features'>
          <FeaturesSection />
        </div>
        <div data-testid='section-how-it-works'>
          <HowItWorksSection />
        </div>
        <div data-testid='section-personalized'>
          <PersonalizedExperienceSection />
        </div>
        <div data-testid='section-testimonials'>
          <TestimonialsSection />
        </div>
        <div data-testid='section-cta'>
          <CTASection />
        </div>
        <div data-testid='section-footer'>
          <SmartSchoolFooter />
        </div>
      </div>
    </>
  )
}
