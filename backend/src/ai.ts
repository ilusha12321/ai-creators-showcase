import { config } from './config.js'
import { ALEX_PROMPT } from './persona.js'

interface GeminiResponse {
  candidates?: { content?: { parts?: { text?: string }[] } }[]
  error?: { message?: string }
}

class AIError extends Error {
  constructor(message: string, public status: number) { super(message) }
}

const FALLBACK_MODEL = 'gemini-3.1-flash-lite'
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function callModel(model: string, userText: string): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': config.aiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: ALEX_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: userText }] }],
        generationConfig: { maxOutputTokens: 1000 },
      }),
    },
  )
  const data = (await res.json().catch(() => ({}))) as GeminiResponse
  if (!res.ok) throw new AIError(`AI API ${res.status} (${model}): ${data.error?.message ?? 'no details'}`, res.status)
  const text = (data.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? '').join('').trim()
  if (!text) throw new AIError('AI API returned an empty answer', 0)
  return text
}

export async function askAI(userText: string): Promise<string> {
  let lastError: unknown
  for (const model of [config.aiModel, FALLBACK_MODEL]) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        return await callModel(model, userText)
      } catch (e) {
        lastError = e
        const retryable = e instanceof AIError && (e.status === 503 || e.status === 429)
        if (!retryable) break
        await sleep(1500 * (attempt + 1))
      }
    }
  }
  throw lastError
}