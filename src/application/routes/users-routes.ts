import type { FastifyPluginAsync } from 'fastify'
import { makeListUsersControllers } from '../../factories/make-list-users.controller'
import { routeAdapter } from '../../server/adapters/routeAdapter'

export const usersRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.get('/list-users', routeAdapter(makeListUsersControllers()))
}
