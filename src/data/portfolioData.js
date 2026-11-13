/**
 * SUBODH KUMAR — PROFESSIONAL DATA LEDGER
 * Unified profile: Engineering depth, Technical Product Ownership & Systems Architecture.
 */

export const PERSONAL_INFO = {
  name: "Subodh Kumar",
  title: "Software Engineer · Product & Systems Architecture",
  tagline: "Hands-on engineer bridging customer discovery, systems architecture, and production code to ship scalable mobile and cloud products.",
  email: "shiv515950@gmail.com",
  linkedin: "https://www.linkedin.com/in/subodh-kumar-7a4596316/",
  github: "https://github.com/Subodhkr2311",
};

export const CORE_DISCIPLINES = [
  {
    id: "engineering",
    title: "Software Engineering",
    tagline: "Production Code & Store Releases",
    summary: "Hands-on developer shipping clean, maintainable, and high-performance code across Flutter, Dart, Node.js, Python, and React. Delivered 2 live apps to the Google Play Store with 100% crash-free rollout.",
    highlights: [
      "Cross-platform Flutter & Dart applications with clean separation of concerns",
      "Event-driven serverless backends with Node.js and Firebase Cloud Functions",
      "Containerized Python evaluation environments with Docker and automated testing",
    ],
    badge: "Hands-on Code",
  },
  {
    id: "tpm",
    title: "Technical Product Management",
    tagline: "Discovery, PRDs & Sprint Velocity",
    summary: "Translating ambiguous business goals into granular engineering specs, interactive Figma flows, and measurable sprint milestones. Aligning technical trade-offs with business ROI.",
    highlights: [
      "Exhaustive PRDs with edge-case matrices, user journeys, and acceptance criteria",
      "Rapid Figma wireframing to validate user experience prior to code execution",
      "Direct stakeholder communication, backlog grooming, and Play Store release coordination",
    ],
    badge: "Product Ownership",
  },
  {
    id: "architecture",
    title: "Solution Architecture",
    tagline: "Scalable Systems & Event Pipelines",
    summary: "Designing robust, decoupled system architectures that scale gracefully under load. Structuring normalized cloud databases, webhook dispatchers, and state machine patterns.",
    highlights: [
      "Predictable state management using BLoC and Riverpod reactive streams",
      "Real-time sub-second synchronization via Firestore snapshot listeners",
      "Resilient webhook processors with automated retries and zero packet loss",
    ],
    badge: "Systems Design",
  },
];

export const KEY_METRICS = [
  {
    id: "apps",
    number: "2",
    suffix: "Store Apps Shipped",
    label: "Live on Google Play Store",
    detail: "Delivered FocusAce and Pantry Call from initial user journeys through live production store deployment.",
    accentColor: "neon",
  },
  {
    id: "engineers",
    number: "25",
    suffix: "Engineers Directed",
    label: "Cross-Functional Team Lead",
    detail: "Directed 25 engineers and evaluators in frontier LLM post-training (SFT, RLHF, RLVR) workflows at Ethara AI.",
    accentColor: "sunshine",
  },
  {
    id: "clients",
    number: "10+",
    suffix: "Client Prototypes",
    label: "Production-Grade Builds",
    detail: "Translated client requirements into optimized Android APKs and responsive Flutter prototypes.",
    accentColor: "fiery",
  },
  {
    id: "hackathon",
    number: "1st",
    suffix: "Rank Winner",
    label: "Smart India Hackathon",
    detail: "Won first place out of 5 engineering squads for municipal grievance resolution platform (SIH25031).",
    accentColor: "sunshine",
  },
  {
    id: "functions",
    number: "6",
    suffix: "Cloud Functions",
    label: "Serverless Event Webhooks",
    detail: "Engineered scalable Node.js serverless functions on Firebase/GCP with automated GitHub Actions CI/CD.",
    accentColor: "neon",
  },
  {
    id: "gpa",
    number: "88.8%",
    suffix: "B.Tech CSE",
    label: "Academic Distinction",
    detail: "Ranked in top academic tier across core algorithms, distributed systems, and databases at GD Goenka University.",
    accentColor: "fiery",
  },
];

