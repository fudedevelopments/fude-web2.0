'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function DemoRequestForm() {
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
    <section id='contact' className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-50 to-white' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl' />

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left Side - Info */}
          <div className='lg:sticky lg:top-32'>
            <ScrollReveal>
              <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-6'>
                <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                Request a Demo
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight'
                style={{
                  background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                See Smart School in Action
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className='text-lg text-gray-500 leading-relaxed mb-8'>
                Schedule a personalized demo and discover how our AI-powered platform
                can transform your school management. Our team will walk you through
                every feature tailored to your institution&apos;s needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className='space-y-5'>
                {[
                  {
                    icon: (
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                      </svg>
                    ),
                    title: 'Quick Response',
                    desc: 'Our team will get back to you within 2 hours',
                  },
                  {
                    icon: (
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                      </svg>
                    ),
                    title: 'Free Setup & Training',
                    desc: 'Complete onboarding support at no extra cost',
                  },
                  {
                    icon: (
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    ),
                    title: '30-Day Free Trial',
                    desc: 'Try everything risk-free with no commitment',
                  },
                ].map((item) => (
                  <div key={item.title} className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0'>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-gray-900 font-semibold'>{item.title}</p>
                      <p className='text-gray-500 text-sm'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Form */}
          <ScrollReveal direction='right' delay={200}>
            <div className='bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-900/5 p-8 sm:p-10'>
              {result === 'success' ? (
                <div className='text-center py-12'>
                  <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <svg className='w-8 h-8 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>Thank You!</h3>
                  <p className='text-gray-500 mb-6'>
                    Your demo request has been submitted successfully. Our team will
                    contact you within 2 hours to schedule your personalized demo.
                  </p>
                  <button
                    onClick={() => setResult('')}
                    className='inline-flex items-center justify-center px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-all duration-300'
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className='mb-8'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>Request a Free Demo</h3>
                    <p className='text-gray-500'>
                      Fill in your details and we&apos;ll schedule a personalized walkthrough.
                    </p>
                  </div>

                  <form onSubmit={onSubmit} className='space-y-5'>
                    {/* Name */}
                    <div>
                      <label htmlFor='demo-name' className='block text-sm font-medium text-gray-700 mb-1.5'>
                        Full Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        id='demo-name'
                        name='name'
                        required
                        placeholder='Enter your full name'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300'
                      />
                    </div>

                    {/* School Name */}
                    <div>
                      <label htmlFor='demo-school' className='block text-sm font-medium text-gray-700 mb-1.5'>
                        School / Institution Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        id='demo-school'
                        name='school_name'
                        required
                        placeholder='Enter school or institution name'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300'
                      />
                    </div>

                    {/* Phone Number - REQUIRED */}
                    <div>
                      <label htmlFor='demo-phone' className='block text-sm font-medium text-gray-700 mb-1.5'>
                        Phone Number <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='tel'
                        id='demo-phone'
                        name='phone'
                        required
                        placeholder='+91 XXXXX XXXXX'
                        pattern='[+]?[0-9\s\-]{7,15}'
                        title='Please enter a valid phone number'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300'
                      />
                    </div>

                    {/* Email - OPTIONAL */}
                    <div>
                      <label htmlFor='demo-email' className='block text-sm font-medium text-gray-700 mb-1.5'>
                        Email Address <span className='text-gray-400 text-xs font-normal'>(optional)</span>
                      </label>
                      <input
                        type='email'
                        id='demo-email'
                        name='email'
                        placeholder='you@school.com'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300'
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor='demo-message' className='block text-sm font-medium text-gray-700 mb-1.5'>
                        Message <span className='text-gray-400 text-xs font-normal'>(optional)</span>
                      </label>
                      <textarea
                        id='demo-message'
                        name='message'
                        rows={4}
                        placeholder='Tell us about your school and requirements...'
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none'
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                    >
                      {isSubmitting ? (
                        <>
                          <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' fill='none' viewBox='0 0 24 24'>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Free Demo
                          <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                          </svg>
                        </>
                      )}
                    </button>

                    {/* Error message */}
                    {result === 'error' && (
                      <div className='flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl'>
                        <svg className='w-5 h-5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                        </svg>
                        <span className='text-sm'>Something went wrong. Please try again or call us directly.</span>
                      </div>
                    )}

                    {/* Privacy note */}
                    <p className='text-xs text-gray-400 text-center'>
                      By submitting, you agree to be contacted by our team. We respect your privacy.
                    </p>
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
