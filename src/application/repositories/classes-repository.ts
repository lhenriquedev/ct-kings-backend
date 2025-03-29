import type { Prisma } from '@prisma/client'
import { prismaClient } from '../libs/prisma-client'
import type { IClassesRepository } from './interfaces/i-classes-repository'

export class ClassesRepository implements IClassesRepository {
	async create(data: Prisma.ClassUncheckedCreateInput) {
		const singleClass = await prismaClient.class.create({ data })
		return singleClass
	}

	async findById(classId: string) {
		const singleClass = await prismaClient.class.findUnique({
			where: { id: classId },
			include: {
				checkIns: {
					select: {
						id: true,
						checked_in_at: true,
						checked_in: true,
						user: {
							select: {
								id: true,
								name: true,
								belt: true,
								email: true,
							},
						},
					},
				},
			},
		})
		return singleClass
	}

	async findMany(page: number) {
		const classes = await prismaClient.class.findMany({
			take: 20,
			skip: (page - 1) * 20,
		})
		return classes
	}

	async findUserInClass(userId: string, classId: string) {
		const userInClass = await prismaClient.class.findFirst({
			where: {
				id: classId,
				checkIns: {
					some: {
						user_id: userId,
					},
				},
			},
		})
		return userInClass
	}
}
