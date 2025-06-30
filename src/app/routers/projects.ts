import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { createProjectSchema, listProjectSchema } from "../schemas/schemaProject.ts";
import { listProjects } from "../controllers/projectController.ts";
import { newProject } from "../services/projectService.ts";



export default function projectsRoutes(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().route({
        method: "GET",
        url: "/projects",
        schema: listProjectSchema,
        handler: listProjects
    });

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "POST",
        url: "/projects",
        schema: createProjectSchema,
        handler: newProject
    })
}