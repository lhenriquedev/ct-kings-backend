import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { env } from '../config/env'
import { InvalidCredentials } from '../errors/invalid-credentials'
import type { IUsersRepository } from '../repositories/interfaces/i-users-repository'

interface IInput {
	email: string
	password: string
}

interface IOutput {
	accessToken: string
}

export class SignInUseCase {
	constructor(private readonly usersRepository: IUsersRepository) {}

	async execute({ email, password }: IInput): Promise<IOutput> {
		const user = await this.usersRepository.findByEmail(email)

		if (!user) throw new InvalidCredentials()

		const isPasswordValid = await compare(password, user.password)

		if (!isPasswordValid) throw new InvalidCredentials()

		const accessToken = sign({ sub: user.id, role: user.role }, env.jwtSecret, {
			expiresIn: '1d',
		})

		return {
			accessToken,
		}
	}
}
