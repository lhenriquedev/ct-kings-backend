import type { FastifyPluginAsync } from 'fastify'
import { routeAdapter } from '../../server/adapters/routeAdapter'
import { makeCreateCheckinController } from '../controllers/_factories/make-create-checkin-controller'

export const checkinsRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/create-checkin', routeAdapter(makeCreateCheckinController()))
}
