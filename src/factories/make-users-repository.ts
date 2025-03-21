import { UsersRepository } from '../application/repositories/users-repository'

export function makeUsersRepository() {
	return new UsersRepository()
}
