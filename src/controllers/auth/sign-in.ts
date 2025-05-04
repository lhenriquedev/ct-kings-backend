import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  try {
    const { email, password } = loginBodySchema.parse(request.body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return reply.status(401).send({ message: 'Credenciais inválidas.' })
    }

    const doesPasswordMatch = await bcrypt.compare(password, user.password_hash)

    if (!doesPasswordMatch) {
      return reply.status(401).send({ message: 'Credenciais inválidas.' })
    }

    const token = await reply.jwtSign(
      {
        role: user.role,
        sub: user.id,
      },
      {
        sign: {
          sub: user.id,
        },
      }
    )

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      }
    )

    return reply
      .setCookie('token', token, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({
        token,
      })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return reply.status(400).send({
        message: 'Dados de entrada inválidos.',
        errors: err.format(),
      })
    }

    console.error(err)
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
