import { ListUsersController } from '../application/controllers/list-users-controller'

export function makeListUsersControllers() {
	return new ListUsersController()
}
