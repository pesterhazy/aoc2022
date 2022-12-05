import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";
import * as day from "../src/day05";

let demo = `
    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

it("", () => {
  let r = day.parse(demo);
  eq(r, [
    [["N", "Z"], ["D", "C", "M"], ["P"]],
    [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ],
  ]);
});

it("", () => {
  let r = day.solve(day.parse(demo));
  eq(r, "CMZ");
});

it("", () => {
  let r = day.solve(day.parse(tools.inputFor(5)));
  eq(r, "???");
});
