import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { homeFaqSchema } from '@/lib/structured-data'

export default function Home() {
  const stats = [
    { label: 'Years of Excellence', value: '5+' },
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Team Members', value: '10+' },
  ]

  const values = [
    {
      title: 'Our Vision',
      description:
        'To be the leading development company that transforms businesses through innovative technology solutions.',
      image: '/images/AboutFude/OurVission.png',
    },
    {
      title: 'Our Mission',
      description:
        'Empowering businesses with cutting-edge solutions, responsive designs, and scalable applications that drive growth.',
      image: '/images/AboutFude/ourMission.jpg',
    },
    {
      title: 'Our Values',
      description:
        'Innovation, Quality, Integrity, and Customer Success are at the core of everything we do.',
      image: '/images/AboutFude/Ourvalues.avif',
    },
  ]

  const whyChooseUs = [
    {
      title: 'AI-First Approach',
      description: 'We integrate artificial intelligence into every solution for smarter, more efficient results.',
      image: '/images/whyChooseUs/ai.image.webp',
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development methodology ensures quick turnaround without compromising quality.',
      image: '/images/whyChooseUs/Agile.webp',
    },
    {
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes guarantee reliable, secure solutions.',
      image: '/images/whyChooseUs/quality.jpg',
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with clients as partners, not just service providers.',
      image: '/images/whyChooseUs/partner..avif',
    },
  ]

  const culture = [
    { title: 'Work-Life Balance', description: 'We believe in maintaining a healthy balance between professional excellence and personal well-being.' },
    { title: 'Innovation First', description: 'Every team member is encouraged to think creatively and contribute innovative ideas.' },
    { title: 'Continuous Learning', description: "We invest in our team's growth through training and skill development programs." },
    { title: 'Collaborative Team', description: 'Open communication and teamwork are the foundation of our success.' },
    { title: 'Goal-Oriented', description: 'We set clear objectives and work systematically to achieve exceptional results.' },
    { title: 'Global Perspective', description: 'Our diverse team brings international experience to every project.' },
  ]

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
    <div>
      {/* Hero */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='animate-fade-in-up'>
            <p className='inline-block text-sm font-medium text-blue-900 bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100'>
              Software Development Company
            </p>
          </div>
          <div className='animate-fade-in-up delay-100'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight'>
              <span style={{ color: '#0a1628' }}>Welcome to</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Fude Developments</span>
            </h1>
          </div>
          <div className='animate-fade-in-up delay-200'>
            <p className='text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Building the future with innovative technology. We transform ideas into powerful digital solutions.
            </p>
          </div>
          <div className='animate-fade-in-up delay-300'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Link
                href='/services'
                className='inline-flex items-center justify-center px-8 py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
              >
                Explore Services
              </Link>
              <Link
                href='/contactus'
                className='inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5'
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6'>
            {stats.map((stat, index) => (
              <div key={stat.label} className={`animate-scale-in delay-${(index + 3) * 100} bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover-lift`}>
                <div className='text-3xl font-bold text-blue-900 mb-1'>{stat.value}</div>
                <div className='text-sm text-gray-500'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart School Promo Banner */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#2d1f0e]' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow' />
        <div className='absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl animate-pulse-glow delay-500' />

        <div className='relative max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <ScrollReveal direction='left'>
              <div>
                <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-6'>
                  <span className='w-2 h-2 bg-amber-400 rounded-full animate-pulse' />
                  New Product Launch
                </span>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  AI-Powered Smart School Management
                </h2>
                <p className='text-lg text-blue-100/90 mb-6 leading-relaxed'>
                  Revolutionize your school with intelligent automation, real-time bus tracking,
                  AI-driven learning paths, and comprehensive analytics dashboards.
                </p>
                <div className='flex flex-wrap gap-3 mb-8'>
                  {['AI Learning', 'Bus Tracking', 'Analytics', 'Automation'].map((tag) => (
                    <span key={tag} className='px-3 py-1.5 text-xs font-medium bg-white/5 text-blue-200 rounded-lg border border-white/10'>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href='/smart-school'
                  className='inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 font-semibold rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5'
                >
                  Explore Smart School
                  <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction='right' delay={200}>
              <div className='relative'>
                {/* Dashboard Preview Card */}
                <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl'>
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-white text-sm font-semibold'>School Dashboard</p>
                      <p className='text-blue-200 text-xs'>Live Preview</p>
                    </div>
                  </div>
                  {/* Mini Stats */}
                  <div className='grid grid-cols-3 gap-2 mb-4'>
                    {[
                      { label: 'Students', value: '2.8K' },
                      { label: 'Attendance', value: '94%' },
                      { label: 'Grade', value: 'A+' },
                    ].map((s) => (
                      <div key={s.label} className='bg-white/5 rounded-lg p-2.5 border border-white/5 text-center'>
                        <p className='text-white text-sm font-bold'>{s.value}</p>
                        <p className='text-blue-200 text-[10px]'>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Mini Chart */}
                  <div className='bg-white/5 rounded-lg p-3 border border-white/5'>
                    <div className='flex items-end gap-1.5 h-16'>
                      {[35, 55, 40, 70, 50, 80, 65].map((h, i) => (
                        <div key={i} className='flex-1 rounded-t bg-gradient-to-t from-blue-600/50 to-blue-400/30' style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating bus card */}
                <div className='absolute -bottom-4 -left-4 sm:-left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 shadow-xl animate-float'>
                  <div className='flex items-center gap-2'>
                    <div className='w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center'>
                      <span className='text-xs'>📍</span>
                    </div>
                    <div>
                      <p className='text-white text-xs font-medium'>Bus Live</p>
                      <p className='text-green-400 text-[10px]'>On route</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <ScrollReveal>
            <div className='text-center mb-14'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                About Fude Developments
              </h2>
              <p className='max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed'>
                Founded with a vision to revolutionize the digital landscape, Fude Developments
                is a cutting-edge technology company specializing in AI-powered solutions,
                web development, and mobile applications.
              </p>
            </div>
          </ScrollReveal>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {values.map((v, index) => (
              <ScrollReveal key={v.title} delay={index * 100}>
                <div className='bg-white border border-gray-100 rounded-2xl overflow-hidden hover-lift h-full'>
                  <div className='relative w-full h-44'>
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                  <div className='p-8 text-center'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>{v.title}</h3>
                    <p className='text-gray-500 leading-relaxed'>{v.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <ScrollReveal>
            <div className='text-center mb-14'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Why Choose Us?
              </h2>
              <p className='max-w-2xl mx-auto text-gray-500 text-lg'>
                We combine innovation, expertise, and dedication to deliver exceptional results.
              </p>
            </div>
          </ScrollReveal>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {whyChooseUs.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 100}>
                <div className='bg-white border border-gray-100 rounded-2xl overflow-hidden hover-lift h-full flex flex-col'>
                  <div className='relative w-full h-44'>
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    />
                  </div>
                  <div className='p-6 flex flex-col flex-1'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>{point.title}</h3>
                    <p className='text-gray-500 text-sm leading-relaxed'>{point.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <ScrollReveal>
            <div className='text-center mb-14'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Our Culture
              </h2>
              <p className='max-w-2xl mx-auto text-gray-500 text-lg'>
                We believe in creating an environment that fosters innovation, creativity, and growth.
              </p>
            </div>
          </ScrollReveal>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {culture.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className='bg-white border border-gray-100 rounded-2xl p-6 hover-lift h-full'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{item.title}</h3>
                  <p className='text-gray-500 leading-relaxed'>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <ScrollReveal direction='scale'>
            <div className='bg-blue-900 rounded-3xl p-10 sm:p-14 text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Ready to Transform Your Business?
              </h2>
              <p className='max-w-2xl mx-auto text-blue-200 text-lg mb-8'>
                Let&apos;s discuss your project and explore how we can help you achieve
                your goals with cutting-edge technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-10'>
                <Link
                  href='/contactus'
                  className='inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5'
                >
                  Start a Project
                </Link>
                <Link
                  href='/services'
                  className='inline-flex items-center justify-center px-8 py-3.5 border border-blue-400 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-300 hover:-translate-y-0.5'
                >
                  View Services
                </Link>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-blue-800'>
                <p className='text-sm text-blue-200'>+91 9994025037</p>
                <p className='text-sm text-blue-200'>fudedevelopments@gmail.com</p>
                <p className='text-sm text-blue-200'>Erode, India</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
    </>
  )
}
