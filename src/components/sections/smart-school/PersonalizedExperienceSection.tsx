'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect } from 'react'

export interface SubjectProgress {
  name: string
  percentage: number
  color: string
}

export const subjects: SubjectProgress[] = [
  { name: 'Mathematics', percentage: 82, color: '#7c3aed' },
  { name: 'Physics', percentage: 67, color: '#0d9488' },
  { name: 'Chemistry', percentage: 74, color: '#f59e0b' },
  { name: 'Biology', percentage: 91, color: '#10b981' },
]

const OVERALL_PROGRESS = 78

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

// Animated circular progress ring
function CircularProgress({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, motionVal, value])

  const radius = 54
  const circumference = 2 * Math.PI * radius

  return (
    <div ref={ref} className='relative flex items-center justify-center w-36 h-36' data-testid='progress-indicator'>
      <svg className='absolute inset-0 w-full h-full -rotate-90' viewBox='0 0 144 144'>
        {/* Track */}
        <circle cx='72' cy='72' r={radius} fill='none' stroke='rgba(255,255,255,0.08)' strokeWidth='10' />
        {/* Progress arc */}
        <motion.circle
          cx='72'
          cy='72'
          r={radius}
          fill='none'
          stroke='url(#progressGradient)'
          strokeWidth='10'
          strokeLinecap='round'
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: spring.get
              ? undefined
              : circumference * (1 - value / 100),
          }}
          strokeDashoffset={circumference * (1 - (inView ? value : 0) / 100)}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id='progressGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#7c3aed' />
            <stop offset='100%' stopColor='#0d9488' />
          </linearGradient>
        </defs>
      </svg>
      <div className='text-center z-10'>
        <motion.span
          className='text-3xl font-bold text-white block'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {value}%
        </motion.span>
        <span className='text-xs text-slate-400 mt-0.5 block'>Overall</span>
      </div>
    </div>
  )
}

// Animated subject progress bar
function SubjectBar({ subject, index }: { subject: SubjectProgress; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 })

  useEffect(() => {
    if (inView) motionVal.set(subject.percentage)
  }, [inView, motionVal, subject.percentage])

  return (
    <motion.div
      ref={ref}
      data-testid='subject-entry'
      className='space-y-1.5'
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 + 0.2 }}
    >
      <div className='flex justify-between items-center'>
        <span className='text-sm font-medium text-slate-300'>{subject.name}</span>
        <span className='text-sm font-semibold' style={{ color: subject.color }}>
          {subject.percentage}%
        </span>
      </div>
      <div className='h-2 rounded-full bg-white/8 overflow-hidden'>
        <motion.div
          className='h-full rounded-full'
          style={{ backgroundColor: subject.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: subject.percentage / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
          transformOrigin='left'
        />
      </div>
    </motion.div>
  )
}

export default function PersonalizedExperienceSection() {
  return (
    <section
      className='relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8'
      aria-label='Personalized Learning Experience'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]' />
      <motion.div
        className='absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.14) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-1/4 left-1/4 w-[320px] h-[320px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.div {...fadeUp(0)}>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20 mb-6'>
              <span className='w-2 h-2 bg-teal-400 rounded-full animate-pulse' />
              Adaptive Learning Engine
            </span>
          </motion.div>

          <motion.h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5'
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            {...fadeUp(0.1)}
          >
            Your Progress,<br />Perfectly Personalized
          </motion.h2>

          <motion.p
            className='text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto'
            {...fadeUp(0.2)}
          >
            Our AI continuously analyzes each student&apos;s performance to identify weak areas and
            automatically adjusts the curriculum — so every session targets exactly what needs improvement.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className='grid lg:grid-cols-2 gap-10 items-start'>

          {/* Left — Overall progress card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
          >
            <div
              className='rounded-2xl p-6 sm:p-8 border border-white/10'
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(13,148,136,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Card header */}
              <div className='flex items-center gap-3 mb-8'>
                <div
                  className='w-10 h-10 rounded-xl flex items-center justify-center'
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #0d9488)' }}
                >
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <div>
                  <p className='text-white font-semibold text-sm'>Learning Dashboard</p>
                  <p className='text-teal-300 text-xs'>Updated in real-time</p>
                </div>
              </div>

              {/* Circular progress + streak */}
              <div className='flex items-center justify-around mb-8'>
                <CircularProgress value={OVERALL_PROGRESS} />

                {/* Streak metric */}
                <div
                  data-testid='streak-metric'
                  className='flex flex-col items-center gap-2 px-5 py-4 rounded-xl border border-amber-500/20'
                  style={{ background: 'rgba(245,158,11,0.08)' }}
                >
                  <span className='text-3xl'>🔥</span>
                  <span className='text-2xl font-bold text-amber-300'>7</span>
                  <span className='text-xs text-slate-400 text-center leading-tight'>Day<br />Streak</span>
                  <span className='text-xs text-amber-400 font-medium mt-1'>42 sessions</span>
                </div>
              </div>

              {/* Subject breakdown */}
              <div className='space-y-4'>
                <p className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3'>
                  Subject Performance
                </p>
                {subjects.map((subject, i) => (
                  <SubjectBar key={subject.name} subject={subject} index={i} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Explanatory copy + feature highlights */}
          <div className='space-y-6'>
            {[
              {
                icon: '🎯',
                title: 'Targets Your Weak Spots',
                description:
                  'The AI pinpoints exactly which topics are holding you back and prioritizes them in your daily practice — no more wasted time on concepts you already know.',
                delay: 0.2,
              },
              {
                icon: '📈',
                title: 'Tracks Progress Over Time',
                description:
                  'Visual progress charts show improvement week over week, keeping students motivated and giving teachers clear insight into each learner\'s journey.',
                delay: 0.3,
              },
              {
                icon: '⚡',
                title: 'Adapts in Real Time',
                description:
                  'Every quiz answer, every session, every question asked feeds back into the model — so the platform gets smarter and more personalized the more you use it.',
                delay: 0.4,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: item.delay }}
              >
                <div
                  className='rounded-2xl p-5 border border-white/8 flex gap-4 items-start'
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <span className='text-2xl flex-shrink-0 mt-0.5'>{item.icon}</span>
                  <div>
                    <h3 className='text-white font-semibold mb-1.5'>{item.title}</h3>
                    <p className='text-slate-400 text-sm leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stat callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.5 }}
            >
              <div
                className='rounded-2xl p-5 border border-violet-500/20'
                style={{ background: 'rgba(124,58,237,0.08)' }}
              >
                <p className='text-violet-300 text-sm leading-relaxed'>
                  <span className='text-white font-bold text-lg'>+34%</span> average score improvement
                  after just 4 weeks of personalized AI-guided study sessions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
