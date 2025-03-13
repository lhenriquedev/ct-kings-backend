import type { IController, IRequest, IResponse } from '../interfaces/i-controller'

export class ListUsersController implements IController {
	async handle(request: IRequest): Promise<IResponse> {
		console.log(request)

		return {
			statusCode: 200,
			body: {
				users: [
					{ id: 1, name: 'Lucas' },
					{ id: 2, name: 'João' },
					{ id: 3, name: 'Camila' },
				],
			},
		}
	}
}
