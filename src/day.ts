import * as tools from "../src/tools";
import * as assert from "assert";

export function solve(s: string) {
  let lines = tools.asLines(s);
  let total = 0;

  for (let line of lines) {
    let a = new Set(Array.from(line.slice(0, line.length / 2)));
    let b = new Set(Array.from(line.slice(line.length / 2)));

    let found = undefined;
    for (let x of b) if (a.has(x)) found = x;
    assert(found !== undefined);

    let n;
    if (found.match(/[a-z]/)) n = found.charCodeAt(0) - "a".charCodeAt(0) + 1;
    else if (found.match(/[A-Z]/))
      n = found.charCodeAt(0) - "A".charCodeAt(0) + 27;
    else assert(false);

    total += n;
  }
  return total;
}
