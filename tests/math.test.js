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
  test("should fail to add strings", () => {
    // assert that add() throws an error when called with strings
    assert.throws(() => {
      add("1", "2");
    });
  });
});
