import type { CheckIn, Prisma } from '@prisma/client'
import dayjs from 'dayjs'
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

	async findByUserOnDate(userId: string, date: Date) {
		const startOfTheDay = dayjs(date).startOf('date')
		const endOfTheDay = dayjs(date).endOf('date')

		const checkIn = await prismaClient.checkIn.findFirst({
			where: {
				user_id: userId,
				created_at: {
					gte: startOfTheDay.toDate(),
					lte: endOfTheDay.toDate(),
				},
			},
		})

		return checkIn
	}

	async findById(checkInId: string) {
		const checkIn = await prismaClient.checkIn.findUnique({
			where: { id: checkInId },
		})

		return checkIn
	}

	async countByUserId(userId: string) {
		const count = await prismaClient.checkIn.count({
			where: {
				user_id: userId,
			},
		})

		return count
	}

	async save(data: CheckIn) {
		const checkIn = await prismaClient.checkIn.update({
			where: { id: data.id },
			data,
		})

		return checkIn
	}
}
