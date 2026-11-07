#!/usr/bin/env node
// Headless email review. Usage: node scripts/review.mjs <campaign-folder>
// Runs Claude Code with no one typing, saves findings to review/findings.json,
// and exits with code 1 if any finding is high severity.

import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const folder = process.argv[2];

if (!folder) {
  console.error("Usage: node scripts/review.mjs <campaign-folder>");
  process.exit(2);
}
if (!existsSync(resolve(root, folder))) {
  console.error(`Folder not found: ${folder}`);
  process.exit(2);
}

const schema = readFileSync(resolve(root, "review/findings.schema.json"), "utf8");
const prompt =
  `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. ` +
  `Report only real problems.`;

// Pass arguments as an array (no shell) so the schema text needs no quoting.
const run = spawnSync(
  "claude",
  ["-p", prompt, "--output-format", "json", "--json-schema", schema, "--allowedTools", "Read,Glob,Grep"],
  { cwd: root, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }
);

if (run.error) {
  console.error(`Could not start claude: ${run.error.message}`);
  process.exit(2);
}

let parsed;
try {
  parsed = JSON.parse(run.stdout);
} catch {
  console.error("Claude did not return JSON.");
  console.error(run.stderr || run.stdout);
  process.exit(2);
}

// The output may be one object, or a list whose last item is the result.
const result = Array.isArray(parsed) ? parsed[parsed.length - 1] : parsed;
const output = result?.structured_output;

if (!output || !Array.isArray(output.findings)) {
  console.error("No structured_output with a findings list in Claude's result.");
  console.error(JSON.stringify(result, null, 2));
  process.exit(2);
}

mkdirSync(resolve(root, "review"), { recursive: true });
writeFileSync(resolve(root, "review/findings.json"), JSON.stringify(output, null, 2) + "\n");

const count = (s) => output.findings.filter((f) => f.severity === s).length;
const high = count("high");
console.log(
  `${folder}: ${output.findings.length} finding(s) - ${high} high, ${count("medium")} medium, ${count("low")} low. Saved to review/findings.json`
);

process.exit(high > 0 ? 1 : 0);
