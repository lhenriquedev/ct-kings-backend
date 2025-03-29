import { SignUpController } from '../../controllers/auth/sign-up-controller'
import { makeSignUpUseCase } from '../../use-case/_factories/make-sign-up-use-case'

export function makeSignUpController() {
	const signUpUseCase = makeSignUpUseCase()

	return new SignUpController(signUpUseCase)
}
