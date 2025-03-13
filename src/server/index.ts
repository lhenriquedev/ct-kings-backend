import 'dotenv/config'

import fastify from 'fastify'

import { SignInController } from '../application/controllers/sign-in-controller'
import { SignUpController } from '../application/controllers/sign-up-controller'
import { SignInUseCase } from '../application/use-case/sign-in-use-case'
import { SignUpUseCase } from '../application/use-case/sign-up-use-case'

const app = fastify()

app.post('/sign-up', async (request, reply) => {
	const SALT = 10

	const signUpUseCase = new SignUpUseCase(SALT)
	const signUpController = new SignUpController(signUpUseCase)

	const { body, statusCode } = await signUpController.handle({
		body: request.body as Record<string, any>,
	})

	return reply.status(statusCode).send(body)
})

app.post('/sign-in', async (request, reply) => {
	const signInUseCase = new SignInUseCase()
	const signInController = new SignInController(signInUseCase)

	const { body, statusCode } = await signInController.handle({
		body: request.body as Record<string, any>,
	})

	return reply.status(statusCode).send(body)
})

app
	.listen({
		host: '0.0.0.0',
		port: 3001,
	})
	.then(() => {
		console.log('🚀 HTTP server running on http://localhost:3001')
	})
