require('dotenv').config()
const fastify = require('fastify')({ logger: true })
const authRoutes = require('./routes/auth')

// JWT
fastify.register(require('@fastify/jwt'), {
  secret: process.env.JWT_SECRET
})

fastify.decorate('authenticate', async function (request, reply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({ message: 'Token inválido ou ausente' })
  }
})

// 🔗 PLUGIN DO BANCO
fastify.register(require('./plugins/db'))

// ROTAS
fastify.register(authRoutes)

const start = async () => {
  try {
    await fastify.listen({ port: 3333 })
    console.log('Servidor rodando em http://localhost:3333')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
