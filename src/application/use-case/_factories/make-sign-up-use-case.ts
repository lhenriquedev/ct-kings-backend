import { makeUsersRepository } from '../../repositories/_factories/make-users-repository'
import { SignUpUseCase } from '../sign-up-use-case'

export function makeSignUpUseCase() {
	const SALT = 10
	const usersRepository = makeUsersRepository()
	const useCase = new SignUpUseCase(SALT, usersRepository)

	return useCase
}
