import fs from "node:fs";
import fastify from "fastify";

const { dirname: __dirname, filename: __filename } = import.meta;
const projectSetup = fs.readFileSync(`${__dirname}/setup.yml`, "utf8");
// @TODO do something with projectSetup if you want to

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
