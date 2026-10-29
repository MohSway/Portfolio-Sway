import type { Emphasis } from "./types";

export const craftSection = {
  heading: { prefix: "The ", emphasis: "craft" } satisfies Emphasis,
  label: "Tools I reach for",
};

export const craft = [
  {
    span: "a" as const,
    title: "AI-first building",
    intro: "AI is my default way to research, build and ship.",
    chips: [
      "Claude Code",
      "Cursor",
      "Multi-agent systems",
      "Agentic loops",
      "Multi-LLM routing",
      "Prompt engineering",
      "Voice agents",
    ],
  },
  {
    span: "b" as const,
    title: "Low-code / no-code",
    intro: "Workflows, agent apps and screens on a platform.",
    chips: ["APIs", "Triggers", "RBAC", "DLQ"],
  },
  {
    span: "c" as const,
    title: "Data",
    intro: "I build my own funnels and dashboards.",
    chips: ["SQL", "BigQuery", "Looker Studio", "Power BI"],
  },
  {
    span: "d" as const,
    title: "Engineering roots",
    intro: "Two years as a backend engineer, so I can debate trade-offs with engineers.",
    chips: ["Python", "Java", "JavaScript", "React", "SpringBoot", "Django", "Docker", "Kubernetes", "AWS"],
  },
];
