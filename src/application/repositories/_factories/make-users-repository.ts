import { UsersRepository } from '../../repositories/users-repository'

export function makeUsersRepository() {
	return new UsersRepository()
}
