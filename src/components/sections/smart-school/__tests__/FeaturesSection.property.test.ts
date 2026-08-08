/**
 * Property-Based Tests for FeaturesSection
 * Feature: smart-school-landing-page, Property 2: feature card content constraints
 *
 * **Validates: Requirements 3.1**
 */
import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { FEATURE_CARDS } from '../FeaturesSection'

describe('FeaturesSection – Property 2: feature card content constraints', () => {
  it('every card title has ≤6 words', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: FEATURE_CARDS.length - 1 }), (index) => {
        const card = FEATURE_CARDS[index]
        const wordCount = card.title.trim().split(/\s+/).length
        return wordCount <= 6
      }),
      { numRuns: 100 }
    )
  })

  it('every card description has ≤30 words', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: FEATURE_CARDS.length - 1 }), (index) => {
        const card = FEATURE_CARDS[index]
        const wordCount = card.description.trim().split(/\s+/).length
        return wordCount <= 30
      }),
      { numRuns: 100 }
    )
  })

  it('feature cards array length is in [3, 6]', () => {
    fc.assert(
      fc.property(fc.constant(FEATURE_CARDS), (cards) => {
        return cards.length >= 3 && cards.length <= 6
      }),
      { numRuns: 100 }
    )
  })

  it('all cards have non-empty title and description', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: FEATURE_CARDS.length - 1 }), (index) => {
        const card = FEATURE_CARDS[index]
        return card.title.trim().length > 0 && card.description.trim().length > 0
      }),
      { numRuns: 100 }
    )
  })
})
