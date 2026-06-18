# 🎨 Portfolio Design & Build — Complete Master Guide
> **Primary Reference:** Vishesh Patel — https://www.wallofportfolios.in/portfolios/vishesh-patel/
> **Secondary Reference:** Michelle Chiu — https://www.wallofportfolios.in/portfolios/michelle-chiu/
> **Goal:** Build a warm, editorial, personality-forward portfolio in the same aesthetic as Vishesh Patel

---

## 📋 Table of Contents

1. [Design Research — Vishesh Patel](#1-design-research--vishesh-patel)
2. [Design Research — Michelle Chiu](#2-design-research--michelle-chiu)
3. [Comparison & What to Borrow](#3-comparison--what-to-borrow)
4. [Your Complete Design System](#4-your-complete-design-system)
5. [Typography System](#5-typography-system)
6. [Color System](#6-color-system)
7. [Spacing & Grid System](#7-spacing--grid-system)
8. [Page Architecture & Section Map](#8-page-architecture--section-map)
9. [Component Blueprints](#9-component-blueprints)
10. [Animation & Interaction System](#10-animation--interaction-system)
11. [Full HTML Structure](#11-full-html-structure)
12. [Full CSS Architecture](#12-full-css-architecture)
13. [Responsive Design Rules](#13-responsive-design-rules)
14. [File & Folder Structure](#14-file--folder-structure)
15. [Step-by-Step Build Order](#15-step-by-step-build-order)
16. [Google Fonts Setup](#16-google-fonts-setup)
17. [Performance Checklist](#17-performance-checklist)
18. [SEO & Meta Tags](#18-seo--meta-tags)
19. [Accessibility Rules](#19-accessibility-rules)
20. [Content Copywriting Guide](#20-content-copywriting-guide)

---

## 1. Design Research — Vishesh Patel

### 1.1 Visual Overview

| Attribute         | Detail                                                        |
|-------------------|---------------------------------------------------------------|
| Overall Vibe      | Warm · Editorial · Personality-rich · Minimalist but playful |
| Theme             | Light (cream/warm white)                                      |
| Mode              | NOT dark mode — warm off-white light                          |
| Layout Style      | Centered, single column, full viewport sections               |
| Scroll Behavior   | Standard vertical scroll                                      |
| Navbar Style      | Floating dark pill, centered at top                           |
| Hero Type         | Pure typography — no background image                         |
| Unique Element    | Rotated polaroid photo cluster with floating pill badges      |

---

### 1.2 Color Palette (Exact Analysis)

| Token Name          | Hex Value     | Where Used                                      |
|---------------------|---------------|-------------------------------------------------|
| `--cream`           | `#EDE8E3`     | Main page background                            |
| `--cream-darker`    | `#E5DED7`     | Card backgrounds, subtle contrast areas         |
| `--near-black`      | `#1A1A1A`     | All body text, navbar background                |
| `--pure-white`      | `#FFFFFF`     | Navbar text, photo borders, button text         |
| `--accent-orange`   | `#E05C2A`     | Italic headline word, Resume button, links      |
| `--accent-hover`    | `#C94E1F`     | Hover state of orange elements                  |
| `--badge-blue`      | `#1A7FE8`     | "Between Projects" pill badge                   |
| `--badge-grey`      | `#F0F0F0`     | "WIP" pill badge background                     |
| `--badge-grey-text` | `#555555`     | "WIP" pill badge text                           |
| `--border-light`    | `#E0D9D1`     | Subtle dividers, card borders                   |
| `--shadow-soft`     | rgba(0,0,0,0.08) | Card shadows, photo shadows                 |
| `--shadow-medium`   | rgba(0,0,0,0.15) | Navbar shadow, hover shadows                |

---

### 1.3 Typography Analysis

#### Navbar Brand Name
- Style: **Lowercase, monospace-like or custom script**
- Text: `visheshpatel` (no space, all lowercase)
- Color: White on dark background
- Weight: Regular (400) or Medium (500)
- Size: ~16–18px

#### Hero Greeting Line
- Text: `Hey there 🤌 I am Vishesh Patel`
- Font: Clean sans-serif
- Weight: 400 (regular)
- Size: ~18–20px
- Color: `#555555` (medium grey)
- Letter spacing: +0.02em

#### Hero Main Headline
- Font: **Serif display** (Playfair Display or similar)
- Weight: **700–800** (bold to extra-bold)
- Size: ~80px–100px on desktop
- Color: `#1A1A1A`
- Line height: 1.1 (tight)
- The word **"Product designer"** is in:
  - Italic style
  - Color: `#E05C2A` (accent orange)
  - Same font family but italic variant

#### Nav Links
- Font: Sans-serif
- Weight: 400–500
- Size: 15px
- Color: `#FFFFFF`
- No underlines
- Hover: slight opacity change or underline fade-in

#### Resume Button
- Font: Sans-serif, medium weight (500)
- Size: 14–15px
- Contains icon: ⬇ or download icon

#### Section Labels / Subtitles
- Font: Sans-serif
- Weight: 400–500
- Size: 15–16px
- Color: `#777777`

---

### 1.4 Navbar Deep Dive

```
Shape:     Pill (border-radius: 999px)
Position:  Fixed, top 20px, horizontally centered
Width:     Auto (content-based) ~700–800px
Padding:   12px 24px
BG Color:  #1A1A1A
Shadow:    0 8px 32px rgba(0,0,0,0.2)
Z-index:   1000

Left:      Avatar image (circle, 32px) + Brand name text
Center:    Nav links: Work | About | Contact
Right:     Resume button (orange pill)
```

**Avatar in Navbar:**
- Size: 32×32px circle
- Border: 2px solid rgba(255,255,255,0.3)
- Displays the same photo as the profile

**Resume Button in Navbar:**
- Background: `#E05C2A`
- Color: `#FFFFFF`
- Border-radius: 999px
- Padding: 8px 18px
- Hover: background darkens to `#C94E1F`
- Has download arrow icon on the left

---

### 1.5 Hero Section Deep Dive

```
Layout:     Centered, full viewport height (100vh)
Background: #EDE8E3 (cream)
Alignment:  text-align: center

Elements (top to bottom):
  1. Greeting line — small, grey, emoji included
  2. H1 headline — massive, serif, with italic accent
  3. (Optional) Scroll indicator or arrow

Vertical centering method:
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  min-height: 100vh
  padding-top: 80px  ← accounts for fixed navbar
```

**The Italic Accent Technique:**
```html
<h1>
  A <em class="accent">Product designer</em> turning product
  complexity into simple experiences.
</h1>
```
```css
.accent {
  font-style: italic;
  color: var(--accent-orange); /* #E05C2A */
  font-family: 'Playfair Display', serif;
}
```

---

### 1.6 Photo Cluster Section Deep Dive

```
Layout:    Centered, relative-positioned container
Height:    ~300px
Width:     ~450px (centered)

3 Photos stacked with rotation:
  Photo 1: rotate(-8deg), z-index 1, left position
  Photo 2: rotate(2deg),  z-index 3, center (slightly forward)
  Photo 3: rotate(6deg),  z-index 2, right position

Each photo:
  - Size: ~200×150px approx
  - Border: 5px solid white
  - Border-radius: 8px
  - Box-shadow: 0 12px 40px rgba(0,0,0,0.18)
  - Object-fit: cover

Floating pill badges:
  - "Between Projects" — blue pill, top-left area
  - "WIP" — grey pill, top-right area
  - Positioned absolute above the cluster

Section above:
  - Small sticker/emoji avatar (sticker-like character image)
  - Text: "Sneak peak of my works"
```

---

### 1.7 Work/Projects Section

- Each project = a large card
- Card has a big preview screenshot or mockup
- Below image: project name, tags, short description
- CTA: "View Case Study →" or similar

**Card Anatomy:**
```
┌─────────────────────────────────────────┐
│                                         │
│   [Full-width project screenshot/       │
│    mockup image — rounded corners]      │
│                                         │
│   ─────────────────────────────────     │
│   [Tag: UX Design] [Tag: Mobile]        │
│   Project Title (large, serif)          │
│   Short description (1–2 sentences)     │
│   [View Case Study →]                   │
└─────────────────────────────────────────┘
```

---

### 1.8 About Section

- Short bio paragraph
- Skills / tools listed
- Maybe a second photo
- Links to LinkedIn, Dribbble, Behance etc.

---

### 1.9 Contact Section

- Big headline: "Let's work together" or "Say hello"
- Email address as a large link
- Social media icons
- Optional: small contact form

---

## 2. Design Research — Michelle Chiu

### 2.1 Visual Overview

| Attribute         | Detail                                              |
|-------------------|-----------------------------------------------------|
| Overall Vibe      | Professional · Clean · Content-heavy · Work-first  |
| Theme             | Pure white                                          |
| Layout Style      | Left sidebar + right main content                   |
| Text density      | Very high — long bios, awards, client lists         |
| Photo usage       | Project screenshots in 2×N grid                    |
| Personality       | Low — the work speaks                               |

---

### 2.2 Color Palette

| Token              | Hex         | Used For                             |
|--------------------|-------------|--------------------------------------|
| Page background    | `#FFFFFF`   | Entire page                          |
| Headline text      | `#000000`   | H1, H2 titles                        |
| Body text          | `#333333`   | Paragraphs, bio text                 |
| Light grey text    | `#777777`   | Username, location, meta info        |
| Link color         | `#0066CC`   | Hyperlinks                           |
| Divider            | `#E5E5E5`   | Horizontal rules between projects   |
| Open to Work badge | `#0066CC`   | Blue badge icon                      |

---

### 2.3 Typography

| Element            | Font          | Weight | Size     |
|--------------------|---------------|--------|----------|
| Main headline      | Sans-serif    | 700    | ~40–48px |
| Bio text           | Sans-serif    | 400    | 14–15px  |
| Project title      | Sans-serif    | 700    | ~28–32px |
| Skills list        | Sans-serif    | 400    | 13–14px  |
| Links              | Sans-serif    | 400    | 14px     |

**Fonts used:** Likely `Inter` or `DM Sans`

---

### 2.4 Layout Structure

**Sidebar (Fixed Left Panel — 260px):**
- Profile photo circle
- Open to Work status
- Name (bold, large)
- Username + location (small, grey)
- Job title (bold)
- Experience years
- Company logos (color icons)
- Message button (black pill)
- Save/Bookmark button (outline circle)
- Section tabs: Profile | Portfolio

**Main Content Area (Scrollable):**
- Hero intro: "Hi, I'm Michelle Chiu" + bio
- Links row: Resumé · LinkedIn · X · Are.na · Medium · Goodreads
- Clients/Experience list
- Awards list (with links)
- Project sections (alternating text + image grid)

**Right Column (Images):**
- Per project: 2-column photo grid
- Photos are rounded (8px border-radius)
- No decorative frames — clean screenshots

---

## 3. Comparison & What to Borrow

| Feature              | Vishesh (borrow)                       | Michelle (borrow)                    |
|----------------------|----------------------------------------|--------------------------------------|
| Background color     | ✅ `#EDE8E3` cream                     | ❌ white is too cold                 |
| Typography style     | ✅ Serif display headline              | ❌ all sans is too corporate         |
| Accent color         | ✅ `#E05C2A` orange-red                | ❌ blue links are generic            |
| Navbar               | ✅ Floating dark pill                  | ❌ sidebar tabs are platform-specific|
| Photo treatment      | ✅ Rotated polaroid cluster            | ❌ grid is functional but cold       |
| Project display      | ✅ Large image card                    | ✅ Also borrow 2-col grid option     |
| Content density      | ❌ Vishesh is sparse                   | ✅ Borrow the awards/links section   |
| Links row            | ❌ Not visible                         | ✅ Borrow the links row (LinkedIn etc)|
| Skills listing       | ❌ Not visible                         | ✅ Borrow the skills text list       |

**Verdict:** Build primarily like Vishesh but add Michelle's content structure (links row, skills, awards, client list) as text within the layout.

---

## 4. Your Complete Design System

### 4.1 Design Principles
1. **Warm, not cold** — cream over white
2. **Editorial, not corporate** — serif headline, personality words
3. **Playful, not childish** — the photo cluster, badges, emoji
4. **Minimal, not empty** — every section has purpose
5. **One accent color** — orange-red, used sparingly but powerfully

---

## 5. Typography System

### 5.1 Font Stack

```css
/* Import in <head> */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
```

```css
:root {
  /* Display font — for hero headline */
  --font-display: 'Playfair Display', Georgia, serif;

  /* Body font — for everything else */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Mono font — for brand name in navbar */
  --font-mono: 'Space Mono', 'Courier New', monospace;
}
```

### 5.2 Type Scale

```css
:root {
  /* Type scale — desktop */
  --text-xs:   12px;   /* tiny labels, meta info */
  --text-sm:   14px;   /* small body, tags */
  --text-base: 16px;   /* default body */
  --text-md:   18px;   /* greeting line, subtitles */
  --text-lg:   22px;   /* section labels */
  --text-xl:   28px;   /* card titles */
  --text-2xl:  36px;   /* section headings */
  --text-3xl:  48px;   /* sub-hero text */
  --text-hero: 80px;   /* main hero headline */

  /* Line heights */
  --leading-tight:  1.1;   /* hero headline */
  --leading-snug:   1.3;   /* section headings */
  --leading-normal: 1.6;   /* body text */
  --leading-loose:  1.8;   /* small dense text */

  /* Letter spacing */
  --tracking-tight:  -0.02em;   /* large headlines */
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;   /* small caps, labels */
  --tracking-wider:   0.1em;    /* very small labels */
}
```

### 5.3 Type Utilities (Applied)

```css
.display-headline {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--near-black);
}

.display-headline em {
  font-style: italic;
  color: var(--accent-orange);
}

.greeting-text {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: 400;
  color: #777777;
  letter-spacing: var(--tracking-wide);
}

.section-heading {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--near-black);
  line-height: var(--leading-snug);
}

.card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--near-black);
}

.body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: #4A4A4A;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
}

.brand-name {
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 400;
  color: #FFFFFF;
  letter-spacing: -0.01em;
}

.tag-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
```

---

## 6. Color System

### 6.1 Core Palette

```css
:root {
  /* ── Backgrounds ── */
  --bg-page:        #EDE8E3;   /* main warm cream */
  --bg-card:        #E6DFD8;   /* card background (slightly darker) */
  --bg-card-hover:  #DDD5CC;   /* card on hover */
  --bg-dark:        #1A1A1A;   /* navbar, dark elements */
  --bg-dark-hover:  #2A2A2A;   /* dark element hover */
  --bg-white:       #FFFFFF;   /* photo frames, contrast areas */

  /* ── Text ── */
  --text-primary:   #1A1A1A;   /* main body text */
  --text-secondary: #555555;   /* subdued text */
  --text-tertiary:  #888888;   /* very subdued, meta info */
  --text-white:     #FFFFFF;   /* text on dark backgrounds */
  --text-white-dim: rgba(255,255,255,0.7); /* dimmed white */

  /* ── Accent ── */
  --accent:         #E05C2A;   /* primary orange-red accent */
  --accent-hover:   #C94E1F;   /* accent hover (darker) */
  --accent-light:   #F2CBB8;   /* very light accent tint */
  --accent-bg:      rgba(224,92,42,0.08); /* accent tint background */

  /* ── Badges / Tags ── */
  --badge-blue:     #1A7FE8;   /* blue badge background */
  --badge-blue-text:#FFFFFF;   /* blue badge text */
  --badge-grey:     #F0EDE9;   /* grey badge background */
  --badge-grey-text:#555555;   /* grey badge text */
  --badge-dark:     #1A1A1A;   /* dark badge background */
  --badge-dark-text:#FFFFFF;   /* dark badge text */

  /* ── Borders & Dividers ── */
  --border-light:   #E0D9D1;   /* subtle borders */
  --border-medium:  #C8BEB4;   /* visible borders */
  --divider:        rgba(26,26,26,0.08); /* section dividers */

  /* ── Shadows ── */
  --shadow-xs:  0 2px 8px rgba(0,0,0,0.06);
  --shadow-sm:  0 4px 16px rgba(0,0,0,0.08);
  --shadow-md:  0 8px 32px rgba(0,0,0,0.12);
  --shadow-lg:  0 16px 48px rgba(0,0,0,0.16);
  --shadow-xl:  0 24px 64px rgba(0,0,0,0.20);

  /* Photo-specific shadows */
  --shadow-photo: 0 12px 40px rgba(0,0,0,0.18);
  --shadow-nav:   0 8px 32px rgba(0,0,0,0.25);
}
```

### 6.2 Color Usage Rules

| Rule                                  | Reason                                          |
|---------------------------------------|-------------------------------------------------|
| Accent color MAX 3 uses per page      | Keeps it impactful, not overwhelming            |
| Never use pure white as page BG       | Too cold — use the cream                        |
| Only use dark navbar against cream BG | Creates contrast without harsh edges            |
| All shadows use warm (brownish) tint  | Matches warm color palette                      |
| Blue badge only for "status" labels   | Reserve for "Between Projects", "Available" etc |

---

## 7. Spacing & Grid System

### 7.1 Base Spacing Scale

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### 7.2 Layout Widths

```css
:root {
  --max-width:        960px;   /* main content max width */
  --max-width-narrow: 720px;   /* hero text max width */
  --max-width-wide:  1200px;   /* wide sections */
  --nav-width:        820px;   /* navbar max width */
  --sidebar-width:    260px;   /* sidebar (Michelle style) */
  --gutter:            24px;   /* page side padding */
}
```

### 7.3 Section Vertical Spacing

```css
.section {
  padding: var(--space-32) var(--gutter);   /* 128px top/bottom */
}

.section-compact {
  padding: var(--space-20) var(--gutter);   /* 80px top/bottom */
}

.section-tight {
  padding: var(--space-12) var(--gutter);   /* 48px top/bottom */
}
```

### 7.4 Grid System

```css
/* 12-column grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

/* Common grid layouts */
.col-full    { grid-column: 1 / -1; }
.col-half    { grid-column: span 6; }
.col-third   { grid-column: span 4; }
.col-quarter { grid-column: span 3; }
.col-two-thirds { grid-column: span 8; }
.col-one-third  { grid-column: span 4; }
```

---

## 8. Page Architecture & Section Map

### 8.1 Full Page Wireframe

```
╔═══════════════════════════════════════════════════════════════╗
║  HEADER / NAVBAR                                              ║
║  ┌─────────────────────────────────────────────────────────┐  ║
║  │ [🧑] visheshpatel    Work  About  Contact  [⬇ Resume]  │  ║
║  └─────────────────────────────────────────────────────────┘  ║
║   (floating dark pill — fixed position, centered, top: 20px)  ║
╠═══════════════════════════════════════════════════════════════╣
║  SECTION 1 — HERO                                             ║
║                                                               ║
║                 Hey there 🤌 I am [Name]                      ║
║                                                               ║
║         A  _Product designer_  turning product                ║
║         complexity into simple experiences.                   ║
║                                                               ║
║              [Scroll down arrow or CTA]                       ║
╠═══════════════════════════════════════════════════════════════╣
║  SECTION 2 — PERSONALITY / PHOTO CLUSTER                      ║
║                                                               ║
║         [WIP badge]          [Between Projects badge]         ║
║                                                               ║
║          ┌──────┐  ┌──────┐  ┌──────┐                        ║
║          │photo1│  │photo2│  │photo3│  ← rotated/fanned      ║
║          └──────┘  └──────┘  └──────┘                        ║
║                                                               ║
║     🕵️ Sneak peak of my works                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  SECTION 3 — SELECTED WORK                                    ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐    ║
║  │         [Large Project Image]                         │    ║
║  │  Tag · Tag   Project Name      [View Case Study →]    │    ║
║  └───────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐    ║
║  │         [Large Project Image]                         │    ║
║  │  Tag · Tag   Project Name      [View Case Study →]    │    ║
║  └───────────────────────────────────────────────────────┘    ║
╠═══════════════════════════════════════════════════════════════╣
║  SECTION 4 — ABOUT ME                                         ║
║                                                               ║
║  [Profile photo]    About / Bio paragraph                     ║
║  (optional)         Skills & tools                            ║
║                     Clients / Companies worked with           ║
║                     [Links: LinkedIn · Dribbble · Behance]    ║
╠═══════════════════════════════════════════════════════════════╣
║  SECTION 5 — CONTACT                                          ║
║                                                               ║
║              Let's work together.                             ║
║              your@email.com                                   ║
║              [LinkedIn] [Twitter] [Dribbble]                  ║
╠═══════════════════════════════════════════════════════════════╣
║  FOOTER                                                       ║
║  Designed & built by [Your Name] · 2025                       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### 8.2 Section-by-Section Breakdown

| # | Section        | Height       | Purpose                              | Key Visual                        |
|---|----------------|--------------|--------------------------------------|-----------------------------------|
| 1 | Navbar         | Fixed 70px   | Navigation & identity                | Dark floating pill                |
| 2 | Hero           | 100vh        | First impression, tagline            | Giant serif headline + accent     |
| 3 | Photo Cluster  | ~500px       | Personality, humanizing element      | Rotated polaroid photos           |
| 4 | Work Teaser    | ~100px       | Bridge to work section               | Sticker + "Sneak peak" text       |
| 5 | Selected Work  | auto         | Showcase 2–4 projects                | Large image cards                 |
| 6 | About          | ~500px       | Background, skills, personality      | Bio + skills + links              |
| 7 | Contact        | ~400px       | Call to action                       | Email link, social icons          |
| 8 | Footer         | ~80px        | Credit, copyright                    | Minimal text                      |

---

## 9. Component Blueprints

### 9.1 Navbar Component

```html
<header class="navbar">
  <nav class="navbar__pill">

    <!-- Left: Avatar + Brand -->
    <div class="navbar__brand">
      <img
        class="navbar__avatar"
        src="./assets/images/avatar.jpg"
        alt="Your Name"
        width="32"
        height="32"
      />
      <span class="navbar__name">yourname</span>
    </div>

    <!-- Center: Nav links -->
    <ul class="navbar__links" role="list">
      <li><a href="#work"    class="navbar__link">Work</a></li>
      <li><a href="#about"   class="navbar__link">About</a></li>
      <li><a href="#contact" class="navbar__link">Contact</a></li>
    </ul>

    <!-- Right: Resume CTA -->
    <a
      href="./assets/resume.pdf"
      class="navbar__resume"
      target="_blank"
      rel="noopener"
      aria-label="Download Resume"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 15l-4-4h3V4h2v7h3l-4 4zm-7 4h14v2H5v-2z"/>
      </svg>
      Resume
    </a>

  </nav>
</header>
```

```css
/* Navbar */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: max-content;
  max-width: calc(100vw - 40px);
}

.navbar__pill {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  background: var(--bg-dark);
  border-radius: 999px;
  padding: 10px 20px;
  box-shadow: var(--shadow-nav);
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.navbar__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255,255,255,0.25);
}

.navbar__name {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-white);
  letter-spacing: -0.01em;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar__link:hover {
  color: var(--text-white);
}

.navbar__resume {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--accent);
  color: var(--text-white);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 999px;
  transition: background 0.2s ease, transform 0.15s ease;
}

.navbar__resume:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}
```

---

### 9.2 Hero Section Component

```html
<section class="hero" id="hero" aria-label="Introduction">
  <div class="hero__container">

    <!-- Greeting line -->
    <p class="hero__greeting">
      Hey there 🤌&nbsp; I am <strong>[Your Name]</strong>
    </p>

    <!-- Main headline -->
    <h1 class="hero__headline">
      A <em class="hero__accent">[Your Role]</em> turning<br>
      [tagline — what you do]<br>
      into [result you create].
    </h1>

    <!-- Optional CTA -->
    <div class="hero__cta">
      <a href="#work" class="btn btn--primary">See my work</a>
      <a href="#contact" class="btn btn--ghost">Get in touch</a>
    </div>

  </div>
</section>
```

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-page);
  padding: 100px var(--gutter) var(--space-20);
}

.hero__container {
  max-width: var(--max-width-narrow);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.hero__greeting {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: 400;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  margin: 0;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  margin: 0;
}

.hero__accent {
  font-style: italic;
  color: var(--accent);
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
}
```

---

### 9.3 Button Components

```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">See my work</a>

<!-- Ghost Button (outline) -->
<a href="#" class="btn btn--ghost">Get in touch</a>

<!-- Dark Button -->
<a href="#" class="btn btn--dark">View Case Study →</a>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background: var(--accent);
  color: var(--text-white);
  border-color: var(--accent);
}
.btn--primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(224,92,42,0.3);
}

.btn--ghost {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-medium);
}
.btn--ghost:hover {
  background: var(--bg-card);
  transform: translateY(-2px);
}

.btn--dark {
  background: var(--bg-dark);
  color: var(--text-white);
  border-color: var(--bg-dark);
}
.btn--dark:hover {
  background: var(--bg-dark-hover);
  transform: translateY(-2px);
}
```

---

### 9.4 Photo Cluster Component

```html
<section class="cluster-section" aria-label="Personal photos">
  <div class="cluster-wrapper">

    <!-- Floating badges -->
    <span class="badge badge--blue cluster__badge cluster__badge--left">
      Between Projects
    </span>
    <span class="badge badge--grey cluster__badge cluster__badge--right">
      WIP
    </span>

    <!-- Photo cluster -->
    <div class="photo-cluster">
      <div class="photo-frame photo-frame--1">
        <img src="./assets/images/personal-1.jpg" alt="Chess game" loading="lazy" />
      </div>
      <div class="photo-frame photo-frame--2">
        <img src="./assets/images/personal-2.jpg" alt="Snooker" loading="lazy" />
      </div>
      <div class="photo-frame photo-frame--3">
        <img src="./assets/images/personal-3.jpg" alt="Workspace" loading="lazy" />
      </div>
    </div>

  </div>

  <!-- Work teaser text -->
  <div class="work-teaser">
    <img
      class="work-teaser__sticker"
      src="./assets/images/sticker.png"
      alt=""
      aria-hidden="true"
    />
    <p class="work-teaser__text">Sneak peak of my works</p>
  </div>
</section>
```

```css
.cluster-section {
  padding: var(--space-20) var(--gutter);
  background: var(--bg-page);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-20);
}

.cluster-wrapper {
  position: relative;
  width: 460px;
  height: 280px;
}

.photo-cluster {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Individual photo frames */
.photo-frame {
  position: absolute;
  border: 5px solid var(--bg-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-photo);
  transition: transform 0.4s ease;
}

.photo-frame img {
  width: 180px;
  height: 140px;
  object-fit: cover;
  display: block;
}

.photo-frame--1 {
  transform: rotate(-8deg);
  left: 0;
  top: 20px;
  z-index: 1;
}
.photo-frame--1:hover { transform: rotate(-4deg) scale(1.05); z-index: 10; }

.photo-frame--2 {
  transform: rotate(2deg);
  left: 140px;
  top: 0;
  z-index: 3;
}
.photo-frame--2:hover { transform: rotate(2deg) scale(1.05); z-index: 10; }

.photo-frame--3 {
  transform: rotate(7deg);
  left: 270px;
  top: 30px;
  z-index: 2;
}
.photo-frame--3:hover { transform: rotate(3deg) scale(1.05); z-index: 10; }

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
}

.badge--blue {
  background: var(--badge-blue);
  color: var(--badge-blue-text);
}

.badge--grey {
  background: var(--badge-grey);
  color: var(--badge-grey-text);
  border: 1px solid var(--border-light);
}

.cluster__badge {
  position: absolute;
}
.cluster__badge--left  { top: -32px; left: 40px; }
.cluster__badge--right { top: -32px; right: 40px; }

/* Work teaser */
.work-teaser {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.work-teaser__sticker {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.work-teaser__text {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0;
}
```

---

### 9.5 Project Card Component

```html
<article class="project-card" id="project-1">
  <!-- Full-width preview image -->
  <a href="./projects/project-name.html" class="project-card__image-link">
    <div class="project-card__image-wrapper">
      <img
        src="./assets/images/project-1-cover.jpg"
        alt="Project Name — UX case study"
        class="project-card__image"
        loading="lazy"
      />
    </div>
  </a>

  <!-- Card body -->
  <div class="project-card__body">

    <!-- Tags row -->
    <div class="project-card__tags">
      <span class="tag">UX Design</span>
      <span class="tag">Mobile</span>
      <span class="tag">2024</span>
    </div>

    <!-- Title + CTA row -->
    <div class="project-card__header">
      <h3 class="project-card__title">Project Name</h3>
      <a href="./projects/project-name.html" class="btn btn--dark btn--sm">
        View Case Study →
      </a>
    </div>

    <!-- Short description -->
    <p class="project-card__description">
      Short one or two sentence description of what this project was about
      and what problem it solved.
    </p>

  </div>
</article>
```

```css
.project-card {
  background: var(--bg-card);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-card__image-wrapper {
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-card__image {
  transform: scale(1.03);
}

.project-card__body {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  padding: 4px 10px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.project-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.2;
}

.project-card__description {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

.btn--sm {
  padding: 8px 18px;
  font-size: 13px;
  white-space: nowrap;
}
```

---

### 9.6 About Section Component

```html
<section class="about" id="about" aria-label="About me">
  <div class="about__container">

    <div class="about__content">
      <!-- Label -->
      <p class="about__label">About</p>

      <!-- Heading -->
      <h2 class="about__heading">
        Designing at the intersection of<br>
        <em class="hero__accent">form and function.</em>
      </h2>

      <!-- Bio -->
      <p class="about__bio">
        I'm a [Role] based in [City, Country]. I've spent [X] years crafting
        [what you do]. I believe [your design philosophy]. When I'm not designing,
        you'll find me [personal hobby].
      </p>

      <!-- Skills -->
      <div class="about__skills">
        <p class="about__skills-label">Skills & Tools</p>
        <div class="skills-grid">
          <span class="skill-pill">Figma</span>
          <span class="skill-pill">Prototyping</span>
          <span class="skill-pill">User Research</span>
          <span class="skill-pill">Design Systems</span>
          <span class="skill-pill">HTML / CSS</span>
          <span class="skill-pill">React</span>
        </div>
      </div>

      <!-- Social links -->
      <div class="about__links">
        <a href="#" class="about__social-link">LinkedIn ↗</a>
        <a href="#" class="about__social-link">Dribbble ↗</a>
        <a href="#" class="about__social-link">Behance ↗</a>
        <a href="#" class="about__social-link">Twitter ↗</a>
      </div>
    </div>

    <!-- Optional: Profile photo -->
    <div class="about__image">
      <img
        src="./assets/images/profile-large.jpg"
        alt="Photo of [Your Name]"
        class="about__photo"
      />
    </div>

  </div>
</section>
```

```css
.about {
  padding: var(--space-32) var(--gutter);
  background: var(--bg-page);
}

.about__container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-16);
  align-items: start;
}

.about__label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin: 0 0 var(--space-4);
}

.about__heading {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  line-height: var(--leading-snug);
  margin: 0 0 var(--space-6);
}

.about__bio {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0 0 var(--space-8);
}

.about__skills-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  margin: 0 0 var(--space-3);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.skill-pill {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.skill-pill:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.about__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.about__social-link {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.about__social-link:hover {
  color: var(--accent);
}

.about__photo {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 4 / 5;
}
```

---

### 9.7 Contact Section Component

```html
<section class="contact" id="contact" aria-label="Contact">
  <div class="contact__container">

    <p class="contact__label">Get in touch</p>
    <h2 class="contact__heading">
      Let's work<br><em class="hero__accent">together.</em>
    </h2>
    <p class="contact__sub">
      Open to freelance projects, full-time roles, and collaborations.
    </p>

    <!-- Email CTA -->
    <a href="mailto:your@email.com" class="contact__email">
      your@email.com
    </a>

    <!-- Social icons row -->
    <div class="contact__socials">
      <a href="#" class="contact__social" aria-label="LinkedIn">
        <!-- LinkedIn SVG icon -->
        <svg>...</svg>
      </a>
      <a href="#" class="contact__social" aria-label="Dribbble">
        <!-- Dribbble SVG icon -->
        <svg>...</svg>
      </a>
      <a href="#" class="contact__social" aria-label="Twitter">
        <!-- Twitter SVG icon -->
        <svg>...</svg>
      </a>
    </div>

  </div>
</section>
```

```css
.contact {
  padding: var(--space-32) var(--gutter);
  background: var(--bg-page);
  text-align: center;
}

.contact__container {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.contact__label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin: 0;
}

.contact__heading {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  color: var(--text-primary);
  line-height: var(--leading-tight);
  margin: 0;
}

.contact__sub {
  font-size: var(--text-md);
  color: var(--text-secondary);
  margin: 0;
  max-width: 400px;
}

.contact__email {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 3px solid var(--accent);
  padding-bottom: 4px;
  transition: color 0.2s ease;
}

.contact__email:hover {
  color: var(--accent);
}

.contact__socials {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.contact__social {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.contact__social:hover {
  background: var(--bg-dark);
  color: var(--text-white);
  border-color: var(--bg-dark);
  transform: translateY(-2px);
}
```

---

### 9.8 Footer Component

```html
<footer class="footer" role="contentinfo">
  <div class="footer__container">
    <p class="footer__text">
      Designed & built with ❤️ by <strong>[Your Name]</strong>
    </p>
    <p class="footer__copy">
      © 2025 · All rights reserved
    </p>
  </div>
</footer>
```

```css
.footer {
  padding: var(--space-8) var(--gutter);
  background: var(--bg-dark);
  text-align: center;
}

.footer__container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__text, .footer__copy {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.5);
  margin: 0;
}
```

---

## 10. Animation & Interaction System

### 10.1 Global Transitions

```css
/* Apply to all interactive elements */
*, *::before, *::after {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 10.2 Scroll-Triggered Fade In

```css
/* Elements start invisible */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for groups */
.reveal:nth-child(1) { transition-delay: 0ms;  }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
.reveal:nth-child(4) { transition-delay: 300ms; }
```

```javascript
// Intersection Observer for scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});
```

### 10.3 Photo Cluster Mouse Parallax

```javascript
// Photo cluster follows mouse slightly
const cluster = document.querySelector('.photo-cluster');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  cluster.style.transform = `translate(${x}px, ${y}px)`;
});
```

### 10.4 Navbar Scroll Effect

```javascript
// Navbar gets slightly more opaque on scroll
const navbar = document.querySelector('.navbar__pill');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26,26,26,0.98)';
    navbar.style.backdropFilter = 'blur(12px)';
  } else {
    navbar.style.background = 'var(--bg-dark)';
    navbar.style.backdropFilter = 'none';
  }
});
```

### 10.5 Cursor Highlight (Optional premium touch)

```css
/* Custom cursor dot */
.cursor {
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease, opacity 0.2s ease;
  transform: translate(-50%, -50%);
}

.cursor--large {
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid var(--accent);
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}
```

---

## 11. Full HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[Your Name] — [Role] based in [City]. Crafting [what you do]." />
  <meta name="author" content="[Your Name]" />

  <!-- Open Graph -->
  <meta property="og:title"       content="[Your Name] — Portfolio" />
  <meta property="og:description" content="[Role] turning [tagline]" />
  <meta property="og:image"       content="./assets/images/og-cover.jpg" />
  <meta property="og:url"         content="https://yourdomain.com" />
  <meta property="og:type"        content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="[Your Name] — Portfolio" />
  <meta name="twitter:description" content="[Role] turning [tagline]" />
  <meta name="twitter:image"       content="./assets/images/og-cover.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./assets/favicon.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400&display=swap"
    rel="stylesheet"
  />

  <!-- CSS -->
  <link rel="stylesheet" href="./assets/css/main.css" />

  <title>[Your Name] — [Role] Portfolio</title>
</head>

<body>

  <!-- NAVBAR -->
  <header class="navbar">
    <nav class="navbar__pill" role="navigation" aria-label="Main navigation">
      <div class="navbar__brand">
        <img class="navbar__avatar" src="./assets/images/avatar.jpg" alt="[Your Name]" />
        <span class="navbar__name">[yourname]</span>
      </div>
      <ul class="navbar__links" role="list">
        <li><a href="#work"    class="navbar__link">Work</a></li>
        <li><a href="#about"   class="navbar__link">About</a></li>
        <li><a href="#contact" class="navbar__link">Contact</a></li>
      </ul>
      <a href="./assets/resume.pdf" class="navbar__resume" target="_blank">
        ↓ Resume
      </a>
    </nav>
  </header>

  <main>

    <!-- SECTION 1: HERO -->
    <section class="hero" id="home">
      <div class="hero__container">
        <p class="hero__greeting reveal">Hey there 🤌 &nbsp; I am <strong>[Your Name]</strong></p>
        <h1 class="hero__headline reveal">
          A <em class="hero__accent">[Your Role]</em> turning<br>
          [problem you solve]<br>
          into [result you create].
        </h1>
        <div class="hero__cta reveal">
          <a href="#work"    class="btn btn--primary">See my work</a>
          <a href="#contact" class="btn btn--ghost">Get in touch</a>
        </div>
      </div>
    </section>

    <!-- SECTION 2: PHOTO CLUSTER -->
    <section class="cluster-section" aria-label="Personal photos">
      <div class="cluster-wrapper reveal">
        <span class="badge badge--blue cluster__badge cluster__badge--left">Between Projects</span>
        <span class="badge badge--grey cluster__badge cluster__badge--right">WIP</span>
        <div class="photo-cluster">
          <div class="photo-frame photo-frame--1">
            <img src="./assets/images/personal-1.jpg" alt="Hobby photo 1" loading="lazy" />
          </div>
          <div class="photo-frame photo-frame--2">
            <img src="./assets/images/personal-2.jpg" alt="Hobby photo 2" loading="lazy" />
          </div>
          <div class="photo-frame photo-frame--3">
            <img src="./assets/images/personal-3.jpg" alt="Hobby photo 3" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="work-teaser reveal">
        <img class="work-teaser__sticker" src="./assets/images/sticker.png" alt="" aria-hidden="true" />
        <p class="work-teaser__text">Sneak peak of my works</p>
      </div>
    </section>

    <!-- SECTION 3: SELECTED WORK -->
    <section class="work-section" id="work" aria-label="Selected work">
      <div class="work-section__container">
        <div class="section-header reveal">
          <p class="section-label">Selected Work</p>
          <h2 class="section-heading">Projects I'm proud of</h2>
        </div>
        <div class="projects-list">

          <!-- Project 1 -->
          <article class="project-card reveal">
            <a href="./projects/project-1.html" class="project-card__image-link">
              <div class="project-card__image-wrapper">
                <img src="./assets/images/project-1-cover.jpg" alt="Project 1" class="project-card__image" loading="lazy" />
              </div>
            </a>
            <div class="project-card__body">
              <div class="project-card__tags">
                <span class="tag">UX Design</span>
                <span class="tag">Mobile</span>
                <span class="tag">2024</span>
              </div>
              <div class="project-card__header">
                <h3 class="project-card__title">Project One</h3>
                <a href="./projects/project-1.html" class="btn btn--dark btn--sm">View Case Study →</a>
              </div>
              <p class="project-card__description">
                Brief description of the project and problem it solved.
              </p>
            </div>
          </article>

          <!-- Project 2 -->
          <article class="project-card reveal">
            <!-- ... repeat pattern ... -->
          </article>

        </div>
      </div>
    </section>

    <!-- SECTION 4: ABOUT -->
    <section class="about" id="about">
      <div class="about__container">
        <div class="about__content reveal">
          <p class="about__label">About</p>
          <h2 class="about__heading">
            Designing at the intersection of<br>
            <em class="hero__accent">form and function.</em>
          </h2>
          <p class="about__bio">Your bio paragraph here.</p>
          <div class="about__skills">
            <p class="about__skills-label">Skills & Tools</p>
            <div class="skills-grid">
              <span class="skill-pill">Figma</span>
              <span class="skill-pill">Prototyping</span>
              <span class="skill-pill">User Research</span>
              <span class="skill-pill">HTML / CSS</span>
            </div>
          </div>
          <div class="about__links">
            <a href="#" class="about__social-link">LinkedIn ↗</a>
            <a href="#" class="about__social-link">Dribbble ↗</a>
          </div>
        </div>
        <div class="about__image reveal">
          <img src="./assets/images/profile-large.jpg" alt="[Your Name]" class="about__photo" />
        </div>
      </div>
    </section>

    <!-- SECTION 5: CONTACT -->
    <section class="contact" id="contact">
      <div class="contact__container">
        <p class="contact__label reveal">Get in touch</p>
        <h2 class="contact__heading reveal">
          Let's work<br><em class="hero__accent">together.</em>
        </h2>
        <p class="contact__sub reveal">Open to freelance projects, full-time roles, and collaborations.</p>
        <a href="mailto:your@email.com" class="contact__email reveal">your@email.com</a>
        <div class="contact__socials reveal">
          <a href="#" class="contact__social" aria-label="LinkedIn">🔗</a>
          <a href="#" class="contact__social" aria-label="Twitter">🐦</a>
          <a href="#" class="contact__social" aria-label="Dribbble">🏀</a>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">Designed & built by <strong>[Your Name]</strong></p>
      <p class="footer__copy">© 2025 · All rights reserved</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="./assets/js/main.js"></script>
</body>
</html>
```

---

## 12. Full CSS Architecture

### 12.1 CSS File Organization

```
assets/css/
├── main.css          ← imports all below
├── reset.css         ← normalize / reset
├── tokens.css        ← all CSS variables
├── typography.css    ← font rules
├── layout.css        ← grid, containers
├── components/
│   ├── navbar.css
│   ├── hero.css
│   ├── cluster.css
│   ├── projects.css
│   ├── about.css
│   ├── contact.css
│   ├── footer.css
│   ├── buttons.css
│   └── badges.css
├── animations.css    ← transitions, reveals
└── responsive.css    ← all media queries
```

### 12.2 CSS Reset

```css
/* reset.css */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: var(--leading-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, video {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

ul, ol {
  list-style: none;
}
```

---

## 13. Responsive Design Rules

### 13.1 Breakpoints

```css
/* Mobile first */
:root {
  --bp-sm:  480px;   /* large mobile */
  --bp-md:  768px;   /* tablet */
  --bp-lg:  1024px;  /* small desktop */
  --bp-xl:  1280px;  /* standard desktop */
}

/* Usage */
@media (min-width: 768px)  { /* tablet  */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide    */ }
```

### 13.2 Responsive Rules Per Section

```css
/* ── NAVBAR ── */
@media (max-width: 768px) {
  .navbar__links { display: none; }  /* hide links, show hamburger */
  .navbar__pill  { padding: 8px 16px; }
}

/* ── HERO ── */
@media (max-width: 768px) {
  .hero__headline { font-size: 48px; }
  .hero__greeting { font-size: 16px; }
  .hero__cta { flex-direction: column; }
}

@media (max-width: 480px) {
  .hero__headline { font-size: 36px; }
}

/* ── PHOTO CLUSTER ── */
@media (max-width: 600px) {
  .cluster-wrapper { width: 320px; height: 220px; }
  .photo-frame img { width: 130px; height: 100px; }
  .photo-frame--2 { left: 90px; }
  .photo-frame--3 { left: 180px; }
}

/* ── ABOUT ── */
@media (max-width: 900px) {
  .about__container {
    grid-template-columns: 1fr;
  }
  .about__image {
    order: -1;         /* image above text on mobile */
    max-width: 300px;
    margin: 0 auto;
  }
}

/* ── CONTACT ── */
@media (max-width: 600px) {
  .contact__heading { font-size: 48px; }
  .contact__email   { font-size: 20px; }
}

/* ── FOOTER ── */
@media (max-width: 600px) {
  .footer__container {
    flex-direction: column;
    gap: var(--space-2);
  }
}
```

### 13.3 Mobile Hamburger Menu (Optional)

```html
<!-- In navbar, add: -->
<button class="navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
  <span></span><span></span><span></span>
</button>
```

```css
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 24px;
  cursor: pointer;
}
.navbar__toggle span {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar__toggle { display: flex; }

  .navbar__links {
    display: none;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-dark);
    border-radius: 16px;
    flex-direction: column;
    padding: 16px;
    min-width: 200px;
    gap: var(--space-4);
    box-shadow: var(--shadow-lg);
  }

  .navbar__links.is-open { display: flex; }
}
```

---

## 14. File & Folder Structure

```
portfolio/
│
├── index.html                       ← Main page
│
├── assets/
│   ├── css/
│   │   ├── main.css                 ← Master CSS import file
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   └── components/
│   │       ├── navbar.css
│   │       ├── hero.css
│   │       ├── cluster.css
│   │       ├── projects.css
│   │       ├── about.css
│   │       ├── contact.css
│   │       ├── footer.css
│   │       ├── buttons.css
│   │       └── badges.css
│   │
│   ├── js/
│   │   ├── main.js                  ← All JS: scroll, navbar, cursor
│   │   └── animations.js            ← Intersection observer reveal
│   │
│   ├── images/
│   │   ├── avatar.jpg               ← Small nav profile pic (64×64)
│   │   ├── profile-large.jpg        ← About section photo (400×500)
│   │   ├── personal-1.jpg           ← Cluster photo 1 (hobby)
│   │   ├── personal-2.jpg           ← Cluster photo 2 (hobby)
│   │   ├── personal-3.jpg           ← Cluster photo 3 (hobby)
│   │   ├── sticker.png              ← Peeking sticker/character
│   │   ├── og-cover.jpg             ← Open Graph share image (1200×630)
│   │   ├── project-1-cover.jpg      ← Project 1 hero image
│   │   ├── project-2-cover.jpg      ← Project 2 hero image
│   │   └── project-3-cover.jpg      ← Project 3 hero image
│   │
│   ├── fonts/                       ← (Only if self-hosting fonts)
│   │
│   └── resume.pdf                   ← Downloadable resume
│
├── projects/
│   ├── project-1.html               ← Case study page 1
│   ├── project-2.html               ← Case study page 2
│   └── project-3.html               ← Case study page 3
│
├── favicon.ico
├── favicon.png
├── robots.txt
└── sitemap.xml
```

---

## 15. Step-by-Step Build Order

### Phase 1 — Foundation
- [x] Create folder structure
- [x] Set up `index.html` with semantic HTML skeleton
- [x] Create `reset.css` and `tokens.css`
- [x] Import Google Fonts
- [x] Set background color and base body styles

### Phase 2 — Navbar
- [ ] Build HTML structure for navbar
- [ ] Style the dark pill container
- [ ] Add avatar, brand name, links
- [ ] Style Resume button (orange pill)
- [ ] Add fixed positioning and shadow
- [ ] Add scroll effect via JS

### Phase 3 — Hero Section
- [ ] Build hero HTML with greeting + h1 + CTA
- [ ] Apply Playfair Display to headline
- [ ] Style the italic accent word in orange
- [ ] Center with flexbox, full viewport height
- [ ] Add scroll reveal animation

### Phase 4 — Photo Cluster
- [ ] Gather 3 personal photos
- [ ] Build the cluster container with absolute positioning
- [ ] Rotate each photo with CSS transform
- [ ] Add white borders and shadows
- [ ] Position the floating badge pills
- [ ] Add "Sneak peak" teaser text below

### Phase 5 — Work Section
- [ ] Build 2–4 project cards
- [ ] Add cover images (use placeholder images first)
- [ ] Style cards with hover effects
- [ ] Add tags, title, description, CTA button
- [ ] Add scroll reveal stagger

### Phase 6 — About Section
- [ ] Build two-column layout (text + photo)
- [ ] Write bio paragraph
- [ ] Add skills pills
- [ ] Add social links with bottom border accent
- [ ] Add section label in accent color

### Phase 7 — Contact Section
- [ ] Large heading with italic accent
- [ ] Email as a styled anchor tag
- [ ] Social icon links in circle containers
- [ ] Center everything

### Phase 8 — Footer
- [ ] Dark background footer
- [ ] Name credit + copyright

### Phase 9 — Animations
- [ ] Add `.reveal` class to all key elements
- [ ] Set up Intersection Observer in JS
- [ ] Add photo cluster mouse parallax
- [ ] Test all hover states

### Phase 10 — Responsive
- [ ] Test on 1280px, 1024px, 768px, 375px
- [ ] Fix navbar for mobile (hide links)
- [ ] Shrink hero font size
- [ ] Stack About section vertically
- [ ] Adjust cluster for small screens

### Phase 11 — Polish
- [ ] Add favicon
- [ ] Set all meta tags and OG image
- [ ] Add alt text to all images
- [ ] Check color contrast (WCAG AA)
- [ ] Run Lighthouse audit
- [ ] Minify CSS and JS for production

---

## 16. Google Fonts Setup

### Option A — CDN (Easy, recommended)

```html
<!-- In <head> BEFORE your CSS -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400&display=swap"
  rel="stylesheet"
/>
```

### Option B — Self-Hosted (Faster, GDPR-friendly)

1. Go to https://gwfh.mranftl.com/fonts
2. Download `Playfair Display`, `Inter`, `Space Mono`
3. Place in `./assets/fonts/`
4. Use `@font-face` in CSS

```css
@font-face {
  font-family: 'Playfair Display';
  src: url('../fonts/playfair-display-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Font Loading Strategy

```html
<!-- Preload most critical font -->
<link
  rel="preload"
  href="./assets/fonts/playfair-display-800.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

---

## 17. Performance Checklist

| Optimization                          | How                                                         |
|---------------------------------------|-------------------------------------------------------------|
| Compress all images                   | Use TinyPNG or Squoosh — target < 200KB per image           |
| Use WebP format                       | Convert JPGs to `.webp` for 30–50% smaller files            |
| Lazy load off-screen images           | Add `loading="lazy"` to all img tags below fold             |
| Preconnect to font server             | Already in font link tags                                   |
| Minify CSS                            | Use CSSNano or built-in Vite minification                   |
| Minify JS                             | Use Terser or built-in bundler                              |
| `font-display: swap`                  | Prevents invisible text during font load                    |
| Reduce motion                         | `@media (prefers-reduced-motion: reduce)` already covered   |
| Use `aspect-ratio` on images          | Prevents layout shift (CLS)                                 |
| Serve from CDN                        | Deploy on Netlify or Vercel (automatic CDN)                 |

---

## 18. SEO & Meta Tags

```html
<!-- Primary SEO -->
<title>[Your Name] — [Role] · Portfolio</title>
<meta name="description" content="[Your Name] is a [Role] based in [City]. [One sentence tagline]." />
<meta name="keywords"    content="[role], portfolio, UX design, product design, [city]" />
<meta name="author"      content="[Your Name]" />
<meta name="robots"      content="index, follow" />
<link rel="canonical"    href="https://yourdomain.com" />

<!-- Open Graph (for LinkedIn, Facebook shares) -->
<meta property="og:site_name"   content="[Your Name] Portfolio" />
<meta property="og:title"       content="[Your Name] — [Role]" />
<meta property="og:description" content="[Tagline — what you do and who for]" />
<meta property="og:image"       content="https://yourdomain.com/assets/images/og-cover.jpg" />
<meta property="og:image:width"  content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url"         content="https://yourdomain.com" />
<meta property="og:type"        content="website" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:site"        content="@yourhandle" />
<meta name="twitter:creator"     content="@yourhandle" />
<meta name="twitter:title"       content="[Your Name] — [Role]" />
<meta name="twitter:description" content="[Tagline]" />
<meta name="twitter:image"       content="https://yourdomain.com/assets/images/og-cover.jpg" />

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Your Name]",
  "jobTitle": "[Your Role]",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://linkedin.com/in/yourhandle",
    "https://dribbble.com/yourhandle",
    "https://twitter.com/yourhandle"
  ]
}
</script>
```

---

## 19. Accessibility Rules

| Rule                                   | Implementation                                              |
|----------------------------------------|-------------------------------------------------------------|
| Skip to main content link              | `<a class="skip-link" href="#main">Skip to content</a>`    |
| All images have alt text               | Decorative: `alt=""`, informative: describe the image       |
| Color contrast WCAG AA                 | Text on cream: `#1A1A1A` = 12.8:1 ✅                       |
| Accent orange on cream contrast        | `#E05C2A` on `#EDE8E3` = 4.6:1 ✅ (meets AA)               |
| White on dark navbar                   | `#FFFFFF` on `#1A1A1A` = 21:1 ✅                            |
| Focus states visible                   | `:focus-visible { outline: 2px solid var(--accent); }`     |
| Navbar keyboard accessible             | Tab order follows DOM order                                 |
| Aria labels on icon-only buttons       | `aria-label="Download Resume"` on resume button            |
| Role attributes on nav                 | `role="navigation"` and `role="list"` used                  |
| Motion preference respected            | `prefers-reduced-motion` media query                        |
| Heading hierarchy maintained           | h1 (hero) → h2 (sections) → h3 (cards)                     |

```css
/* Focus style for keyboard users */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: var(--accent);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  z-index: 9999;
}
.skip-link:focus {
  top: 16px;
}
```

---

## 20. Content Copywriting Guide

### Your Tagline Formula (Copy Vishesh's Pattern)

```
Pattern:
  A [italic role] [verb] [problem] into [result].

Vishesh's:
  A Product designer turning product complexity into simple experiences.

Your Formula:
  A [Your Job Title] turning [the hard thing your clients face] into [the value you deliver].

Examples:
  A UI designer turning rough ideas into polished digital products.
  A frontend developer turning complex designs into fast, accessible websites.
  A product designer turning user confusion into delightful clarity.
```

### Greeting Line Options

```
Hey there 🤌  I am [Your Name]
Hi there 👋  I'm [Your Name]
Hello, I'm [Your Name] 🙂
```

### Work Section Headline Options

```
Projects I'm proud of
Selected work
Things I've built
Work that matters
```

### About Section Headline Formula

```
Pattern: [What you do] at the intersection of [value1] and [value2].

Examples:
  Designing at the intersection of form and function.
  Building at the intersection of code and creativity.
  Creating at the intersection of strategy and aesthetics.
```

### Contact Section Headline Options

```
Let's work together.
Say hello.
Let's create something.
Got a project in mind?
```

### Your Bio Template

```
I'm a [Role] based in [City, Country].
I've spent [X] years [doing what — e.g., crafting digital experiences
for startups and agencies].

I believe [your core design philosophy — e.g., great design isn't
just beautiful, it solves real problems].

Currently [status — open to work / at Company X].
Previously worked with [2–3 notable clients or companies].

When I'm not [working], you'll find me [hobby 1] or [hobby 2].
```

---

## 🏁 Quick Start Summary

### The 5 Things That Make Vishesh's Portfolio Work

1. **Warm cream background** `#EDE8E3` — makes everything feel premium and human
2. **One bold accent color** `#E05C2A` — used sparingly on the MOST important words
3. **Huge serif italic headline** — the italic + color combo is the single strongest visual element
4. **The photo cluster** — makes it feel personal and human, not corporate
5. **Dark floating pill navbar** — creates strong contrast without a full dark mode

### Your Minimum Viable Portfolio (MVP)

If you want to launch fast, just build:
1. ✅ Navbar (dark pill)
2. ✅ Hero (big serif headline + accent)
3. ✅ 2–3 Project cards
4. ✅ Contact section (email + social)

Add photo cluster, about section, animations later.

---

*Document created: June 2025*
*Reference: Vishesh Patel (wallofportfolios.in) + Michelle Chiu (wallofportfolios.in)*
