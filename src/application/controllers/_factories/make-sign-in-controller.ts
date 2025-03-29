import { SignInController } from '../../controllers/auth/sign-in-controller'
import { makeSignInUseCase } from '../../use-case/_factories/make-sign-in-use-case'

export function makeSignInController() {
	const signInUseCase = makeSignInUseCase()

	return new SignInController(signInUseCase)
}