export const EXPERIENCE_LEDGER = [
  {
    company: "Ethara AI",
    role: "Software Engineer",
    period: "May 2026 – Oct 2026",
    badge: "AI Post-Training & Evaluation",
    summary: "Led technical coordination for a 25-person team evaluating frontier LLMs, synthesizing Supervised Fine-Tuning (SFT), Reinforcement Learning from Human Feedback (RLHF), and Reinforcement Learning with Verifiable Rewards (RLVR).",
    bullets: [
      "Directed a cross-functional team of 25 engineers and evaluators in LLM post-training and multimodal model evaluation.",
      "Evaluated model outputs for factuality, instruction adherence, reasoning coherence, and artifact detection using Python, Docker, and Git.",
      "Established structured benchmark rubrics to mitigate hallucination, formatting drift, and jailbreak vulnerabilities.",
      "Standardized reproducible Docker evaluation containers, accelerating triage and feedback cycles by 40%."
    ],
    techStack: ["Python", "Docker", "SFT Workflows", "RLHF / RLVR", "LLM Evaluation", "Git"],
    metrics: "25 Engineers Directed · Zero Evaluation Regressions",
  },
  {
    company: "Webel.io Digitals by Sedawk Dynamics",
    role: "Flutter Developer Intern",
    period: "Feb 2026 – Apr 2026",
    badge: "Mobile Architecture & Store Release",
    summary: "Owned mobile application engineering and client delivery, translating Figma wireframes into high-performance Flutter code and deploying two flagship apps to the Google Play Store.",
    bullets: [
      "Delivered 2 production applications (FocusAce and Pantry Call) to the Google Play Store, managing state architecture (BLoC, Riverpod), API integrations, and store approval.",
      "Managed direct client requirements, sprint backlog grooming, feature walkthroughs, and release milestones.",
      "Packaged and optimized 10+ client mobile prototypes and builds with high-fidelity Flutter UI.",
      "Created responsive interactive prototypes in Figma prior to writing production Dart code, streamlining client sign-offs."
    ],
    techStack: ["Flutter", "Dart", "BLoC Pattern", "Riverpod", "Google Play Console", "Figma", "REST APIs"],
    metrics: "2 Live Play Store Apps · 10+ Client Prototypes",
  },
  {
    company: "Hoffero",
    role: "Backend Developer Intern",
    period: "Jan 2026 – Feb 2026",
    badge: "Serverless & Event-Driven Webhooks",
    summary: "Collaborated in an 8-engineer squad to deploy serverless event pipelines, restructure cloud database schemas, and process real-time WhatsApp webhook triggers.",
    bullets: [
      "Collaborated in an 8-engineer team on daily backend updates across Node.js, Firebase, and Google Cloud Platform.",
      "Engineered and deployed 6 Firebase Cloud Functions with automated GitHub CI/CD workflows for WhatsApp webhook processing.",
      "Redesigned Firestore collection schemas to support transactional data integrity across dynamic communication templates.",
      "Implemented comprehensive error logging and retry mechanisms to maintain zero message loss during peak traffic bursts."
    ],
    techStack: ["Node.js", "Firebase Cloud Functions", "Google Cloud Platform", "Firestore", "WhatsApp Webhook API", "GitHub Actions"],
    metrics: "6 Cloud Functions Deployed · 8-Engineer Squad",
  },
];

