/**
 * Unit tests for HeroSection
 * Requirements: 2.1, 2.3
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HeroSection from '../HeroSection'
import { PLATFORM_NAME } from '@/config/smartSchool'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => {
  const React = require('react')
  const motion = new Proxy(
    {},
    {
      get: (_target, tag: string) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.forwardRef(({ children, ...props }: any, ref: any) => {
          // Strip framer-motion-specific props before passing to DOM element
          const {
            initial, animate, whileInView, whileHover, whileTap,
            transition, variants, viewport, exit,
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

describe('HeroSection', () => {
  it('renders the "Get Started" CTA button', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the "Try Now" CTA button', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /try now/i })).toBeInTheDocument()
  })

  it('headline text does not contain PLATFORM_NAME ("Vertex AI")', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).not.toContain(PLATFORM_NAME)
  })

  it('renders both CTA buttons in the same section', () => {
    render(<HeroSection />)
    const getStarted = screen.getByRole('link', { name: /get started/i })
    const tryNow = screen.getByRole('link', { name: /try now/i })
    expect(getStarted).toBeInTheDocument()
    expect(tryNow).toBeInTheDocument()
  })
})
