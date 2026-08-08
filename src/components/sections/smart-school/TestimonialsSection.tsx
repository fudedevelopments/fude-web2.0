'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The AI tutor helped me understand calculus concepts I had been struggling with for months. My grades went from a C to an A in just one semester.',
    name: 'Priya Sharma',
    role: 'Grade 11 Student',
  },
  {
    quote: 'As a teacher, I love how the platform adapts to each student\'s pace. It saves me hours of prep time and gives me real insights into where students need help.',
    name: 'Mr. Ramesh Kumar',
    role: 'Mathematics Teacher',
  },
  {
    quote: 'My daughter\'s confidence in science has skyrocketed. The personalized quizzes and instant feedback make studying feel like a game rather than a chore.',
    name: 'Anita Patel',
    role: 'Parent of Grade 9 Student',
  },
  {
    quote: 'I used to dread exam season. Now I actually look forward to revision because the AI creates custom practice tests based on exactly what I need to work on.',
    name: 'Arjun Mehta',
    role: 'Grade 12 Student',
  },
]

const INTERVAL_MS = 4000

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const clamp = (n: number) =>
    Math.max(0, Math.min(n, TESTIMONIALS.length - 1))

  const goTo = (next: number) => {
    const clamped = clamp(next)
    setDirection(clamped >= index ? 1 : -1)
    setIndex(clamped)
  }

  const prev = () => {
    const next = index === 0 ? TESTIMONIALS.length - 1 : index - 1
    setDirection(-1)
    setIndex(next)
  }

  const next = () => {
    const nextIdx = index === TESTIMONIALS.length - 1 ? 0 : index + 1
    setDirection(1)
    setIndex(nextIdx)
  }

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return
    const id = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  }

  const testimonial = TESTIMONIALS[index]

  return (
    <section
      className='relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8'
      aria-label='Testimonials'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]' />
      <div
        className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <div className='relative z-10 max-w-3xl mx-auto text-center'>
        {/* Heading */}
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-4'
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Community Says
        </motion.h2>
        <motion.p
          className='text-slate-400 mb-12 text-lg'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Real stories from students, teachers, and parents.
        </motion.p>

        {/* Carousel card */}
        <div className='relative min-h-[220px] flex items-center justify-center'>
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className='w-full rounded-2xl p-8 border border-white/10'
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <svg
                className='w-8 h-8 text-violet-400 mx-auto mb-4 opacity-70'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
              </svg>
              <p className='text-slate-200 text-lg leading-relaxed mb-6 italic'>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className='text-white font-semibold'>{testimonial.name}</p>
                <p className='text-violet-300 text-sm mt-0.5'>{testimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        {TESTIMONIALS.length > 1 && (
          <nav
            data-testid='carousel-nav'
            className='mt-8 flex items-center justify-center gap-4'
            aria-label='Testimonial navigation'
          >
            {/* Prev arrow */}
            <button
              onClick={prev}
              className='w-9 h-9 rounded-full flex items-center justify-center border border-white/20 bg-white/5 text-slate-300 hover:bg-violet-500/20 hover:border-violet-400/40 transition-colors'
              aria-label='Previous testimonial'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>

            {/* Dots */}
            <div className='flex items-center gap-2'>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-6 h-2.5 bg-violet-400'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              className='w-9 h-9 rounded-full flex items-center justify-center border border-white/20 bg-white/5 text-slate-300 hover:bg-violet-500/20 hover:border-violet-400/40 transition-colors'
              aria-label='Next testimonial'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}
