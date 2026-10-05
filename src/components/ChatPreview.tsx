import { ArrowUp } from 'lucide-react'
import type { ChatLine, Creator } from '../types/creator'
import { TELEGRAM_URL } from '../config'
import Portrait from './Portrait'

const time = (i: number) => {
  const m = 9 * 60 + 41 + i
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`
}

export default function ChatPreview({ lines, creator }: { lines: ChatLine[]; creator: Creator }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink/40">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <Portrait creator={creator} className="h-9 w-9 rounded-full" />
        <div className="leading-tight">
          <p className="text-sm font-semibold">{creator.name}</p>
          <p className="text-xs text-mute">{creator.online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
      <div className="space-y-3 p-4">
        {lines.map((l, i) => {
          const mine = l.from === 'user'
          return (
            <div key={i} className={`flex items-end gap-2 ${mine ? 'justify-end' : 'justify-start'}`}>
              {!mine && <Portrait creator={creator} className="h-7 w-7 shrink-0 rounded-full" />}
              <div className={`max-w-[80%] ${mine ? 'text-right' : ''}`}>
                <div className={`rounded-2xl px-3.5 py-2.5 text-left text-sm leading-relaxed ${mine ? 'rounded-br-sm bg-accent text-ink' : 'rounded-bl-sm bg-panel text-zinc-100 ring-1 ring-line'}`}>{l.text}</div>
                <span className="mt-1 block text-[11px] text-mute">{time(i)}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-2 border-t border-line p-3">
        <input readOnly aria-label="Message preview" placeholder={`Message ${creator.name}…`} className="min-h-11 flex-1 rounded-lg border border-line bg-panel px-3 text-sm placeholder:text-mute" />
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Send in Telegram" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-ink transition hover:brightness-110 active:scale-95">
          <ArrowUp size={18} />
        </a>
      </div>
    </div>
  )
}