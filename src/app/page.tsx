import Link from 'next/link'

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
    },
    {
      title: 'Our Mission',
      description:
        'Empowering businesses with cutting-edge solutions, responsive designs, and scalable applications that drive growth.',
    },
    {
      title: 'Our Values',
      description:
        'Innovation, Quality, Integrity, and Customer Success are at the core of everything we do.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'AI-First Approach',
      description: 'We integrate artificial intelligence into every solution for smarter, more efficient results.',
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development methodology ensures quick turnaround without compromising quality.',
    },
    {
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes guarantee reliable, secure solutions.',
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with clients as partners, not just service providers.',
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
    <div>
      {/* Hero */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='inline-block text-sm font-medium text-blue-900 bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100'>
            Software Development Company
          </p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight'>
            Welcome to{' '}
            <span className='text-blue-900'>Fude</span>{' '}
            <span className='text-gray-900'>Developments</span>
          </h1>
          <p className='text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed'>
            Building the future with innovative technology. We transform ideas into powerful digital solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <Link
              href='/services'
              className='inline-flex items-center justify-center px-8 py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-sm'
            >
              Explore Services
            </Link>
            <Link
              href='/contactus'
              className='inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors'
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6'>
            {stats.map((stat) => (
              <div key={stat.label} className='bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm'>
                <div className='text-3xl font-bold text-blue-900 mb-1'>{stat.value}</div>
                <div className='text-sm text-gray-500'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
              About <span className='text-blue-900'>Fude Developments</span>
            </h2>
            <p className='max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed'>
              Founded with a vision to revolutionize the digital landscape, Fude Developments
              is a cutting-edge technology company specializing in AI-powered solutions,
              web development, and mobile applications.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {values.map((v) => (
              <div key={v.title} className='bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-200'>
                <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-5'>
                  <div className='w-3 h-3 bg-blue-900 rounded-full' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>{v.title}</h3>
                <p className='text-gray-500 leading-relaxed'>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
              Why Choose <span className='text-blue-900'>Us?</span>
            </h2>
            <p className='max-w-2xl mx-auto text-gray-500 text-lg'>
              We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {whyChooseUs.map((point) => (
              <div key={point.title} className='bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200'>
                <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4'>
                  <div className='w-2.5 h-2.5 bg-blue-900 rounded-full' />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{point.title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
              Our <span className='text-blue-900'>Culture</span>
            </h2>
            <p className='max-w-2xl mx-auto text-gray-500 text-lg'>
              We believe in creating an environment that fosters innovation, creativity, and growth.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {culture.map((item) => (
              <div key={item.title} className='bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{item.title}</h3>
                <p className='text-gray-500 leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-blue-900 rounded-3xl p-10 sm:p-14 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight'>
              Ready to Transform Your Business?
            </h2>
            <p className='max-w-2xl mx-auto text-blue-200 text-lg mb-8'>
              Let&apos;s discuss your project and explore how we can help you achieve
              your goals with cutting-edge technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-10'>
              <Link
                href='/contactus'
                className='inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors'
              >
                Start a Project
              </Link>
              <Link
                href='/services'
                className='inline-flex items-center justify-center px-8 py-3.5 border border-blue-400 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors'
              >
                View Services
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-blue-800'>
              <p className='text-sm text-blue-200'>+91 7904329569</p>
              <p className='text-sm text-blue-200'>fudedevelopments@gmail.com</p>
              <p className='text-sm text-blue-200'>Erode, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
