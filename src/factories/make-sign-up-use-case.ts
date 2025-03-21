import { SignUpUseCase } from '../application/use-case/sign-up-use-case'
import { makeUsersRepository } from './make-users-repository'

export function makeSignUpUseCase() {
	const SALT = 10
	const usersRepository = makeUsersRepository()

	return new SignUpUseCase(SALT, usersRepository)
}
