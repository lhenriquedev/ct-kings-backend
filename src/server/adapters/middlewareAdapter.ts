import type { FastifyReply, FastifyRequest } from 'fastify'
import type { IMiddleware } from '../../application/interfaces/i-middleware'

export function middlewareAdapter(middleware: IMiddleware) {
	return async (request: FastifyRequest, reply: FastifyReply) => {
		const result = await middleware.handle({
			headers: request.headers as Record<string, string>,
		})

		if ('statusCode' in result) {
			return reply.status(result.statusCode).send(result.body)
		}

		if (!request.metadata) {
			request.metadata = { userId: undefined }
		}

		request.metadata = {
			...request.metadata,
			...result.data,
		}
	}
}
