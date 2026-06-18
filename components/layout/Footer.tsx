import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__text">
          Designed and built by <strong>{siteConfig.name}</strong>
        </p>
        <div className="footer__links">
          <a href="/#hero" className="footer__link">
            Home
          </a>
          <a href="/#work" className="footer__link">
            Work
          </a>
          <Link href="/about" className="footer__link">
            About
          </Link>
          <a href="/#contact" className="footer__link">
            Contact
          </a>
        </div>
        <p className="footer__copy">(c) 2026 - All rights reserved</p>
      </div>
    </footer>
  );
}
