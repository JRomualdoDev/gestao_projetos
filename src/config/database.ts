import type { FastifyInstance } from "fastify"

export let db: FastifyInstance['pg']

export function setDb(instance: FastifyInstance) {
    db = instance.pg
}
