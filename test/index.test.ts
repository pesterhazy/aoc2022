import { it, expect } from "bun:test";
import * as day from "../src/index";

it("test", () => {
  expect(day.inputFor(1)).toBe("XYZ");
});
