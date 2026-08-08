'use client'

import { PLATFORM_NAME } from '@/config/smartSchool'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function SmartSchoolFooter() {
  return (
    <footer
      className='w-full py-10 px-4 sm:px-6 lg:px-8'
      style={{ background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start'>
        {/* Brand */}
        <div>
          <span
            data-testid='footer-brand'
            className='text-xl font-bold text-white'
          >
            {PLATFORM_NAME}
          </span>
          <p className='mt-2 text-sm text-slate-400 max-w-xs'>
            AI-powered learning that adapts to every student.
          </p>
        </div>

        {/* Nav links */}
        <nav data-testid='footer-nav' aria-label='Footer navigation'>
          <ul className='flex flex-wrap gap-x-6 gap-y-2'>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='text-sm text-slate-400 hover:text-white transition-colors duration-150'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className='max-w-7xl mx-auto mt-8 pt-6 border-t border-white/8'>
        <p
          data-testid='footer-copyright'
          className='text-xs text-slate-500 text-center sm:text-left'
        >
          © 2025 {PLATFORM_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
