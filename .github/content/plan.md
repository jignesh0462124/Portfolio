# Portfolio Website — Full Content & Build Plan

> **Agent:** Codex (autonomous coding agent)
> **Reference files in this project folder:** `index.html`, `about.html` — APPROVED visual reference. Match layout, spacing, colors, fonts, and motion exactly.
> **This document:** contains the FINAL, ready-to-ship website copy for every section, plus the technical build plan to implement it in Next.js 15 + Tailwind v4. Every string of text below is meant to be used verbatim in the components — do not paraphrase, summarize, or invent additional copy unless a placeholder explicitly says to.
> **Person:** Jignesh Sonewane — Cybersecurity-focused Computer Science student & full-stack developer, Nagpur, India.

---

## 0. Read This First — Agent Operating Rules

1. **This document is the content source of truth.** Every heading, paragraph, button label, and list item in Sections 2–8 below is final copy. Copy it into the corresponding component exactly as written.
2. **Do not pull bio/project/award content from `about.html` or `index.html`.** Those files contain placeholder fabrications for a fictional UI/UX designer persona (fake clients like Adobe/Flipkart, fake awards, fake agency jobs). Use them **only** for layout, CSS, spacing, and component structure — never for text content.
3. **No invented metrics.** Every number in this document (185 teams, 55 judges, 100–150 cases/day, CGPA 8.25) comes directly from Jignesh's resume. Do not add percentages or stats that aren't written here.
4. **Phone number is private.** Do not place `7499325646` anywhere in the live site — not in the Contact section, not in the footer, not in page metadata or JSON-LD. It exists in the resume PDF only because that's a downloadable file the person chooses to share; the website itself must not surface it.
5. **Resume file:** the download button must link to `Jignesh_Sonewane_Resume.pdf` (the Canva-designed version). Rename it to `resume.pdf` and place it at `public/resume.pdf`.
6. **Photo-cluster section:** ship with the developer/security-flavored placeholder captions written in Section 3.3 below — emoji + label, no real photos required at launch.
7. **Persona correction:** every place the old HTML says "UI/UX Designer," "Product Designer," or similar — that framing is wrong and must not appear anywhere in the new copy. This is a cybersecurity-focused full-stack developer's site.
8. Build in the phase order in Section 9. Each phase should leave the site in a working, visually-checked state.

---

## 1. Tech Stack

```
Framework        Next.js 15 (App Router, Server Components by default)
Language         TypeScript (strict mode)
Styling          Tailwind CSS v4 (CSS-first config via @theme) + CSS custom properties
Animation        Framer Motion (import from 'motion/react')
Icons            lucide-react
Fonts            next/font/google — Playfair Display, Inter, Space Mono
Deployment       Vercel
Analytics        Vercel Analytics + Speed Insights
Linting          ESLint (next/core-web-vitals) + Prettier
Package manager  npm
```

```ts
// Framer Motion v11+ import path — verify against installed version at scaffold time
import { motion, useInView, useScroll, useMotionValue, useTransform, AnimatePresence, useReducedMotion } from 'motion/react'
```

---

## 2. Design Tokens (exact values from `index.html` / `about.html`)

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

  /* Accent */
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

  /* Shadows */
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

Border radius: pills/buttons/badges `rounded-full`; cards `rounded-[20px]`; photo frames `rounded-[10px]` with 5px white border.

---

## 3. HOME PAGE — Full Copy (`app/page.tsx`)

### 3.1 Navbar

```
Brand:        jignesh           (lowercase, Space Mono, same avatar-circle "J" mark as the reference HTML)
Nav links:    Work · About · Contact
Resume CTA:   Resume            (links to /resume.pdf, download icon, same as reference HTML)
```

### 3.2 Hero Section

