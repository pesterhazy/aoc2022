import * as tools from "./tools";

export function groups(lines: string[]) {
  let r: number[][] = [];
  let c: number[] = [];

  for (let line of lines) {
    if (line === "") {
      r.push(c);
      c = [];
    } else {
      c.push(parseInt(line));
    }
  }
  r.push(c);
  return r;
}

export function solve(groups: number[][]) {
  let sums = groups.map((g) => g.reduce((a, b) => a + b));

  let max = 0;
  for (let sum of sums) {
    max = Math.max(sum, max);
  }
  return max;
}
