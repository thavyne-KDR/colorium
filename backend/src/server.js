require('dotenv').config()

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
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
