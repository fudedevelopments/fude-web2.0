'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function CTASection() {
  return (
    <section
      className='relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8'
      aria-label='Call to action'
    >
      {/* ── Background gradient — teal-to-violet, distinct from dark-blue hero ── */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0d9488] via-[#6d28d9] to-[#4338ca]' />

      {/* Soft radial overlay for depth */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Animated orb */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Content ── */}
      <div className='relative z-10 max-w-3xl mx-auto text-center'>
        {/* Headline */}
        <motion.h2
          data-testid='cta-headline'
          className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6'
          {...fadeUp(0)}
        >
          Start Learning Smarter Today
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          className='text-lg sm:text-xl text-teal-100/80 leading-relaxed mb-10 max-w-xl mx-auto'
          {...fadeUp(0.12)}
        >
          Join thousands of students already boosting their grades with AI-powered personalised learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center'
          {...scaleIn(0.22)}
        >
          {/* Primary — gradient button */}
          <a
            href='#get-started'
            className='inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-white text-base
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_32px_rgba(124,58,237,0.6)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60'
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                'linear-gradient(135deg, #6d28d9 0%, #4338ca 100%)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)'
            }}
          >
            Get Started
          </a>

          {/* Secondary — outlined */}
          <a
            href='#learn-more'
            className='inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-white text-base
              border border-white/40 bg-white/10 backdrop-blur-sm
              transition-all duration-300
              hover:scale-105 hover:bg-white/20 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60'
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
