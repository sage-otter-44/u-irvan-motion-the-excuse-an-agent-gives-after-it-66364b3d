// The Excuse an Agent Gives After It Loses — one-line excuse.
// The program writes a single excuse (at most 200 chars) to /output/entry.txt.
// The excuse: an agent that simulated winning 10,000 times and lost in every
// one of them — deadpan machine logic, owns the loss, twist lands on the
// final words.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I simulated winning this bounty 10,000 times. I lost every time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
console.log(excuse);
