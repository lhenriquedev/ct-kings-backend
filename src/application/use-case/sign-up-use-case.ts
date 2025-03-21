import { hash } from 'bcryptjs'
import { AccountAlreadyExists } from '../errors/account-already-exists'
import type { IUsersRepository } from '../repositories/interfaces/i-users-repository'

interface IInput {
	name: string
	email: string
	password: string
}

export class SignUpUseCase {
	constructor(
		private readonly salt: number,
		private readonly usersRepository: IUsersRepository,
	) {}

	async execute({ email, name, password }: IInput): Promise<void> {
		const accountAlreadyExists = await this.usersRepository.findByEmail(email)

		if (accountAlreadyExists) throw new AccountAlreadyExists()

		const hashedPassword = await hash(password, this.salt)

		await this.usersRepository.create({
			name,
			email,
			password: hashedPassword,
			role: 'USER',
			belt: 'BRANCA',
		})
	}
}
