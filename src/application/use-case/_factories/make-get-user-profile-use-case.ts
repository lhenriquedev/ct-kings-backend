import { UsersRepository } from '../../repositories/users-repository'
import { GetUserProfileUseCase } from '../get-user-profile-use-case'

export const makeGetUserProfileUseCase = () => {
	const usersRepository = new UsersRepository()
	const useCase = new GetUserProfileUseCase(usersRepository)

	return useCase
}