```
Status badge:    Open to opportunities
                 (green pulsing dot, exactly as in reference HTML)

Greeting line:   Hey there 🤌  I am Jignesh

Headline (h1):
  A cybersecurity-focused developer
  building secure systems and
  full-stack products that ship.

  — Render as three lines like the reference HTML's hero__headline.
  — Italic accent word/phrase in --color-accent: "cybersecurity-focused developer"
  — Full markup equivalent:
    A <em class="hero__accent">cybersecurity-focused developer</em><br>
    building secure systems and<br>
    full-stack products that ship.

CTA buttons:
  Primary:  See my work       → href="#work"
  Outline:  Get in touch       → href="#contact"

Scroll indicator label:  Scroll   (unchanged from reference HTML, with down-chevron icon)
```

### 3.3 Snapshot Strip (replaces "Photo Cluster — Between Projects")

```
Floating badge (left, blue):   Open to Internships
Floating badge (right, grey):  Building in public 🛠

Three frames (developer/security-flavored captions, emoji + label — same polaroid visual
treatment, rotated -9deg / +2deg / +7deg as in reference HTML):

  Frame 1:  🔐   CTF Practice
  Frame 2:  🖥️   Late-Night Builds
  Frame 3:  🕵️   Forensics Lab

Teaser sticker:   🕵🏻
Teaser text:      A peek into how I build and break things
```

> Note: this replaces the old "Chess Night / Sketching / Late Builds" captions, which were generic filler for a design-portfolio persona. These three keep the same playful structure but speak to Jignesh's actual world: CTFs, shipping code late, and digital forensics work.

### 3.4 Selected Work (Section heading + 3 featured project cards)

```
Section label:    Selected Work
Section heading:  Projects I've shipped
```

**Card 1 — CracklePDF**
```
Tags:        Chrome Extension · Android · Product
Title:       CracklePDF
CTA:         View Case Study →
Description: An all-in-one PDF toolkit built natively for the browser and Android —
             merge, convert, compress, and annotate PDFs without uploading a single
             file anywhere. Shipped as both a Chrome Web Store extension and a native
             Android app, with a consistent dark, minimal design system across both.
```

**Card 2 — SIH Judge Evaluation Portal**
```
Tags:        Full-Stack · PHP · Hackathon Infra
Title:       SIH Judge Evaluation Portal
CTA:         View Case Study →
Description: A production-grade evaluation system built for Smart India Hackathon's
             internal rounds — handling real-time scoring across 185 teams and 55
             judges, across multiple rooms and evaluation phases, without a single
             scoring conflict.
```

**Card 3 — Developer-The-Explorer Ticketing Platform**
```
Tags:        React · Payments · Full-Stack
Title:       Developer-The-Explorer Ticketing Platform
CTA:         View Case Study →
Description: A mobile-first event ticketing platform with secure Razorpay payment
             integration — engineered for a live camp event, handling real bookings
             and real payments with webhook-driven payment state and automated
             email confirmations.
```

### 3.5 About Snippet (home page, condensed version of full About page)

```
Section label:   About
Heading:         Where security thinking meets
                 shipping product.
                 (italic accent on "shipping product" in --color-accent)

Bio paragraph 1:
  I'm a Computer Science student at G. H. Raisoni College of Engineering,
  Nagpur, specializing in Cyber Security. My work sits at the intersection
  of two things: understanding how systems get attacked, and building the
  systems themselves — full-stack, end to end.

Bio paragraph 2:
  I've spent time inside a real Cyber Police unit handling live cybercrime
  cases, and inside a digital forensics lab reconstructing incidents from
  disk images. Outside of that, I build production web products — from
  hackathon infrastructure used by hundreds of people live, to CracklePDF,
  an offline-first PDF toolkit I maintain across Chrome and Android.

Skills & Tools label:  Skills & Tools
Skill pills (flat list for home snippet — grouped version lives on /about):
  React.js · Next.js · Node.js · JavaScript (ES6+) · MongoDB · PostgreSQL ·
  AWS · Docker · Wireshark · Burp Suite · Nmap · Kali Linux · Metasploit · Git

Social links row:
  LinkedIn ↗     → https://linkedin.com/in/jignesh-sonewane
  GitHub ↗       → https://github.com/jignesh0462124
```

