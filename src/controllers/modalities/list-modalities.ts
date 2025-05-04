import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function listModalities(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const modalities = await prisma.modality.findMany()

    return reply.status(200).send({ modalities })
  } catch (err) {
    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
