import { UsersRepository } from '../application/repositories/users-repository'
import { GetUserProfileUseCase } from '../application/use-case/get-user-profile-use-case'

export const makeGetUserProfileUseCase = () => {
	const usersRepository = new UsersRepository()
	const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository)

	return getUserProfileUseCase
}
