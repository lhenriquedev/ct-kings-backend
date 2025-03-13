import { SignUpController } from '../application/controllers/sign-up-controller'
import { makeSignUpCase } from './make-sign-up-use-case'

export function makeSignUpController() {
	const signUpUseCase = makeSignUpCase()

	return new SignUpController(signUpUseCase)
}
