import type { FastifyReply, FastifyRequest } from 'fastify'

interface JWTPayload {
  sub: string
  role: 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'
  iat: number
  exp: number
}

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Verificar se existe o cookie de refresh token
    const refreshToken = request.cookies.refreshToken

    if (!refreshToken) {
      return reply.status(401).send({ message: 'Refresh token não fornecido.' })
    }

    // Verificar o token de refresh
    const { sub, role } = await request.jwtVerify<JWTPayload>({
      onlyCookie: true,
    })

    // Gerar um novo token de acesso
    reply.jwtSign(
      {
        role,
      },
      {
        sign: {
          sub,
        },
      },
      (err, token) => {
        if (err) {
          request.log.error(err)
          return reply.status(500).send({ message: 'Erro ao gerar token.' })
        }

        // Gerar um novo refresh token
        reply.jwtSign(
          {
            role,
          },
          {
            sign: {
              sub,
              expiresIn: '7d',
            },
          },
          (err, newRefreshToken) => {
            if (err) {
              request.log.error(err)
              return reply
                .status(500)
                .send({ message: 'Erro ao gerar refresh token.' })
            }

            // Configurar o cookie e enviar a resposta
            reply
              .setCookie('refreshToken', newRefreshToken, {
                path: '/',
                secure: true,
                sameSite: true,
                httpOnly: true,
              })
              .status(200)
              .send({
                token,
              })
          }
        )
      }
    )
  } catch (err) {
    console.error(err)
    return reply.status(401).send({ message: 'Token de refresh inválido.' })
  }
}
