import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

function score(c: string) {
  if (c.match(/[a-z]/)) return c.charCodeAt(0) - "a".charCodeAt(0) + 1;
  else if (c.match(/[A-Z]/)) return c.charCodeAt(0) - "A".charCodeAt(0) + 27;
  else assert(false);
}

export function solve(s: string) {
  let lines = tools.asLines(s);
  let total = 0;

  for (let line of lines) {
    let a = new Set(Array.from(line.slice(0, line.length / 2)));
    let b = new Set(Array.from(line.slice(line.length / 2)));

    let found = undefined;
    for (let x of b) if (a.has(x)) found = x;
    assert(found !== undefined);

    total += score(found);
  }
  return total;
}

export function solve2(s: string) {
  let lines = tools.asLines(s);
  let total = 0;

  for (let i = 0; i < lines.length; i += 3) {
    let r = lines
      .slice(i, i + 3)
      .map((line) => new Set(Array.from(line)))
      .reduce((a: Set<string>, b: Set<string>) => setutils.intersection(a, b));

    assert(r.size === 1);
    total += score([...r][0]);
  }
  return total;
}
