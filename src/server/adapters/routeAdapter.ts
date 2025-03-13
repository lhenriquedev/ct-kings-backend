import type { FastifyReply, FastifyRequest } from 'fastify'
import type { IController } from '../../application/interfaces/i-controller'

export function routeAdapter(controller: IController) {
	return async (request: FastifyRequest, reply: FastifyReply) => {
		const { body, statusCode } = await controller.handle({
			body: request.body as Record<string, any>,
		})

		return reply.status(statusCode).send(body)
	}
}
