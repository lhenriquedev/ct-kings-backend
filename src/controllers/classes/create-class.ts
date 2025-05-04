import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createClass(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createClassSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    start_time: z.string().transform(str => new Date(str)),
    end_time: z.string().transform(str => new Date(str)),
    instructor_id: z.string().uuid(),
    modality_id: z.string().uuid(),
    max_students: z.number().int().positive().optional(),
    is_recurring: z.boolean().default(false),
    recurrence: z
      .object({
        days_of_week: z.array(
          z.enum([
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY',
            'FRIDAY',
            'SATURDAY',
            'SUNDAY',
          ])
        ),
        start_date: z.string().transform(str => new Date(str)),
        end_date: z
          .string()
          .transform(str => new Date(str))
          .optional(),
      })
      .nullable()
      .optional()
      .transform(val => (val === null ? undefined : val)),
  })

  try {
    const {
      title,
      description,
      start_time,
      end_time,
      instructor_id,
      modality_id,
      max_students,
      is_recurring,
      recurrence,
    } = createClassSchema.parse(request.body)

    // Verificar se o instrutor existe
    const instructor = await prisma.user.findUnique({
      where: { id: instructor_id },
    })

    if (!instructor || instructor.role !== 'INSTRUCTOR') {
      return reply.status(400).send({
        message: 'Instrutor não encontrado ou usuário não é um instrutor.',
      })
    }

    // Verificar se a modalidade existe
    const modality = await prisma.modality.findUnique({
      where: { id: modality_id },
    })

    if (!modality) {
      return reply.status(400).send({ message: 'Modalidade não encontrada.' })
    }

    if (is_recurring && recurrence) {
      // Criar aula recorrente
      const classRecurrence = await prisma.classRecurrence.create({
        data: {
          days_of_week: recurrence.days_of_week,
          start_date: recurrence.start_date,
          end_date: recurrence.end_date,
        },
      })

      // Criar aula principal com recorrência
      const mainClass = await prisma.class.create({
        data: {
          title,
          description,
          start_time,
          end_time,
          instructor_id,
          modality_id,
          max_students,
          is_recurring: true,
          recurrence_id: classRecurrence.id,
        },
      })

      // Gerar instâncias de aulas recorrentes
      const createdClasses = [mainClass]

      // Usar dayjs para manipulação de datas
      const startDayjs = dayjs(recurrence.start_date)
      const endDayjs = recurrence.end_date
        ? dayjs(recurrence.end_date)
        : startDayjs.add(3, 'month')

      // Mapear dias da semana para números (0 = Domingo, 1 = Segunda, etc.)
      const dayMapping = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      }

      // Calcular a duração da aula em milissegundos
      const startDayjsTime = dayjs(start_time)
      const endDayjsTime = dayjs(end_time)
      const classDurationMs = endDayjsTime.diff(startDayjsTime)

      // Para cada dia dentro do período
      let currentDayjs = startDayjs.startOf('day')

      while (
        currentDayjs.isBefore(endDayjs) ||
        currentDayjs.isSame(endDayjs, 'day')
      ) {
        const dayOfWeek = currentDayjs.day() // 0-6

        // Verificar se este dia da semana está na recorrência
        if (
          recurrence.days_of_week.some(day => dayMapping[day] === dayOfWeek)
        ) {
          // Criar horário de início e fim para esta instância
          const instanceStart = currentDayjs
            .hour(startDayjsTime.hour())
            .minute(startDayjsTime.minute())
            .second(startDayjsTime.second())

          const instanceEnd = instanceStart.add(classDurationMs, 'millisecond')

          // Não criar a primeira instância novamente (já criada como mainClass)
          const startTimeValue = dayjs(start_time)
          if (!instanceStart.isSame(startTimeValue, 'second')) {
            const classInstance = await prisma.class.create({
              data: {
                title,
                description,
                start_time: instanceStart.toDate(),
                end_time: instanceEnd.toDate(),
                instructor_id,
                modality_id,
                max_students,
                is_recurring: false,
                recurrence_id: classRecurrence.id,
              },
            })
            createdClasses.push(classInstance)
          }
        }

        // Avançar para o próximo dia
        currentDayjs = currentDayjs.add(1, 'day')
      }

      return reply.status(201).send({
        classes: createdClasses,
        recurrence: classRecurrence,
        total_instances: createdClasses.length,
      })
    }

    // Criar aula única
    const newClass = await prisma.class.create({
      data: {
        title,
        description,
        start_time,
        end_time,
        instructor_id,
        modality_id,
        max_students,
        is_recurring: false,
        recurrence_id: null,
      },
    })

    return reply.status(201).send({ class: newClass })
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
