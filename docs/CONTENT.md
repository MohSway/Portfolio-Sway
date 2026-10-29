# Content: Swayanshu Mohapatra

This is the single source of truth for every word on the portfolio. If `design-reference.html` or `PORTFOLIO_BRIEF.md` disagrees with this file, **this file wins**. Do not invent anything that is not here. If something is missing, leave a `[PLACEHOLDER]` and list it in your final message.

## 0. How each part maps to the site

| Part of this file | Goes to | Content file |
|---|---|---|
| 1. Identity and links | Nav, hero, contact, footer, SEO | `content/site.ts` |
| 2. Positioning and voice | Tone for any copy you write or edit | (guidance only) |
| 3. Hero and about | Hero section | `content/site.ts` |
| 4. Tiinkr | "Built on my own" feature card | `content/tiinkr.ts` |
| 5. UnifyApps work | "Shipped at UnifyApps" cards | `content/work.ts` |
| 6. Stats | Stats strip | `content/stats.ts` |
| 7. How I work | Method section | `content/method.ts` |
| 8. Skills | Craft bento grid | `content/craft.ts` |
| 9. Experience (full detail) | Path timeline rows, optional expand | `content/path.ts` |
| 10. Education and extras | Path section footer | `content/path.ts` |
| 11. SEO | Metadata, JSON-LD | `content/site.ts` |
| 12. Rules | Everything | (guidance only) |

## 1. Identity and links

- **Name:** Swayanshu Mohapatra
- **Short mark:** SM.
- **Role line:** Product Manager and AI builder
- **Current role:** Associate Product Manager, Growth Team, UnifyApps (remote)
- **Location:** India (do not state a city)
- **Email (shown publicly by default; ask him to confirm before launch):** goluharris11@gmail.com
- **LinkedIn:** https://linkedin.com/in/swayanshu-mohapatra
- **Tiinkr:** https://tiinkr.com
- **Resume PDF:** `/Swayanshu_Mohapatra_Resume.pdf` (he will add the file to `public/`)
- **Phone:** do **not** publish it.
- **Availability line (contact section):** Open to AI product roles

## 2. Positioning and voice

**One-line positioning:** Product manager who turns ideas into working AI products, using agents, low-code/no-code platforms and Claude Code.

**Story in four beats:**
1. Started as a backend engineer (PwC India, Walmart Global Tech intern).
2. Moved into product at UnifyApps, on the Growth Team.
3. Daily job: take an idea or a customer problem and turn it into a working app or agent.
4. Outside work: co-founded and built Tiinkr, an AI product-planning tool, with Claude Code (earlier Cursor).

**Voice rules:**
- Plain, specific, warm. First person, short sentences.
- Say what he built and what happened. No superlatives, no "passionate", no "rockstar", no "guru".
- No bragging and no number-stuffing. The numbers in section 6 are enough.
- Never use emoji. Never use stock phrases like "leveraging", "synergy", "cutting-edge".

## 3. Hero and about

- **Eyebrow:** Product manager · AI builder · India
- **Headline:** Ideas in. *Working AI products* out.
- **Lede:** I'm Swayanshu. I started as a backend engineer, moved into product, and now spend my days on the UnifyApps Growth Team turning customer problems into deployed agents and apps. I built and deployed Tiinkr with Claude Code.
- **Primary button:** See the work
- **Secondary button:** Download resume
- **Prompt-to-app demo (illustrative):**
  - Prompt text: `Build a meet-prep agent that reads our CRM.`
  - App card title: Meet prep · badge: Ready in seconds
  - App row: Account, "Last call, open deals, key contacts"
  - Button: Send brief
- **Marquee items (in this order):** Claude Code · Cursor · Multi-agent systems · Voice agents · Low-code / no-code · Prompt-to-app · Agentic loops · SQL & analytics
- **Optional About paragraph (use only if an About block is added):**
  I'm a product manager who builds. I spent my first years as a backend engineer, then moved into product because I wanted to decide what gets built as well as how. At UnifyApps I work on the Growth Team, where I take ideas and customer problems and turn them into working agents and apps. I use Claude Code and Cursor every day, and I built Tiinkr to scratch my own itch: going from a one-line idea to something you can test.

## 4. Tiinkr (the only personal project)

Section heading: **Built on *my own***, label "Personal project". Card label: "Co-founded · Personal project".

- **Name:** Tiinkr
- **URL:** https://tiinkr.com
- **Status:** Live
- **One-liner:** An AI product architect. Type an idea, get a structured PRD and a clickable prototype.
- **Facts rows:**
  - *The gap:* An idea is one sentence. Testing it needs a PRD and a prototype first.
  - *What I built:* A Discover, Architect, Build flow with personas, feature epics and UX flows, plus Training Camp, a PM trainer that grades judgment.
  - *How:* Co-founded. I designed, coded and deployed it with Claude Code, and earlier Cursor.
