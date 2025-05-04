import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function me(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userId = request.user.sub

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true,
      },
    })

    if (!user) {
      return reply.status(404).send({ message: 'Usuário não encontrado.' })
    }

    return reply.status(200).send({ user })
  } catch (err) {
    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
