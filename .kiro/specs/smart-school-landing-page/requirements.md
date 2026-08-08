# Requirements Document

## Introduction

A premium, modern landing page for an advanced AI-powered student learning platform. The page replaces the existing smart-school ERP content entirely and targets students (and their parents) rather than school administrators. The platform helps students answer questions from textbooks, generate personalized tests, receive intelligent academic assistance, and track performance over time. The page must feel like a next-generation SaaS product — futuristic, polished, and serious — with no brand name embedded in the UI (the platform name is stored in a single configurable variable).

The implementation targets:
- `src/app/smart-school/page.tsx` — page entry point
- `src/components/sections/smart-school/` — all section components

Tech stack: Next.js 15, React 19, Tailwind CSS v4, Framer Motion v12.

---

## Glossary

- **Platform**: The AI-powered student learning system being marketed on this page.
- **Platform_Name**: A single configurable string constant (currently `"Vertex AI"`) exported from a config file; used wherever the product name appears.
- **Landing_Page**: The full-page React component rendered at `/smart-school`.
- **Hero_Section**: The first visible section of the Landing_Page containing the headline, subheading, and primary CTAs.
- **Features_Section**: The section showcasing 3–6 key platform capabilities as cards.
- **How_It_Works_Section**: The step-by-step process section (3–4 steps).
- **Personalized_Experience_Section**: The section demonstrating adaptive learning with a mock progress UI.
- **Testimonials_Section**: The social-proof section with student/parent quotes.
- **CTA_Section**: The conversion-focused call-to-action section near the bottom.
- **Footer_Section**: The minimal footer with links.
- **Framer_Motion**: The animation library (`framer-motion`) already present in the project.
- **ScrollReveal**: The existing `src/components/ui/ScrollReveal.tsx` utility component.
- **Glassmorphism**: A UI style using frosted-glass backgrounds (`backdrop-blur`, semi-transparent fills, subtle borders).

---

## Requirements

### Requirement 1: Platform Name Configuration

**User Story:** As a developer, I want the platform name stored in one place, so that I can rebrand the product by changing a single value.

#### Acceptance Criteria

1. THE Landing_Page SHALL read the platform name exclusively from a single exported constant (e.g., `PLATFORM_NAME = "Vertex AI"`) defined in one configuration file.
2. WHEN the `PLATFORM_NAME` constant is changed, THE Landing_Page SHALL reflect the new name across all sections without any other code modifications.
3. THE Landing_Page SHALL NOT hard-code any brand name string outside of the single configuration constant.

---

### Requirement 2: Hero Section

**User Story:** As a prospective student, I want to immediately understand what the platform does and feel compelled to try it, so that I take action on the first screen.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a bold headline that communicates the platform's core value without using the Platform_Name directly in the headline text.
2. THE Hero_Section SHALL display a subheading of no more than two sentences describing the platform's primary benefit.
3. THE Hero_Section SHALL render two CTA buttons labelled exactly "Get Started" and "Try Now".
4. THE Hero_Section SHALL render an animated background using at least one of: floating particles, gradient motion, or a subtle 3D mesh effect implemented with Framer_Motion.
5. WHEN the page loads, THE Hero_Section SHALL animate its headline, subheading, and CTA buttons in with a staggered fade-and-slide-up sequence using Framer_Motion.
6. THE Hero_Section SHALL be fully responsive, stacking content vertically on viewports narrower than 768 px and using a two-column layout on viewports 768 px and wider.

---

### Requirement 3: Features Section

**User Story:** As a prospective student, I want to see the platform's key capabilities at a glance, so that I can quickly evaluate whether it meets my needs.

#### Acceptance Criteria

1. THE Features_Section SHALL display between 3 and 6 feature cards, each containing an icon, a short title (≤ 6 words), and a description (≤ 30 words).
2. THE Features_Section SHALL cover at minimum these four capabilities: textbook Q&A, personalized test generation, intelligent academic assistance, and performance tracking.
3. WHEN a feature card enters the viewport, THE Features_Section SHALL animate it in with a staggered fade-in using Framer_Motion, with each card delayed by at least 100 ms relative to the previous.
4. WHEN a user hovers over a feature card, THE Features_Section SHALL apply a visible hover animation (e.g., scale, glow, or border highlight) using CSS transitions or Framer_Motion.
5. THE Features_Section SHALL use Glassmorphism styling for the feature cards on a dark gradient background.

---

### Requirement 4: How It Works Section

**User Story:** As a prospective student, I want to understand the onboarding and usage flow in simple steps, so that I feel confident the platform is easy to use.

#### Acceptance Criteria

1. THE How_It_Works_Section SHALL display between 3 and 4 numbered steps describing the platform usage flow.
2. THE How_It_Works_Section SHALL present the steps in a horizontal timeline layout on desktop (≥ 1024 px) and a vertical stacked layout on mobile (< 1024 px).
3. WHEN each step enters the viewport, THE How_It_Works_Section SHALL animate it in with a slide or fade transition using Framer_Motion.
4. THE How_It_Works_Section SHALL visually connect consecutive steps with a line or arrow connector that is visible on desktop.

---

### Requirement 5: Personalized Experience Section

**User Story:** As a prospective student, I want to see how the platform adapts to my individual learning needs, so that I trust it will actually help me improve.

