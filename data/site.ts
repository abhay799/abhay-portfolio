export const siteConfig = {
  name: "Abhay Kumar",
  role: "AI/ML Engineer · Data Scientist · AI Systems Builder",
  description:
    "I build data-driven and AI systems across financial crime intelligence, reliability engineering, machine learning and distributed AI infrastructure.",
  location: "India",
  email: "your-email@example.com",
  github: "https://github.com/abhay799",
  linkedin: "https://www.linkedin.com/in/abhay-kumar-ba1719261",
  resume: "#",
};

export const skills = [
  {
    title: "Programming & Data",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Polars",
      "PostgreSQL",
      "DuckDB",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "scikit-learn",
      "LightGBM",
      "Feature Engineering",
      "Model Evaluation",
      "Statistics",
      "Deep Learning",
    ],
  },
  {
    title: "AI Engineering",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "FAISS",
      "Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "FastAPI",
      "REST APIs",
      "Redis",
      "Docker",
      "Kafka",
      "Distributed Systems",
    ],
  },
];

export type ProjectStatus = "Flagship" | "Active" | "Research";

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
};

export const graphShieldProject: Project = {
  title: "GraphShield AML",
  eyebrow: "Financial Crime Intelligence",
  description:
    "Graph-native AML intelligence platform combining graph investigation, temporal feature engineering, machine learning, policy retrieval, explainability and evidence-backed investigation workflows.",
  status: "Flagship",
  tags: ["Graph ML", "RAG", "Polars", "DuckDB", "FastAPI"],
  github: "https://github.com/abhay799/graphshield-aml",
  demo: "https://portfolio-sandy-eta-4ipb9hl1lz.vercel.app",
  api: "https://graphshield-api-production.up.railway.app",
  apiDocs: "https://graphshield-api-production.up.railway.app/docs",
  health: "https://graphshield-api-production.up.railway.app/health",
  readiness: "https://graphshield-api-production.up.railway.app/ready",
  caseStudy: "/projects/graphshield-aml",
};

export const sentinelOpsProject: Project = {
  title: "SentinelOps AI",
  eyebrow: "Reliability Intelligence",
  description:
    "Reliability intelligence and failure-prevention platform combining telemetry, prediction, correlation, RCA, safety-gated remediation and verified recovery.",
  status: "Flagship",
  tags: ["AIOps", "SRE", "Causal RCA", "Kafka", "OpenTelemetry", "Docker"],
  github: "https://github.com/abhay799/sentinelops-ai",
  demo: "https://sentinelops-ai-weld.vercel.app",
  api: "https://sentinelops-ai-backend-production.up.railway.app",
  apiDocs: "https://sentinelops-ai-backend-production.up.railway.app/docs",
  health: "https://sentinelops-ai-backend-production.up.railway.app/health",
  readiness: "https://sentinelops-ai-backend-production.up.railway.app/ready",
  caseStudy: "/projects/sentinelops-ai",
};

export const projects: Project[] = [
  graphShieldProject,
  sentinelOpsProject,
  {
    title: "MERCURY X",
    eyebrow: "Distributed AI Infrastructure",
    description:
      "Distributed AI workload execution platform focused on scheduling, workload placement, SLO awareness, telemetry and reliable execution.",
    status: "Active",
    tags: [
      "Distributed Systems",
      "Scheduling",
      "AI Infrastructure",
      "APIs",
      "Telemetry",
    ],
    github: "https://github.com/abhay799/mercury-x",
  },
  {
    title: "GraphCite-GCN",
    eyebrow: "Graph Machine Learning",
    description:
      "Interactive Graph Convolutional Network project for citation-network node classification using the Cora dataset, ONNX Runtime and FastAPI.",
    status: "Flagship",
    tags: ["GCN", "PyTorch", "ONNX", "FastAPI", "Graph ML"],
    github: "https://github.com/abhay799/GraphCite-GCN",
    demo: "https://graph-cite-gcn-u3jl.vercel.app/",
  },
];
