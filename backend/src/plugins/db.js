const fp = require('fastify-plugin')
const { Pool } = require('pg')

<<<<<<< HEAD
async function dbPlugin(fastify, options) {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  })

=======
async function dbPlugin(fastify) {
  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  })

  await pool.query('SELECT 1')
>>>>>>> 8f0e487d5586f9b375d105ffa687ffbbf6754823
  fastify.decorate('pg', pool)
}

module.exports = fp(dbPlugin)
