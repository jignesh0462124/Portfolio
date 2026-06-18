import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GsapRuntime } from "@/components/motion/GsapRuntime";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://jignesh.dev"),
  title: {
    default: "Jignesh Sonewane - Cybersecurity Developer & Full-Stack Engineer",
    template: "%s - Jignesh Sonewane"
  },
  description:
    "Cybersecurity-focused Computer Science student and full-stack developer based in Nagpur, India. Digital forensics, penetration testing, and production web products.",
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Jignesh Sonewane - Cybersecurity Developer & Full-Stack Engineer",
    description:
      "Cybersecurity-focused Computer Science student and full-stack developer based in Nagpur, India. Digital forensics, penetration testing, and production web products.",
    type: "website",
    locale: "en_IN",
    url: "https://jignesh.dev"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jignesh Sonewane - Cybersecurity Developer & Full-Stack Engineer",
    description:
      "Cybersecurity-focused Computer Science student and full-stack developer based in Nagpur, India. Digital forensics, penetration testing, and production web products."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    address: siteConfig.location,
    url: "https://jignesh.dev",
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
    alumniOf: "G. H. Raisoni College of Engineering"
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
        <GsapRuntime />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
