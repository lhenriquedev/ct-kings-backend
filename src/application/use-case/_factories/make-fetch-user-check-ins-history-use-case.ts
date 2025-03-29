import { CheckInsRepository } from '../../repositories/check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history-use-case'

export const makeFetchUserCheckInsHistoryUseCase = () => {
	const checkInsRepository = new CheckInsRepository()
	const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

	return useCase
}
