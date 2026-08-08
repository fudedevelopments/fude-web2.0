/**
 * Unit tests for SmartSchoolFooter
 * Requirements: 8.1, 8.2
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SmartSchoolFooter from '../SmartSchoolFooter'
import { PLATFORM_NAME } from '@/config/smartSchool'

// SmartSchoolFooter does not use framer-motion, so no mock needed.
// If it ever does, add the same mock pattern used in HeroSection.test.tsx.

describe('SmartSchoolFooter', () => {
  it('renders the footer navigation links container', () => {
    render(<SmartSchoolFooter />)
    expect(screen.getByTestId('footer-nav')).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<SmartSchoolFooter />)
    expect(screen.getByTestId('footer-copyright')).toBeInTheDocument()
  })

  it('renders PLATFORM_NAME ("Vertex AI") in the brand label', () => {
    render(<SmartSchoolFooter />)
    const brand = screen.getByTestId('footer-brand')
    expect(brand).toHaveTextContent(PLATFORM_NAME)
  })

  it('renders PLATFORM_NAME in the copyright notice', () => {
    render(<SmartSchoolFooter />)
    const copyright = screen.getByTestId('footer-copyright')
    expect(copyright.textContent).toContain(PLATFORM_NAME)
  })

  it('renders all four navigation links', () => {
    render(<SmartSchoolFooter />)
    const nav = screen.getByTestId('footer-nav')
    const links = nav.querySelectorAll('a')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('navigation links include Home, Features, How It Works, and Contact', () => {
    render(<SmartSchoolFooter />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /how it works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })
})
