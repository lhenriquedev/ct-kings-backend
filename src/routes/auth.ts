import { refresh } from '@/controllers/auth/refresh'
import { signIn } from '@/controllers/auth/sign-in'
import { signOut } from '@/controllers/auth/sign-out'
import { signUp } from '@/controllers/auth/sign-up'
import type { FastifyInstance } from 'fastify'

export async function authRoutes(app: FastifyInstance) {
  app.post('/sign-in', signIn)
  app.post('/sign-up', signUp)
  app.post('/sign-out', signOut)
  app.patch('/token/refresh', refresh)
}
