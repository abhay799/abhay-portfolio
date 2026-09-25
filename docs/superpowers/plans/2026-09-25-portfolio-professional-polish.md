# Portfolio Professional Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the existing portfolio's SEO, social identity, contact/resume failure handling, link security, accessibility, responsive behavior, and production deployment without redesigning existing pages.

**Architecture:** Keep identity, contact, and destination values centralized in `data/site.ts`; extend the existing pure link validators and add one server-only public-asset availability helper. Use native Next.js App Router metadata, `ImageResponse` metadata routes, and page-specific metadata while preserving the current homepage and case-study component architecture.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5.9, Tailwind CSS 4, Node.js built-in test runner, ESLint, Git, Vercel through the existing GitHub integration

**Spec:** `docs/superpowers/specs/2026-09-25-portfolio-professional-polish-design.md`

## Global Constraints

- Do not redesign the portfolio or rebuild the existing GraphShield and SentinelOps case studies.
- Do not add dependencies, a CMS, database, authentication, analytics, or a new deployment project.
- Use the exact root title, description, and production URL from the specification.
- Keep all contact, profile, resume, project, and deployment destinations centralized in `data/site.ts`.
- Never render empty, `#`, `PASTE_*`, `YOUR_*`, malformed, or non-HTTPS external destinations.
- Never expose `your-email@example.com` or fabricate an email address or resume file.
- Every external link must use `target="_blank"` and `rel="noopener noreferrer"`.
- Internal case-study routes must continue using Next.js `Link`; downloadable PDF assets use a native anchor with `download`.
- Preserve GraphShield and SentinelOps safety, evidence, synthetic/demo, and human-authority boundaries.
- Do not claim guaranteed availability, production SLAs, production traffic, customers, or external certification.
- Do not force-push, rewrite Git history, or create another Vercel project.

## Review Focus

- Placeholder matching must be case-insensitive and whitespace-tolerant, including `PASTE_*`, `YOUR_*`, and the known email placeholder; Task 1 tests each class.
- Public-asset checks must reject traversal and non-PDF paths even if a file happens to exist; Task 1 tests exact accepted and rejected paths.
- The resume action must remain absent when the configured route is valid but the PDF is missing; Task 3 tests and production-render audits cover this state.
- New metadata image routes must render at their intended dimensions without importing browser-only APIs; Task 2 uses the production build and HTTP checks.
- Existing project-card and case-study destinations must remain unchanged while the broader external-link audit is applied; Tasks 3 and 5 test the existing action models and rendered output.

---

### Task 1: Contact, External URL, and Resume Validation

**Files:**
- Create: `lib/site-links.ts`
- Create: `lib/site-links.test.ts`
- Modify: `lib/project-links.ts`
- Modify: `lib/project-links.test.ts`
- Modify: `package.json`
- Modify: `data/site.ts`

**Interfaces:**
- Produces: `isUsableEmail(value?: string): value is string`, `isUsableResumePath(value?: string): value is string`, and `hasPublicResume(value?: string, projectRoot?: string): boolean`.
- Extends: `isUsableExternalUrl(value?: string)` to reject `YOUR_*` in addition to existing invalid classes.
- Produces: centralized `siteConfig.email` as an absent value and `siteConfig.resume` as `/Abhay-Kumar-Resume.pdf`.

- [ ] **Step 1: Write failing validation tests**

Create `lib/site-links.test.ts`:

```ts
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { tmpdir } from "node:os";
import { mkdtempSync } from "node:fs";
import {
  hasPublicResume,
  isUsableEmail,
  isUsableResumePath,
} from "./site-links.ts";

test("rejects missing and placeholder email values", () => {
  for (const value of [
    undefined,
    "",
    "   ",
    "your-email@example.com",
    " YOUR_EMAIL@example.com ",
    "PASTE_EMAIL_HERE",
    "YOUR_EMAIL_HERE",
    "not-an-email",
  ]) {
    assert.equal(isUsableEmail(value), false, String(value));
  }
});

test("accepts a structurally valid non-placeholder email", () => {
  assert.equal(isUsableEmail("person@example.org"), true);
});

test("accepts only the configured internal resume PDF route", () => {
  assert.equal(isUsableResumePath("/Abhay-Kumar-Resume.pdf"), true);
  assert.equal(isUsableResumePath("#"), false);
  assert.equal(isUsableResumePath("PASTE_RESUME_HERE"), false);
  assert.equal(isUsableResumePath("https://example.com/resume.pdf"), false);
  assert.equal(isUsableResumePath("/../resume.pdf"), false);
  assert.equal(isUsableResumePath("/Abhay-Kumar-Resume.docx"), false);
});

test("requires the real resume file to exist under public", () => {
  const root = mkdtempSync(join(tmpdir(), "portfolio-resume-"));
  mkdirSync(join(root, "public"));

  assert.equal(hasPublicResume("/Abhay-Kumar-Resume.pdf", root), false);

  writeFileSync(join(root, "public", "Abhay-Kumar-Resume.pdf"), "pdf");
  assert.equal(hasPublicResume("/Abhay-Kumar-Resume.pdf", root), true);
  assert.equal(hasPublicResume("/../Abhay-Kumar-Resume.pdf", root), false);
});
```

