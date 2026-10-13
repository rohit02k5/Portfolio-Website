/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — every section renders from it.
 */

export const site = {
  name: "Swarna Venkata Sai Rohit",
  shortName: "Sai Rohit",
  headline: "AI/ML & Full-Stack Engineer",
  valueProp:
    "B.Tech Electrical Engineering at IIT Bhilai ('27). I build real-time intelligent systems — edge ML pipelines ingesting 1,000+ sensor readings/sec, event-driven trading platforms answering in <10ms, and AI products end to end.",
  roles: [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Real-Time Systems Engineer",
    "Competitive Programmer",
  ],
  badge: "IIT Bhilai · B.Tech EE · '27",
  email: "rohitiitbh@gmail.com",
  phone: "+91-7981544438",
  url: "https://rohit02k5.github.io/Portfolio-Website/",
  resumeFile: "Swarna-Venkata-Sai-Rohit-Resume.pdf",
  marquee: [
    "Superfone",
    "IIT Bombay — TIH-IoT",
    "IIT Bhilai — IBITF",
    "DRDO · RCI Hyderabad",
    "Amazon ML Summer School",
    "Springer Nature — VETOMAC",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/rohit02k5", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/svs-rohit-baa147283",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/rohitiitbh/",
      icon: "leetcode",
    },
    {
      label: "CodeChef",
      href: "https://www.codechef.com/users/rohit_iitbh",
      icon: "codechef",
    },
    {
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/profile/rohitbakco9",
      icon: "gfg",
    },
    { label: "Email", href: "mailto:rohitiitbh@gmail.com", icon: "mail" },
  ],
} as const;

export const stats = [
  { value: 8.86, decimals: 2, label: "CGPA at IIT Bhilai", sub: "Best SGPA 9.47" },
  {
    value: 400,
    suffix: "+",
    label: "DSA problems solved",
    sub: "Best rank 714 · CodeChef",
  },
  {
    value: 4,
    label: "Engineering internships",
    sub: "Superfone · IIT Bombay · IIT Bhilai · DRDO",
  },
  {
    value: 2.23,
    decimals: 2,
    suffix: "%",
    label: "Amazon ML Summer School",
    sub: "3,000 selected / 1,34,421 applicants",
  },
] as const;

export const about = {
  lead: "I'm a final-year Electrical Engineering undergrad at IIT Bhilai who works at the seam of machine learning and production software.",
  body: [
    "Over four internships I've shipped iPaaS integrations reviewed by Pabbly Connect and Zapier, run real-time fault-detection ML on Raspberry Pi edge nodes streaming to HoloLens AR, built a role-based campus platform used by 1,000+ students, and parsed mission-critical OBC telemetry at DRDO.",
    "Outside internships, I build systems that stress real constraints — an event-driven trading platform on Redis Pub/Sub, a Gemini-powered AI workspace, and a physics-guided pipeline that catalogued 1.3M+ lunar craters. My research on vibration-based condition monitoring was published and presented at Springer Nature's VETOMAC conference at IIT Guwahati.",
  ],
} as const;

