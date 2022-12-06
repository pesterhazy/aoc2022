import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";
import * as day from "../src/day06";

let demo = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

it("", () => {
  let r = day.solve(demo);
  eq(r, 7);
});

it("", () => {
  let r = day.solve("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw");
  eq(r, 11);
});

it("", () => {
  let r = day.solve(tools.inputFor(6));
  eq(r, 11);
});
