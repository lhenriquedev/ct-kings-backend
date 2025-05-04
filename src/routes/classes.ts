import { createClass } from '@/controllers/classes/create-class'
import { listClasses } from '@/controllers/classes/list-classes'
import { verifyAdminOrInstructor } from '@/middlewares/verify-admin-or-instructor'
import { verifyJWT } from '@/middlewares/verify-jwt'
import type { FastifyInstance } from 'fastify'

export async function classRoutes(app: FastifyInstance) {
  // Aplicar middleware de autenticação em todas as rotas
  app.addHook('onRequest', verifyJWT)

  // Verificação por rota: apenas INSTRUCTOR ou ADMIN podem criar aulas
  app.post(
    '/classes',
    {
      onRequest: [verifyAdminOrInstructor],
    },
    createClass
  )

  app.get('/classes', listClasses)
}
