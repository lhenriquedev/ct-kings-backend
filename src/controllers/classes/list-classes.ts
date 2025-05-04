import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function listClasses(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const querySchema = z.object({
    modality_id: z.string().uuid().optional(),
    date: z
      .string()
      .transform(str => new Date(str))
      .optional(),
  })

  try {
    const { modality_id, date } = querySchema.parse(request.query)

    const whereClause: any = {}

    if (modality_id) {
      whereClause.modality_id = modality_id
    }

    if (date) {
      const startOfDay = new Date(date)
      startOfDay.setHours(0, 0, 0, 0)

      const endOfDay = new Date(date)
      endOfDay.setHours(23, 59, 59, 999)

      whereClause.start_time = {
        gte: startOfDay,
        lte: endOfDay,
      }
    }

    const classes = await prisma.class.findMany({
      where: whereClause,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
          },
        },
        modality: true,
        recurrence: !date,
      },
      orderBy: {
        start_time: 'asc',
      },
    })

    return reply.status(200).send({ classes })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return reply.status(400).send({
        message: 'Parâmetros de consulta inválidos.',
        errors: err.format(),
      })
    }

    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
