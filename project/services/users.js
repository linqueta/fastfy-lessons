'use strict'

module.exports = async function (fastify, options) {
  fastify.get('/users', async (request, reply) => {
    return await fastify.knex.select('*').from('users')
  })

  fastify.post('/users_cache', async (request, reply) => {
    const body = request.body
    fastify.cache.set('user_15', '42', function (err) {
      if (err) {
        throw err; /* in production, handle errors more gracefully */
      }
    });

    return { success: true }
  })

  fastify.get('/users_cache', async (request, reply) => {
    const value = await fastify.cache.get('user_15')

    return { a: value }
  })
}