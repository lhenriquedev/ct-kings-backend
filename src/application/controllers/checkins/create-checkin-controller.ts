import { ZodError } from 'zod'
import type { IController, IRequest, IResponse } from '../../interfaces/i-controller'
import type { CreateCheckinUseCase } from '../../use-case/checkin-use-case'

export class CreateCheckinController implements IController {
	constructor(private readonly createCheckinUseCase: CreateCheckinUseCase) {}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const { classId, userId } = request.body

			const { checkin } = await this.createCheckinUseCase.execute({ classId, userId })

			return {
				statusCode: 201,
				body: checkin,
			}
		} catch (error) {
			if (error instanceof ZodError) {
				return {
					statusCode: 400,
					body: error.issues,
				}
			}

			throw error
		}
	}
}
