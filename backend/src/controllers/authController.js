const bcrypt = require('bcrypt')

async function register(request, reply) {
  const { nome, email, senha } = request.body

  const userExists = await request.server.pg.query(
    'SELECT id FROM users WHERE email = $1',
    [email]
  )

  if (userExists.rowCount > 0) {
    return reply.code(400).send({
      message: 'Email já cadastrado'
    })
  }

  const senhaHash = await bcrypt.hash(senha, 10)

  const result = await request.server.pg.query(
    'INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email',
    [nome, email, senhaHash]
  )

  return {
    message: 'Usuário cadastrado com sucesso',
    user: result.rows[0]
  }
}

async function login(request, reply) {
  const { email, senha } = request.body

  const result = await request.server.pg.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  )

  if (result.rowCount === 0) {
    return reply.code(401).send({
      message: 'Email ou senha inválidos'
    })
  }

  const user = result.rows[0]

  const senhaCorreta = await bcrypt.compare(senha, user.senha)

  if (!senhaCorreta) {
    return reply.code(401).send({
      message: 'Email ou senha inválidos'
    })
  }

  const token = request.server.jwt.sign(
    { id: user.id, email: user.email },
    { expiresIn: '1h' }
  )

  return {
    message: 'Login realizado com sucesso',
    token
  }
}

module.exports = {
  register,
  login
}
