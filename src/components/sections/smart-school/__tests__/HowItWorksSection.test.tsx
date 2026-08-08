/**
 * Unit tests for HowItWorksSection
 * Requirements: 4.1, 4.4
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HowItWorksSection, { STEPS } from '../HowItWorksSection'

// Mock framer-motion — same pattern as HeroSection tests
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

describe('HowItWorksSection', () => {
  it('exports between 3 and 4 steps in the STEPS array', () => {
    expect(STEPS.length).toBeGreaterThanOrEqual(3)
    expect(STEPS.length).toBeLessThanOrEqual(4)
  })

  it('renders a step number badge for each step', () => {
    render(<HowItWorksSection />)
    STEPS.forEach((step) => {
      expect(screen.getByTestId(`step-number-${step.number}`)).toBeInTheDocument()
    })
  })

  it('renders the correct number of step titles', () => {
    render(<HowItWorksSection />)
    STEPS.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument()
    })
  })

  it('renders connector elements between steps', () => {
    render(<HowItWorksSection />)
    const connectors = screen.getAllByTestId('step-connector')
    // There should be one fewer connector than steps
    expect(connectors).toHaveLength(STEPS.length - 1)
  })

  it('renders the "How It Works" section heading', () => {
    render(<HowItWorksSection />)
    expect(screen.getByRole('heading', { level: 2, name: /how it works/i })).toBeInTheDocument()
  })
})
