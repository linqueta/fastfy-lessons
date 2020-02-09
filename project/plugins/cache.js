'use strict'

const fp = require('fastify-plugin')
const asyncRedis = require("async-redis");
const client = asyncRedis.createClient();

client.on("error", function (error) {
  console.error(error);
});

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('cache', client)
})