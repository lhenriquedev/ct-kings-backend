import 'dotenv/config'

import fastify from 'fastify'

import { ZodError } from 'zod'
import { routes } from '../application/routes'

const app = fastify()

app.register(routes)

app.setErrorHandler((error, request, reply) => {
	if (error instanceof ZodError) {
		return reply.status(400).send({ message: 'Validation error', issues: error.format() })
	}

	return reply.status(500).send({ message: 'Internal server error' })

	// TODO: Use external tool like Sentry DataDog or NewRelic to track errors
})

async function start() {
	try {
		await app.listen({ host: '0.0.0.0', port: 3001 })
		console.log('🚀 HTTP server running on http://localhost:3001')
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

start()
