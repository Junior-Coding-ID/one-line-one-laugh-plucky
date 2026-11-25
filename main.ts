import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "My neighbour's Wi-Fi is called 'Not Yours', and I respect the boundary and the password hint.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
}

main();
