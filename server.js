// run a simple fastify server route for a status check /api/status endpoint
// that shows the server is running and the current time and the process.env.DEBUG variable

import fastify from "fastify";
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
