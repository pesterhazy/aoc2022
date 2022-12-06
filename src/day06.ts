import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

export function solve(s: string) {
  for (let i = 3; i < s.length - 1; i++) {
    let seen = new Set();
    let dupe = false;
    for (let j = i - 3; j <= i; j++) {
      if (seen.has(s[j])) {
        dupe = true;
        break;
      }
      seen.add(s[j]);
    }
    if (!dupe) return i + 1;
  }
}
