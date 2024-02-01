import { test } from "node:test";
import assert from "node:assert";
import { add } from "../src/math.js";

test("should add two numbers", () => {
  const result = add(1, 2);
  assert.strictEqual(result, 3);
});
