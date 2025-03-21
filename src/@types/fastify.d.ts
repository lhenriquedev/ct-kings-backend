import 'fastify'

declare module 'fastify' {
	interface FastifyRequest {
		metadata: {
			userId: string | undefined
		}
	}
}
