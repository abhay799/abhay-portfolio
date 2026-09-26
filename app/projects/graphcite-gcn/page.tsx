import Link from "next/link";

const stats = [
  {
    label: "Paper Nodes",
    value: "2,708",
  },
  {
    label: "Directed Edges",
    value: "10,556",
  },
  {
    label: "Node Features",
    value: "1,433",
  },
  {
    label: "Classes",
    value: "7",
  },
];

const stack = [
  "PyTorch",
  "PyTorch Geometric",
  "Graph Convolutional Networks",
  "ONNX",
  "ONNX Runtime",
  "FastAPI",
  "JavaScript",
  "Streamlit",
  "Cora Dataset",
];

const improvements = [
  "Corrected the probabilities API contract.",
  "Standardized inference around the SimpleGCN architecture.",
  "Added missing Streamlit, Pandas and Requests dependencies.",
  "Added edge-index bounds validation for custom graphs.",
  "Replaced simulated browser neighbors with real Cora 1-hop neighbors.",
  "Removed misleading hard-coded topic labels from sample-node buttons.",
  "Corrected the Streamlit default API URL.",
  "Fixed early-stopping checkpoint capture using a copied model state.",
  "Changed TF-IDF fitting so preprocessing statistics are learned from training nodes rather than the full graph.",
];

const capabilities = [
  {
    title: "Real Cora Node Inference",
    body:
      "Submit one or more Cora node indices and receive predicted research-topic classes, logits, softmax probabilities and real 1-hop citation neighbors.",
  },
  {
    title: "Graph Neighborhood Exploration",
    body:
      "The browser interface visualizes actual citation relationships from the Cora graph rather than generated or simulated neighbors.",
  },
  {
    title: "Custom Graph Inference",
    body:
      "The API accepts graph-shaped inputs with 1,433-dimensional node features and validates submitted edge indices against the node count.",
  },
  {
    title: "CPU ONNX Runtime",
    body:
      "The trained GCN is exported to ONNX so inference can run through ONNX Runtime on CPU without requiring a GPU.",
  },
];

export default function GraphCiteGCNPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://graph-cite-gcn-u3jl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/abhay799/GraphCite-GCN"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <section className="mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900/90 to-cyan-950/20 p-7 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Graph Machine Learning
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            GraphCite-GCN
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            An interactive Graph Convolutional Network node-classification
            system for the Cora citation network, combining graph inference,
            real citation-neighborhood exploration, ONNX Runtime and FastAPI.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                {stat.label}
              </p>

              <p className="mt-3 text-2xl font-semibold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
              Problem
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Classifying papers using graph structure
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Citation networks contain information not only in paper features,
              but also in the links between papers. GraphCite-GCN demonstrates
              how a Graph Convolutional Network can combine node features and
              citation relationships to classify research papers into topic
              classes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
              Dataset
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Cora citation network
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              The demo works with 2,708 scientific-paper nodes, 10,556 directed
              edge entries, 1,433-dimensional node features and 7
              research-topic classes.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Architecture
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Training to browser inference
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-5">
            {[
              "Cora Dataset",
              "PyTorch Geometric GCN",
              "ONNX Export",
              "ONNX Runtime + FastAPI",
              "Browser / Streamlit UI",
            ].map((step, index) => (
              <div
                key={step}
                className="relative rounded-xl border border-slate-800 bg-slate-900/50 p-4"
              >
                <span className="text-xs font-semibold text-cyan-400">
                  0{index + 1}
                </span>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
              Capabilities
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              What the deployed system demonstrates
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {capability.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.03] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Correctness Hardening
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Improvements applied to the cleaned implementation
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {improvements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-[10px] text-emerald-300">
                  ✓
                </span>

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
              API
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Real Cora inference
            </h2>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-black/30 p-4 text-xs leading-6 text-slate-300">
{`POST /predict/cora_node

{
  "node_indices": [0, 42]
}`}
            </pre>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Responses contain predicted classes, probabilities, raw logits
              and real one-hop Cora neighbors.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-400">
              Custom Graph API
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Graph-shaped input validation
            </h2>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-black/30 p-4 text-xs leading-6 text-slate-300">
{`POST /predict

{
  "node_features": [
    [0.0, "... 1433 values ..."]
  ],
  "edge_indices": [[0], [0]]
}`}
            </pre>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Custom nodes must provide exactly 1,433 features, and submitted
              edge indices are checked against the graph&apos;s node count.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-amber-400/15 bg-amber-400/[0.03] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
            Modeling Limitation
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Arbitrary features are not automatically meaningful
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-400">
            The custom-graph endpoint accepts arbitrary 1,433-dimensional
            vectors because that is the model&apos;s technical input contract.
            Meaningful topic predictions still require features encoded using
            the same Cora vocabulary and feature semantics used during
            training. Random vectors are useful for exercising the API, not for
            interpreting scientific-paper topics.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Attribution & Scope
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Portfolio presentation boundary
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            This cleaned project was adapted from an educational/reference
            implementation. The portfolio case study highlights the validation,
            correctness hardening, API cleanup, deployment work and interface
            improvements applied to this copy. Original upstream repository,
            tutorial attribution and licensing should be retained and verified
            before redistribution or presenting the base implementation as
            original work.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.03] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Explore
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Try GraphCite-GCN
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            Explore citation-node inference and graph-neighborhood
            visualization in the deployed application, or inspect the project
            implementation on GitHub.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://graph-cite-gcn-u3jl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Open Live Demo ↗
            </a>

            <a
              href="https://github.com/abhay799/GraphCite-GCN"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              View GitHub ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}