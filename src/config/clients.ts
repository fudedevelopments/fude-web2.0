// ─── Our Clients ─────────────────────────────────────────────────────────
// Shown as a scrolling logo strip on the home page.
//
// To add a client:
//   1. Drop the logo file into /public/images/ourclients/ (png, svg, jpg, or webp)
//   2. Add an entry below with the matching name and path
//
// Logos look best as transparent PNG/SVG, roughly landscape, ~400x160px.

export interface Client {
  name: string
  logo: string
}

export const clients: Client[] = [
  { name: 'Tanzo', logo: '/images/ourclients/tanzo.svg' },
]

export default clients
