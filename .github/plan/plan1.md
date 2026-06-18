# Portfolio Rebuild — Next.js 15 + Tailwind v4 Build Plan

> **Agent:** Codex (autonomous coding agent)
> **Reference files in this project folder:** `index.html`, `about.html` — these are the APPROVED visual reference. Match their look, spacing, and motion exactly unless this document says otherwise.
> **Source data:** Jignesh Sonewane's real resume (content embedded below in Section 4 — do not invent additional history, companies, or metrics not listed here)
> **Mission:** Rebuild the two-page HTML prototype as a production Next.js 15 App Router site, with Tailwind v4, real content, working case-study pages, and motion that matches 2026 portfolio standards (subtle, purposeful, fast — not decorative).

---

## 0. Read This First — Agent Operating Rules

1. **Treat `index.html` and `about.html` as the design spec, not just inspiration.** Every color, spacing value, font, border-radius, and shadow in those files is a deliberate token. Extract them into the Tailwind config and CSS variables in Section 2 — do not redesign from scratch.
2. **Do not invent fake biography content.** The uploaded `about.html` contains placeholder fabrications (fake clients like Adobe/Flipkart, fake awards, fake job history at "DesignStudio Agency"). **Discard all of that.** Section 4 of this document is the only approved content source for bio, education, experience, skills, and projects. If a section of the old HTML has no real equivalent (e.g., "Awards & Recognition", "Speaking & Community", multi-year corporate experience), **omit that section** rather than filling it with placeholders.
3. **Build in the phase order given in Section 9.** Each phase ends in a working, visually-checked state. Don't jump ahead.
4. **Every section gets scroll-reveal motion** matching the existing `.reveal` pattern (opacity + translateY, cubic-bezier `[0.16, 1, 0.3, 1]`, staggered children) — reimplemented with Framer Motion. No motion should exceed 700ms or distract from content (see Section 7 motion philosophy).
5. **This is a portfolio for a Cybersecurity-focused CS student / full-stack developer, not a UI/UX designer.** The old HTML's copy ("UI/UX Designer", "Product Designer", Figma/Dribbble-heavy framing) is the WRONG persona — it was a placeholder built from a generic design-portfolio reference (Vishesh Patel, a product designer). Keep the visual system; **change the voice and content** to reflect a developer with cybersecurity, full-stack (MERN/Next.js), and digital forensics experience. This is the single most important content correction in this rebuild.
6. **Ask before guessing** on anything not covered here: profile photo, real social URLs (LinkedIn/GitHub are known — see Section 4 — but Twitter/Dribbble/Behance should be removed since they don't apply to this persona), deployment domain name, and whether project case studies need real screenshots or can ship with styled placeholder visuals at launch.

---

## 1. Tech Stack

```
Framework        Next.js 15 (App Router, Server Components by default)
Language         TypeScript (strict mode)
Styling          Tailwind CSS v4 (CSS-first config via @theme) + CSS custom properties for design tokens
Animation        Framer Motion (motion/react package — the v12+ import path)
Icons            lucide-react
Fonts            next/font/google — Playfair Display, Inter, Space Mono (same trio as the HTML reference)
Deployment       Vercel
Analytics        Vercel Analytics + Speed Insights (free tier)
Linting          ESLint (next/core-web-vitals config) + Prettier
Package manager  npm
```

**Why Tailwind v4 over CSS Modules:** Jignesh's other Crackle projects (Chrome extension, Android app, marketing site) already standardize on Next.js 15 + Tailwind v4 + Framer Motion. Matching that stack here means shared conventions, shared mental model, and the ability to copy utility patterns between projects. Tailwind v4's `@theme` directive lets us define the exact same design tokens as CSS variables, so nothing about the visual system is lost versus the CSS-Modules approach — we get token fidelity AND utility-class speed.

**Why Framer Motion's `motion/react` import:** Framer Motion renamed its main React package entry to `motion/react` in v11+. Use:
```ts
import { motion, useInView, useScroll, useMotionValue, useTransform, AnimatePresence, useReducedMotion } from 'motion/react'
```
Codex: verify against the installed package version's docs at scaffold time, since this surface has changed across major versions — don't assume.

---

## 2. Design Tokens — Extracted from `index.html` / `about.html`

These are the **exact** values already in the reference HTML. Reproduce them faithfully in `app/globals.css` using Tailwind v4's `@theme` block.

### 2.1 Color tokens

```css
@theme {
  /* Backgrounds */
  --color-bg-page: #EDE8E3;
  --color-bg-card: #E2DAD2;
  --color-bg-card-hover: #D8CFC6;
  --color-bg-dark: #1A1A1A;
  --color-bg-dark-hover: #2C2C2C;
  --color-bg-white: #FFFFFF;

  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #555555;
  --color-text-muted: #888888;
  --color-text-white: #FFFFFF;
  --color-text-white-dim: rgba(255,255,255,0.72);

  /* Accent — keep the warm orange-red signature */
  --color-accent: #E05C2A;
  --color-accent-hover: #C84E22;
  --color-accent-glow: rgba(224, 92, 42, 0.22);

  /* Badges */
  --color-badge-blue: #1A7FE8;
  --color-badge-blue-bg: rgba(26, 127, 232, 0.12);
  --color-badge-grey-bg: #EEEBE7;
  --color-badge-grey-txt: #555555;

  /* Borders */
  --color-border-light: rgba(26,26,26,0.10);
  --color-border-medium: rgba(26,26,26,0.18);

  /* Shadows (define as custom properties; Tailwind v4 shadow utilities can reference these via arbitrary values) */
  --shadow-xs: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-sm: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-md: 0 8px 32px rgba(0,0,0,0.11);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.15);
  --shadow-photo: 0 14px 44px rgba(0,0,0,0.18);
  --shadow-nav: 0 8px 32px rgba(0,0,0,0.28);

  /* Fonts */
  --font-display: var(--font-playfair), Georgia, serif;
  --font-body: var(--font-inter), -apple-system, sans-serif;
  --font-mono: var(--font-space-mono), 'Courier New', monospace;

  /* Layout */
  --max-w-content: 980px;
  --gutter: 24px;
}
```

> **Note on the accent color:** The brief says "match today's standards" and "personality-forward." The orange-red (#E05C2A) is already a strong, distinctive single-accent identity — 2026 trend research confirms single-accent-color branding (one hue used consistently across the whole site) is exactly the right move; do not add a second competing accent. If Jignesh wants a CracklePDF-aligned palette instead (he has used `#F54E00` / gold `#F7A501` in that project), that's a one-line token swap — flag it as an option but default to the existing `#E05C2A` since it's already validated in the approved HTML.

### 2.2 Spacing scale
Use Tailwind's default spacing scale (4px base) — it already maps cleanly onto the HTML's `--space-*` tokens (8/12/16/20/24/32/40/48/64/80/96/128px = Tailwind's `2/3/4/5/6/8/10/12/16/20/24/32`). No custom spacing scale needed.

### 2.3 Typography scale

| Role | Font | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Hero headline | Playfair Display | 800 | `clamp(52px, 8vw, 92px)` | Italic accent word in `--color-accent` |
| Section heading | Playfair Display | 700 | `clamp(32px, 4vw, 48px)` | |
| Nav brand | Space Mono | 400 | 13px | lowercase, e.g. `jignesh` |
| Body / paragraphs | Inter | 400 | 15px | line-height 1.6 |
| Section label (eyebrow) | Inter | 700 | 11px | uppercase, letter-spacing 0.12em, accent color |
| Buttons | Inter | 600 | 13–14px | |

### 2.4 Border radius & shape language
- Pills/buttons/badges: `rounded-full` (999px)
- Cards: `rounded-[20px]`
- Photo frames: `rounded-[10px]` with 5px white border (polaroid effect)

---

## 3. Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx                  → Root layout: fonts, metadata, Navbar, Footer
│   ├── page.tsx                    → Home (/) — hero, snapshot strip, work, about-snippet, contact
│   ├── about/
│   │   └── page.tsx                → Full About page (sidebar + bio + experience + projects list)
│   ├── work/
│   │   └── [slug]/
│   │       ├── page.tsx            → Case study detail page
│   │       └── opengraph-image.tsx → Per-project OG image (optional, Phase 7)
│   ├── globals.css                 → Tailwind import + @theme tokens + base layer
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx               → Floating dark pill, scroll-glass effect, mobile menu
│   │   ├── footer.tsx
│   │   └── reveal.tsx                → Framer Motion scroll-reveal wrapper (replaces .reveal CSS+IO)
│   │
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── snapshot-strip.tsx       → Replaces the old "photo cluster" — see Section 5.2 for content swap
│   │   ├── work-preview.tsx         → 3–4 featured project cards on home page
│   │   ├── about-snippet.tsx
│   │   └── contact-section.tsx
│   │
│   ├── about/
│   │   ├── about-sidebar.tsx
│   │   ├── bio-column.tsx
│   │   └── project-entry.tsx
│   │
│   ├── work/
│   │   ├── case-study-hero.tsx
│   │   ├── case-study-section.tsx   → Reusable: Challenge / Approach / Decisions / Outcome blocks
│   │   └── next-project-cta.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       ├── tag.tsx
│       ├── section-label.tsx
│       └── skill-pill.tsx
│
├── data/
│   ├── site-config.ts               → Name, role, contact, real social links
│   ├── projects.ts                  → Typed project/case-study data (Section 6)
│   ├── experience.ts                → Education, internships, POR (Section 4)
│   └── skills.ts                    → Skills grouped by category (Section 4.3)
│
├── lib/
│   └── utils.ts                     → cn() helper (clsx + tailwind-merge), slugify()
│
├── types/
│   └── index.ts
│
├── public/
│   ├── images/
│   │   ├── avatar/                  → Profile photo (needs real photo from Jignesh — see Section 10 open items)
│   │   ├── projects/                → Real screenshots: CracklePDF extension, CracklePDF Android app, ZipPath, Judge Portal, Ticket Platform
│   │   └── og/
│   ├── resume.pdf                   → Use the real resume PDF already in the project folder (rename to resume.pdf, serve as static asset)
│   └── favicon.ico
│
├── next.config.ts
├── tsconfig.json
├── package.json
├── .eslintrc.json
└── .prettierrc
```

---

## 4. Real Content — Source of Truth (from resume PDFs)

> Codex: this section replaces ALL placeholder bio/experience/award content found in the uploaded `about.html`. Use this verbatim for facts; light copy-editing for tone is fine (see Section 8 voice guide), but do not alter names, dates, tools, or metrics.

### 4.1 Identity

```
Name:      Jignesh Sonewane
Location:  Nagpur, Maharashtra, India
Phone:     7499325646   (only show on resume PDF / contact page if Jignesh confirms — do NOT put a raw phone number in page source/metadata by default; ask before exposing it publicly)
Email:     jigneshsonewane@gmail.com
LinkedIn:  linkedin.com/in/jignesh-sonewane
GitHub:    github.com/jignesh0462124
```

**Headline / role positioning (replaces "UI/UX Designer & Developer"):**
> Cybersecurity-focused Computer Science student & full-stack developer.

Suggested hero line (Codex may refine wording, keep facts intact):
> "A cybersecurity-focused developer building secure, production-grade web products — from forensic case analysis to full-stack platforms."

### 4.2 Education

```
G. H. Raisoni College of Engineering, Nagpur
Bachelor of Technology, Computer Science — Cyber Security Specialization
CGPA: 8.25 / 10
Expected: 2027 (started 2024)
```

### 4.3 Technical Skills (group into pills/categories — do not flatten into one undifferentiated list)

```
Frontend          React.js, JavaScript (ES6+), Redux Toolkit, GSAP, HTML5, CSS3,
                  Responsive Design, Mobile UI/UX, Next.js

Backend & Data    Node.js, Express.js, Supabase, REST APIs, SQL, MongoDB, PostgreSQL

Cybersecurity     Penetration Testing, Metasploit, Nmap, Burp Suite, Wireshark,
                  Kali Linux, Autopsy, Genymotion

Cloud & Infra     AWS EC2, AWS S3, AWS Lambda, AWS Amplify, AWS ECS, Docker, Nginx,
                  Git, GitHub, Netlify, Hostinger

Core CS           Data Structures & Algorithms, Frontend-Backend Architecture,
                  Performance Optimization, Machine Learning (Python, scikit-learn,
                  NumPy, pandas)
```

### 4.4 Professional Experience

```
Maharashtra Cyber Police, Nagpur
Cybersecurity On-Site Intern (4 weeks) — On-Site
Dec 2025 – Jan 2026
  • Completed a one-month on-site cybersecurity internship with the Cyber Police Unit, Nagpur City.
  • Assisted in handling 100–150 cybercrime victim cases/day: complaint filing, preliminary
    cyber incident analysis, victim coordination, and case documentation.
  • Tools: National Cyber Crime Reporting Portal, Case Management Systems, Digital Forensics Utilities.
  • Also recognized as part of a cybersecurity awareness initiative under the Nagpur Commissioner.

IIT Guwahati (via 1STOP.AI)
Digital Forensics Intern — Digital Forensic Analysis with Autopsy (8 weeks) — Virtual
July 2025 – Sept 2025
  • Performed disk image analysis, user activity recovery, timeline analysis, and identification
    of malicious artifacts using real-world forensic scenarios.
  • Analyzed system log data, timelines, and digital artifacts to reconstruct event sequences
    under tight project timelines.
  • Tools: Autopsy, TryHackMe Forensic Labs, Disk Images, Windows Artifacts, Log Analysis Utilities.
```

### 4.5 Positions of Responsibility

```
Google Developer Groups On Campus (GDGOC), GHRCE
Web Execom Member — Cybersecurity Web Execom
Sept 2025 – Present
  • Collaborate with student developer teams using Git/GitHub to review code, design UI
    layouts, and organize technical community initiatives.

IEEE, GHRCE
Research Execom Member
Aug 2025 – Present
  • Contribute to student-led technical discussions, research reviews, and developer-centric
    workshops.
```

### 4.6 Resume file
Both PDFs (`Jignesh_Sonewane_Resume.pdf` and `Jig_Son_Cyber_Resume.pdf`) exist — confirm with Jignesh which is the current/preferred version before wiring the navbar "Resume" download button (Section 10 open item). Place the chosen file at `public/resume.pdf`.

---

## 5. Content Mapping — What Changes From the Old HTML

### 5.1 Sections to keep structurally, recontent

| Old section (index.html) | Keep layout? | Content change |
|---|---|---|
| Navbar | Yes, exact | Drop "Dribbble" type styling references; links become Work / About / Contact; Resume button points to real PDF |
| Hero | Yes, exact | New headline (Section 4.1); drop "UI/UX designer" framing |
| Photo cluster ("Between Projects" / polaroids) | Restructure — see 5.2 | Replace chess/sketching/coding emoji placeholders with real interests or drop entirely if no real photos |
| Selected Work (project cards) | Yes, exact card design | Swap in real projects (Section 6) |
| About (home snippet) | Yes, exact | Real bio + real skill pills (4.3) + real experience cards (4.4) instead of fake "DesignStudio Agency" |
| Contact | Yes, exact | Real email; drop Dribbble/Behance icons, keep LinkedIn + GitHub, consider adding Twitter only if Jignesh has one |
| Footer | Yes, exact | — |

### 5.2 Photo cluster decision
The original "Between Projects" polaroid cluster (chess night / sketching / late builds emoji placeholders) was invented filler for a *design portfolio* persona. Options, ask Jignesh which (see Section 10):
- **(a)** Replace with 3 real photos if available (e.g., hackathon team photo, internship/police unit moment if shareable, a build/demo screenshot) — keeps the playful polaroid signature element intact with real personality.
- **(b)** Replace the emoji captions with developer-appropriate ones (e.g., 🛠️ "Debugging at 2am", 🔐 "CTF practice", 🖥️ "Hackathon mode") while keeping illustrative gradient placeholders if no photos are ready yet.
- **(c)** Remove the section entirely and let Work start sooner — valid if Jignesh wants a leaner, more serious tone (cybersecurity audiences often skew more formal than design audiences).

Default recommendation: **(b)** as a fast path to ship, upgradeable to **(a)** once real photos are supplied.

### 5.3 About page (`about.html` → `/about`)
Drop entirely (do not migrate): fake clients list (Adobe, Flipkart, Myntra, etc.), fake "Awards, Recognition & Highlights" (Awwwards, Behance Featured, etc.), fake "Speaking, Writing & Community" (Figma Config, Notion Ambassador, etc.) — none of this is real. Replace with:
- Real bio paragraph (cybersecurity + full-stack framing)
- **Education** block (4.2)
- **Experience** block (4.4) — reuse `exp-card` visual style from the original About sidebar/main column
- **Positions of Responsibility** block (4.5) — new section, same visual treatment as old "Speaking & Community" block (heading + list items), since POR is the real equivalent of community involvement here
- **Skills & Tools** block (4.3), grouped by category instead of one flat list
- Projects column — real projects (Section 6), same 2-column visual layout as the original `about.html`

---

## 6. Projects / Case Studies Data

> Codex: scaffold `data/projects.ts` with this typed shape. Populate the 4 confirmed real projects below. Screenshots are pending (Section 10) — use the existing gradient-placeholder treatment from the HTML reference (`.project-img-placeholder` gradient backgrounds) until real images are supplied, so the build is never blocked on assets.

```ts
export interface CaseStudyMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  year: string
  tags: string[]
  role: string
  gradient: string          // CSS gradient fallback, matches old .project-img-placeholder style
  featured: boolean         // show on home page work-preview
  summary: string           // 1–2 sentences for card view
  challenge: string         // case study: problem + constraints
  approach: string          // case study: specific contribution
  decisions: string[]       // case study: key design/engineering decisions
  outcome: string           // case study: measurable result
  metrics?: CaseStudyMetric[]
  tools: string[]
}
```

### Project entries (real, from resume + memory)

**1. CracklePDF — Chrome Extension & Android App**
```
slug: cracklepdf
title: CracklePDF
tagline: An all-in-one PDF toolkit, built natively for the browser and Android
year: 2024 – Present
tags: [Chrome Extension, Android, Product]
role: Indie Developer & Designer
summary: Offline-first PDF toolkit shipped as both a Chrome Web Store extension
  and an Android app — merge, convert, compress, and annotate PDFs without
  uploading files anywhere.
tools: [JavaScript, Chrome Extensions API, Android, Next.js, Tailwind CSS, PostHog]
```
Use Claude's existing memory of this project for the deeper case-study narrative: Chrome Web Store policy compliance work (CDN-string rejection fix, manifest audit, privacy practices documentation), dead-code audit using a 522-node/894-edge dependency graph, and a full Android UI redesign with a navigable HTML prototype across all screens. Frame the challenge/approach/decisions/outcome around: shipping a privacy-respecting (offline, no-upload) tool, passing strict Chrome Web Store review, and maintaining a dark, minimal design system across both platforms.

**2. Smart India Hackathon — Judge Evaluation Portal**
```
slug: sih-judge-portal
title: SIH Judge Evaluation Portal
tagline: Production-grade judging system for a 185-team, 55-judge hackathon
year: Sept 2025
tags: [Full-Stack, PHP, Hackathon Infra]
role: Full-Stack Developer, GDGOC GHRCE
summary: Designed and deployed a real-time evaluation portal used live during
  Smart India Hackathon internal rounds, handling concurrent scoring across
  multiple rooms and evaluation phases.
challenge: Coordinating live, concurrent scoring data from 55 judges across
  multiple physical rooms for 185 teams, with zero tolerance for data loss
  or scoring conflicts during a live event.
approach: Built and hosted a structured multi-phase scoring system with PHP
  and SQL on Hostinger, designed UI layouts to present multi-phase scoring
  matrices clearly to judges under time pressure.
decisions:
  - "Structured scoring matrices over free-form input to reduce judge error and speed up evaluation"
  - "Single source-of-truth database to avoid scoring conflicts across rooms"
outcome: Successfully ran live for the full event with 185 teams and 55 judges
  evaluated across multiple rooms and phases without data issues.
tools: [PHP, SQL, Hostinger, HTML5, CSS3]
```

**3. Developer-The-Explorer — Ticket Payment Platform**
```
slug: developer-the-explorer
title: Developer-The-Explorer Ticketing Platform
tagline: Live event ticketing with real-time Razorpay payment integration
year: Nov 2025 – Dec 2025
tags: [React, Payments, Full-Stack]
role: Full-Stack Developer, GDGOC GHRCE
summary: A fully responsive, mobile-first ticketing platform for a camp event,
  with secure Razorpay payment integration and automated email confirmations.
challenge: Needed a mobile-first booking flow that could handle real money
  (Razorpay) reliably, with no payment-state bugs during a live registration window.
approach: Engineered the frontend in React.js with mobile-first responsive layouts;
  integrated Razorpay via secure RESTful webhooks to manage real-time booking and
  payment state; deployed on Netlify with Resend for transactional email.
decisions:
  - "Webhook-driven payment state instead of client-side confirmation, to avoid trusting the client for payment truth"
  - "Supabase/Postgres for structured ticket and booking data"
outcome: Shipped a live, production ticketing flow handling real payments end-to-end
  for the event with no reported booking/payment failures.
tools: [React.js, JavaScript, Supabase, PostgreSQL, Netlify, Razorpay, Resend]
```

**4. ZipPath — Daily Puzzle Game** *(optional — include if Jignesh wants a 4th, more product-design-flavored project)*
```
slug: zippath
title: ZipPath
tagline: A daily puzzle game with gamified progression and a custom design system
year: 2025
tags: [Product, Game Design, React]
role: Solo Builder
summary: Designed and specced a daily puzzle game — React/Zustand/Supabase stack,
  custom puzzle-generation logic, and a full gamification + monetization system.
tools: [React, Zustand, Supabase]
```

> Codex: do NOT include "MotionRAG Studio," "FinPay Mobile Banking," or "Design System v2.0" from the old `about.html`/`index.html` — these were fabricated placeholder projects for a fictional designer persona and have no basis in real work. Confirm with Jignesh in case any deserve to stay as labeled "concept project" / "case study practice" — otherwise exclude.

---

## 7. Animation & Motion System (2026-standard, restrained)

Per current portfolio design research: 2026 motion trends favor **subtle, guidance-oriented animation** — micro-interactions and gentle transitions that help users understand where to focus, not decorative flourish. Heavy/maximalist motion is explicitly called out as a 2025-era AI-generated-site tell. Build accordingly: every animation here should answer "what does this help the visitor notice or do?"

### 7.1 Core reveal pattern (replaces old IntersectionObserver + CSS `.reveal`)

```tsx
// components/layout/reveal.tsx
'use client'
import { motion, useReducedMotion } from 'motion/react'

interface RevealProps {
  children: React.ReactNode
  delay?: number      // seconds: 0, 0.08, 0.16, 0.24...
  y?: number          // px, default 28
  className?: string
}

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
```

### 7.2 Motion inventory

| Element | Motion | Rationale |
|---|---|---|
| Every section on scroll | Fade + 28px slide-up, staggered children | Matches existing `.reveal` system exactly — proven, not decorative |
| Navbar on scroll | Background opacity/blur transition (glass effect) | Functional: signals page depth |
| Hero status dot | Slow pulse (2s loop) | Signals "live/available," not noise |
| Project cards | `whileHover={{ y: -5 }}` lift + shadow grow | Standard affordance for clickable cards |
| Photo cluster / snapshot strip | Subtle hover scale + rotate correction per frame (desktop only) | Playful signature element, kept minimal |
| Mobile nav menu | Slide-down with `AnimatePresence` | Standard, expected pattern |
| Page-level transitions | None by default | 2026 guidance: avoid full-page transition gimmicks that delay perceived load; only add if Jignesh explicitly wants it later |
| Mouse parallax on photo cluster | Keep, but gate behind `prefers-reduced-motion` AND skip on touch/mobile (`window.innerWidth < 680` check, same as old HTML) | Already correctly scoped in the reference HTML — preserve that restraint |

### 7.3 What NOT to add
No scroll-jacking, no full 3D tilt effects, no cursor-follower blobs, no text-scramble/glitch intros, no autoplay video backgrounds. These read as generic "AI portfolio template" signals per the frontend-design guidance and the 2026 trend research — they don't serve a cybersecurity/engineering-credibility brief, where clarity and competence read stronger than spectacle.

---

## 8. Voice & Copy Guide

The existing HTML copy was written for a UI/UX product designer (Vishesh Patel-inspired). Recalibrate every line of copy for this site's actual person: a cybersecurity-specializing CS student who ships full-stack products and has done real forensic/incident-response work.

- **Lead with competence, not adjectives.** "Built a judge evaluation portal handling 185 teams" beats "passionate about creating delightful experiences."
- **Keep the warm, personal tone of the greeting line** ("Hey there 🤌, I am Jignesh") — that personality-forward signature is worth preserving; it's the literal "be memorable" element this design already has.
- **Case studies follow: Challenge → Approach → Decisions → Outcome**, per current case-study best practice (problem + outcome stated early, then process). Target 800–1500 words per case study; lead each one with the result, not the wireframes.
- **No invented metrics.** Every number in this document came from the resume or known project facts. Do not add fabricated percentages ("improved X by 40%") unless Jignesh confirms a real figure.
- Drop UI/UX-design-specific vocabulary that doesn't apply (Figma, Dribbble, "design systems with 80+ components") unless Jignesh actually wants to keep a design-adjacent angle alongside the dev/security one — confirm in Section 10.

---

## 9. Phase-by-Phase Build Checklist

### Phase 0 — Confirm open items (see Section 10) before scaffolding
Don't burn time building against content that might change. Get answers on: profile photo, which resume PDF to ship, photo-cluster treatment, project screenshots vs. placeholders, and whether to keep any design-adjacent skills.

### Phase 1 — Scaffold (1–2 hrs)
- [ ] `npx create-next-app@latest portfolio --typescript --eslint --app --import-alias="@/*" --tailwind`
- [ ] `npm install motion lucide-react clsx tailwind-merge`
- [ ] `npm install -D prettier eslint-config-prettier`
- [ ] Set up `app/globals.css` with the `@theme` token block (Section 2.1)
- [ ] Configure `next/font` for Playfair Display, Inter, Space Mono in `app/layout.tsx`
- [ ] Create folder skeleton from Section 3
- [ ] Populate `data/site-config.ts`, `data/experience.ts`, `data/skills.ts` from Section 4

### Phase 2 — Core UI components (2–3 hrs)
- [ ] `button.tsx`, `badge.tsx`, `tag.tsx`, `section-label.tsx`, `skill-pill.tsx`
- [ ] `reveal.tsx` (Section 7.1)
- [ ] `navbar.tsx` — floating pill, scroll-glass effect via `useScroll`, mobile menu via `AnimatePresence`
- [ ] `footer.tsx`
- [ ] Wire Navbar + Footer into `app/layout.tsx`

### Phase 3 — Home page (3–4 hrs)
- [ ] `hero.tsx` — new headline (4.1), CTA buttons
- [ ] `snapshot-strip.tsx` — per Section 5.2 decision
- [ ] `work-preview.tsx` — 3–4 featured `ProjectCard`s pulling from `data/projects.ts`
- [ ] `about-snippet.tsx` — real bio + skill pills + experience cards
- [ ] `contact-section.tsx` — real email, LinkedIn + GitHub only (drop Dribbble/Behance unless confirmed otherwise)
- [ ] Assemble `app/page.tsx`, verify all Reveal staggering matches old HTML's delay pattern (80/160/240/320ms)

### Phase 4 — About page (2–3 hrs)
- [ ] `about-sidebar.tsx` — sticky sidebar, avatar, "Open to Work" badge, real socials
- [ ] `bio-column.tsx` — bio, Education block, Experience block, POR block, grouped Skills block
- [ ] `project-entry.tsx` — full project list (reuses `data/projects.ts`)
- [ ] Assemble `app/about/page.tsx`; verify mobile layout collapses sidebar correctly

### Phase 5 — Case study pages (3–5 hrs)
- [ ] `case-study-hero.tsx`, `case-study-section.tsx` (Challenge/Approach/Decisions/Outcome), `next-project-cta.tsx`
- [ ] `app/work/[slug]/page.tsx` with `generateStaticParams()` from `data/projects.ts`
- [ ] `generateMetadata()` per project
- [ ] Build out full case-study copy for CracklePDF, SIH Judge Portal, and the Ticketing Platform using Section 6 data as the skeleton

### Phase 6 — SEO & metadata (1–2 hrs)
- [ ] Root metadata in `layout.tsx` (real name, real role, real description)
- [ ] Per-page metadata for home/about/each case study
- [ ] JSON-LD `Person` schema with real `sameAs` (LinkedIn, GitHub)
- [ ] `app/sitemap.ts`, `app/robots.ts`
- [ ] OG image (1200×630) — can reuse the existing accent-orange gradient style from the HTML reference
- [ ] favicon, apple-touch-icon, manifest.json

### Phase 7 — Performance & polish (2–3 hrs)
- [ ] `next build`, fix all errors/warnings
- [ ] Lighthouse audit, target 95+ across all four categories
- [ ] Confirm `next/image` used everywhere, `priority` set on above-the-fold images only
- [ ] Test `prefers-reduced-motion` actually disables/shortens motion (Section 7.1)
- [ ] Full keyboard-navigation pass (tab order, visible focus rings — already defined via `:focus-visible` token)
- [ ] Responsive check at 360/414/768/1024/1440px
- [ ] Link audit — no dead `href="#"` placeholders left in production

### Phase 8 — Deploy (1 hr)
- [ ] Push to GitHub
- [ ] Import to Vercel, confirm Next.js auto-detected
- [ ] Add custom domain (pending Jignesh's domain choice — see Section 10)
- [ ] Enable Vercel Analytics + Speed Insights
- [ ] Submit sitemap to Google Search Console
- [ ] Verify OG preview renders correctly (e.g. via a social-card debugger)

---

## 10. Open Items — Confirm With Jignesh Before/During Build

These are things this document cannot resolve from the uploaded files or resume alone:

1. **Profile photo** — `about.html`/`index.html` use an emoji avatar placeholder (🧑🏻‍💻). Is there a real headshot to use, or should the emoji/illustrated-avatar treatment stay intentionally as part of the brand?
2. **Which resume PDF is current** — `Jignesh_Sonewane_Resume.pdf` (Canva-designed, broader CS/web framing) vs. `Jig_Son_Cyber_Resume.pdf` (LaTeX, MERN-stack-forward framing). They differ slightly in emphasis and one includes the phone number prominently. Pick one to ship as the public download, and confirm whether the phone number should be visible on a publicly downloadable file.
3. **Photo cluster treatment** — pick (a), (b), or (c) from Section 5.2.
4. **Project screenshots** — ship Phase 1–7 with the existing gradient-placeholder visual treatment (matches old HTML exactly, ships fast) and swap in real screenshots later, or hold the case-study pages until real screenshots/recordings of CracklePDF, the Judge Portal, and the Ticketing Platform exist?
5. **Keep a design-adjacent angle?** The resume is dev/security-forward with no formal design tooling (no Figma/Dribbble mentioned). Should the site lean 100% developer/security, or keep a "I also care about UI/UX" thread (consistent with the existing Crackle products' visual polish) as a secondary note in the bio?
6. **Domain name** for the Vercel custom-domain step in Phase 8.
7. **ZipPath inclusion** — include as project #4 (Section 6) or leave out since it's not on the resume?
8. **Twitter/X or other socials** — old HTML included Twitter, Dribbble, Behance icons. Confirm which (if any) real accounts exist; default plan is LinkedIn + GitHub only.

---

## 11. Commands Reference

```bash
# Scaffold
npx create-next-app@latest portfolio --typescript --eslint --app --import-alias="@/*" --tailwind

# Install
npm install motion lucide-react clsx tailwind-merge
npm install -D prettier eslint-config-prettier @types/node

# Dev
npm run dev

# Build & verify
npm run build
npx tsc --noEmit
npm run lint
npx prettier --write .

# Deploy
npm i -g vercel
vercel --prod
```

---

## 12. Expected Outcome

A two-page-becomes-multi-page Next.js 15 site that visually matches the approved `index.html`/`about.html` reference exactly in layout, color, type, and motion feel — but with every line of biography, every project, and every credential replaced with Jignesh Sonewane's real cybersecurity/full-stack background, real internships (Maharashtra Cyber Police, IIT Guwahati/1STOP.AI), real projects (CracklePDF, SIH Judge Portal, Developer-The-Explorer ticketing platform), and real contact details — built on Tailwind v4 + Framer Motion to match the rest of the Crackle-ecosystem tech stack, deployed to Vercel, and tuned to current (2026) portfolio standards: fast, mobile-first, single-accent-color branding, and motion that guides rather than decorates.
