import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import siteConfig from '@/config/site'

const PAGE_URL = `${siteConfig.websiteUrl}/aboutus/`

export const metadata: Metadata = {
  title: 'About Us | Fude Development – AI Software Company in Erode, Tamil Nadu',
  description:
    'Learn about Fude Development, a leading AI-powered software development company in Erode, Tamil Nadu. Meet our expert team of developers specialising in web development, mobile apps, machine learning, and intelligent automation.',
  keywords: [
    // Brand
    'Fude Development',
    'about Fude Development',
    'Fude Development team',
    'Fude Development Erode',
    'Fude Development company',
    'who is Fude Development',
    // Company type
    'AI software company Erode',
    'software development company Erode',
    'IT company Erode Tamil Nadu',
    'web development company Erode',
    'mobile app company Erode',
    'best software company in Erode',
    'best IT company in Erode',
    // Services mentioned on page
    'AI development company India',
    'machine learning company Tamil Nadu',
    'web application development Erode',
    'mobile app development Erode',
    'React Next.js developer Erode',
    'Flutter developer Erode',
    'React Native developer Erode',
    'cloud engineer Erode',
    'full stack developer Erode',
    'backend developer Erode',
    'frontend developer Erode',
    'intelligent automation company',
    'custom software solutions Erode',
    // Geo — Coimbatore
    'software company Coimbatore',
    'IT company Coimbatore',
    'AI development Coimbatore',
    'web development Coimbatore',
    'mobile app development Coimbatore',
    // Geo — Tiruppur
    'software company Tiruppur',
    'IT company Tiruppur',
    'web development Tiruppur',
    'mobile app development Tiruppur',
    // Geo — Tamil Nadu & India
    'software company Tamil Nadu',
    'IT company Tamil Nadu',
    'AI software company Tamil Nadu',
    'software development company India',
    'AI company India',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'About Us | Fude Development – AI Software Company in Erode, Tamil Nadu',
    description:
      'Meet the team behind Fude Development — an AI-powered software company in Erode, Tamil Nadu, building web apps, mobile apps, machine learning solutions, and intelligent automation.',
    url: PAGE_URL,
    siteName: 'Fude Development',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Fude Development | AI Software Company in Erode',
    description:
      'Passionate developers building AI-powered web, mobile, and automation solutions. Based in Erode, Tamil Nadu, serving clients across India.',
    site: '@fudedevelopment',
    creator: '@fudedevelopment',
  },
}

