import { ListUsersController } from '../application/controllers/users/list-users-controller'
import { makeUsersRepository } from './make-users-repository'

export function makeListUsersControllers() {
	return new ListUsersController(makeUsersRepository())
}
