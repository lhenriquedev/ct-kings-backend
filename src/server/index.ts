import 'dotenv/config'

import fastify from 'fastify'

import { auth } from '../application/middlewares/auth'
import { makeListUsersControllers } from '../factories/make-list-users.controller'
import { makeSignInController } from '../factories/make-sign-in-controller'
import { makeSignUpController } from '../factories/make-sign-up-controller'
import { routeAdapter } from './adapters/routeAdapter'

const app = fastify()

app.post('/sign-up', routeAdapter(makeSignUpController()))
app.post('/sign-in', routeAdapter(makeSignInController()))

app.get('/users', { preHandler: auth }, routeAdapter(makeListUsersControllers()))

app
	.listen({
		host: '0.0.0.0',
		port: 3001,
	})
	.then(() => {
		console.log('🚀 HTTP server running on http://localhost:3001')
	})
