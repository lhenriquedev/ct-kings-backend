import type { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'
import { InvalidCredentials } from '../../errors/invalid-credentials'
import type { SignInUseCase } from '../../use-case/sign-in-use-case'

const schema = z.object({
	email: z.string().email().min(1),
	password: z.string().min(8),
})

export class SignInController {
	constructor(private readonly signInUseCase: SignInUseCase) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		try {
			const { email, password } = schema.parse(request.body)

			const { accessToken } = await this.signInUseCase.execute({ email, password })

			return reply.status(200).send({ accessToken })
		} catch (error) {
			if (error instanceof ZodError) {
				return reply.status(400).send({ message: 'Validation error', issues: error.issues })
			}

			if (error instanceof InvalidCredentials) {
				return reply.status(401).send({ message: 'Invalid credentials' })
			}

			throw error
		}
	}
}
