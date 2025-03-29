import type { Class, Prisma } from '@prisma/client'

export interface IClassesRepository {
	create: (data: Prisma.ClassUncheckedCreateInput) => Promise<Class>
	findById: (id: string) => Promise<Class | null>
	findUserInClass: (userId: string, classId: string) => Promise<Class | null>
	findMany: (page: number) => Promise<Class[]>
}
