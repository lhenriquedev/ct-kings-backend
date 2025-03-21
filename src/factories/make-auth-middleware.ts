import { AuthMiddleware } from '../application/middlewares/auth'

export function makeAuthMiddleware() {
	return new AuthMiddleware()
}
