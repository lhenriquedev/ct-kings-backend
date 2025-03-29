import { makeUsersRepository } from '../../repositories/_factories/make-users-repository'
import { SignInUseCase } from '../sign-in-use-case'

export function makeSignInUseCase() {
	const usersRepository = makeUsersRepository()
	const useCase = new SignInUseCase(usersRepository)

	return useCase
}
