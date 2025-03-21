import type { FastifyPluginAsync } from 'fastify'
import { makeSignInController } from '../../factories/make-sign-in-controller'
import { makeSignUpController } from '../../factories/make-sign-up-controller'
import { routeAdapter } from '../../server/adapters/routeAdapter'

export const authRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/sign-up', routeAdapter(makeSignUpController()))
	fastify.post('/sign-in', routeAdapter(makeSignInController()))
}
