'use client'

import { motion } from 'framer-motion'

// Floating particle data — positions are fixed to avoid hydration mismatch
const PARTICLES = [
  { id: 1, x: '10%', y: '20%', size: 4, delay: 0, duration: 6 },
  { id: 2, x: '85%', y: '15%', size: 6, delay: 1, duration: 8 },
  { id: 3, x: '25%', y: '75%', size: 3, delay: 2, duration: 7 },
  { id: 4, x: '70%', y: '60%', size: 5, delay: 0.5, duration: 9 },
  { id: 5, x: '50%', y: '10%', size: 4, delay: 1.5, duration: 6.5 },
  { id: 6, x: '90%', y: '80%', size: 3, delay: 3, duration: 7.5 },
  { id: 7, x: '5%', y: '55%', size: 5, delay: 2.5, duration: 8.5 },
  { id: 8, x: '60%', y: '90%', size: 4, delay: 0.8, duration: 6 },
  { id: 9, x: '40%', y: '40%', size: 3, delay: 1.2, duration: 9 },
  { id: 10, x: '78%', y: '35%', size: 6, delay: 3.5, duration: 7 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
})

export default function HeroSection() {
  return (
    <section
      className='relative overflow-hidden min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8'
      aria-label='Hero'
    >
      {/* ── Background ── */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]' />

      {/* Gradient orbs */}
      <motion.div
        className='absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full'
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full'
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className='absolute rounded-full bg-violet-400/40 pointer-events-none'
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* ── Content ── */}
      <div className='relative z-10 max-w-7xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>

          {/* Left column — text */}
          <div className='text-center md:text-left'>
            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-6'>
                <span className='w-2 h-2 bg-violet-400 rounded-full animate-pulse' />
                Next-Generation AI Learning
              </span>
            </motion.div>

            {/* Headline — no PLATFORM_NAME */}
            <motion.h1
              className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6'
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              {...fadeUp(0.1)}
            >
              Learn Smarter,<br />Achieve More
            </motion.h1>

            {/* Two-sentence subheading */}
            <motion.p
              className='text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0'
              {...fadeUp(0.2)}
            >
              Our AI-powered platform personalizes every study session to your unique strengths and gaps.
              Ask questions from any textbook, generate custom tests, and watch your grades climb.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'
              {...fadeUp(0.3)}
            >
              <a
                href='#get-started'
                className='inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
              >
                Get Started
              </a>
              <a
                href='#try-now'
                className='inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-violet-200 border border-violet-500/40 bg-violet-500/10 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-violet-500/20 hover:border-violet-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
              >
                Try Now
              </a>
            </motion.div>
          </div>

          {/* Right column — glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div
              className='rounded-2xl p-6 sm:p-8 border border-white/10'
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Mock AI chat UI */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center' style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <div>
                  <p className='text-white font-semibold text-sm'>AI Tutor</p>
                  <p className='text-violet-300 text-xs'>Online · Ready to help</p>
                </div>
              </div>

              <div className='space-y-3 mb-6'>
                {/* User message */}
                <div className='flex justify-end'>
                  <div className='max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm text-white' style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                    Explain Newton&apos;s second law with an example
                  </div>
                </div>
                {/* AI response */}
                <div className='flex justify-start'>
                  <div className='max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-slate-200 bg-white/8 border border-white/10'>
                    F = ma — force equals mass times acceleration. Push a 2 kg box with 10 N and it accelerates at 5 m/s².
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className='grid grid-cols-3 gap-3 pt-4 border-t border-white/10'>
                {[
                  { label: 'Questions Answered', value: '10K+' },
                  { label: 'Avg. Score Boost', value: '+34%' },
                  { label: 'Active Learners', value: '5K+' },
                ].map((stat) => (
                  <div key={stat.label} className='text-center'>
                    <p className='text-violet-300 font-bold text-lg'>{stat.value}</p>
                    <p className='text-slate-400 text-xs leading-tight mt-0.5'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
