import type { ChatLine } from '../types/creator'

export default function ChatPreview({ lines, name }: { lines: ChatLine[]; name: string }) {
  return (
    <div className="space-y-2.5 rounded-lg border border-line bg-ink/40 p-4">
      {lines.map((l) => {
        const mine = l.from === 'user'
        return (
          <div key={l.text} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${mine ? 'rounded-br-sm bg-accent text-ink' : 'rounded-bl-sm bg-panel text-zinc-100 ring-1 ring-line'}`}>
              {!mine && <span className="mb-0.5 block text-xs font-semibold text-accent">{name}</span>}
              {l.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}
