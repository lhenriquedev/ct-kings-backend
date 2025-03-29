import { ClassesRepository } from '../../repositories/classes-repository'
import { CreateClassUseCase } from '../create-class-use-case'

export const makeCreateClassUseCase = () => {
	const classesRepository = new ClassesRepository()
	const useCase = new CreateClassUseCase(classesRepository)

	return useCase
}
