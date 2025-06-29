import z from "zod"

export const criarProjetoSchema = {
    querystring: z.object({
        name: z.string().min(4).max(100),
        description: z.string().min(10).max(500)
    }),
    response: {
        201: z.object({
            id: z.number(),
            name: z.string(),
            description: z.string(),
            created_at: z.date()
        })
    }
}

export const listarProjetosSchema = {
    response: {
        200: z.array(z.object({
            id: z.number(),
            name: z.string(),
            description: z.string(),
            created_at: z.date()
        }))
    }
}
