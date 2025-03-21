import type { FastifyPluginAsync } from 'fastify'
import { makeAuthMiddleware } from '../../factories/make-auth-middleware'
import { middlewareAdapter } from '../../server/adapters/middlewareAdapter'
import { authRoutes } from './auth-routes'
import { checkinsRoutes } from './checkins-routes'
import { classesRoutes } from './classes-routes'
import { usersRoutes } from './users-routes'

const publicRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.register(authRoutes, { prefix: '/auth' })
}

const privateRoutes: FastifyPluginAsync = async (fastify) => {
	fastify.addHook('onRequest', middlewareAdapter(makeAuthMiddleware()))
	fastify.register(usersRoutes, { prefix: '/users' })
	fastify.register(classesRoutes, { prefix: '/classes' })
	fastify.register(checkinsRoutes, { prefix: '/checkins' })
}

export const routes: FastifyPluginAsync = async (fastify) => {
	fastify.register(publicRoutes)
	fastify.register(privateRoutes)
}
