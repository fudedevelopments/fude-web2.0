/**
 * Property-Based Tests for SmartSchoolFooter
 * Feature: smart-school-landing-page, Property 1: PLATFORM_NAME propagation
 *
 * **Validates: Requirements 1.2, 8.1**
 */
import { describe, it, vi, afterEach } from 'vitest'
import * as fc from 'fast-check'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
  vi.resetModules()
})

// Helper: render footer with an injected PLATFORM_NAME and return the brand/copyright text content
async function renderFooterWithName(name: string) {
  vi.resetModules()
  vi.doMock('@/config/smartSchool', () => ({ PLATFORM_NAME: name }))
  const React = await import('react')
  const { render } = await import('@testing-library/react')
  const { default: SmartSchoolFooter } = await import('../SmartSchoolFooter')

  const container = document.createElement('div')
  document.body.appendChild(container)
  const { getByTestId, unmount } = render(React.createElement(SmartSchoolFooter), { container })

  const brandText = getByTestId('footer-brand').textContent ?? ''
  const copyrightText = getByTestId('footer-copyright').textContent ?? ''

  unmount()
  container.remove()

  return { brandText, copyrightText }
}

describe('SmartSchoolFooter – Property 1: PLATFORM_NAME propagation', () => {
  it('brand label always reflects the injected PLATFORM_NAME', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 80 }).filter((s) => s.trim().length > 0),
        async (name) => {
          const { brandText } = await renderFooterWithName(name)
          return brandText.trim() === name.trim()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('copyright notice always contains the injected PLATFORM_NAME', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 80 }).filter((s) => s.trim().length > 0),
        async (name) => {
          const { copyrightText } = await renderFooterWithName(name)
          return copyrightText.includes(name)
        }
      ),
      { numRuns: 100 }
    )
  })

  it('no hard-coded "Vertex AI" string appears when a different name is injected', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 80 }).filter(
          (s) => s.trim().length > 0 && s !== 'Vertex AI'
        ),
        async (name) => {
          const { brandText, copyrightText } = await renderFooterWithName(name)
          return !brandText.includes('Vertex AI') && !copyrightText.includes('Vertex AI')
        }
      ),
      { numRuns: 100 }
    )
  })
})
