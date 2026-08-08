'use client'

import { motion } from 'framer-motion'

export interface Step {
  number: number
  title: string
  description: string
}

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your account in seconds. Choose your grade, subjects, and learning goals to personalise your experience.',
  },
  {
    number: 2,
    title: 'Upload Textbook',
    description: 'Upload any textbook or study material as a PDF. Our AI instantly indexes every page for smart Q&A.',
  },
  {
    number: 3,
    title: 'Ask Questions',
    description: 'Type any question about your material. The AI tutor explains concepts, solves problems, and generates examples on demand.',
  },
  {
    number: 4,
    title: 'Track Progress',
    description: 'Review your performance dashboard, spot weak areas, and watch your scores improve over time.',
  },
]

const fadeSlide = (index: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay: index * 0.12 },
})

export default function HowItWorksSection() {
  return (
    <section
      className='relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8'
      aria-label='How It Works'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]' />

      {/* Subtle orb */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section heading */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20 mb-4'>
            <span className='w-2 h-2 bg-teal-400 rounded-full animate-pulse' />
            Simple Process
          </span>
          <h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #5eead4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            How It Works
          </h2>
          <p className='mt-4 text-slate-400 text-lg max-w-xl mx-auto'>
            Four simple steps to transform the way you study.
          </p>
        </motion.div>

        {/* Steps */}
        <div className='flex flex-col lg:flex-row items-stretch gap-0'>
          {STEPS.map((step, index) => (
            <div key={step.number} className='flex lg:flex-col items-center flex-1'>
              {/* Step card */}
              <motion.div
                className='flex-1 w-full'
                {...fadeSlide(index)}
              >
                <div
                  className='h-full rounded-2xl p-6 border border-white/10 flex flex-col gap-4'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(124,58,237,0.10), inset 0 1px 0 rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Step number badge */}
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0'
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #0d9488)' }}
                    data-testid={`step-number-${step.number}`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3 className='text-white font-semibold text-lg mb-1'>{step.title}</h3>
                    <p className='text-slate-400 text-sm leading-relaxed'>{step.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Connector — shown between steps, not after the last */}
              {index < STEPS.length - 1 && (
                <div
                  data-testid='step-connector'
                  className='connector flex items-center justify-center shrink-0
                    /* vertical on mobile */ flex-col lg:flex-row
                    my-3 lg:my-0 mx-0 lg:mx-3'
                  aria-hidden='true'
                >
                  {/* Vertical line (mobile) / Horizontal line (desktop) */}
                  <div className='block lg:hidden w-px h-8 bg-gradient-to-b from-violet-500/60 to-teal-500/60' />
                  <div className='hidden lg:block h-px w-8 bg-gradient-to-r from-violet-500/60 to-teal-500/60' />

                  {/* Arrow chevron */}
                  <svg
                    className='block lg:hidden text-violet-400/70 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                  <svg
                    className='hidden lg:block text-violet-400/70 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