// ─── Structured Data ─────────────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.companyName,
  url: siteConfig.websiteUrl,
  logo: siteConfig.websiteUrl + siteConfig.logoPath,
  description:
    `${siteConfig.companyName} is a cutting-edge AI-powered software development company in ${siteConfig.address.city}, ${siteConfig.address.state}, specialising in web development, mobile applications, machine learning, and intelligent automation.`,
  foundingDate: siteConfig.foundingDate,
  email: siteConfig.companyEmail,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: [...siteConfig.areasServed],
  sameAs: [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.github,
  ],
  knowsAbout: [
    'AI Development',
    'Web Development',
    'Mobile App Development',
    'Machine Learning',
    'Intelligent Automation',
    'React',
    'Next.js',
    'Flutter',
    'React Native',
    'Cloud Engineering',
    'Full Stack Development',
  ],
  employee: [
    { '@type': 'Person', name: 'Praveen M', jobTitle: 'Frontend Developer' },
    { '@type': 'Person', name: 'Dhanush S', jobTitle: 'Backend Developer' },
    { '@type': 'Person', name: 'Boopathi R', jobTitle: 'Full Stack Developer' },
    { '@type': 'Person', name: 'Dinesh Kumar Vs', jobTitle: 'Cloud Engineer' },
    { '@type': 'Person', name: 'Mathan M', jobTitle: 'Next.js Developer' },
    { '@type': 'Person', name: 'Raja Sibi R', jobTitle: 'React Native Developer' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteConfig.websiteUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: PAGE_URL,
    },
  ],
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${siteConfig.companyName}`,
  url: PAGE_URL,
  description:
    `Learn about ${siteConfig.companyName} — our story, our AI-powered services, our expert team, and the values that drive everything we build.`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.websiteUrl,
  },
}

// ─────────────────────────────────────────────────────────────────────────────

const teamMembers = [
  { name: 'Praveen M', role: 'Frontend Developer', bio: 'Expert in React, Next.js, and Flutter with a passion for beautiful user interfaces.', image: '/images/team/Praveen.6.webp' },
  { name: 'Dhanush S', role: 'Backend Developer', bio: 'Proficient in building scalable APIs, database management, and server-side logic.', image: '/images/team/Dhanush.3.jpg' },
  { name: 'Boopathi R', role: 'Full stack developer', bio: 'Specialized in building enterprise-level applications using .NET technologies.', image: '/images/team/Boopathi.5 (1).webp' },
  { name: 'Dinesh Kumar Vs', role: 'Cloud Engineer', bio: 'Specialized in deploying and managing cloud infrastructure and services.', image: '/images/team/Dinesh.2.webp' },
  { name: 'Mathan M', role: 'Next.js Developer', bio: 'Specialized in modern web apps with React, TypeScript, and server-side rendering.', image: '/images/team/Madhan.1.jpg' },
  { name: 'Raja Sibi R', role: 'React Native Developer', bio: 'Expert in cross-platform mobile application development.', image: '/images/team/Sibi.4.webp' },
]

const values = [
  { title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology.', image: '/images/ourValues/inovationimage.jpg' },
  { title: 'Quality', description: 'Excellence in every project with attention to detail.', image: '/images/ourValues/quality.png' },
  { title: 'Collaboration', description: 'Working together for extraordinary results.', image: '/images/ourValues/colaburation.avif' },
  { title: 'Impact', description: 'Creating solutions that make a real difference.', image: '/images/ourValues/makeDifferent.jpg' },
]

export default function AboutUs() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    <div>
      {/* Hero */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            About Fude Development
          </h1>
          <p className='text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed'>
            Pioneering the future of software development with innovative solutions
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Who We Are</h2>
          <div className='bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm'>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
              <span className='font-semibold text-blue-900'>Fude Development</span> is a cutting-edge software development company specializing in AI solutions. We are passionate about creating innovative technologies that transform businesses and enhance user experiences.
            </p>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Our team of expert developers and specialists deliver world-class solutions in web development, mobile applications, machine learning, and intelligent automation systems.
            </p>
            <div className='flex flex-wrap gap-3 justify-center'>
              {['AI Development', 'Web Solutions', 'Mobile Apps', 'Automation'].map((skill) => (
                <span key={skill} className='px-5 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Meet Our Team
            </h2>
            <p className='text-lg text-gray-500 max-w-3xl mx-auto'>
              Our diverse team brings years of experience in software development.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member) => (
              <div key={member.name} className='group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                {/* Image area */}
                <div className='relative h-90 w-full overflow-hidden'>
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className='object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500'
                    unoptimized
                  />
                  {/* Role badge */}
                  <div className='absolute top-3 left-3'>
                    <span className='px-3 py-1 bg-blue-900/85 backdrop-blur-sm text-white text-xs font-medium rounded-full'>
                      {member.role}
                    </span>
                  </div>
                </div>
                {/* Text area */}
                <div className='flex flex-col flex-1 p-5 border-t border-gray-100'>
                  <h3 className='text-base font-bold text-gray-900 mb-2'>{member.name}</h3>
                  <p className='text-sm text-gray-500 leading-relaxed'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Values</h2>
            <p className='text-lg text-gray-500'>The principles that drive everything we do</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((v) => (
              <div key={v.title} className='bg-white border border-gray-100 rounded-2xl overflow-hidden text-center hover:shadow-md transition-all duration-200'>
                <div className='relative h-40 w-full'>
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className='object-cover'
                    unoptimized
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{v.title}</h3>
                  <p className='text-sm text-gray-500'>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Get In Touch
            </h2>
            <p className='text-lg text-gray-500'>
              Ready to bring your ideas to life? Let&apos;s create something amazing.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200'>
              <h3 className='font-semibold text-gray-900 mb-2'>Location</h3>
              <p className='text-sm text-gray-500'>Slatter Nagar, Perunduari<br />Erode - 638053, Tamil Nadu</p>
            </div>
            <div className='bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200'>
              <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>
              <a href='mailto:fudedevelopments@gmail.com' className='text-sm text-blue-900 hover:underline'>fudedevelopments@gmail.com</a>
            </div>
            <div className='bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200'>
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>
              <p className='text-sm text-gray-500'>+91 9994025037</p>
            </div>
          </div>
          <div className='text-center mt-10'>
            <Link href='/contactus' className='inline-flex items-center justify-center px-8 py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-sm'>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
