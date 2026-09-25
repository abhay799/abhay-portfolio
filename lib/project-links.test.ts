import assert from "node:assert/strict";
import test from "node:test";
import type { Project } from "../data/site.ts";
import {
  getExperienceLinks,
  getProjectCardActions,
  isUsableExternalUrl,
} from "./project-links.ts";

const baseProject: Project = {
  title: "Example",
  eyebrow: "Example category",
  description: "Example description",
  status: "Active",
  tags: [],
  github: "https://github.com/example/project",
};

test("rejects empty and placeholder-like deployment values", () => {
  assert.equal(isUsableExternalUrl(undefined), false);
  assert.equal(isUsableExternalUrl(""), false);
  assert.equal(isUsableExternalUrl("   "), false);
  assert.equal(isUsableExternalUrl("#"), false);
  assert.equal(isUsableExternalUrl("PASTE_SENTINELOPS_URL_HERE"), false);
  assert.equal(isUsableExternalUrl("http://example.com"), false);
  assert.equal(isUsableExternalUrl("https://example.com"), true);
});

test("builds only configured experience links in product-first order", () => {
  const links = getExperienceLinks({
    ...baseProject,
    demo: "https://demo.example.com",
    apiDocs: "https://api.example.com/docs",
    api: "https://api.example.com",
    health: "#",
    readiness: "PASTE_READY_URL_HERE",
  });

  assert.deepEqual(
    links.map(({ key }) => key),
    ["demo", "apiDocs", "api", "github"],
  );
});

test("keeps GitHub when no optional deployment fields are configured", () => {
  assert.deepEqual(
    getExperienceLinks(baseProject).map(({ key }) => key),
    ["github"],
  );
});

test("builds compact homepage actions in the required order", () => {
  const actions = getProjectCardActions({
    ...baseProject,
    demo: "https://demo.example.com",
    caseStudy: "/projects/example",
  });

  assert.deepEqual(
    actions.map(({ kind, label }) => [kind, label]),
    [
      ["internal", "Case Study →"],
      ["external", "Live Demo ↗"],
      ["external", "GitHub ↗"],
    ],
  );
});

test("MERCURY X homepage actions are Case Study then GitHub with no Live Demo", () => {
  const mercuryX: Project = {
    title: "MERCURY X",
    eyebrow: "AI Workload Orchestration",
    description:
      "AI workload orchestration and scheduling engine for compiling workloads into hardware-aware, SLO-aware and safety-validated execution plans.",
    status: "Active",
    tags: [
      "Distributed Systems",
      "Scheduling",
      "AI Infrastructure",
      "APIs",
      "Telemetry",
    ],
    github: "https://github.com/abhay799/mercury-x",
    caseStudy: "/projects/mercury-x",
  };

  const actions = getProjectCardActions(mercuryX);

  assert.deepEqual(
    actions.map(({ kind, label }) => [kind, label]),
    [
      ["internal", "Case Study →"],
      ["external", "GitHub ↗"],
    ],
  );
});

test("MERCURY X experience links expose only GitHub without deployment metadata", () => {
  const mercuryX: Project = {
    title: "MERCURY X",
    eyebrow: "AI Workload Orchestration",
    description:
      "AI workload orchestration and scheduling engine for compiling workloads into hardware-aware, SLO-aware and safety-validated execution plans.",
    status: "Active",
    tags: [
      "Distributed Systems",
      "Scheduling",
      "AI Infrastructure",
      "APIs",
      "Telemetry",
    ],
    github: "https://github.com/abhay799/mercury-x",
    caseStudy: "/projects/mercury-x",
  };

  assert.deepEqual(
    getExperienceLinks(mercuryX).map(({ key }) => key),
    ["github"],
  );
});

test("omits Live Demo when a project has no usable deployment", () => {
  const actions = getProjectCardActions({
    ...baseProject,
    demo: "PASTE_DEPLOYMENT_HERE",
    caseStudy: "/projects/example",
  });

  assert.deepEqual(
    actions.map(({ label }) => label),
    ["Case Study →", "GitHub ↗"],
  );
});