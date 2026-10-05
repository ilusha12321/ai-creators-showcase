import express from 'express'
import { config } from './config.js'
import { handleUpdate, setWebhook, startPolling, type Update } from './telegram.js'

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => res.json({ ok: true }))

app.post('/telegram/webhook', (req, res) => {
  if (config.webhookSecret && req.get('x-telegram-bot-api-secret-token') !== config.webhookSecret) {
    res.sendStatus(401)
    return
  }
  res.sendStatus(200)
  void handleUpdate(req.body as Update)
})

app.listen(config.port, async () => {
  console.log(`Backend listening on port ${config.port}`)
  try {
    if (config.publicUrl) {
      await setWebhook(`${config.publicUrl}/telegram/webhook`, config.webhookSecret)
      console.log('Mode: webhook')
    } else {
      console.log('Mode: polling (PUBLIC_URL is empty)')
      await startPolling()
    }
  } catch (e) {
    console.error('Bot startup failed:', e instanceof Error ? e.message : 'unknown error')
    process.exit(1)
  }
})