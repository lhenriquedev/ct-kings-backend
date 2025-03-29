import { ClassesRepository } from '../../repositories/classes-repository'
import { ListClassesController } from '../classes/list-classes-controller'

export function makeListClassesController() {
	const classesRepository = new ClassesRepository()
	const listClassesController = new ListClassesController(classesRepository)

	return listClassesController
}
