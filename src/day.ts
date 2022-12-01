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

export function solve(groups: number[][], part = 1) {
  let sums = groups.map((g) => g.reduce((a, b) => a + b));

  sums.sort((a, b) => b - a);
  if (part === 1) {
    return sums.at(0);
  } else {
    return sums.slice(0, 3).reduce((a, b) => a + b);
  }
}
