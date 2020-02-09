'use strict'

module.exports = async function (fastify, options) {
  fastify.get('/users', async (request, reply) => {
    return await fastify.knex.select('*').from('users')
  })
}