Add this case to `lib/project-links.test.ts`:

```ts
test("rejects YOUR-prefixed and malformed external URLs", () => {
  assert.equal(isUsableExternalUrl("YOUR_DEPLOYMENT_URL"), false);
  assert.equal(isUsableExternalUrl("https://"), false);
  assert.equal(isUsableExternalUrl("javascript:alert(1)"), false);
});
```

- [ ] **Step 2: Include both test files and verify RED**

Change the package script to:

```json
"test": "node --test lib/*.test.ts"
```

Run: `npm.cmd test`

Expected: FAIL because `lib/site-links.ts` does not exist and the current external URL validator does not reject every new case.

- [ ] **Step 3: Implement the site-link and public-resume validators**

Create `lib/site-links.ts`:

```ts
import { existsSync } from "node:fs";
import { join } from "node:path";

const RESUME_PATH = "/Abhay-Kumar-Resume.pdf";

function isPlaceholder(value: string): boolean {
  const normalized = value.trim().toUpperCase();
  return normalized.startsWith("PASTE_") || normalized.startsWith("YOUR_");
}

export function isUsableEmail(value?: string): value is string {
  const candidate = value?.trim();
  if (!candidate || isPlaceholder(candidate)) return false;
  if (candidate.toLowerCase() === "your-email@example.com") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate);
}

export function isUsableResumePath(value?: string): value is string {
  return value?.trim() === RESUME_PATH;
}

export function hasPublicResume(
  value?: string,
  projectRoot = process.cwd(),
): boolean {
  if (!isUsableResumePath(value)) return false;
  return existsSync(join(projectRoot, "public", RESUME_PATH.slice(1)));
}
```

In `lib/project-links.ts`, parse the candidate with `new URL(candidate)`, require `protocol === "https:"`, require a non-empty hostname, and reject normalized values beginning with either `PASTE_` or `YOUR_`. Return `false` on `URL` parsing errors.

- [ ] **Step 4: Centralize absent contact and intended resume path**

Update only these fields in `data/site.ts`:

```ts
email: "",
resume: "/Abhay-Kumar-Resume.pdf",
```

Keep the verified GitHub and LinkedIn values unchanged.

- [ ] **Step 5: Run the focused suite**

Run: `npm.cmd test`

Expected: all existing and new tests PASS with no warnings.

Run: `npm.cmd run lint`

Expected: PASS.

### Task 2: Root Metadata, Case-Study Metadata, Open Graph Image, and Icon

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/projects/graphshield-aml/page.tsx`
- Modify: `app/projects/sentinelops-ai/page.tsx`
- Create: `app/opengraph-image.tsx`
- Create: `app/icon.tsx`

**Interfaces:**
- Produces: root `Metadata`, route-level `Metadata`, `/opengraph-image`, and `/icon` metadata assets.
- Consumes: the exact copy and production URL from the specification.

- [ ] **Step 1: Capture the current metadata RED state**

With the local server running, request `/` and record that the current `<title>` is `Abhay Kumar | AI/ML Engineer & Data Scientist` and that the new Open Graph image route is absent. If no server is running, use `npm.cmd run build` and inspect the existing metadata source before implementation.

Expected: the exact new title and `/opengraph-image` route are not both present.

- [ ] **Step 2: Implement complete root metadata**

Replace the root metadata object in `app/layout.tsx` with:

```ts
const title = "Abhay Kumar | AI/ML Engineer, Data Scientist & AI Systems Builder";
const description =
  "Portfolio of Abhay Kumar — AI/ML engineering, data science, graph intelligence, reliability systems and distributed AI infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay-portfolio-delta-five.vercel.app"),
  title,
  description,
  keywords: [
    "Abhay Kumar",
    "AI/ML Engineer",
    "Data Scientist",
    "AI Systems",
    "Graph Intelligence",
    "Reliability Engineering",
    "Distributed Systems",
  ],
  authors: [
    {
      name: "Abhay Kumar",
      url: "https://abhay-portfolio-delta-five.vercel.app",
    },
  ],
  creator: "Abhay Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abhay Kumar Portfolio",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abhay Kumar — AI/ML Engineer, Data Scientist and AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};
