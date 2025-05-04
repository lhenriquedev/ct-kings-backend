import { createModality } from '@/controllers/modalities/create-modality'
import { listModalities } from '@/controllers/modalities/list-modalities'
import { verifyJWT } from '@/middlewares/verify-jwt'
import { verifyUserRole } from '@/middlewares/verify-user-role'
import type { FastifyInstance } from 'fastify'

export async function modalityRoutes(app: FastifyInstance) {
  // Aplicar middleware de autenticação em todas as rotas
  app.addHook('onRequest', verifyJWT)

  app.post(
    '/create-modality',
    { onRequest: [verifyUserRole('ADMIN')] },
    createModality
  )
  app.get('/modalities', listModalities)
}
