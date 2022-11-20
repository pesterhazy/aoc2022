import { it } from "bun:test";
import * as day from "../src/index";
import { deepStrictEqual as eq } from "assert";

it("Reads input", () => {
  eq(day.inputFor(1), "a\nb\nc");
});

it("Splits lines", () => {
  eq(day.asLines("a\nb\nc"), ["a", "b", "c"]);
});