```

- [ ] **Step 3: Add page-specific case-study metadata**

Import `Metadata` and export these objects from the route modules:

```ts
export const metadata: Metadata = {
  title: "GraphShield AML | Abhay Kumar",
  description:
    "Graph-native anti-money-laundering intelligence for connected investigation, evidence retrieval, policy context and human decision support.",
};
```

```ts
export const metadata: Metadata = {
  title: "SentinelOps AI | Abhay Kumar",
  description:
    "Reliability intelligence for telemetry, failure prediction, RCA challenge, safety-gated remediation and verified recovery.",
};
```

- [ ] **Step 4: Implement the generated Open Graph image**

Create `app/opengraph-image.tsx` using `ImageResponse` from `next/og`, with:

```ts
export const alt =
  "Abhay Kumar — AI/ML Engineer, Data Scientist and AI Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
```

The default function must return a 1200×630 flex layout with:

- background `#07090d`;
- a subtle cyan radial/linear accent made from CSS backgrounds;
- a small `AK / PORTFOLIO` label;
- heading `Abhay Kumar` at approximately 72px;
- role line `AI/ML Engineer · Data Scientist · AI Systems Builder`;
- supporting line `AI · Machine Learning · Data · Distributed Systems`;
- a cyan border/accent line;
- no external font or image request.

Use inline styles supported by `ImageResponse`; do not import Tailwind or browser APIs.

- [ ] **Step 5: Implement the generated AK icon**

Create `app/icon.tsx` using `ImageResponse`, exporting:

```ts
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
```

Render a 64×64 square with `#07090d` background, cyan border, rounded corners, and centered `AK` text in white/cyan. Do not use external artwork.

- [ ] **Step 6: Verify metadata and image routes**

Run: `npm.cmd run lint`

Expected: PASS.

Run: `npm.cmd run build`

Expected: PASS; route output includes `/opengraph-image` and `/icon` or identifies them as generated metadata assets.

From a production server, verify `/` includes the exact title, description, Open Graph fields, Twitter card, author, creator, and absolute production image URL. Verify the image and icon routes return HTTP 200 with `image/png` content types.

