import { SignInUseCase } from '../application/use-case/sign-in-use-case'
import { makeUsersRepository } from './make-users-repository'

export function makeSignInUseCase() {
	const usersRepository = makeUsersRepository()

	return new SignInUseCase(usersRepository)
}
