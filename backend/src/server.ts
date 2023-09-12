import fastify from "fastify";

import praticasRotas from "./modules/praticas/praticasRotas";
import fastifyCors from "@fastify/cors";

const server = fastify();

server.register(fastifyCors, {
  origin: '*', // Change this to your desired origin(s) or use a function to determine it dynamically
  methods: 'GET,POST,PUT,DELETE',
});

server.get("/healthckeck", async () => {
  return { status: "ok" };
});

async function main() {

  server.register(praticasRotas, { prefix: "/api/praticas" });

  try {
    await server.listen({
      port: 3000,
      host: "0.0.0.0",
    });
    console.log(`Server listening at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1); // Non-zero failure code
  }
}

main();

