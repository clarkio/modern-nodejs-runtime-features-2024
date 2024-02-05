import fs from "node:fs";
import fastify from "fastify";
import { loadEnv } from "./src/dotenv.js";

const env = await loadEnv();

const { dirname: __dirname, filename: __filename } = import.meta;
// @TODO to avoid the Node.js resource permission issue you should update
// the path to be `setup.yml` in the current directory and not `../setup.yml`.
// the outside path for setup.yml was only changed in the source code to
// show you how Node.js resource permission module will halt if trying to access
// something outside the current directory.
const filePath = `${__dirname}/../setup.yml`;
try {
  const projectSetup = fs.readFileSync(filePath, "utf8");
  // @TODO do something with projectSetup if you want to
} catch (error) {
  console.error(error.code);
}
// @TODO or consider using the permissions runtime API check:
if (!process.permission.has("read", filePath)) {
  console.error("no permissions to read file at", filePath);
}

const server = fastify();

server.get("/api/status", async (request, reply) => {
  return {
    status: "ok",
    time: new Date(),
    debugMode: process.env.DEBUG_MODE,
  };
});

server.listen(
  {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
