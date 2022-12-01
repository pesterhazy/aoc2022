import { it } from "bun:test";
import { deepStrictEqual as eq } from "assert";
import * as tools from "../src/tools";

it("Splits lines", () => {
  eq(tools.asLines("a\nb\nc"), ["a", "b", "c"]);
});

it("Ignores trailing newline", () => {
  eq(tools.asLines("a\nb\nc\n"), ["a", "b", "c"]);
});

it("Ignores initial newline", () => {
  eq(tools.asLines("\na\nb\nc\n"), ["a", "b", "c"]);
});
