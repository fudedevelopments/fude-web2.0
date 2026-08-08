/**
 * Unit tests for TestimonialsSection
 * Requirements: 6.1, 6.4
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TestimonialsSection, { TESTIMONIALS } from '../TestimonialsSection'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => {
  const React = require('react')
  const motion = new Proxy(
    {},
    {
      get: (_target: object, tag: string) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.forwardRef(({ children, ...props }: any, ref: any) => {
          const {
            initial, animate, whileInView, whileHover, whileTap,
            transition, variants, viewport, exit, custom,
            ...domProps
          } = props
          return React.createElement(tag, { ...domProps, ref }, children)
        }),
    }
  )
  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useMotionValue: (v: number) => ({ get: () => v, set: vi.fn() }),
    useSpring: (v: number) => ({ get: () => v }),
    useInView: () => true,
  }
})

describe('TestimonialsSection', () => {
  it('renders the carousel navigation controls', () => {
    render(<TestimonialsSection />)
    expect(screen.getByTestId('carousel-nav')).toBeInTheDocument()
  })

  it('exports at least 3 testimonials', () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3)
  })

  it('renders navigation dots equal to the number of testimonials', () => {
    render(<TestimonialsSection />)
    const nav = screen.getByTestId('carousel-nav')
    const dots = nav.querySelectorAll('button[aria-label^="Go to testimonial"]')
    expect(dots.length).toBe(TESTIMONIALS.length)
  })

  it('renders prev and next arrow buttons', () => {
    render(<TestimonialsSection />)
    expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
  })
})
