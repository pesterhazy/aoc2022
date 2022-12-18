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
