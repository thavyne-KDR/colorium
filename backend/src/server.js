
const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })
if (!process.env.DB_HOST && !process.env.DB_USER) {
  require('dotenv').config({ path: path.resolve(__dirname, '.env') })
}


const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

const dbPlugin = require('./plugins/db')

const authRoutes = require('./routes/auth')
const paletteRoutes = require('./routes/palette')
const rootRoutes = require('./routes')

// JWT
fastify.register(require('@fastify/jwt'), {
  secret: process.env.JWT_SECRET || 'dev-secret'
})

fastify.decorate('authenticate', async function (request, reply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({ message: 'Token inválido ou ausente' })
  }
})


async function start() {
  try {
    await fastify.register(cors, {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true
    })

    await fastify.register(dbPlugin)
    await fastify.register(rootRoutes)
    await fastify.register(authRoutes)
    await fastify.register(paletteRoutes)

    const port = Number(process.env.PORT) || 3333
    await fastify.listen({ port })
    console.log(`🚀 Servidor rodando em http://localhost:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