#### Acceptance Criteria

1. THE Personalized_Experience_Section SHALL include a mock progress UI containing at minimum: a circular or bar progress indicator, a subject performance breakdown (≥ 3 subjects), and a streak or activity metric.
2. THE Personalized_Experience_Section SHALL include explanatory copy describing how the platform adapts to each student's weak areas.
3. WHEN the mock UI enters the viewport, THE Personalized_Experience_Section SHALL animate the progress indicators from 0 to their displayed values using Framer_Motion.
4. THE Personalized_Experience_Section SHALL use a dark gradient background with Glassmorphism card styling consistent with the rest of the page.

---

### Requirement 6: Testimonials / Trust Section

**User Story:** As a prospective student or parent, I want to read authentic-feeling testimonials, so that I trust the platform before signing up.

#### Acceptance Criteria

1. THE Testimonials_Section SHALL display at minimum 3 testimonial cards, each containing a quote, a name, and a role (e.g., "Grade 11 Student").
2. THE Testimonials_Section SHALL implement a smooth auto-scrolling or manual carousel so that all testimonials are accessible without vertical scrolling.
3. WHEN the carousel advances, THE Testimonials_Section SHALL transition between cards with a smooth slide or fade animation using Framer_Motion.
4. THE Testimonials_Section SHALL display navigation controls (dots or arrows) that allow manual carousel navigation.

---

### Requirement 7: Call To Action Section

**User Story:** As a prospective student who has scrolled through the page, I want a final strong prompt to sign up, so that I convert before leaving.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a headline of no more than 10 words focused on conversion (e.g., "Start Learning Smarter Today").
2. THE CTA_Section SHALL render a primary gradient button labelled "Get Started" and a secondary button labelled "Learn More".
3. WHEN a user hovers over a CTA button, THE CTA_Section SHALL apply a visible hover effect (gradient shift, scale, or glow) using CSS transitions.
4. THE CTA_Section SHALL use a visually distinct gradient background that differentiates it from adjacent sections.

---

### Requirement 8: Footer Section

**User Story:** As a visitor, I want a clean footer with essential links, so that I can navigate to other parts of the site.

#### Acceptance Criteria

1. THE Footer_Section SHALL display the Platform_Name (from the configuration constant) as the footer brand label.
2. THE Footer_Section SHALL include at minimum: a navigation links group, and a copyright notice.
3. THE Footer_Section SHALL use a minimal dark background consistent with the overall page theme.
4. THE Footer_Section SHALL be fully responsive, collapsing link columns to a single column on viewports narrower than 640 px.

---

### Requirement 9: Animations and Motion

**User Story:** As a visitor, I want smooth, premium animations throughout the page, so that the platform feels high-quality and modern.

#### Acceptance Criteria

1. THE Landing_Page SHALL use Framer_Motion as the primary animation library for all entrance, hover, and transition animations.
2. THE Landing_Page SHALL implement smooth scroll-triggered entrance animations (fade, slide, or scale) for every major section using Framer_Motion's `whileInView` or `useInView`.
3. WHEN a user interacts with any button or card, THE Landing_Page SHALL respond with a micro-interaction (e.g., scale on hover/tap) within 150 ms.
4. THE Landing_Page SHALL NOT use animations that cause layout shift or reduce Cumulative Layout Shift (CLS) score below acceptable thresholds (i.e., animated elements SHALL use `transform` and `opacity` only, not `width`, `height`, or `margin`).

---

### Requirement 10: Visual Design System

**User Story:** As a visitor, I want a consistent, premium visual design, so that the platform feels trustworthy and professional.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a dark color palette with deep blue (`#0f172a`–`#1e3a5f` range), violet (`#4c1d95`–`#7c3aed` range), or teal (`#0d9488`–`#0f766e` range) as primary accent tones.
2. THE Landing_Page SHALL apply Glassmorphism styling (semi-transparent backgrounds, `backdrop-blur`, subtle white borders) to cards and overlay elements.
3. THE Landing_Page SHALL use smooth gradients for section backgrounds, buttons, and text highlights.
4. THE Landing_Page SHALL be fully responsive across mobile (320 px+), tablet (768 px+), and desktop (1280 px+) breakpoints.
5. THE Landing_Page SHALL NOT include any brand name, logo text, or placeholder name in the rendered UI outside of the Platform_Name configuration constant.

---

### Requirement 11: Page Structure and Routing

**User Story:** As a developer, I want the new landing page to cleanly replace the existing ERP content, so that the route `/smart-school` serves only the new student learning platform page.

#### Acceptance Criteria

1. THE Landing_Page SHALL be the sole export of `src/app/smart-school/page.tsx` and SHALL NOT import any of the previous ERP section components (e.g., `AiLearningSection`, `ParentsMobileSection`, `DashboardPreviewSection`, `DemoRequestForm`, `WhyChooseUsSection`, `ClosingCTASection`, `CoreFeaturesSection`).
2. THE Landing_Page SHALL compose all new section components from `src/components/sections/smart-school/`.
3. WHEN the `/smart-school` route is visited, THE Landing_Page SHALL render all seven sections (Hero, Features, How It Works, Personalized Experience, Testimonials, CTA, Footer) in order.
4. THE Landing_Page SHALL include updated `<Metadata>` with a title and description relevant to the student learning platform (not the school ERP).
