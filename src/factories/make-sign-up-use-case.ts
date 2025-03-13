import { SignUpUseCase } from '../application/use-case/sign-up-use-case'

export function makeSignUpCase() {
	const SALT = 10

	return new SignUpUseCase(SALT)
}
