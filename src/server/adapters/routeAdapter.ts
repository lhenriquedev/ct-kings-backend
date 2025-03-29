import type { FastifyReply, FastifyRequest } from 'fastify'
import type { IController } from '../../application/interfaces/i-controller'

export function routeAdapter(controller: IController) {
	return async (request: FastifyRequest, reply: FastifyReply) => {
		await controller.handle(request, reply)
	}
}
