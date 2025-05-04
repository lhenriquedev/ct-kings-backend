import { app } from './app'
import { env } from './env'

// Iniciar o servidor depois que a configuração estiver concluída
const start = async () => {
  try {
    // Iniciar o servidor
    await app.listen({
      host: '0.0.0.0',
      port: env.PORT,
    })

    console.log(`HTTP Server Running! http://localhost:${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
