import type { Creator } from '../types/creator'
import { creators } from '../data/creators'
import CreatorCard from './CreatorCard'

export default function CreatorGrid({ onOpen }: { onOpen: (c: Creator) => void }) {
  return (
    <section id="creators" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Meet the creators</h2>
      <p className="mt-3 max-w-md text-mute">Pick a creator to see their posts and try a sample conversation.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
        {creators.map((c) => <CreatorCard key={c.id} creator={c} onOpen={onOpen} />)}
      </div>
    </section>
  )
}
