import type { CheckIn, Prisma } from '@prisma/client'
import { prismaClient } from '../libs/prisma-client'
import type { ICheckInsRepository } from './interfaces/i-check-ins-repository'

export class CheckInsRepository implements ICheckInsRepository {
	async create(data: Prisma.CheckInUncheckedCreateInput) {
		const checkIn = await prismaClient.checkIn.create({ data })
		return checkIn
	}

	async findManyByUserId(userId: string, page: number) {
		const checkIns = await prismaClient.checkIn.findMany({
			where: {
				user_id: userId,
			},
			skip: (page - 1) * 20,
			take: 20,
		})

		return checkIns
	}

	async countByUserId(userId: string) {
		const count = await prismaClient.checkIn.count({
			where: {
				user_id: userId,
			},
		})

		return count
	}

	async findById(checkInId: string) {
		const checkIn = await prismaClient.checkIn.findUnique({
			where: { id: checkInId },
		})

		return checkIn
	}

	async save(data: CheckIn) {
		const checkIn = await prismaClient.checkIn.update({
			where: { id: data.id },
			data,
		})

		return checkIn
	}
}
