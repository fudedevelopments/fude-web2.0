# NEXT JS 16 PROJECT (STATIC EXPORT + SEO FIRST)

## CORE STACK (STRICT)

- Next.js 16 (App Router ONLY)
- TypeScript (strict mode enabled)
- TailwindCSS
- next-seo + Metadata API
- react-hook-form + zod
- lucide-react
- clsx + tailwind-merge
- Framer Motion (ONLY if required)
- ESLint + Prettier
- Static Export Mode (output: "export")

---

# PROJECT STRUCTURE (MANDATORY)

src/
  app/
    (marketing)/
      layout.tsx
      page.tsx
      loading.tsx
    (legal)/
      privacy-policy/page.tsx
      terms/page.tsx
    layout.tsx
    not-found.tsx
    error.tsx
    sitemap.ts
    robots.ts
    manifest.ts
    globals.css

  components/
    ui/
    layout/
    sections/
    forms/
    seo/

  lib/
    seo.ts
    metadata.ts
    utils.ts
    constants.ts

  config/
    site.ts        <-- ALL brand variables here
    theme.ts       <-- ALL color tokens here
    navigation.ts

  hooks/
  types/
  styles/
  assets/
    images/
    icons/

public/
  favicon.ico

tests/

.github/workflows/

.eslintrc.json
.prettierrc
next.config.ts
tsconfig.json
tailwind.config.ts
postcss.config.js

---

# CENTRALIZED BRAND CONFIG (MANDATORY)

ALL brand values MUST be defined inside:

src/config/site.ts

This file MUST contain:

- companyName
- legalName
- brandShortName
- websiteUrl
- companyEmail
- supportEmail
- phone
- address
- city
- state
- country
- postalCode
- socialLinks
- defaultSEO
- keywords
- logoPath
- faviconPath

RULES:

- Company name must be written ONLY ONCE in this file.
- Address must be written ONLY ONCE in this file.
- Email must be written ONLY ONCE in this file.
- No hardcoded company name anywhere else in the project.
- All components must import from config/site.ts.
- Structured data must reference variables from this file.
- Metadata titles must use variables from this file.

Example rule:
If companyName changes, it must update the entire site automatically.

---

# CENTRALIZED THEME SYSTEM (MANDATORY)

ALL colors MUST be defined in:

src/config/theme.ts

This file must define:

- primary
- primaryForeground
- secondary
- background
- foreground
- muted
- accent
- destructive
- border
- input
- ring

These must map to Tailwind CSS variables.

NO hardcoded hex colors in components.
NO inline colors.
NO random Tailwind color classes like bg-blue-500.

Tailwind config must use CSS variables:

:root {
  --color-primary: ...
}

All components must use semantic classes:
bg-primary
text-foreground
border-border

If brand color changes, entire project updates automatically.

---

# NEXT CONFIG (STATIC EXPORT REQUIRED)

next.config.ts must contain:

export default {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

---

# STATIC EXPORT RULES (CRITICAL)

This is a fully static HTML export site.

DO NOT USE:
- API routes
- Server Actions
- Middleware
- Edge runtime
- SSR
- getServerSideProps
- Database connections
- Runtime data fetching
- Dynamic routes requiring runtime params

ONLY USE:
- Static pages
- Predefined content
- Build-time generated content
- Static metadata
- Static JSON
- next/image in unoptimized mode

---

# SEO REQUIREMENTS (NON-NEGOTIABLE)

Every page MUST:

- Export metadata using Metadata API
- Have exactly ONE h1
- Use semantic HTML
- Include optimized title and description
- Include canonical URL (from config/site.ts)
- Include OpenGraph metadata
- Include Twitter metadata
- Use structured data referencing config/site.ts
- Use descriptive alt text
- Follow heading hierarchy
- Generate sitemap.ts
- Generate robots.ts
- Use trailing slashes

SEO defaults must be centralized in:
src/lib/seo.ts

Never hardcode metadata manually.

---

# ARCHITECTURE RULES

1. App Router only.
2. Prefer Server Components.
3. Use Client Components only when required.
4. No business logic inside UI components.
5. Separate concerns strictly.
6. Keep files under 300 lines.
7. Use absolute imports only (@/...)

---

# TYPESCRIPT RULES

- "strict": true
- No any
- Shared types inside src/types
- No ts-ignore
- No disabled ESLint rules

---

# PERFORMANCE RULES

- No unnecessary useEffect
- No heavy libraries
- Lazy load non-critical components
- Optimize images before adding
- Keep bundle small
- No console.log in production
- No unused imports
- No dead code
- No inline styles
- No hardcoded colors
- No hardcoded brand values

---

# DO (MANDATORY)

- Use centralized brand config
- Use centralized theme config
- Use semantic Tailwind tokens
- Keep SEO optimized
- Keep components reusable
- Keep architecture scalable
- Maintain Lighthouse 95+ target
- Keep branding consistent
- Ensure single source of truth

---

# DO NOT (STRICTLY PROHIBITED)

- NEVER create example files
- NEVER create demo components
- NEVER create sample usage files
- NEVER generate placeholder pages
- NEVER generate instruction.md after task completion
- NEVER generate documentation unless explicitly requested
- NEVER hardcode company name
- NEVER hardcode address
- NEVER hardcode email
- NEVER hardcode phone number
- NEVER hardcode colors
- NEVER use random Tailwind color classes
- NEVER mix business logic with UI
- NEVER install unnecessary libraries
- NEVER disable TypeScript strict mode
- NEVER fetch runtime data
- NEVER duplicate components
- NEVER create tutorial-level code

---

# COPILOT GENERATION BEHAVIOR

When generating code:

1. Always import brand values from config/site.ts
2. Always import theme tokens from config/theme.ts
3. Assume static export always.
4. Assume SEO-first architecture.
5. Generate production-ready clean code only.
6. Never generate example content.
7. Never generate usage examples.
8. Follow folder structure strictly.
9. Avoid unnecessary client components.
10. Assume enterprise-grade marketing website.

---

# PROJECT PHILOSOPHY

- Static first
- SEO first
- Performance obsessed
- Centralized configuration
- Single source of truth
- Clean architecture
- Enterprise structured
- No clutter
- No demo junk
- Production only
