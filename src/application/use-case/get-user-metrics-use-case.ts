import type { ICheckInsRepository } from '../repositories/interfaces/i-check-ins-repository'

interface IInput {
	userId: string
}

interface IOutput {
	totalCheckIns: number
}

export class GetUserMetricsUseCase {
	constructor(private readonly checkInsRepository: ICheckInsRepository) {}

	async execute({ userId }: IInput): Promise<IOutput> {
		const totalCheckIns = await this.checkInsRepository.countByUserId(userId)

		return {
			totalCheckIns,
		}
	}
}
