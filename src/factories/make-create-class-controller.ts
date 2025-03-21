import { CreateClassController } from '../application/controllers/classes/create-class-controller'
import { makeCreateClassUseCase } from './make-create-class-use-case'

export function makeCreateClassController() {
	const useCase = makeCreateClassUseCase()

	return new CreateClassController(useCase)
}
