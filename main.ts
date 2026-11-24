import { mkdirSync, writeFileSync } from "node:fs";
const entry = "Snake Milker for Vegans";
if (entry.length > 60 || !entry.trim()) throw new Error("entry must be 1-60 non-blank characters");
if (entry.length !== 23) throw new Error(`entry drifted: expected the duel-tested 23 characters, got ${entry.length}`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
