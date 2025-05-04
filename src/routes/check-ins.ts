import { createCheckIn } from '@/controllers/checkin/create-checkin'
import { verifyJWT } from '@/middlewares/verify-jwt'
import type { FastifyInstance } from 'fastify'

export async function checkInRoutes(app: FastifyInstance) {
  // Aplicar middleware de autenticação em todas as rotas
  app.addHook('onRequest', verifyJWT)

  app.post('/create-checkin', createCheckIn)
}
