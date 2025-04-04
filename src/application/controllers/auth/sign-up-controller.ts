import { ZodError, z } from 'zod'
import { AccountAlreadyExists } from '../../errors/account-already-exists'
import type { IController, IRequest, IResponse } from '../../interfaces/i-controller'
import type { SignUpUseCase } from '../../use-case/sign-up-use-case'

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email().min(1),
	password: z.string().min(8),
})

export class SignUpController implements IController {
	constructor(private readonly signUpUseCase: SignUpUseCase) {}

	async handle({ body }: IRequest): Promise<IResponse> {
		try {
			const { email, name, password } = schema.parse(body)

			await this.signUpUseCase.execute({ email, name, password })

			return {
				statusCode: 204,
				body: null,
			}
		} catch (error) {
			if (error instanceof ZodError) {
				return {
					statusCode: 400,
					body: error.issues,
				}
			}

			if (error instanceof AccountAlreadyExists) {
				return {
					statusCode: 409,
					body: {
						error: 'This email is already in use',
					},
				}
			}

			throw error
		}
	}
}
