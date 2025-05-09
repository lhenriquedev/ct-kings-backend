import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { authRoutes } from './routes/auth'
import { checkInRoutes } from './routes/check-ins'
import { classRoutes } from './routes/classes'
import { modalityRoutes } from './routes/modalities'
import { userRoutes } from './routes/users'

export const app = fastify({
  logger: true,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)
app.register(fastifyCors, {
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://ct-kings-web.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
})

// Registro de rotas
app.register(authRoutes, { prefix: '/auth' })
app.register(userRoutes)
app.register(modalityRoutes)
app.register(classRoutes)
app.register(checkInRoutes)

// Rota de healthcheck
app.get('/health', async () => {
  return { status: 'ok' }
})
