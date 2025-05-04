import { prisma } from '@/lib/prisma'
import type { PrismaClient } from '@prisma/client'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createCheckIn(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createCheckInSchema = z.object({
    class_id: z.string().uuid(),
  })

  try {
    const user_id = request.user.sub
    const { class_id } = createCheckInSchema.parse(request.body)

    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: user_id },
    })

    if (!user) {
      return reply.status(404).send({ message: 'Usuário não encontrado.' })
    }

    // Verificar se a aula existe
    const classEntity = await prisma.class.findUnique({
      where: { id: class_id },
      include: { modality: true },
    })

    if (!classEntity) {
      return reply.status(404).send({ message: 'Aula não encontrada.' })
    }

    // Verificar se o usuário já fez check-in nesta aula
    const existingCheckIn = await prisma.checkIn.findUnique({
      where: {
        user_id_class_id: {
          user_id,
          class_id,
        },
      },
    })

    if (existingCheckIn) {
      return reply
        .status(409)
        .send({ message: 'Usuário já fez check-in nesta aula.' })
    }

    // Transação para criar o check-in e atualizar o progresso do aluno
    const result = await prisma.$transaction(
      async (
        tx: Omit<
          PrismaClient,
          '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
        >
      ) => {
        // Criar o check-in
        const checkIn = await tx.checkIn.create({
          data: {
            user_id,
            class_id,
          },
        })

        // Encontrar o nível atual do aluno nesta modalidade
        const currentBeltRank = await tx.beltRank.findFirst({
          where: {
            modality_id: classEntity.modality_id,
            users: {
              some: {
                id: user_id,
              },
            },
          },
          orderBy: {
            order: 'desc',
          },
        })

        if (currentBeltRank) {
          // Atualizar o progresso do aluno
          const progress = await tx.studentProgress.findUnique({
            where: {
              user_id_belt_rank_id: {
                user_id,
                belt_rank_id: currentBeltRank.id,
              },
            },
          })

          if (progress) {
            // Incrementar o número de aulas completadas
            await tx.studentProgress.update({
              where: {
                id: progress.id,
              },
              data: {
                classes_completed: {
                  increment: 1,
                },
              },
            })
          } else {
            // Criar um novo progresso se não existir
            await tx.studentProgress.create({
              data: {
                user_id,
                belt_rank_id: currentBeltRank.id,
                classes_completed: 1,
              },
            })
          }
        }

        return { checkIn }
      }
    )

    return reply.status(201).send(result)
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
