'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const reasons = [
  {
    title: 'Enhance Your School\'s Brand',
    description: 'Stand out as a premier, tech-forward institution. Impress parents with a modern, transparent, and seamless digital experience that sets you apart from competitors.',
    image: '/images/whySchoolUs/Cloud-Data-Security.webp',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
      </svg>
    ),
  },
  {
    title: 'Slash Admin Work by 80%',
    description: 'Stop wasting time on manual paperwork. Automate fee collection, attendance, and report cards so your staff can focus 100% on student success and growth.',
    image: '/images/whySchoolUs/Ai-powered-Automation.png',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
  },
  {
    title: 'Zero-Headache Migration',
    description: 'Switching is entirely painless. We handle 100% of your data migration and provide in-person or virtual staff training to get you running in days, not months.',
    image: '/images/whySchoolUs/easysetup.webp',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
      </svg>
    ),
  },
  {
    title: 'VIP 24/7 Support',
    description: 'You get a dedicated technical manager. Whether you need a small change or a highly customized report, our white-glove support team builds it for you instantly.',
    image: '/images/whySchoolUs/Dedicated-support.jpg',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' />
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
            <span className='inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-100 uppercase tracking-wider'>
              The Ultimate Advantage
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Become the Premier School in Your City
            </h2>
            <p className='text-lg text-gray-500 max-w-2xl mx-auto'>
              Equip your institution with cutting-edge tools that don't just solve problems—they make your school the undeniable first choice for parents.
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
                <div className='p-6 sm:p-7'>
                  <div className='w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-600 shadow-sm'>
                    {reason.icon}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {reason.title}
                  </h3>
                  <p className='text-sm text-gray-500 leading-relaxed font-medium'>
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
