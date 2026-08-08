/**
 * Property-Based Tests for SmartSchoolPage
 * Feature: smart-school-landing-page, Property 4: all seven sections rendered in order
 *
 * **Validates: Requirements 11.3**
 */
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import * as fc from 'fast-check'
import SmartSchoolPage from '@/app/smart-school/page'

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
            transformOrigin, style,
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

// Mock next/navigation if needed
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

const SECTION_TEST_IDS = [
  'section-hero',
  'section-features',
  'section-how-it-works',
  'section-personalized',
  'section-testimonials',
  'section-cta',
  'section-footer',
] as const

describe('SmartSchoolPage – Property 4: all seven sections rendered in order', () => {
  it('all seven sections are present and appear in correct DOM order', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<SmartSchoolPage />)

        // Collect all section wrapper elements in DOM order
        const sectionElements = SECTION_TEST_IDS.map((testId) => {
          const el = container.querySelector(`[data-testid="${testId}"]`)
          expect(el).not.toBeNull()
          return el as HTMLElement
        })

        // Assert they appear in correct DOM order by comparing their positions
        for (let i = 0; i < sectionElements.length - 1; i++) {
          const current = sectionElements[i]
          const next = sectionElements[i + 1]
          const position = current.compareDocumentPosition(next)
          // Node.DOCUMENT_POSITION_FOLLOWING = 4 means `next` comes after `current`
          expect(position & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
        }

        return true
      }),
      { numRuns: 100 }
    )
  })
})
