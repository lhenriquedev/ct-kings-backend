import dayjs from 'dayjs'
import type { FastifyReply, FastifyRequest } from 'fastify'
import type { IClassesRepository } from '../../repositories/interfaces/i-classes-repository'
import type { CreateCheckinUseCase } from '../../use-case/create-checkin-use-case'

interface CreateCheckinBody {
	classId: string
	userId: string
}

export class CreateCheckinController {
	constructor(
		private readonly createCheckinUseCase: CreateCheckinUseCase,
		private readonly classesRepository: IClassesRepository,
	) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		try {
			const { classId, userId } = request.body as CreateCheckinBody

			if (!classId || !userId) {
				return reply.status(400).send({ message: 'Missing classId or userId' })
			}

			const existingClass = await this.classesRepository.findById(classId)

			if (!existingClass) {
				return reply.status(404).send({ message: 'Class not found' })
			}

			const isUserAlreadyInClass = await this.classesRepository.findUserInClass(userId, classId)

			if (isUserAlreadyInClass) {
				return reply.status(400).send({ message: 'User already in class' })
			}

			const isClassAlreadyStarted = dayjs().isAfter(dayjs(existingClass.start_time))
			const isClassAlreadyEnded = dayjs().isAfter(dayjs(existingClass.end_time))

			if (isClassAlreadyStarted || isClassAlreadyEnded) {
				return reply.status(400).send({ message: 'Class already started or ended' })
			}

			const { checkin } = await this.createCheckinUseCase.execute({ userId, classId })

			return reply.status(201).send(checkin)
		} catch (error) {
			console.error(error)
			throw error
		}
	}
}