- **Tags:** Live · Claude Code · Full-stack · AI chat
- **Link text:** Try tiinkr.com
- **More detail (for an optional deeper view):**
  - Guided Discover → Architect → Build flow that turns a plain-language idea into a structured PRD (personas, feature epics, UX flows) and a working, clickable prototype.
  - Training Camp: a scenario-based PM skills trainer that grades judgment on problem framing and trade-offs, with progress tracked through streaks and XP.
  - Built end to end: concept, UX, full-stack, auth and AI chat.
- **Do not claim:** user counts, revenue, funding, press, testimonials. None have been confirmed.
- **Visual:** The design shows an illustrative UI. Replace with real screenshots when he supplies them.

## 5. UnifyApps work (company work, not personal projects)

Section heading: **Shipped at *UnifyApps***, label "Growth Team · Company work". Every card is labelled "UnifyApps". Use "I architected / designed / deployed" wording. **Never name clients.**

### 5.1 Unify Brain (label: UnifyApps · Internal AI agent)
- **One-liner:** The internal AI agent for sales, marketing and ops, built as a team of agents.
- *The problem:* Repetitive work across sales, marketing and ops tools.
- *What I built:* I architected a team of agents, each owning several tasks, routed across multiple LLMs: lighter models for volume, stronger ones for reasoning.
- *Reach:* HubSpot, Google and Microsoft suites, and 500+ connectors.
- **Tags:** 5+ hrs/day saved · Multi-LLM routing · Adopted company-wide
- **Extra detail:** Routing balances cost, latency and quality. Saves Sales and Product teams 5+ hours a day.
- **Also true (use only if space allows, no client names):** Built a meet-prep agent for a pharmaceutical customer that ingests 1M+ rows across Salesforce, Azure Blob and proprietary documents, and cut token use per run from about 1M to 200–300K, checking outputs against the format the client had specified.

### 5.2 Voice, video and banking agents (label: UnifyApps · Conversational AI)
- **One-liner:** Agents that talk to customers, designed and deployed end to end.
- *What I built:* I designed and deployed voice, video avatar, banking and multi-agent committee workflows.
- *End to end:* From the idea through backend workflows, low-code screens and custom code.
- *Also:* Invoice OCR workflows that cut processing time by 70–80%.
- **Tags:** Voice · Video avatar · Banking · Regulated settings
- **Extra detail:** Also built Groovy-based sheet automation for Power BI dashboards (60%+ effort saved) and an end-to-end admission flow for a UAE digital authority.

### 5.3 Prompt to full application (label: UnifyApps · Daily work)
- **One-liner:** On the Growth Team, my day job is taking an idea to a working app on a low-code/no-code platform.
- *What I build:* Agentic loops and flows where a plain-language prompt generates a complete, working application.
- *With customers:* Proof-of-concept work for a large enterprise account: APIs, integrations, RBAC, triggers and DLQ handling with their engineers.
- *Also:* A multi-agent workspace for a government healthcare client.
- **Tags:** $850K+ new deals driven · Low-code / no-code · Enterprise PoCs
- **Extra detail:** The multi-agent workspace combines on-demand and scheduled agents for C-suite users, with each agent's scope and handoffs defined.

## 6. Stats (label: "At UnifyApps")

| Big number | Caption |
|---|---|
| 5+ hrs | saved per day for Sales and Product by one internal agent |
| $850K+ | in new deals driven independently |
| 70–80% | less processing time with invoice OCR workflows |
| 500+ | connectors orchestrated by one agent team |

Extra fact (do not add to the strip unless asked): $1M+ in team efforts on new deals.

## 7. How I work (four steps)

1. **Find the real problem.** Sit with the people who have it. Size it in time, money or risk before building anything.
2. **Ship a v1 in days.** Prototype with Claude Code, agents or no-code, whichever gets there fastest.
3. **Get it used.** Onboard the first users, watch what they do, and fix what gets in the way.
4. **Scale, change or kill.** Decide quickly, and say why.

## 8. Skills (The craft)

- **AI-first building** (intro: AI is my default way to research, build and ship): Claude Code, Cursor, Multi-agent systems, Agentic loops, Multi-LLM routing, Prompt engineering, Voice agents
- **Low-code / no-code** (intro: Workflows, agent apps and screens on a platform): APIs, Triggers, RBAC, DLQ
- **Data** (intro: I build my own funnels and dashboards): SQL, BigQuery, Looker Studio, Power BI
- **Engineering roots** (intro: Two years as a backend engineer, so I can debate trade-offs with engineers): Python, Java, JavaScript, React, SpringBoot, Django, Docker, Kubernetes, AWS

