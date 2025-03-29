import type { FastifyReply, FastifyRequest } from 'fastify'
import type { UsersRepository } from '../../repositories/users-repository'

export class ListUsersController {
	constructor(private readonly usersRepo: UsersRepository) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const users = await this.usersRepo.findMany(1)

		return reply.status(200).send({ users })
	}
}
