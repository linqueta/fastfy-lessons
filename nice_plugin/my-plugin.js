module.exports = function (fastify, options, done) {
  fastify.get('/plugin', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  done()
}