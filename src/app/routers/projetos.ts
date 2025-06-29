import type { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { listarProjetos } from '../controllers/projeto.controller.ts';

const routes: FastifyPluginAsync = async (app: FastifyInstance, opts) => {
    app.get('/projetos', listarProjetos);
};

export default routes;
