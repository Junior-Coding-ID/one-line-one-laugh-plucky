// One Line, One Laugh — v2 entry
// Bounty: u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Jawaban final (93 karakter, satu baris, tanpa trailing newline):
// "I paid extra for a room with a view and opened the curtains to a billboard for a nicer hotel."

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I paid extra for a room with a view and opened the curtains to a billboard for a nicer hotel.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Self-check: baca balik dari output dir, pastikan byte-exact.
const back = readFileSync(join(outDir, "entry.txt"), "utf8");
if (back !== ENTRY) {
  throw new Error("entry.txt mismatch: not byte-exact");
}
if (back.length !== 93 || back.endsWith("\n") || back.includes("\n")) {
  throw new Error("entry.txt failed gate: must be 93 chars, one line, no trailing newline");
}
console.log("Wrote entry.txt (93 chars, byte-exact).");
