import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";
import * as day from "../src/day18";

let demo = `
2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5
`;

it("", () => {
  let r = day.solve(demo);
  eq(r, 64);
});

it("", () => {
  let r = day.solve(tools.inputFor(18));
  eq(r, 4282);
});

it("", () => {
  let r = day.solve2(demo);
  eq(r, 58);
});
