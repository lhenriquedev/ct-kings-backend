import { ClassesRepository } from '../application/repositories/classes-repository'

export function makeClassesRepository() {
	return new ClassesRepository()
}
