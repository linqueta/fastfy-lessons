module.exports = async function (fastify, options) {
  fastify.get('/plugin', async (request, reply) => {
    return { hello: fastify.util('world', ', big world wih decorator') }
  })

  fastify.decorate('util', (a, b) => a + b)

  fastify.decorateReply('html', function (payload) {
    this.type('text/html') // This is the 'Reply' object
    this.send(`It's the confuse payload: ${payload}`)
  })

  fastify.get('/html', (request, reply) => {
    reply.html('oioioi')
  })
}