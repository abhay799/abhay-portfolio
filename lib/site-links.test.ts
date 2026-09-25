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