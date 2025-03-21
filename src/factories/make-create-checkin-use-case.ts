import { CheckInsRepository } from '../application/repositories/check-ins-repository'
import { CreateCheckinUseCase } from '../application/use-case/checkin-use-case'

export function makeCreateCheckinUseCase() {
	const checkinsRepository = new CheckInsRepository()

	return new CreateCheckinUseCase(checkinsRepository)
}
