# Portfolio Build Brief: Swayanshu Mohapatra

You are building a personal portfolio site for a product manager who builds with AI. Read this whole file first, then `CONTENT.md`, then open `design-reference.html` in a browser.

## How to use the three files

Put all three in the repo under `docs/`.

| File | What it is for | Treat it as the source of truth for |
|---|---|---|
| `PORTFOLIO_BRIEF.md` (this file) | How to build the site | Stack, tokens, motion, file structure, build order, quality bar |
| `CONTENT.md` | What the site says | Every word, every fact, every link, and the rules about what not to claim |
| `design-reference.html` | How the site looks and moves | Layout, spacing, type, colours, interactions |

If they disagree: `CONTENT.md` wins for words and facts, `design-reference.html` wins for visuals and motion, this brief wins for everything else. His resume PDF is only a download button on the site. **Do not try to read it**; everything from it is already in `CONTENT.md`.

## 1. Goal

A single-page portfolio that helps Swayanshu get shortlisted for AI product manager roles. The visitor is a recruiter or hiring manager who gives it about 60 seconds. In that time they should understand:

1. What he does: he turns ideas into working AI products (agents, low-code apps, his own product).
2. Proof: Tiinkr (live), Unify Brain (adopted company-wide), voice and banking agents, prompt-to-app work.
3. How to contact him, and where to get his resume.

Success looks like: the page loads fast, reads clearly on a phone, feels crafted without showing off, and the motion supports the story instead of getting in its way.

## 2. Voice and content rules

- Plain, specific and a little warm. He builds things; the copy should sound like it.
- **No bragging.** State what he built and what happened. No superlatives, no "passionate", no "rockstar".
- **No client names.** Describe clients generically ("a government healthcare client", "a pharmaceutical customer"). Never name them.
- **No invented numbers.** Only use the metrics in `CONTENT.md` section 6. Do not add user counts, revenue or testimonials for Tiinkr.
- No emoji, no lorem ipsum, no stock photos. Use `[PLACEHOLDER]` text where a real asset is missing and list it in your final message.
- Tiinkr is co-founded. Say "co-founded" when ownership comes up, and "I designed, coded and deployed it" for his part.
- **Tiinkr is the only personal project.** Everything else is company work at UnifyApps. Label it that way, use "I architected / designed / deployed" wording, and never present it as an independent product or side project.

## 3. Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) + TypeScript | Static export is easy, great Vercel deploy, good SEO |
| Styling | Tailwind CSS v4, tokens as CSS variables | Fast to build, easy to keep consistent |
| Scroll | **Lenis** (`lenis` on npm) | Smooth, lightweight scroll that works with GSAP |
| Animation | **GSAP + ScrollTrigger** (`gsap`) | Pinning, scrub, staggered reveals, matchMedia |
| React glue | `@gsap/react` (`useGSAP`) | Handles context and cleanup in React |
| Fonts | `next/font/google`: Instrument Serif, Inter, JetBrains Mono | Self-hosted, no layout shift |
| Hosting | Vercel | Zero config |

Do not add a UI kit, a CMS, a database or auth. Content lives in typed files under `content/`.

Optional, only if time allows: Framer Motion (`motion`) for small component-level hover and presence animations. Do not use it for scroll choreography; GSAP owns that.

## 4. Design system

Dark, calm, one accent. Copy these exactly from `design-reference.html`.

```css
:root {
  --bg: #090E0D;        /* page */
  --panel: #101916;     /* cards */
  --panel2: #0C1311;    /* inset surfaces */
  --line: #1E2D29;      /* borders, dividers */
  --text: #EAEFEA;
  --muted: #93A8A0;     /* secondary text, 7:1 on --bg */
  --accent: #46E0B5;    /* the only accent */
  --ink: #03231B;       /* text on accent buttons */
  --warm: #F3C97A;      /* reserved, use sparingly or not at all */
}
```

- **Display type:** Instrument Serif, regular weight, with italic for the accent word in each heading. Headline `clamp(54px, 7.4vw, 108px)`, line-height 0.96, letter-spacing -0.025em.
- **Body:** Inter 17px, line-height 1.55.
- **Labels:** JetBrains Mono 12px, uppercase, letter-spacing 0.08em, `--muted`.
- **Radius:** cards 28–30px, panels 22px, controls 999px (pills).
- **Layout:** max width 1240px, 32px gutters (20px below 900px). Sections have 112px top padding (80px on mobile).
- **Texture:** a faint 72px grid in the hero, masked to fade out. No gradient washes, no glassmorphism except the sticky nav blur.
- **Icons:** inline stroke SVG only.

## 5. Page structure

Build in this order. Copy for every section is in `CONTENT.md` and must live in `content/` files, not hard-coded in components.

