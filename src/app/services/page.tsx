'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import ServicesGrid from '@/components/services/ServicesGrid'
import { preloadResources } from '@/lib/cache-utils'

// Import service components with better caching
const ProcessSteps = dynamic(
  () => import('@/components/services/ProcessSteps'),
  {
    ssr: false,
    loading: () => (
      <div className='animate-pulse bg-gray-800 h-64 rounded-lg' />
    ),
  }
)
const TechnologyStack = dynamic(
  () => import('@/components/services/TechnologyStack'),
  {
    ssr: false,
    loading: () => (
      <div className='animate-pulse bg-gray-800 h-64 rounded-lg' />
    ),
  }
)
const WhyChooseUs = dynamic(() => import('@/components/services/WhyChooseUs'), {
  ssr: false,
  loading: () => <div className='animate-pulse bg-gray-800 h-64 rounded-lg' />,
})
const CTASection = dynamic(() => import('@/components/services/CTASection'), {
  ssr: false,
  loading: () => <div className='animate-pulse bg-gray-800 h-32 rounded-lg' />,
})
const YouTubeSection = dynamic(
  () => import('@/components/services/YouTubeSection'),
  {
    ssr: false,
    loading: () => (
      <div className='animate-pulse bg-gray-800 h-96 rounded-lg' />
    ),
  }
)
const ChatbaseChatbot = dynamic(
  () => import('@/components/ui/ChatbaseChatbot'),
  {
    ssr: false,
  }
)

export default function ServicesPage() {
  useEffect(() => {
    // Preload critical resources
    preloadResources()

    // Add custom animations to document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideRight {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(200%); opacity: 0; }
      }
      @keyframes slideDown {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(200%); opacity: 0; }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      {/* Chatbase Chatbot */}
      <ChatbaseChatbot />

      {/* Main content - Neural background is now in layout */}
      <div className='relative'>
        <ServicesGrid />
        <ProcessSteps />
        <TechnologyStack />
        <WhyChooseUs />
        <CTASection />
        <YouTubeSection />
      </div>
    </>
  )
}
