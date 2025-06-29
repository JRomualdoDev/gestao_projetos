import { z } from "zod"

export const criarProjetoSchema = {
    body: z.object({
        name: z.string().min(4).max(100).describe("Name Project"),
        description: z.string().min(10).max(500).describe("Description Project")
    }),
    response: {
        201: z.object({
            success: z.boolean()
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
