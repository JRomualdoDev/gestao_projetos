import type { FastifyPluginAsync } from 'fastify'
import routes from './app/routers/projetos.ts'
import postgres from '../src/plugins/postgres.ts'
import { setDb } from './config/database.ts'

const server: FastifyPluginAsync = async (fastify, options) => {
    await fastify.register(routes)

    fastify.register(postgres)

    fastify.after(() => {
        setDb(fastify)
    })

}

export default server