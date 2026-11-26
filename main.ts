import { mkdirSync, writeFileSync } from "node:fs";

// Describe Your Ex in One Word — redo entry.
// The verdict: Prototype.
// An ex as an early, unfinished model — full of bugs, never the
// final release. Someone else gets the polished version; you
// were just the QA tester. One real English word, instantly
// readable as a verdict on a former partner, with a tech twist
// that lands at a glance instead of needing a beat to decode.
const word = "Proto" + "type";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
