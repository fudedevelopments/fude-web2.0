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
  { name: 'Ammu Bus', logo: '/images/ourclients/ammu-bus.png' },
  { name: 'Karunya School', logo: '/images/ourclients/karunya-school.png' },
  { name: 'Oorupro', logo: '/images/ourclients/oorupro.png' },
  { name: 'Rigro', logo: '/images/ourclients/rigro.jpg' },
  { name: 'SK Enterprises', logo: '/images/ourclients/sk-enterprises.png' },
  { name: 'Sri Lakshmi Wire Netting', logo: '/images/ourclients/sri-lakshmi-wire-netting.jpg' },
  { name: 'Tanzo', logo: '/images/ourclients/tanzo.png' },
  { name: 'Traxen', logo: '/images/ourclients/traxen.png' },
]

export default clients
