import { SignInUseCase } from '../application/use-case/sign-in-use-case'

export function makeSignInUseCase() {
	return new SignInUseCase()
}