Full skills list for any extended view: Python, Java, JavaScript, ReactJS, SpringBoot, Django, C++, MongoDB, Docker, Kubernetes, AWS, Git, SQL, BigQuery, Looker Studio, Power BI, Kibana, Elasticsearch, Splunk, Keycloak, iText, HubSpot.

## 9. Experience (the Path)

Short row text is shown by default. The bullets are for an optional expanded view.

### Associate Product Manager, Growth Team: UnifyApps (Sep 2026 – Now, remote)
- Row text: Prompt-to-app flows, enterprise proof-of-concepts, multi-agent workspaces.
- Takes ideas and customer problems and turns them into working apps on a low-code/no-code platform, now with agentic loops and prompt-to-application flows where a plain-language prompt generates a full application.
- On the Proof-of-Concept team for a large enterprise account, scopes problems with the customer's team and builds solutions with their engineers across APIs, integrations, RBAC, DLQ handling and triggers.
- Leads design of a multi-agent workspace for a government healthcare client, combining on-demand and scheduled agents for C-suite users.

### Senior Product Analyst, Growth Team: UnifyApps (Apr 2026 – Sep 2026, remote)
- Row text: Built Unify Brain and drove new deals.
- Architected Unify Brain, the internal AI agent for sales, marketing and ops across HubSpot, Google and Microsoft suites and 500+ connectors, routed across multiple LLMs to balance cost, latency and quality. Saves Sales and Product teams 5+ hrs/day.
- Built a data-heavy meet-prep agent for a pharmaceutical customer ingesting 1M+ rows, with optimized token cost.
- Drove $850K+ independently and $1M+ in team efforts in new deals.

### Product Analyst, Growth Team: UnifyApps (Sep 2025 – Apr 2026, remote)
- Row text: Voice, video avatar and banking agents, and OCR automation.
- Took ideas from conversation to deployed apps on the low-code/no-code platform: voice, video avatar, banking, transactional and multi-agent committee workflows, from ideation through backend workflows, low-code screens and custom code.
- Built invoice OCR workflows saving 70–80% processing time and Groovy-based sheet automation for Power BI dashboards (60%+ effort saved).
- Delivered an end-to-end admission flow for a UAE digital authority.

### Software Developer: PwC India (Jan 2024 – Aug 2025, Gurgaon, Intern to Associate)
- Row text: Backend services, Kibana and Elasticsearch analytics, Keycloak access control.
- Developed core backend login services and an analytics integration using Kibana and Elasticsearch, improving observability and metric consistency across queries.
- Built a dynamic PDF generation system (iText, XMLParser), flexible form-rendering services and Keycloak-integrated role-based dashboards.

### Software Engineering Intern: Walmart Global Tech (May 2023 – Aug 2023, Bangalore)
- Row text: Deployment automation and cloud cost dashboards.
- Built a GitHub–Slack pipeline to trigger Concord form reviews and Ansible-based deployments, reducing manual effort by 80%.
- Created Looker Studio dashboards backed by GCP buckets and BigQuery to track cloud cost metrics.

## 10. Education and extras

- **B.Tech, Electrical and Electronics Engineering:** Birla Institute of Technology, Mesra (BIT Mesra), Jharkhand, Nov 2020 – Jun 2024. GPA 8.04.
- **School:** 12th CBSE 95.60% (2020), 10th CBSE 84.20% (2018), D.A.V Public School, Gandhinagar, C.C.L, Jharkhand. (Optional, keep off the main page.)
- **Extracurricular:** 180 DC BIT Mesra: founding team member, outreach and mentorship (Dec 2021 – Dec 2022). IMTheFuture 5.0, IMT Ghaziabad: finalist, top 15 of 500+ teams. (Optional, keep off the main page.)

## 11. SEO and metadata

- **Title:** Swayanshu Mohapatra | Product Manager and AI Builder
- **Description (under 160 characters):** Product manager who turns ideas into working AI products: agents, low-code apps and Tiinkr. Based in India, open to AI product roles.
- **JSON-LD Person:** name, jobTitle "Product Manager", worksFor UnifyApps, sameAs [LinkedIn, tiinkr.com], email.
- **Open Graph image text:** "Ideas in. Working AI products out." on the dark background with the SM. mark.

## 12. Hard rules

1. Tiinkr is the **only** personal project. Everything else is UnifyApps company work and must be labelled that way.
2. Never name clients or customers.
3. Never invent metrics, users, revenue, testimonials or awards.
4. Tiinkr is co-founded: say "co-founded" for ownership, "I designed, coded and deployed it" for his part.
5. Do not publish his phone number.
6. Keep the wording plain and unboastful.
7. If a fact is missing, use `[PLACEHOLDER]` and mention it in the final message.

## 13. Still missing (ask him)

- Resume PDF file.
- Real Tiinkr screenshots or a short screen recording.
- Anything real about Tiinkr's usage or feedback (only add what he confirms).
- A professional photo (optional).
- A custom domain (optional).
