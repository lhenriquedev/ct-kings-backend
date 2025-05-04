import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function signUp(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['ADMIN', 'INSTRUCTOR', 'STUDENT']).default('STUDENT'),
  })

  try {
    const { name, email, password, role } = registerBodySchema.parse(
      request.body
    )

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      return reply.status(409).send({ message: 'E-mail já está em uso.' })
    }

    const password_hash = await bcrypt.hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        role,
      },
    })

    return reply.status(201).send({ user: { id: user.id, name, email, role } })
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
