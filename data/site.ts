export const siteConfig = {
  name: "Abhay Kumar",
  role: "AI/ML Engineer · Data Scientist · AI Systems Builder",
  description:
    "I build data-driven and AI systems across financial crime intelligence, reliability engineering, machine learning and distributed AI infrastructure.",
  location: "India",
  email: "abhaykumar38921@gmail.com",
  github: "https://github.com/abhay799",
  linkedin: "https://www.linkedin.com/in/abhay-kumar-ba1719261",
  resume: "",
};

export const skills = [
  {
    title: "Data & Feature Engineering",
    description:
      "Applied in GraphShield AML to build transaction features, graph-derived signals and analysis-ready datasets.",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Polars",
      "PostgreSQL",
      "DuckDB",
      "Feature Engineering",
    ],
  },
  {
    title: "Modeling & Experimentation",
    description:
      "Used in GraphCite-GCN and GraphShield AML for model development, graph learning and evaluation workflows.",
    items: [
      "scikit-learn",
      "LightGBM",
      "PyTorch",
      "PyTorch Geometric",
      "Graph ML",
      "Deep Learning",
      "Statistics",
      "Model Evaluation",
    ],
  },
  {
    title: "MLOps & Serving",
    description:
      "Used across GraphShield AML, GraphCite-GCN and MERCURY X to serve models and AI workloads through production-style APIs and execution layers.",
    items: [
      "FastAPI",
      "REST APIs",
      "ONNX Runtime",
      "Docker",
      "Model Serving",
      "API Validation",
      "Telemetry",
    ],
  },
  {
    title: "Infra & Reliability",
    description:
      "Applied across SentinelOps AI, MERCURY X and ATLAS X for observability, distributed execution and controlled AI operations.",
    items: [
      "Kafka",
      "Redis",
      "OpenTelemetry",
      "Docker",
      "Distributed Systems",
      "Reliability Engineering",
      "AI Governance",
    ],
  },
  {
    title: "Applied AI Systems",
    description:
      "Used where retrieval, agents and language-model components are part of larger engineered systems rather than standalone demos.",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "FAISS",
      "Agents",
      "Prompt Engineering",
    ],
  },
];

export type ProjectStatus =
  | "Flagship"
  | "Active"
  | "Research";

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  github: string;
  demo?: string;
  api?: string;
  apiDocs?: string;
  health?: string;
  readiness?: string;
  caseStudy?: string;
  metric?: string;
};

export const graphShieldProject: Project = {
  title: "GraphShield AML",
  eyebrow: "Financial Crime Intelligence",
  description:
    "Helps investigators surface suspicious transaction patterns using graph analysis, explainability and policy-grounded evidence.",
  status: "Flagship",
  tags: [
    "Graph ML",
    "RAG",
    "Polars",
    "DuckDB",
    "FastAPI",
  ],
  github: "https://github.com/abhay799/graphshield-aml",
  demo: "https://portfolio-sandy-eta-4ipb9hl1lz.vercel.app",
  api: "https://graphshield-api-production.up.railway.app",
  apiDocs:
    "https://graphshield-api-production.up.railway.app/docs",
  health:
    "https://graphshield-api-production.up.railway.app/health",
  readiness:
    "https://graphshield-api-production.up.railway.app/ready",
  caseStudy: "/projects/graphshield-aml",
};

export const sentinelOpsProject: Project = {
  title: "SentinelOps AI",
  eyebrow: "Reliability Intelligence",
  description:
    "Detects reliability risks, explains likely root causes and gates remediation through safety checks and recovery verification.",
  status: "Flagship",
  tags: [
    "AIOps",
    "SRE",
    "Causal RCA",
    "Kafka",
    "OpenTelemetry",
    "Docker",
  ],
  github: "https://github.com/abhay799/sentinelops-ai",
  demo: "https://sentinelops-ai-weld.vercel.app",
  api:
    "https://sentinelops-ai-backend-production.up.railway.app",
  apiDocs:
    "https://sentinelops-ai-backend-production.up.railway.app/docs",
  health:
    "https://sentinelops-ai-backend-production.up.railway.app/health",
  readiness:
    "https://sentinelops-ai-backend-production.up.railway.app/ready",
  caseStudy: "/projects/sentinelops-ai",
};

export const mercuryXProject: Project = {
  title: "MERCURY X",
  eyebrow: "AI Workload Orchestration",
  description:
    "Orchestrates AI workloads using hardware-aware, SLO-aware execution planning, scheduling and recovery.",
  status: "Active",
  tags: [
    "Distributed Systems",
    "Scheduling",
    "AI Infrastructure",
    "APIs",
    "Telemetry",
  ],
  github: "https://github.com/abhay799/mercury-x",
  demo: "https://mercury-x-gules.vercel.app",
  caseStudy: "/projects/mercury-x",
};

export const atlasXProject: Project = {
  title: "ATLAS X",
  eyebrow: "AI Governance & Mission Control",
  description:
    "Governs autonomous AI actions through policy, authority, risk controls, provenance and human oversight.",
  status: "Active",
  tags: [
    "AI Governance",
    "Agents",
    "Policy",
    "Risk",
    "Human Oversight",
  ],
  github: "https://github.com/abhay799/atlas-x",
  demo: "https://atlas-x-theta.vercel.app",
  caseStudy: "/projects/atlas-x",
};

export const projects: Project[] = [
  graphShieldProject,
  sentinelOpsProject,
  mercuryXProject,
  atlasXProject,
  {
    title: "GraphCite-GCN",
    eyebrow: "Graph Machine Learning",
    description:
      "Classifies research papers by learning from both paper features and relationships within the citation graph.",
    metric:
      "2,708 paper nodes · 10,556 directed edges · 1,433 features · 7 classes",
    status: "Flagship",
    tags: [
      "GCN",
      "PyTorch",
      "ONNX",
      "FastAPI",
      "Graph ML",
    ],
    github: "https://github.com/abhay799/GraphCite-GCN",
    demo: "https://graph-cite-gcn-u3jl.vercel.app/",
    caseStudy: "/projects/graphcite-gcn",
  },
];