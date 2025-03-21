import { CreateCheckinController } from '../application/controllers/checkins/create-checkin-controller'
import { makeCreateCheckinUseCase } from './make-create-checkin-use-case'

export function makeCreateCheckinController() {
	const useCase = makeCreateCheckinUseCase()
	return new CreateCheckinController(useCase)
}
