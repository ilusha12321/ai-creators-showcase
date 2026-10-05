import { useEffect, useRef } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import type { Creator } from '../types/creator'
import { TELEGRAM_URL } from '../config'
import Button from './Button'
import ChatPreview from './ChatPreview'
import PostPreview from './PostPreview'
import Portrait from './Portrait'

export default function CreatorModal({ creator, onClose }: { creator: Creator; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      opener?.focus?.()
    }
  }, [onClose])

  const first = creator.name.split(' ')[0]

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center md:items-center md:p-6" role="dialog" aria-modal="true" aria-label={`${creator.name} profile`}>
      <div className="absolute inset-0 animate-fade bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative flex max-h-[94dvh] w-full animate-sheet flex-col overflow-hidden rounded-t-2xl border border-line bg-panel shadow-2xl shadow-black/60 md:max-h-[88dvh] md:max-w-4xl md:rounded-xl">
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/70 backdrop-blur transition hover:bg-ink active:scale-95">
          <X size={20} />
        </button>
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="md:grid md:grid-cols-[2fr_3fr]">
            <div className="relative md:min-h-[32rem]">
              <Portrait creator={creator} priority className="aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto md:h-full" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 md:hidden">
                <h3 className="text-2xl font-extrabold">{creator.name}</h3>
                <p className="text-sm text-zinc-300">{creator.username}</p>
              </div>
            </div>
            <div className="space-y-7 p-5 md:p-7">
              <div>
                <div className="hidden md:block">
                  <h3 className="text-3xl font-extrabold tracking-tight">{creator.name}</h3>
                  <p className="text-sm text-mute">{creator.username} · {creator.followers} followers</p>
                </div>
                <p className="text-sm text-mute md:hidden">{creator.followers} followers</p>
                <p className="mt-3 w-fit rounded border border-line px-2 py-1 text-xs text-accent">{creator.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{creator.bio}</p>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-mute">Personality</h4>
                <ul className="flex flex-wrap gap-2">
                  {creator.traits.map((t) => <li key={t} className="rounded-md border border-line bg-white/5 px-2.5 py-1 text-xs text-zinc-200">{t}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-mute">Latest posts</h4>
                <ul className="space-y-2.5">{creator.posts.map((p, i) => <PostPreview key={i} post={p} />)}</ul>
              </div>
              <div ref={chatRef} className="scroll-mt-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-mute">Chat preview</h4>
                <ChatPreview lines={creator.chat} creator={creator} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line bg-panel p-4 pb-[max(1rem,env(safe-area-inset-bottom))] min-[480px]:flex-row">
          <Button variant="accent" full onClick={() => chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}><MessageCircle size={16} /> Chat with {first}</Button>
          <Button href={TELEGRAM_URL} variant="secondary" full><Send size={16} /> Continue in Telegram</Button>
        </div>
      </div>
    </div>
  )
}