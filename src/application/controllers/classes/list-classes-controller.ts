import type { FastifyReply, FastifyRequest } from 'fastify'
import type { ClassesRepository } from '../../repositories/classes-repository'

interface ListClassesQuery {
	page: number
}

export class ListClassesController {
	constructor(private readonly classesRepo: ClassesRepository) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const query = request.query as ListClassesQuery

		const classes = await this.classesRepo.findMany(query.page)

		return reply.status(200).send({ classes })
	}
}
