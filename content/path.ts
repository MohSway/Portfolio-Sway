import type { Emphasis } from "./types";

export const pathSection = {
  heading: { prefix: "The ", emphasis: "path" } satisfies Emphasis,
  label: "Backend to product",
};

export type PathRow = {
  date: string;
  role: string;
  row: string;
  org: string;
  bullets?: string[];
};

export const path: PathRow[] = [
  {
    date: "Sep 2026 – Now",
    role: "Associate Product Manager, Growth Team",
    row: "Prompt-to-app flows, enterprise proof-of-concepts, multi-agent workspaces.",
    org: "UnifyApps",
    bullets: [
      "Takes ideas and customer problems and turns them into working apps on a low-code/no-code platform, now with agentic loops and prompt-to-application flows where a plain-language prompt generates a full application.",
      "On the Proof-of-Concept team for a large enterprise account, scopes problems with the customer's team and builds solutions with their engineers across APIs, integrations, RBAC, DLQ handling and triggers.",
      "Leads design of a multi-agent workspace for a government healthcare client, combining on-demand and scheduled agents for C-suite users.",
    ],
  },
  {
    date: "Apr 2026 – Sep 2026",
    role: "Senior Product Analyst, Growth Team",
    row: "Built Unify Brain and drove new deals.",
    org: "UnifyApps",
    bullets: [
      "Architected Unify Brain, the internal AI agent for sales, marketing and ops across HubSpot, Google and Microsoft suites and 500+ connectors, routed across multiple LLMs to balance cost, latency and quality. Saves Sales and Product teams 5+ hrs/day.",
      "Built a data-heavy meet-prep agent for a pharmaceutical customer ingesting 1M+ rows, with optimized token cost.",
      "Drove $850K+ independently and $1M+ in team efforts in new deals.",
    ],
  },
  {
    date: "Sep 2025 – Apr 2026",
    role: "Product Analyst, Growth Team",
    row: "Voice, video avatar and banking agents, and OCR automation.",
    org: "UnifyApps",
    bullets: [
      "Took ideas from conversation to deployed apps on the low-code/no-code platform: voice, video avatar, banking, transactional and multi-agent committee workflows, from ideation through backend workflows, low-code screens and custom code.",
      "Built invoice OCR workflows saving 70–80% processing time and Groovy-based sheet automation for Power BI dashboards (60%+ effort saved).",
      "Delivered an end-to-end admission flow for a UAE digital authority.",
    ],
  },
  {
    date: "Jan 2024 – Aug 2025",
    role: "Software Developer",
    row: "Backend services, Kibana and Elasticsearch analytics, Keycloak access control.",
    org: "PwC India",
    bullets: [
      "Developed core backend login services and an analytics integration using Kibana and Elasticsearch, improving observability and metric consistency across queries.",
      "Built a dynamic PDF generation system (iText, XMLParser), flexible form-rendering services and Keycloak-integrated role-based dashboards.",
    ],
  },
  {
    date: "2023",
    role: "Software Engineering Intern",
    row: "Deployment automation and cloud cost dashboards.",
    org: "Walmart Global Tech",
    bullets: [
      "Built a GitHub–Slack pipeline to trigger Concord form reviews and Ansible-based deployments, reducing manual effort by 80%.",
      "Created Looker Studio dashboards backed by GCP buckets and BigQuery to track cloud cost metrics.",
    ],
  },
  {
    date: "2020 – 2024",
    role: "B.Tech, Electrical & Electronics",
    row: "GPA 8.04.",
    org: "BIT Mesra",
  },
];
