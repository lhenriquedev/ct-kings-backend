import { ClassesRepository } from '../../repositories/classes-repository'
import { ListClassByIdController } from '../classes/list-class-by-id-controller'

export function makeListClassByIdController() {
	const classesRepo = new ClassesRepository()
	const listClassByIdController = new ListClassByIdController(classesRepo)

	return listClassByIdController
}
