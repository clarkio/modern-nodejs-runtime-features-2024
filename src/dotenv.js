import fs from "node:fs/promises";

export async function loadEnv(path = ".env") {
  const rawDataEnv = await fs.readFile(path, "utf8");

  const env = {};
  rawDataEnv.split("\n").forEach((line) => {
    if (line.startsWith("#")) {
      return;
    }
    const [key, value] = line.split("=");
    env[key] = value;
  });

  return env;
}
