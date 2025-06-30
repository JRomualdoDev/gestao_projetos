import { z } from "zod"

export const createTaskSchema = {
    body: z.object({
        project_id: z.number(),
        title: z.string().min(4).max(100).describe("Title Task"),
        description: z.string().min(10).max(500).describe("Description Task"),
        status: z.enum(['todo', 'doing', 'done']),
        priority: z.enum(['low', 'medium', 'high'])
    }),
    response: {
        201: z.object({
            success: z.boolean()
        })
    }
}

export const listTaskSchema = {
    response: {
        200: z.array(z.object({
            id: z.number(),
            project_id: z.number(),
            title: z.string(),
            description: z.string(),
            status: z.string(),
            priority: z.string(),
            created_at: z.date()
        }))
    }
}
