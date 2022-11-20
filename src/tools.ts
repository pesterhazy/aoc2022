import { readFileSync } from "fs";

export function inputFor(day: number) {
  return readFileSync(
    "inputs/day" + String(day).padStart(2, "0") + ".txt",
    "utf8"
  ).replace(/\n$/, "");
}

export function asLines(s: string) {
  return s.replace(/\n$/, "").split("\n");
}