export interface Experience {
  role: string;
  org: string;
  period: string;
  tagline?: string;
  points: string[];
  tags: string[];
  certificate?: string;
}

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern — Backend, APIs & Integrations",
    org: "Superfone",
    period: "May 2026 – Jul 2026",
    points: [
      "Built and published the Superfone iPaaS app on Pabbly Connect and Zapier end-to-end (Node.js/TypeScript/Express) — WABA v1 template messaging, v2 campaign broadcast API, and v3 deferred-enrichment media webhooks, with dynamic dropdowns, x-api-key auth, and header-based idempotency; passed both partner app-directory reviews.",
      'Built server-side "Invoke Superfone Variables" auto-filling templates from CRM/org data at send time with double-debit-safe wallet handling (MongoDB/PostgreSQL/Redis); audited the superfone-api codebase and scoped a Zoho + HubSpot integration, flagging blockers pre-build.',
    ],
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Redis", "WABA"],
    certificate:
      "https://drive.google.com/file/d/1hlsR8w16bjH1aOnAtQDfwVdT952i0xul/view?usp=sharing",
  },
  {
    role: "Software Engineering Intern — Real-Time Systems",
    org: "IIT Bombay · TIH-IoT",
    period: "Dec 2024 – Oct 2025",
    tagline:
      "AR-based tool condition monitoring — real-time ML fault detection with AR visualization and haptic alerts.",
    points: [
      "Built an async, event-driven edge pipeline on Raspberry Pi ingesting 1,000+ IoT sensor readings/sec at sub-100ms latency via non-blocking WebSocket I/O; deployed a VAE-based 1D-CNN classifier for real-time tool-wear detection (fresh / worn / critical).",
      "Designed a hybrid REST control plane + WebSocket/MQTT Pub/Sub data plane streaming to CNC machines, HoloLens AR, and ESP32 haptic devices; ran fault-tolerant Linux systemd services at 99.5% uptime with PyTest coverage.",
    ],
    tags: [
      "Python",
      "WebSockets",
      "MQTT",
      "Raspberry Pi",
      "1D-CNN",
      "HoloLens",
      "systemd",
    ],
    certificate: "https://drive.google.com/file/d/1KMngdrW8YRtTRhCM1_pvNir3VDpuRYlx/view",
  },
  {
    role: "Software Engineering Intern — Platform Development",
    org: "IIT Bhilai · IBITF",
    period: "Jun 2025 – Sep 2025",
    tagline: "Unified role-based digital platform for campus operations.",
    points: [
      "Built and shipped a full-stack platform (React + TypeScript, FastAPI, PostgreSQL) for 1,000+ students and 70+ faculty across academic, mess, and healthcare workflows; REST APIs with async/await, Pydantic validation, and pooling.",
      "Implemented server-side RBAC across 10+ roles with authorization middleware; built modular React + TypeScript UI components with configurable theming, cutting development time by 40%.",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "RBAC"],
    certificate: "https://drive.google.com/file/d/1En52qWheab6xfy1O9j0SMe6zNNYJK1F5/view",
  },
  {
    role: "Research Intern — Embedded Systems",
    org: "DRDO · RCI Hyderabad",
    period: "May 2025 – Jun 2025",
    points: [
      "Developed Python parsers that decode raw hexadecimal OBC telemetry into structured JSON, optimized with bitwise operations and NumPy; validated correctness under a senior scientist for mission-critical data ingestion.",
    ],
    tags: ["Python", "NumPy", "Embedded Systems", "Telemetry"],
    certificate: "https://drive.google.com/file/d/1X6T1zwPx4lFmQmakOtKWbZxZQZuy9Qbe/view",
  },
];

export type ProjectCategory = "AI/ML" | "Full-Stack";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  year: number;
  categories: ProjectCategory[];
  tech: string[];
  links: { live?: string; github?: string };
  impact: string;
  modal: {
    problem: string;
    approach: string[];
    architecture?: string;
    results: string[];
    role: string;
  };
}

export const projectFilters: ("All" | ProjectCategory)[] = ["All", "AI/ML", "Full-Stack"];

