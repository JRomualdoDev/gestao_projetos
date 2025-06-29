import type { FastifyInstance, FastifyPluginAsync } from 'fastify';
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

import { cadastrarProjeto, listarProjetos } from '../controllers/projeto.controller.ts';
import { criarProjetoSchema, listarProjetosSchema } from '../schemas/schemaProjeto.ts';
import z from 'zod';

const routes: FastifyPluginAsync = async (app: FastifyInstance, opts) => {

    // Add schema validator and serializer
    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    // app.get('/projetos', { schema: listarProjetosSchema }, listarProjetos);
    // app.post('/projetos', { schema: criarProjetoSchema }, cadastrarProjeto)

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "GET",
        url: "/projetos",
        schema: listarProjetosSchema,
        handler: listarProjetos
    });

    app.withTypeProvider<ZodTypeProvider>().route({
        method: "POST",
        url: "/projetos",
        schema: criarProjetoSchema,
        handler: cadastrarProjeto
    })
};

export default routes;
