const fp = require('fastify-plugin')
const { Pool } = require('pg')

async function dbPlugin(fastify) {
  const cfg = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  }

  const missing = Object.entries({
    DB_HOST: cfg.host,
    DB_PORT: cfg.port,
    DB_USER: cfg.user,
    DB_PASSWORD: cfg.password,
    DB_NAME: cfg.database
  }).filter(([_, v]) => v == null || v === '').map(([k]) => k)

  if (missing.length) {
    fastify.log.error({ missing }, 'Variáveis de ambiente do Postgres ausentes')
  }

  const pool = new Pool({
    user: cfg.user ? String(cfg.user) : undefined,
    password: cfg.password ? String(cfg.password) : undefined,
    host: cfg.host ? String(cfg.host) : undefined,
    port: cfg.port ? Number(cfg.port) : undefined,
    database: cfg.database ? String(cfg.database) : undefined
  })

  try {
    await pool.query('SELECT 1')
  } catch (err) {
    fastify.log.error({ err }, 'Não foi possível conectar ao PostgreSQL. Verifique variáveis de ambiente e se o serviço está ativo.')
    throw err
  }

  fastify.decorate('pg', pool)

  // Auto-cria tabelas necessárias caso não existam
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS palettes (
        id SERIAL PRIMARY KEY,
        prompt TEXT NOT NULL,
        colors JSONB NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `)

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `)
  } catch (err) {
    fastify.log.error({ err }, 'Falha ao inicializar o schema do banco')
  }
}

module.exports = fp(dbPlugin)
