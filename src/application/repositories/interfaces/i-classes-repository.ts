import type { Class, Prisma } from '@prisma/client'

export interface IClassesRepository {
	create: (data: Prisma.ClassUncheckedCreateInput) => Promise<Class>
}
