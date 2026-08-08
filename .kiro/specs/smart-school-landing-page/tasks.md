# Implementation Plan: Smart School Landing Page

## Overview

Replace the existing smart-school ERP landing page with a premium, student-focused AI learning platform landing page. All new section components are written in TypeScript/React using Next.js 15, Tailwind CSS v4, and Framer Motion v12.

## Tasks

- [x] 1. Create platform config and remove old ERP imports
  - Create `src/config/smartSchool.ts` exporting `PLATFORM_NAME = "Vertex AI"`
  - Update `src/app/smart-school/page.tsx` to remove all old ERP component imports (`AiLearningSection`, `ParentsMobileSection`, `DashboardPreviewSection`, `DemoRequestForm`, `WhyChooseUsSection`, `ClosingCTASection`, `CoreFeaturesSection`)
  - Update page `<Metadata>` title and description to reference the student AI learning platform, not the school ERP
  - _Requirements: 1.1, 1.3, 11.1, 11.4_

- [x] 2. Implement HeroSection
  - [x] 2.1 Build `src/components/sections/smart-school/HeroSection.tsx`
    - Headline communicates core value without using `PLATFORM_NAME` directly
    - Two-sentence subheading describing primary benefit
    - Two CTA buttons labelled exactly "Get Started" and "Try Now"
    - Animated background (floating particles or gradient motion) using Framer Motion
    - Staggered fade-and-slide-up entrance for headline, subheading, and CTAs via `whileInView`
    - Two-column layout on ≥768 px, single column below
    - Animate only `opacity`, `y`, `x`, `scale` — never layout properties
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 9.1, 9.2, 9.4_

  - [x] 2.2 Write unit tests for HeroSection
    - Assert "Get Started" and "Try Now" buttons are rendered
    - Assert headline text does not contain the `PLATFORM_NAME` string
    - _Requirements: 2.1, 2.3_

- [x] 3. Implement FeaturesSection
  - [x] 3.1 Build `src/components/sections/smart-school/FeaturesSection.tsx`
    - Define static `FeatureCard[]` array (4–6 cards) covering: textbook Q&A, personalized test generation, intelligent academic assistance, performance tracking
    - Each card: icon, title (≤6 words), description (≤30 words)
    - Glassmorphism card styling on dark gradient background
    - Staggered `whileInView` fade-in with ≥100 ms delay between cards
    - Hover animation (scale, glow, or border highlight) via Framer Motion or CSS transition
    - Animate only `opacity`, `y`, `scale` properties
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 9.2, 9.4, 10.1, 10.2_

  - [x] 3.2 Write property test for feature card content constraints
    - **Property 2: Feature Card Content Constraints**
    - Assert every card title has ≤6 words, every description has ≤30 words, and array length is in [3, 6]
    - **Validates: Requirements 3.1**

  - [x] 3.3 Write unit tests for FeaturesSection
    - Assert all four required capability topics are present in rendered output
    - Assert glassmorphism classes (`backdrop-blur`) are present on card elements
    - _Requirements: 3.2, 3.5_

- [x] 4. Implement HowItWorksSection
  - [x] 4.1 Build `src/components/sections/smart-school/HowItWorksSection.tsx`
    - Define static `Step[]` array of 3–4 numbered steps
    - Horizontal timeline layout on ≥1024 px with visible line/arrow connectors between steps
    - Vertical stacked layout on <1024 px
    - `whileInView` slide or fade entrance per step
    - Animate only `opacity`, `x`, `y` properties
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 9.2, 9.4_

  - [x] 4.2 Write unit tests for HowItWorksSection
    - Assert 3–4 steps are rendered
    - Assert connector elements are present in the DOM
    - _Requirements: 4.1, 4.4_

- [x] 5. Implement PersonalizedExperienceSection
  - [x] 5.1 Build `src/components/sections/smart-school/PersonalizedExperienceSection.tsx`
    - Define static `SubjectProgress[]` array (≥3 subjects with percentage and color)
    - Mock progress UI: circular or bar progress indicator, subject performance breakdown, streak/activity metric
    - Explanatory copy describing adaptive learning
    - Animate progress indicators from 0 to target values using `useMotionValue` + `useSpring` triggered by `useInView`
    - Dark gradient background with glassmorphism card styling
    - Animate only `opacity`, `y`, `scale` and motion values for progress
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 9.2, 9.4, 10.1, 10.2_

  - [x] 5.2 Write unit tests for PersonalizedExperienceSection
    - Assert progress indicator, ≥3 subject entries, and streak metric are rendered
    - _Requirements: 5.1_

