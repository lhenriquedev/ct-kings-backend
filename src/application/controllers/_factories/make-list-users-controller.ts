import { makeUsersRepository } from '../../repositories/_factories/make-users-repository'
import { ListUsersController } from '../users/list-users-controller'

export function makeListUsersController() {
	const usersRepository = makeUsersRepository()

	return new ListUsersController(usersRepository)
}
