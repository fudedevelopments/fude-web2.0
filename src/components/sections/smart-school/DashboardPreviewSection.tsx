'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function DashboardPreviewSection() {
  return (
    <section className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <span className='inline-block text-sm font-semibold text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full mb-4'>
              Dashboard Preview
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>
              Powerful Insights.{' '}
              <span className='text-blue-900'>Smarter Decisions.</span>
            </h2>
            <p className='text-lg text-gray-500 max-w-2xl mx-auto'>
              Comprehensive analytics and intuitive dashboards that give administrators, teachers, and parents complete visibility.
            </p>
          </div>
        </ScrollReveal>

        <div className='grid lg:grid-cols-3 gap-6'>
          {/* Main Dashboard - Large */}
          <ScrollReveal delay={100} className='lg:col-span-2'>
            <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover-lift h-full'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Admin Dashboard</h3>
                  <p className='text-sm text-gray-400'>Real-time school overview</p>
                </div>
                <div className='flex gap-2'>
                  <span className='px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-lg font-medium'>Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6'>
                {[
                  { label: 'Total Students', value: '2,847', trend: '+12%', color: 'text-blue-600 bg-blue-50' },
                  { label: 'Staff Members', value: '186', trend: '+4%', color: 'text-green-600 bg-green-50' },
                  { label: 'Attendance Rate', value: '94.2%', trend: '+2.1%', color: 'text-amber-600 bg-amber-50' },
                  { label: 'Fee Collection', value: '₹12.4L', trend: '+18%', color: 'text-purple-600 bg-purple-50' },
                ].map((stat) => (
                  <div key={stat.label} className='p-3 rounded-xl bg-gray-50/70 border border-gray-100'>
                    <p className='text-xs text-gray-400 mb-1'>{stat.label}</p>
                    <p className='text-xl font-bold text-gray-900'>{stat.value}</p>
                    <span className={`inline-flex items-center text-xs font-medium mt-1 px-1.5 py-0.5 rounded ${stat.color}`}>
                      {stat.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* Performance Chart */}
              <div className='bg-gray-50/70 rounded-xl p-5 border border-gray-100'>
                <div className='flex items-center justify-between mb-4'>
                  <p className='text-sm font-medium text-gray-700'>Student Performance Trends</p>
                  <div className='flex gap-4 text-xs text-gray-400'>
                    <span className='flex items-center gap-1'><span className='w-2 h-2 bg-blue-500 rounded-full' /> Science</span>
                    <span className='flex items-center gap-1'><span className='w-2 h-2 bg-amber-500 rounded-full' /> Math</span>
                    <span className='flex items-center gap-1'><span className='w-2 h-2 bg-green-500 rounded-full' /> English</span>
                  </div>
                </div>
                <div className='relative h-36'>
                  {/* Grid lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className='absolute w-full border-t border-gray-200/50' style={{ top: `${i * 33.3}%` }} />
                  ))}
                  {/* Science bars */}
                  <div className='absolute bottom-0 left-0 right-0 flex items-end gap-[3%] px-[2%]'>
                    {[60, 75, 65, 85, 70, 90, 80, 88, 72, 92, 85, 95].map((h, i) => (
                      <div key={`science-${i}`} className='flex-1 flex gap-[2px]'>
                        <div className='flex-1 rounded-t bg-blue-400/70' style={{ height: `${(h / 100) * 144}px` }} />
                        <div className='flex-1 rounded-t bg-amber-400/70' style={{ height: `${((h - 10) / 100) * 144}px` }} />
                        <div className='flex-1 rounded-t bg-green-400/70' style={{ height: `${((h - 5) / 100) * 144}px` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex justify-between mt-2 text-xs text-gray-400'>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span key={m} className='flex-1 text-center'>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Stacked Cards */}
          <div className='flex flex-col gap-6'>
            {/* Attendance Card */}
            <ScrollReveal delay={200}>
              <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover-lift'>
                <h3 className='text-base font-semibold text-gray-900 mb-4'>Attendance Analytics</h3>
                <div className='space-y-3'>
                  {[
                    { label: 'Present', value: 94, color: 'bg-green-500' },
                    { label: 'Late', value: 3, color: 'bg-amber-500' },
                    { label: 'Absent', value: 3, color: 'bg-red-400' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-500'>{item.label}</span>
                        <span className='font-medium text-gray-900'>{item.value}%</span>
                      </div>
                      <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile Preview Card */}
            <ScrollReveal delay={300}>
              <div className='bg-gradient-to-br from-[#0f1b2d] to-[#1e3a5f] border border-blue-900/30 rounded-2xl p-6 shadow-sm hover-lift'>
                <h3 className='text-base font-semibold text-white mb-4'>Mobile App Preview</h3>
                <div className='bg-white/5 border border-white/10 rounded-xl p-4 space-y-3'>
                  {[
                    { icon: '📍', title: 'Bus #7 Approaching', sub: 'ETA: 3 mins', dot: 'bg-green-400' },
                    { icon: '📝', title: 'New Homework', sub: 'Mathematics - Ch.12', dot: 'bg-blue-400' },
                    { icon: '📊', title: 'Report Card Ready', sub: 'Q3 Results Available', dot: 'bg-amber-400' },
                  ].map((item) => (
                    <div key={item.title} className='flex items-center gap-3 bg-white/5 rounded-lg p-3'>
                      <span className='text-lg'>{item.icon}</span>
                      <div className='flex-1'>
                        <p className='text-sm text-white font-medium'>{item.title}</p>
                        <p className='text-xs text-blue-300/50'>{item.sub}</p>
                      </div>
                      <div className={`w-2 h-2 ${item.dot} rounded-full`} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
