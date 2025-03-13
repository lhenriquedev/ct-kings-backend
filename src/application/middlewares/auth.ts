import type { FastifyReply, FastifyRequest } from 'fastify'

export function auth(request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) {
	const authorization = request.headers.authorization?.replace(/^Bearer/, '')

	if (!authorization) {
		return reply.status(401).send({ error: 'Unauthorized' })
	}

	done()
}