**Experience cards (right column, same `.exp-card` visual style as reference HTML):**

```
Card 1:
  Role:     Cybersecurity On-Site Intern
  Years:    Dec 2025 – Jan 2026
  Company:  Maharashtra Cyber Police · Nagpur

Card 2:
  Role:     Digital Forensics Intern
  Years:    Jul 2025 – Sept 2025
  Company:  IIT Guwahati (via 1STOP.AI) · Virtual

Card 3:
  Role:     Web Execom Member
  Years:    Sept 2025 – Present
  Company:  Google Developer Groups On Campus · GHRCE
```

### 3.6 Contact Section

```
Section label:   Get in touch
Heading:         Let's build
                 something secure.
                 (italic accent on "something secure" in --color-accent)

Sub copy:
  Open to internships, full-stack development work, and cybersecurity-focused
  collaborations. If you're working on something interesting, I'd like to hear
  about it.

Email (mailto link, large):  jigneshsonewane@gmail.com

Social icons row (LinkedIn + GitHub ONLY — drop Twitter/Dribbble/Behance from the
reference HTML, they don't apply to this persona):
  LinkedIn  → https://linkedin.com/in/jignesh-sonewane
  GitHub    → https://github.com/jignesh0462124
```

### 3.7 Footer

```
Footer text:    Designed & built by Jignesh
Footer links:   Home · Work · About · Contact
Copyright:      © 2026 · All rights reserved
```

---

## 4. ABOUT PAGE — Full Copy (`app/about/page.tsx`)

### 4.1 Sidebar (left, sticky — same visual structure as reference `about.html`)

```
Avatar:           (emoji placeholder 🧑🏻‍💻 unless/until a real photo is supplied)
Open badge:       Open to Internships
Name (h1):        Jignesh
Handle line:      @jignesh-sonewane · 📍 Nagpur, India
Role line:        Cybersecurity-Focused Developer

Meta line:        Specializing in Cyber Security · CGPA 8.25/10

Tool chips (replace Figma/Dribbble/Notion/Webflow with real tools):
  Chip 1:  React
  Chip 2:  AWS
  Chip 3:  Kali Linux
  Chip 4:  Docker

Action buttons:
  Message  → mailto:jigneshsonewane@gmail.com
  Save     (icon-only button, keep as a UI affordance — no functional change needed)

Sidebar tabs:
  Home       → /
  Portfolio  → /about   (active state on this page)

Sidebar socials row (drop Résumé/Twitter from this row's link list per reference HTML
style — keep only what's real):
  Résumé    → /resume.pdf
  LinkedIn  → https://linkedin.com/in/jignesh-sonewane
  GitHub    → https://github.com/jignesh0462124
```

### 4.2 Main Content — Left Column (bio + credentials)

