import type { Emphasis, Fact } from "./types";

export const workSection = {
  heading: { prefix: "Shipped at ", emphasis: "UnifyApps" } satisfies Emphasis,
  label: "Growth Team · Company work",
};

export type WorkItem = {
  id: "brain" | "voice" | "prompt-to-app";
  label: string;
  title: string;
  oneLiner: string;
  facts: Fact[];
  tags: string[];
};

export const work: WorkItem[] = [
  {
    id: "brain",
    label: "UnifyApps · Internal AI agent",
    title: "Unify Brain",
    oneLiner: "The internal AI agent for sales, marketing and ops, built as a team of agents.",
    facts: [
      { label: "The problem", value: "Repetitive work across sales, marketing and ops tools." },
      {
        label: "What I built",
        value:
          "I architected a team of agents, each owning several tasks, routed across multiple LLMs: lighter models for volume, stronger ones for reasoning.",
      },
      { label: "Reach", value: "HubSpot, Google and Microsoft suites, and 500+ connectors." },
    ],
    tags: ["5+ hrs/day saved", "Multi-LLM routing", "Adopted company-wide"],
  },
  {
    id: "voice",
    label: "UnifyApps · Conversational AI",
    title: "Voice, video and banking agents",
    oneLiner: "Agents that talk to customers, designed and deployed end to end.",
    facts: [
      {
        label: "What I built",
        value: "I designed and deployed voice, video avatar, banking and multi-agent committee workflows.",
      },
      { label: "End to end", value: "From the idea through backend workflows, low-code screens and custom code." },
      { label: "Also", value: "Invoice OCR workflows that cut processing time by 70–80%." },
    ],
    tags: ["Voice", "Video avatar", "Banking", "Regulated settings"],
  },
  {
    id: "prompt-to-app",
    label: "UnifyApps · Daily work",
    title: "Prompt to full application",
    oneLiner: "On the Growth Team, my day job is taking an idea to a working app on a low-code/no-code platform.",
    facts: [
      {
        label: "What I build",
        value: "Agentic loops and flows where a plain-language prompt generates a complete, working application.",
      },
      {
        label: "With customers",
        value:
          "Proof-of-concept work for a large enterprise account: APIs, integrations, RBAC, triggers and DLQ handling with their engineers.",
      },
      { label: "Also", value: "A multi-agent workspace for a government healthcare client." },
    ],
    tags: ["$850K+ new deals driven", "Low-code / no-code", "Enterprise PoCs"],
  },
];
