import { Users } from 'lucide-react'
import type { Creator } from '../types/creator'
import Button from './Button'
import Portrait from './Portrait'

interface Props { creator: Creator; onOpen: (c: Creator) => void }

export default function CreatorCard({ creator, onOpen }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-zinc-600">
      <div className="relative">
        <Portrait creator={creator} className="aspect-[4/5] w-full" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${creator.online ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
          {creator.online ? 'Online' : 'Offline'}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold">{creator.name}</h3>
          <span className="inline-flex items-center gap-1 text-xs text-mute"><Users size={13} />{creator.followers}</span>
        </div>
        <p className="text-sm text-mute">{creator.username}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{creator.tagline}</p>
        <p className="mt-3 w-fit rounded border border-line px-2 py-1 text-xs text-accent">{creator.category}</p>
        <Button variant="secondary" full className="mt-auto" onClick={() => onOpen(creator)}>Смотреть блог</Button>
      </div>
    </article>
  )
}
