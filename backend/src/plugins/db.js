const fp = require('fastify-plugin')
const { Pool } = require('pg')

async function dbPlugin(fastify) {
  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  })

  await pool.query('SELECT 1')
  fastify.decorate('pg', pool)
}

module.exports = fp(dbPlugin)
