import type { Emphasis } from "./types";

export const methodSection = {
  heading: { prefix: "How I ", emphasis: "work" } satisfies Emphasis,
  label: "Problem to adoption",
};

export const method = [
  {
    n: "01",
    title: "Find the real problem",
    body: "Sit with the people who have it. Size it in time, money or risk before building anything.",
  },
  {
    n: "02",
    title: "Ship a v1 in days",
    body: "Prototype with Claude Code, agents or no-code, whichever gets there fastest.",
  },
  {
    n: "03",
    title: "Get it used",
    body: "Onboard the first users, watch what they do, and fix what gets in the way.",
  },
  { n: "04", title: "Scale, change or kill", body: "Decide quickly, and say why." },
];
