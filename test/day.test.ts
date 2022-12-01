import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as day from "../src/day";
import * as tools from "../src/tools";

let ii = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

it("", () => {
  let r = day.groups(tools.asLines(ii));
  eq(r.length, 5);
});

it("", () => {
  let groups = day.groups(tools.asLines(ii));
  eq(day.solve(groups), 24000);
});

it("", () => {
  let groups = day.groups(tools.asLines(tools.inputFor(1)));
  eq(day.solve(groups), 69177);
});

it("", () => {
  let groups = day.groups(tools.asLines(ii));
  eq(day.solve2(groups), 45000);
});

it("", () => {
  let groups = day.groups(tools.asLines(tools.inputFor(1)));
  eq(day.solve2(groups), 207456);
});
