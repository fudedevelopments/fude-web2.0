'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HeroSection() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', 'e79fa461-4fa3-400b-be52-72d4d02d8432')
    formData.append('subject', 'Smart School ERP - Demo Request')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setResult('success')
        ;(event.target as HTMLFormElement).reset()
      } else {
        setResult('error')
      }
    } catch {
      setResult('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                AI-Powered Smart School Management System
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className='text-lg sm:text-xl text-blue-100 font-medium mb-4'>
                Shaping the Future of Learning
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className='text-base text-blue-100/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0'>
                Transform your school with intelligent automation, AI-driven analytics,
                complete transparency, and smart campus operations. One platform to manage
                everything — from admissions to alumni.
              </p>
              
              {/* Shine Unique Highlight */}
              <div className='bg-gradient-to-r from-blue-900/60 to-purple-900/60 border border-amber-500/30 rounded-2xl p-5 mb-8 backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(245,158,11,0.15)]'>
                <div className='absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 blur-lg group-hover:via-amber-500/40 transition-all duration-1000 animate-[shimmer_3s_infinite]' />
                <div className='flex items-start gap-4 relative z-10 text-left'>
                  <div className='mt-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-2 shadow-[0_0_15px_rgba(245,158,11,0.6)]'>
                    <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-white font-bold text-lg mb-1 leading-tight'>Shine Unique Across All Schools</h3>
                    <p className='text-blue-200 text-sm font-medium'>
                      Stop being just another school. Use our AI platform to become the undeniable <span className='text-amber-400 font-bold'>#1 tech-driven educational leader</span> in your city.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <a
                  href='#contact'
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

          {/* Right Visual - Demo Form for Ads */}
          <ScrollReveal direction='right' delay={200}>
             <div className='bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 relative'>
              {result === 'success' ? (
                <div className='text-center py-10'>
                  <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>Request Received!</h3>
                  <p className='text-sm text-gray-500 mb-6'>
                    We&apos;ll contact you shortly to schedule your personalized demo.
                  </p>
                  <button
                    onClick={() => setResult('')}
                    className='inline-flex px-6 py-2.5 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-all text-sm'
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>Request a Free Demo</h3>
                    <p className='text-sm text-gray-500'>
                      Fill in your details and we&apos;ll schedule a personalized walkthrough.
                    </p>
                  </div>

                  <form onSubmit={onSubmit} className='space-y-4'>
                    <div>
                      <input
                        type='text'
                        name='name'
                        required
                        placeholder='Full Name *'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        name='school_name'
                        required
                        placeholder='School / Institution Name *'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='tel'
                        name='phone'
                        required
                        placeholder='Phone Number *'
                        pattern='[+]?[0-9\s\-]{7,15}'
                        title='Please enter a valid phone number'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address (optional)'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm'
                      />
                    </div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                    >
                      {isSubmitting ? 'Sending Request...' : 'Get Your Free Demo'}
                    </button>
                    {result === 'error' && (
                      <p className='text-xs text-red-500 text-center mt-2'>
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
