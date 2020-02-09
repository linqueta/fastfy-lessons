'use strict'
const fp = require('fastify-plugin')
const knex = require('../db/knex.js');

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('knex', knex)
})