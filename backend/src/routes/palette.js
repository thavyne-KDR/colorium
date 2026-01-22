const { generatePalette } = require('../services/ai')

async function paletteRoutes(fastify) {
  fastify.post('/palette', async (request, reply) => {
    const { prompt } = request.body

    if (!prompt) {
      return reply.code(400).send({ message: 'Prompt é obrigatório' })
    }

    const palette = await generatePalette(prompt)

    if (!palette || palette.length === 0) {
      return reply.code(500).send({ message: 'Falha ao gerar paleta' })
    }

    await fastify.pg.query(
      `
      INSERT INTO palettes (prompt, colors)
      VALUES ($1, $2)
      `,
      [prompt, JSON.stringify(palette)]
    )

    return {
      palette
    }
  })

  fastify.get('/palettes', async () => {
    const result = await fastify.pg.query(
      'SELECT * FROM palettes ORDER BY created_at DESC'
    )

    return { palettes: result.rows }
  })
}

module.exports = paletteRoutes
