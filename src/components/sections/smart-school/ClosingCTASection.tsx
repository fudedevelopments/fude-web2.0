'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ClosingCTASection() {
  return (
    <section id='demo' className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#2d1f0e]' />
      <div className='absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow' />
      <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl animate-pulse-glow delay-500' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent' />

      <div className='relative max-w-4xl mx-auto text-center'>
        <ScrollReveal>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-8'>
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            Get Started Today
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Full Clarity. Stronger Trust. Smarter Decisions.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className='text-lg text-blue-100/80 max-w-2xl mx-auto mb-10'>
            Join the growing network of forward-thinking schools transforming education
            with AI. Schedule a personalized demo to see how we can revolutionize your institution.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contactus'
              className='inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 font-bold text-lg rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5'
            >
              Book Free Demo
              <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </a>
            <a
              href='mailto:fudedevelopments@gmail.com'
              className='inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium text-lg rounded-xl hover:bg-white/5 transition-all duration-300'
            >
              Talk to Our Team
            </a>
          </div>
        </ScrollReveal>

        {/* Bottom trust indicators */}
        <ScrollReveal delay={400}>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10'>
            {[
              { value: 'Free Setup', sub: 'No hidden charges' },
              { value: '24/7 Support', sub: 'Always available' },
              { value: '30-Day Trial', sub: 'Risk-free experience' },
            ].map((item) => (
              <div key={item.value} className='text-center'>
                <p className='text-xl font-bold text-white'>{item.value}</p>
                <p className='text-sm text-blue-200/70 mt-1'>{item.sub}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
