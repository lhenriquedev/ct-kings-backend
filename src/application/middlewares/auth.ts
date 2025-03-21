import type { IData, IMiddleware, IRequest, IResponse } from '../interfaces/i-middleware'

import { verify } from 'jsonwebtoken'
import { env } from '../config/env'

export class AuthMiddleware implements IMiddleware {
	async handle({ headers }: IRequest): Promise<IResponse | IData> {
		const { authorization } = headers

		if (!authorization) {
			return {
				statusCode: 401,
				body: {
					error: 'Invalid access token',
				},
			}
		}

		try {
			const [bearer, token] = authorization.split(' ')

			if (bearer !== 'Bearer') {
				throw new Error()
			}

			const payload = verify(token, env.jwtSecret)

			return {
				data: {
					userId: payload.sub,
				},
			}
		} catch (error) {
			return {
				statusCode: 401,
				body: {
					error: 'Invalid access token',
				},
			}
		}
	}
}
