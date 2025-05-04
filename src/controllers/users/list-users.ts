import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true,
      },
    })

    return reply.status(200).send({ users })
  } catch (err) {
    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
