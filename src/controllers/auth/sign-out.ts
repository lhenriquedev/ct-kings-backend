import type { FastifyReply, FastifyRequest } from 'fastify'

export async function signOut(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Clear both authentication cookies
    return reply
      .clearCookie('token', {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .clearCookie('refreshToken', {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({
        message: 'Logout realizado com sucesso',
      })
  } catch (err) {
    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
