import type { FastifyPluginAsync } from 'fastify'
import { routeAdapter } from '../../server/adapters/routeAdapter'
import { makeCreateClassController } from '../controllers/_factories/make-create-class-controller'
import { makeListClassByIdController } from '../controllers/_factories/make-list-class-by-id-controller'
import { makeListClassesController } from '../controllers/_factories/make-list-classes-controller'

export const classesRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.post('/create-class', routeAdapter(makeCreateClassController()))
	fastify.get('/list', routeAdapter(makeListClassesController()))
	fastify.get('/list/:classId', routeAdapter(makeListClassByIdController()))
}
