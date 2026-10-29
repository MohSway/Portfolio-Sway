import type { Emphasis, NavLink } from "./types";

export const site = {
  name: "Swayanshu Mohapatra",
  mark: "SM.",
  roleLine: "Product Manager and AI builder",
  currentRole: "Associate Product Manager, Growth Team, UnifyApps (remote)",
  location: "India",
  email: "goluharris11@gmail.com",
  linkedin: "https://www.linkedin.com/in/swayanshu-mohapatra-51a967199/",
  tiinkrUrl: "https://tiinkr.com",
  resumeUrl: "/Swayanshu_Mohapatra_Resume.pdf",
  availability: "Open to AI product roles",
};

export const nav: NavLink[] = [
  { label: "Tiinkr", href: "#work" },
  { label: "UnifyApps", href: "#unifyapps" },
  { label: "Method", href: "#method" },
  { label: "Craft", href: "#craft" },
  { label: "Path", href: "#path" },
];

export const hero = {
  eyebrow: "Product manager · AI builder · India",
  headline: { prefix: "Ideas in.", emphasis: "Working AI products", suffix: "out." } satisfies Emphasis,
  lede: "I'm Swayanshu. I started as a backend engineer, moved into product, and now spend my days on the UnifyApps Growth Team turning customer problems into deployed agents and apps. I built and deployed Tiinkr with Claude Code.",
  primaryCta: "See the work",
  secondaryCta: "Download resume",
  demo: {
    promptLabel: "Prompt",
    promptText: "Build a meet-prep agent that reads our CRM.",
    appTitle: "Meet prep",
    appBadge: "Ready in seconds",
    appRowLabel: "Account",
    appRowValue: "Last call, open deals, key contacts",
    appButton: "Send brief",
  },
  marquee: [
    "Claude Code",
    "Cursor",
    "Multi-agent systems",
    "Voice agents",
    "Low-code / no-code",
    "Prompt-to-app",
    "Agentic loops",
    "SQL & analytics",
  ],
};

export const contact = {
  availability: "Open to AI product roles",
  headline: { prefix: "Have a messy problem? ", emphasis: "Let's ship a v1." } satisfies Emphasis,
  linkedinLabel: "LinkedIn",
  tiinkrLabel: "Tiinkr",
};

export const footer = {
  copyright: `© 2026 ${site.name}`,
  builtWith: "Designed and built with Claude Code",
};

export const seo = {
  title: "Swayanshu Mohapatra | Product Manager and AI Builder",
  description:
    "Product manager who turns ideas into working AI products: agents, low-code apps and Tiinkr. Based in India, open to AI product roles.",
  ogText: "Ideas in. Working AI products out.",
};
