module.exports = async function (fastify, options) {
  fastify.get('/plugin', async (request, reply) => {
    return { hello: 'world, big world' }
  })
}