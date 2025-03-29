import type { FastifyPluginAsync } from 'fastify'
import { routeAdapter } from '../../server/adapters/routeAdapter'
import { makeListUsersController } from '../controllers/_factories/make-list-users-controller'

export const usersRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.get('/list-users', routeAdapter(makeListUsersController()))
}