- [x] 6. Implement TestimonialsSection
  - [x] 6.1 Build `src/components/sections/smart-school/TestimonialsSection.tsx`
    - Define static `Testimonial[]` array (≥3 entries, each with non-empty quote, name, role)
    - Auto-scrolling carousel with smooth slide/fade transition via `AnimatePresence` + Framer Motion
    - Navigation controls (dots or arrows) for manual navigation
    - Carousel index clamped to `[0, testimonials.length - 1]`; hide controls if only one testimonial
    - Animate only `opacity`, `x` properties for slide transitions
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 9.2, 9.4_

  - [x] 6.2 Write property test for testimonial card completeness
    - **Property 3: Testimonial Card Completeness**
    - Assert every testimonial in the static array has non-empty quote, name, and role
    - **Validates: Requirements 6.1**

  - [x] 6.3 Write unit tests for TestimonialsSection
    - Assert navigation controls (dots or arrows) are rendered
    - Assert at least 3 testimonials are accessible
    - _Requirements: 6.1, 6.4_

- [x] 7. Implement CTASection
  - [x] 7.1 Build `src/components/sections/smart-school/CTASection.tsx`
    - Headline ≤10 words focused on conversion
    - Primary gradient button labelled "Get Started" and secondary button labelled "Learn More"
    - Hover effects (gradient shift, scale, or glow) via CSS transitions
    - Visually distinct gradient background differentiating it from adjacent sections
    - `whileInView` entrance animation using only `opacity`, `y`, `scale`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 9.2, 9.4_

  - [x] 7.2 Write unit tests for CTASection
    - Assert headline word count ≤10
    - Assert "Get Started" and "Learn More" buttons are rendered
    - _Requirements: 7.1, 7.2_

- [x] 8. Implement SmartSchoolFooter
  - [x] 8.1 Build `src/components/sections/smart-school/SmartSchoolFooter.tsx`
    - Import and display `PLATFORM_NAME` from `src/config/smartSchool.ts` as the footer brand label
    - Navigation links group and copyright notice
    - Minimal dark background consistent with page theme
    - Single-column layout on <640 px, multi-column on ≥640 px
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 8.2 Write property test for PLATFORM_NAME propagation
    - **Property 1: PLATFORM_NAME Propagation**
    - Generate arbitrary non-empty strings as `PLATFORM_NAME`, render the footer, assert brand label matches and no other hard-coded brand name appears
    - **Validates: Requirements 1.2, 8.1**

  - [x] 8.3 Write unit tests for SmartSchoolFooter
    - Assert navigation links and copyright notice are rendered
    - Assert `PLATFORM_NAME` value appears in the footer output
    - _Requirements: 8.1, 8.2_

- [x] 9. Wire all sections into page.tsx
  - [ ] 9.1 Update `src/app/smart-school/page.tsx` to import and render all seven new sections in order: `HeroSection`, `FeaturesSection`, `HowItWorksSection`, `PersonalizedExperienceSection`, `TestimonialsSection`, `CTASection`, `SmartSchoolFooter`
    - Confirm no old ERP component imports remain
    - Confirm updated metadata title/description reference student learning platform
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [x] 9.2 Write property test for all seven sections rendered in order
    - **Property 4: All Seven Sections Rendered in Order**
    - Render the page and assert the seven section root elements appear in correct DOM order
    - **Validates: Requirements 11.3**

  - [x] 9.3 Write integration smoke tests
    - Assert no old ERP component imports exist in `page.tsx`
    - Assert `PLATFORM_NAME` is importable from `src/config/smartSchool.ts`
    - Assert all seven section components import from `src/components/sections/smart-school/`
    - _Requirements: 11.1, 11.2, 1.1_

- [ ] 10. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- `PLATFORM_NAME` must be the single source of truth — never hard-code the brand name elsewhere
- All Framer Motion animations must use only `opacity`, `x`, `y`, `scale`, `rotate` to avoid CLS
- All section components must be `'use client'` due to Framer Motion usage
- `page.tsx` stays a server component for Next.js metadata support
