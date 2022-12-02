import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as day from "../src/day02";
import * as tools from "../src/tools";

let ii = `
A Y
B X
C Z`;

it("", () => {
  let r = day.solve(tools.asLines(ii));
  eq(r, 15);
});

it("", () => {
  let r = day.solve(tools.asLines(tools.inputFor(2)));
  eq(r, 11906);
});

it("", () => {
  let r = day.solve2(tools.asLines(ii));
  eq(r, 12);
});

it("", () => {
  let r = day.solve2(tools.asLines(tools.inputFor(2)));
  eq(r, 999);
});
