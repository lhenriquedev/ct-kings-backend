import type { IController, IResponse } from '../../interfaces/i-controller'
import type { UsersRepository } from '../../repositories/users-repository'

export class ListUsersController implements IController {
	constructor(private readonly usersRepo: UsersRepository) {}

	async handle(): Promise<IResponse> {
		const users = await this.usersRepo.findAll()

		return {
			statusCode: 200,
			body: { users },
		}
	}
}
