"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = function (this: HTMLAnchorElement, e: MouseEvent) {
      const id = this.getAttribute("href");
      if (id && id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -68, duration: 1.4 });
      }
    };
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    const track = document.querySelector<HTMLElement>(".track");
    let x = 0;
    const speed = 0.6;
    const marqueeTick = () => {
      if (!track) return;
      const v = Math.min(Math.abs(lenis.velocity || 0), 40);
      x -= speed + v * 0.15;
      const half = track.scrollWidth / 2;
      if (-x >= half) x += half;
      track.style.transform = `translate3d(${x}px,0,0)`;
    };
    if (track) {
      track.style.animation = "none";
      gsap.ticker.add(marqueeTick);
    }

    return () => {
      gsap.ticker.remove(tick);
      if (track) gsap.ticker.remove(marqueeTick);
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
