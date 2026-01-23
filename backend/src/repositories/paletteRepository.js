async function savePalette(db, prompt, palette) {
  await db.query(
    `
    INSERT INTO palettes (prompt, colors)
    VALUES ($1, $2)
    `,
    [prompt, JSON.stringify(palette)]
  )
}

async function listPalettes(db) {
  const result = await db.query(
    `
    SELECT id, prompt, colors, created_at
    FROM palettes
    ORDER BY created_at DESC
    `
  )

  return result.rows
}

module.exports = {
  savePalette,
  listPalettes
}
