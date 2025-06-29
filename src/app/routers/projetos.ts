import type { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { cadastrarProjeto, listarProjetos } from '../controllers/projeto.controller.ts';
import { criarProjetoSchema, listarProjetosSchema } from '../schemas/schemaProjeto.ts';

const routes: FastifyPluginAsync = async (app: FastifyInstance, opts) => {
    app.get('/projetos', { schema: listarProjetosSchema }, listarProjetos);
    app.post('/projetos', { schema: criarProjetoSchema }, cadastrarProjeto)
};

export default routes;
