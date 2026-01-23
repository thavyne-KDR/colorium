const { generatePalette } = require('../services/ai')

async function paletteRoutes(fastify) {
  // CREATE
  fastify.post('/palette', async (request, reply) => {
    const { prompt } = request.body

    if (!prompt) {
      return reply.code(400).send({ message: 'Prompt é obrigatório' })
    }

    let palette
    try {
      palette = await generatePalette(prompt)
    } catch (e) {
      fastify.log.error(e, 'Falha ao gerar paleta com IA')
      return reply.code(500).send({ message: 'Falha ao gerar paleta com IA' })
    }

    if (!palette || palette.length === 0) {
      return reply.code(500).send({ message: 'Falha ao gerar paleta' })
    }

    try {
      const insert = await fastify.pg.query(
        `
        INSERT INTO palettes (prompt, colors)
        VALUES ($1, $2)
        RETURNING id, prompt, colors, created_at
        `,
        [prompt, JSON.stringify(palette)]
      )
      const record = insert.rows[0]

      return {
        palette,
        record
      }
    } catch (err) {
      fastify.log.error({ err }, 'Falha ao salvar paleta no banco')
      return reply.code(500).send({ message: 'Falha ao salvar paleta no banco. Verifique conexão/credenciais e se o Postgres está ativo.' })
    }
  })

  // READ (list)
  fastify.get('/palettes', async () => {
    const result = await fastify.pg.query(
      'SELECT id, prompt, colors, created_at FROM palettes ORDER BY created_at DESC'
    )

    return { palettes: result.rows }
  })

  // READ (single)
  fastify.get('/palette/:id', async (request, reply) => {
    const { id } = request.params
    const result = await fastify.pg.query(
      'SELECT id, prompt, colors, created_at FROM palettes WHERE id = $1',
      [id]
    )

    if (result.rowCount === 0) {
      return reply.code(404).send({ message: 'Paleta não encontrada' })
    }

    return { palette: result.rows[0] }
  })

  // UPDATE
  fastify.put('/palette/:id', async (request, reply) => {
    const { id } = request.params
    const { prompt, colors } = request.body || {}

    if (prompt == null && colors == null) {
      return reply.code(400).send({ message: 'Nada para atualizar' })
    }

    const fields = []
    const values = []
    let idx = 1

    if (prompt != null) {
      fields.push(`prompt = $${idx++}`)
      values.push(prompt)
    }
    if (colors != null) {
      fields.push(`colors = $${idx++}`)
      values.push(Array.isArray(colors) ? JSON.stringify(colors) : colors)
    }
    values.push(id)

    const sql = `UPDATE palettes SET ${fields.join(', ')} WHERE id = $${idx} RETURNING id, prompt, colors, created_at`
    const result = await fastify.pg.query(sql, values)

    if (result.rowCount === 0) {
      return reply.code(404).send({ message: 'Paleta não encontrada' })
    }

    return { palette: result.rows[0] }
  })

  // DELETE
  fastify.delete('/palette/:id', async (request, reply) => {
    const { id } = request.params
    const result = await fastify.pg.query('DELETE FROM palettes WHERE id = $1', [id])

    if (result.rowCount === 0) {
      return reply.code(404).send({ message: 'Paleta não encontrada' })
    }

    return { success: true, message: 'Paleta deletada com sucesso' }
  })
}

module.exports = paletteRoutes
