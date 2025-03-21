import { ClassesRepository } from '../application/repositories/classes-repository'
import { CreateClassUseCase } from '../application/use-case/create-class-use-case'

export const makeCreateClassUseCase = () => {
	const classesRepository = new ClassesRepository()

	return new CreateClassUseCase(classesRepository)
}
