import { ResourceNotFound } from '../errors/resource-not-found'
import type { IUsersRepository } from '../repositories/interfaces/i-users-repository'

interface IInput {
	userId: string
}

export class GetUserProfileUseCase {
	constructor(private readonly usersRepository: IUsersRepository) {}

	async execute({ userId }: IInput) {
		const user = await this.usersRepository.findById(userId)

		if (!user) throw new ResourceNotFound()

		return {
			user,
		}
	}
}
