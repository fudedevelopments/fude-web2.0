import ContactForm from '@/components/ui/ContactForm'
import siteConfig from '@/config/site'

export default function ContactUs() {
  return (
    <div>
      {/* Hero */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Contact {siteConfig.companyName}
          </h1>
          <p className='text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed'>
            Ready to transform your ideas into reality? Let&apos;s start a conversation about your next project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Form */}
            <div className='bg-white border border-gray-100 rounded-2xl p-8 shadow-sm'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get <span className='text-blue-900'>Started</span> Today
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className='space-y-6'>
              <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
                <h3 className='font-semibold text-gray-900 mb-4'>Let&apos;s Connect</h3>
                <p className='text-gray-500 mb-6 leading-relaxed'>
                  Have a project in mind? We&apos;d love to hear from you.
                </p>
                <div className='space-y-5'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0'>
                      <svg className='w-5 h-5 text-blue-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs text-gray-400 uppercase tracking-wider'>Email</p>
                      <a href={`mailto:${siteConfig.supportEmail}`} className='text-gray-900 hover:text-blue-900 transition-colors'>
                        {siteConfig.supportEmail}
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0'>
                      <svg className='w-5 h-5 text-blue-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs text-gray-400 uppercase tracking-wider'>Phone</p>
                      <p className='text-gray-900'>{siteConfig.phone}</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0'>
                      <svg className='w-5 h-5 text-blue-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs text-gray-400 uppercase tracking-wider'>Address</p>
                      <p className='text-gray-900'>{siteConfig.address.street}</p>
                      <p className='text-gray-500 text-sm'>{siteConfig.address.city} - {siteConfig.address.postalCode}, {siteConfig.address.state}</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className='mt-6 pt-6 border-t border-gray-100'>
                  <p className='text-xs text-gray-400 uppercase tracking-wider mb-3'>Follow Us</p>
                  <div className='flex gap-3'>
                    <a href={siteConfig.socialLinks.linkedin} target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors' aria-label='LinkedIn'>
                      <svg className='w-4.5 h-4.5 text-gray-500' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>
                    </a>
                    <a href={siteConfig.socialLinks.instagram} target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors' aria-label='Instagram'>
                      <svg className='w-4.5 h-4.5 text-gray-500' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg>
                    </a>
                    <a href={siteConfig.socialLinks.youtube} target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors' aria-label='YouTube'>
                      <svg className='w-4.5 h-4.5 text-gray-500' fill='currentColor' viewBox='0 0 24 24'><path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>
                    </a>
                    <a href={siteConfig.socialLinks.github} target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors' aria-label='GitHub'>
                      <svg className='w-4.5 h-4.5 text-gray-500' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className='bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center'>
                <h4 className='font-semibold text-gray-900 mb-2'>Quick Response</h4>
                <p className='text-sm text-gray-500'>We typically respond within 2-4 hours during business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Explore Our Projects
          </h2>
          <p className='text-gray-500 text-lg mb-8'>Check out our latest work on GitHub</p>
          <a
            href={siteConfig.socialLinks.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-8 py-4 hover:shadow-md transition-all duration-200'
          >
            <svg className='w-8 h-8 text-gray-900' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>
            <div className='text-left'>
              <p className='font-semibold text-gray-900'>View Our GitHub</p>
              <p className='text-sm text-gray-500'>Discover our open-source projects</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
