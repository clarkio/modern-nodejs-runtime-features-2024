import fs from "node:fs/promises";

export async function loadEnv(path = ".env") {
  const rawDataEnv = await fs.readFile(path, "utf8");

  console.log(rawDataEnv);
  const env = {};
  rawDataEnv.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    env[key] = value;
  });

  return env;
}
