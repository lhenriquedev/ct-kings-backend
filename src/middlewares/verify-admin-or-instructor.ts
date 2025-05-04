import type { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyAdminOrInstructor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { role } = request.user

  if (role !== 'ADMIN' && role !== 'INSTRUCTOR') {
    return reply.status(403).send({ message: 'Permissão negada.' })
  }
}
