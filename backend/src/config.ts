import 'dotenv/config'

function required(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing env variable: ${name}`)
  return value
}

export const config = {
  telegramToken: required('TELEGRAM_BOT_TOKEN'),
  aiKey: required('AI_API_KEY'),
  aiModel: process.env.AI_MODEL || 'gemini-2.5-flash',
  port: Number(process.env.PORT) || 3000,
  publicUrl: process.env.PUBLIC_URL?.replace(/\/$/, '') || '',
  webhookSecret: process.env.WEBHOOK_SECRET || '',
}
