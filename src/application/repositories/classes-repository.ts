import type { Prisma } from '@prisma/client'
import { prismaClient } from '../libs/prisma-client'
import type { IClassesRepository } from './interfaces/i-classes-repository'

export class ClassesRepository implements IClassesRepository {
	async create(data: Prisma.ClassUncheckedCreateInput) {
		const singleClass = await prismaClient.class.create({ data })
		return singleClass
	}
}
