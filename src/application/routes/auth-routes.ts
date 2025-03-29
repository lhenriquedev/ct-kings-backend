import type { FastifyPluginAsync } from 'fastify'
import { routeAdapter } from '../../server/adapters/routeAdapter'
import { makeSignInController } from '../controllers/_factories/make-sign-in-controller'
import { makeSignUpController } from '../controllers/_factories/make-sign-up-controller'

export const authRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/sign-up', routeAdapter(makeSignUpController()))
	fastify.post('/sign-in', routeAdapter(makeSignInController()))
}
