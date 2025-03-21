import type { FastifyPluginAsync } from 'fastify'
import { makeCreateClassController } from '../../factories/make-create-class-controller'
import { routeAdapter } from '../../server/adapters/routeAdapter'

export const classesRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/create-class', routeAdapter(makeCreateClassController()))
}
