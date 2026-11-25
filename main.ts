// Describe Your Ex in One Word — the verdict is "Understudy".
// Dry wit: an understudy learns every line and waits in the wings, but only
// ever plays the lead if the star can't make it. The ex was never the lead —
// just the stand-in who rehearsed the role and never got the part.
// Exactly one word, spelled correctly, no punctuation, nothing else attached.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Understudy";
const outPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outPath, word);