### Task 3: Failure-Safe Resume, Contact, and External-Link UI

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/Navbar.tsx`
- Modify: `components/ProjectCard.tsx` only if the audit finds missing security/focus attributes
- Modify: `components/ProjectExperience.tsx` only if the audit finds missing security/focus attributes
- Test: `lib/site-links.test.ts`
- Test: `lib/project-links.test.ts`

**Interfaces:**
- Consumes: `hasPublicResume`, `isUsableEmail`, `siteConfig.resume`, and existing project-link helpers.
- Produces: `Navbar({ resumeAvailable }: { resumeAvailable: boolean })`, hidden invalid contact actions, and conditional downloadable resume actions.

- [ ] **Step 1: Add a test for the actual missing resume state**

Add to `lib/site-links.test.ts`:

```ts
test("the portfolio keeps the resume hidden until the real PDF is added", () => {
  assert.equal(
    hasPublicResume("/Abhay-Kumar-Resume.pdf", join(import.meta.dirname, "..")),
    false,
  );
});
```

Run: `npm.cmd test`

Expected: PASS while documenting the required current behavior. If the user has added the real PDF before execution, update this test to assert `true` and proceed with the visible action.

- [ ] **Step 2: Make the Navbar resume-aware**

Change the component signature to:

```tsx
export function Navbar({ resumeAvailable }: { resumeAvailable: boolean }) {
```

Render the desktop and mobile resume anchors only when `resumeAvailable` is true. Both use:

```tsx
<a href={siteConfig.resume} download>
  Resume
</a>
```

Preserve existing styling, add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70`, and retain the mobile menu close behavior.

- [ ] **Step 3: Compute safe contact and resume availability on the server homepage**

In `app/page.tsx`:

```tsx
import { hasPublicResume, isUsableEmail } from "@/lib/site-links";

const resumeAvailable = hasPublicResume(siteConfig.resume);
const contactEmail = isUsableEmail(siteConfig.email) ? siteConfig.email : null;
```

Pass `<Navbar resumeAvailable={resumeAvailable} />`.

In the contact actions, render the email anchor only when `contactEmail` is non-null. Do not render an empty slot or disabled-looking fake control.

- [ ] **Step 4: Secure all homepage profile links and improve focus visibility**

Add `target="_blank"` and `rel="noopener noreferrer"` to the homepage GitHub and LinkedIn anchors. Add visible focus-ring classes to homepage anchors and Navbar controls that do not already have them.

Keep same-page fragment navigation as native anchors. Do not add external attributes to fragments or case-study `Link` elements.

- [ ] **Step 5: Audit shared project actions**

Confirm `ProjectCard` renders internal case studies through Next.js `Link` and external demo/GitHub actions through anchors with both security attributes. Confirm `ProjectExperience` applies both attributes to every generated external card. Make only targeted class or attribute changes if the current implementation fails the audit.

- [ ] **Step 6: Verify failure-safe rendered behavior**

Run: `npm.cmd test`

Expected: all tests PASS.

Run: `npm.cmd run lint`

Expected: PASS.

From the built homepage, confirm `your-email@example.com`, `mailto:`, `href="#"`, and `/Abhay-Kumar-Resume.pdf` do not appear while the email and PDF remain absent. Confirm GitHub and LinkedIn do appear with both external-link attributes.

### Task 4: Focused Accessibility and Responsive Polish

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css` only if a global overflow or focus correction is necessary
- Modify: `components/Navbar.tsx`
- Modify: `components/ProjectExperience.tsx`
- Modify: `components/DeploymentFlow.tsx`
- Modify: case-study page files only for confirmed wrapping, heading, or focus defects

**Interfaces:**
- Consumes: existing semantic page structures and responsive Tailwind layouts.
- Produces: no new public API; improves focus, wrapping, touch targets, and semantics without redesign.

- [ ] **Step 1: Run a semantic source audit before changes**

Verify each page has one `<main>` and one `<h1>`. Review heading order, nav elements, button labels, decorative `aria-hidden` usage, and focus-visible styles. Record each concrete defect before editing; do not change already-correct structures.

- [ ] **Step 2: Apply only confirmed accessibility corrections**

Expected corrections include:

- add `aria-label="Primary navigation"` and `aria-label="Mobile navigation"` to the two Navbar nav elements;
- add focus-visible ring styles to the logo, navigation links, menu button, and homepage CTAs;
- ensure external arrows remain part of visible text or are `aria-hidden` only when redundant;
- preserve native link and button elements;
- retain the existing reduced-motion media query.

Do not replace descriptive text with icon-only controls.

- [ ] **Step 3: Apply only confirmed responsive corrections**

Inspect the following for wrapping and overflow:

- homepage and case-study hero headings;
- mobile navigation;
- project-card action rows;
- Experience cards;
- deployment-flow stages and arrows;
- lifecycle and safety panels;
- repository paths and technical labels;
- CTA button groups.

Use targeted utilities such as `min-w-0`, `break-words`, `overflow-wrap:anywhere` through an arbitrary utility when required, `w-full sm:w-auto` for cramped mobile CTAs, and smaller mobile tracking/text sizes. Do not alter desktop visual identity unless the same defect exists there.

- [ ] **Step 4: Verify semantics and responsive behavior**

Run: `npm.cmd run lint`

Expected: PASS.

Run: `npm.cmd run build`

Expected: PASS.

Use an available browser provider or installed headless browser to inspect widths 320, 375, 768, 1440, and 1920. For each width, check the homepage and both case studies for horizontal overflow, clipped headings, overlapping actions, unreadable flow arrows, and unusable touch targets. Save screenshots only to a temporary directory, never the repository.

If no browser mechanism is available, record the limitation and perform DOM/rendered-HTML plus class audits without claiming visual verification.

### Task 5: Complete Local Verification

**Files:**
- Modify only files from Tasks 1–4 if verification identifies a defect.

**Interfaces:**
- Consumes: all completed polish changes.
- Produces: a locally verified source tree ready for Git integration.

- [ ] **Step 1: Run the full required command suite**

Run separately and inspect each exit code:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

Expected: all commands exit 0 and the build contains `/`, `/projects/graphshield-aml`, and `/projects/sentinelops-ai` plus generated metadata assets.

- [ ] **Step 2: Run production route and metadata checks**

Start the production server and verify HTTP 200 for:

```text
http://localhost:3000/
http://localhost:3000/projects/graphshield-aml
http://localhost:3000/projects/sentinelops-ai
http://localhost:3000/opengraph-image
http://localhost:3000/icon
```

Verify correct `image/png` content types for the image routes.

- [ ] **Step 3: Audit rendered links and prohibited placeholders**

Inspect rendered anchors on all three HTML pages. Every `https://` anchor must contain `target="_blank"` and `rel="noopener noreferrer"`. Confirm no rendered output contains:

```text
your-email@example.com
PASTE_
YOUR_
href="#"
/Abhay-Kumar-Resume.pdf
```

The final item must remain absent only while `public/Abhay-Kumar-Resume.pdf` is missing.

- [ ] **Step 4: Verify project journeys and factual boundaries**

Confirm:

- GraphShield and SentinelOps homepage cards each expose Case Study, Live Demo, and GitHub only;
- GraphCite-GCN exposes Live Demo and GitHub;
- detailed case studies expose configured API/docs/health/readiness/source links;
- GraphShield preserves human authority and no-autonomous-enforcement language;
- SentinelOps preserves local/synthetic/deterministic, RCA-hypothesis, guard, authorization, and simulated-counterfactual language.

### Task 6: Git Integration, Commit, Push, and Deployment Verification

**Files:**
- Create: sibling integration checkout `../abhay-portfolio-integration/` if no Git-enabled checkout already exists.
- Transfer: only source, configuration, test, and documentation files changed by Tasks 1–5.

**Interfaces:**
- Consumes: locally verified files and remote repository `https://github.com/abhay799/abhay-portfolio`.
- Produces: one normal commit on remote `main` and an observed deployment result when available.

- [ ] **Step 1: Clone the existing repository into an integration checkout**

Run from the writable workspace root:

```powershell
git clone https://github.com/abhay799/abhay-portfolio abhay-portfolio-integration
```

Expected: clone succeeds and the checkout is on `main`. If the target directory already exists, inspect it rather than deleting or overwriting it.

- [ ] **Step 2: Compare remote main before transferring files**

Run:

```powershell
git -C abhay-portfolio-integration status --short
git -C abhay-portfolio-integration branch --show-current
git -C abhay-portfolio-integration log -3 --oneline
```

Expected: clean status and branch `main`. If the remote repository differs materially from the working source in overlapping files, stop and reconcile rather than overwrite unseen work.

- [ ] **Step 3: Transfer only intended verified files**

Copy the files changed by Tasks 1–5 from `abhay-portfolio/` into matching paths in `abhay-portfolio-integration/`. Do not copy `.next`, `node_modules`, `.superpowers`, temporary screenshots, or unrelated workspace files.

Review:

```powershell
git -C abhay-portfolio-integration status --short
git -C abhay-portfolio-integration diff --check
git -C abhay-portfolio-integration diff --stat
```

Expected: only intended polish files and the already-approved case-study/shared-integration files missing from remote main are present.

- [ ] **Step 4: Install and verify the integration checkout**

Run in `abhay-portfolio-integration/`:

```powershell
npm.cmd install
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

Expected: installation succeeds without adding an unrequested dependency, and all verification commands exit 0.

- [ ] **Step 5: Commit on main**

Run:

```powershell
git status --short
git add -- app components data lib package.json package-lock.json tsconfig.json docs
git commit -m "Polish portfolio SEO accessibility and deployment UX"
```

Expected: one normal commit containing only reviewed files. Do not use `--amend` or history-rewriting options.

- [ ] **Step 6: Push normally to the existing remote**

Run:

```powershell
git push origin main
```

Expected: push succeeds without `--force`. If authentication or remote divergence blocks the push, report the exact error and leave the verified commit intact.

- [ ] **Step 7: Observe and verify the existing Vercel deployment**

Poll the production alias until the exact new root title and Open Graph metadata appear or a reasonable deployment window expires:

```text
https://abhay-portfolio-delta-five.vercel.app
https://abhay-portfolio-delta-five.vercel.app/projects/graphshield-aml
https://abhay-portfolio-delta-five.vercel.app/projects/sentinelops-ai
```

Verify HTTP 200, the new social metadata, generated preview/icon availability, and the recruiter journey from project card to case study to Experience section to live application. Check the required external destinations for correct hrefs without claiming health based only on reachability.

- [ ] **Step 8: Produce the final report**

Report:

1. every changed file;
2. SEO and social-preview improvements;
3. favicon implementation;
4. contact and resume behavior;
5. accessibility and responsive corrections;
6. external-link audit;
7. test, lint, build, and route results;
8. commit hash and push result;
9. observed Vercel deployment result;
10. remaining user input: real email address and `public/Abhay-Kumar-Resume.pdf` if still absent.

