async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Backend Colorium rodando 🚀' }
  })
}

module.exports = routes
