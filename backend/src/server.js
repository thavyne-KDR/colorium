require('dotenv').config()
<<<<<<< HEAD
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
=======

const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

const dbPlugin = require('./plugins/db')
const paletteRoutes = require('./routes/palette')

async function start() {
  try {
    await fastify.register(cors, {
      origin: 'http://localhost:5173'
    })

    await fastify.register(dbPlugin)
    await fastify.register(paletteRoutes)

    await fastify.listen({ port: 3333 })
    console.log('🚀 Servidor rodando em http://localhost:3333')
>>>>>>> 8f0e487d5586f9b375d105ffa687ffbbf6754823
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
