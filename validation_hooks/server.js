const fastify = require('fastify')({ logger: true })

const queryStringJsonSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  }
}

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: queryStringJsonSchema,
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  beforeHandler: async (request, reply) => {
    fastify.log.info("I'm here handle your requests")
  },
  handler: async (request, reply) => {
    return { hello: 'world' }
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()