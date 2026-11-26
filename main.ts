// What the Elevator Would Say — a one-line entry.
// The program writes the elevator's line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and prints it. The line is checked before
// writing: 1-120 characters, not only whitespace, and it must sound like
// an elevator talking — doors, buttons, floors — or the program exits
// without writing anything, so an invalid line can never be submitted.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You pressed the button fourteen times. Relax — I'm an elevator, not a vending machine.";

const MAX_CHARS = 120;

// The line has to sound like it comes from the elevator's own job:
// doors, buttons, floors — anything else is out of character.
const ELEVATOR_JOB = /button|door|floor|lift/i;

function lengthInChars(text: string): number {
  return [...text].length;
}

function checkLine(line: string): void {
  const n = lengthInChars(line);
  if (n < 1 || n > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} characters, got ${n}`);
  }
  if (line.trim() === "") {
    throw new Error("line must not be only whitespace");
  }
  if (!ELEVATOR_JOB.test(line)) {
    throw new Error("line must come from the elevator's own job");
  }
}

function main(): void {
  checkLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
