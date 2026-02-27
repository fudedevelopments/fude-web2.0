'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const features = [
  {
    title: 'AI Syllabus-Based Learning',
    description: 'Personalized AI-driven curriculum mapped to syllabi, delivering smart insights and adaptive learning paths for every student.',
    image: '/images/Schoolneed/AiSyllabus.jpg',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
  },
  {
    title: 'Live Bus Tracking',
    description: 'Real-time GPS tracking with instant parent alerts, route optimization, and automated pickup/drop notifications.',
    image: '/images/Schoolneed/BusTraking.jpg',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'Homework & Communication',
    description: 'Instant homework updates, announcements, and seamless parent-teacher communication through a unified messaging platform.',
    image: '/images/Schoolneed/homework.jpeg',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
      </svg>
    ),
  },
  {
    title: 'Real-Time Analytics',
    description: 'AI-powered dashboards for attendance tracking, student performance metrics, and comprehensive admin reports.',
    image: '/images/Schoolneed/realtime.png',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
      </svg>
    ),
  },
]

export default function CoreFeaturesSection() {
  return (
    <section className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <span className='inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4'>
              Core Features
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Everything Your School Needs
            </h2>
            <p className='text-lg text-gray-500 max-w-2xl mx-auto'>
              A complete AI-driven ecosystem designed to simplify school operations and enhance learning outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className='bg-white border border-gray-100 rounded-2xl overflow-hidden hover-lift h-full'>
                <div className='relative w-full h-44 overflow-hidden'>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  />
                </div>
                <div className='p-7'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 text-blue-600'>
                    {feature.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                  <p className='text-sm text-gray-500 leading-relaxed'>{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
