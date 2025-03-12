import { hash } from 'bcryptjs'
import { AccountAlreadyExists } from '../errors/account-already-exists'
import { prismaClient } from '../libs/prisma-client'

interface IInput {
	name: string
	email: string
	password: string
}

export class SignUpUseCase {
	async execute({ email, name, password }: IInput): Promise<void> {
		const accountAlreadyExists = await prismaClient.account.findUnique({
			where: { email },
		})

		if (accountAlreadyExists) throw new AccountAlreadyExists()

		const hashedPassword = await hash(password, 10)

		await prismaClient.account.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		})
	}
}
