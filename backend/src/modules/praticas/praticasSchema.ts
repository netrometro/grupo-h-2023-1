import { z } from "zod";

const createOrUpdatePraticaSchema = z.object({
    nome: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "Nome deve ser uma string",
    }).nonempty(),
    beneficios: z.string(),
    status: z.boolean(),
});

const deletePraticaSchema = z.object({
    id: z.number({
        required_error: "Id é obrigatório",
        invalid_type_error: "Id deve ser um número",
    }),
});

export type CreateOrUpdatePraticaInput = z.infer<typeof createOrUpdatePraticaSchema>;

export type DeletePraticaInput = z.infer<typeof deletePraticaSchema>;
