import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createModality(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createModalitySchema = z.object({
    name: z.string(),
    description: z.string().optional(),
  })

  try {
    const { name, description } = createModalitySchema.parse(request.body)

    const modalityWithSameName = await prisma.modality.findUnique({
      where: {
        name,
      },
    })

    if (modalityWithSameName) {
      return reply
        .status(409)
        .send({ message: 'Modalidade com este nome já existe.' })
    }

    const modality = await prisma.modality.create({
      data: {
        name,
        description,
      },
    })

    return reply.status(201).send({ modality })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return reply
        .status(400)
        .send({ message: 'Dados de entrada inválidos.', errors: err.format() })
    }

    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