export const projects: Project[] = [
  {
    id: "quantyx",
    title: "QuantyX",
    tagline: "Real-time event-driven trading platform",
    year: 2025,
    categories: ["Full-Stack"],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "Redis Pub/Sub",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
      "Docker",
    ],
    links: {
      live: "https://quantyx-live.vercel.app/trade",
      github: "https://github.com/rohit02k5/QuantyX-Trading-Platform",
    },
    impact: "<10ms API responses · zero-polling order fills",
    modal: {
      problem:
        "Retail trading UIs typically poll for order status and block on execution. QuantyX decouples order intake from execution so the API stays instant and the UI updates the moment a fill happens.",
      approach: [
        "Architected a 3-service event-driven backend — API Gateway, Execution Service, and Event Service — in an NPM-workspaces monorepo.",
        "Redis Pub/Sub acts as the command bus, decoupling intake from execution and returning API responses in <10ms while a worker HMAC-SHA256-signs orders on Binance Testnet.",
        "Built a WebSocket fan-out layer (Map<userId, Set<WebSocket>>) pushing order-fill updates with zero polling.",
      ],
      architecture:
        "API Gateway → Redis Pub/Sub command bus → Execution worker (HMAC-signed Binance Testnet orders) → Event Service → WebSocket fan-out → Next.js 14 + TypeScript frontend with flicker-free TradingView charts via ref-based updates. PostgreSQL + Prisma, Zod, JWT, Docker.",
      results: [
        "Sub-10ms API responses on order placement",
        "Real-time fills pushed to clients with zero polling",
        "Flicker-free chart rendering via ref-based updates",
      ],
      role: "Solo — architecture, backend, and frontend.",
    },
  },
  {
    id: "quantum",
    title: "Quantum",
    tagline: "Unified AI intelligence suite & conversational agent",
    year: 2025,
    categories: ["AI/ML", "Full-Stack"],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Gemini 2.5 Flash",
      "Plotly.js",
      "Passport.js",
      "JWT",
    ],
    links: {
      live: "https://quantum-chat-frontend.onrender.com/login",
      github: "https://github.com/rohit02k5/QUANTUM-CHAT-AI-WORKSPACE",
    },
    impact: "7 AI modules · resilient Gemini orchestration",
    modal: {
      problem:
        "AI tools are fragmented — chat, document Q&A, NLP analysis, and reporting live in separate products. Quantum unifies them in one workspace behind a resilient LLM orchestration layer.",
      approach: [
        "Built a full-stack AI workspace (MERN) orchestrating Gemini 2.5 Flash across 7 modules — multi-turn chat with PDF/DOCX/TXT ingestion, an NLP Insight Engine rendering entities/relationships/sentiment as interactive 3D graphs (Plotly.js), and an Executive Assistant generating strategy reports.",
        "Engineered retry-with-exponential-backoff (3 attempts, automatic Gemini 2.5 → 1.5-Flash fallback) for AI-call resilience.",
        "Secured the platform with Passport.js OAuth 2.0 (Google/GitHub), dual-token JWT (15-min access + 15-day HttpOnly refresh), and Helmet/CORS hardening.",
      ],
      results: [
        "7 AI modules behind one authenticated workspace",
        "Automatic model fallback keeps AI calls resilient",
        "Dual-token JWT auth with OAuth 2.0 sign-in",
      ],
      role: "Solo — full-stack design, LLM orchestration, and security.",
    },
  },
  {
    id: "sentinelai",
    title: "SentinelAI",
    tagline: "Real-time CCTV anomaly & weapon detection",
    year: 2025,
    categories: ["AI/ML"],
    tech: ["Python", "CLIP (ViT)", "DSANet", "YOLOv8", "FastAPI", "React", "SQLite"],
    links: {
      github: "https://github.com/rohit02k5/Unified-Multi-Model-Surveillance-Framework",
    },
    impact: "Parallel behavioral + weapon detection on live video",
    modal: {
      problem:
        "CCTV monitoring is passive — incidents are reviewed after the fact. SentinelAI flags anomalies and weapons in real time and alerts operators as events unfold.",
      approach: [
        "Engineered a real-time pipeline sampling live video frames and extracting 512-D ViT-based CLIP embeddings over a rolling 32-frame buffer for temporal context.",
        "Ran DSANet for behavioral anomaly scoring in parallel with YOLOv8 for weapon/firearm detection, triggering a danger event on either signal.",
        "On a danger event, classified the flagged frame into specific crime categories via a pretrained Hugging Face CCTV-crime classifier.",
      ],
      results: [
        "Real-time alerts surfaced on a FastAPI + React dashboard",
        "Event metadata and annotated frames logged to SQLite",
        "Temporal CLIP embeddings + dual-model detection pipeline",
      ],
      role: "Solo — CV pipeline, backend, and dashboard.",
    },
  },
  {
    id: "craterx",
    title: "CraterX",
    tagline: "Precision lunar crater detection on LROC imagery",
    year: 2025,
    categories: ["AI/ML"],
    tech: ["Python", "OpenCV", "NumPy", "SciPy"],
    links: { github: "https://github.com/rohit02k5/CraterX" },
    impact: "1.3M+ micro-craters detected & classified",
    modal: {
      problem:
        "Lunar crater catalogues underpin terrain analysis and landing-site selection, but multi-gigabyte LROC NAC GeoTIFFs defeat naive detection pipelines on consumer hardware.",
      approach: [
        "Built a physics-guided detection pipeline using solar-illumination metadata, with a memory-efficient sliding-window scheme for multi-GB rasters on consumer hardware.",
        "Developed a sub-pixel crater-fitting solver with multi-view registration (Fourier Phase Correlation, cKDTree).",
      ],
      results: [
        "Detected and classified 1.3M+ micro-craters",
        "Generated catalogues, CSFD distributions, and density-heatmap overlays",
      ],
      role: "Solo — pipeline design, CV algorithms, and analysis tooling.",
    },
  },
  {
    id: "traffic",
    title: "Traffic Demand Prediction",
    tagline: "15-minute demand forecasting from tabular data",
    year: 2025,
    categories: ["AI/ML"],
    tech: ["LightGBM", "XGBoost", "HistGradientBoosting", "Feature Engineering"],
    links: { github: "https://github.com/rohit02k5/Traffic-Demand-Prediction" },
    impact: "R² ≈ 0.95 under 5-fold cross-validation",
    modal: {
      problem:
        "Predicting short-horizon traffic demand requires leak-free features and models that generalize across locations and time slots.",
      approach: [
        "Trained and blended LightGBM, XGBoost, and HistGradientBoosting to predict 15-min traffic demand for 41,778 slots from a 77K-row dataset.",
        "Engineered 47 features including leak-free out-of-fold target encoding and geohash→lat/lon decoding.",
      ],
      results: ["Reached R² ≈ 0.95 under 5-fold cross-validation"],
      role: "Solo — feature engineering, model blending, and evaluation.",
    },
  },
  {
    id: "neurapix",
    title: "NeuraPix",
    tagline: "AI image generation platform",
    year: 2025,
    categories: ["AI/ML", "Full-Stack"],
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Stability AI SDXL",
      "Cloudinary",
    ],
    links: {
      github: "https://github.com/rohit02k5/NeuraPix-AI-IMAGE-GENERATOR-",
    },
    impact: "SDXL generation + gamified community gallery",
    modal: {
      problem:
        "Text-to-image tools either lock output behind silos or lack any community loop. NeuraPix pairs SDXL generation with a public gallery and coin-based gamification.",
      approach: [
        "Built a full-stack platform (React + Vite, Node.js/Express, MongoDB) proxying Stability AI's SDXL for 1024×1024 generation, with server-side Cloudinary upload converting base64 output to permanent CDN URLs; JWT auth with bcrypt.",
        "Added a community gallery with debounced search, a dual public/private save flow, and coin-based gamification (atomic MongoDB $inc + top-50 leaderboard) with a from-scratch Canvas particle UI.",
      ],
      results: [
        "Permanent CDN-hosted generations via server-side Cloudinary upload",
        "Gamified gallery with atomic coin writes and a top-50 leaderboard",
        "Custom Canvas particle UI cut page load by 60%",
      ],
      role: "Solo — full-stack build, auth, and gamification.",
    },
  },
];

