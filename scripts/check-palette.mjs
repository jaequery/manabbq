/**
 * Palette guard. Restaurant Theme 1 ships exactly seven colours; they are
 * declared once in src/styles/tokens.css and referenced by var()/color-mix()
 * everywhere else. This fails if a raw hex sneaks into any other stylesheet or
 * component, or if tokens.css itself drifts from the seven agreed values.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const THEME = {
  "--bg": "#14100c",
  "--surface": "#1e1712",
  "--ink": "#f3e9d8",
  "--muted": "#b8a78c",
  "--accent": "#d4af37",
  "--accent-ink": "#1a1206",
  "--border": "#3a2e1f",
};
const TOKENS = "src/styles/tokens.css";
const HEX = /#[0-9a-fA-F]{3,8}\b/g;

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const problems = [];

const tokens = readFileSync(TOKENS, "utf8");
for (const [name, value] of Object.entries(THEME)) {
  const declared = new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8})`).exec(tokens)?.[1];
  if (declared?.toLowerCase() !== value) {
    problems.push(`${TOKENS}: ${name} is ${declared ?? "missing"}, expected ${value}`);
  }
}
const extra = (tokens.match(HEX) ?? []).filter(
  (h) => !Object.values(THEME).includes(h.toLowerCase()),
);
if (extra.length) problems.push(`${TOKENS}: colours outside the theme: ${extra.join(", ")}`);

for (const file of walk("src").filter((f) => /\.(css|tsx?)$/.test(f) && f !== TOKENS)) {
  const hits = readFileSync(file, "utf8").match(HEX) ?? [];
  if (hits.length)
    problems.push(`${file}: raw hex ${hits.join(", ")} — use a var(--token) instead`);
}

if (problems.length) {
  console.error("Palette check failed:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}
console.log(`Palette check passed — the seven theme colours, one accent, no strays.`);
