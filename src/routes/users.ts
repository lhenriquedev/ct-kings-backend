import { listUsers } from '@/controllers/users/list-users'
import { me } from '@/controllers/users/me'
import { verifyJWT } from '@/middlewares/verify-jwt'
import type { FastifyInstance } from 'fastify'

export async function userRoutes(app: FastifyInstance) {
  // Apply JWT verification to all routes in this plugin
  app.addHook('onRequest', verifyJWT)

  app.get('/me', me)
  app.get('/users', listUsers)
}
