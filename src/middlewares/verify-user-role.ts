import type { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(
  roleToVerify: 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'
) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user

    if (role !== roleToVerify) {
      return reply.status(403).send({ message: 'Permissão negada.' })
    }
  }
}