1. **Nav:** sticky, blurred, `SM.` mark left, links (Tiinkr, UnifyApps, Method, Craft, Path), "Say hello" button right. Links hidden on mobile (a simple menu button is optional).
2. **Hero:** eyebrow, headline "Ideas in. *Working AI products* out.", lede, two CTAs, and the **prompt → app** demo card (typed prompt, arrow, generated app).
3. **Marquee:** tools and themes strip, infinite loop.
4. **Work, in two clearly separate parts.** Each card has a text column (label, title, one-liner, three fact rows, tags) and an illustrative visual.
   - **Built on my own:** Tiinkr alone, as one large feature card (not sticky). It is his only personal project.
   - **Shipped at UnifyApps:** three **sticky stacked cards** (Unify Brain, voice/video/banking agents, prompt to full application), each labelled "UnifyApps" and worded as company work ("I architected", "I designed and deployed"). Never present these as personal products.
5. **Stats strip:** four numbers with one-line captions, labelled "At UnifyApps" because they are company results.
6. **How I work:** four numbered steps.
7. **The craft:** bento grid of four tiles.
8. **The path:** timeline rows (date, role, org).
9. **Contact:** large closing headline, email, LinkedIn, Tiinkr buttons, footer.

## 6. Motion spec

Everything below is already prototyped in the `<script>` block at the bottom of `design-reference.html`. Port it faithfully into React.

| Moment | Behaviour |
|---|---|
| Page scroll | Lenis smooth scroll, `lerp: 0.1`, driven by GSAP's ticker |
| Hero headline | Words rise in with a stagger (`yPercent: 60 → 0`, opacity 0 → 1, `power4.out`) |
| Hero demo card | Eases up on load; drifts up ~8% as the hero scrolls away (scrub) |
| Prompt typing | CSS `steps()` animation plus blinking caret (keep it in CSS) |
| Marquee | Constant drift that speeds up with scroll velocity |
| Section heads, steps, tiles, rows, stats | Fade and rise (`y: 48 → 0`) when they reach 88% of the viewport |
| UnifyApps work cards (not the Tiinkr feature card) | `position: sticky`. As the next card covers a card, scale it to 0.94 and fade it to 0.55 (scrub). **Desktop only** (`min-width: 901px`) |
| Stats | Count up the first number once, on enter. Skip ranges like "70–80%" |
| Buttons | Subtle magnetic pull on fine pointers only |
| Anchor links | `lenis.scrollTo(id, { offset: -68 })` |

### Integration (follow exactly)

```ts
// lib/gsap.ts: register plugins once, import gsap from here everywhere
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

```tsx
// components/LenisProvider.tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);      // ScrollTrigger reads Lenis's position
    const tick = (t: number) => lenis.raf(t * 1000); // GSAP ticker drives Lenis
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);                    // Lenis handles timing
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```

Wrap every animation in `useGSAP` (or `gsap.context()` and call `revert()` on cleanup) so React Strict Mode does not leave duplicate triggers.

### Pitfalls to avoid

- Do not register plugins inside components.
- Do not leak ScrollTriggers: always revert on unmount.
- Animate only `transform` and `opacity`. Never `top`, `left`, `width` or `margin`.
- Do not call `getBoundingClientRect()` inside scroll callbacks.
- Call `ScrollTrigger.refresh()` after fonts and images load.
- No pinning on mobile; the sticky stack is a plain vertical list below 900px.
- **Respect `prefers-reduced-motion`:** with it set, skip Lenis and GSAP entirely and show the final state. Content must be visible without JavaScript.
- Debug markers in development only.

## 7. Suggested file structure

```
app/
  layout.tsx            fonts, metadata, LenisProvider
  page.tsx              composes sections
  globals.css           tokens + base styles
components/
  Nav.tsx  Hero.tsx  PromptDemo.tsx  Marquee.tsx
  FeatureCard.tsx (Tiinkr)  WorkStack.tsx  WorkCard.tsx  (visuals/ TiinkrViz, BrainViz, VoiceViz, LayersViz)
  Stats.tsx  Method.tsx  Craft.tsx  Path.tsx  Contact.tsx  Footer.tsx
  LenisProvider.tsx
content/
  site.ts  tiinkr.ts  work.ts  stats.ts  method.ts  craft.ts  path.ts
docs/
  PORTFOLIO_BRIEF.md  CONTENT.md  design-reference.html
lib/gsap.ts
public/
  Swayanshu_Mohapatra_Resume.pdf   (he will add this)
  og.png                           (see section 9)
