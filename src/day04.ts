import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

export function solve(s: string, part = 1) {
  let count = 0;
  for (let line of tools.asLines(s)) {
    let [a1, a2, b1, b2] = line.match(/\d+/g).map((s) => parseInt(s));

    if (part === 1) {
      if ((a1 >= b1 && a2 <= b2) || (b1 >= a1 && b2 <= a2)) count++;
    } else {
      if (
        (a1 >= b1 && a1 <= b2) ||
        (a2 >= b1 && a2 <= b1) ||
        (b1 >= a1 && b1 <= a2) ||
        (b2 >= a1 && b2 <= a1)
      )
        count++;
    }
  }
  return count;
}
