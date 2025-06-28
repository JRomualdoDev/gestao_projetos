// const fastify = require('fastify')()

// fastify.register(require('@fastify/postgres'), {
//     connectionString: process.env.DATABASE_URL
// });

// // fastify.get('/', function(req, reply)) {
// //     fastify.pg.query(
// //         'SELECT id, username'
// //     )
// // }

// fastify.listen({ port: 3000 }, (err: any) => {
//     if (err) throw err
//     console.log(`server listening on ${fastify.server.address().port}`)
// })
// server.js
'use strict'

module.exports = async function (fastify: any, opts: any) {
    fastify.get('/', async (request: any, reply: any) => {
        return { hello: 'world' }
    })
}