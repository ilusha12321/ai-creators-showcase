import { Users } from 'lucide-react'
import type { Creator } from '../types/creator'
import Button from './Button'
import Portrait from './Portrait'

interface Props { creator: Creator; onOpen: (c: Creator) => void }

export default function CreatorCard({ creator, onOpen }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/40">
      <button type="button" onClick={() => onOpen(creator)} aria-label={`Open ${creator.name}'s profile`} className="relative block w-full text-left">
        <Portrait creator={creator} className="aspect-[4/5] w-full" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${creator.online ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
          {creator.online ? 'Online' : 'Offline'}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16">
          <h3 className="text-xl font-bold leading-tight">{creator.name}</h3>
          <p className="text-sm text-zinc-300">{creator.username}</p>
        </div>
      </button>
      <div className="flex flex-1 flex-col p-4">
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-300">{creator.tagline}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-mute">
          <span className="rounded border border-line px-2 py-1 text-accent">{creator.category}</span>
          <span className="inline-flex items-center gap-1"><Users size={13} />{creator.followers}</span>
        </div>
        <Button variant="secondary" full className="mt-4" onClick={() => onOpen(creator)}>View profile</Button>
      </div>
    </article>
  )
}