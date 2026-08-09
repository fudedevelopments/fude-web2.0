import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { clients } from '@/config/clients'

// Repeat the list so the marquee always feels full, even with just one or two logos
const MIN_TRACK_ITEMS = 10

export default function OurClientsSection() {
  if (clients.length === 0) return null

  const repeatFactor = Math.max(1, Math.ceil(MIN_TRACK_ITEMS / clients.length))
  const baseSet = Array.from({ length: repeatFactor }, () => clients).flat()
  const track = [...baseSet, ...baseSet]
  const animationDuration = `${baseSet.length * 4.5}s`

  return (
    <section className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white'>
      <div className='max-w-6xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-12'>
            <p className='inline-block text-sm font-medium text-blue-900 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-100'>
              Our Clients
            </p>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight' style={{ background: 'linear-gradient(135deg, #0a1628 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Trusted by Businesses We&apos;ve Helped Grow
            </h2>
            <p className='max-w-2xl mx-auto text-gray-500 text-lg'>
              We&apos;re proud to partner with companies that trust us to build their digital future.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white to-transparent z-10' />
        <div className='pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white to-transparent z-10' />

        <div
          className='clients-marquee flex w-max items-start'
          style={{ animationDuration }}
        >
          {track.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className='flex flex-col items-center gap-3 mx-4 sm:mx-6 shrink-0 w-24 sm:w-28'
            >
              <div className='relative w-20 h-20 sm:w-24 sm:h-24 bg-white border border-gray-100 rounded-full shadow-sm hover-lift overflow-hidden flex items-center justify-center'>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className='object-contain p-4'
                  sizes='96px'
                />
              </div>
              <span className='text-xs sm:text-sm font-medium text-gray-500 text-center leading-snug'>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