```
Heading (h2):    Hi, I'm Jignesh

Bio paragraph 1:
  I'm a Computer Science student specializing in Cyber Security at G. H. Raisoni
  College of Engineering, Nagpur (CGPA 8.25/10, expected 2027). I work across two
  worlds that most people treat as separate: breaking systems to understand them,
  and building production software that has to hold up in the real world.

Bio paragraph 2:
  I've completed an on-site cybersecurity internship with the Maharashtra Cyber
  Police, handling live cybercrime cases and incident documentation, and a digital
  forensics internship with IIT Guwahati (via 1STOP.AI), reconstructing incidents
  from disk images using Autopsy. Alongside that, I build full-stack products —
  React/Next.js frontends, Node.js and PHP backends, and payment-integrated
  platforms that have run live for hundreds of real users.

Links row (arrow + pipe-separated, same style as reference HTML):
  → Résumé | LinkedIn | GitHub

Block — Education:
  Heading:  Education
  Text:     G. H. Raisoni College of Engineering, Nagpur
            Bachelor of Technology in Computer Science — Cyber Security Specialization
            CGPA: 8.25 / 10 · Expected 2027

Block — Technical Skills (grouped, NOT a flat list — group headers + items):

  Frontend
    React.js · JavaScript (ES6+) · Redux Toolkit · GSAP · HTML5 · CSS3 ·
    Responsive Design · Mobile UI/UX · Next.js

  Backend & Data
    Node.js · Express.js · Supabase · REST APIs · SQL · MongoDB · PostgreSQL

  Cybersecurity
    Penetration Testing · Metasploit · Nmap · Burp Suite · Wireshark ·
    Kali Linux · Autopsy · Genymotion

  Cloud & Infrastructure
    AWS EC2 · AWS S3 · AWS Lambda · AWS Amplify · AWS ECS · Docker · Nginx ·
    Git · GitHub · Netlify · Hostinger

  Core CS & Machine Learning
    Data Structures & Algorithms · Frontend-Backend Architecture ·
    Performance Optimization · Python · scikit-learn · NumPy · pandas

Block — Professional Experience:
  Heading:  Professional Experience

  Entry 1:
    Role/Company:  Cybersecurity On-Site Intern — Maharashtra Cyber Police, Nagpur
    Dates:         Dec 2025 – Jan 2026 · On-Site
    Bullets:
      • Completed a one-month on-site cybersecurity internship with the Cyber
        Police Unit, Nagpur City.
      • Assisted in handling 100–150 cybercrime victim cases per day — complaint
        filing, preliminary cyber incident analysis, victim coordination, and
        case documentation.
      • Worked with the National Cyber Crime Reporting Portal, internal case
        management systems, and digital forensics utilities.
      • Recognized as part of a cybersecurity awareness initiative under the
        Nagpur Commissioner.

  Entry 2:
    Role/Company:  Digital Forensics Intern — IIT Guwahati (via 1STOP.AI)
    Dates:         July 2025 – Sept 2025 · Virtual
    Bullets:
      • Completed an 8-week Digital Forensic Analysis internship using Autopsy.
      • Performed disk image analysis, user activity recovery, timeline analysis,
        and identification of malicious artifacts using real-world forensic
        scenarios.
      • Analyzed system log data and digital artifacts to reconstruct event
        sequences under tight project timelines.
      • Worked with Autopsy, TryHackMe Forensic Labs, disk images, Windows
        artifacts, and log analysis utilities.

Block — Positions of Responsibility:
  Heading:  Positions of Responsibility

  Entry 1:
    Google Developer Groups On Campus (GDGOC), GHRCE
    Web Execom Member — Cybersecurity Web Execom · Sept 2025 – Present
      • Collaborate with student developer teams using Git/GitHub to review code,
        design UI layouts, and organize technical community initiatives.

  Entry 2:
    IEEE, GHRCE
    Research Execom Member · Aug 2025 – Present
      • Contribute to student-led technical discussions, research reviews, and
        developer-centric workshops.
```

### 4.3 Main Content — Right Column (Projects)

Use the full case-study content from Section 5 below for each `project-entry` block, in this order:

