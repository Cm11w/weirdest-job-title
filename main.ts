import { mkdirSync, writeFileSync } from "node:fs";

// One job title: a real-sounding night-shift job with one specific,
// funny twist — a lullaby singer, but for ATMs that cannot sleep.
// 45 characters, one line, nothing else.
const TITLE = "Night-Shift Lullaby Singer for Insomniac ATMs";

// Enforce the competition gate before writing: 1-60 characters,
// a single line, not only whitespace.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`Title must be 1-60 characters, got ${TITLE.length}`);
}
if (TITLE.trim().length === 0 || TITLE.includes("\n")) {
  throw new Error("Title must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
