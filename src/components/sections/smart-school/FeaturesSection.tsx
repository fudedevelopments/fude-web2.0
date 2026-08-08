'use client'

import { motion } from 'framer-motion'

export interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
    title: 'Textbook Q&A Instant Answers',
    description: 'Ask any question from your textbook and get clear, curriculum-aligned answers with step-by-step explanations instantly.',
  },
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' />
      </svg>
    ),
    title: 'Personalized Test Generation',
    description: 'Generate custom practice tests tailored to your weak areas, learning pace, and upcoming exam syllabus automatically.',
  },
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
      </svg>
    ),
    title: 'Intelligent Academic Assistance',
    description: 'Get smart, context-aware academic help across all subjects with an AI tutor that adapts to your learning style.',
  },
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
      </svg>
    ),
    title: 'Performance Tracking Dashboard',
    description: 'Monitor your academic progress with detailed analytics, score trends, and actionable insights to improve results.',
  },
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
    title: 'Instant Doubt Resolution',
    description: 'Resolve doubts in seconds with AI-powered explanations, diagrams, and examples available 24/7 on any device.',
  },
  {
    icon: (
      <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    title: 'Collaborative Study Groups',
    description: 'Join AI-facilitated study groups, share notes, and learn together with peers working on the same curriculum.',
  },
]

export default function FeaturesSection() {
  return (
    <section
      className='relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8'
      aria-label='Features'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]' />

      {/* Subtle orbs */}
      <motion.div
        className='absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20 mb-4'>
            <span className='w-2 h-2 bg-teal-400 rounded-full animate-pulse' />
            Platform Features
          </span>
          <h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4'
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Everything You Need to Excel
          </h2>
          <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
            Powerful AI tools designed to make learning more effective, personalized, and enjoyable.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FEATURE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className='group relative rounded-2xl p-6 border border-white/10 backdrop-blur-md cursor-default
                         transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.25)]'
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover border highlight */}
              <div className='absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/40 transition-colors duration-300 pointer-events-none' />

              {/* Icon */}
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-violet-300'
                style={{ background: 'rgba(124,58,237,0.15)' }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className='text-white font-semibold text-lg mb-2 leading-snug'>
                {card.title}
              </h3>

              {/* Description */}
              <p className='text-slate-400 text-sm leading-relaxed'>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
