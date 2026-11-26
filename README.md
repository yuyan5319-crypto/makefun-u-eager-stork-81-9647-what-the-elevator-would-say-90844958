# What the Elevator Would Say

One line, 101 characters, spoken by an elevator that has heard the button
pressed fourteen times and is in no hurry to pretend otherwise.

> You pressed the button fourteen times. I heard you the first time — I just wanted to watch you sweat.

## Run it

```sh
node main.ts
```

This writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`) and prints it to stdout. Before writing, the program
checks the line: it must be 1–120 characters, not only whitespace, and it
must come from the elevator's own job — if any check fails, it refuses to
run and writes nothing.
