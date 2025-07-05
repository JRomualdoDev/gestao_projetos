import type { FastifyPluginAsync } from 'fastify'
import routes from './app/routers/routes.ts'
import postgres from '../src/plugins/postgres.ts'
import { setDb } from './config/database.ts'
import cors from '@fastify/cors'

const server: FastifyPluginAsync = async (fastify, options) => {

    // Register Cors plugin
    fastify.register(cors, {
        origin: 'http://localhost:5000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })

    await fastify.register(routes)

    fastify.register(postgres)

    fastify.after(() => {
        setDb(fastify)
    })

}

export default server