```

## 8. Using `CONTENT.md`

`CONTENT.md` holds all of Swayanshu's content, already written and organised by section. Use it like this:

1. Read it fully before writing any component.
2. Create one typed file per row of the table in its section 0 (`site.ts`, `tiinkr.ts`, `work.ts`, `stats.ts`, `method.ts`, `craft.ts`, `path.ts`). Export plain typed objects and arrays, for example `export const work: WorkItem[] = [...]`.
3. Components import from `content/` and render. **No visible copy lives in JSX.**
4. Copy the wording **verbatim**. Fix only typos. Do not rewrite, "improve" or shorten it, and do not add claims. If a line does not fit the layout, tell Swayanshu instead of editing it.
5. The "Extra detail" and experience bullets are optional depth. Show them only in an expanded state (for example, a Path row that opens on click). Keep the default view as short as the design shows.
6. Follow section 12 of `CONTENT.md` (the hard rules) over anything else, especially: Tiinkr is the only personal project, no client names, no invented numbers, no phone number.
7. Anything missing becomes `[PLACEHOLDER]`. List all placeholders in your final message (the list in `CONTENT.md` section 13 is the starting point).

## 9. SEO, performance, accessibility

- Metadata: title "Swayanshu Mohapatra | Product Manager and AI Builder", a 150-character description, canonical URL, Open Graph and Twitter tags. Generate `og.png` (1200×630) from the hero headline on the dark background.
- JSON-LD `Person` schema with name, job title, links.
- Targets: Lighthouse ≥ 95 on performance, accessibility and SEO on mobile. LCP under 2.0s. No layout shift from fonts.
- Semantic HTML: one `h1`, `h2` per section, `nav` and `main` landmarks, visible focus rings, a "skip to content" link.
- Text contrast ≥ 4.5:1 (the tokens above already pass). Touch targets ≥ 44px.
- Decorative SVGs get `aria-hidden="true"`. Illustrative visuals are labelled "Illustrative UI" and are not real screenshots.
- Test at 390px, 768px, 1024px, 1440px. No horizontal scroll at any width.

## 10. Build order and acceptance checks

1. **Scaffold:** Next.js + Tailwind + fonts + tokens. *Check:* blank page uses the right background, fonts load without shift.
2. **Static sections:** build every section with no animation, matching the reference at 1440px and 390px. *Check:* side-by-side with `design-reference.html` looks the same.
3. **Content files:** move copy from `CONTENT.md` into typed `content/` files. *Check:* no copy is hard-coded in components, and every line matches `CONTENT.md` word for word.
4. **Motion:** add `LenisProvider`, then hero, reveals, sticky card scale, stats, marquee, magnetic buttons. *Check:* scrolling is smooth, no jank, no console errors, no duplicate triggers after hot reload.
5. **Reduced motion and no-JS:** *Check:* with the OS setting on, every section is visible and nothing animates.
6. **Polish:** SEO, OG image, Lighthouse, keyboard pass, mobile pass.
7. **Deploy** to Vercel and report the URL.

Commit after each step with a clear message.

## 11. Things Swayanshu still needs to provide

Ask for these when you reach them, and use clearly marked placeholders until then:

- Final resume PDF at `public/Swayanshu_Mohapatra_Resume.pdf`.
- Real Tiinkr screenshots or a short screen recording to replace the illustrative visual (strongly recommended).
- A professional photo (optional; the design works without one).
- Tiinkr facts, if any: users, signups, feedback, what changed after launch. Add only what he confirms.
- Whether he is comfortable with his email address being public.
- A custom domain, if he has one.

## 12. Facts that are safe to use

These come from his resume and are all in `CONTENT.md`. Do not add to them.

- 5+ hours per day saved for Sales and Product teams by Unify Brain.
- $850K+ in new deals driven independently (and $1M+ in team efforts).
- 70–80% less processing time from invoice OCR workflows.
- 500+ connectors across HubSpot, Google and Microsoft suites.
- Roles: Associate Product Manager (Sep 2026 – now), Senior Product Analyst (Apr – Sep 2026), Product Analyst (Sep 2025 – Apr 2026), all on the UnifyApps Growth Team. Software Developer at PwC India (Jan 2024 – Aug 2025). Software Engineering Intern at Walmart Global Tech (2023). B.Tech in Electrical and Electronics Engineering, BIT Mesra, GPA 8.04.

## 13. First message to start Claude Code

Copy the three files into the repo's `docs/` folder, then paste this:

```text
I'm Swayanshu. Build my personal portfolio site in this repo.

Three files in docs/ tell you everything:
- PORTFOLIO_BRIEF.md: how to build it (stack, design tokens, motion, file structure, build order).
- CONTENT.md: every word and fact that goes on the site. Copy it verbatim.
- design-reference.html: open it in a browser. It is the visual and motion reference.

Read all three first. Then reply with a short plan (stack, file structure, and any questions) before writing code.

Rules that matter most:
- Tiinkr is my only personal project. Everything else is UnifyApps company work and must be labelled that way.
- Never name clients, never invent numbers or claims, never publish my phone number.
- If something is missing, use [PLACEHOLDER] and tell me at the end.
- Respect prefers-reduced-motion, and the page must work without JavaScript.

Then follow section 10 of the brief one step at a time, committing after each step. Stop after step 2 (static build) and show me before adding any motion. Ask me for the assets listed in CONTENT.md section 13 when you reach them.
```

## Sources used for this brief

- [Best modern portfolio website design examples (Wegic)](https://wegic.ai/inspiration/best-modern-portfolio-website-design-examples): layout, type, colour and motion patterns across current portfolios.
- [GSAP ScrollTrigger and Lenis in Next.js](https://rahhuul.github.io/blog/gsap-scrolltrigger-lenis-nextjs-scroll-animations/): provider setup, ticker integration and pitfalls.
- [Lenis README (jsDelivr)](https://cdn.jsdelivr.net/npm/lenis@1.3.18/README.md): smooth scroll library reference.
