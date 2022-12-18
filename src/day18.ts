import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

const DELTAS = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

function add(v1: number[], v2: number[]) {
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

export function solve(s: string) {
  let vs: number[][] = tools
    .asLines(s)
    .map((line) => line.split(/,/).map((ss) => parseInt(ss)));

  let world = new Set();

  for (let v of vs) {
    world.add(JSON.stringify(v));
  }

  let n = 0;
  for (let v of vs) {
    for (let d of DELTAS) {
      let vv = add(v, d);

      if (!world.has(JSON.stringify(vv))) n++;
    }
  }
  return n;
}

const THRESHOLD = 6;

function isTrapped(start: number[], world: Set<string>): boolean {
  let todo = [start];
  let seen: Set<string> = new Set();

  while (todo.length > 0) {
    let v = todo.pop();

    if (seen.has(JSON.stringify(v))) continue;
    seen.add(JSON.stringify(v));

    for (let dim = 0; dim < 3; dim++)
      if (Math.abs(start[dim] - v[dim]) >= THRESHOLD) return false;

    for (let d of DELTAS) {
      let vv = add(v, d);
      if (!world.has(JSON.stringify(vv))) todo.push(vv);
    }
  }
  return true;
}

export function solve2(s: string) {
  let vs: number[][] = tools
    .asLines(s)
    .map((line) => line.split(/,/).map((ss) => parseInt(ss)));

  let world: Set<string> = new Set();

  for (let v of vs) {
    world.add(JSON.stringify(v));
  }

  let n = 0;
  for (let v of vs) {
    for (let d of DELTAS) {
      let vv = add(v, d);

      if (world.has(JSON.stringify(vv))) continue;

      let cache = new Set();
      if (cache.has(JSON.stringify(vv))) continue;
      if (isTrapped(vv, world)) {
        cache.add(JSON.stringify(vv));
        continue;
      }
      n++;
    }
  }
  return n;
}