export const CASE_STUDIES = [
  {
    id: "focusace",
    title: "FocusAce — Mobile Productivity Application",
    subtitle: "Distraction-Free Habit Loop Architecture Shipped to Google Play Store",
    tagline: "Live on Google Play Store",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.webel.genmoksha&pcampaignid=web_share",
    githubUrl: null,
    isPrivateRepo: true,
    tag: "LIVE ON GOOGLE PLAY",
    accent: "fiery",
    columns: {
      marketGap: "Productivity applications frequently suffer from intrusive notifications and visual clutter. Users needing sustained focus required a distraction-free, tactile habit-tracking tool with offline capability.",
      strategy: "Conducted user journey mapping and competitive feature audits. Prototyped low-cognitive-load mobile flows in Figma, finalizing critical pathways before writing Dart code to meet client release targets.",
      architecture: "Structured with clean Flutter BLoC state separation. Built deterministic local persistence using reactive streams, guaranteeing zero race conditions during offline operation with lightweight audio soundscapes.",
      proof: "Published and live on the Google Play Store (io.webel.genmoksha). Achieved 100% crash-free sessions across early releases with sub-50ms UI state transitions.",
    },
    techStack: ["Flutter", "Dart", "BLoC Architecture", "Figma", "Google Play Console", "Local Storage"],
    kpis: ["100% Crash-Free Initial Rollout", "Sub-50ms State Transitions", "Play Store ID: io.webel.genmoksha"],
  },
  {
    id: "pantry-call",
    title: "Pantry Call — Corporate Dispatch Platform",
    subtitle: "Real-Time Intra-Office Hospitality & Inventory Queue System",
    tagline: "Live Enterprise App on Google Play Store",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.webelio.pantry&pcampaignid=web_share",
    githubUrl: null,
    isPrivateRepo: true,
    tag: "ENTERPRISE PLAY STORE RELEASE",
    accent: "neon",
    columns: {
      marketGap: "Corporate offices and co-working environments often rely on fragmented chat groups or physical bell rings for hospitality orders, causing lost requests, lack of order history, and kitchen delays.",
      strategy: "Designed a two-sided operational flow: an instant one-tap employee ordering interface paired with a real-time kitchen queue dashboard featuring audio alerts and status updates.",
      architecture: "Developed in Flutter utilizing Riverpod dependency injection and Firestore real-time snapshot listeners. Implemented optimistic UI updates for instant perceived performance and FCM background push notifications.",
      proof: "Actively deployed on Google Play Store (com.webelio.pantry). Eliminated manual ordering errors and reduced intra-office pantry fulfillment latency by 65%.",
    },
    techStack: ["Flutter", "Riverpod", "Cloud Firestore", "FCM Notifications", "Google Play Console"],
    kpis: ["65% Reduction in Request Latency", "Real-Time Firestore Sync", "Play Store ID: com.webelio.pantry"],
  },
  {
    id: "civic-sih",
    title: "Civic Issue Resolution System",
    subtitle: "Municipal Grievance Platform with Automated Incident Clustering",
    tagline: "1st Rank Winner — Smart India Hackathon Internal Round SIH25031",
    playStoreUrl: null,
    githubUrl: "https://github.com/Subodhkr2311",
    isPrivateRepo: false,
    tag: "1ST RANK SIH WINNER",
    accent: "sunshine",
    columns: {
      marketGap: "Municipal grievance departments frequently struggle with duplicate complaints, unverifiable citizen locations, and lack of transparent escalation tracking for public resolutions.",
      strategy: "Conceived a transparent grievance resolution workflow. Integrated tamper-proof photo geotags with an administrative dashboard offering automated category and department routing.",
      architecture: "Full-stack architecture: Flutter mobile client connected to high-throughput Python FastAPI microservices. Integrated Google Maps API with spatial radius clustering to merge duplicate citizen reports within a 15-meter radius.",
      proof: "Won 1st Rank out of 5 engineering teams in the Smart India Hackathon Internal Round SIH25031 for superior architecture, spatial clustering, and automated escalation logic.",
    },
    techStack: ["Flutter", "Python FastAPI", "Google Maps API", "Cloud Storage", "Cloud Firestore", "Spatial Clustering"],
    kpis: ["1st Place out of 5 Competing Teams", "Automated Incident Clustering", "Tamper-Proof Geotag Audit"],
  },
  {
    id: "llm-eval-studio",
    title: "LLM Evaluation Studio & SFT Harness",
    subtitle: "Automated Benchmark Matrix, Synthetic Generation & Artifact Detection",
    tagline: "Independent AI Research & Evaluation Framework",
    playStoreUrl: null,
    githubUrl: "https://github.com/Subodhkr2311",
    isPrivateRepo: false,
    tag: "PERSONAL RESEARCH PROJECT",
    accent: "fiery",
    columns: {
      marketGap: "Fine-tuning and evaluating generative AI models without automated benchmarking leads to catastrophic forgetting, instruction drift, subtle reasoning hallucination, and untracked prompt regressions.",
      strategy: "Independently architected a modular evaluation harness that validates model outputs against strict rubrics: factual grounding, instruction compliance, multi-turn coherence, and unwanted artifact detection.",
      architecture: "Containerized Python and Docker evaluation runners executing parallelized inference scoring. Implemented synthetic data generation pipelines for Supervised Fine-Tuning (SFT) and quantitative rubric scoring with visual regression reporting.",
      proof: "Engineered as an independent research framework for modular model evaluation, automating benchmark scoring and catching reasoning hallucinations across prompt engineering iterations.",
    },
    techStack: ["Python", "FastAPI", "Docker", "SFT Workflows", "Evaluation Harness", "Benchmark Tooling"],
    kpis: ["Independent Research Initiative", "Automated Hallucination Detection", "Deterministic Rubric Scoring"],
  },
];

