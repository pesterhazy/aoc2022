import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

export function parse(s: string) {
  let [a, b] = s.split(/\n\n/);

  let lines = tools.asLines(a);
  let slots = [];

  for (let i = lines.length - 1; i >= 0; i--) {
    let line = lines[i];
    console.log(line);
    for (let j = 0; j < line.length; j++) {
      if (line[j].match(/[A-Z]/)) {
        let slot = (j - 1) / 4;
        slots[slot] = slots[slot] || [];
        slots[slot].unshift(line[j]);
      }
    }
  }
  let instructions = [];
  for (let line of tools.asLines(b)) {
    instructions.push(line.match(/\d+/g).map((s) => parseInt(s)));
  }
  return [slots, instructions];
}

export function solve(s: string) {}
