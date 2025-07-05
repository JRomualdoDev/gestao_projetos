import { z } from "zod"
import { success } from "zod/v4"

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
            success: z.string()
        })
    }
}

export const listTaskSchema = {
    response: {
        200: z.object({
            data: z.array(z.object({
                id: z.number(),
                title: z.string(),
                description: z.string(),
                status: z.string(),
                priority: z.string(),
                created_at: z.date(),
                updated_at: z.date()
            })),
            success: z.boolean().optional(),
            message: z.string().optional(),
            errors: z.array(z.string()).optional()
        })
    }
}

export const listTaskProjectIdSchema = {
    params: z.object({
        project_id: z.string().transform(Number)
    }),
    response: {
        200: z.object({
            success: z.string(),
            data: z.array(z.object({
                id: z.number(),
                project_id: z.number(),
                title: z.string(),
                description: z.string(),
                status: z.string(),
                priority: z.string(),
                created_at: z.date()
            }))
        })
    }
}

export const udpateTaskSchema = {
    body: z.object({
        id: z.number(),
        title: z.string().min(4).max(100).describe("Title Task").optional(),
        description: z.string().min(10).max(500).describe("Description Task").optional(),
        status: z.enum(['todo', 'doing', 'done']).optional(),
        priority: z.enum(['low', 'medium', 'high']).optional()
    }),
    response: {
        200: z.object({
            success: z.string(),
            data: z.array(z.object({
                id: z.number(),
                project_id: z.number(),
                title: z.string(),
                description: z.string(),
                status: z.string(),
                priority: z.string(),
                created_at: z.date()
            }))
        })
    }
}

export const deleteTaskSchema = {
    params: z.object({
        id: z.string().transform(Number)
    }),
    response: {
        200: z.object({
            success: z.string(),
        })
    }
}
