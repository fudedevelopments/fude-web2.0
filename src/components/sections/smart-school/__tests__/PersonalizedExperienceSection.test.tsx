/**
 * Unit tests for PersonalizedExperienceSection
 * Requirements: 5.1
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PersonalizedExperienceSection, { subjects } from '../PersonalizedExperienceSection'

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
            transition, variants, viewport, exit, transformOrigin,
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
    useSpring: (v: unknown) => ({ get: () => v }),
    useInView: () => true,
  }
})

describe('PersonalizedExperienceSection', () => {
  it('renders the main progress indicator', () => {
    render(<PersonalizedExperienceSection />)
    expect(screen.getByTestId('progress-indicator')).toBeInTheDocument()
  })

  it('renders at least 3 subject entries', () => {
    render(<PersonalizedExperienceSection />)
    const entries = screen.getAllByTestId('subject-entry')
    expect(entries.length).toBeGreaterThanOrEqual(3)
  })

  it('renders the streak metric', () => {
    render(<PersonalizedExperienceSection />)
    expect(screen.getByTestId('streak-metric')).toBeInTheDocument()
  })

  it('exports at least 3 subjects in the subjects array', () => {
    expect(subjects.length).toBeGreaterThanOrEqual(3)
  })

  it('each subject has a name, percentage (0-100), and color', () => {
    for (const subject of subjects) {
      expect(typeof subject.name).toBe('string')
      expect(subject.percentage).toBeGreaterThanOrEqual(0)
      expect(subject.percentage).toBeLessThanOrEqual(100)
      expect(typeof subject.color).toBe('string')
    }
  })

  it('renders a subject entry for each exported subject', () => {
    render(<PersonalizedExperienceSection />)
    const entries = screen.getAllByTestId('subject-entry')
    expect(entries.length).toBe(subjects.length)
  })
})
