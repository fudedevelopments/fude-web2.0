import { ComponentType } from 'react'

// Cache utility for better performance and SEO
export const CACHE_CONSTANTS = {
  REVALIDATE_TIME: {
    STATIC_PAGE: 2592000, // 30 days for static pages
    DYNAMIC_PAGE: 604800, // 7 days for dynamic pages
    SITEMAP: 86400, // 1 day for sitemap
    IMAGES: 31536000, // 1 year for images
  },
  HEADERS: {
    STATIC_ASSETS: 'public, max-age=31536000, immutable',
    DYNAMIC_CONTENT: 'public, max-age=3600, stale-while-revalidate=86400',
    API_ROUTES: 'public, max-age=3600, stale-while-revalidate=86400',
  },
}

// Preload critical resources
export const preloadResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical images
    const criticalImages = [
      '/images/logo/fude-logo.svg',
      '/images/team/dhanush.jpg',
      '/images/team/dinesh.jpg',
      '/images/team/kishore.jpg',
      '/images/team/mathan.jpg',
      '/images/team/praveen.jpg',
    ]

    criticalImages.forEach((src) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(link)
  }
}

// Dynamic import with better caching
export const dynamicImportWithCache = (
  importFunction: () => Promise<{ default: ComponentType<unknown> }>,
  options: {
    ssr?: boolean
    loading?: () => React.ReactElement
  } = {}
) => {
  return {
    ...importFunction,
    ssr: options.ssr ?? false,
    loading: options.loading,
  }
}
