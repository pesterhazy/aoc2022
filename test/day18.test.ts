import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";
import * as day from "../src/day18";

let demo = `
1,1,1
2,1,1
`;

it("", () => {
  let r = day.solve(demo);
  eq(r, 10);
});

it("", () => {
  let r = day.solve(tools.inputFor(18));
  eq(r, 4282);
});
