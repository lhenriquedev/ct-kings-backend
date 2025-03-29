import type { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'
import type { CreateClassUseCase } from '../../use-case/create-class-use-case'

const schema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	date: z.string().min(1),
	instructor_id: z.string().min(1),
	start_time: z.string().min(1),
	end_time: z.string().min(1),
})

export class CreateClassController {
	constructor(private readonly createClassUseCase: CreateClassUseCase) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		try {
			const { name, description, date, instructor_id, start_time, end_time } = schema.parse(
				request.body,
			)

			const { class: singleClass } = await this.createClassUseCase.execute({
				name,
				description,
				date,
				instructor_id,
				start_time,
				end_time,
			})

			return reply.status(201).send(singleClass)
		} catch (error) {
			if (error instanceof ZodError) {
				return reply.status(400).send(error.issues)
			}

			throw error
		}
	}
}
