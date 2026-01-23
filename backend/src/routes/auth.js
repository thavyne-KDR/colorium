const authController = require('../controllers/authController')
const { registerSchema, loginSchema } = require('../schemas/authSchemas')

async function authRoutes(fastify, options) {

  fastify.post(
    '/register',
    { schema: registerSchema },
    authController.register
  )

  fastify.post(
    '/login',
    { schema: loginSchema },
    authController.login
  )

  fastify.get(
    '/profile',
    { preHandler: [fastify.authenticate] },
    async (request, reply) => {
      return {
        message: 'Rota protegida acessada com sucesso',
        user: request.user
      }
    }
  )
}

module.exports = authRoutes
