import { describe, test, mock } from "node:test";
import assert from "node:assert";
import fs from "node:fs/promises";

import { loadEnv } from "../src/dotenv.js";

describe("dotenv test suite", () => {
  test("should load env file", async () => {
    const mockImplementation = async (path) => {
      return "PORT=3000\n";
    };
    const mockedReadFile = mock.method(fs, "readFile", mockImplementation);

    const env = await loadEnv(".env");

    assert.strictEqual(env.PORT, "3000");
    assert.strictEqual(mockedReadFile.mock.calls.length, 1);
  });
});
