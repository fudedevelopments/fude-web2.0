/**
 * Unit tests for FeaturesSection
 * Requirements: 3.2, 3.5
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import FeaturesSection from '../FeaturesSection'

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

describe('FeaturesSection', () => {
  it('renders a card covering textbook Q&A', () => {
    render(<FeaturesSection />)
    const matches = screen.getAllByText(/textbook/i)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('renders a card covering personalized test generation', () => {
    render(<FeaturesSection />)
    expect(screen.getByText(/personalized test/i)).toBeInTheDocument()
  })

  it('renders a card covering intelligent academic assistance', () => {
    render(<FeaturesSection />)
    expect(screen.getByText(/intelligent academic/i)).toBeInTheDocument()
  })

  it('renders a card covering performance tracking', () => {
    render(<FeaturesSection />)
    expect(screen.getByText(/performance tracking/i)).toBeInTheDocument()
  })

  it('card elements have backdrop-blur glassmorphism class', () => {
    const { container } = render(<FeaturesSection />)
    const blurElements = container.querySelectorAll('[class*="backdrop-blur"]')
    expect(blurElements.length).toBeGreaterThan(0)
  })

  it('renders the section heading', () => {
    render(<FeaturesSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<FeaturesSection />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(6)
  })
})
