import { test, describe } from "node:test";
import assert from "node:assert";
import { add } from "../src/math.js";

describe("test suite 1", () => {
  test.beforeEach(() => {
    // Runs before each test
    console.log("clear the cache");
  });

  test.afterEach(() => {
    // Runs after each test
  });

  test("should add two numbers", () => {
    const result = add(1, 2);
    assert.strictEqual(result, 3);
  });
});

describe("test suite 2", () => {
  // @TODO not yet implemented in code:
  test.skip("should fail to add strings", () => {
    assert.throws(() => {
      add("1", "2");
    });
  });
});

describe(
  "test suite 3 - running concurrent tests",
  { concurrency: true },
  () => {
    test("calc 10 + 10", () => {
      const result = add(10, 10);
      assert.strictEqual(result, 20);
    });

    test("calc 100 + 100", () => {
      const result = add(100, 100);
      assert.strictEqual(result, 200);
    });

    test("calc 1000 + 1000", () => {
      const result = add(1000, 1000);
      assert.strictEqual(result, 2000);
    });
  }
);
