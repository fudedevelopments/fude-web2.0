/**
 * Property-Based Tests for TestimonialsSection
 * Feature: smart-school-landing-page, Property 3: testimonial card completeness
 *
 * **Validates: Requirements 6.1**
 */
import { describe, it } from 'vitest'
import * as fc from 'fast-check'
import { TESTIMONIALS } from '../TestimonialsSection'

describe('TestimonialsSection – Property 3: testimonial card completeness', () => {
  it('every testimonial has a non-empty quote, name, and role', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: TESTIMONIALS.length - 1 }), (index) => {
        const t = TESTIMONIALS[index]
        return (
          t.quote.trim().length > 0 &&
          t.name.trim().length > 0 &&
          t.role.trim().length > 0
        )
      }),
      { numRuns: 100 }
    )
  })
})
