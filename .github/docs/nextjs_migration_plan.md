# 🚀 Portfolio — Next.js Migration Plan
> **From:** Vanilla HTML/CSS (index.html + about.html)
> **To:** Production-ready Next.js 14 App Router
> **Goal:** Best-in-class performance, SEO, animations, and maintainability

---

## 📋 Table of Contents

1. [Why Next.js?](#1-why-nextjs)
2. [Tech Stack Decision](#2-tech-stack-decision)
3. [Project Structure](#3-project-structure)
4. [Page Architecture](#4-page-architecture)
5. [Component Breakdown](#5-component-breakdown)
6. [Data Layer](#6-data-layer-content)
7. [Styling Strategy](#7-styling-strategy)
8. [Animation Strategy](#8-animation-strategy)
9. [Image Optimization](#9-image-optimization)
10. [SEO & Metadata](#10-seo--metadata)
11. [Performance Optimization](#11-performance-optimization)
12. [Accessibility](#12-accessibility)
13. [Deployment (Vercel)](#13-deployment-vercel)
14. [Phase-by-Phase Build Checklist](#14-phase-by-phase-build-checklist)
15. [Migration Mapping (HTML to Component)](#15-migration-mapping-html--component)
16. [Commands Reference](#16-commands-reference)

---

## 1. Why Next.js?

| Feature | Vanilla HTML | Next.js 14 |
|---|---|---|
| Performance | Manual | Automatic RSC, streaming, lazy loading |
| SEO | Static meta tags | Full generateMetadata, OG, JSON-LD |
| Images | img (unoptimized) | next/image — WebP, AVIF, lazy, blur |
| Routing | Manual href | File-based, type-safe, prefetching |
| Fonts | Google CDN (render blocking) | next/font — zero layout shift |
| Animations | CSS keyframes | Framer Motion with viewport triggers |
| Deployment | Manual upload | Vercel — CI/CD, Edge, Analytics |
| TypeScript | None | Full types, interfaces, safety |
| Scalability | Copy-paste HTML | Reusable components, typed data |

---

## 2. Tech Stack Decision

```
Framework     →  Next.js 14 (App Router)
Language      →  TypeScript
Styling       →  CSS Modules + CSS Custom Properties (design tokens)
Animations    →  Framer Motion
Fonts         →  next/font/google (Playfair Display + Inter + Space Mono)
Images        →  next/image
Icons         →  lucide-react
Linting       →  ESLint + Prettier
Deployment    →  Vercel (free tier)
Analytics     →  Vercel Analytics (free)
```

> **Why CSS Modules instead of Tailwind?**
> The existing HTML uses a well-defined token system (--accent, --bg-page, --font-display).
> CSS Modules preserves those exact tokens with zero migration effort and no class-name bloat.
> Add Tailwind later if you prefer utility-first workflow.

---

## 3. Project Structure

```
portfolio-nextjs/
│
├── app/
│   ├── layout.tsx                ← Root layout (navbar + footer + fonts + meta)
│   ├── page.tsx                  ← Home page (index.html migrated here)
│   ├── about/
│   │   └── page.tsx              ← About page (about.html migrated here)
│   ├── work/
│   │   └── [slug]/
│   │       └── page.tsx          ← Case study dynamic route
│   ├── globals.css               ← CSS tokens + reset (shared across all pages)
│   ├── not-found.tsx             ← 404 page
│   └── sitemap.ts                ← Auto-generated XML sitemap
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            ← Floating dark pill navbar (same design)
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   │
│   ├── home/
│   │   ├── HeroSection.tsx       ← Hero headline + status + CTA
│   │   ├── HeroSection.module.css
│   │   ├── PhotoCluster.tsx      ← Rotating polaroid frames
│   │   ├── PhotoCluster.module.css
│   │   ├── WorkSection.tsx       ← Projects grid
│   │   ├── WorkSection.module.css
│   │   ├── ContactSection.tsx    ← Giant heading + email + socials
│   │   └── ContactSection.module.css
│   │
│   ├── about/
│   │   ├── AboutSidebar.tsx      ← Fixed left sidebar
│   │   ├── AboutSidebar.module.css
│   │   ├── ContentColumn.tsx     ← Bio + awards + skills (left text col)
│   │   ├── ContentColumn.module.css
│   │   ├── ProjectEntry.tsx      ← Single project row (text + 2x2 images)
│   │   └── ProjectEntry.module.css
│   │
│   └── ui/
│       ├── Button.tsx            ← Reusable btn variants
│       ├── Button.module.css
│       ├── Badge.tsx             ← Status / category badges
│       ├── Tag.tsx               ← Project tag chips
│       ├── RevealWrapper.tsx     ← Framer Motion scroll reveal wrapper
│       └── SectionLabel.tsx      ← "SELECTED WORK" uppercase label
│
├── data/
│   ├── projects.ts               ← All project data (typed)
│   ├── experience.ts             ← Experience / awards / speaking
│   ├── skills.ts                 ← Skills list
│   └── siteConfig.ts             ← Name, email, socials, meta config
│
├── lib/
│   └── utils.ts                  ← cn(), slugify(), formatDate()
│
├── public/
│   ├── images/
│   │   ├── avatar.jpg            ← Profile photo
│   │   ├── projects/             ← Project screenshots (2x PNG from Figma)
│   │   └── og/
│   │       └── og-image.jpg      ← OG social card (1200x630)
│   └── favicon.ico
│
├── types/
│   └── index.ts                  ← Shared TypeScript interfaces
│
├── next.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── package.json
```

---

## 4. Page Architecture

### app/page.tsx — Home
```
RootLayout (Navbar + Footer)
  └── HomePage
        ├── HeroSection       → full viewport, serif headline, CTA buttons
        ├── PhotoCluster      → 3 rotating polaroid frames with mouse parallax
        ├── WorkSection       → project cards (image + tags + title + CTA)
        ├── AboutSnippet      → 2-col grid (bio + skill pills + experience)
        └── ContactSection    → giant serif heading + email + social icons
```

### app/about/page.tsx — About
```
RootLayout (Navbar floats above)
  └── AboutPage (flex layout)
        ├── AboutSidebar (sticky left 252px)
        │     ├── Avatar + Open-to-Work badge
        │     ├── Name (Playfair) / handle (Space Mono) / role
        │     ├── 3 years exp + company chips
        │     ├── Message + Save buttons
        │     ├── Profile / Portfolio tabs
        │     └── Social links (accent colored)
        └── MainContent (flex: 1)
              ├── ContentColumn (sticky left 380px — scrolls independently)
              │     ├── "Hi, I'm Jignesh" heading (Playfair italic accent)
              │     ├── Bio paragraphs
              │     ├── Links row (arrow + pipe separated)
              │     ├── Clients block
              │     ├── Awards & Recognition block
              │     ├── Speaking & Community block
              │     └── Skills & Tools block
              └── ProjectsColumn (flex: 1 — scrolls independently)
                    ├── ProjectEntry: CracklePDF
                    ├── ProjectEntry: MotionRAG Studio
                    ├── ProjectEntry: FinPay Banking App
                    ├── ProjectEntry: Design System v2.0
                    └── ProjectEntry: Freelance & Community
```

### app/work/[slug]/page.tsx — Case Study
```
RootLayout (Navbar)
  └── CaseStudyPage
        ├── CaseStudyHero      → title + year + tags + hero image
        ├── ProblemStatement   → challenge + context
        ├── ResearchSection    → user interviews, insights, card sorting
        ├── DesignProcess      → wireframes → iterations → decisions
        ├── SolutionSection    → final screens (image grid)
        ├── ResultsSection     → metrics (installs, rating, time-on-task)
        └── NextProjectCTA     → link to next case study
```

---

## 5. Component Breakdown

### Navbar.tsx
```tsx
// Features:
// - useScrollY (framer-motion) → glass blur effect on scroll
// - Active link detection via usePathname()
// - Mobile hamburger with AnimatePresence dropdown
// - next/link for prefetching instead of <a>

'use client'
import { usePathname } from 'next/navigation'
import { useScroll, motion } from 'framer-motion'
import Link from 'next/link'

export function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // pill glass effect driven by scrollY motion value
  // active class via pathname === href check
}
```

### RevealWrapper.tsx — Used on EVERY section
```tsx
'use client'
import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?:   number           // stagger delay in seconds (0, 0.08, 0.16...)
  y?:       number           // slide distance (default 28px)
}

export function Reveal({ children, delay = 0, y = 28 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],  // exact cubic-bezier from HTML files
      }}
    >
      {children}
    </motion.div>
  )
}
```

### ProjectCard.tsx
```tsx
interface Project {
  slug:        string
  title:       string
  description: string
  tags:        string[]
  year:        string
  image:       string       // /public/images/projects/...
  gradient:    string       // CSS gradient fallback
}

export function ProjectCard({ project }: { project: Project }) {
  // whileHover={{ y: -5 }} lift effect
  // next/image with fill + sizes for responsive loading
  // Link to /work/[slug] for case study
}
```

### PhotoCluster.tsx
```tsx
'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export function PhotoCluster() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Each frame has different transform multiplier for parallax depth
  // Respects prefers-reduced-motion via useReducedMotion()
  // ssr: false via dynamic import in page.tsx
}
```

---

## 6. Data Layer (Content)

### siteConfig.ts — Single source of truth
```ts
export const siteConfig = {
  name:       'Jignesh',
  handle:     '@jignesh',
  role:       'UI/UX Designer & Developer',
  location:   'India',
  email:      'hello@jignesh.design',
  openToWork: true,
  socials: {
    resume:   '#',
    linkedin: '#',
    twitter:  '#',
    dribbble: '#',
    behance:  '#',
    github:   '#',
  },
  seo: {
    title:       'Jignesh — UI/UX Designer',
    description: 'Turning product complexity into simple experiences.',
    url:         'https://jignesh.design',
    ogImage:     '/images/og/og-image.jpg',
  },
}
```

### projects.ts — Typed project data
```ts
export interface Project {
  slug:        string
  title:       string
  tagline:     string
  description: string[]      // array of paragraphs
  year:        string
  tags:        string[]
  images:      ProjectImage[]
  disciplines: string[]
  metrics?:    { label: string; value: string }[]
  featured:    boolean       // shown on home page
  gradient:    string        // CSS gradient fallback
}

export interface ProjectImage {
  src:     string
  alt:     string
  gradient?: string          // placeholder gradient if no image
}
```

### experience.ts — About page data
```ts
export const experience = [...]   // role, company, period
export const awards     = [...]   // text, link
export const speaking   = [...]   // event, description
export const skills     = [...]   // string[]
export const clients    = [...]   // string[]
export const companies  = [...]   // chip data for sidebar
```

---

## 7. Styling Strategy

### globals.css — Exact token copy from HTML files
```css
:root {
  /* Backgrounds — identical to index.html */
  --bg-page:        #EDE8E3;
  --bg-card:        #E2DAD2;
  --bg-card-hover:  #D8CFC6;
  --bg-dark:        #1A1A1A;
  --bg-dark-hover:  #2C2C2C;
  --bg-white:       #FFFFFF;

  /* Text */
  --text-primary:   #1A1A1A;
  --text-secondary: #555555;
  --text-muted:     #888888;
  --text-white:     #FFFFFF;
  --text-white-dim: rgba(255,255,255,0.72);

  /* Accent — Vishesh signature orange-red */
  --accent:         #E05C2A;
  --accent-hover:   #C84E22;
  --accent-glow:    rgba(224, 92, 42, 0.22);

  /* Borders */
  --border-light:   rgba(26,26,26,0.10);
  --border-medium:  rgba(26,26,26,0.18);

  /* Shadows */
  --shadow-xs:  0 2px 8px rgba(0,0,0,0.06);
  --shadow-sm:  0 4px 16px rgba(0,0,0,0.08);
  --shadow-md:  0 8px 32px rgba(0,0,0,0.11);
  --shadow-lg:  0 16px 48px rgba(0,0,0,0.15);
  --shadow-nav: 0 8px 32px rgba(0,0,0,0.28);

  /* Typography — set via next/font CSS variables */
  --font-display: var(--font-playfair);
  --font-body:    var(--font-inter);
  --font-mono:    var(--font-space-mono);

  /* Layout */
  --max-w:   980px;
  --gutter:  24px;
}
```

### Font Loading in layout.tsx
```tsx
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight:  ['700', '800'],
  style:   ['normal', 'italic'],
  variable: '--font-playfair',
  display:  'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display:  'swap',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight:  ['400', '700'],
  variable: '--font-space-mono',
  display:  'swap',
})

// Apply on <html className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}>
```

> **next/font vs Google CDN:** next/font serves fonts from your own domain, eliminates the render-blocking Google CDN request, and guarantees zero CLS. This alone can improve LCP by 200–400ms.

---

## 8. Animation Strategy (Framer Motion)

| Element | Animation | Method |
|---|---|---|
| Hero headline | Stagger words fade-up | motion.h1 with staggerChildren |
| Hero status dot | Pulse glow | animate + repeat |
| Photo cluster | Mouse parallax | useMotionValue + useTransform |
| Scroll reveal (all sections) | Fade + slide up | RevealWrapper viewport |
| Navbar on scroll | Glass blur transition | useScroll + motion style |
| Project cards | Hover lift | whileHover={{ y: -5 }} |
| Polaroid frames | Hover scale + rotate | whileHover per frame |
| Page transitions | Fade in | AnimatePresence in layout |
| Contact heading | Giant text reveal | viewport trigger |
| Mobile nav | Slide down | AnimatePresence + variants |
| Sticker emoji | Infinite sway | animate rotate loop |
| Skill pills (about) | Hover accent | CSS :hover (no JS needed) |

### Reduced Motion
```tsx
import { useReducedMotion } from 'framer-motion'

export function Reveal({ children, delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: reduce ? 0.01 : 0.65, delay }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 9. Image Optimization

### Rules
```tsx
import Image from 'next/image'

// Above-fold (avatar, hero): priority
<Image src="/images/avatar.jpg" alt="..." width={88} height={88} priority />

// Project cards: lazy + fill + sizes
<Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 980px"
  style={{ objectFit: 'cover' }}
  placeholder="blur"
  blurDataURL={project.blurDataURL}
/>
```

### next.config.ts
```ts
const nextConfig = {
  images: {
    formats:     ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256],
  },
}
```

### Image Workflow
1. Export screens from Figma at 2× PNG
2. Place in /public/images/projects/
3. Next.js converts to WebP/AVIF on first request
4. Cached forever with immutable headers

---

## 10. SEO & Metadata

### Root Layout (app/layout.tsx)
```tsx
export const metadata: Metadata = {
  title: {
    default:  'Jignesh — UI/UX Designer · Portfolio',
    template: '%s · Jignesh',
  },
  description: 'Turning product complexity into simple experiences.',
  openGraph: {
    type:    'website',
    locale:  'en_IN',
    url:     'https://jignesh.design',
    images:  [{ url: '/images/og/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots:  { index: true, follow: true },
}
```

### Per-Page Metadata
```tsx
// app/about/page.tsx
export const metadata = {
  title:       'About',    // → "About · Jignesh"
  description: '3+ years UI/UX. CracklePDF, SaaS, fintech.',
}

// app/work/[slug]/page.tsx — dynamic
export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)
  return { title: project.title, description: project.tagline }
}
```

### JSON-LD Schema
```tsx
const schema = {
  '@context': 'https://schema.org',
  '@type':    'Person',
  name:       'Jignesh',
  url:        'https://jignesh.design',
  jobTitle:   'UI/UX Designer & Developer',
  sameAs:     ['https://linkedin.com/in/jignesh', 'https://dribbble.com/jignesh'],
}
// Add to layout.tsx <head> via <script type="application/ld+json">
```

### Files Needed
```
app/sitemap.ts        ← auto XML sitemap (all pages + projects)
app/robots.ts         ← disallow nothing, point to sitemap
public/manifest.json  ← PWA manifest
public/favicon.ico
public/apple-touch-icon.png   (180x180)
public/images/og/og-image.jpg (1200x630)
```

---

## 11. Performance Optimization

### Core Web Vitals Targets

| Metric | Target | How |
|---|---|---|
| LCP | < 1.8s | priority image, next/font, SSG |
| INP | < 100ms | minimal client JS, no heavy libs |
| CLS | < 0.05 | next/font display=swap, img dimensions always set |
| TTFB | < 600ms | Vercel Edge, static generation |
| FCP | < 1.2s | SSR/SSG HTML, no blocking scripts |

### Rendering Strategy
```
app/page.tsx          →  Static (SSG) — no dynamic data
app/about/page.tsx    →  Static (SSG) — content from data files
app/work/[slug]/page  →  Static (SSG) — generateStaticParams()
```

```tsx
// Pre-render ALL case study pages at build time
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}
// Zero server cost — all pages are static HTML
```

### Dynamic Imports
```tsx
// PhotoCluster uses mouse events → client only, defer load
const PhotoCluster = dynamic(
  () => import('@/components/home/PhotoCluster'),
  { ssr: false, loading: () => <div style={{ height: 300 }} /> }
)
```

### Cache Headers (next.config.ts)
```ts
async headers() {
  return [
    {
      source: '/images/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/_next/static/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ]
}
```

### Bundle Rules
- Use lucide-react (tree-shakeable icons — NOT full icon pack)
- No jQuery, no lodash, no moment.js
- Import only what you use from framer-motion

---

## 12. Accessibility

- [ ] All images: descriptive alt text
- [ ] Color contrast >= 4.5:1 (cream #EDE8E3 + dark #1A1A1A = 13.5:1 passes)
- [ ] Skip-to-content link at top of layout
- [ ] All buttons keyboard focusable (:focus-visible orange ring)
- [ ] aria-label on icon-only buttons
- [ ] aria-current="page" on active nav links
- [ ] Semantic HTML: main, header, footer, article, section, aside, nav
- [ ] prefers-reduced-motion support in all Framer animations
- [ ] Tab order logical and intuitive
- [ ] Form labels (if contact form added)

---

## 13. Deployment (Vercel)

### Steps
```bash
# 1. Push to GitHub
git init && git add . && git commit -m "feat: Next.js portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio
git push -u origin main

# 2. vercel.com → Import Git Repository
# 3. Framework: Next.js (auto-detected)
# 4. Click Deploy — live in ~90 seconds
```

### Custom Domain
```
Vercel → Settings → Domains → Add "jignesh.design"
DNS: CNAME → cname.vercel-dns.com
SSL: Auto-provisioned (Let's Encrypt)
```

### Free Vercel Add-ons
```tsx
// app/layout.tsx
import { Analytics }    from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Page views + real user Core Web Vitals — free forever
```

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://jignesh.design
```

---

## 14. Phase-by-Phase Build Checklist

### Phase 1 — Scaffold & Foundation (2–3 hrs)
- [ ] `npx create-next-app@latest portfolio --typescript --eslint --app --import-alias="@/*" --no-tailwind`
- [ ] `npm install framer-motion lucide-react`
- [ ] `npm install -D prettier eslint-config-prettier`
- [ ] Copy CSS tokens from index.html → app/globals.css
- [ ] Set up next/font in app/layout.tsx (3 fonts)
- [ ] Create folder structure: components/, data/, types/, lib/
- [ ] Fill siteConfig.ts, types/index.ts

### Phase 2 — UI Components (3–4 hrs)
- [ ] Button.tsx + module.css
- [ ] Badge.tsx + Tag.tsx + SectionLabel.tsx
- [ ] RevealWrapper.tsx (Framer viewport)
- [ ] Navbar.tsx (floating pill + scroll glass + mobile toggle)
- [ ] Footer.tsx (dark, links, copyright)
- [ ] Wire Navbar + Footer into app/layout.tsx

### Phase 3 — Home Page (3–4 hrs)
- [ ] HeroSection.tsx (headline + status dot + CTA)
- [ ] PhotoCluster.tsx (3 polaroids + mouse parallax)
- [ ] WorkSection.tsx + ProjectCard.tsx
- [ ] ContactSection.tsx (giant heading + email + socials)
- [ ] Assemble app/page.tsx
- [ ] Framer animations on all sections
- [ ] next/image on all project images
- [ ] Dynamic import PhotoCluster

### Phase 4 — About Page (2–3 hrs)
- [ ] AboutSidebar.tsx (sticky, cream-toned)
- [ ] ContentColumn.tsx (bio + awards + skills)
- [ ] ProjectEntry.tsx (pe-header + pe-row 2-col)
- [ ] Populate data/projects.ts + data/experience.ts
- [ ] Assemble app/about/page.tsx
- [ ] Responsive layout (sidebar collapses on mobile)

### Phase 5 — Case Study Pages (4–6 hrs)
- [ ] Design CaseStudyPage template
- [ ] CaseStudyHero, MetricsRow, ImageGrid components
- [ ] generateStaticParams from projects.ts
- [ ] generateMetadata per project
- [ ] Add JSON-LD for CreativeWork schema

### Phase 6 — SEO & Meta (1–2 hrs)
- [ ] Root metadata in layout.tsx
- [ ] Per-page metadata (home, about, case studies)
- [ ] JSON-LD Person schema
- [ ] app/sitemap.ts
- [ ] app/robots.ts
- [ ] OG image (1200x630)
- [ ] manifest.json + favicon.ico + apple-touch-icon

### Phase 7 — Performance & Polish (2–3 hrs)
- [ ] Run `next build` — check for errors
- [ ] Lighthouse audit — target 95+ all metrics
- [ ] Verify all images use next/image
- [ ] Check priority on above-fold images
- [ ] Test prefers-reduced-motion
- [ ] Keyboard navigation test
- [ ] Mobile test: 360px, 414px, 768px, 1024px, 1440px
- [ ] Test all links (no broken hrefs)

### Phase 8 — Deploy (1 hr)
- [ ] Push to GitHub
- [ ] Import to Vercel
- [ ] Set custom domain
- [ ] Add Vercel Analytics + Speed Insights
- [ ] Submit sitemap to Google Search Console
- [ ] Test OG preview at opengraph.xyz
- [ ] Share on Dribbble / Behance / Twitter

---

## 15. Migration Mapping (HTML to Component)

| HTML Element | Next.js Component | Notes |
|---|---|---|
| header.navbar | Navbar.tsx | usePathname for active |
| .navbar__pill | Navbar.module.css | Same CSS, scoped |
| .hero | HeroSection.tsx | motion.h1 headline |
| .cluster-section | PhotoCluster.tsx | useMotionValue parallax |
| .work-section | WorkSection.tsx | maps projects.ts |
| .project-card | ProjectCard.tsx | next/image + next/link |
| .contact-section | ContactSection.tsx | motion headline |
| footer | Footer.tsx | — |
| about.html .sidebar | AboutSidebar.tsx | sticky |
| about.html .content-col | ContentColumn.tsx | bio + awards |
| about.html .project-entry | ProjectEntry.tsx | maps projects.ts |
| .btn-primary | Button variant="primary" | reusable |
| .btn-dark | Button variant="dark" | reusable |
| .badge-blue | Badge color="blue" | reusable |
| .tag | Tag component | reusable |
| .section-label | SectionLabel component | reusable |
| .reveal (CSS + IntersectionObserver) | RevealWrapper.tsx | Framer viewport |
| Navbar scroll JS | useScroll() Framer | cleaner |
| Mouse parallax JS | useMotionValue() | cleaner |

---

## 16. Commands Reference

```bash
# Create Next.js project
npx create-next-app@latest portfolio \
  --typescript \
  --eslint \
  --app \
  --import-alias="@/*" \
  --no-tailwind \
  --no-src-dir

# Install dependencies
npm install framer-motion lucide-react
npm install -D prettier eslint-config-prettier @types/node

# Dev server
npm run dev            # http://localhost:3000

# Production build
npm run build
npm run start

# Type check
npx tsc --noEmit

# Lint + format
npm run lint
npx prettier --write .

# Analyze bundle size
npm install -D @next/bundle-analyzer
ANALYZE=true npm run build

# Deploy (after Vercel CLI install)
npm i -g vercel
vercel --prod
```

---

## Expected Lighthouse Scores (Post-Build)

| Metric | Score |
|---|---|
| Performance | 95 – 100 |
| Accessibility | 95 – 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## Total Build Estimate

| Phase | Estimated Time |
|---|---|
| Scaffold + Foundation | 2–3 hrs |
| UI Components | 3–4 hrs |
| Home Page | 3–4 hrs |
| About Page | 2–3 hrs |
| Case Study Pages | 4–6 hrs |
| SEO + Meta | 1–2 hrs |
| Performance + Polish | 2–3 hrs |
| Deploy | 1 hr |
| **Total** | **~18–26 hrs** |

---

> **Ready to build?** Say `start building` and I will scaffold the Next.js project, copy all design tokens, and implement every component phase by phase — starting with the foundation.
