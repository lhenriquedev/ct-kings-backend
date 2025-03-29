import { CreateClassController } from '../../controllers/classes/create-class-controller'
import { makeCreateClassUseCase } from '../../use-case/_factories/make-create-class-use-case'

export function makeCreateClassController() {
	const useCase = makeCreateClassUseCase()

	return new CreateClassController(useCase)
}
