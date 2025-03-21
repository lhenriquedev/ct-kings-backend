import type { CheckIn } from '@prisma/client'
import type { ICheckInsRepository } from '../repositories/interfaces/i-check-ins-repository'

interface IInput {
	userId: string
	page: number
}

interface IOutput {
	checkIns: CheckIn[]
}

export class FetchUserCheckInsHistoryUseCase {
	constructor(private readonly checkInsRepository: ICheckInsRepository) {}

	async execute({ userId, page }: IInput): Promise<IOutput> {
		const checkIns = await this.checkInsRepository.findManyByUserId(userId, page)

		return {
			checkIns,
		}
	}
}
