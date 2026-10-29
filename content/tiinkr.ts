import type { Emphasis, Fact } from "./types";

export const tiinkrSection = {
  heading: { prefix: "Built on ", emphasis: "my own" } satisfies Emphasis,
  label: "Personal project",
};

export const tiinkr = {
  cardLabel: "Co-founded · Personal project",
  name: "Tiinkr",
  url: "https://tiinkr.com",
  status: "Live",
  oneLiner: "An AI product architect. Type an idea, get a structured PRD and a clickable prototype.",
  facts: [
    { label: "The gap", value: "An idea is one sentence. Testing it needs a PRD and a prototype first." },
    {
      label: "What I built",
      value:
        "A Discover, Architect, Build flow with personas, feature epics and UX flows, plus Training Camp, a PM trainer that grades judgment.",
    },
    { label: "How", value: "Co-founded. I designed, coded and deployed it with Claude Code, and earlier Cursor." },
  ] satisfies Fact[],
  tags: ["Live", "Claude Code", "Full-stack", "AI chat"],
  linkText: "Try tiinkr.com",
  vizCaption: "Illustrative UI",
  vizSteps: [
    { n: 1, label: "Discover", active: false },
    { n: 2, label: "Architect", active: true },
    { n: 3, label: "Build", active: false },
  ],
  vizDocTitle: "PRD · Meet-prep tool",
  vizDocRows: [
    { label: "Persona", value: "Account executive" },
    { label: "Epic 1", value: "Pre-call brief" },
    { label: "Epic 2", value: "CRM sync" },
  ],
};
