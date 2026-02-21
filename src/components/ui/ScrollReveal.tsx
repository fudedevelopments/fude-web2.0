'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const directionStyles: Record<string, string> = {
    up: 'translate-y-[30px]',
    left: '-translate-x-[30px]',
    right: 'translate-x-[30px]',
    scale: 'scale-[0.92]',
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 ${directionStyles[direction]} transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:translate-x-0 [&.is-visible]:scale-100 ${className}`}
    >
      {children}
    </div>
  )
}
