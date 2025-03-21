import type { Prisma, User } from '@prisma/client'
import { prismaClient } from '../libs/prisma-client'
import type { IUsersRepository } from './interfaces/i-users-repository'

export class UsersRepository implements IUsersRepository {
	async create(data: Prisma.UserCreateInput) {
		const user = await prismaClient.user.create({ data })
		return user
	}

	async findMany(page: number): Promise<User[]> {
		const users = await prismaClient.user.findMany({
			skip: (page - 1) * 20,
			take: 20,
		})
		return users
	}

	async findByEmail(email: string) {
		const user = await prismaClient.user.findUnique({
			where: { email },
		})
		return user
	}

	async findById(userId: string) {
		const user = await prismaClient.user.findUnique({
			where: { id: userId },
		})
		return user
	}

	async save(data: User): Promise<User> {
		const user = await prismaClient.user.update({
			where: { id: data.id },
			data,
		})
		return user
	}
}
