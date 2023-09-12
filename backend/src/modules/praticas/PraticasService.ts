import prisma from "../../utils/prisma";
import { CreatePraticaInput } from "./praticasSchema";

export async function createPratica(input: CreatePraticaInput) {
  const novaPratica = await prisma.praticas.create({
    data: input,
  });

  return novaPratica;
}

export async function getPraticas() {
    const praticas = await prisma.praticas.findMany(
        {
            select: {
                id: true,
                nome: true,
                beneficios: true,
                status: true,
            }
      }
  );

  return praticas;
}

export async function getPraticaById(id: number) {
  const pratica = await prisma.praticas.findUnique({
    where: {
      id,
    },
  });

  return pratica;
}

export async function updatePratica(id: number, input: CreatePraticaInput) {
  const pratica = await prisma.praticas.update({
    where: {
      id,
    },
    data: input,
  });

  return pratica;
}

export async function deletePratica(id: number) {
  const pratica = await prisma.praticas.delete({
    where: {
      id,
    },
  });

  return pratica;
}
