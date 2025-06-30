import type { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

import projectsRoutes from './projects.ts';
import tasksRoutes from './tasks.ts';

const routes: FastifyPluginAsync = async (app: FastifyInstance, opts) => {

    // Add schema validator and serializer
    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    projectsRoutes(app)
    tasksRoutes(app)
};

export default routes;
