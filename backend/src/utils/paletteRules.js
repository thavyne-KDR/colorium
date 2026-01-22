export const paletteRules = {
  natal: {
    description: 'Natal',
    required: ['vermelho', 'verde'],
    optional: ['dourado', 'bege', 'branco'],
    forbidden: ['rosa', 'azul', 'pastel'],
    temperature: 'quente'
  },

  pastel: {
    description: 'Pastel',
    required: ['tons claros'],
    optional: ['rosa claro', 'azul claro', 'lavanda', 'verde menta'],
    forbidden: ['cores escuras'],
    temperature: 'fria'
  },

  minimalista: {
    description: 'Minimalista',
    required: ['cinza', 'preto', 'branco'],
    optional: ['bege', 'off-white'],
    forbidden: ['cores vibrantes'],
    temperature: 'neutra'
  },

  vendas: {
    description: 'Site de vendas',
    required: ['azul', 'verde'],
    optional: ['laranja', 'amarelo'],
    forbidden: ['tons apagados'],
    temperature: 'equilibrada'
  },

  festival: {
    description: 'Festival de música',
    required: ['cores vibrantes'],
    optional: ['roxo', 'azul neon', 'rosa'],
    forbidden: ['tons neutros'],
    temperature: 'vibrante'
  },

  geral: {
    description: 'Paleta geral',
    required: [],
    optional: [],
    forbidden: [],
    temperature: 'livre'
  }
};
