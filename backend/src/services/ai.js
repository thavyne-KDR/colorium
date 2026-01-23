async function generatePalette(prompt) {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        stream: false,
        prompt: `
Gere uma paleta de 4 cores DIFERENTES para:
"${prompt}"

Responda SOMENTE com JSON válido neste formato:
[
  { "name": "Primary", "hex": "#AABBCC" },
  { "name": "Secondary", "hex": "#DDEEFF" },
  { "name": "Accent", "hex": "#112233" },
  { "name": "Background", "hex": "#445566" }
]
`
      })
    })

    const data = await response.json()

    // 🔥 O Ollama coloca o texto dentro de "response"
    const text = data.response

    // 🔎 Extrai SOMENTE o array JSON
    const match = text.match(/\[[\s\S]*\]/)

    if (!match) {
      throw new Error('JSON não encontrado na resposta da IA')
    }

    const palette = JSON.parse(match[0])

    // validação extra
    if (!Array.isArray(palette) || palette.length === 0) {
      throw new Error('Paleta inválida')
    }

    return palette
  } catch (err) {
    console.error('Erro ao gerar paleta com IA:', err.message)

    // ✅ fallback seguro (NUNCA retorna null)
    return [
      { name: 'Primary', hex: '#FF6B6B' },
      { name: 'Secondary', hex: '#4D96FF' },
      { name: 'Accent', hex: '#6BCB77' },
      { name: 'Background', hex: '#FFF3E0' }
    ]
  }
}

module.exports = { generatePalette }
