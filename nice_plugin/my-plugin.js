module.exports = async function (fastify, options) {
  fastify.get('/plugin', async (request, reply) => {
    return { hello: fastify.util('world', ', big world wih decorator') }
  })

  fastify.decorate('util', (a, b) => a + b)
}