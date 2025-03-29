import { CheckInsRepository } from '../../repositories/check-ins-repository'
import { CreateCheckinUseCase } from '../create-checkin-use-case'

export function makeCreateCheckinUseCase() {
	const checkinsRepository = new CheckInsRepository()
	const useCase = new CreateCheckinUseCase(checkinsRepository)

	return useCase
}
