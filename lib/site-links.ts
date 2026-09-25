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