export const SDLC_STAGES = [
  {
    step: "01",
    title: "Problem & Market Discovery",
    badge: "Discovery",
    description: "Conducting user inquiry, competitive feature audits, and quantifiable pain-point isolation before architecting solutions.",
    deliverables: "Product Discovery Brief, Market Gap Analysis, User Personas",
  },
  {
    step: "02",
    title: "Product Specs & Figma Flows",
    badge: "Specification",
    description: "Translating business goals into detailed PRDs, edge-case matrices, and clickable high-fidelity Figma user journeys.",
    deliverables: "Comprehensive PRDs, UI State Diagrams, Interactive Figma Prototypes",
  },
  {
    step: "03",
    title: "Solution Architecture",
    badge: "Architecture",
    description: "Selecting optimal database schemas, state management patterns (BLoC/Riverpod), and resilient API service contracts.",
    deliverables: "Entity-Relationship Diagrams, Cloud Architecture, Schema Designs",
  },
  {
    step: "04",
    title: "Full-Stack & Mobile Development",
    badge: "Engineering",
    description: "Writing clean, modular, production-ready code across Flutter, Dart, Node.js, Python, and React with disciplined git hygiene.",
    deliverables: "Production Codebase, REST/FastAPI Endpoints, Clean State Layer",
  },
  {
    step: "05",
    title: "Testing & Quality Verification",
    badge: "Quality Assurance",
    description: "Automated unit tests, API integration tests, LLM post-training rubric scoring, and security reviews across webhook endpoints.",
    deliverables: "Test Coverage Reports, SFT/Benchmark Rubrics, Security Hardening",
  },
  {
    step: "06",
    title: "Store & Cloud Deployment",
    badge: "Release & Telemetry",
    description: "Google Play Console release management, GCP/Firebase serverless deployment, GitHub Actions CI/CD pipelines, and telemetry monitoring.",
    deliverables: "Google Play Store Releases, Serverless Cloud Deploys, Live Telemetry",
  },
];

