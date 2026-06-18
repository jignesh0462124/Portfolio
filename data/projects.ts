import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "cracklepdf",
    title: "CracklePDF",
    shortTitle: "CracklePDF",
    tagline: "An all-in-one PDF toolkit, built natively for the browser and Android",
    meta: "2024 - Present - Indie Developer & Designer - Chrome Extension, Android",
    summary:
      "An all-in-one PDF toolkit built natively for the browser and Android - merge, convert, compress, and annotate PDFs without uploading a single file anywhere. Shipped as both a Chrome Web Store extension and a native Android app, with a consistent dark, minimal design system across both.",
    year: "2024 - Present",
    tags: ["Chrome Extension", "Android", "Product"],
    disciplines: ["JavaScript", "Chrome Extensions API", "Android", "Next.js", "Tailwind CSS", "GSAP", "PostHog"],
    featured: true,
    gradient: "linear-gradient(135deg, #E05C2A 0%, #f59e0b 60%, #ef4444 100%)",
    visualLabel: "CracklePDF",
    visuals: [
      { label: "Offline tools", icon: "file", gradient: "linear-gradient(135deg,#E05C2A,#f59e0b)" },
      { label: "Merge", icon: "merge", gradient: "linear-gradient(135deg,#c84e22,#E05C2A)" },
      { label: "Compliance", icon: "shield", gradient: "linear-gradient(135deg,#111827,#374151)" },
      { label: "Android", icon: "phone", gradient: "linear-gradient(135deg,#1A1A1A,#444)" }
    ],
    metrics: [
      { value: "2", label: "native surfaces" },
      { value: "522", label: "dependency graph nodes audited" },
      { value: "62", label: "files reviewed in cleanup" }
    ],
    body: [
      "Most online PDF tools require uploading your file to someone else's server, which is a real problem for anyone handling sensitive or confidential documents.",
      "CracklePDF ships as two native surfaces: a Chrome Web Store extension and an Android app, both built around the same dark, minimal design system."
    ],
    caseStudy: [
      {
        heading: "Challenge",
        content: [
          "Most online PDF tools require uploading your file to someone else's server - a real problem for anyone handling sensitive or confidential documents, and a needless privacy risk for everyday use.",
          "The goal was to build a PDF toolkit that does everything entirely offline, in the browser or on-device, with no file ever leaving the user's machine - while still feeling fast and complete enough to replace the upload-based tools people already use."
        ]
      },
      {
        heading: "Approach",
        content: [
          "CracklePDF ships as two native surfaces: a Chrome Web Store extension and an Android app, both built around the same dark, minimal design system so the experience feels consistent regardless of platform.",
          "Every operation - merge, split, compress, convert, annotate - runs locally. On the extension side, the build is structured to pass Chrome Web Store's strict review process, which meant treating manifest correctness, bundled dependency hygiene, and privacy disclosures as first-class engineering work."
        ]
      },
      {
        heading: "Decisions",
        content: [
          "Offline-first architecture - no file upload, ever, even for advanced operations - was treated as a non-negotiable constraint, not a feature.",
          "When a Chrome Web Store review flagged a hard-coded CDN URL inside a bundled vendor library, the fix was traced to the actual vendored file rather than patched around.",
          "Ran a full dead-code audit using a static dependency graph before cleanup, favoring a conservative grep-verified process over aggressive automated deletion."
        ]
      },
      {
        heading: "Outcome",
        content: [
          "A privacy-respecting PDF toolkit that passed Chrome Web Store compliance review after a structured root-cause fix, ships consistently across Chrome and Android, and is actively maintained with a documented cleanup process behind it."
        ]
      }
    ],
    tools: ["JavaScript", "Chrome Extensions API", "Android", "Next.js", "Tailwind CSS", "GSAP", "PostHog"]
  },
  {
    slug: "sih-judge-portal",
    title: "SIH Judge Evaluation Portal",
    shortTitle: "SIH Judge Portal",
    tagline: "Production-grade judging infrastructure for a 185-team hackathon",
    meta: "Sept 2025 - Full-Stack Developer, GDGOC GHRCE - PHP, SQL, Hostinger",
    summary:
      "A production-grade evaluation system built for Smart India Hackathon's internal rounds - handling real-time scoring across 185 teams and 55 judges, across multiple rooms and evaluation phases, without a single scoring conflict.",
    year: "Sept 2025",
    tags: ["Full-Stack", "PHP", "Hackathon Infra"],
    disciplines: ["PHP", "SQL", "Hostinger", "HTML5", "CSS3"],
    featured: true,
    gradient: "linear-gradient(135deg, #4f46e5 0%, #1A7FE8 55%, #06b6d4 100%)",
    visualLabel: "SIH Judge Evaluation Portal",
    visuals: [
      { label: "185 teams", icon: "users", gradient: "linear-gradient(135deg,#4f46e5,#1A7FE8)" },
      { label: "55 judges", icon: "gavel", gradient: "linear-gradient(135deg,#0ea5e9,#06b6d4)" },
      { label: "Scoring", icon: "chart", gradient: "linear-gradient(135deg,#1A1A1A,#374151)" },
      { label: "SQL core", icon: "database", gradient: "linear-gradient(135deg,#E05C2A,#f59e0b)" }
    ],
    metrics: [
      { value: "185", label: "teams evaluated" },
      { value: "55", label: "judges scoring live" },
      { value: "0", label: "reported scoring conflicts" }
    ],
    body: [
      "Smart India Hackathon's internal college round needed a live evaluation system for 185 teams being scored by 55 judges across multiple rooms.",
      "The portal ran live for the full duration of the event with no data loss or scoring conflicts reported."
    ],
    caseStudy: [
      {
        heading: "Challenge",
        content: [
          "Smart India Hackathon's internal college round needed a live evaluation system for 185 teams being scored by 55 judges, spread across multiple rooms and running through multiple evaluation phases simultaneously.",
          "The system had to handle concurrent writes from many judges at once with zero tolerance for data loss, scoring conflicts, or downtime during a live, time-boxed event."
        ]
      },
      {
        heading: "Approach",
        content: [
          "Built and deployed a structured, multi-phase scoring portal on PHP and SQL, hosted on Hostinger.",
          "Rather than free-form scoring inputs, the UI presented judges with structured scoring matrices for each evaluation phase, reducing input errors and speeding up the time it took each judge to score a team."
        ]
      },
      {
        heading: "Decisions",
        content: [
          "Structured scoring matrices traded a small amount of flexibility for a large reduction in judge error and scoring time.",
          "A single source-of-truth database for all rooms and phases eliminated the possibility of scoring conflicts between rooms evaluating the same team.",
          "The schema and queries were optimized for many judges submitting scores concurrently in short bursts."
        ]
      },
      {
        heading: "Outcome",
        content: [
          "The portal ran live for the full duration of the event, correctly handling real-time scoring across 185 teams and 55 judges across multiple rooms and evaluation phases, with no data loss or scoring conflicts reported."
        ]
      }
    ],
    tools: ["PHP", "SQL", "Hostinger", "HTML5", "CSS3"]
  },
  {
    slug: "developer-the-explorer",
    title: "Developer-The-Explorer Ticketing Platform",
    shortTitle: "Developer-The-Explorer",
    tagline: "A live, mobile-first ticketing platform with real payment integration",
    meta: "Nov 2025 - Dec 2025 - Full-Stack Developer, GDGOC GHRCE - React.js, Supabase, Razorpay",
    summary:
      "A mobile-first event ticketing platform with secure Razorpay payment integration - engineered for a live camp event, handling real bookings and real payments with webhook-driven payment state and automated email confirmations.",
    year: "Nov 2025 - Dec 2025",
    tags: ["React", "Payments", "Full-Stack"],
    disciplines: ["React.js", "JavaScript", "Supabase", "PostgreSQL", "Netlify", "Razorpay", "Resend"],
    featured: true,
    gradient: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)",
    visualLabel: "Developer-The-Explorer Ticketing",
    visuals: [
      { label: "Mobile flow", icon: "phone", gradient: "linear-gradient(135deg,#059669,#047857)" },
      { label: "Payments", icon: "card", gradient: "linear-gradient(135deg,#0ea5e9,#0284c7)" },
      { label: "Webhooks", icon: "server", gradient: "linear-gradient(135deg,#1A1A1A,#374151)" },
      { label: "Emails", icon: "mail", gradient: "linear-gradient(135deg,#E05C2A,#f59e0b)" }
    ],
    metrics: [
      { value: "Live", label: "event registration window" },
      { value: "Real", label: "Razorpay payments" },
      { value: "0", label: "reported payment failures" }
    ],
    body: [
      "A camp-style event needed an online ticketing platform that could take real payments from real people, on real money rails.",
      "The platform shipped and ran live with webhook-driven payment state and automated confirmation emails delivered via Resend."
    ],
    caseStudy: [
      {
        heading: "Challenge",
        content: [
          "A camp-style event needed an online ticketing platform that could take real payments from real people, on real money rails, with a booking flow that had to work cleanly on mobile.",
          "The hard constraint was payment-state correctness: a booking flow that looks successful but silently fails the payment, or double-charges someone, is worse than no platform at all."
        ]
      },
      {
        heading: "Approach",
        content: [
          "Engineered a fully responsive, mobile-first frontend in React.js and JavaScript, with layouts specifically optimized for browsing and booking tickets on small screens.",
          "Payment state was handled through secure RESTful API webhooks into the Razorpay payment gateway, so the system only trusts a booking as paid once Razorpay's own webhook confirms it."
        ]
      },
      {
        heading: "Decisions",
        content: [
          "Webhook-driven payment confirmation was chosen instead of trusting client-side payment successful callbacks.",
          "Supabase and PostgreSQL handled structured booking and ticket data, giving relational guarantees around ticket inventory and booking state.",
          "Mobile-first layout decisions were made first, then scaled up to desktop, matching the real usage pattern of attendees booking from their phones."
        ]
      },
      {
        heading: "Outcome",
        content: [
          "Shipped and ran live for the event's registration window, processing real ticket bookings and real Razorpay payments end-to-end with no reported booking or payment failures, and automated confirmation emails delivered via Resend."
        ]
      }
    ],
    tools: ["React.js", "JavaScript", "Supabase", "PostgreSQL", "Netlify", "Razorpay", "Resend"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