1. CracklePDF
2. SIH Judge Evaluation Portal
3. Developer-The-Explorer Ticketing Platform
4. ZipPath *(only if Jignesh confirms inclusion — see Section 8 open items; omit by default since it's not on the resume)*

---

## 5. CASE STUDY PAGES — Full Copy (`app/work/[slug]/page.tsx`)

Each case study follows: **Hero → Challenge → Approach → Decisions → Outcome → Tools → Next Project**. Word counts target 800–1,200 words per case study, per current case-study best practice (problem and outcome stated early, then process detail).

### 5.1 `/work/cracklepdf`

```
Hero title:     CracklePDF
Hero tagline:   An all-in-one PDF toolkit, built natively for the browser and Android
Meta row:       2024 – Present · Indie Developer & Designer · Chrome Extension, Android

CHALLENGE
Most online PDF tools require uploading your file to someone else's server —
a real problem for anyone handling sensitive or confidential documents, and a
needless privacy risk for everyday use. The goal was to build a PDF toolkit
that does everything entirely offline, in the browser or on-device, with no
file ever leaving the user's machine — while still feeling fast and complete
enough to replace the upload-based tools people already use.

APPROACH
CracklePDF ships as two native surfaces: a Chrome Web Store extension and an
Android app, both built around the same dark, minimal design system so the
experience feels consistent regardless of platform. Every operation — merge,
split, compress, convert, annotate — runs locally. On the extension side, the
build is structured to pass Chrome Web Store's strict review process, which
meant treating manifest correctness, bundled dependency hygiene, and privacy
disclosures as first-class engineering work, not an afterthought.

DECISIONS
  • Offline-first architecture — no file upload, ever, even for "advanced"
    operations — was treated as a non-negotiable constraint, not a feature.
  • When a Chrome Web Store review flagged a hard-coded CDN URL inside a
    bundled vendor library (jsPDF), the fix was traced to the actual vendored
    file rather than patched around, and documented with a full root-cause
    analysis and manifest audit so the same class of rejection couldn't
    recur on a future release.
  • Ran a full dead-code audit using a static dependency graph (522 nodes,
    894 edges across 62 files) before any cleanup — favoring a conservative,
    grep-verified removal process over aggressive automated deletion, to
    avoid silently breaking a working extension.
  • Flagged unused/unconnected API modules (chat-with-PDF, summarize, convert
    helpers with no UI wiring) for explicit removal or proper activation,
    rather than leaving dead surface area in a security-reviewed codebase.
  • Designed the Android app's full screen set — splash, login, home, tools,
    history, profile, settings, tool detail — around one consistent dark
    surface hierarchy, then validated the whole flow with a single navigable
    HTML prototype before writing native UI code.

OUTCOME
A privacy-respecting PDF toolkit that passed Chrome Web Store's compliance
review after a structured root-cause fix, ships consistently across Chrome
and Android, and is actively maintained with a documented cleanup process
behind it rather than ad-hoc patches.

TOOLS
JavaScript, Chrome Extensions API, Android, Next.js, Tailwind CSS, Framer
Motion, PostHog
```

### 5.2 `/work/sih-judge-portal`

```
Hero title:     SIH Judge Evaluation Portal
Hero tagline:   Production-grade judging infrastructure for a 185-team hackathon
Meta row:       Sept 2025 · Full-Stack Developer, GDGOC GHRCE · PHP, SQL, Hostinger

CHALLENGE
Smart India Hackathon's internal college round needed a live evaluation system
for 185 teams being scored by 55 judges, spread across multiple rooms and
running through multiple evaluation phases simultaneously. The system had to
handle concurrent writes from many judges at once with zero tolerance for
data loss, scoring conflicts, or downtime during a live, time-boxed event —
there was no opportunity to "fix it after."

APPROACH
Built and deployed a structured, multi-phase scoring portal on PHP and SQL,
hosted on Hostinger. Rather than free-form scoring inputs, the UI presented
judges with structured scoring matrices for each evaluation phase — reducing
input errors and speeding up the time it took each judge to score a team,
which mattered directly given the time pressure of a live event with 55
judges working in parallel.

DECISIONS
  • Structured scoring matrices over free-form text fields, trading a small
    amount of flexibility for a large reduction in judge error and scoring
    time — important when every judge is working under a live clock.
  • A single source-of-truth database for all rooms and phases, instead of
    per-room data silos, to eliminate the possibility of scoring conflicts
    between rooms evaluating the same team at different phases.
  • Optimized the schema and queries specifically for the read/write pattern
    of many judges submitting scores concurrently in short bursts, rather
    than for general-purpose flexibility.

OUTCOME
The portal ran live for the full duration of the event, correctly handling
real-time scoring across 185 teams and 55 judges across multiple rooms and
evaluation phases, with no data loss or scoring conflicts reported.

TOOLS
PHP, SQL, Hostinger, HTML5, CSS3
```

### 5.3 `/work/developer-the-explorer`

```
Hero title:     Developer-The-Explorer Ticketing Platform
Hero tagline:   A live, mobile-first ticketing platform with real payment integration
Meta row:       Nov 2025 – Dec 2025 · Full-Stack Developer, GDGOC GHRCE · React.js, Supabase, Razorpay

CHALLENGE
A camp-style event needed an online ticketing platform that could take real
payments from real people, on real money rails (Razorpay), with a booking
flow that had to work cleanly on mobile — most attendees would be booking
from their phones, not a desktop. The hard constraint was payment-state
correctness: a booking flow that "looks" successful but silently fails the
payment, or double-charges someone, is worse than no platform at all.

APPROACH
Engineered a fully responsive, mobile-first frontend in React.js and
JavaScript, with layouts specifically optimized for browsing and booking
tickets on small screens. Payment state was handled through secure RESTful
API webhooks into the Razorpay payment gateway — meaning the system only
trusts a booking as "paid" once Razorpay's own webhook confirms it, not
based on what the client reports back. The production build was deployed
on Netlify, with Resend wired in for automated booking-confirmation emails.

DECISIONS
  • Webhook-driven payment confirmation instead of trusting client-side
    "payment successful" callbacks — this was the single most important
    decision, since client-side state can be manipulated or can simply fail
    to report correctly, and a ticketing platform cannot afford to mark a
    booking "confirmed" on bad information.
  • Supabase/PostgreSQL for structured booking and ticket data, giving
    relational guarantees around ticket inventory and booking state rather
    than handling that logic ad hoc in application code.
  • Mobile-first layout decisions made first, then scaled up to desktop —
    matching the real usage pattern of attendees booking from their phones.

OUTCOME
Shipped and ran live for the event's registration window, processing real
ticket bookings and real Razorpay payments end-to-end with no reported
booking or payment failures, and automated confirmation emails delivered
via Resend.

TOOLS
React.js, JavaScript, Supabase, PostgreSQL, Netlify, Razorpay, Resend
```

### 5.4 `/work/zippath` *(optional — include only if confirmed; see Section 8)*

```
Hero title:     ZipPath
Hero tagline:   A daily puzzle game with a custom design system and gamified progression
Meta row:       2025 · Solo Builder · React, Zustand, Supabase

SUMMARY (shorter entry — not a full case study unless Jignesh wants to expand it)
Designed and specced a daily puzzle game on a React/Zustand/Supabase stack,
including original puzzle-generation logic and a full gamification and
monetization system, with a custom visual design system blending Notion-style
clarity with a neo-brutalist accent treatment.

TOOLS
React, Zustand, Supabase
```

---

## 6. SEO & Metadata Copy

```
Site title (default):     Jignesh Sonewane — Cybersecurity Developer & Full-Stack Engineer
Title template:            %s · Jignesh Sonewane

Meta description (root):
  Cybersecurity-focused Computer Science student and full-stack developer based
  in Nagpur, India. Digital forensics, penetration testing, and production web
  products — CracklePDF, hackathon infrastructure, and live payment platforms.

About page title:          About
About page description:
  Cyber Security specialization at G. H. Raisoni College of Engineering.
  Internships with Maharashtra Cyber Police and IIT Guwahati. Full-stack
  projects in React, Next.js, and Node.js.

OG type:        website
OG locale:       en_IN
Twitter card:    summary_large_image

JSON-LD Person schema:
  name:      "Jignesh Sonewane"
  jobTitle:  "Cybersecurity Developer & Full-Stack Engineer"
  url:       (final domain, pending Section 8)
  sameAs:
    - "https://linkedin.com/in/jignesh-sonewane"
    - "https://github.com/jignesh0462124"
  alumniOf:  "G. H. Raisoni College of Engineering"
```

> Do NOT include `telephone` in the JSON-LD schema or anywhere in metadata — phone stays private per Section 0, rule 4.

---

## 7. Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── work/[slug]/page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/ (navbar.tsx, footer.tsx, reveal.tsx)
│   ├── home/ (hero.tsx, snapshot-strip.tsx, work-preview.tsx, about-snippet.tsx, contact-section.tsx)
│   ├── about/ (about-sidebar.tsx, bio-column.tsx, project-entry.tsx)
│   ├── work/ (case-study-hero.tsx, case-study-section.tsx, next-project-cta.tsx)
│   └── ui/ (button.tsx, badge.tsx, tag.tsx, section-label.tsx, skill-pill.tsx)
├── data/
│   ├── site-config.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── lib/utils.ts
├── types/index.ts
├── public/
│   ├── images/{avatar,projects,og}/
│   ├── resume.pdf       ← Jignesh_Sonewane_Resume.pdf, renamed
│   └── favicon.ico
├── next.config.ts
└── package.json
```

### `data/site-config.ts` (literal values to use)

```ts
export const siteConfig = {
  name: 'Jignesh Sonewane',
  handle: '@jignesh-sonewane',
  role: 'Cybersecurity Developer & Full-Stack Engineer',
  location: 'Nagpur, Maharashtra, India',
  email: 'jigneshsonewane@gmail.com',
  openToWork: true,
  socials: {
    resume: '/resume.pdf',
    linkedin: 'https://linkedin.com/in/jignesh-sonewane',
    github: 'https://github.com/jignesh0462124',
  },
  seo: {
    title: 'Jignesh Sonewane — Cybersecurity Developer & Full-Stack Engineer',
    description:
      'Cybersecurity-focused Computer Science student and full-stack developer based in Nagpur, India. Digital forensics, penetration testing, and production web products.',
    url: '', // pending domain — Section 8
    ogImage: '/images/og/og-image.jpg',
  },
}
```

---

## 8. Open Items — Confirm With Jignesh

1. **Profile photo** — currently using emoji placeholder (🧑🏻‍💻). Real headshot available, or keep the illustrated/emoji avatar as a brand choice?
2. **Project screenshots** — ship with the existing gradient-placeholder visual treatment from the reference HTML, or wait for real screenshots of CracklePDF, the Judge Portal, and the Ticketing Platform before launching the case-study pages?
3. **ZipPath inclusion** — include as project #4 (Section 5.4) or leave out since it isn't listed on either resume?
4. **Domain name** — needed for `siteConfig.seo.url`, JSON-LD `url`, and the Vercel custom-domain step.
5. **Twitter/X or other socials** — confirm none beyond LinkedIn + GitHub are real before launch (current default: LinkedIn + GitHub only).

---

## 9. Phase-by-Phase Build Checklist

### Phase 1 — Scaffold
- [ ] `npx create-next-app@latest portfolio --typescript --eslint --app --import-alias="@/*" --tailwind`
- [ ] `npm install motion lucide-react clsx tailwind-merge`
- [ ] `npm install -D prettier eslint-config-prettier`
- [ ] Add `@theme` token block (Section 2) to `app/globals.css`
- [ ] Configure `next/font` for Playfair Display, Inter, Space Mono in `app/layout.tsx`
- [ ] Create folder skeleton from Section 7
- [ ] Populate `data/site-config.ts` (Section 7), `data/experience.ts` and `data/skills.ts` (Section 4.2)

### Phase 2 — Core UI components
- [ ] `button.tsx`, `badge.tsx`, `tag.tsx`, `section-label.tsx`, `skill-pill.tsx`
- [ ] `reveal.tsx` — Framer Motion scroll reveal (opacity + 28px translateY, ease `[0.16,1,0.3,1]`, 650ms, staggered 80ms per child, respects `useReducedMotion`)
- [ ] `navbar.tsx` — floating dark pill, scroll-glass effect, mobile menu (copy from Section 3.1)
- [ ] `footer.tsx` (copy from Section 3.7)

### Phase 3 — Home page
- [ ] `hero.tsx` (copy from Section 3.2)
- [ ] `snapshot-strip.tsx` (copy from Section 3.3)
- [ ] `work-preview.tsx` (copy from Section 3.4, pulling from `data/projects.ts`)
- [ ] `about-snippet.tsx` (copy from Section 3.5)
- [ ] `contact-section.tsx` (copy from Section 3.6)
- [ ] Assemble `app/page.tsx`

### Phase 4 — About page
- [ ] `about-sidebar.tsx` (copy from Section 4.1)
- [ ] `bio-column.tsx` (copy from Section 4.2)
- [ ] `project-entry.tsx` × N (copy from Section 4.3 / Section 5 case studies)
- [ ] Assemble `app/about/page.tsx`

### Phase 5 — Case study pages
- [ ] `data/projects.ts` populated with full Section 5 content (challenge/approach/decisions/outcome/tools per project)
- [ ] `case-study-hero.tsx`, `case-study-section.tsx`, `next-project-cta.tsx`
- [ ] `app/work/[slug]/page.tsx` with `generateStaticParams()`
- [ ] `generateMetadata()` per project using each project's hero tagline as description

### Phase 6 — SEO & metadata
- [ ] Root + per-page metadata using Section 6 copy exactly
- [ ] JSON-LD Person schema (Section 6) — confirm no `telephone` field present
- [ ] `app/sitemap.ts`, `app/robots.ts`
- [ ] OG image, favicon, apple-touch-icon, manifest.json

### Phase 7 — Performance & polish
- [ ] `next build` clean, zero errors
- [ ] Lighthouse 95+ across all categories
- [ ] `next/image` everywhere; `priority` only on above-the-fold images
- [ ] `prefers-reduced-motion` verified to shorten/disable motion
- [ ] Keyboard navigation + visible focus rings
- [ ] Responsive check: 360 / 414 / 768 / 1024 / 1440px
- [ ] Confirm phone number does not appear anywhere in rendered HTML or metadata

### Phase 8 — Deploy
- [ ] Push to GitHub, import to Vercel
- [ ] Add custom domain (pending Section 8)
- [ ] Enable Vercel Analytics + Speed Insights
- [ ] Submit sitemap to Google Search Console

---

## 10. Motion System (reference — implementation detail, content unaffected)

| Element | Motion |
|---|---|
| Every section on scroll | Fade + 28px slide-up, staggered children, once per element |
| Navbar on scroll | Background opacity/blur transition |
| Hero status dot | Slow 2s pulse |
| Project cards | `whileHover={{ y: -5 }}` |
| Snapshot strip frames | Subtle hover scale + rotate correction, desktop only |
| Mobile nav | Slide-down via `AnimatePresence` |
| Mouse parallax on snapshot strip | Gated behind `prefers-reduced-motion` and viewport width ≥ 680px |

No scroll-jacking, no 3D tilt, no cursor-follower effects, no autoplay video, no glitch/scramble text intros.

---

## 11. Commands Reference

```bash
npx create-next-app@latest portfolio --typescript --eslint --app --import-alias="@/*" --tailwind
npm install motion lucide-react clsx tailwind-merge
npm install -D prettier eslint-config-prettier @types/node

npm run dev
npm run build
npx tsc --noEmit
npm run lint
npx prettier --write .

npm i -g vercel
vercel --prod
```