export const publications = [
  {
    title: "Conference Publication & Presentation",
    venue: "Springer Nature — International VETOMAC Conference, IIT Guwahati",
    year: 2025,
    detail: "Paper ID 259 · Published & presented",
    link: "https://drive.google.com/file/d/1dCLDcBjYCZIRSUtT1zoXOaRwvQb4PwMP/view?usp=sharing",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    skills: ["Python", "C++", "C", "TypeScript", "JavaScript", "SQL"],
  },
  {
    name: "AI / ML",
    skills: [
      "LLMs & LLM APIs",
      "Machine Learning",
      "Deep Learning",
      "Transformers",
      "Vision Transformers (ViT)",
      "OpenCV",
      "YOLOv8",
    ],
  },
  {
    name: "Frontend",
    skills: ["React + TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend, APIs & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Microservices",
      "Event-driven / async",
      "OAuth 2.0 / JWT",
      "Pydantic",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git / GitHub",
      "CI/CD (GitHub Actions)",
      "Docker",
      "Linux (systemd)",
      "PyTest",
      "Railway",
      "iPaaS (Pabbly, Zapier)",
      "WhatsApp Business API",
    ],
  },
  {
    name: "CS Fundamentals",
    skills: [
      "DSA (400+ problems)",
      "OOP",
      "Operating Systems",
      "Computer Networks (TCP/IP)",
      "DBMS",
      "Probability & Statistics",
    ],
  },
];

export const education = [
  {
    school: "Indian Institute of Technology Bhilai",
    degree: "B.Tech — Electrical Engineering",
    period: "Jul 2023 – May 2027",
    grade: "CGPA 8.86",
    detail: "Best SGPA 9.47",
    current: true,
  },
  {
    school: "FIITJEE · TSBIE",
    degree: "Class XII — MPC (Maths, Physics, Chemistry)",
    period: "2021 – 2023",
    grade: "97.4%",
  },
  {
    school: "Defence Laboratories School · CBSE",
    degree: "Class X",
    period: "2021",
    grade: "94.8%",
  },
];

export const awards = [
  {
    title: "Amazon ML Summer School",
    org: "Amazon",
    year: 2026,
    detail: "Selected among 3,000 of 1,34,421 applicants — ~2.23% selection rate",
  },
  {
    title: "Young Researcher Award",
    org: "IIT Bhilai Alumni Association",
    year: 2026,
    link: "https://drive.google.com/file/d/1QS0GHMwGZCYUy8fMFS6e_PVFXs71obLA/view",
  },
  {
    title: "Flipkart GRiD 8.0",
    org: "Flipkart",
    year: 2026,
    detail: "Qualified to Round 3 — Pan-India",
  },
  {
    title: "TIH-IoT Chanakya Fellowship",
    org: "IIT Bombay",
    year: 2024,
  },
  {
    title: "IBITF Technology Innovation Fellowship",
    org: "IIT Bhilai",
    year: 2025,
  },
  {
    title: "ATF Stage-I Qualified",
    org: "Competitive Programming",
    year: 2024,
    detail: "Top 4,000 of 20,000+ candidates",
    link: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/swarna-venkata-sai-rohit.png",
  },
];

export const leadership = [
  {
    role: "Website Manager",
    org: "Student Mentorship Program, IIT Bhilai",
    period: "1 year",
  },
  { role: "Mentor", org: "Student Mentorship Program, IIT Bhilai", period: "1 year" },
  { role: "Mentor", org: "OpenLake Club, IIT Bhilai", period: "1 year" },
  { role: "Core Member", org: "FOSS Club, IIT Bhilai", period: "1 year" },
  { role: "Core Member", org: "Space Exploration Society, IIT Bhilai", period: "1 year" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