export const SERVICES = [
  {
    id: "eng",
    code: "01",
    title: "Mobile App Engineering (Flutter)",
    headline: "Cross-Platform iOS & Android Apps Shipped to Production",
    summary: "Architecting native-grade mobile experiences with deterministic BLoC/Riverpod state management. Handling full Google Play Console compliance, app bundling, and production store updates.",
    deliverables: ["Cross-Platform Flutter/Dart Apps", "BLoC & Riverpod State Architectures", "Google Play Store Deployment & Compliance", "Offline Caching & Push Notifications"],
    badge: "Mobile Engineering",
  },
  {
    id: "tpm",
    code: "02",
    title: "Technical Product Management",
    headline: "0-to-1 Product Strategy, PRDs & Cross-Functional Engineering Delivery",
    summary: "Bridging the gap between business leadership and engineering. Defining roadmaps, authoring crystal-clear specifications, and running high-velocity agile sprints that ship on schedule.",
    deliverables: ["Product Requirements Documents (PRDs)", "Figma User Flow Prototyping", "Sprint Backlog Management", "Client Acceptance Walkthroughs"],
    badge: "Product Ownership",
  },
  {
    id: "arch",
    code: "03",
    title: "Solution Architecture & Cloud Systems",
    headline: "Resilient Cloud Infrastructure, Microservices & Real-Time Event Webhooks",
    summary: "Designing scalable, fault-tolerant system backbones. Structuring normalized database schemas (Firestore/PostgreSQL), serverless Cloud Functions, and webhook event listeners with sub-second response times.",
    deliverables: ["Cloud Architecture Blueprints (GCP/Firebase)", "Event-Driven Webhook Pipelines", "Database Schema Optimization", "REST & FastAPI Service Contracts"],
    badge: "Systems Architecture",
  },
  {
    id: "fullstack",
    code: "04",
    title: "Full-Stack Web Development",
    headline: "High-Performance React & Node.js Applications",
    summary: "Building fast web applications, admin portals, and interactive dashboards using modern React, Tailwind CSS, Vite, and Node.js with clean API integrations.",
    deliverables: ["Modern React & Vite Architectures", "Tailwind CSS Design Systems", "Node.js & FastAPI Backends", "CI/CD Pipeline Automation"],
    badge: "Full-Stack Web",
  },
  {
    id: "ai",
    code: "05",
    title: "Applied AI & Evaluation Harnesses",
    headline: "Automated Benchmarking, Post-Training Rubrics & Agent Testing",
    summary: "Setting up evaluation infrastructure for LLMs and generative agents. Mitigating hallucinations, tracking instruction-following drift, and orchestrating supervised fine-tuning workflows.",
    deliverables: ["SFT & LLM Evaluation Harnesses", "Automated Hallucination Detection", "Dockerized Benchmark Environments", "Multi-Turn Quality Scoring"],
    badge: "Applied AI",
  },
];

export const EDUCATION = [
  {
    institution: "GD Goenka University, Gurugram",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "Sep 2022 – Jun 2026",
    score: "88.8% Aggregate Score",
    details: "High Academic Distinction. Core coursework in Data Structures & Algorithms, Distributed Systems, Database Management Systems, Object-Oriented Analysis, and Artificial Intelligence.",
  },
  {
    institution: "B.S.S. College, Supaul",
    degree: "Senior Secondary (Class XII) — Physics, Chemistry, Mathematics",
    period: "Completed 2022",
    score: "68.8% Academic Record",
    details: "Focused scientific rigor, analytical problem solving, and foundations in mathematics and computer science.",
  },
  {
    institution: "R.S.M. Public School, Supaul",
    degree: "Secondary School Examination (Class X)",
    period: "Completed 2020",
    score: "82.0% Academic Record",
    details: "Distinction in Mathematics and Sciences. Active participation in regional science exhibitions and algorithmic puzzles.",
  },
];

export const HONOURS = [
  {
    title: "1st Rank Winner — Smart India Hackathon (Internal Round SIH25031)",
    issuer: "Ministry of Education & Govt. of Jharkhand Challenge",
    date: "2024",
    description: "Awarded 1st place among competing engineering squads for designing a civic grievance resolution system with automated spatial clustering and evidence verification.",
  },
  {
    title: "Appreciation Certificate for IT Complaint Management System",
    issuer: "GD Goenka University Administration",
    date: "2024",
    description: "Commended by university leadership for engineering a campus-wide IT grievance routing system that reduced equipment repair resolution lag by 45%.",
  },
  {
    title: "3rd Rank Best Performer in Coding Bootcamp",
    issuer: "Algorithmic Excellence & Full-Stack Intensive",
    date: "2023",
    description: "Recognized among top 3 finishers out of 100+ participating engineering candidates for speed, algorithmic elegance, and architectural completeness in timed sprint challenges.",
  },
];
