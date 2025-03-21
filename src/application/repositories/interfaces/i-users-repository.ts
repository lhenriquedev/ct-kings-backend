import type { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
	create(data: Prisma.UserCreateInput): Promise<User>
	findByEmail(email: string): Promise<User | null>
	findById(userId: string): Promise<User | null>
	findMany(page: number): Promise<User[]>
	save(data: User): Promise<User>
}
