'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const reasons = [
  {
    title: 'Secure Cloud-Based Platform',
    description: 'Enterprise-grade security with encrypted data storage, automated backups, and compliance with educational data standards.',
    image: '/images/whySchoolUs/Cloud-Data-Security.webp',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
      </svg>
    ),
  },
  {
    title: 'Easy Setup & Training',
    description: 'Go live in days, not months. We handle onboarding, data migration, and comprehensive staff training at no extra cost.',
    image: '/images/whySchoolUs/easysetup.webp',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support Team',
    description: 'Round-the-clock technical support with dedicated account managers who understand the education domain deeply.',
    image: '/images/whySchoolUs/Dedicated-support.jpg',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automate report generation, attendance alerts, fee reminders, and routine tasks — freeing staff to focus on education.',
    image: '/images/whySchoolUs/Ai-powered-Automation.png',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
      </svg>
    ),
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <span className='inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4'>
              Why Us
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Why Schools Choose Us
            </h2>
            <p className='text-lg text-gray-500 max-w-2xl mx-auto'>
              Trusted by institutions for our reliability, innovation, and unwavering commitment to educational excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 100}>
              <div className='bg-white border border-gray-100 rounded-2xl overflow-hidden hover-lift text-center h-full'>
                <div className='relative w-full h-44 overflow-hidden'>
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  />
                </div>
                <div className='p-7'>
                  <div className='w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-600'>
                    {reason.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {reason.title}
                  </h3>
                  <p className='text-sm text-gray-500 leading-relaxed'>
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
