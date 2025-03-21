import type { CheckIn, Prisma } from '@prisma/client'

export interface ICheckInsRepository {
	create: (data: Prisma.CheckInUncheckedCreateInput) => Promise<CheckIn>
	findManyByUserId: (userId: string, page: number) => Promise<CheckIn[]>
	countByUserId: (userId: string) => Promise<number>
	findById: (checkInId: string) => Promise<CheckIn | null>
	save: (data: CheckIn) => Promise<CheckIn>
}
