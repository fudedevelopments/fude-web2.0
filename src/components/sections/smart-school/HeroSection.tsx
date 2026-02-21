'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8'>
      {/* Background glow effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#12294d] to-[#1a1a2e]' />
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow' />
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl animate-pulse-glow delay-500' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl' />

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='text-center lg:text-left'>
            <ScrollReveal>
              <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6'>
                <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
                AI-Powered Education Platform
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight'>
                AI-Powered{' '}
                <span className='gradient-text'>Smart School</span>{' '}
                Management System
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className='text-lg sm:text-xl text-blue-100 font-medium mb-4'>
                Shaping the Future of Learning
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className='text-base text-blue-100/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0'>
                Transform your school with intelligent automation, AI-driven analytics,
                complete transparency, and smart campus operations. One platform to manage
                everything — from admissions to alumni.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <a
                  href='#demo'
                  className='inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5'
                >
                  Request Demo
                  <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </a>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center px-8 py-3.5 border border-blue-300/50 text-blue-100 font-medium rounded-xl hover:bg-blue-500/20 hover:border-blue-300/70 transition-all duration-300'
                >
                  Contact Sales
                </a>
              </div>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={500}>
              <div className='flex flex-wrap gap-6 justify-center lg:justify-start mt-10 text-sm text-blue-200/70'>
                <span className='flex items-center gap-2'>
                  <svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' /></svg>
                  Cloud-Based
                </span>
                <span className='flex items-center gap-2'>
                  <svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' /></svg>
                  AI-Powered
                </span>
                <span className='flex items-center gap-2'>
                  <svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' /></svg>
                  24/7 Support
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <ScrollReveal direction='right' delay={200}>
            <div className='relative'>
              {/* Main Dashboard Card */}
              <div className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl'>
                {/* Dashboard Header */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-white text-sm font-semibold'>School Dashboard</p>
                      <p className='text-blue-200 text-xs'>AI Analytics Overview</p>
                    </div>
                  </div>
                  <div className='flex gap-1.5'>
                    <div className='w-3 h-3 rounded-full bg-red-400/60' />
                    <div className='w-3 h-3 rounded-full bg-yellow-400/60' />
                    <div className='w-3 h-3 rounded-full bg-green-400/60' />
                  </div>
                </div>

                {/* Stats Row */}
                <div className='grid grid-cols-3 gap-3 mb-6'>
                  {[
                    { label: 'Students', value: '2,847', change: '+12%' },
                    { label: 'Attendance', value: '94.2%', change: '+3%' },
                    { label: 'Performance', value: 'A+', change: '+8%' },
                  ].map((stat) => (
                    <div key={stat.label} className='bg-white/5 rounded-xl p-3 border border-white/5'>
                      <p className='text-blue-200 text-xs'>{stat.label}</p>
                      <p className='text-white text-lg font-bold'>{stat.value}</p>
                      <p className='text-green-400 text-xs'>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Mockup */}
                <div className='bg-white/5 rounded-xl p-4 border border-white/5'>
                  <p className='text-blue-200 text-xs mb-3'>Weekly Analytics</p>
                  <div className='flex items-end gap-2 h-24'>
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className='flex-1 rounded-t-md bg-gradient-to-t from-blue-600/60 to-blue-400/40' style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className='flex justify-between mt-2'>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className='text-blue-200/60 text-xs flex-1 text-center'>{d}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Mobile Card */}
              <div className='absolute -bottom-6 -left-6 sm:-left-10 w-36 sm:w-44 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl animate-float'>
                <div className='flex items-center gap-2 mb-2'>
                  <div className='w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center'>
                    <svg className='w-3 h-3 text-green-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' /></svg>
                  </div>
                  <span className='text-white text-xs font-medium'>Bus Tracking</span>
                </div>
                <div className='bg-white/5 rounded-lg p-2'>
                  <p className='text-green-400 text-xs font-medium'>Bus #12 - Active</p>
                  <p className='text-blue-300/40 text-[10px]'>ETA: 5 minutes</p>
                </div>
              </div>

              {/* Floating Notification */}
              <div className='absolute -top-4 -right-4 sm:-right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl animate-float delay-300'>
                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                    <svg className='w-4 h-4 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-white text-xs font-medium'>AI Alert</p>
                    <p className='text-blue-100/70 text-[10px]'>Attendance anomaly detected</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
