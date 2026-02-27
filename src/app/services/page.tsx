import Image from 'next/image'
import Link from 'next/link'

const services = [
  { title: 'Web Development', description: 'Modern, responsive websites built with React, Next.js, and TypeScript.', image: '/images/OurServices/WebDevelopment.png', fit: 'object-cover' },
  { title: 'Mobile Apps', description: 'Native and cross-platform mobile apps using React Native and Flutter.', image: '/images/OurServices/MobileApps.webp', fit: 'object-cover' },
  { title: 'AI Solutions', description: 'Custom AI and machine learning solutions tailored to your business.', image: '/images/OurServices/AI-Solution.jpg', fit: 'object-cover' },
  { title: 'Cloud Services', description: 'Scalable cloud infrastructure on AWS, GCP, and Azure.', image: '/images/OurServices/CloudServices.png', fit: 'object-cover' },
  { title: 'Backend Systems', description: 'Robust server-side architecture, APIs, and database solutions.', image: '/images/OurServices/BackendSystem.png', fit: 'object-contain' },
  { title: 'UI/UX Design', description: 'User-centered design that converts visitors and engages users.', image: '/images/OurServices/UI&Ux.png', fit: 'object-contain' },
]

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We understand your business needs and project requirements.' },
  { step: '02', title: 'Planning', description: 'We create a detailed roadmap with milestones and deliverables.' },
  { step: '03', title: 'Development', description: 'Our team builds your solution using best practices.' },
  { step: '04', title: 'Testing', description: 'Rigorous quality assurance ensures everything works perfectly.' },
  { step: '05', title: 'Launch', description: 'We deploy your project and provide ongoing support.' },
]

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'Flutter', 'React Native', 'PostgreSQL', 'MongoDB',
  'AWS', 'Docker', 'TensorFlow',
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Our Services
          </h1>
          <p className='text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed'>
            Comprehensive solutions tailored to accelerate your business growth with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service) => (
              <div key={service.title} className='bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200'>
                <div className='relative w-full h-44 bg-gray-50'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.fit}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{service.title}</h3>
                  <p className='text-sm text-gray-500 leading-relaxed'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Our Process
            </h2>
            <p className='text-gray-500 text-lg'>How we bring your ideas to life</p>
          </div>
          <div className='space-y-4'>
            {processSteps.map((item) => (
              <div key={item.step} className='flex gap-6 items-start bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200'>
                <span className='text-2xl font-bold text-blue-900 shrink-0 w-10'>{item.step}</span>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>{item.title}</h3>
                  <p className='text-sm text-gray-500'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Technology Stack
            </h2>
            <p className='text-gray-500 text-lg'>Tools and frameworks we work with</p>
          </div>
          <div className='flex flex-wrap gap-3 justify-center'>
            {technologies.map((tech) => (
              <span key={tech} className='px-5 py-2.5 bg-white text-gray-700 rounded-xl text-sm font-medium border border-gray-100 hover:border-blue-200 hover:text-blue-900 transition-colors shadow-sm'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-blue-900 rounded-3xl p-10 sm:p-14 text-center'>
            <h2 className='text-3xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Ready to Start Your Project?
            </h2>
            <p className='text-blue-200 text-lg mb-8 max-w-2xl mx-auto'>
              Get in touch to discuss your requirements and receive a free consultation.
            </p>
            <Link href='/contactus' className='inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors'>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
