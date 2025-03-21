import type { Class } from '@prisma/client'
import type { IClassesRepository } from '../repositories/interfaces/i-classes-repository'

interface IInput {
	name: string
	description: string
	date: string
	instructor_id: string
	start_time: string
	end_time: string
}

interface IOutput {
	class: Class
}

export class CreateClassUseCase {
	constructor(private readonly classesRepository: IClassesRepository) {}

	async execute(data: IInput): Promise<IOutput> {
		const singleClass = await this.classesRepository.create(data)

		return {
			class: singleClass,
		}
	}
}
