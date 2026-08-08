/**
 * Integration smoke tests for SmartSchoolPage
 * Requirements: 11.1, 11.2, 1.1
 */
import { describe, it, expect } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'

const PAGE_PATH = path.resolve(__dirname, '../../../../../src/app/smart-school/page.tsx')

describe('SmartSchoolPage – integration smoke tests', () => {
  describe('No old ERP component imports in page.tsx', () => {
    const pageContent = fs.readFileSync(PAGE_PATH, 'utf-8')

    const OLD_ERP_IMPORTS = [
      'AiLearningSection',
      'ParentsMobileSection',
      'DashboardPreviewSection',
      'DemoRequestForm',
      'WhyChooseUsSection',
      'ClosingCTASection',
      'CoreFeaturesSection',
    ]

    for (const importName of OLD_ERP_IMPORTS) {
      it(`does not import "${importName}"`, () => {
        expect(pageContent).not.toContain(importName)
      })
    }
  })

  describe('PLATFORM_NAME is importable and non-empty', () => {
    it('PLATFORM_NAME is a non-empty string', async () => {
      const { PLATFORM_NAME } = await import('@/config/smartSchool')
      expect(typeof PLATFORM_NAME).toBe('string')
      expect(PLATFORM_NAME.trim().length).toBeGreaterThan(0)
    })
  })

  describe('All seven section components are importable', () => {
    const SECTION_MODULES = [
      '@/components/sections/smart-school/HeroSection',
      '@/components/sections/smart-school/FeaturesSection',
      '@/components/sections/smart-school/HowItWorksSection',
      '@/components/sections/smart-school/PersonalizedExperienceSection',
      '@/components/sections/smart-school/TestimonialsSection',
      '@/components/sections/smart-school/CTASection',
      '@/components/sections/smart-school/SmartSchoolFooter',
    ]

    for (const modulePath of SECTION_MODULES) {
      const componentName = modulePath.split('/').pop()!
      it(`${componentName} is importable and has a default export`, async () => {
        const mod = await import(modulePath)
        expect(mod.default).toBeDefined()
        expect(typeof mod.default).toBe('function')
      })
    }
  })
})
