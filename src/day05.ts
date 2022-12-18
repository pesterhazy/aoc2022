import * as tools from "../src/tools";
import * as assert from "assert";
import * as setutils from "ts-set-utils";

export function parse(s: string): [any, any] {
  let [a, b] = s.split(/\n\n/);

  let lines = tools.asLines(a);
  let slots = [];

  for (let i = lines.length - 1; i >= 0; i--) {
    let line = lines[i];
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

export function solve([slots_, instructions], part = 1) {
  let slots = JSON.parse(JSON.stringify(slots_));
  for (let [n, frm, to] of instructions) {
    if (part === 1) {
      for (let i = 0; i < n; i++) {
        slots[to - 1].unshift(slots[frm - 1].shift());
      }
    } else {
      let tmp = [];
      for (let i = 0; i < n; i++) {
        tmp.unshift(slots[frm - 1].shift());
      }
      for (let i = 0; i < n; i++) {
        slots[to - 1].unshift(tmp[i]);
      }
    }
  }
  return slots.map((a) => a[0]).join("");
}
