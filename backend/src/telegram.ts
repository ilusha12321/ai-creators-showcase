import { config } from './config.js'
import { askAI } from './ai.js'
import { ERROR_TEXT, GREETING } from './persona.js'

export interface Update {
  update_id: number
  message?: { chat: { id: number }; text?: string }
}

async function tg<T>(method: string, body: object = {}): Promise<T> {
  const res = await fetch(`https://api.telegram.org/bot${config.telegramToken}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = (await res.json()) as { ok: boolean; result: T; description?: string }
  if (!data.ok) throw new Error(`Telegram ${method} failed: ${data.description ?? res.status}`)
  return data.result
}

const send = (chatId: number, text: string) =>
  tg('sendMessage', { chat_id: chatId, text: text.slice(0, 4096) })

export async function handleUpdate(update: Update): Promise<void> {
  const msg = update.message
  if (!msg?.text) return
  const chatId = msg.chat.id
  try {
    if (msg.text.startsWith('/start')) {
      await send(chatId, GREETING)
      return
    }
    await tg('sendChatAction', { chat_id: chatId, action: 'typing' })
    const answer = await askAI(msg.text.slice(0, 1000))
    await send(chatId, answer)
  } catch (e) {
    console.error('Update failed:', e instanceof Error ? e.message : 'unknown error')
    await send(chatId, ERROR_TEXT).catch(() => {})
  }
}

export async function setWebhook(url: string, secret: string) {
  await tg('setWebhook', { url, ...(secret ? { secret_token: secret } : {}), allowed_updates: ['message'] })
}

export async function startPolling(): Promise<void> {
  await tg('deleteWebhook')
  let offset = 0
  for (;;) {
    try {
      const updates = await tg<Update[]>('getUpdates', { offset, timeout: 30, allowed_updates: ['message'] })
      for (const u of updates) {
        offset = u.update_id + 1
        void handleUpdate(u)
      }
    } catch (e) {
      console.error('Polling error:', e instanceof Error ? e.message : 'unknown error')
      await new Promise((r) => setTimeout(r, 3000))
    }
  }
}