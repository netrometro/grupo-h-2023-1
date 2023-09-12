import { FastifyInstance } from "fastify";
import * as PraticasController from "./PraticasController";

async function praticasRotas(server: FastifyInstance) {
    server.post("/", PraticasController.createPraticaHandler);

    server.get("/", PraticasController.getPraticasHandler);

    server.put("/:id", PraticasController.updatePraticaHandler);

    server.delete("/:id", PraticasController.deletePraticaHandler);
}

export default praticasRotas;