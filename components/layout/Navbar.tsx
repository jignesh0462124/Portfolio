"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const linkClassName = (href: string) =>
    `navbar__link${(href === "/about" && pathname === "/about") || (href === "/#work" && pathname.startsWith("/work")) ? " active" : ""}`;

  return (
    <header className="navbar" role="banner">
      <nav className="navbar__pill" aria-label="Main navigation">
        <a href="/#hero" className="navbar__brand" aria-label="Home">
          <span className="navbar__avatar" aria-hidden="true">
            J
          </span>
          <span className="navbar__name">{siteConfig.name.toLowerCase()}</span>
        </a>

        <ul className="navbar__links" data-nav-links>
          {navItems.map((item) => {
            const isHashLink = item.href.includes("#");

            return (
              <li key={item.href}>
                {isHashLink ? (
                  <a href={item.href} className={linkClassName(item.href)}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={linkClassName(item.href)}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Link href={siteConfig.socials.resume} className="navbar__resume" aria-label="Download Resume">
          <Download aria-hidden="true" />
          Resume
        </Link>

        <button className="navbar__toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-nav-toggle>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
