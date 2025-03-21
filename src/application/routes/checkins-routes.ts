import type { FastifyPluginAsync } from 'fastify'
import { makeCreateCheckinController } from '../../factories/make-create-checkin-controller'
import { routeAdapter } from '../../server/adapters/routeAdapter'

export const checkinsRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/checkins', routeAdapter(makeCreateCheckinController()))
}
