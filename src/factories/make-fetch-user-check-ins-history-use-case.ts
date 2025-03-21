import { CheckInsRepository } from '../application/repositories/check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../application/use-case/fetch-user-check-ins-history-use-case'

export const makeFetchUserCheckInsHistoryUseCase = () => {
	const checkInsRepository = new CheckInsRepository()
	const fetchUserCheckInsHistoryUseCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

	return fetchUserCheckInsHistoryUseCase
}
