import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { createTaskSchema, deleteTaskSchema, listTaskProjectIdSchema, listTaskSchema, udpateTaskSchema } from "../schemas/schemaTask.ts";
import { listTasks, createTask, listTaskProject_id, updateTask, deleteTask } from "../controllers/taskController.ts";


export default function tasksRoutes(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().route({
        method: "GET",
        url: "/tasks",
        schema: listTaskSchema,
        handler: listTasks
    });

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "POST",
        url: "/tasks",
        schema: createTaskSchema,
        handler: createTask
    });

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "GET",
        url: "/tasks/:project_id",
        schema: listTaskProjectIdSchema,
        handler: listTaskProject_id
    })

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "PUT",
        url: "/tasks/:id",
        schema: udpateTaskSchema,
        handler: updateTask
    })

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "DELETE",
        url: "/tasks/:id",
        schema: deleteTaskSchema,
        handler: deleteTask
    })
}