/**
 * Unit tests for CTASection
 * Requirements: 7.1, 7.2
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CTASection from '../CTASection'

// Mock framer-motion — same pattern as HeroSection tests
vi.mock('framer-motion', () => {
  const React = require('react')
  const motion = new Proxy(
    {},
    {
      get: (_target, tag: string) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.forwardRef(({ children, ...props }: any, ref: any) => {
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

describe('CTASection', () => {
  it('renders the "Get Started" button', () => {
    render(<CTASection />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the "Learn More" button', () => {
    render(<CTASection />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('headline word count is 10 or fewer', () => {
    render(<CTASection />)
    const headline = screen.getByTestId('cta-headline')
    const wordCount = headline.textContent?.trim().split(/\s+/).length ?? 0
    expect(wordCount).toBeLessThanOrEqual(10)
  })
})
