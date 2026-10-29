"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ScrollMotion() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const h1 = document.querySelector<HTMLElement>(".hero .display");
    const words: HTMLElement[] = [];
    if (h1 && !h1.dataset.split) {
      h1.dataset.split = "true";
      const split = (node: Node) => {
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (n.textContent || "").split(/(\s+)/).forEach((part) => {
              if (!part.trim()) {
                frag.appendChild(document.createTextNode(part));
                return;
              }
              const s = document.createElement("span");
              s.style.display = "inline-block";
              s.textContent = part;
              words.push(s);
              frag.appendChild(s);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === 1 && (n as HTMLElement).tagName !== "BR") {
            split(n);
          }
        });
      };
      split(h1);
    }
    if (words.length) {
      gsap.from(words, { yPercent: 60, opacity: 0, duration: 1.1, ease: "power4.out", stagger: 0.07, delay: 0.1 });
    }

    gsap.from(".hero .eyebrow, .hero .lede, .hero .cta", {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.5,
    });
    gsap.from(".demo", { y: 60, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.4 });
    gsap.to(".demo", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });

    gsap.utils.toArray<HTMLElement>(".sec-head, .mstep, .tile, .row, .stat").forEach((el) => {
      gsap.from(el, {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    const cards = gsap.utils.toArray<HTMLElement>(".stack .card");
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 25%", scrub: true },
        });
      });
    });

    document.querySelectorAll<HTMLElement>(".stat .big").forEach((el) => {
      const txt = el.textContent || "";
      if (txt.indexOf("–") > -1) return;
      const m = txt.match(/\d+/);
      if (!m) return;
      const target = parseInt(m[0], 10);
      const obj = { n: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            n: target,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = txt.replace(m[0], String(Math.round(obj.n)));
            },
          });
        },
      });
    });

    const magneticCleanups: Array<() => void> = [];
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>(".btn").forEach((b) => {
        const onMove = (e: MouseEvent) => {
          const r = b.getBoundingClientRect();
          gsap.to(b, {
            x: (e.clientX - r.left - r.width / 2) * 0.25,
            y: (e.clientY - r.top - r.height / 2) * 0.35,
            duration: 0.3,
          });
        };
        const onLeave = () => gsap.to(b, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
        b.addEventListener("mousemove", onMove);
        b.addEventListener("mouseleave", onLeave);
        magneticCleanups.push(() => {
          b.removeEventListener("mousemove", onMove);
          b.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => magneticCleanups.forEach((fn) => fn());
  }, []);

  return null;
}
