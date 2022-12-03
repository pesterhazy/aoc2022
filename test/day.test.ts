import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";
import * as day from "../src/day";

let ii = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;
it("", () => {
  let r = day.solve(ii);
  eq(r, 157);
});

it("", () => {
  let r = day.solve(tools.inputFor(3));
  eq(r, 7875);
});

it("", () => {
  let r = day.solve2(ii);
  eq(r, 70);
});

it("", () => {
  let r = day.solve2(tools.inputFor(3));
  eq(r, 2479);
});
