'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Services', href: '/services' },
  { label: 'Smart School', href: '/smart-school' },
  { label: 'Contact', href: '/contactus' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2.5'>
            <Image
              src='/images/logo/fude-logo.svg'
              alt='Fude Development'
              width={32}
              height={32}
              className='w-8 h-8'
            />
            <span className='text-lg font-bold text-gray-900'>
              Fude <span className='hidden sm:inline'>Developments</span>
              <span className='sm:hidden'>Dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors ' +
                  (pathname === link.href
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle menu'
          >
            {menuOpen ? (
              <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden border-t border-gray-100 py-3 pb-4'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ' +
                  (pathname === link.href
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
