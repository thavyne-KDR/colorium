const registerSchema = {
  body: {
    type: 'object',
    required: ['nome', 'email', 'senha'],
    properties: {
      nome: { type: 'string', minLength: 3 },
      email: { type: 'string', format: 'email' },
      senha: { type: 'string', minLength: 6 }
    }
  }
}

const loginSchema = {
  body: {
    type: 'object',
    required: ['email', 'senha'],
    properties: {
      email: { type: 'string', format: 'email' },
      senha: { type: 'string', minLength: 6 }
    }
  }
}

module.exports = {
  registerSchema,
  loginSchema
}
