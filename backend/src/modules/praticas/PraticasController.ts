import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOrUpdatePraticaInput, DeletePraticaInput } from "./praticasSchema";

import * as PraticasService from "./PraticasService";

export async function createPraticaHandler(
  request: FastifyRequest<{ Body: CreateOrUpdatePraticaInput }>,
  reply: FastifyReply
) {
  const pratica = await PraticasService.createPratica(request.body);
  return reply.code(201).send(pratica);
}

export async function getPraticasHandler(_, reply: FastifyReply) {
  const praticas = await PraticasService.getPraticas();
  return reply.code(200).send(praticas);
}

export async function updatePraticaHandler(
  request: FastifyRequest<{ Body: CreateOrUpdatePraticaInput }>,
  reply: FastifyReply
) {
  const pratica = await PraticasService.updatePratica(
    Number(request.params.id),
    request.body
  );
  return reply.code(200).send(pratica);
}

export async function deletePraticaHandler(
  request: FastifyRequest<{ Body: DeletePraticaInput }>,
  reply: FastifyReply
) {
  await PraticasService.deletePratica(
    Number(request.params.id)
  );
  return reply.code(200).send({});
}
