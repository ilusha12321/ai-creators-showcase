import type { Creator } from '../types/creator'
import { creators } from '../data/creators'
import CreatorCard from './CreatorCard'

export default function CreatorGrid({ onOpen }: { onOpen: (c: Creator) => void }) {
  return (
    <section id="creators" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Characters</h2>
          <p className="mt-2 max-w-md text-sm text-mute md:text-base">Open a profile to read their posts and preview a conversation.</p>
        </div>
        <span className="hidden text-sm text-mute md:block">{creators.length} online</span>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
        {creators.map((c) => <CreatorCard key={c.id} creator={c} onOpen={onOpen} />)}
      </div>
    </section>
  )
}