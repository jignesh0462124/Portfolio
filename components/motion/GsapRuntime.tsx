"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function GsapRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navPill = document.querySelector(".navbar__pill");
    const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
    const links = document.querySelector<HTMLElement>("[data-nav-links]");
    const anchorHandlers: Array<[HTMLAnchorElement, EventListener]> = [];
    const menuCloseHandlers: Array<[HTMLAnchorElement, EventListener]> = [];

    const onScroll = () => {
      navPill?.classList.toggle("is-scrolled", window.scrollY > 42);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggleMenu = () => {
      const open = links?.classList.toggle("open") ?? false;
      toggle?.setAttribute("aria-expanded", String(open));
    };

    toggle?.addEventListener("click", toggleMenu);
    links?.querySelectorAll("a").forEach((link) => {
      const closeMenu = () => {
        links.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
      };

      link.addEventListener("click", closeMenu);
      menuCloseHandlers.push([link, closeMenu]);
    });

    const ctx = gsap.context(() => {
      if (!reduceMotion) {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              delay: Math.min(index % 5, 4) * 0.035,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
                once: true
              }
            }
          );
        });

        gsap.to(".hero__status-dot", {
          boxShadow: "0 0 0 13px rgba(33, 196, 93, 0)",
          duration: 1.35,
          repeat: -1,
          ease: "power1.out"
        });

        gsap.to(".hero__scroll", {
          y: 8,
          duration: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      } else {
        gsap.set(".reveal", { autoAlpha: 1, y: 0 });
      }

      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((anchor) => {
        const handler: EventListener = (event) => {
          const href = anchor.getAttribute("href");
          if (!href) return;

          const url = new URL(href, window.location.href);
          const isSamePage = url.pathname === window.location.pathname;
          const id = url.hash.slice(1);
          if (!isSamePage || !id) return;

          const target = document.getElementById(id);
          if (!target) return;

          event.preventDefault();
          gsap.to(window, {
            duration: reduceMotion ? 0 : 0.85,
            ease: "power3.out",
            scrollTo: { y: target, offsetY: 92 }
          });
          window.history.replaceState(null, "", `${window.location.pathname}#${id}`);
        };

        anchor.addEventListener("click", handler);
        anchorHandlers.push([anchor, handler]);
      });

      const sections = gsap.utils.toArray<HTMLElement>("section[id]");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (!self.isActive) return;
            document.querySelectorAll(".navbar__link").forEach((link) => link.classList.remove("active"));
            document.querySelector(`.navbar__link[href="/#${section.id}"], .navbar__link[href="#${section.id}"]`)?.classList.add("active");
          }
        });
      });

      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion || window.innerWidth < 680) return;
      const cluster = document.querySelector<HTMLElement>(".photo-cluster");
      if (!cluster) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      gsap.to(cluster, { x, y, duration: 0.45, ease: "power3.out" });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      toggle?.removeEventListener("click", toggleMenu);
      anchorHandlers.forEach(([anchor, handler]) => anchor.removeEventListener("click", handler));
      menuCloseHandlers.forEach(([anchor, handler]) => anchor.removeEventListener("click", handler));
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
