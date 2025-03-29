import { ClassesRepository } from '../../repositories/classes-repository'

export function makeClassesRepository() {
	const classesRepository = new ClassesRepository()

	return classesRepository
}
