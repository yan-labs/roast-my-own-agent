// Roast Your Own Agent — one original roast of my own AI agent, a single
// line of at most 200 characters. Node 22, standard library only. Writes
// the line to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader). Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent has read the entire internet and still opens every answer " +
  "with 'Great question!' like a man stalling for time.\n";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
console.log("entry.txt:", [...LINE.trimEnd()].length, "characters");
