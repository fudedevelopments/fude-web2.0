import type { Metadata } from 'next'
import HeroSection from '@/components/sections/smart-school/HeroSection'
import CoreFeaturesSection from '@/components/sections/smart-school/CoreFeaturesSection'
import DashboardPreviewSection from '@/components/sections/smart-school/DashboardPreviewSection'
import ParentsMobileSection from '@/components/sections/smart-school/ParentsMobileSection'
import WhyChooseUsSection from '@/components/sections/smart-school/WhyChooseUsSection'
import ClosingCTASection from '@/components/sections/smart-school/ClosingCTASection'

export const metadata: Metadata = {
  title: 'AI-Powered Smart School Management System',
  description:
    'Transform your school with AI-powered ERP. Automate administration, track buses in real-time, deliver personalized learning, and gain powerful analytics — all in one platform.',
  keywords: [
    'school management system',
    'school ERP software',
    'AI school management',
    'smart school platform',
    'school bus tracking',
    'student management system',
    'school analytics dashboard',
    'education technology',
    'school automation',
    'AI learning platform',
    // Erode
    'school management system in Erode',
    'school ERP software in Erode',
    'smart school software Erode',
    'school bus tracking Erode',
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
    // Tamil Nadu
    'school ERP Tamil Nadu',
    'school management software Tamil Nadu',
    'AI school platform Tamil Nadu',
  ],
  openGraph: {
    title: 'AI-Powered Smart School Management System | Fude Development',
    description:
      'Transform your school with AI-powered ERP. Automate administration, track buses in real-time, and deliver personalized learning.',
    type: 'website',
  },
}

export default function SmartSchoolPage() {
  return (
    <div className='-mt-16'>
      <HeroSection />
      <CoreFeaturesSection />
      <DashboardPreviewSection />
      <ParentsMobileSection />
      <WhyChooseUsSection />
      <ClosingCTASection />
    </div>
  )
}
