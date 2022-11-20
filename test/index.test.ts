import { it } from "bun:test";
import { expect } from "expect";
import * as day from "../src/index";

it("Reads input", () => {
  expect(day.inputFor(1)).toBe("a\nb\nc");
});

it("Splits lines", () => {
  expect(day.asLines("a\nb\nc")).toEqual(["a", "b", "c"]);
});
