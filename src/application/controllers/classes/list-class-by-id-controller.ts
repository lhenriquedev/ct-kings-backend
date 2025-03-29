import type { FastifyReply, FastifyRequest } from 'fastify'
import type { ClassesRepository } from '../../repositories/classes-repository'

interface ListClassByIdParams {
	classId: string
}

export class ListClassByIdController {
	constructor(private readonly classesRepo: ClassesRepository) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const { classId } = request.params as ListClassByIdParams

		if (!classId) {
			return reply.status(400).send({ message: 'Missing classId' })
		}

		const singleClass = await this.classesRepo.findById(classId)

		if (!singleClass) {
			return reply.status(404).send({ message: 'Class not found' })
		}

		return reply.status(200).send({ singleClass })
	}
}
