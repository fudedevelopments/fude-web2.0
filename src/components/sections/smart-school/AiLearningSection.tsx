'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const aiFeatures = [
  {
    title: 'Pre-Trained on Your Textbooks',
    description: 'Our AI model is deeply integrated with your school\'s specific curriculum, functioning as a 24/7 personal tutor for every subject.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/20',
  },
  {
    title: 'Instant Text Doubt Clarification',
    description: 'Whenever a student is confused, they can simply type their question and receive an immediate, accurate, and step-by-step textbook explanation.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    color: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/20',
  },
  {
    title: 'Personalized Study Plans',
    description: 'Every student gets a unique, dynamically adjusting daily study schedule that adapts to their learning speed and goals.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
      </svg>
    ),
    color: 'from-amber-500 to-amber-600',
    shadow: 'shadow-amber-500/20',
  },
  {
    title: 'Direct Curriculum Mapping',
    description: '100% synchronized with your physical textbooks and syllabus. It feels like having your actual book, but powered by AI.',
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-600',
    shadow: 'shadow-emerald-500/20',
  },
]

export default function AiLearningSection() {
  return (
    <section className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white'>
      {/* Decorative Gradients */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3' />

      <div className='relative max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 sm:mb-24'>
          <ScrollReveal>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text border border-blue-100 mb-6 uppercase tracking-wider relative overflow-hidden'>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 -z-10' />
              <span className='w-2 h-2 bg-purple-500 rounded-full animate-pulse' />
              Next-Gen Student Experience
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight'>
              A Personal AI Tutor for <br className='hidden sm:block' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-[length:200%_auto]'>
                Every Single Student
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className='text-lg text-gray-500 leading-relaxed font-medium'>
              Elevate your school&apos;s academics with our state-of-the-art AI Learning Engine.
              It seamlessly integrates with your exact syllabus to deliver a hyper-personalized
              learning journey that parents will love and students will excel with.
            </p>
          </ScrollReveal>
        </div>

        {/* AI Showcase Grid */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Side: Animated Visual */}
          <ScrollReveal direction='left' delay={300}>
            <div className='relative'>
              <div className='relative z-10 bg-white border border-gray-100 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl shadow-blue-900/10 mx-auto max-w-md text-left'>
                
                {/* Visual Flow Container */}
                <div className='flex flex-col space-y-6 relative'>
                  
                  {/* Step 1: Query Phase */}
                  <div className='bg-gray-50 rounded-2xl p-5 border border-gray-200 relative group hover:border-blue-200 transition-colors'>
                    <div className='absolute -top-3 -right-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/30'>
                      <span className='text-white text-lg'>✍️</span>
                    </div>
                    <h4 className='font-bold text-gray-900 mb-1 text-lg'>1. Ask Any Question</h4>
                    <p className='text-sm text-gray-500 font-medium'>Students easily type in any academic question or doubt they have.</p>
                  </div>

                  {/* Connecting Line / Arrow */}
                  <div className='flex justify-center -my-2 relative z-20'>
                    <div className='w-10 h-10 bg-white border border-purple-100 rounded-full flex items-center justify-center shadow-sm'>
                      <svg className='w-5 h-5 text-purple-500 animate-pulse' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M19 14l-7 7m0 0l-7-7m7 7V3' /></svg>
                    </div>
                  </div>

                  {/* Step 2: AI Magic Phase (Pre-trained Book) */}
                  <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden transform hover:scale-[1.02] transition-transform'>
                    <div className='absolute inset-0 bg-white/10 blur-xl animate-pulse delay-75' />
                    <div className='relative z-10'>
                      <h4 className='font-bold text-lg mb-1 flex items-center gap-2'>
                        <svg className='w-5 h-5 animate-spin' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' /></svg>
                        2. Syllabus-Matched AI
                      </h4>
                      <p className='text-sm text-blue-50 font-medium'>The engine instantly cross-references the school's exact curriculum.</p>
                    </div>
                  </div>

                  {/* Connecting Line / Arrow */}
                  <div className='flex justify-center -my-2 relative z-20'>
                    <div className='w-10 h-10 bg-white border border-green-100 rounded-full flex items-center justify-center shadow-sm'>
                      <svg className='w-5 h-5 text-green-500 animate-pulse delay-150' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M19 14l-7 7m0 0l-7-7m7 7V3' /></svg>
                    </div>
                  </div>

                  {/* Step 3: Output Phase */}
                  <div className='bg-green-50 text-green-900 rounded-2xl p-5 border border-green-200 relative group hover:border-green-400 transition-colors'>
                    <div className='absolute -top-3 -right-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce delay-300 text-white shadow-lg shadow-emerald-500/30'>
                      <span className='text-lg'>💡</span>
                    </div>
                    <h4 className='font-bold text-lg mb-1'>3. Clear Answers & Practice</h4>
                    <p className='text-sm text-green-700 font-medium'>Students get an immediate step-by-step explanation and targeted practice tests.</p>
                  </div>

                </div>
              </div>

              {/* Background glow for mockup */}
              <div className='absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse-glow' />
            </div>
          </ScrollReveal>

          {/* Right Side: Features List */}
          <div className='space-y-4 sm:space-y-6'>
            {aiFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} direction='right' delay={index * 150 + 200}>
                <div className='group relative bg-white border border-gray-100 rounded-2xl p-5 hover:border-transparent transition-all duration-300'>
                  {/* Hover background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  
                  <div className='flex items-start gap-4'>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 bg-gradient-to-br ${feature.color} shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors'>
                        {feature.title}
                      </h3>
                      <p className='text-sm text-gray-500 leading-relaxed font-medium'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </section>
  )
}
