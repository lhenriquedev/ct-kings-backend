import { CreateCheckinController } from '../../controllers/checkins/create-checkin-controller'
import { makeClassesRepository } from '../../repositories/_factories/make-classes-repository'
import { makeCreateCheckinUseCase } from '../../use-case/_factories/make-create-checkin-use-case'

export function makeCreateCheckinController() {
	const useCase = makeCreateCheckinUseCase()
	const classesRepository = makeClassesRepository()

	return new CreateCheckinController(useCase, classesRepository)
}
