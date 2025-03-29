import type { CheckIn } from '@prisma/client'
import type { ICheckInsRepository } from '../repositories/interfaces/i-check-ins-repository'

interface IInput {
	userId: string
	classId: string
}

interface IOutput {
	checkin: CheckIn
}

export class CreateCheckinUseCase {
	constructor(private readonly checkInsRepository: ICheckInsRepository) {}

	async execute({ userId, classId }: IInput): Promise<IOutput> {
		const checkin = await this.checkInsRepository.create({
			class_id: classId,
			user_id: userId,
		})

		return {
			checkin,
		}
	}
}
