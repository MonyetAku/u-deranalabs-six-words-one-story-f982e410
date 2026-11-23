// Six Words, One Story — one complete story in exactly six words.
// The program writes the story to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "She sold her wedding ring. Smiling.";

// The gate only accepts 1-60 characters of non-whitespace text: fail loudly
// rather than submit an invalid line. Exactly six words, one whole story:
// a marriage ends, the ring is sold, and she smiles — the turn is the
// smile, which leaves the reader to fill in why she is glad it is over.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story has ${words.length} words, expected exactly 6`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`story is ${STORY.length} characters, outside the 1-60 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
